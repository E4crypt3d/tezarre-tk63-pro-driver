/* Recovered from Tezarre Driver 1.1.31 - renderer module rwJx */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (s, o) {
      function n(e) {
        try {
          u(r.next(e));
        } catch (t) {
          o(t);
        }
      }
      function a(e) {
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
                })).then(n, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Common = void 0));
const t = require('./../../renderer/unitys/rgbNum.js'),
  i = require('./../../../unitys/tableValueForKey.js'),
  r = require('./CommonMatrix.js'),
  s = require('./sonix/k68.js'),
  o = { upright: 0, separate: 1, intersect: 2 },
  n = { 1: 0, 2: 16, 3: 32, 4: 48, 5: 64 };
class a extends s.K68 {
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
      (this.picsCount = Math.floor(((this.defaultMatrix.length / 4) * 3) / 64)),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            a = 0,
            u = 7;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (a = i.value));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (a = i.value));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (a = i.value));
              break;
            case 'LightWave':
              ((r = 4), (s = i.speed), (u = 'right' === i.option ? 0 : 1), (a = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (u = 'full' === i.option ? 112 : 113), (a = i.value));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (a = i.value));
              break;
            case 'LightSnake':
              ((r = 7), (s = i.speed), (u = 'z' === i.option ? 112 : 113), (a = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (u = 'onToOff' === i.option ? 112 : 113), (a = i.value));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (a = i.value));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (a = i.value));
              break;
            case 'LightKaleidoscope':
              ((r = 11), (s = i.speed), (u = 'out' === i.option ? 112 : 113), (a = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (a = i.value));
              break;
            case 'LightUserPicture':
              ((r = 13), (u = void 0 !== i.option ? n[i.option] : 0), (a = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (a = i.value));
              break;
            case 'LightCircleWave':
              ((r = 15), (s = i.speed), (a = i.value));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (a = i.value));
              break;
            case 'LightMusicFollow':
              ((r = 17), (u = o[i.option] << 4), (a = i.value));
          }
          if (((e[1] = r), (e[2] = 5 - s), (e[3] = a), (e[4] = u), 'rgb' in i && void 0 !== i.rgb)) {
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
          const s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const a = s[1],
            u = 5 - s[2],
            c = s[3],
            l = s[4];
          let h = t.rgbToNum(s[5], s[6], s[7]);
          const _ = (t) => {
            if (7 === t) return;
            const i = e[t];
            void 0 !== i && (h = i);
          };
          switch ((16449530 === h && (h = 16777215), a)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (_(l), { type: 'LightAlwaysOn', value: c, rgb: h });
            case 2:
              return (_(l), { type: 'LightBreath', value: c, speed: u, rgb: h });
            case 3:
              return { type: 'LightNeon', value: c, speed: u };
            case 4:
              return { type: 'LightWave', value: c, speed: u, option: 0 == (15 & l) ? 'right' : 'left' };
            case 5:
              return (
                _(l >> 4),
                { type: 'LightRipple', value: c, speed: u, option: 0 == (15 & l) ? 'full' : 'single', rgb: h }
              );
            case 6:
              return (_(l), { type: 'LightRaindrop', value: c, speed: u, rgb: h });
            case 7:
              return (
                _(l),
                { type: 'LightSnake', value: c, speed: u, option: 0 == (15 & l) ? 'z' : 'return', rgb: h }
              );
            case 8:
              return (
                _(l >> 4),
                {
                  type: 'LightPressAction',
                  value: c,
                  speed: u,
                  option: 0 == (15 & l) ? 'onToOff' : 'offToOn',
                  rgb: h,
                }
              );
            case 9:
              return (_(l), { type: 'LightConverage', value: c, speed: u, rgb: h });
            case 10:
              return (_(l), { type: 'LightSineWave', value: c, speed: u, rgb: h });
            case 11:
              return (
                _(l),
                {
                  type: 'LightKaleidoscope',
                  option: 0 == (15 & l) ? 'out' : 'in',
                  value: c,
                  speed: u,
                  rgb: h,
                }
              );
            case 12:
              return (_(l), { type: 'LightLineWave', value: c, speed: u, rgb: h });
            case 13:
              const e = i.valueForKey(n, l);
              return { type: 'LightUserPicture', value: 0, option: void 0 === e ? '1' : e };
            case 14:
              return (_(l), { type: 'LightLaser', value: c, speed: u, rgb: h });
            case 15:
              return (_(l), { type: 'LightCircleWave', value: c, speed: u, rgb: h });
            case 16:
              return (_(l), { type: 'LightDazzing', value: c, speed: u, rgb: h });
            case 17:
              const t = i.valueForKey(o, l);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === t ? 'upright' : t, rgb: h };
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
          (r.writeUInt16LE(i), (e[2] = r[0]), (e[3] = r[1]), console.log('BBBBUUUUFFFF', t));
          for (let s = 0; s < 7; s++) {
            if (((e[4] = s), !1 === (yield this.writeFeatureCmd(e)))) return !1;
            const i = Buffer.from([...e, ...t.slice(56 * s, 56 + 56 * s)]);
            if (!(yield this.writeFeatureCmd(i))) return !1;
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
            const r = yield this.commomFeature(e);
            if (void 0 === r) return;
            t = Buffer.concat([t, r]);
          }
          return t;
        })),
      (this._setKeyConfig = (t) =>
        e(this, void 0, void 0, function* () {
          const e = new Array(8).fill(0);
          ((e[0] = this.FEA_CMD_SET_KEYMATRIX), (e[1] = this.currentProfile), (e[2] = 192), (e[3] = 1));
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
            const s = Buffer.from([...e, ...r]);
            if (!(yield this.writeFeatureCmd(s))) return !1;
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
            const r = yield this.commomFeature(e);
            if (void 0 === r) return;
            i = Buffer.concat([i, r]);
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
        const r = yield this.commomFeature(e);
        if (void 0 === r) throw '_getKeyMatrix !!!undefine';
        i = Buffer.concat([i, r]);
      }
      return i;
    });
  }
}
exports.Common = a;
