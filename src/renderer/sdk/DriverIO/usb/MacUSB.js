/* Recovered from Tezarre Driver 1.1.31 - renderer module t7gK */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (n, o) {
      function d(e) {
        try {
          c(r.next(e));
        } catch (t) {
          o(t);
        }
      }
      function s(e) {
        try {
          c(r.throw(e));
        } catch (t) {
          o(t);
        }
      }
      function c(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(d, s);
      }
      c((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacUSB = void 0));
const t = require('./../../../../sdk/DriverIO/usb/DetectSupportDevice.js');
class i {
  constructor(i) {
    ((this.initDevice = () =>
      new Promise((e) => {
        ((this.device = t.currentUSB.find((e) => e.deviceAddress === this.deviceType.devAddr)),
          void 0 !== this.device ? (this.device.open(), e(!0)) : e(!1));
      })),
      (this.destroyDevice = () =>
        e(this, void 0, void 0, function* () {
          return !!this.device && (this.device.close(), !0);
        })),
      (this.sendOutputReport = (e, t) =>
        new Promise((i) => {
          if (!this.device) return i(!1);
          this.device.controlTransfer(33, 9, Buffer.from([e, 2]).readInt16LE(0), 0, t, (e, t) => {
            i(!e);
          });
        })),
      (this.readInputReport = (t) =>
        e(this, void 0, void 0, function* () {
          return new Promise((e) => {
            if (!this.device) return e(void 0);
            this.device.controlTransfer(161, 1, Buffer.from([t, 1]).readInt16LE(0), 0, 2, (t, i) => {
              e(t ? void 0 : i);
            });
          });
        })),
      (this.sendFeature = (t) =>
        e(this, void 0, void 0, function* () {
          return new Promise((e) => {
            if (!this.device) return e(!1);
            this.device.controlTransfer(
              33,
              9,
              Buffer.from([0, 3]).readInt16LE(0),
              Buffer.from([0, 0]).readInt16LE(0),
              t,
              (t, i) => {
                e(!t);
              },
            );
          });
        })),
      (this.readFeature = () =>
        e(this, void 0, void 0, function* () {
          return new Promise((e) => {
            if (!this.device) return e(void 0);
            this.device.controlTransfer(
              161,
              1,
              Buffer.from([0, 3]).readInt16LE(0),
              Buffer.from([0, 0]).readInt16LE(0),
              64,
              (t, i) => {
                e(t ? void 0 : i);
              },
            );
          });
        })),
      (this.writeData = (t) =>
        e(this, void 0, void 0, function* () {
          return new Promise((e) => !1);
        })),
      (this.readData = () => e(this, void 0, void 0, function* () {})),
      (this.deviceType = i));
  }
  addVenderCallBack() {
    console.log('MAC not support addVenderCallBack');
  }
}
exports.MacUSB = i;
