/* Recovered from Tezarre Driver 1.1.31 - renderer module VHHC */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, s) {
          (void 0 === s && (s = i),
            Object.defineProperty(e, s, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, s) {
          (void 0 === s && (s = i), (e[s] = t[i]));
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
      var s = {};
      if (null != i) for (var o in i) 'default' !== o && Object.hasOwnProperty.call(i, o) && e(s, i, o);
      return (t(s, i), s);
    },
  s =
    (this && this.__awaiter) ||
    function (e, t, i, s) {
      return new (i || (i = Promise))(function (o, r) {
        function n(e) {
          try {
            u(s.next(e));
          } catch (t) {
            r(t);
          }
        }
        function d(e) {
          try {
            u(s.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(n, d);
        }
        u((s = s.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.USBDevice = exports.batterySubject = exports.sleepSubject = void 0));
const o = require('./../../../../sdk/DriverIO/usb/WinUSB.js'),
  r = require('./../../../../unitys/timeFunc.js'),
  n = require('./MacUSB.js'),
  d = i(require('os')),
  u = require('./../../../../DriverIO/DeviceAPI/DevFactory.js'),
  h = require('rxjs');
((exports.sleepSubject = new h.Subject()), (exports.batterySubject = new h.Subject()));
const a = (e) => new Promise((t) => setTimeout(t, e));
class l {
  constructor(e) {
    ((this.batteryChecking = !1),
      (this.block = !1),
      (this.pauseLoop = !1),
      (this.timer = void 0),
      (this.pauseLoopTimer = void 0),
      (this.loopStart = !1),
      (this.loopSleepDeltTime = 1e3),
      (this.deviceState = { battery: 100, isOnline: !0 }),
      (this.whoAmI = () =>
        s(this, void 0, void 0, function* () {
          this.deviceType.is24 && (yield this.fe_24_set_next_pack_length(64));
          const e = Buffer.alloc(64);
          e[0] = 143;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          console.log('who am  i  buff', i);
          let s = void 0 !== i && Boolean(i[5]);
          return (s && i && (i[4] = 128 | i[4]), { id: null == i ? void 0 : i.readInt32LE(1), is24: s });
        })),
      (this.loop_24 = () =>
        s(this, void 0, void 0, function* () {
          for (; this.loopStart;) {
            for (; this.pauseLoop;) yield a(2e3);
            if ((yield a(this.loopSleepDeltTime), this.deviceType.is24)) {
              let e = yield this.fb_24_check_status();
              if (void 0 === e) return void (this.loopStart = !1);
              ((this.deviceState.battery = e.battery),
                this.deviceState.isOnline &&
                  exports.batterySubject.next({ battery: e.battery, state: void 0 }),
                this.deviceState.isOnline !== e.isOnline &&
                  ((this.deviceState.isOnline = e.isOnline),
                  exports.sleepSubject.next({
                    type: this.deviceState.isOnline ? '设备唤醒' : '设备睡眠',
                    deviceType: this.deviceType,
                  })));
            }
          }
        })),
      (this.check24 = () =>
        s(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = 253), yield this.usb.sendFeature(e), yield a(10));
          const t = yield this.usb.readFeature();
          return (
            !!t &&
            (170 === t[0] && 85 === t[1]
              ? ((this.deviceType.is24 = !0), (this.loopStart = !0), this.loop_24(), !0)
              : ((this.deviceType.is24 = !1), !1))
          );
        })),
      (this.fb_24_check_status = () =>
        s(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = 251), yield this.usb.sendFeature(e), yield a(10));
          let t = yield this.usb.readFeature();
          if (t) {
            return {
              isReadyRead: Boolean(t[0]),
              battery: t[1],
              isOnline: !Boolean(t[2]),
              isWriteFinish: Boolean(t[3]),
            };
          }
        })),
      (this.fc_24_reading_data = () =>
        s(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = 252), yield this.usb.sendFeature(e), yield a(10));
        })),
      (this.fe_24_set_next_pack_length = (e) =>
        s(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = 254), (t[1] = e), yield this.usb.sendFeature(t), yield a(10));
        })),
      (this.addVenderCallBack = (e) => {
        this.usb.addVenderCallBack(e);
      }),
      (this.commomFeature = (e) =>
        s(this, void 0, void 0, function* () {
          if (void 0 !== (yield this.writeFeatureCmd(e))) return yield this.readFeatureCmd(5);
        })),
      (this.commomOUTIN = (e) =>
        s(this, void 0, void 0, function* () {
          if (void 0 !== (yield this.writeOutPutCmdWithType(186, e)))
            return yield this.readInputCmdWithType(186);
        })),
      (this.open = r.timeOutFUNC(() =>
        s(this, void 0, void 0, function* () {
          return yield this.usb.initDevice();
        }),
      )),
      (this.destroy = r.timeOutFUNC(() =>
        s(this, void 0, void 0, function* () {
          const e = yield this.usb.destroyDevice();
          return (console.error('DEEEESSSSSTTTRRRRRROOOOYYYYY'), (this.loopStart = !1), e);
        }),
      )),
      (this.wait_fb_write_finish = () =>
        s(this, void 0, void 0, function* () {
          let e = 0;
          for (; e++ < 100;) {
            yield a(10);
            let e = yield this.fb_24_check_status();
            if (null == e ? void 0 : e.isWriteFinish) return !0;
            yield a(10);
          }
        })),
      (this.wait_fb_already_read = () =>
        s(this, void 0, void 0, function* () {
          let e = 0;
          for (; e++ < 100;) {
            yield a(10);
            let e = yield this.fb_24_check_status();
            if (null == e ? void 0 : e.isReadyRead) return !0;
            yield a(10);
          }
        })),
      (this.wait_83_check_battery = () =>
        s(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 131;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          if (void 0 !== i) return i[2];
        })),
      (this.wireCheckBattery = () =>
        s(this, void 0, void 0, function* () {
          ((this.batteryChecking = !0),
            exports.batterySubject.next({ battery: 0, state: yield this.wait_83_check_battery() }),
            yield a(100),
            (this.batteryChecking = !1));
        })),
      (this.writeOutPutCmdWithType = r.timeOutFUNC((e, t) =>
        s(this, void 0, void 0, function* () {
          return yield this.usb.sendOutputReport(e, t);
        }),
      )),
      (this.readInputCmdWithType = r.timeOutFUNC((e) =>
        s(this, void 0, void 0, function* () {
          return this.usb.readInputReport(e);
        }),
      )),
      (this.delay24time = 100),
      (this.writeFeatureCmd = r.timeOutFUNC((e, t = 10, i = !1) =>
        s(this, void 0, void 0, function* () {
          if (!this.deviceState.isOnline) return !1;
          for (this.pauseLoop = !0; this.block;) yield a(100);
          if ((yield a(t), this.deviceType.is24 && !1 === i)) {
            let e = yield this.wait_fb_write_finish();
            !0 !== e && console.error('wait_fb_write_finish :::::   res', e);
          }
          const s = yield this.usb.sendFeature(e);
          return (
            this.deviceType.is24 &&
              !1 === i &&
              (yield this.wait_fb_write_finish(),
              !0 !== s && console.error('usb.sendFeature :::::   res', s)),
            (this.pauseLoop = !1),
            s
          );
        }),
      )),
      (this.readFeatureCmd = r.timeOutFUNC((e = 5, t = !1) =>
        s(this, void 0, void 0, function* () {
          if (!this.deviceState.isOnline) return;
          for (this.pauseLoop = !0; this.block;) yield a(100);
          if (this.deviceType.is24 && !1 === t) {
            let e = yield this.wait_fb_already_read();
            (!0 !== e && console.error('*(***************************************   ', e),
              yield a(10),
              yield this.fc_24_reading_data(),
              yield a(10));
          }
          yield a(e);
          let i = yield this.usb.readFeature();
          return (
            this.pauseLoopTimer && clearTimeout(this.pauseLoopTimer),
            (this.pauseLoopTimer = setTimeout(() => {
              this.pauseLoop = !1;
            }, 1e3)),
            i
          );
        }),
      )),
      (this.writeDataCmd = r.timeOutFUNC((e) =>
        s(this, void 0, void 0, function* () {
          return this.usb.writeData(e);
        }),
      )),
      (this.readDataCmd = r.timeOutFUNC(() =>
        s(this, void 0, void 0, function* () {
          return this.usb.readData();
        }),
      )),
      (this.getBufSe = (e) =>
        s(this, void 0, void 0, function* () {
          let t = 0;
          for (let i = 0; i < 7; i++) void 0 !== e[i] && (t += e[i]);
          return ((e[7] = t <= 255 ? 255 - t : 255 - (255 & t)), e);
        })),
      (this.getBufEi = (e) =>
        s(this, void 0, void 0, function* () {
          let t = 0;
          for (let i = 0; i < 8; i++) void 0 !== e && (t += e[i]);
          return ((e[8] = 255 - (255 & t)), e);
        })),
      (this.deviceType = e),
      'win32' === d.platform() ? (this.usb = new o.WinUSB(e)) : (this.usb = new n.MacUSB(e)),
      e.is24 && (this.loopStart = !0),
      this.loop_24(),
      u.venderSubject.subscribe((e) => {
        ('开始' === e.type &&
          ((this.block = !0),
          this.timer && clearTimeout(this.timer),
          (this.timer = setTimeout(() => {
            this.block = !1;
          }, 5e3))),
          '停止' === e.type && ((this.block = !1), this.timer && clearTimeout(this.timer)));
      }));
  }
}
exports.USBDevice = l;
