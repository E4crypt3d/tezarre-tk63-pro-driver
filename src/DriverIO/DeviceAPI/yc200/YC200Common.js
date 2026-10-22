/* Recovered from Tezarre Driver 1.1.31 - renderer module Ttxp */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (s, o) {
      function n(e) {
        try {
          l(r.next(e));
        } catch (t) {
          o(t);
        }
      }
      function a(e) {
        try {
          l(r.throw(e));
        } catch (t) {
          o(t);
        }
      }
      function l(e) {
        var t;
        e.done
          ? s(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(n, a);
      }
      l((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200Common = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  r = require('./../../../unitys/timeFunc.js'),
  s = require('./yc200Matrix.js'),
  o = require('./../yzw/yzw_3098.js');
class n extends o.YZW_3098 {
  constructor() {
    (super(...arguments),
      (this.FEA_CMD_SET_KBOPTION = 6),
      (this.FEA_CMD_GET_KBOPTION = 134),
      (this.DAZZLE = 8),
      (this.NORMAL = 7),
      (this.COMMONCOLOR = { 0: 16711680, 1: 16744448, 2: 16776960, 3: 65280, 4: 65535, 5: 255, 6: 16711935 }),
      (this.MAXSPEED = 4),
      (this.USEROP = { 1: 0, 2: 16, 3: 32, 4: 48, 5: 64 }),
      (this.defaultMatrix = s.defaultMatrix_yc200),
      (this.setKeyboardOption = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_SET_KBOPTION), (e[1] = this.currentProfile));
          const i = Number(t.winKeyLockControl),
            r = Number(t.system),
            s = Number(t.wasdKeyAndArrowKeyExchange),
            o = Number(t.ledOff),
            n = Number(t.sLedOff),
            a = Number(t.keyboardMode),
            l = Number(t.keyboardLockControl),
            d = Number(t.keyboardFnKeyMatrix),
            u = Number(t.powerSaveMode);
          ((e[2] = 0 | i | (r << 2) | (s << 3) | (o << 4) | (n << 5) | (a << 6) | (l << 7)),
            (e[3] = d),
            (e[4] = u));
          const c = yield this.getBufSe(e);
          return yield this.writeFeatureCmd(c);
        })),
      (this.getKeyboardOption = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_KBOPTION), (e[1] = this.currentProfile));
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t),
            r = null == i ? void 0 : i.readUInt8(2),
            s = null == i ? void 0 : i.readUInt8(3),
            o = null == i ? void 0 : i.readUInt8(4);
          if (void 0 !== r && void 0 !== s)
            return {
              winKeyLockControl: !!(1 & r),
              system: !!((2 & r) + (4 & r)),
              wasdKeyAndArrowKeyExchange: !!(8 & r),
              ledOff: !!(16 & r),
              sLedOff: !!(32 & r),
              keyboardMode: !!(64 & r),
              keyboardLockControl: !!(128 & r),
              keyboardFnKeyMatrix: !!(1 & s),
              powerSaveMode: Boolean(o),
            };
        })),
      (this.getDeBounce = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_DEBOUNCE;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          if (void 0 !== i) return i[2];
        })),
      (this.setDeBounce = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_SET_DEBOUNCE), (e[2] = t));
          const i = yield this.getBufSe(e);
          return !!(yield this.writeFeatureCmd(i)) && (yield r.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getSleepKeyTime = () =>
        e(this, void 0, void 0, function* () {
          var e, t;
          const i = Buffer.alloc(64);
          i[0] = this.FEA_CMD_GET_SLEEPTIME;
          const r = yield this.getBufSe(i),
            s = yield this.commomFeature(r);
          let o = { time_bt: 120, time_24: 120, deepTime_bt: 1680, deepTime_24: 1680 };
          if (void 0 !== s) {
            if (
              ((o = {
                time_bt: (s[2] << 8) | s[1],
                time_24: (s[4] << 8) | s[3],
                deepTime_bt: (s[6] << 8) | s[5],
                deepTime_24: (s[8] << 8) | s[7],
              }),
              null === (e = this.deviceType.otherSetting) || void 0 === e ? void 0 : e.sleep_24)
            ) {
              const e = this.deviceType.otherSetting.sleep_24;
              ((o.time_24 =
                o.time_24 < 60 * e.min ? 60 * e.min : o.time_24 > 60 * e.max ? 60 * e.max : o.time_24),
                (o.deepTime_24 =
                  o.deepTime_24 < 60 * e.min_deep
                    ? 60 * e.min_deep
                    : o.deepTime_24 > 60 * e.max_deep
                      ? 60 * e.max_deep
                      : o.deepTime_24));
            } else ((o.time_24 = 0), (o.deepTime_24 = 0));
            if (null === (t = this.deviceType.otherSetting) || void 0 === t ? void 0 : t.sleep_bt) {
              const e = this.deviceType.otherSetting.sleep_bt;
              ((o.time_bt =
                o.time_bt < 60 * e.min ? 60 * e.min : o.time_bt > 60 * e.max ? 60 * e.max : o.time_bt),
                (o.deepTime_bt =
                  o.deepTime_bt < 60 * e.min_deep
                    ? 60 * e.min_deep
                    : o.deepTime_bt > 60 * e.max_deep
                      ? 60 * e.max_deep
                      : o.deepTime_bt));
            } else ((o.time_bt = 0), (o.deepTime_bt = 0));
          }
          return o;
        })),
      (this.setSleepKeyTime = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_SLEEPTIME;
          const i = yield this.getBufSe(e);
          return (
            (e[8] = t.time_bt - ((t.time_bt >> 8) << 8)),
            (e[9] = t.time_bt >> 8),
            (e[10] = t.time_24 - ((t.time_24 >> 8) << 8)),
            (e[11] = t.time_24 >> 8),
            (e[12] = t.deepTime_bt - ((t.deepTime_bt >> 8) << 8)),
            (e[13] = t.deepTime_bt >> 8),
            (e[14] = t.deepTime_24 - ((t.deepTime_24 >> 8) << 8)),
            (e[15] = t.deepTime_24 >> 8),
            !!(yield this.writeFeatureCmd(i)) && (yield r.sleep(this.BIGCMDDELAY), !0)
          );
        })),
      (this.setScreen = (t) =>
        e(this, void 0, void 0, function* () {
          this.deviceType.is24 && (yield this.fe_24_set_next_pack_length(8));
          const e = new Array(1);
          e[0] = this.FEA_CMD_SET_WINDOS;
          const i = e.concat(...t),
            r = Buffer.from(i.concat(new Array(64 - i.length))),
            s = yield this.getBufSe(r);
          return this.writeFeatureCmd(s, 0, !0);
        })),
      (this.setMusicFollow = (t, i) =>
        e(this, void 0, void 0, function* () {
          let e = t.slice(i, i + 32);
          this.deviceType.is24 && (yield this.fe_24_set_next_pack_length(e.length / 2 + 1));
          const r = new Array(this.deviceType.is24 ? 1 : 8);
          for (r[0] = this.FEA_CMD_SET_AUDIO; e.filter((e) => 0 !== e).length < 5 && i > 0;)
            (i--, (e = t.slice(i, i + 32)));
          this.deviceType.is24 || (r[7] = 255 - (255 & r[0]));
          const s = r.concat(...e),
            o = Buffer.from(s.concat(new Array(64 - s.length)));
          let n = Buffer.alloc(o.length);
          if (((n = o), this.deviceType.is24)) {
            n[0] = this.FEA_CMD_SET_AUDIO;
            for (var a = 0; a < e.length / 2; a++) n[a + 1] = e[2 * a] | (e[2 * a + 1] << 4);
          }
          return this.writeFeatureCmd(n, 0, !0);
        })),
      (this.getFirmwareVersion = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_REV;
          const t = yield this.getBufSe(e),
            i = yield this.commomFeature(t);
          return null == i ? void 0 : i.readUInt16LE(1);
        })),
      (this.setReportRate = (t) =>
        e(this, void 0, void 0, function* () {
          let e;
          switch (t) {
            case 1e3:
              e = 1;
              break;
            case 500:
              e = 2;
              break;
            case 250:
              e = 4;
              break;
            case 125:
              e = 8;
              break;
            default:
              e = 0;
          }
          const i = Buffer.alloc(64);
          ((i[0] = this.FEA_CMD_SET_REPORT), (i[1] = this.currentProfile), (i[2] = e));
          const s = yield this.getBufSe(i),
            o = yield this.writeFeatureCmd(s);
          return (yield r.sleep(this.BIGCMDDELAY), o);
        })),
      (this.getReportRate = () =>
        e(this, void 0, void 0, function* () {
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
      (this._setKeyConfig = (t) =>
        e(this, void 0, void 0, function* () {
          const e = new Array(8).fill(0);
          ((e[0] = this.FEA_CMD_SET_KEYMATRIX), (e[1] = this.currentProfile), (e[2] = 248), (e[3] = 1));
          for (let i = 0; i < 9; i++) {
            e[4] = i;
            let r = t.slice(56 * i, 56 + 56 * i);
            r.length < 56 && (r = r.concat(new Array(56 - r.length).fill(0)));
            let s = 0;
            for (let t = 0; t < 7; t++) s += e[t];
            e[7] = 255 - (255 & s);
            const o = Buffer.from(e.concat(r));
            if (!(yield this.writeFeatureCmd(o))) return !1;
          }
          return (yield r.sleep(1e3), !0);
        })),
      (this._setMacro = (t, i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(8);
          ((e[0] = this.FEA_CMD_SET_MACRO), (e[1] = i), (e[2] = 0), (e[3] = 1));
          for (let i = 0; i < 5; i++) {
            e[4] = i;
            let r = [...t.slice(56 * i, 56 + 56 * i)];
            r.length < 56 && (r = r.concat(new Array(56 - r.length).fill(0)));
            const s = yield this.getBufSe(e),
              o = Buffer.from([...s, ...r]);
            if (!(yield this.writeFeatureCmd(o))) return !1;
          }
          return (yield r.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.setSLEDParam = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_SLEDPARAM;
          let s = 0,
            o = 0,
            n = 0,
            a = 7;
          const l = i.dazzle ? this.DAZZLE : this.NORMAL;
          switch (i.type) {
            case 'LightOff':
              s = 0;
              break;
            case 'LightAlwaysOn':
              ((s = 1), (n = i.value), (a = l));
              break;
            case 'LightBreath':
              ((s = 2), (o = i.speed), (n = i.value), (a = l));
              break;
            case 'LightNeon':
              ((s = 3), (o = i.speed), (n = i.value));
          }
          if (((e[1] = s), (e[2] = 4 - o), (e[3] = n), (e[4] = a), 'rgb' in i && void 0 !== i.rgb)) {
            let r = i.rgb;
            16777215 === r && (r = 16449530);
            const s = t.numToRgb(r);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const d = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(d, 500)) && (yield r.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getSLEDParam = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_SLEDPARAM;
          const i = yield this.getBufSe(e),
            r = yield this.commomFeature(i);
          if (void 0 === r) return;
          const s = r[1],
            o = this.MAXSPEED - r[2],
            n = r[3],
            a = r[4];
          let l = t.rgbToNum(r[5], r[6], r[7]);
          const d = 15 & a,
            u = (e) => {
              if (e === this.DAZZLE || e === this.NORMAL) return;
              const t = this.COMMONCOLOR[e];
              void 0 !== t && (l = t);
            },
            c = d === this.DAZZLE;
          switch (s) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (u(d), { type: 'LightAlwaysOn', value: n, rgb: l, dazzle: c });
            case 2:
              return (u(d), { type: 'LightBreath', value: n, speed: o, rgb: l, dazzle: c });
            case 3:
              return { type: 'LightNeon', value: n, speed: o };
            default:
              return;
          }
        })),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let s = 0,
            o = 0,
            n = 0,
            a = 7,
            l = i.dazzle;
          const d = l ? this.DAZZLE : this.NORMAL,
            u = l ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              s = 0;
              break;
            case 'LightAlwaysOn':
              ((s = 1), (n = i.value), (a = d));
              break;
            case 'LightBreath':
              ((s = 2), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightNeon':
              ((s = 3), (o = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((s = 4),
                (o = i.speed),
                (a = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | d : (this.WAVEOP.right << 4) | d),
                (n = i.value));
              break;
            case 'LightRipple':
              ((s = 5), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightRaindrop':
              ((s = 6), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightSnake':
              ((s = 7),
                (o = i.speed),
                (a = 'z' === i.option || void 0 === i.option ? 0 | d : 16 | d),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((s = 8), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightConverage':
              ((s = 9), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightSineWave':
              ((s = 10), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightKaleidoscope':
              ((s = 11),
                (o = i.speed),
                (a = 'out' === i.option || void 0 === i.option ? 0 | d : 16 | d),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((s = 12),
                (o = i.speed),
                (n = i.value),
                (a = 'right' === i.option || void 0 === i.option ? 0 | d : 16 | d));
              break;
            case 'LightUserPicture':
              ((s = 13), (a = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((s = 14), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightCircleWave':
              ((s = 15),
                (o = i.speed),
                (n = i.value),
                (a = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | d : 16 | d));
              break;
            case 'LightDazzing':
              ((s = 16), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightRainDown':
              ((s = 17), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightMeteor':
              ((s = 18), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightPressActionOff':
              ((s = 19), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightMusicFollow3':
              ((s = 20),
                (a = void 0 === i.option || 'upright' === i.option ? 0 | u : (this.MP[i.option] << 4) | u),
                (n = i.value));
              break;
            case 'LightScreenColor':
              ((s = 21), (n = 4));
              break;
            case 'LightMusicFollow2':
              ((s = 22),
                (n = i.value),
                (a = void 0 === i.option || 'upright' === i.option ? 0 | u : (this.MP[i.option] << 4) | u));
              break;
            case 'LightTrain':
              ((s = 23), (o = i.speed), (n = i.value), (a = d));
              break;
            case 'LightFireWorks':
              ((s = 24),
                (o = i.speed),
                (n = i.value),
                (a = 'right' === i.option || void 0 === i.option ? 0 | d : 16 | d));
          }
          if (
            ((e[1] = s), (e[2] = this.MAXSPEED - o), (e[3] = n), (e[4] = a), 'rgb' in i && void 0 !== i.rgb)
          ) {
            let r = i.rgb;
            16777215 === r && (r = 16449530);
            const s = t.numToRgb(r);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const c = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(c, 500)) && (yield r.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(e),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const o = s[1],
            n = this.MAXSPEED - s[2],
            a = s[3],
            l = s[4];
          let d = t.rgbToNum(s[5], s[6], s[7]);
          const u = l >> 4,
            c = 15 & l,
            h = (e) => {
              if (e === this.DAZZLE || e === this.NORMAL) return;
              const t = this.COMMONCOLOR[e];
              void 0 !== t && (d = t);
            },
            p = c === this.DAZZLE,
            g = 0 === c;
          switch ((16449530 === d && (d = 16777215), o)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (h(c), { type: 'LightAlwaysOn', value: a, rgb: d, dazzle: p });
            case 2:
              return (h(c), { type: 'LightBreath', value: a, speed: n, rgb: d, dazzle: p });
            case 3:
              return { type: 'LightNeon', value: a, speed: n, option: 0 === u ? 'Default' : 'Random' };
            case 4:
              h(c);
              const e = i.valueForKey(this.WAVEOP, u);
              return {
                type: 'LightWave',
                value: a,
                speed: n,
                option: void 0 === e ? 'right' : e,
                rgb: d,
                dazzle: p,
              };
            case 5:
              return (
                h(c),
                {
                  type: 'LightRipple',
                  value: a,
                  speed: n,
                  option: 0 === u ? 'full' : 'single',
                  rgb: d,
                  dazzle: p,
                }
              );
            case 6:
              return (h(c), { type: 'LightRaindrop', value: a, speed: n, rgb: d, dazzle: p });
            case 7:
              return (
                h(c),
                {
                  type: 'LightSnake',
                  value: a,
                  speed: n,
                  option: 0 === u ? 'z' : 'return',
                  rgb: d,
                  dazzle: p,
                }
              );
            case 8:
              return (
                h(c),
                {
                  type: 'LightPressAction',
                  value: a,
                  speed: n,
                  option: 0 === u ? 'onToOff' : 'offToOn',
                  rgb: d,
                  dazzle: p,
                }
              );
            case 9:
              return (h(c), { type: 'LightConverage', value: a, speed: n, rgb: d, dazzle: p });
            case 10:
              return (h(c), { type: 'LightSineWave', value: a, speed: n, rgb: d, dazzle: p });
            case 11:
              return (
                h(c),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === u ? 'out' : 'in',
                  value: a,
                  speed: n,
                  rgb: d,
                  dazzle: p,
                }
              );
            case 12:
              return (
                h(c),
                {
                  type: 'LightLineWave',
                  option: 0 === u ? 'right' : 'left',
                  value: a,
                  speed: n,
                  rgb: d,
                  dazzle: p,
                }
              );
            case 14:
              return (h(c), { type: 'LightLaser', value: a, speed: n, rgb: d, dazzle: p });
            case 15:
              return (
                h(c),
                {
                  type: 'LightCircleWave',
                  value: a,
                  speed: n,
                  rgb: d,
                  option: 0 === u ? 'anti-clockwise' : 'clockwise',
                  dazzle: p,
                }
              );
            case 16:
              return (h(c), { type: 'LightDazzing', value: a, speed: n, rgb: d, dazzle: p });
            case 17:
              return (h(c), { type: 'LightRainDown', value: a, speed: n, rgb: d, dazzle: p });
            case 18:
              return (h(c), { type: 'LightMeteor', value: a, speed: n, rgb: d, dazzle: p });
            case 19:
              return (h(c), { type: 'LightPressActionOff', value: a, speed: n, rgb: d, dazzle: p });
            case 13:
              const r = i.valueForKey(this.USEROP, l);
              return { type: 'LightUserPicture', value: a, option: void 0 === r ? '1' : r };
            case 20:
              const v = i.valueForKey(this.MP, u);
              return {
                type: 'LightMusicFollow3',
                value: a,
                option: void 0 === v ? 'upright' : v,
                rgb: t.rgbToNum(s[5], s[6], s[7]),
                dazzle: g,
              };
            case 21:
              return { type: 'LightScreenColor', value: 4 };
            case 22:
              const f = i.valueForKey(this.MP, u);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === f ? 'upright' : f,
                value: a,
                rgb: t.rgbToNum(s[5], s[6], s[7]),
                dazzle: g,
              };
            case 23:
              return (h(c), { type: 'LightTrain', value: a, speed: n, rgb: d, dazzle: p });
            case 24:
              return (
                h(c),
                {
                  type: 'LightFireWorks',
                  value: a,
                  speed: n,
                  option: 0 === u ? 'right' : 'left',
                  rgb: d,
                  dazzle: p,
                }
              );
            default:
              return;
          }
        })));
  }
}
exports.YC200Common = n;
