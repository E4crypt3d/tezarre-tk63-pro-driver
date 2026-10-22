/* Recovered from Tezarre Driver 1.1.31 - renderer module rnO6 */

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
      return new (i || (i = Promise))(function (r, s) {
        function n(e) {
          try {
            l(o.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            l(o.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function l(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(n, a);
        }
        l((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.test = exports.Dk2017 = void 0));
const r = require('./../../renderer/sdk/DriverIO/usb/USBDevice.js'),
  s = require('ramda'),
  n = require('./../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/bitOperation.js'),
  l = require('./../../renderer/sdk/DriverIO/DeviceAPI/DeviceInterface.js'),
  c = require('./../../unitys/timeFunc.js'),
  u = require('./dk2017matrix.js'),
  d = i(require('fs')),
  h = require('./../../renderer/mobxStore/store.js'),
  f = require('./../../renderer/res.js'),
  y = require('./../../renderer/映射.js'),
  v = require('./../../renderer/unitys/getDevLyaer.js'),
  g = require('./../../renderer/unitys/rgbNum.js'),
  _ = 500;
class E extends r.USBDevice {
  constructor() {
    (super(...arguments),
      (this.FEA_CMD_SET_REV = 0),
      (this.FEA_CMD_GET_REV = 128),
      (this.FEA_CMD_GET_INFOR = 143),
      (this.FEA_CMD_SET_RESERT = 10),
      (this.FEA_CMD_GET_BATTERY = 131),
      (this.FEA_CMD_SET_REPORT = 1),
      (this.FEA_CMD_GET_REPORT = 129),
      (this.FEA_CMD_SET_PROFILE = 2),
      (this.FEA_CMD_GET_PROFILE = 130),
      (this.FEA_CMD_SET_KBOPTION = 3),
      (this.FEA_CMD_GET_KBOPTION = 131),
      (this.FEA_CMD_SET_LEDPARAM = 4),
      (this.FEA_CMD_GET_LEDPARAM = 132),
      (this.FEA_CMD_SET_SLEDPARAM = 8),
      (this.FEA_CMD_GET_SLEDPARAM = 136),
      (this.FEA_CMD_SET_KEYMATRIX = 9),
      (this.FEA_CMD_GET_KEYMATRIX = 137),
      (this.FEA_CMD_SET_KEYENABLE = 10),
      (this.FEA_CMD_GET_KEYENABLE = 138),
      (this.FEA_CMD_SET_MACRO = 11),
      (this.FEA_CMD_GET_MACRO = 139),
      (this.FEA_CMD_SET_USERPIC = 12),
      (this.FEA_CMD_GET_USERPIC = 140),
      (this.FEA_CMD_SET_AUDIO = 14),
      (this.FEA_CMD_SET_WINDOS = 15),
      (this.G_CMD_LEN = 126),
      (this.G_CMD_TEST_MODE = 122),
      (this.G_CMD_CHECK_STUTAS = 123),
      (this.G_CMD_GET_READY = 124),
      (this.FEA_CMD_SET_BOOTLOATER = 127),
      (this.FEA_CMD_SET_DEBOUNCE = 17),
      (this.FEA_CMD_GET_DEBOUNCE = 145),
      (this.FEA_CMD_SET_SLEEPTIME = 18),
      (this.FEA_CMD_GET_SLEEPTIME = 146),
      (this.type = 'keyboard'),
      (this.defaultMatrix = u.defaultMatrix_dk2017),
      (this.currentProfile = 0),
      (this.setScreen = (e) =>
        o(this, void 0, void 0, function* () {
          const t = new Array(1);
          t[0] = this.FEA_CMD_SET_WINDOS;
          const i = t.concat(...e),
            o = Buffer.from(i.concat(new Array(64 - i.length)));
          return this.writeFeatureCmd(o, 0);
        })),
      (this.setMusicFollow = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = new Array(8);
          i[0] = this.FEA_CMD_SET_AUDIO;
          let o = e.slice(t, t + 32);
          for (; o.filter((e) => 0 !== e).length < 5 && t > 0;) (t--, (o = e.slice(t, t + 32)));
          const r = i.concat(...o),
            s = Buffer.from(r.concat(new Array(64 - r.length)));
          return this.writeFeatureCmd(s, 0);
        })),
      (this.getFirmwareVersion = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_REV;
          const t = yield this.commomFeature(e);
          return null == t ? void 0 : t.readUInt16LE(1);
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
          return (
            (i[0] = this.FEA_CMD_SET_REPORT),
            (i[1] = this.currentProfile),
            (i[2] = t),
            yield this.writeFeatureCmd(i)
          );
        })),
      (this.getReportRate = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_REPORT), (e[1] = this.currentProfile));
          const t = yield this.commomFeature(e);
          switch (null == t ? void 0 : t.readUInt8(2)) {
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
          return (
            (t[0] = this.FEA_CMD_SET_PROFILE),
            (t[1] = e),
            !!(yield this.writeFeatureCmd(t)) && ((this.currentProfile = e), !0)
          );
        })),
      (this.getCurrentProfile = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_PROFILE;
          const t = yield this.commomFeature(e),
            i = null == t ? void 0 : t.readUInt8(1);
          return (null != i && i >= 0 && (this.currentProfile = i), i);
        })),
      (this.setKeyboardOption = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = this.FEA_CMD_SET_KBOPTION), (t[1] = this.currentProfile));
          const i = Number(e.winKeyLockControl),
            o = Number(e.system),
            r = Number(e.wasdKeyAndArrowKeyExchange),
            s = Number(e.ledOff),
            n = Number(e.sLedOff),
            a = Number(e.keyboardMode),
            l = Number(e.keyboardLockControl),
            c = Number(e.keyboardFnKeyMatrix);
          return (
            (t[2] = 0 | i | (o << 2) | (r << 3) | (s << 4) | (n << 5) | (a << 6) | (l << 7)),
            (t[3] = c),
            yield this.writeFeatureCmd(t)
          );
        })),
      (this.getKeyboardOption = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_KBOPTION), (e[1] = this.currentProfile));
          const t = yield this.commomFeature(e),
            i = null == t ? void 0 : t.readUInt8(2),
            o = null == t ? void 0 : t.readUInt8(3),
            r = null == t ? void 0 : t.readUInt8(4);
          if (void 0 !== i && void 0 !== o)
            return {
              winKeyLockControl: !!(1 & i),
              system: !!((2 & i) + (4 & i)),
              wasdKeyAndArrowKeyExchange: !!(8 & i),
              ledOff: !!(16 & i),
              sLedOff: !!(32 & i),
              keyboardMode: !!(64 & i),
              keyboardLockControl: !!(128 & i),
              keyboardFnKeyMatrix: !!(1 & o),
              powerSaveMode: Boolean(r),
            };
        })),
      (this.setLightSetting = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          t[0] = this.FEA_CMD_SET_LEDPARAM;
          let i = 0,
            o = 0,
            r = 0,
            s = 0;
          switch (e.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (r = e.value));
              break;
            case 'LightBreath':
              ((i = 2), (o = e.speed));
              break;
            case 'LightWave':
              ((i = 3), (o = e.speed), (s = 'right' === e.option ? 0 : 1));
              break;
            case 'LightRipple':
              ((i = 4), (o = e.speed), (s = 'full' === e.option ? 0 : 1));
              break;
            case 'LightRaindrop':
              ((i = 5), (o = e.speed));
              break;
            case 'LightSnake':
              ((i = 6), (o = e.speed), (s = 'z' === e.option ? 0 : 1));
              break;
            case 'LightPressAction':
              ((i = 7), (o = e.speed), (s = 'onToOff' === e.option ? 0 : 1));
              break;
            case 'LightConverage':
              ((i = 8), (o = e.speed));
              break;
            case 'LightUserPicture':
              ((i = 9), (s = 0));
          }
          return ((t[1] = i), (t[2] = 5 - o), (t[3] = r), (t[4] = s), yield this.writeFeatureCmd(t));
        })),
      (this.getLightSetting = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_LEDPARAM;
          const t = yield this.commomFeature(e);
          if (void 0 === t) return;
          const i = t[1],
            o = 5 - t[2],
            r = t[3],
            s = t[4];
          switch (i) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return { type: 'LightAlwaysOn', value: r, rgb: 0 };
            case 2:
              return { type: 'LightBreath', value: 0, speed: o, rgb: 0 };
            case 3:
              return { type: 'LightWave', value: 0, speed: o, option: 0 === s ? 'right' : 'left' };
            case 4:
              return { type: 'LightRipple', value: 0, speed: o, option: 0 === s ? 'full' : 'single' };
            case 5:
              return { type: 'LightRaindrop', value: 0, speed: o };
            case 6:
              return { type: 'LightSnake', value: 0, speed: o, option: 0 === s ? 'z' : 'return' };
            case 7:
              return {
                type: 'LightPressAction',
                value: 0,
                speed: o,
                option: 0 === s ? 'onToOff' : 'offToOn',
              };
            case 8:
              return { type: 'LightConverage', value: 0, speed: o };
            case 9:
              return { type: 'LightUserPicture', value: 0 };
            default:
              return;
          }
        })),
      (this.setMode = (e, t = 0) =>
        o(this, void 0, void 0, function* () {
          const i = Buffer.alloc(64);
          return ((i[0] = 5), (i[1] = t), (i[2] = 'gaming' === e ? 1 : 0), yield this.writeFeatureCmd(i));
        })),
      (this.getMode = (e = 0) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = 133), (t[1] = e));
          const i = yield this.commomFeature(t),
            o = null == i ? void 0 : i.readUInt8(2);
          return void 0 === o ? o : 0 === o ? 'normal' : 'gaming';
        })),
      (this._getAllLayerMacros = () =>
        o(this, void 0, void 0, function* () {
          const e = 0 === v.getDevLayer(this.deviceType.id) ? 1 : v.getDevLayer(this.deviceType.id),
            t = [];
          for (let o = 0; o < e; o++) {
            const e = yield this.getKeyConfig(o);
            if (void 0 === e) continue;
            const i = e.filter((e) => 'ConfigMacro' === e.type);
            void 0 !== e && t.push(...i);
          }
          const i = 0 === v.getDevFnLayer(this.deviceType.id) ? 1 : v.getDevFnLayer(this.deviceType.id);
          for (let o = 0; o < i; o++) {
            const e = yield this.getFnKeyConfig(o);
            if (void 0 === e) continue;
            const i = e.filter((e) => 'ConfigMacro' === e.type);
            void 0 !== e && t.push(...i);
          }
          return t;
        })),
      (this.allLayerConfigs = []),
      (this.configsToMatrix = (e) =>
        o(this, void 0, void 0, function* () {
          var t;
          const i = e.filter((e) => 'ConfigMacro' === e.type);
          if (i.length > 20) return void h.mobxStore.toastStore.setErr(f.res.text.宏最多写入20条());
          const o = [];
          if (i.length > 0) {
            void 0 === this.allLayerConfigs && (this.allLayerConfigs = yield this._getAllLayerMacros());
            const e = this.allLayerConfigs;
            for (let t = 0; t < 20; t++) {
              void 0 !== e.find((e) => e.macroIndex === t) || o.push(t);
            }
            if (0 === o.length) return void h.mobxStore.toastStore.setErr(f.res.text.宏最多写入20条());
          }
          let r = 0;
          const s = [];
          for (let a = 0; a < e.length; a++) {
            let i = [0, 0, 0, 0];
            const n = e[a];
            switch (n.type) {
              case 'forbidden':
                i = [0, 0, 0, 0];
                break;
              case 'combo':
                i =
                  -1 ===
                  y.specialFunTablectionArr.findIndex(
                    (e) => y.arrTo16(e) === n.original && y.arrTo16(e) === n.key,
                  )
                    ? [0, M[n.skey], n.key, n.key2]
                    : [...y.numToByte4(n.key)];
                break;
              case 'ConfigChangeToMouseBtn':
                void 0 !== p[n.key] && (i = [...p[n.key]]);
                break;
              case 'ConfigFunction':
                i = [...y.specialFunTablectionMap[n.key]];
                break;
              case 'ConfigUnknown':
                i = [...n.value];
                break;
              case 'ConfigMacro':
                let e;
                switch (n.macroType) {
                  case 'repeat_times':
                    e = 0;
                    break;
                  case 'touch_repeat':
                    e = 2;
                    break;
                  case 'on_off':
                    e = 1;
                    break;
                  default:
                    e = 0;
                }
                if (((i = [9, e, o[r], 0]), !(yield this.setMacro(n, o[r])))) throw Error('写入宏失败');
                ('darwin' === process.platform && (yield c.sleep(2e3)),
                  (n.macroIndex = o[r]),
                  null === (t = this.allLayerConfigs) || void 0 === t || t.push(n),
                  r++);
                break;
              default:
                i = [0, 0, 0, 0];
            }
            s.push({ changeArr: i, orginHid: n.original, index: n.index });
          }
          const n = this.changeAllConfig(s);
          return (console.log('下命令 ！！！：', n), n);
        })),
      (this.setKeyConfig = (e) =>
        o(this, void 0, void 0, function* () {
          const t = yield this.configsToMatrix(e);
          return void 0 !== t && (yield this._setKeyConfig(t));
        })),
      (this.setFnKeyConfig = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = yield this.configsToMatrix(e);
          return void 0 !== i && (yield this._setFnKeyConfig(i, t));
        })),
      (this._setFnKeyConfig = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = new Array(8).fill(0);
          ((i[0] = 16), (i[1] = t), (i[2] = 248), (i[3] = 1));
          for (let t = 0; t < 9; t++) {
            i[4] = t;
            let o = e.slice(56 * t, 56 + 56 * t);
            o.length < 56 && (o = o.concat(new Array(56 - o.length).fill(0)));
            let r = 0;
            for (let e = 0; e < 7; e++) r += i[e];
            i[7] = 255 - (255 & r);
            const s = Buffer.from(i.concat(o));
            if (!(yield this.writeFeatureCmd(s))) return !1;
          }
          return (yield c.sleep(50), !0);
        })),
      (this._setKeyConfig = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          if (
            ((t[0] = 6),
            (t[1] = this.currentProfile),
            (t[2] = 192),
            (t[3] = 1),
            yield this.writeFeatureCmd(t))
          ) {
            for (let t = 0; t < 7; t++) {
              const i = Buffer.from(e.slice(64 * t, 64 + 64 * t));
              if (!(yield this.writeFeatureCmd(i))) return !1;
            }
            return !0;
          }
        })),
      (this.getKeyConfig = (e) =>
        o(this, void 0, void 0, function* () {
          const t = yield this._getKeyMatrix(e);
          if (void 0 !== t) return (console.log('读出来的 matirx', t), this.matrixToConfigValues([...t]));
        })),
      (this.getFnKeyConfig = (e) =>
        o(this, void 0, void 0, function* () {
          const t = yield this._getFnKeyMatrix(e);
          if (void 0 !== t) return (console.log('读出来的 matirx', t), this.matrixToConfigValues([...t]));
        })),
      (this.checkMacroLenthIsFull = (e) => {
        let t = 0;
        t += 2;
        let i = !1;
        for (let o = 0; o < e.length; o++) {
          const r = (r) => {
              let s = 0;
              if (o + 1 < e.length) {
                const t = e[o + 1];
                'delay' === t.type && t.value <= 127 && (s = t.value);
              }
              ('mouse_move' !== r.type && (s = (s << 1) | ('down' === r.action ? 1 : 0)),
                t++,
                (i = !0),
                s > 1 && ((i = !1), o++));
            },
            s = e[o];
          switch (('delay' !== s.type && !0 === i && (t += 2), s.type)) {
            case 'delay':
              (i ? (t += 2) : ((t += 2), (t += 2)), (i = !1));
              break;
            case 'keyboard':
              (t++, (i = !0), r(s));
              break;
            case 'mouse_button':
              (t++, r(s));
              break;
            case 'mouse_move':
              (t++, r(s), t++, t++);
          }
          if (t >= 248) return !0;
        }
        return !1;
      }),
      (this.setMacro = (e, t) =>
        o(this, void 0, void 0, function* () {
          console.log('setMacrosetMacrosetMacrosetMacrosetMacrosetMacrosetMacrosetMacrosetMacro', e);
          const i = e.macro,
            o = Buffer.alloc(256);
          let r = 0;
          (o.writeUInt16LE(e.repeatCount, 0), (r += 2));
          let s = !1;
          console.log('marcoArrmarcoArrmarcoArrmarcoArr', i);
          for (let e = 0; e < i.length; e++) {
            const t = (t) => {
                let n = 0;
                if (e + 1 < i.length) {
                  const t = i[e + 1];
                  'delay' === t.type && t.value <= 127 && (n = t.value);
                }
                ('mouse_move' !== t.type && (n = 'down' === t.action ? a.setBit(n, 7, 1) : a.setBit(n, 7, 0)),
                  console.log('attrNum :', n),
                  o.writeUInt8(n, r),
                  r++,
                  (s = !0),
                  (127 & n) > 0 && ((s = !1), e++));
              },
              n = i[e];
            switch (
              (console.log('tmpMEtmpMEtmpMEtmpMEtmpME', n, e, s),
              'delay' !== n.type && !0 === s && (o.writeUInt16LE(0, r), (r += 2)),
              n.type)
            ) {
              case 'delay':
                (s
                  ? (o.writeUInt16LE(n.value, r), (r += 2))
                  : (o.writeUInt16LE(0, r), (r += 2), o.writeUInt16LE(n.value, r), (r += 2)),
                  (s = !1));
                break;
              case 'keyboard':
                (o.writeUInt8(n.value, r), r++, (s = !0), t(n));
                break;
              case 'mouse_button':
                (o.writeUInt8(p[n.value][2], r), r++, t(n));
                break;
              case 'mouse_move':
                (o.writeUInt8(249, r), r++, t(n), o.writeInt8(n.dx, r), r++, o.writeInt8(n.dy, r), r++);
            }
          }
          return (
            console.log(
              '写入的红',
              [...o].map((e) => e.toString(16)),
            ),
            yield this._setMacro(o, t)
          );
        })),
      (this._setMacro = (e, t) =>
        o(this, void 0, void 0, function* () {
          const i = Buffer.alloc(64);
          if (((i[0] = 8), (i[1] = t), (i[2] = 0), (i[3] = 1), !1 === (yield this.writeFeatureCmd(i))))
            return !1;
          for (let t = 0; t < 4; t++) {
            const i = Buffer.from([...e.slice(64 * t, 64 + 64 * t)]);
            if (!(yield this.writeFeatureCmd(i))) return !1;
          }
          return !0;
        })),
      (this.setLightPic = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = 9), (t[1] = 0), (t[2] = 20), (t[3] = 0));
          const i = Buffer.alloc(64).fill(0),
            o = e.map((e) => this.findIndexInDefaultMatrix(e.hid));
          console.log('user pic indexArr', e, o);
          for (let e = 0; e < o.length; e++) {
            const t = o[e];
            if (void 0 === t) throw Error('setLightPic 没有找到对应的hid');
            const r = i.readUInt8(Math.floor(t / 8));
            i.writeUInt8(a.setBitTo0(r, t % 8), Math.floor(t / 8));
          }
          return (
            !1 !== (yield this.writeFeatureCmd(t)) &&
            (console.log('BBBBUUUUFFFF', i), yield this.writeFeatureCmd(i))
          );
        })),
      (this.getLightPic = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = 137), (e[1] = 0));
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          if (void 0 === i) return i;
          const o = yield this.readFeatureCmd();
          if (void 0 === o) return;
          console.log('RRRREEEESSSS ', o);
          let r = [];
          for (let s = 0; s < o.length; s++) {
            const e = o[s];
            if (255 !== e) {
              const t = a.getUint8Bit0Index(e);
              r = r.concat(t.map((e) => this.findHidWithIndexInMatrix(e + 8 * s)));
            }
          }
          return (
            console.log(
              'PICPIChidArrhidArrhidArrhidArr!!!!!',
              r.filter((e) => void 0 !== e).map((e) => ({ hid: e, rgb: 0 })),
            ),
            r.filter((e) => void 0 !== e).map((e) => ({ hid: e, rgb: 0 }))
          );
        })),
      (this.getMacro = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          if (((t[0] = 136), (t[1] = e), void 0 === (yield this.commomFeature(t)))) return;
          let i = Buffer.alloc(0);
          for (let e = 0; e < 4; e++) {
            const e = yield this.readFeatureCmd();
            null != e && (i = Buffer.concat([i, e]));
          }
          return this.buffToMacroEvents(i);
        })),
      (this.setReSet = () =>
        o(this, void 0, void 0, function* () {
          this.allLayerConfigs = void 0;
          const e = Buffer.alloc(64);
          return ((e[0] = this.FEA_CMD_SET_RESERT), yield this.writeFeatureCmd(e));
        })),
      (this.matrixToConfigValues = (e) =>
        o(this, void 0, void 0, function* () {
          if (e.length !== this.defaultMatrix.length) return [];
          const t = [];
          for (let i = 0; i < e.length; i += 4) {
            const o = e.slice(i, i + 4),
              r = this.defaultMatrix.slice(i, i + 4);
            let a = 0;
            if (!s.equals(o, r)) {
              for (let t = 0; t < i; t += 4) s.equals(r, this.defaultMatrix.slice(t, t + 4)) && a++;
              let e = r[2];
              const l = y.specialFunTablectionArr.find((e) => s.equals(e, r));
              l && (e = y.arrTo16(l));
              const c = y.specialFunTablectionArr.find((e) => s.equals(e, o));
              if (s.equals(o, [0, 0, 1, 0])) t.push({ type: 'ConfigUnknown', original: e, value: o });
              else if (s.equals(o, [0, 0, 0, 0]))
                t.push({ type: 'forbidden', original: e, index: 0 === a ? void 0 : a });
              else if (0 === o[0])
                t.push({
                  type: 'combo',
                  original: e,
                  skey: n.valueForKey(M, o[1]),
                  key: o[2],
                  key2: o[3],
                  index: 0 === a ? void 0 : a,
                });
              else if (1 === o[0])
                t.push({
                  type: 'ConfigChangeToMouseBtn',
                  original: e,
                  key: n.valueForIndex(p, o),
                  index: 0 === a ? void 0 : a,
                });
              else if (3 === o[0] || 10 === o[0] || 13 === o[0] || 14 === o[0] || 18 === o[0] || 8 === o[0]) {
                const i = n.valueForKey(y.specialFunTablectionMap, [...o]);
                void 0 === i
                  ? t.push({ type: 'ConfigUnknown', original: e, value: o, index: 0 === a ? void 0 : a })
                  : t.push({ type: 'ConfigFunction', original: e, key: i, index: 0 === a ? void 0 : a });
              } else if (9 === o[0]) {
                let i, r;
                switch (o[1]) {
                  case 0:
                    i = 'repeat_times';
                    break;
                  case 2:
                    i = 'touch_repeat';
                    break;
                  case 1:
                    i = 'on_off';
                    break;
                  default:
                    i = 'repeat_times';
                }
                const s = yield this.getMacro(o[2]);
                (void 0 !== s && (r = s),
                  t.push({
                    type: 'ConfigMacro',
                    original: e,
                    macro: void 0 === r ? [] : r.macroEvents,
                    macroType: i,
                    repeatCount: void 0 === r ? 0 : r.repeatCount,
                    index: 0 === a ? void 0 : a,
                    macroIndex: o[2],
                  }));
              } else
                c && s.equals(o, c)
                  ? t.push({
                      type: 'combo',
                      original: e,
                      skey: 'none',
                      key: y.arrTo16(c),
                      key2: 0,
                      index: 0 === a ? void 0 : a,
                    })
                  : console.error('matrix 未知类型:', o);
            }
          }
          return t;
        })),
      (this.buffToMacroEvents = (e) => {
        console.log('读出来的宏', e);
        const t = [],
          i = e.readUInt16LE(0);
        let o = 2,
          r = e.slice(o, o + 4);
        for (o += 4; o < e.length;) {
          if (249 === r[0]) {
            t.push({ type: 'mouse_move', dx: r[2], dy: r[3] });
            let i = 0;
            if (0 !== r[1]) i = r[1] >> 1;
            else {
              const t = e.slice(o, o + 2);
              ((o += 2), (i = t.readUInt16LE(0)));
            }
            t.push({ type: 'delay', value: i });
          } else {
            if (r[0] <= 239 && r[0] >= 4)
              (console.error('!!!!!!!!!!!!!!! 0::::', r[0], '         1:::', r[1], a.getBit(r[1], 7)),
                t.push({ type: 'keyboard', action: 0 === a.getBit(r[1], 7) ? 'up' : 'down', value: r[0] }));
            else {
              const e = n.valueForKey(p, [1, 0, r[0], 0]);
              void 0 !== e &&
                t.push({
                  type: 'mouse_button',
                  action: 0 === a.getBit(r[1], 7) ? 'up' : 'down',
                  value: Number(e),
                });
            }
            let e = 0;
            (0 != (127 & r[1]) ? ((e = 127 & r[1]), (o -= 2)) : (e = r.readUInt16LE(2)),
              t.push({ type: 'delay', value: e }));
          }
          if (((r = e.slice(o, o + 4)), s.equals(r, Buffer.from([0, 0, 0, 0])))) break;
          o += 4;
        }
        return (
          console.log(
            '@@@@@',
            t.filter((e) => !('delay' === e.type && 0 === e.value)),
          ),
          { macroEvents: t.filter((e) => !('delay' === e.type && 0 === e.value)), repeatCount: i }
        );
      }),
      (this.findHidWithIndexInMatrix = (e) => {
        const t = this.defaultMatrix.slice(4 * e, 4 * e + 4),
          i = y.specialFunTablectionArr.find((e) => s.equals(e, t));
        return i
          ? (i[0] << 24) | (i[1] << 16) | (i[2] << 8) | i[3]
          : 0 !== t[0] || 0 !== t[1] || 0 !== t[3]
            ? (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3]
            : this.defaultMatrix[4 * e + 2];
      }),
      (this.findIndexInDefaultMatrix = (e, t) => {
        let i = 0;
        const o = new Array();
        for (var r = 0; r < y.specialFunTablectionArr.length; r++) {
          const e = y.arrTo16(y.specialFunTablectionArr[r]);
          o.push(e);
        }
        let n = 0;
        if (o.find((t) => s.equals(t, e)))
          for (let s = 0; s < this.defaultMatrix.length; s += 4) {
            const o = Buffer.from(this.defaultMatrix.slice(s, s + 4));
            if (e === o.readUInt32BE()) {
              if (void 0 === t || t == i) return n;
              i++;
            }
            n++;
          }
        for (let a = 0; a < this.defaultMatrix.length; a += 4) {
          const o = this.defaultMatrix.slice(a, a + 4);
          if (s.equals([0, 0, e, 0], o)) {
            if (void 0 === t || t == i) return n;
            i++;
          }
          if (e > 255 && s.equals(y.numToByte4(e), o)) {
            if (void 0 === t || t == i) return n;
            i++;
          }
          n++;
        }
      }),
      (this.changeAllConfig = (e) => {
        let t = [...this.defaultMatrix];
        return (
          e.forEach((e) => {
            const i = this.changeMatrix(e.orginHid, e.changeArr, t, e.index);
            void 0 !== i && (t = i);
          }),
          t
        );
      }),
      (this.changeMatrix = (e, t, i, o) => {
        const r = [...i];
        let n = 2,
          a = !1,
          l = 0;
        const c = new Array();
        for (let s = 0; s < y.specialFunTablectionArr.length; s++) {
          const e = y.arrTo16(y.specialFunTablectionArr[s]);
          c.push(e);
        }
        for (; n < this.defaultMatrix.length; n += 4) {
          const t = c.findIndex((t) => s.equals(t, e));
          if (-1 !== t && s.equals(this.defaultMatrix.slice(n - 2, n + 2), y.specialFunTablectionArr[t])) {
            if (void 0 === o || l === o) {
              a = !0;
              break;
            }
            l++;
          } else if (s.equals(this.defaultMatrix.slice(n - 2, n + 2), [0, 0, e, 0])) {
            if (void 0 === o || l === o) {
              a = !0;
              break;
            }
            l++;
          } else;
        }
        if (a) return ((r[n - 1 - 1] = t[0]), (r[n - 1] = t[1]), (r[n] = t[2]), (r[n + 1] = t[3]), r);
      }),
      (this.send64 = (e) =>
        o(this, void 0, void 0, function* () {
          let t = Buffer.from(e.concat(new Array(64 - e.length)));
          return yield this.writeFeatureCmd(t, 0);
        })),
      (this.getBattery = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 131;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          let o = { battery: 0, status: 'uncharing' };
          return (
            void 0 !== i &&
              (o = { battery: i[1], status: 0 === i[2] ? 'uncharing' : 1 === i[2] ? 'charing' : 'full' }),
            o
          );
        })),
      (this.getSLEDParam = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_SLEDPARAM;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          if (void 0 === i) return;
          const o = i[1],
            r = 5 - i[2],
            s = i[3];
          switch (o) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return { type: 'LightAlwaysOn', value: s, rgb: 0 };
            case 2:
              return { type: 'LightBreath', value: 0, speed: r, rgb: 0 };
            default:
              return;
          }
        })),
      (this.setSLEDParam = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          t[0] = this.FEA_CMD_SET_SLEDPARAM;
          let i = 0,
            o = 0,
            r = 0,
            s = 7;
          const n = e.dazzle ? 7 : 8;
          switch (e.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (r = e.value), (s = n));
              break;
            case 'LightBreath':
              ((i = 2), (o = e.speed), (r = e.value), (s = n));
          }
          if (((t[1] = i), (t[2] = 4 - o), (t[3] = r), (t[4] = s), 'rgb' in e && void 0 !== e.rgb)) {
            let i = e.rgb;
            16777215 === i && (i = 16449530);
            const o = g.numToRgb(i);
            ((t[5] = o.r), (t[6] = o.g), (t[7] = o.b));
          }
          'LightUserPicture' === e.type && ((t[5] = 0), (t[6] = 200), (t[7] = 200));
          const a = yield this.getBufEi(t);
          return !!(yield this.writeFeatureCmd(a, 500)) && (yield c.sleep(500), !0);
        })),
      (this.getSleepKeyTime = () =>
        o(this, void 0, void 0, function* () {
          return { time_bt: 120, time_24: 120, deepTime_bt: 1680, deepTime_24: 1680 };
        })),
      (this.setSleepKeyTime = (e) =>
        o(this, void 0, void 0, function* () {
          return !0;
        })),
      (this.getDeBounce = () =>
        o(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          (console.error('------', e), (e[0] = this.FEA_CMD_GET_DEBOUNCE));
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          if (void 0 !== i) return i[2];
        })),
      (this.setDeBounce = (e) =>
        o(this, void 0, void 0, function* () {
          const t = Buffer.alloc(64);
          ((t[0] = this.FEA_CMD_SET_DEBOUNCE), (t[2] = e));
          const i = yield this.getBufSe(t);
          return !!(yield this.writeFeatureCmd(i)) && (yield c.sleep(_), !0);
        })),
      (this.upgrade = (e, t) =>
        o(this, void 0, void 0, function* () {
          (yield this.send64([170, 85, 165, 90, 255, 0, 51, 204, 82]), yield this.send64([1, 170, 85]));
          const i = yield this.readFeatureCmd();
          (console.log(i),
            yield this.send64([3, 170, 85]),
            yield this.send64([5, 170, 85, 0, 0, 0, 0, 0, 0, 4]));
          const o = yield this.readFeatureCmd();
          console.log(o);
          const r = d.readFileSync(e);
          (console.log(r.slice(0, 100)), console.log('升级文件大小：', r.length / 1024 + 'kb'));
          for (let e = 0; e < r.length; e += 64) {
            let i;
            ((i = e + 64 > r.length ? r.slice(e) : r.slice(e, 64 + e)),
              t(e / r.length),
              yield this.send64([...i]));
          }
          const s = yield this.readFeatureCmd();
          return (
            console.log('升级结果', s),
            yield this.send64([7, 170, 85, 0, 0, 0, 0, 0, 0, 255]),
            t(1),
            !0
          );
        })));
  }
  _getFnKeyMatrix(e) {
    return o(this, void 0, void 0, function* () {
      const t = Buffer.alloc(64);
      ((t[0] = 144), (t[1] = e));
      let i = Buffer.alloc(0);
      for (let e = 0; e < 8; e++) {
        t[2] = e;
        const o = yield this.getBufSe(t),
          r = yield this.commomFeature(o);
        if (void 0 === r) throw '_getFnKeyMatrix !!!undefine';
        i = Buffer.concat([i, r]);
      }
      return i;
    });
  }
  _getKeyMatrix(e) {
    return o(this, void 0, void 0, function* () {
      const t = Buffer.alloc(64);
      if (
        ((t[0] = 134),
        (t[1] = void 0 === e ? this.currentProfile : e),
        void 0 === (yield this.commomFeature(t)))
      )
        return;
      let i = Buffer.alloc(0);
      for (let e = 0; e < 7; e++) {
        const e = yield this.readFeatureCmd(100);
        if (void 0 === e) throw '_getKeyMatrix !!!undefine';
        null != e && (i = Buffer.concat([i, e]));
      }
      return i;
    });
  }
}
exports.Dk2017 = E;
const p = {
    [l.MouseKey.Left]: [1, 0, 240, 0],
    [l.MouseKey.Right]: [1, 0, 241, 0],
    [l.MouseKey.Middle]: [1, 0, 242, 0],
    [l.MouseKey.Forward]: [1, 0, 243, 0],
    [l.MouseKey.Back]: [1, 0, 244, 0],
    [l.MouseKey.WheelLeft]: [1, 0, 245, 0],
    [l.MouseKey.WheelRight]: [1, 0, 246, 0],
    [l.MouseKey.WheelForward]: [1, 0, 247, 0],
    [l.MouseKey.WheelBack]: [1, 0, 248, 0],
    [l.MouseKey.Dpi]: [],
    [l.MouseKey.Key_1]: [],
    [l.MouseKey.Key_2]: [],
    [l.MouseKey.SCROLLUP]: [1, 0, 245, 1],
    [l.MouseKey.SCROLLDOWN]: [1, 0, 245, 255],
    [l.MouseKey.XUP]: [1, 0, 246, 251],
    [l.MouseKey.XDOWN]: [1, 0, 246, 5],
    [l.MouseKey.YUP]: [1, 0, 247, 251],
    [l.MouseKey.YDOWN]: [1, 0, 247, 5],
  },
  M = { none: 0, alt: 226, ctrl: 224, shift: 225, win: 227 };
exports.test = () => o(void 0, void 0, void 0, function* () {});
