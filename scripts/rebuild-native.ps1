# Rebuild the 2022 native modules against Electron 6 (Node 12 / ABI 73) on Windows.
#
# Windows counterpart of scripts/rebuild-native.sh. `.npmrc` sets
# ignore-scripts=true so `npm install` can finish on a modern Node, which means
# Electron's binary and the native addons are never built by npm itself. Run
# this once after `npm install` if you want to start the app.
#
# Windows builds are 32-bit on purpose: the vendor HID bridge in
# dist/hid32.*.dll is an x86 DLL, and ffi-napi cannot load it into a 64-bit
# Electron process (Win32 error 193).
#
# Usage: npm run rebuild:native:windows   (compile from source)
#        npm run prebuilt:windows         (copy prebuilt/win32-ia32)
[CmdletBinding()]
param(
    # Target architecture for Electron and the native addons.
    [ValidateSet('ia32', 'x64')]
    [string]$Arch = 'ia32',

    # Skip the Electron binary download (useful if already installed).
    [switch]$SkipElectron,

    # Copy the committed addons from prebuilt/ instead of compiling them.
    [switch]$Prebuilt
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$root = Split-Path -Parent $PSScriptRoot
Push-Location $root

function Get-PeMachine {
    param([Parameter(Mandatory)][string]$Path)

    $bytes = [IO.File]::ReadAllBytes((Resolve-Path $Path))
    $peOffset = [BitConverter]::ToInt32($bytes, 0x3c)
    return [BitConverter]::ToUInt16($bytes, $peOffset + 4)
}

try {
    $node = (Get-Command node -ErrorAction SilentlyContinue).Source
    if (-not $node) {
        throw "node not found in PATH. Install Node.js first."
    }

    $nodeGyp = 'node_modules/node-gyp/bin/node-gyp.js'
    if (-not (Test-Path $nodeGyp)) {
        throw "node-gyp not found. Run 'npm install' first."
    }

    # node-gyp needs Python and the MSVC toolchain.
    $python = @('python', 'python3', 'py') |
        ForEach-Object { Get-Command $_ -ErrorAction SilentlyContinue } |
        Select-Object -First 1
    if (-not $python) {
        throw "Python not found in PATH. node-gyp needs Python 3 to configure the builds."
    }

    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $vsPath = & $vswhere -latest -products * `
            -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 `
            -property installationPath 2>$null
        if (-not $vsPath) {
            Write-Warning "No Visual Studio C++ build tools found. Install 'Desktop development with C++' or the 'MSVC v143' workload."
        }
    }
    else {
        Write-Warning "vswhere not found; assuming the Visual Studio C++ build tools are installed."
    }

    $electronVersion = (Get-Content 'node_modules/electron/package.json' -Raw | ConvertFrom-Json).version
    $electronTag = 'electron-v' + ((($electronVersion -split '\.')[0..1]) -join '.')

    # 1. Electron binary (its postinstall script is disabled by .npmrc).
    #    Re-download when the installed binary targets the wrong architecture.
    $electronExe = 'node_modules/electron/dist/electron.exe'
    $needDownload = -not (Test-Path 'node_modules/electron/path.txt') -or -not (Test-Path $electronExe)
    if (-not $needDownload) {
        $expectedMachine = if ($Arch -eq 'ia32') { 0x014c } else { 0x8664 }
        $needDownload = (Get-PeMachine $electronExe) -ne $expectedMachine
    }

    if ($needDownload -and -not $SkipElectron) {
        Write-Host "==> downloading Electron $electronVersion (win32-$Arch)"
        # electron-download reads the target architecture from these variables.
        $env:npm_config_arch = $Arch
        $env:npm_config_platform = 'win32'
        if (Test-Path 'node_modules/electron/dist') {
            Remove-Item -Recurse -Force 'node_modules/electron/dist'
        }
        & $node 'node_modules/electron/install.js'
        if ($LASTEXITCODE -ne 0) {
            throw "Electron download failed (exit $LASTEXITCODE)."
        }
    }

    # Invoke node-gyp through `node` rather than the .cmd shim: PowerShell ->
    # cmd.exe argument re-parsing splits values such as
    # `-Dmodule_path=lib/binding/electron-v6.0-win32-ia32` at the dot.
    function Invoke-GypBuild {
        param(
            [Parameter(Mandatory)][string]$Directory,
            [string[]]$Defines = @()
        )

        Write-Host "==> building $Directory for Electron $electronVersion (win32-$Arch)"
        $gypArgs = @(
            $nodeGyp, 'rebuild',
            "--directory=$Directory",
            "--target=$electronVersion",
            "--arch=$Arch",
            '--dist-url=https://electronjs.org/headers',
            '--',
            '-Dopenssl_fips='
        ) + $Defines

        & $node @gypArgs
        if ($LASTEXITCODE -ne 0) {
            throw "node-gyp failed for $Directory (exit $LASTEXITCODE)."
        }
    }

    if ($Prebuilt) {
        $prebuiltDir = "prebuilt/win32-$Arch"
        $sqliteSource = Join-Path $prebuiltDir 'node_sqlite3.node'
        $usbSource = Join-Path $prebuiltDir 'usb_bindings.node'
        foreach ($file in @($sqliteSource, $usbSource)) {
            if (-not (Test-Path $file)) {
                throw "Missing $file. Run 'npm run rebuild:native:windows' to compile the addons."
            }
        }

        $sqliteDest = "node_modules/sqlite3/lib/binding/$electronTag-win32-$Arch"
        $usbDest = 'node_modules/usb/build/Release'
        New-Item -ItemType Directory -Force -Path $sqliteDest, $usbDest | Out-Null
        Copy-Item $sqliteSource (Join-Path $sqliteDest 'node_sqlite3.node') -Force
        Copy-Item $usbSource (Join-Path $usbDest 'usb_bindings.node') -Force
        Write-Host "==> installed prebuilt addons from $prebuiltDir"
    }
    else {
        # usb 1.6.3 bundles libusb; Windows has no udev dependency to disable.
        Invoke-GypBuild -Directory 'node_modules/usb'

        # sqlite3 keeps its binding under lib/binding/<runtime>-<platform>-<arch>.
        Invoke-GypBuild -Directory 'node_modules/sqlite3' -Defines @(
            '-Dmodule_name=node_sqlite3',
            "-Dmodule_path=lib/binding/$electronTag-win32-$Arch"
        )
    }

    # ffi-napi/ref-napi ship Node-API prebuilds that Electron 6 can load, so
    # only compile them when a matching prebuild is missing. (ref-array-napi is
    # pure JS and needs no build.)
    foreach ($module in @('ffi-napi', 'ref-napi')) {
        $prebuild = "node_modules/$module/prebuilds/win32-$Arch/electron.napi.node"
        if (Test-Path $prebuild) {
            Write-Host "==> using shipped prebuild for $module ($prebuild)"
        }
        else {
            Invoke-GypBuild -Directory "node_modules/$module"
        }
    }

    Write-Host '==> done. Start the app with: npm start'
}
finally {
    Pop-Location
}
