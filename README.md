# Tezarre TK-63 Pro Driver — recovered source

Unofficial, community-recovered source code for the **Tezarre Driver 1.1.31** (2022) Electron app
used to configure the Tezarre TK-63 Pro keyboard (SONiX-based, `VID_1D57` / `PID_FA60`).

The vendor never published the source and the original download/server is gone, so this project
reconstructs it from the shipped Parcel bundles. It is published for preservation, interoperability
and future maintenance.

GitHub: https://github.com/E4crypt3d/tezarre-tk63-pro-driver

> **Disclaimer:** not affiliated with Tezarre or rongyuan. All original code, branding and assets
> remain the property of their respective owners. No warranty; use at your own risk.

## Status

Verified working with the original 2022 runtime:

* device detection and protocol handshake
* key remapping / Fn layer
* lighting and effects
* macros, profiles, per-app profiles
* settings persisted to SQLite, survives restarts

## Layout

```
src/
  main/             Electron main process. Entry: src/main/index.js
  renderer/         UI (React 16 + MobX 5). Entry: src/renderer/index.js
  sdk/              device SDK (USB/HID transport, protocol drivers)
  DriverIO/         device protocol implementations
  UI/               shared widget kit ("dj")
  unitys/           helpers
res/                keyboard/lighting layouts used by device definitions
sdk/                shared SDK pieces used from the renderer side
unitys/             shared renderer helpers
supportDev.js       supported-device table
supportYC200Dev.js
supportYZWDev.js
company/            branding + per-company CONFIG.json
dist/               runtime assets: hashed PNGs and hid32.*.dll
index.html          renderer host page
package.json
```

The mixed `src/…` + root-level `res/`, `sdk/`, `unitys/`, `support*Dev.js` layout is how the
original project was organised; the relative imports are kept as-is.

## Running

The app is Electron **6.0.10** (Node 12 / ABI 73). It depends on native modules
(`usb`, `ffi-napi`, `sqlite3`) that must be built for that ABI.

```bash
npm install              # Node 18+ (tested with 20, 22 and 24)
npm run rebuild:native   # once: builds the natives for Electron 6 (ABI 73)
npm start
```

`npm install` works on a modern Node with no extra flags. Three things make that possible:

* `.npmrc` sets `ignore-scripts=true`. Dependency lifecycle scripts are skipped, because the 2022
  native modules only build for Electron 6 / ABI 73 and compiling them against a modern system Node
  aborts the install. `npm run rebuild:native` then downloads the Electron binary and builds
  `usb` and `sqlite3` against the Electron 6 headers instead.
* `typeorm` is pinned to `0.2.25`. Later `0.2.x` releases declare `sqlite3@^5` as a peer, which
  conflicts with the `sqlite3@4` the app actually runs on (npm aborts with `ERESOLVE`).
* `ref-array-napi` declares `ref-napi@^3.0.1`, so npm installs a second, nested `ref-napi`. That
  nested build has no usable binary when lifecycle scripts are skipped and either spins forever or
  throws `Could not locate the bindings file` on `require`. The `overrides` entry in `package.json`
  pins it to the same `ref-napi@1.5.2` used everywhere else, which ships Node-API prebuilds, so the
  tree contains a single copy.

`rebuild:native` is a cross-platform entry point (`scripts/rebuild-native.js`) that dispatches to
the platform script:

| Platform      | Script                       | Requirements                                                       |
| ------------- | ---------------------------- | ------------------------------------------------------------------ |
| Linux / macOS | `scripts/rebuild-native.sh`  | `bash`, `python3`; on Linux it builds `usb` without libudev        |
| Windows       | `scripts/rebuild-native.ps1` | PowerShell 5.1+, Python 3, VS Build Tools with the C++ workload   |

The platform scripts can also be run directly with `npm run rebuild:native:unix` and
`npm run rebuild:native:windows`. They download the Electron binary — re-downloading it when the
architecture does not match — then build `sqlite3` and `usb` against the Electron 6 headers.
`ffi-napi` and `ref-napi` ship Node-API prebuilds that Electron 6 can load, so they are only
compiled when no prebuild is present. This replaces the previous advice of copying `node_modules`
out of the original installer.

If you only want to run the app on Windows and do not need a C++ toolchain, the repo includes the
32-bit addons in `prebuilt/win32-ia32/` (~2.9 MB):

```powershell
npm install
npm run prebuilt:windows   # downloads the Electron ia32 runtime, copies the addons
npm start
```

The Electron runtime itself (~55 MB compressed) is not committed and is downloaded on first use.

### Windows notes

* **The app runs as 32-bit Electron.** `dist/hid32.*.dll` is an x86 DLL, and ffi-napi fails with
  `Dynamic Linking Error: Win32 error 193` (bad executable format) when a 64-bit Electron tries to
  load it — the window opens but stays black. `npm run rebuild:native:windows` therefore downloads
  `electron-v6.0.10-win32-ia32` and builds the addons with `--arch=ia32`. Use `-Arch x64` only if
  you supply a 64-bit build of the DLL.
