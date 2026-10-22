/* Recovered from Tezarre Driver 1.1.31 - renderer module KxM8 */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (s, a) {
      function o(e) {
        try {
          l(r.next(e));
        } catch (t) {
          a(t);
        }
      }
      function n(e) {
        try {
          l(r.throw(e));
        } catch (t) {
          a(t);
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
                })).then(o, n);
      }
      l((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K68 = void 0));
const t = require('./../../../renderer/映射.js'),
  i = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./../../../../unitys/tableValueForKey.js'),
  s = require('./../../../unitys/timeFunc.js'),
  a = require('./YZWCommon.js'),
  o = require('./yzw_k68Matrix.js'),
  n = 6;
class l extends a.YZWCommon {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = o.defaultMatrix_yzw_k68),
      (this.setLightSetting = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            a = 0,
            o = 0,
            l = 7,
            u = t.dazzle;
          const c = u ? this.DAZZLE : this.NORMAL,
            h = u ? 0 : 4;
          switch (t.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (o = t.value), (l = c));
              break;
            case 'LightBreath':
              ((r = 2), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightNeon':
              ((r = 3), (a = t.speed), (o = t.value));
              break;
            case 'LightWave':
              ((r = 4),
                (a = t.speed),
                (l = void 0 !== t.option ? (this.WAVEOP[t.option] << 4) | c : (this.WAVEOP.right << 4) | c),
                (o = t.value));
              break;
            case 'LightRipple':
              ((r = 5), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightRaindrop':
              ((r = 6), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightSnake':
              ((r = 7),
                (a = t.speed),
                (l = 'z' === t.option || void 0 === t.option ? 0 | c : 16 | c),
                (o = t.value));
              break;
            case 'LightPressAction':
              ((r = 8), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightConverage':
              ((r = 9), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightSineWave':
              ((r = 10), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (a = t.speed),
                (l = 'out' === t.option || void 0 === t.option ? 0 | c : 16 | c),
                (o = t.value));
              break;
            case 'LightLineWave':
              ((r = 12), (a = t.speed), (o = t.value), (l = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (l = void 0 !== t.option ? this.USEROP[t.option] : 0), (o = t.value));
              break;
            case 'LightLaser':
              ((r = 14), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (a = t.speed),
                (o = t.value),
                (l = 'anti-clockwise' === t.option || void 0 === t.option ? 0 | c : 16 | c));
              break;
            case 'LightDazzing':
              ((r = 16), (a = t.speed), (o = t.value), (l = c));
              break;
            case 'LightMusicFollow':
              ((r = 17), (l = (this.MP[t.option] << 4) | h), (o = t.value));
              break;
            case 'LightScreenColor':
              ((r = 18), (o = n), (l = 0));
              break;
            case 'LightMusicFollow2':
              ((r = 19),
                (o = t.value),
                (l = void 0 === t.option || 'upright' === t.option ? 0 | h : (this.MP[t.option] << 4) | h));
          }
          if (
            ((e[1] = r), (e[2] = this.MAXSPEED - a), (e[3] = o), (e[4] = l), 'rgb' in t && void 0 !== t.rgb)
          ) {
            let r = t.rgb;
            16777215 === r && (r = 16449530);
            const s = i.numToRgb(r);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
          }
          'LightUserPicture' === t.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const p = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(p, this.BIGCMDDELAY)) && (yield s.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = this.COMMONCOLOR,
            t = Buffer.alloc(64);
          t[0] = this.FEA_CMD_GET_LEDPARAM;
          const s = yield this.getBufSe(t),
            a = yield this.commomFeature(s);
          if (void 0 === a) return;
          const o = a[1],
            l = this.MAXSPEED - a[2],
            u = a[3],
            c = a[4];
          let h = i.rgbToNum(a[5], a[6], a[7]);
          const p = c >> 4,
            d = 15 & c,
            g = (t) => {
              if (t === this.NORMAL || t === this.DAZZLE) return;
              const i = e[t];
              void 0 !== i && (h = i);
            },
            v = d === this.DAZZLE,
            f = 0 === d;
          switch ((16449530 === h && (h = 16777215), o)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(d), { type: 'LightAlwaysOn', value: u, rgb: h, dazzle: v });
            case 2:
              return (g(d), { type: 'LightBreath', value: u, speed: l, rgb: h, dazzle: v });
            case 3:
              return { type: 'LightNeon', value: u, speed: l, option: 0 === p ? 'Default' : 'Random' };
            case 4:
              g(d);
              const e = r.valueForKey(this.WAVEOP, p);
              return {
                type: 'LightWave',
                value: u,
                speed: l,
                option: void 0 === e ? 'right' : e,
                rgb: h,
                dazzle: v,
              };
            case 5:
              return (
                g(d),
                {
                  type: 'LightRipple',
                  value: u,
                  speed: l,
                  option: 0 === p ? 'full' : 'single',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 6:
              return (g(d), { type: 'LightRaindrop', value: u, speed: l, rgb: h, dazzle: v });
            case 7:
              return (
                g(d),
                {
                  type: 'LightSnake',
                  value: u,
                  speed: l,
                  option: 0 === p ? 'z' : 'return',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 8:
              return (
                g(d),
                {
                  type: 'LightPressAction',
                  value: u,
                  speed: l,
                  option: 0 === p ? 'onToOff' : 'offToOn',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 9:
              return (g(d), { type: 'LightConverage', value: u, speed: l, rgb: h, dazzle: v });
            case 10:
              return (g(d), { type: 'LightSineWave', value: u, speed: l, rgb: h, dazzle: v });
            case 11:
              return (
                g(d),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === p ? 'out' : 'in',
                  value: u,
                  speed: l,
                  rgb: h,
                  dazzle: v,
                }
              );
            case 12:
              return (g(d), { type: 'LightLineWave', value: u, speed: l, rgb: h, dazzle: v });
            case 13:
              const t = r.valueForKey(this.USEROP, p);
              return { type: 'LightUserPicture', value: u, option: void 0 === t ? '1' : t };
            case 14:
              return (g(d), { type: 'LightLaser', value: u, speed: l, rgb: h, dazzle: v });
            case 15:
              return (
                g(d),
                {
                  type: 'LightCircleWave',
                  value: u,
                  speed: l,
                  rgb: h,
                  option: 0 === p ? 'anti-clockwise' : 'clockwise',
                  dazzle: v,
                }
              );
            case 16:
              return (g(d), { type: 'LightDazzing', value: u, speed: l, rgb: h, dazzle: v });
            case 17:
              const s = r.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow',
                value: u,
                option: void 0 === s ? 'upright' : s,
                rgb: i.rgbToNum(a[5], a[6], a[7]),
                dazzle: f,
              };
            case 18:
              return { type: 'LightScreenColor', value: n };
            case 19:
              const c = r.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === c ? 'upright' : c,
                value: u,
                rgb: i.rgbToNum(a[5], a[6], a[7]),
                dazzle: f,
              };
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
              a = Buffer.from([...r, ...i]);
            if (!(yield this.writeFeatureCmd(a, this.LITTLECMDDELAY))) return !1;
          }
          return (yield s.sleep(this.BIGCMDDELAY), !0);
        })),
      (this._setKeyConfig = (i) =>
        e(this, void 0, void 0, function* () {
          const e = new Array(8).fill(0);
          ((e[0] = this.FEA_CMD_SET_KEYMATRIX), (e[1] = this.currentProfile), (e[2] = 248), (e[3] = 1));
          for (let r = 0; r < 9; r++) {
            e[4] = r;
            let s = i.slice(56 * r, 56 + 56 * r);
            s.length < 56 && (s = s.concat(new Array(56 - s.length).fill(0)));
            let a = 0;
            for (let t = 0; t < 7; t++) a += e[t];
            e[7] = 255 - (255 & a);
            for (let e = 0; e < s.length / 4; e++) {
              let i = s.slice(4 * e, 4 + 4 * e);
              t.specialFunTablectionArr.map((r) => {
                0 !== i[2] &&
                  i[2] === t.arrTo16(r) &&
                  (i = r).map((t, i) => {
                    s.splice(4 * e + i, 1, t);
                  });
              });
            }
            const o = Buffer.from(e.concat(s));
            if (!(yield this.writeFeatureCmd(o))) return !1;
          }
          return (yield s.sleep(1e3), !0);
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
              a = Buffer.from([...s, ...r]);
            if (!(yield this.writeFeatureCmd(a))) return !1;
          }
          return (yield s.sleep(this.BIGCMDDELAY), !0);
        })));
  }
}
exports.YZW_K68 = l;
