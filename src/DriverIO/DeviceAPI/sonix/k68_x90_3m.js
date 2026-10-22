/* Recovered from Tezarre Driver 1.1.31 - renderer module Qh2J */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, r, a) {
    return new (r || (r = Promise))(function (i, s) {
      function n(e) {
        try {
          o(a.next(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        try {
          o(a.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function o(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(n, u);
      }
      o((a = a.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_X90_3M = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./k68_sk1.js'),
  a = require('./k68_x90_3mMatrix.js');
class i extends r.K68_SK1 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = a.defaultMatrix_k68_x90_3m),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let a = 0,
            i = 0,
            s = 0,
            n = 7;
          switch (r.type) {
            case 'LightOff':
              a = 0;
              break;
            case 'LightAlwaysOn':
              ((a = 1), (s = r.value));
              break;
            case 'LightBreath':
              ((a = 2), (i = r.speed), (s = r.value));
              break;
            case 'LightNeon':
              ((a = 3), (i = r.speed), (s = r.value));
              break;
            case 'LightWave':
              ((a = 4), (i = r.speed), (n = 'right' === r.option ? 0 : 1), (s = r.value));
              break;
            case 'LightRipple':
              ((a = 5), (i = r.speed), (s = r.value));
              break;
            case 'LightRaindrop':
              ((a = 6), (i = r.speed), (s = r.value));
              break;
            case 'LightSnake':
              ((a = 7), (i = r.speed), (s = r.value));
              break;
            case 'LightPressAction':
              ((a = 8), (i = r.speed), (s = r.value));
              break;
            case 'LightConverage':
              ((a = 9), (i = r.speed), (s = r.value));
              break;
            case 'LightRingWaterFall':
              ((a = 11), (i = r.speed), (s = r.value));
              break;
            case 'LightSineWave':
              ((a = 12), (i = r.speed), (s = r.value));
              break;
            case 'LightStarry':
              ((a = 13), (i = r.speed), (s = r.value));
              break;
            case 'LightKaleidoscope':
              ((a = 14), (i = r.speed), (s = r.value));
          }
          if (((e[1] = a), (e[2] = 5 - i), (e[3] = s), (e[4] = n), 'rgb' in r && void 0 !== r.rgb)) {
            let a = r.rgb;
            16777215 === a && (a = 16449530);
            const i = t.numToRgb(a);
            ((e[5] = i.r), (e[6] = i.g), (e[7] = i.b));
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
          const a = yield this.commomFeature(r);
          if (void 0 === a) return;
          const i = a[1],
            s = 5 - a[2],
            n = a[3],
            u = a[4];
          let o = t.rgbToNum(a[5], a[6], a[7]);
          const c = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (o = r);
          };
          switch ((16449530 === o && (o = 16777215), i)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (c(u), { type: 'LightAlwaysOn', value: n, rgb: o });
            case 2:
              return (c(u), { type: 'LightBreath', value: 0, speed: s, rgb: o });
            case 3:
              return { type: 'LightNeon', value: 0, speed: s };
            case 4:
              return { type: 'LightWave', value: 0, speed: s, option: 0 == (15 & u) ? 'right' : 'left' };
            case 5:
              return (
                c(u >> 4),
                { type: 'LightRipple', value: 0, speed: s, option: 0 == (15 & u) ? 'full' : 'single', rgb: o }
              );
            case 6:
              return (c(u), { type: 'LightRaindrop', value: 0, speed: s, rgb: o });
            case 7:
              return (
                c(u),
                { type: 'LightSnake', value: 0, speed: s, option: 0 == (15 & u) ? 'z' : 'return', rgb: o }
              );
            case 8:
              return (
                c(u >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: s,
                  option: 0 == (15 & u) ? 'onToOff' : 'offToOn',
                  rgb: o,
                }
              );
            case 9:
              return (c(u), { type: 'LightConverage', value: 0, speed: s, rgb: o });
            case 10:
              return (c(u), { type: 'LightRingWaterFall', value: 0, speed: s, rgb: o });
            case 11:
              return (c(u), { type: 'LightSineWave', value: 0, speed: s, rgb: o });
            case 12:
              return (c(u), { type: 'LightStarry', value: 0, speed: s });
            case 13:
              return (c(u), { type: 'LightKaleidoscope', value: 0, speed: s, rgb: o });
            default:
              return;
          }
        })));
  }
}
exports.K68_X90_3M = i;
