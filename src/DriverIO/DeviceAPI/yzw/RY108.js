/* Recovered from Tezarre Driver 1.1.31 - renderer module RD8j */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (s, o) {
      function a(e) {
        try {
          u(r.next(e));
        } catch (t) {
          o(t);
        }
      }
      function n(e) {
        try {
          u(r.throw(e));
        } catch (t) {
          o(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? s(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(a, n);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.RY108 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  r = require('./../CommonMatrix.js'),
  s = require('./../sonix/k68.js'),
  o = { upright: 0, separate: 1, intersect: 2 },
  a = { 1: 0, 2: 16, 3: 32, 4: 48, 5: 64 },
  n = { right: 0, left: 1, down: 2, up: 3 };
class u extends s.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_Common),
      (this.FEA_CMD_SET_REV = 0),
      (this.FEA_CMD_GET_REV = 128),
      (this.FEA_CMD_GET_INFOR = 143),
      (this.FEA_CMD_SET_RESERT = 2),
      (this.FEA_CMD_GET_BATTERY = 131),
      (this.FEA_CMD_SET_REPORT = 4),
      (this.FEA_CMD_GET_REPORT = 132),
      (this.FEA_CMD_SET_PROFILE = 5),
      (this.FEA_CMD_GET_PROFILE = 133),
      (this.FEA_CMD_SET_KBOPTION = 6),
      (this.FEA_CMD_GET_KBOPTION = 134),
      (this.FEA_CMD_SET_LEDPARAM = 7),
      (this.FEA_CMD_GET_LEDPARAM = 135),
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
      (this.FEA_CMD_SET_AUDIO = 13),
      (this.FEA_CMD_SET_WINDOS = 14),
      (this.picsCount = Math.floor(((this.defaultMatrix.length / 4) * 3) / 64)),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            u = 0,
            l = 7;
          const c = i.dazzle ? 6 : 7;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (u = i.value), (l = c));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (u = i.value));
              break;
            case 'LightWave':
              ((r = 4), (s = i.speed), (l = void 0 !== i.option ? (n[i.option] << 4) | c : 0), (u = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightSnake':
              ((r = 7), (s = i.speed), (l = 'z' === i.option ? 0 | c : 16 | c), (u = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightKaleidoscope':
              ((r = 11), (s = i.speed), (l = 'out' === i.option ? 0 | c : 16 | c), (u = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightUserPicture':
              ((r = 13), (l = void 0 !== i.option ? a[i.option] : 0), (u = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightCircleWave':
              ((r = 15), (s = i.speed), (u = i.value), (l = 'anti-clockwise' === i.option ? 0 | c : 16 | c));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (u = i.value), (l = c));
              break;
            case 'LightMusicFollow':
              ((r = 17), (l = o[i.option] << 4), (u = i.value));
          }
          if (((e[1] = r), (e[2] = 5 - s), (e[3] = u), (e[4] = l), 'rgb' in i && void 0 !== i.rgb)) {
            let r = i.rgb;
            16777215 === r && (r = 16449530);
            const s = t.numToRgb(r);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
          }
          return (
            'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200)),
            yield this.writeFeatureCmd(e)
          );
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 65535, 4: 16711935, 5: 16776960, 6: 16777215 },
            r = Buffer.alloc(64);
          r[0] = this.FEA_CMD_GET_LEDPARAM;
          const s = yield this.getBufSe(r),
            u = yield this.commomFeature(s);
          if (void 0 === u) return;
          const l = u[1],
            c = 5 - u[2],
            h = u[3],
            _ = u[4];
          let d = t.rgbToNum(u[5], u[6], u[7]);
          const f = (t) => {
              if (7 === t || 6 === t) return;
              const i = e[t];
              void 0 !== i && (d = i);
            },
            E = 6 === _;
          switch ((16449530 === d && (d = 16777215), l)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (f(_), { type: 'LightAlwaysOn', value: h, rgb: d, dazzle: E });
            case 2:
              return (f(_), { type: 'LightBreath', value: h, speed: c, rgb: d, dazzle: E });
            case 3:
              return { type: 'LightNeon', value: h, speed: c, option: 0 == (15 & _) ? 'Default' : 'Random' };
            case 4:
              const e = i.valueForKey(n, _);
              return (
                f(_ << 4),
                { type: 'LightWave', value: h, speed: c, option: void 0 === e ? 'right' : e, dazzle: E }
              );
            case 5:
              return (
                f(_),
                {
                  type: 'LightRipple',
                  value: h,
                  speed: c,
                  option: 0 == (15 & _) ? 'full' : 'single',
                  rgb: d,
                  dazzle: E,
                }
              );
            case 6:
              return (f(_), { type: 'LightRaindrop', value: h, speed: c, rgb: d, dazzle: E });
            case 7:
              return (
                f(_ << 4),
                {
                  type: 'LightSnake',
                  value: h,
                  speed: c,
                  option: 0 == (15 & _) ? 'z' : 'return',
                  rgb: d,
                  dazzle: E,
                }
              );
            case 8:
              return (
                f(_),
                {
                  type: 'LightPressAction',
                  value: h,
                  speed: c,
                  option: 0 == (15 & _) ? 'onToOff' : 'offToOn',
                  rgb: d,
                  dazzle: E,
                }
              );
            case 9:
              return (f(_), { type: 'LightConverage', value: h, speed: c, rgb: d, dazzle: E });
            case 10:
              return (f(_), { type: 'LightSineWave', value: h, speed: c, rgb: d, dazzle: E });
            case 11:
              return (
                f(_ << 4),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === _ ? 'out' : 'in',
                  value: h,
                  speed: c,
                  rgb: d,
                  dazzle: E,
                }
              );
            case 12:
              return (f(_), { type: 'LightLineWave', value: h, speed: c, rgb: d, dazzle: E });
            case 13:
              const t = i.valueForKey(a, _);
              return { type: 'LightUserPicture', value: 0, option: void 0 === t ? '1' : t };
            case 14:
              return (f(_), { type: 'LightLaser', value: h, speed: c, rgb: d, dazzle: E });
            case 15:
              return (
                f(_ << 4),
                {
                  type: 'LightCircleWave',
                  value: h,
                  speed: c,
                  rgb: d,
                  option: 0 === _ ? 'anti-clockwise' : 'clockwise',
                  dazzle: E,
                }
              );
            case 16:
              return (f(_), { type: 'LightDazzing', value: h, speed: c, rgb: d, dazzle: E });
            case 17:
              const r = i.valueForKey(o, _);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === r ? 'upright' : r, rgb: d };
            default:
              return;
          }
        })),
      (this._setLightPic = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(8);
          ((e[0] = this.FEA_CMD_SET_USERPIC), (e[1] = 0));
          const i = 64 * this.picsCount,
            r = Buffer.alloc(2);
          (r.writeUInt16LE(i), (e[2] = r[0]), (e[3] = r[1]));
          for (let s = 0; s < 7; s++) {
            e[4] = s;
            let i = [...t.slice(56 * s, 56 + 56 * s)];
            i.length < 56 && (i = i.concat(new Array(56 - i.length).fill(0)));
            const r = yield this.getBufSe(e),
              o = Buffer.from([...r, ...i]);
            if (!(yield this.writeFeatureCmd(o))) return !1;
          }
          return !0;
        })),
      (this._getLightPic = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_USERPIC), (e[1] = 0));
          let t = Buffer.alloc(0);
          for (let i = 0; i < 6; i++) {
            e[2] = i;
            const r = yield this.getBufSe(e),
              s = yield this.commomFeature(r);
            if (void 0 === s) return;
            t = Buffer.concat([t, s]);
          }
          return t;
        })),
      (this._setKeyConfig = (t) =>
        e(this, void 0, void 0, function* () {
          const e = new Array(8).fill(0);
          ((e[0] = this.FEA_CMD_SET_KEYMATRIX), (e[1] = this.currentProfile), (e[2] = 248), (e[3] = 1));
          for (let i = 0; i < 9; i++) {
            e[4] = i;
            let r = t.slice(56 * i, 56 + 56 * i);
            r.length < 56 && (r = r.concat(new Array(56 - r.length).fill(0)));
            const s = Buffer.from(e.concat(r));
            if (!(yield this.writeFeatureCmd(s))) return !1;
          }
          return !0;
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
          return !0;
        })),
      (this.getMacro = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_MACRO), (e[1] = t));
          let i = Buffer.alloc(0);
          for (let t = 0; t < 4; t++) {
            e[2] = t;
            const r = yield this.getBufSe(e),
              s = yield this.commomFeature(r);
            if (void 0 === s) return;
            i = Buffer.concat([i, s]);
          }
          return this.buffToMacroEvents(i);
        })));
  }
  _getKeyMatrix(t) {
    return e(this, void 0, void 0, function* () {
      const e = Buffer.alloc(64);
      ((e[0] = this.FEA_CMD_GET_KEYMATRIX), (e[1] = void 0 === t ? this.currentProfile : t));
      let i = Buffer.alloc(0);
      for (let t = 0; t < 8; t++) {
        e[2] = t;
        const r = yield this.getBufSe(e),
          s = yield this.commomFeature(r);
        if (void 0 === s) throw '_getKeyMatrix !!!undefine';
        i = Buffer.concat([i, s]);
      }
      return i;
    });
  }
}
exports.RY108 = u;
