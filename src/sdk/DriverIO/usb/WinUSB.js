/* Recovered from Tezarre Driver 1.1.31 - renderer module T2xN */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, i, t, d) {
          (void 0 === d && (d = t),
            Object.defineProperty(e, d, {
              enumerable: !0,
              get: function () {
                return i[t];
              },
            }));
        }
      : function (e, i, t, d) {
          (void 0 === d && (d = t), (e[d] = i[t]));
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, i) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: i });
        }
      : function (e, i) {
          e.default = i;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var d = {};
      if (null != t) for (var r in t) 'default' !== r && Object.hasOwnProperty.call(t, r) && e(d, t, r);
      return (i(d, t), d);
    },
  d =
    (this && this.__awaiter) ||
    function (e, i, t, d) {
      return new (t || (t = Promise))(function (r, n) {
        function s(e) {
          try {
            u(d.next(e));
          } catch (i) {
            n(i);
          }
        }
        function o(e) {
          try {
            u(d.throw(e));
          } catch (i) {
            n(i);
          }
        }
        function u(e) {
          var i;
          e.done
            ? r(e.value)
            : ((i = e.value),
              i instanceof t
                ? i
                : new t(function (e) {
                    e(i);
                  })).then(s, o);
        }
        u((d = d.apply(e, i || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.WinUSB = exports.findWinUSB = void 0));
const r = require('ramda'),
  n = t(require('os')),
  s = require('./../win_dll/hid/bind.js'),
  o = require('./hid3supports.js'),
  u = 'win32' === n.platform() ? s.hid_win.init() : void 0;
exports.findWinUSB = () =>
  d(void 0, void 0, void 0, function* () {
    return yield null == u ? void 0 : u.getSystemHid();
  });
class v {
  constructor(e) {
    ((this.ptr = { isNull: r.T }),
      (this.vender_ptr = { isNull: r.T }),
      (this.initDevice = () =>
        d(this, void 0, void 0, function* () {
          if (void 0 === u) return !1;
          if ('string' != typeof this.deviceType.devAddr) return !1;
          let e;
          const i =
            !1 ===
            (e = o.hid3Support.some((e) => e.pid === this.deviceType.pid && e.vid === this.deviceType.vid)
              ? yield u.openHidDevice3(this.deviceType.devAddr)
              : yield u.openHidDevice4(this.deviceType.devAddr)).isNull();
          return (i && (this.ptr = e), i);
        })),
      (this.addVenderCallBack = (e) =>
        d(this, void 0, void 0, function* () {
          if (void 0 === this.deviceType.vid || void 0 === this.deviceType.pid)
            throw 'this.deviceType.vid === undefined || this.deviceType.pid === undefined';
          'help' !== this.deviceType.displayName &&
            ('' !== this.deviceType.venderAddr
              ? void 0 !== u &&
                (yield null == u
                  ? void 0
                  : u.asyncReadData1(this.deviceType.venderAddr, 0, 4, (i, t) => {
                      0 !== i[0] && e(i);
                    }))
              : console.error("this.deviceType.venderAddr === ''"));
        })),
      (this.destroyDevice = () =>
        d(this, void 0, void 0, function* () {
          if (void 0 === u) return !1;
          if (this.ptr.isNull()) return !1;
          let e;
          return (
            this.vender_ptr.isNull() || (yield u.stopReadData(this.vender_ptr)),
            (e =
              !o.hid3Support.some((e) => e.pid === this.deviceType.pid && e.vid === this.deviceType.vid) ||
              (yield u.destroyDevice(this.ptr))) && (this.ptr = { isNull: r.T }),
            e
          );
        })),
      (this.sendOutputReport = (e, i) =>
        d(this, void 0, void 0, function* () {
          return void 0 !== u && !this.ptr.isNull() && (yield u.sendOutputReport(this.ptr, e, i));
        })),
      (this.readInputReport = (e) =>
        d(this, void 0, void 0, function* () {
          if (void 0 !== u && !this.ptr.isNull()) return yield u.readInputReport(this.ptr, e);
        })),
      (this.testTime = new Date().getTime()),
      (this.sendFeature = (e) =>
        d(this, void 0, void 0, function* () {
          if (void 0 === u) return !1;
          if (this.ptr.isNull()) return !1;
          if (o.hid3Support.some((e) => e.pid === this.deviceType.pid && e.vid === this.deviceType.vid))
            return yield u.sendFeature(this.ptr, e);
          {
            const i = yield u.sendFeature1(this.ptr, e);
            let t = new Date().getTime();
            return (
              console.log('!!!sendFeature1sendFeature1sendFeature1sendFeature1', i),
              (this.testTime = t),
              i
            );
          }
        })),
      (this.readFeature = () =>
        d(this, void 0, void 0, function* () {
          if (void 0 !== u && !this.ptr.isNull()) {
            if (o.hid3Support.some((e) => e.pid === this.deviceType.pid && e.vid === this.deviceType.vid))
              return yield u.readFeature(this.ptr);
            return yield u.readFeature1(this.ptr);
          }
        })),
      (this.writeData = (e) =>
        d(this, void 0, void 0, function* () {
          return void 0 !== u && !this.ptr.isNull() && (yield u.writeData(this.ptr, e));
        })),
      (this.readData = () =>
        d(this, void 0, void 0, function* () {
          if (void 0 !== u && !this.ptr.isNull()) return yield u.readData(this.ptr);
        })),
      (this.deviceType = e));
  }
}
exports.WinUSB = v;
