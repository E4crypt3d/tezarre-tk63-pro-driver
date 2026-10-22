/* Recovered from Tezarre Driver 1.1.31 - renderer module i5BE */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, a) {
    return new (i || (i = Promise))(function (r, s) {
      function o(e) {
        try {
          u(a.next(e));
        } catch (t) {
          s(t);
        }
      }
      function n(e) {
        try {
          u(a.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(o, n);
      }
      u((a = a.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K178 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_k178Matrix.js'),
  s = require('./yzw_kc68.js'),
  o = { upright: 0, separate: 1, intersect: 2 },
  n = { 1: 0, 2: 16, 3: 32, 4: 48 },
  u = { right: 0, left: 1, down: 2, up: 3 },
  l = 4;
class p extends s.YZW_KC68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_k178),
      (this.DAZZLE = 7),
      (this.NORMAL = 8),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            p = 0,
            c = 7,
            g = i.dazzle;
          const d = g ? this.DAZZLE : this.NORMAL,
            h = g ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (p = i.value), (c = d));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (p = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (c = void 0 !== i.option ? (u[i.option] << 4) | d : (u.down << 4) | d),
                (p = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (c = 'z' === i.option || void 0 === i.option ? 0 | d : 16 | d),
                (p = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (c = 'out' === i.option || void 0 === i.option ? 0 | d : 16 | d),
                (p = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (p = i.value), (c = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (c = void 0 !== i.option ? n[i.option] : 0), (p = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (p = i.value),
                (c = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | d : 16 | d));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightRainDown':
              ((r = 17), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightMeteor':
              ((r = 18), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightPressActionOff':
              ((r = 19), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightMusicFollow':
              ((r = 20), (c = (o[i.option] << 4) | h), (p = i.value));
              break;
            case 'LightScreenColor':
              ((r = 21), (p = l));
              break;
            case 'LightMusicFollow2':
              ((r = 22),
                (p = i.value),
                (c = void 0 === i.option || 'upright' === i.option ? 0 | h : (o[i.option] << 4) | h));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (p = i.value),
                (c = 'right' === i.option || void 0 === i.option ? 0 | d : 16 | d));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (p = i.value), (c = d));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (p = i.value),
                (c = 'right' === i.option || void 0 === i.option ? 0 | d : 16 | d));
          }
          if (((e[1] = r), (e[2] = 4 - s), (e[3] = p), (e[4] = c), 'rgb' in i && void 0 !== i.rgb)) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const v = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(v, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 51400, 1: 16711680, 2: 65280, 3: 255, 4: 4456703, 5: 16776960, 6: 16777215 },
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const p = s[1],
            c = 4 - s[2],
            g = s[3],
            d = s[4];
          let h = t.rgbToNum(s[5], s[6], s[7]);
          const v = d >> 4,
            L = 15 & d,
            b = (t) => {
              if (t === this.DAZZLE || t === this.NORMAL) return;
              const i = e[t];
              void 0 !== i && (h = i);
            },
            z = L === this.DAZZLE,
            y = 0 === d;
          switch ((16449530 === h && (h = 16777215), p)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (b(L), { type: 'LightAlwaysOn', value: g, rgb: h, dazzle: z });
            case 2:
              return (b(L), { type: 'LightBreath', value: g, speed: c, rgb: h, dazzle: z });
            case 3:
              return { type: 'LightNeon', value: g, speed: c, option: 0 === v ? 'Default' : 'Random' };
            case 4:
              b(L);
              const e = i.valueForKey(u, v);
              return {
                type: 'LightWave',
                value: g,
                speed: c,
                option: void 0 === e ? 'right' : e,
                rgb: h,
                dazzle: z,
              };
            case 5:
              return (
                b(L),
                {
                  type: 'LightRipple',
                  value: g,
                  speed: c,
                  option: 0 === v ? 'full' : 'single',
                  rgb: h,
                  dazzle: z,
                }
              );
            case 6:
              return (b(L), { type: 'LightRaindrop', value: g, speed: c, rgb: h, dazzle: z });
            case 7:
              return (
                b(L),
                {
                  type: 'LightSnake',
                  value: g,
                  speed: c,
                  option: 0 === v ? 'z' : 'return',
                  rgb: h,
                  dazzle: z,
                }
              );
            case 8:
              return (
                b(L),
                {
                  type: 'LightPressAction',
                  value: g,
                  speed: c,
                  option: 0 === v ? 'onToOff' : 'offToOn',
                  rgb: h,
                  dazzle: z,
                }
              );
            case 9:
              return (b(L), { type: 'LightConverage', value: g, speed: c, rgb: h, dazzle: z });
            case 10:
              return (b(L), { type: 'LightSineWave', value: g, speed: c, rgb: h, dazzle: z });
            case 11:
              return (
                b(L),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === v ? 'out' : 'in',
                  value: g,
                  speed: c,
                  rgb: h,
                  dazzle: z,
                }
              );
            case 12:
              return (b(L), { type: 'LightLineWave', value: g, speed: c, rgb: h, dazzle: z });
            case 14:
              return (b(L), { type: 'LightLaser', value: g, speed: c, rgb: h, dazzle: z });
            case 15:
              return (
                b(L),
                {
                  type: 'LightCircleWave',
                  value: g,
                  speed: c,
                  rgb: h,
                  option: 0 === v ? 'anti-clockwise' : 'clockwise',
                  dazzle: z,
                }
              );
            case 16:
              return (b(L), { type: 'LightDazzing', value: g, speed: c, rgb: h, dazzle: z });
            case 17:
              return (b(L), { type: 'LightRainDown', value: g, speed: c, rgb: h, dazzle: z });
            case 18:
              return (b(L), { type: 'LightMeteor', value: g, speed: c, rgb: h, dazzle: z });
            case 19:
              return (b(L), { type: 'LightPressActionOff', value: g, speed: c, rgb: h, dazzle: z });
            case 13:
              const t = i.valueForKey(n, v);
              return { type: 'LightUserPicture', value: g, option: void 0 === t ? '1' : t };
            case 20:
              const a = i.valueForKey(o, v);
              return {
                type: 'LightMusicFollow',
                value: g,
                option: void 0 === a ? 'upright' : a,
                rgb: h,
                dazzle: y,
              };
            case 21:
              return { type: 'LightScreenColor', value: l };
            case 22:
              const r = i.valueForKey(o, v);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === r ? 'upright' : r,
                value: g,
                rgb: h,
                dazzle: y,
              };
            case 23:
              return (b(L), { type: 'LightTrain', value: g, speed: c, rgb: h, dazzle: z });
            case 24:
              return (
                b(L),
                {
                  type: 'LightFireWorks',
                  value: g,
                  speed: c,
                  rgb: h,
                  option: 0 === v ? 'right' : 'left',
                  dazzle: z,
                }
              );
            case 23:
              return (b(L), { type: 'LightTrain', value: g, speed: c, rgb: h, dazzle: z });
            case 24:
              return (
                b(L),
                {
                  type: 'LightFireWorks',
                  value: g,
                  speed: c,
                  rgb: h,
                  option: 0 === v ? 'right' : 'left',
                  dazzle: z,
                }
              );
            default:
              return;
          }
        })));
  }
}
exports.YZW_K178 = p;
