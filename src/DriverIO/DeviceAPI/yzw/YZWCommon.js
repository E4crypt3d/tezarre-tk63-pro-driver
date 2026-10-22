/* Recovered from Tezarre Driver 1.1.31 - renderer module no1X */

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
      if (null != i) for (var r in i) 'default' !== r && Object.hasOwnProperty.call(i, r) && e(o, i, r);
      return (t(o, i), o);
    },
  o =
    (this && this.__awaiter) ||
    function (e, t, i, o) {
      return new (i || (i = Promise))(function (r, n) {
        function s(e) {
          try {
            c(o.next(e));
          } catch (t) {
            n(t);
          }
        }
        function l(e) {
          try {
            c(o.throw(e));
          } catch (t) {
            n(t);
          }
        }
        function c(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, l);
        }
        c((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZWCommon = void 0));
const r = require('./../../../unitys/timeFunc.js'),
  n = require('./../../../renderer/DB.js'),
  s = require('./../../../renderer/sdk/DriverIO/usb/MacUSB.js'),
  l = require('./../../../sdk/DriverIO/usb/WinUSB.js'),
  c = require('./RY108.js'),
  d = i(require('fs')),
  u = i(require('os')),
  a = require('./../../../../unitys/log16Num.js'),
  h = require('./../../../sdk/DriverIO/usb/DetectSupportDevice.js'),
  f = require('usb');
class y extends c.RY108 {
  constructor() {
    (super(...arguments),
      (this.BIGCMDDELAY = 'darwin' == process.platform ? 800 : 100),
      (this.LITTLECMDDELAY = 20),
      (this.DAZZLE = 6),
      (this.NORMAL = 7),
      (this.USEROP = { 1: 0, 2: 16, 3: 32, 4: 48, 5: 64 }),
      (this.WAVEOP = { right: 0, left: 1, down: 2, up: 3 }),
      (this.MP = { upright: 0, separate: 1, intersect: 2 }),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 65280,
        2: 255,
        3: 16732160,
        4: 16711935,
        5: 16776960,
        6: 16777215,
      }),
      (this.MAXSPEED = 5),
      (this.upgrade = (e, t) =>
        o(this, void 0, void 0, function* () {
          var i, o;
          if ((h.HIDAttachSwich(!1), 16385 !== this.deviceType.pid)) {
            if (
              (console.log('发进入boot命令 0x7f , 0x55 , 0xaa , 0x55 , 0x82'),
              !(yield this.send64([127, 85, 170, 85, 170, 0, 0, 130])))
            )
              throw (h.HIDAttachSwich(!0), '发送 进入 boot 命令失败');
            (console.log('开始等待'), yield this.destroy(), yield r.sleep(1e3), console.log('等待结束'));
            const e = [
              { vid: 1121, pid: 16385, usage: 6, usagePage: 1, featureReportByteLength: 65, boot: 'yzw' },
              { vid: 1121, pid: 16385, usage: 1, usagePage: 65281, featureReportByteLength: 65, boot: 'yzw' },
              { vid: 12625, pid: 16385, usage: 6, usagePage: 1, featureReportByteLength: 65, boot: 'yzw' },
              {
                vid: 12625,
                pid: 16385,
                usage: 1,
                usagePage: 65281,
                featureReportByteLength: 65,
                boot: 'yzw',
              },
            ].filter((e) => 'yzw' === e.boot);
            if (0 === e.length) throw (h.HIDAttachSwich(!0), 'config 没有配置boot:yzw');
            console.log('开始扫描 hid 设备');
            let t = void 0,
              c = 0;
            for (; (0 === (null == t ? void 0 : t.length) || void 0 === t) && c < 100;) {
              let n;
              (console.error('!!!!!!!!!!!!!'),
                yield r.sleep(500),
                (t =
                  'win32' === process.platform
                    ? null === (i = n = yield l.findWinUSB()) || void 0 === i
                      ? void 0
                      : i.filter(
                          (t) => (
                            console.error(t),
                            e.some(
                              (e) =>
                                t.vid === e.vid &&
                                t.pid === e.pid &&
                                t.usage === e.usage &&
                                t.usagePage === e.usagePage &&
                                t.featureReportByteLength === e.featureReportByteLength,
                            )
                          ),
                        )
                    : null === (o = n = f.getDeviceList()) || void 0 === o
                      ? void 0
                      : o.filter(
                          (t) => (
                            console.error(t),
                            e.some(
                              (e) =>
                                t.deviceDescriptor.idVendor === e.vid &&
                                t.deviceDescriptor.idProduct === e.pid,
                            )
                          ),
                        )),
                c++);
            }
            if (0 === (null == t ? void 0 : t.length) || void 0 === t)
              return (h.HIDAttachSwich(!0), console.error('找不到', e), !1);
            console.error('USBLIST', t);
            const d = new n.DeviceType();
            'win32' === u.platform()
              ? ((d.devAddr = t[0].DevicePath),
                (d.pid = t[0].pid),
                (d.vid = t[0].vid),
                (this.deviceType = d),
                (this.usb = new l.WinUSB(this.deviceType)))
              : (h.currentUSB.push(t[0]),
                (d.devAddr = t[0].deviceAddress),
                (d.pid = t[0].deviceDescriptor.idProduct),
                (d.vid = t[0].deviceDescriptor.idVendor),
                (this.deviceType = d),
                (this.usb = new s.MacUSB(this.deviceType)));
            let a = !1;
            for (; !1 === a;)
              ((a = yield this.open()),
                console.log('设备 打开结果 QQQQQQQQQQQQQQQQQQQQQQQQQQQQQ::::::::::::::', a),
                yield r.sleep(1e3));
          }
          const c = d.readFileSync(e).slice(65536);
          console.log('升级文件大小：', c.length / 1024 + 'kb');
          const y = Math.ceil(c.length / 64),
            v = Buffer.alloc(2);
          (v.writeInt16LE(y), console.log('发送数据包总数', y));
          const g = Buffer.alloc(4);
          let m;
          for (g.writeInt32LE(c.length, 0); void 0 === m;)
            (yield this.send64([186, 192, ...v, ...g.slice(0, 3)]),
              a.log16Num('cmd_ota_start:', [186, 192, ...v, ...g.slice(0, 3)]),
              (m = yield this.readFeatureCmd()),
              yield r.sleep(1e3));
          a.log16Num('cmd_ota_start_H:', m);
          for (let e = 0; e < y; e++) {
            console.time('数据包发送' + e);
            const i = 64 * e > c.length ? 64 - (64 * e - c.length) : 64;
            (yield this.send64([...c.slice(64 * e, 64 * e + i)]),
              t(e / y),
              console.timeEnd('数据包发送' + e));
          }
          const p = c.reduce((e, t) => e + t),
            _ = Buffer.alloc(4);
          (_.writeInt32LE(p),
            yield this.send64([186, 194, ...v, ..._.slice(0, 3), ...g.slice(0, 3)]),
            a.log16Num('cmd_ota_end', [186, 194, ...v, ..._.slice(0, 3), ...g.slice(0, 3)]));
          const w = yield this.readFeatureCmd();
          return (a.log16Num('cmd_ota_end_h', w), t(1), h.HIDAttachSwich(!0), !0);
        })),
      (this.setScreen = (e) =>
        o(this, void 0, void 0, function* () {
          const t = new Array(1);
          t[0] = this.FEA_CMD_SET_WINDOS;
          const i = t.concat(...e),
            o = Buffer.from(i.concat(new Array(64 - i.length)));
          let r = 0;
          for (let e = 0; e < 7; e++) r += o[e];
          return ((o[7] = 255 - (255 & r)), this.writeFeatureCmd(o, 0));
        })),
      (this.setMusicFollow = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = new Array(8);
          i[0] = this.FEA_CMD_SET_AUDIO;
          let o = e.slice(t, t + 32);
          for (; o.filter((e) => 0 !== e).length < 5 && t > 0;) (t--, (o = e.slice(t, t + 32)));
          i[7] = 255 - (255 & i[0]);
          const r = i.concat(...o),
            n = Buffer.from(r.concat(new Array(64 - r.length)));
          return this.writeFeatureCmd(n, 0);
        })),
      (this.getFirmwareVersion = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_REV;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          return null == i ? void 0 : i.readUInt16LE(1);
        })),
      (this.setReportRate = (e) =>
        o(this, void 0, void 0, function* () {
          let t;
          switch (e) {
            case 1e3:
              t = 1;
              break;
            case 500:
              t = 2;
              break;
            case 250:
              t = 4;
              break;
            case 125:
              t = 8;
              break;
            default:
              t = 0;
          }
          const i = Buffer.alloc(64);
          ((i[0] = this.FEA_CMD_SET_REPORT), (i[1] = this.currentProfile), (i[2] = t));
          const o = yield this.getBufSe(i),
            n = yield this.writeFeatureCmd(o);
          return (yield r.sleep(this.BIGCMDDELAY), n);
        })),
      (this.getReportRate = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_REPORT), (e[1] = this.currentProfile));
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          switch (null == i ? void 0 : i.readUInt8(2)) {
            case 1:
              return 1e3;
            case 2:
              return 500;
            case 4:
              return 250;
            case 8:
              return 125;
            default:
              return 'err';
          }
        })),
      (this.setCurrentProfile = (e = 0) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = this.FEA_CMD_SET_PROFILE), (t[1] = e));
          const i = yield this.getBufSe(t);
          return !!(yield this.writeFeatureCmd(i)) && ((this.currentProfile = e), !0);
        })),
      (this.getCurrentProfile = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_PROFILE;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t),
            o = null == i ? void 0 : i.readUInt8(1);
          return (null != o && o >= 0 && (this.currentProfile = o), o);
        })),
      (this.setKeyboardOption = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = this.FEA_CMD_SET_KBOPTION), (t[1] = this.currentProfile));
          const i = Number(e.winKeyLockControl),
            o = Number(e.system),
            r = Number(e.wasdKeyAndArrowKeyExchange),
            n = Number(e.ledOff),
            s = Number(e.sLedOff),
            l = Number(e.keyboardMode),
            c = Number(e.keyboardLockControl),
            d = Number(e.keyboardFnKeyMatrix);
          ((t[2] = 0 | i | (o << 2) | (r << 3) | (n << 4) | (s << 5) | (l << 6) | (c << 7)), (t[3] = d));
          const u = yield this.getBufSe(t);
          return yield this.writeFeatureCmd(u);
        })),
      (this.getKeyboardOption = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_KBOPTION), (e[1] = this.currentProfile));
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t),
            o = null == i ? void 0 : i.readUInt8(2),
            r = null == i ? void 0 : i.readUInt8(3),
            n = null == i ? void 0 : i.readUInt8(4);
          if (void 0 !== o && void 0 !== r)
            return {
              winKeyLockControl: !!(1 & o),
              system: !!((2 & o) + (4 & o)),
              wasdKeyAndArrowKeyExchange: !!(8 & o),
              ledOff: !!(16 & o),
              sLedOff: !!(32 & o),
              keyboardMode: !!(64 & o),
              keyboardLockControl: !!(128 & o),
              keyboardFnKeyMatrix: !!(1 & r),
              powerSaveMode: Boolean(n),
            };
        })),
      (this.setMode = (e, t = 0) =>
        o(this, void 0, void 0, function* () {
          const i = Buffer.alloc(64);
          ((i[0] = 5), (i[1] = t), (i[2] = 'gaming' === e ? 1 : 0));
          const o = yield this.getBufSe(i);
          return yield this.writeFeatureCmd(o);
        })),
      (this.getMode = (e = 0) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = 133), (t[1] = e));
          const i = yield this.getBufSe(t),
            o = yield this.commomFeature(i),
            r = null == o ? void 0 : o.readUInt8(2);
          return void 0 === r ? r : 0 === r ? 'normal' : 'gaming';
        })),
      (this._setKeyConfig = (e) =>
        o(this, void 0, void 0, function* () {
          const t = new Array(8).fill(0);
          ((t[0] = this.FEA_CMD_SET_KEYMATRIX), (t[1] = this.currentProfile), (t[2] = 248), (t[3] = 1));
          for (let i = 0; i < 9; i++) {
            t[4] = i;
            let o = e.slice(56 * i, 56 + 56 * i);
            o.length < 56 && (o = o.concat(new Array(56 - o.length).fill(0)));
            let r = 0;
            for (let e = 0; e < 7; e++) r += t[e];
            t[7] = 255 - (255 & r);
            const n = Buffer.from(t.concat(o));
            if (!(yield this.writeFeatureCmd(n))) return !1;
          }
          return (yield r.sleep(this.BIGCMDDELAY), !0);
        })),
      (this._setMacro = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = Buffer.alloc(64);
          ((i[0] = 8), (i[1] = t), (i[2] = 0), (i[3] = 1));
          const o = yield this.getBufSe(i);
          if (!1 === (yield this.writeFeatureCmd(o))) return !1;
          for (let t = 0; t < 4; t++) {
            const i = Buffer.from([...e.slice(64 * t, 64 + 64 * t)]);
            if (!(yield this.writeFeatureCmd(i))) return !1;
          }
          return !0;
        })),
      (this.setReSet = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_RESERT;
          const t = yield this.getBufSe(e);
          return yield this.writeFeatureCmd(t);
        })));
  }
  _getKeyMatrix(e) {
    return o(this, void 0, void 0, function* () {
      const t = Buffer.alloc(64);
      ((t[0] = this.FEA_CMD_GET_KEYMATRIX), (t[1] = void 0 === e ? this.currentProfile : e));
      let i = Buffer.alloc(0);
      for (let e = 0; e < 8; e++) {
        t[2] = e;
        const o = yield this.getBufSe(t),
          r = yield this.commomFeature(o);
        if (void 0 === r) throw '_getKeyMatrix !!!undefine';
        i = Buffer.concat([i, r]);
      }
      return i;
    });
  }
}
exports.YZWCommon = y;
