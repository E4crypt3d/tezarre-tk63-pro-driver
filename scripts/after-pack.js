// electron-builder afterPack hook (Windows).
//
// electron-builder cannot edit the executable of this app itself: Electron 6
// predates the PE layout that app-builder-lib's resource editor supports, and
// it aborts with "After Resource section, sections except for relocation are
// not supported". rcedit talks to the Win32 resource APIs instead and handles
// the old image, so the icon and version metadata are applied here.
//
// rcedit is not a dependency of the app (the 2022 dependency tree must stay
// untouched). Install it next to electron-builder and point PACKAGING_TOOLS at
// that directory; `require.resolve('rcedit')` is used as a fallback.

const fs = require('fs')
const path = require('path')

function loadRcedit(projectDir) {
  if (process.env.PACKAGING_TOOLS) {
    const toolPath = path.join(process.env.PACKAGING_TOOLS, 'node_modules', 'rcedit')
    if (fs.existsSync(toolPath)) return require(toolPath)
  }

  try {
    return require(require.resolve('rcedit', { paths: [projectDir] }))
  } catch (error) {
    throw new Error(
      'rcedit is required to set the Windows executable metadata. Install it and set ' +
        'PACKAGING_TOOLS to the directory that contains node_modules/rcedit. ' +
        `(${error.message})`,
    )
  }
}

module.exports = async function afterPack(context) {
  if (context.electronPlatformName !== 'win32') return

  const projectDir = context.packager.projectDir
  const productName = context.packager.appInfo.productFilename
  const exePath = path.join(context.appOutDir, `${productName}.exe`)
  const iconPath = path.join(projectDir, 'build', 'icon.ico')

  if (!fs.existsSync(exePath)) {
    throw new Error(`afterPack: executable not found at ${exePath}`)
  }
  if (!fs.existsSync(iconPath)) {
    throw new Error(`afterPack: icon not found at ${iconPath}`)
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), 'utf8'))
  const version = pkg.version
  const author = typeof pkg.author === 'string' ? pkg.author : (pkg.author && pkg.author.name) || ''

  console.log(`  • applying icon and version metadata to ${productName}.exe (${version})`)
  await loadRcedit(projectDir)(exePath, {
    icon: iconPath,
    'file-version': version,
    'product-version': version,
    'version-string': {
      CompanyName: author,
      FileDescription: pkg.description || productName,
      FileVersion: version,
      InternalName: productName,
      OriginalFilename: `${productName}.exe`,
      ProductName: productName,
      ProductVersion: version,
    },
  })
}
