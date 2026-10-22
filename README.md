# Tezarre TK-63 Pro Driver — recovered source

Unofficial, community-recovered source code for the **Tezarre Driver 1.1.31** (2022) Electron app
used to configure the Tezarre TK-63 Pro keyboard (SONiX-based, `VID_1D57` / `PID_FA60`).

The vendor never published the source and the original download/server is gone, so this project
reconstructs it from the shipped Parcel bundles. It is published for preservation, interoperability
and future maintenance.

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
npm install          # with Node 12 + working native build toolchain
npm start
```

`npm install` on a modern Node will almost certainly fail while building the 2022 native
dependencies. The practical way to run it is to use the `node_modules` folder that shipped with the
original installer, or to rebuild the native modules against Electron 6 on Node 12.

`dist/` is **required at runtime** (not a build output you can delete): the asset modules export
names such as `/normal.0320e68b.png`, and code resolves them against `dist/` via `__dirname`.
The `hid32.*.dll` next to them is loaded through `ffi-napi`.

User data lives in `%APPDATA%\Tezarre Driver` (`db` is a SQLite database with profiles, macros and
settings). `TEZARRE_PORTABLE=1` is a small addition in `src/main/index.js` that keeps user data in a
`UserData` folder next to the executable instead.

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
