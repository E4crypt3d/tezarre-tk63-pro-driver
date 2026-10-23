#!/usr/bin/env bash
# Rebuild the 2022 native modules against Electron 6 (Node 12 / ABI 73).
#
# `.npmrc` sets ignore-scripts=true so `npm install` can finish on a modern
# Node. That means Electron's binary and the native addons are never built by
# npm itself. Run this once after `npm install` if you want to start the app.
set -euo pipefail

cd "$(dirname "$0")/.."

ELECTRON_VERSION="$(node -p "require('./node_modules/electron/package.json').version")"
DIST_URL="https://electronjs.org/headers"
PLATFORM="$(node -p process.platform)"
ARCH="$(node -p process.arch)"
ELECTRON_TAG="electron-v$(node -p "require('./node_modules/electron/package.json').version.split('.').slice(0, 2).join('.')")"
NODE_GYP="./node_modules/.bin/node-gyp"

if [ ! -x "$NODE_GYP" ]; then
  echo "error: node-gyp not found. Run 'npm install' first." >&2
  exit 1
fi

# 1. Electron binary (its postinstall script is disabled by .npmrc).
if [ ! -f node_modules/electron/path.txt ]; then
  echo "==> downloading Electron $ELECTRON_VERSION"
  node node_modules/electron/install.js
fi

# 2. sqlite3 4.2.0's build step shells out to `python` (Python 2 era call).
#    The script itself is Python 3 compatible, so provide a shim.
PYTHON_SHIM="$(mktemp -d)"
trap 'rm -rf "$PYTHON_SHIM"' EXIT
ln -sf "$(command -v python3)" "$PYTHON_SHIM/python"
export PATH="$PYTHON_SHIM:$PATH"

build() {
  local dir="$1"
  shift
  echo "==> building $dir for Electron $ELECTRON_VERSION"
  "$NODE_GYP" rebuild \
    --directory="$dir" \
    --target="$ELECTRON_VERSION" \
    --dist-url="$DIST_URL" \
    -- -Dopenssl_fips= "$@"
}

# usb 1.6.3 bundles libusb. use_udev=0 avoids requiring libudev headers.
build node_modules/usb -Duse_udev=0

# sqlite3 keeps its binding under lib/binding/<runtime>-<platform>-<arch>.
build node_modules/sqlite3 \
  -Dmodule_name=node_sqlite3 \
  -Dmodule_path="lib/binding/${ELECTRON_TAG}-${PLATFORM}-${ARCH}"

# Only used by the Windows HID path, but required at module load on every OS.
build node_modules/ffi-napi
build node_modules/ref-napi
build node_modules/ref-array-napi/node_modules/ref-napi

echo "==> done. Start the app with: npm start"
