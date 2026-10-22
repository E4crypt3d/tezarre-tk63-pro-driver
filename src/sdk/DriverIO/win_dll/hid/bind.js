/* Recovered from Tezarre Driver 1.1.31 - renderer module HnWx */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, o) {
          (void 0 === o && (o = i),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, o) {
          (void 0 === o && (o = i), (e[o] = t[i]));
        }),
  t =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  i =
    (this && this.__importStar) ||
    function (i) {
      if (i && i.__esModule) return i;
      var o = {};
      if (null != i) for (var n in i) 'default' !== n && Object.hasOwnProperty.call(i, n) && e(o, i, n);
      return (t(o, i), o);
    },
  o =
    (this && this.__awaiter) ||
    function (e, t, i, o) {
      return new (i || (i = Promise))(function (n, r) {
        function u(e) {
          try {
            a(o.next(e));
          } catch (t) {
            r(t);
          }
        }
        function s(e) {
          try {
            a(o.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function a(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(u, s);
        }
        a((o = o.apply(e, t || [])).next());
      });
    },
  n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.hid_win = void 0));
const r = i(require('ref-napi')),
  u = i(require('ffi-napi')),
  s = require('ref-struct-napi'),
  a = require('ref-array-napi'),
  d = n(require('./hid32.dll.js')),
  c = i(require('path')),
  l = i(require('fs')),
  f = require('electron'),
  v = a('char', 125),
  h = s({
    VendorID: 'ushort',
    ProductID: 'ushort',
    VersionNumber: 'ushort',
    DevicePath: v,
    DeviceName: v,
    usage: 'ushort',
    usagePage: 'ushort',
    featureReportByteLength: 'ushort',
  }),
  y = a(h),
  p = r.refType(y);
let g;
const D = a('uchar', 128),
  b = r.refType(D),
  m = u.Function('void', [b, 'uint']);
var P;
!(function (e) {
  ((e.init = () => {
    const t = f.remote.app.getPath('userData'),
      i = c.join(t, 'dll');
    return (
      l.existsSync(i) &&
        l.readdirSync(i).forEach((e) => {
          (console.error(e),
            e.includes('.dll') &&
              e.includes('hid') &&
              (l.copyFileSync(
                c.join(i, e),
                c.join(require('path').resolve(__dirname, '../../../../../dist'), e),
              ),
              l.unlinkSync(c.join(i, e))));
        }),
      (g = u.Library(c.join(require('path').resolve(__dirname, '../../../../../dist'), d.default), {
        getSystemHid: ['bool', [p, 'ushort', 'ushort *']],
        initDevice: ['void *', ['ushort', 'ushort', 'ushort', 'ushort']],
        initDevice2: ['void *', ['ushort', 'ushort', 'ushort', 'ushort', 'ushort']],
        initDevice3: ['void *', ['string']],
        initDevice4: ['void *', ['string']],
        destroyDevice: ['bool', ['void *']],
        sendFeature: ['bool', ['void *', 'byte *', 'uint']],
        readFeature: ['bool', ['void *', 'byte *', 'uint *']],
        sendFeature1: ['bool', ['void *', 'byte *', 'uint']],
        readFeature1: ['bool', ['void *', 'byte *', 'uint']],
        writeData: ['bool', ['void *', 'byte *', 'uint', 'uint *']],
        readData: ['bool', ['void *', 'byte *', 'uint', 'uint *']],
        sendOutputReport: ['bool', ['void *', 'ushort', 'byte *', 'uint']],
        readInputReport: ['bool', ['void *', 'ushort', 'byte *', 'uint']],
        syncReadData1: ['void *', ['string', 'ushort', 'ushort', m]],
        asyncReadData1: ['void', ['string', 'ushort', 'ushort']],
        getBuffer1: ['int', ['byte **']],
        stopReadData: ['void', ['void *']],
      })),
      e
    );
  }),
    (e.getSystemHid = () =>
      o(this, void 0, void 0, function* () {
        return new Promise((e, t) => {
          const i = r.alloc('ushort'),
            o = Buffer.alloc(52 * h.size).fill(0),
            n = r.alloc(a(h), o);
          g.getSystemHid.async(n, 52, i, (o, u) => {
            o && t(o);
            const s = r.deref(n),
              d = a('char'),
              c = new Array();
            for (let e = 0; e < r.deref(i); e++) {
              const t = d.untilZeros(s[e].DevicePath.buffer).buffer.toString(),
                i = d.untilZeros(s[e].DeviceName.buffer).buffer.toString(),
                o = {
                  vid: s[e].VendorID,
                  pid: s[e].ProductID,
                  versionNumber: s[e].VersionNumber,
                  DevicePath: t,
                  DeviceName: i,
                  usage: s[e].usage,
                  usagePage: s[e].usagePage,
                  featureReportByteLength: s[e].featureReportByteLength,
                };
              c.push(o);
            }
            e(c);
          });
        });
      })),
    (e.openHidDevice = (e, t, i, n) =>
      o(this, void 0, void 0, function* () {
        return new Promise((o, r) => {
          g.initDevice.async(e, t, i, n, (e, t) => {
            (e && r(e), o(t));
          });
        });
      })),
    (e.openHidDevice2 = (e, t, i, n, r) =>
      o(this, void 0, void 0, function* () {
        return new Promise((o, u) => {
          g.initDevice2.async(e, t, i, n, r, (e, t) => {
            (e && u(e), o(t));
          });
        });
      })),
    (e.openHidDevice3 = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          g.initDevice3.async(e, (e, o) => {
            (e && i(e), t(o));
          });
        });
      })),
    (e.openHidDevice4 = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          g.initDevice4.async(e, (e, o) => {
            (e && i(e), t(o));
          });
        });
      })),
    (e.destroyDevice = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          g.destroyDevice.async(e, (e, o) => {
            (e && i(e), t(o));
          });
        });
      })),
    (e.writeData = (e, t) =>
      o(this, void 0, void 0, function* () {
        return new Promise((i, o) => {
          const n = Buffer.alloc(4).fill(0);
          ((t = Buffer.from([0, ...t])),
            g.writeData.async(e, t, t.length, n, (e, r) => {
              e && o(e);
              const u = n.readUInt32LE(0);
              (u !== t.length && console.log('实际写入 不相符', u), i(r));
            }));
        });
      })),
    (e.readData = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          const o = Buffer.alloc(2e3).fill(0),
            n = Buffer.alloc(4).fill(0);
          g.readData.async(e, o, o.length, n, (e, r) => {
            (e && i(e), r || t(void 0), t(o.slice(1, n.readUInt32LE(0))));
          });
        });
      })),
    (e.sendFeature = (e, t) =>
      o(this, void 0, void 0, function* () {
        return new Promise((i, o) => {
          g.sendFeature.async(e, t, t.length, (e, t) => {
            (e && o(e), t || i(!1), i(t));
          });
        });
      })),
    (e.readFeature = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          const o = Buffer.alloc(2e3).fill(0),
            n = Buffer.alloc(4).fill(0);
          g.readFeature.async(e, o, n, (e, r) => {
            (e && i(e), r || t(void 0), t(o.slice(0, n.readInt32LE(0))));
          });
        });
      })),
    (e.sendFeature1 = (e, t) =>
      o(this, void 0, void 0, function* () {
        return new Promise((i, o) => {
          g.sendFeature1.async(e, Buffer.from([0, ...t]), t.length + 1, (e, t) => {
            (e && o(e), t || i(!1), i(t));
          });
        });
      })),
    (e.readFeature1 = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          const o = Buffer.alloc(65).fill(0);
          g.readFeature1.async(e, o, o.length, (e, n) => {
            (e && i(e), n || t(void 0), t(o.slice(1, o.length)));
          });
        });
      })),
    (e.sendOutputReport = (e, t, i) =>
      o(this, void 0, void 0, function* () {
        return new Promise((o, n) => {
          g.sendOutputReport.async(e, t, i, i.length, (e, t) => {
            (e && n(e), t || o(!1), o(t));
          });
        });
      })),
    (e.readInputReport = (e, t) =>
      o(this, void 0, void 0, function* () {
        return new Promise((i, o) => {
          const n = Buffer.alloc(2e3).fill(0);
          g.readInputReport.async(e, t, n, n.length, (e, t) => {
            (e && o(e), t || i(void 0), i(n));
          });
        });
      })));
  (r.alloc('bool', !1), r.alloc('uint', 0));
  const t = Buffer.alloc(10).fill(0),
    i = r.alloc(r.refType('byte *'), t);
  ((e.asyncReadData1 = (e, t, n, u) =>
    o(this, void 0, void 0, function* () {
      return new Promise((s, a) => {
        g.asyncReadData1.async(e, t, n, (e) =>
          o(this, void 0, void 0, function* () {
            (e && a(e),
              setInterval(() => {
                let e = g.getBuffer1(i);
                if (0 === e) return;
                const t = r.deref(i);
                u(t, e);
              }, 1),
              s());
          }),
        );
      });
    })),
    (e.stopReadData = (e) =>
      o(this, void 0, void 0, function* () {
        return new Promise((t, i) => {
          g.stopReadData.async(e, (e) => {
            (e && i(e), t());
          });
        });
      })),
    (e.test = () =>
      o(this, void 0, void 0, function* () {
        const t = yield e.getSystemHid();
        (console.log(t),
          t.forEach((t) =>
            o(this, void 0, void 0, function* () {
              const i = yield e.openHidDevice(t.vid, t.pid, t.usage, t.usagePage);
              console.log(i.isNull());
              const o = yield e.destroyDevice(i);
              console.log(o);
            }),
          ));
      })));
})((P = exports.hid_win || (exports.hid_win = {})));
