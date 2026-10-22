/* Recovered from Tezarre Driver 1.1.31 - renderer module mO4b */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, r, i) {
    return new (r || (r = Promise))(function (a, s) {
      function n(e) {
        try {
          o(i.next(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        try {
          o(i.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function o(e) {
        var t;
        e.done
          ? a(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(n, u);
      }
      o((i = i.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_MG = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./k68.js'),
  i = require('./k68_mgMatrix.js');
class a extends r.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_k68_mg),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            a = 0,
            s = 0;
          switch (r.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (s = r.value));
              break;
            case 'LightBreath':
              ((i = 2), (a = r.speed), (s = r.value));
              break;
            case 'LightNeon':
              ((i = 3), (a = r.speed), (s = r.value));
              break;
            case 'LightWave':
              ((i = 4), (a = r.speed), (s = r.value));
              break;
            case 'LightRipple':
              ((i = 5), (a = r.speed), (s = r.value));
              break;
            case 'LightRaindrop':
              ((i = 6), (a = r.speed), (s = r.value));
              break;
            case 'LightSnake':
              ((i = 7), (a = r.speed), (s = r.value));
              break;
            case 'LightPressAction':
              ((i = 8), (a = r.speed), (s = r.value));
              break;
            case 'LightConverage':
              ((i = 9), (a = r.speed), (s = r.value));
              break;
            case 'LightSingleRipple':
              ((i = 10), (a = r.speed), (s = r.value));
              break;
            case 'LightSineWave':
              ((i = 11), (a = r.speed), (s = r.value));
          }
          if (((e[1] = i), (e[2] = 5 - a), (e[3] = s), (e[4] = 7), 'rgb' in r && void 0 !== r.rgb)) {
            let i = r.rgb;
            16777215 === i && (i = 16449530);
            const a = t.numToRgb(i);
            ((e[5] = a.r), (e[6] = a.g), (e[7] = a.b));
          }
          return (
            'LightUserPicture' === r.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200)),
            yield this.writeFeatureCmd(e)
          );
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 65535, 4: 16711935, 5: 16776960, 6: 16777215 },
            r = Buffer.alloc(64);
          r[0] = 132;
          const i = yield this.commomFeature(r);
          if (void 0 === i) return;
          const a = i[1],
            s = 5 - i[2],
            n = i[3],
            u = i[4];
          let o = t.rgbToNum(i[5], i[6], i[7]);
          const c = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (o = r);
          };
          switch ((16449530 === o && (o = 16777215), a)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (c(u), { type: 'LightAlwaysOn', value: n, rgb: o });
            case 2:
              return (c(u), { type: 'LightBreath', value: n, speed: s, rgb: o });
            case 3:
              return { type: 'LightNeon', value: n, speed: s };
            case 4:
              return { type: 'LightWave', value: n, speed: s, option: 0 === u ? 'right' : 'left' };
            case 5:
              return (
                c(u >> 4),
                { type: 'LightRipple', value: n, speed: s, option: 0 === u ? 'full' : 'single', rgb: o }
              );
            case 6:
              return (c(u), { type: 'LightRaindrop', value: n, speed: s, rgb: o });
            case 7:
              return (
                c(u),
                { type: 'LightSnake', value: n, speed: s, option: 0 === u ? 'z' : 'return', rgb: o }
              );
            case 8:
              return (
                c(u >> 4),
                {
                  type: 'LightPressAction',
                  value: n,
                  speed: s,
                  option: 0 === u ? 'onToOff' : 'offToOn',
                  rgb: o,
                }
              );
            case 9:
              return (c(u), { type: 'LightConverage', value: n, speed: s, rgb: o });
            case 10:
              return { type: 'LightSingleRipple', value: n, speed: s, rgb: o };
            case 11:
              return { type: 'LightSineWave', value: n, speed: s, rgb: o };
            default:
              return;
          }
        })));
  }
}
exports.K68_MG = a;
