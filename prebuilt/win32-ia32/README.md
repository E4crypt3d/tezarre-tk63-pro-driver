# Prebuilt native addons — win32-ia32

Compiled against **Electron 6.0.10 (Node 12 / ABI 73)**, 32-bit Windows.

| File                 | Installed to                                                     |
| -------------------- | ---------------------------------------------------------------- |
| `node_sqlite3.node`  | `node_modules/sqlite3/lib/binding/electron-v6.0-win32-ia32/`      |
| `usb_bindings.node`  | `node_modules/usb/build/Release/`                                |

`ffi-napi` and `ref-napi` do not need entries here: they ship Node-API prebuilds for
`win32-ia32` in their npm packages, and `ref-array-napi` uses the same `ref-napi` via the
`overrides` entry in `package.json`.

Install them without a C++ toolchain:

```powershell
npm install
npm run prebuilt:windows   # downloads Electron ia32, copies these files into node_modules
npm start
```

To rebuild from source instead (requires Python 3 and the VS C++ workload):

```powershell
npm run rebuild:native:windows
```

The binaries are tied to Electron 6 / ABI 73 and to the 32-bit architecture. They are kept small
(~2.9 MB combined) so they can live in the repo; the Electron runtime itself is not committed
because it is ~55 MB compressed.
