/* Recovered from Tezarre Driver 1.1.31 - renderer module T6j9 */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_SK1 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_k68.js'),
  s = require('./yzw_sk1Matrix.js'),
  o = { upright: 0, separate: 1, intersect: 2 },
  n = { right: 0, left: 1, down: 2, up: 3 },
  u = 4;
class l extends r.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = s.defaultMatrix_yzw_sk1),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            l = 0,
            c = 7,
            p = i.dazzle;
          const g = p ? this.DAZZLE : this.NORMAL,
            d = p ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (l = i.value), (c = g));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (l = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (c = void 0 !== i.option ? (n[i.option] << 4) | g : (n.right << 4) | g),
                (l = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (c = 'z' === i.option || void 0 === i.option ? 0 | g : 16 | g),
                (l = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (c = 'out' === i.option || void 0 === i.option ? 0 | g : 16 | g),
                (l = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (l = i.value), (c = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (c = void 0 !== i.option ? this.USEROP[i.option] : 0), (l = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (l = i.value),
                (c = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | g : 16 | g));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightMusicFollow':
              ((r = 17), (c = (o[i.option] << 4) | d), (l = i.value));
              break;
            case 'LightScreenColor':
              ((r = 18), (l = u));
              break;
            case 'LightMusicFollow2':
              ((r = 19),
                (l = i.value),
                (c = void 0 === i.option || 'upright' === i.option ? 0 | d : (o[i.option] << 4) | d));
              break;
            case 'LightObliqueWave':
              ((r = 20), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightTrain':
              ((r = 21), (s = i.speed), (l = i.value), (c = g));
              break;
            case 'LightRainDown':
              ((r = 22), (s = i.speed), (l = i.value), (c = g));
          }
          if (((e[1] = r), (e[2] = 5 - s), (e[3] = l), (e[4] = c), 'rgb' in i && void 0 !== i.rgb)) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const h = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(h, this.BIGCMDDELAY)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 65535, 4: 16711935, 5: 16776960, 6: 16777215 },
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const l = s[1],
            c = 5 - s[2],
            p = s[3],
            g = s[4];
          let d = t.rgbToNum(s[5], s[6], s[7]);
          const h = g >> 4,
            v = 15 & g,
            L = (t) => {
              if (17 === l || 19 === l) return;
              if (t === this.DAZZLE || t === this.NORMAL) return;
              const i = e[t];
              void 0 !== i && (d = i);
            },
            b = v === this.DAZZLE,
            z = 0 === g;
          switch ((16449530 === d && (d = 16777215), l)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (L(v), { type: 'LightAlwaysOn', value: p, rgb: d, dazzle: b });
            case 2:
              return (L(v), { type: 'LightBreath', value: p, speed: c, rgb: d, dazzle: b });
            case 3:
              return { type: 'LightNeon', value: p, speed: c, option: 0 === h ? 'Default' : 'Random' };
            case 4:
              L(v);
              const e = i.valueForKey(n, h);
              return {
                type: 'LightWave',
                value: p,
                speed: c,
                option: void 0 === e ? 'right' : e,
                rgb: d,
                dazzle: b,
              };
            case 5:
              return (
                L(v),
                {
                  type: 'LightRipple',
                  value: p,
                  speed: c,
                  option: 0 === h ? 'full' : 'single',
                  rgb: d,
                  dazzle: b,
                }
              );
            case 6:
              return (L(v), { type: 'LightRaindrop', value: p, speed: c, rgb: d, dazzle: b });
            case 7:
              return (
                L(v),
                {
                  type: 'LightSnake',
                  value: p,
                  speed: c,
                  option: 0 === h ? 'z' : 'return',
                  rgb: d,
                  dazzle: b,
                }
              );
            case 8:
              return (
                L(v),
                {
                  type: 'LightPressAction',
                  value: p,
                  speed: c,
                  option: 0 === h ? 'onToOff' : 'offToOn',
                  rgb: d,
                  dazzle: b,
                }
              );
            case 9:
              return (L(v), { type: 'LightConverage', value: p, speed: c, rgb: d, dazzle: b });
            case 10:
              return (L(v), { type: 'LightSineWave', value: p, speed: c, rgb: d, dazzle: b });
            case 11:
              return (
                L(v),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === h ? 'out' : 'in',
                  value: p,
                  speed: c,
                  rgb: d,
                  dazzle: b,
                }
              );
            case 12:
              return (L(v), { type: 'LightLineWave', value: p, speed: c, rgb: d, dazzle: !0 });
            case 13:
              const t = i.valueForKey(this.USEROP, h << 4);
              return { type: 'LightUserPicture', value: p, option: void 0 === t ? '1' : t };
            case 14:
              return (L(v), { type: 'LightLaser', value: p, speed: c, rgb: d, dazzle: b });
            case 15:
              return (
                L(v),
                {
                  type: 'LightCircleWave',
                  value: p,
                  speed: c,
                  rgb: d,
                  option: 0 === h ? 'anti-clockwise' : 'clockwise',
                  dazzle: b,
                }
              );
            case 16:
              return (L(v), { type: 'LightDazzing', value: p, speed: c, rgb: d, dazzle: b });
            case 17:
              L(v);
              const a = i.valueForKey(o, h);
              return {
                type: 'LightMusicFollow',
                value: p,
                option: void 0 === a ? 'upright' : a,
                rgb: d,
                dazzle: z,
              };
            case 18:
              return { type: 'LightScreenColor', value: u };
            case 19:
              L(v);
              const r = i.valueForKey(o, h);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === r ? 'upright' : r,
                value: p,
                rgb: d,
                dazzle: z,
              };
            case 20:
              return (L(v), { type: 'LightObliqueWave', value: p, speed: c, rgb: d, dazzle: b });
            case 21:
              return (L(v), { type: 'LightTrain', value: p, speed: c, rgb: d, dazzle: b });
            case 22:
              return (L(v), { type: 'LightRainDown', value: p, speed: c, rgb: d, dazzle: b });
            default:
              return;
          }
        })));
  }
}
exports.YZW_SK1 = l;