* The script needs Python 3 and the Visual Studio Build Tools with the **Desktop development with
  C++** workload. Run it from PowerShell; Git Bash/WSL is not required.
* If a `dll` folder exists under `%APPDATA%\Tezarre Driver`, its `hid*.dll` files are copied over
  `dist/` at startup (the original in-app updater path).
* Only one instance can run. `npm start` exits immediately, with no window and no error, while
  another copy is alive — including a hidden tray instance. Check with `Get-Process electron` before
  assuming startup is broken.
* DevTools are opt-in with `$env:TEZARRE_DEVTOOLS=1`. Electron 6 never emits `ready-to-show` when
  DevTools is opened while the window is still hidden, which made source runs produce no window at
  all; the window is now shown first and DevTools opens afterwards.

Verified on Windows 11 x64 with the ia32 build: the UI renders (v1.1.31, firmware V302) and the
SQLite store initialises. On Linux, the UI, SQLite storage and USB enumeration were verified the
same way. Windows uses the `dist/hid32.*.dll` HID path. Linux takes the macOS libusb path
(`MacUSB`): the device is detected and opened, but the firmware handshake (`whoAmI`) currently
returns an invalid id, so the UI stays on "Searching Device". Windows remains the supported path
for actually configuring the keyboard.

### Linux permissions

On Linux the app opens the keyboard with libusb. Without a udev rule `device.open()` fails with
`LIBUSB_ERROR_ACCESS`. The rule must be numbered **before** `73-seat-late.rules`, otherwise
systemd-logind's `uaccess` builtin has already run and the ACL is never applied:

```bash
sudo cp scripts/70-tezarre.rules /etc/udev/rules.d/70-tezarre.rules
sudo udevadm control --reload-rules && sudo udevadm trigger
# then unplug/replug the keyboard
```

`dist/` is **required at runtime** (not a build output you can delete): the asset modules export
names such as `/normal.0320e68b.png`, and code resolves them against `dist/` via `__dirname`.
The `hid32.*.dll` next to them is loaded through `ffi-napi`.

User data lives in `%APPDATA%\Tezarre Driver` (`db` is a SQLite database with profiles, macros and
settings). `TEZARRE_PORTABLE=1` is a small addition in `src/main/index.js` that keeps user data in a
`UserData` folder next to the executable instead.

### Changes to the recovered code

Everything below is a deliberate, minimal deviation from the recovered 2022 source. The device
protocol and UI code are untouched.

* `src/main/index.js` — the dev-only `openDevTools()` call was moved from window creation into the
  `ready-to-show` handler and is gated behind `TEZARRE_DEVTOOLS=1`. On Electron 6, opening DevTools
  while the window is hidden suppresses `ready-to-show`, so an unpackaged run never showed a window.
* `package.json` — added the `rebuild:native` scripts, the `prebuilt:windows` script, and the
  `ref-array-napi` → `ref-napi@1.5.2` override described above.
* `.npmrc` — `ignore-scripts=true` so `npm install` can complete on modern Node; the build steps are
  moved into the platform rebuild scripts.
* `scripts/rebuild-native.js`, `scripts/rebuild-native.ps1` — cross-platform and Windows rebuild
  entry points. `prebuilt/win32-ia32/` holds the 32-bit addons compiled for Electron 6.

## How it was recovered

The shipped app contained two minified Parcel v1 bundles and no source maps:

* `resources/app/dist/main.js` — 320 modules (main process)
* `resources/app/dist/index.js` — 912 modules (renderer)

Each Parcel module table entry was parsed with Acorn and split into an individual CommonJS file,
rebuilding the folder tree from the original dependency keys. `require()` calls were rewritten to
the recovered paths and every file was formatted with Prettier.

Two things needed special handling:

* **`__dirname`** — inside a Parcel bundle every module shares the bundle's directory (`dist`).
  Recovered modules now use `require("path").resolve(__dirname, "<relative path to dist>")`
  wherever the original used `__dirname`, preserving asset/DLL/loading behaviour.
* **Dynamic `require()`** — `CurrentCompany.json` and `CONFIG.json` are required through computed
  paths in `appConfig.js` and `UI/utils/changeLanguage.js`; those were pointed at the app root
  explicitly.

Nothing else was changed semantically.

### Limitations

* Identifiers are still minified (`e`, `t`, `n`, …). Structure, imports, exports, strings and
  control flow are intact; original names, comments and TypeScript types were lost in the 2022 build.
* Shared modules that were bundled into both bundles appear once under `src/main`/`src/renderer`
  and once in the shared root folders.
* The old in-app updater (`UI/Components/support/*`, `WebService.js`) targets a dead server and
  assumes the old packed `dist.zip` layout. It is legacy — do not rely on it.
* Hashed asset filenames are preserved; there are no pre-hash originals.

## Credits

Original driver © rongyuan / Tezarre. Recovered and documented for the community.

## Support

* Origin repository (community recovery, active development):
  https://github.com/E4crypt3d/tezarre-tk63-pro-driver

