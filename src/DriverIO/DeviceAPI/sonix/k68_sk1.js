/* Recovered from Tezarre Driver 1.1.31 - renderer module iB4E */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, a, r) {
    return new (a || (a = Promise))(function (i, s) {
      function u(e) {
        try {
          l(r.next(e));
        } catch (t) {
          s(t);
        }
      }
      function n(e) {
        try {
          l(r.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function l(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof a
              ? t
              : new a(function (e) {
                  e(t);
                })).then(u, n);
      }
      l((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_SK1 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  a = require('./../../../../unitys/tableValueForKey.js'),
  r = require('./k68.js'),
  i = require('./k68_sk1Matrix.js'),
  s = { 1: 0, 2: 16, 3: 32, 4: 48 };
class u extends r.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_k68_sk1),
      (this.setLightSetting = (a) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let r = 0,
            i = 0,
            u = 0,
            n = 7;
          switch (a.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (u = a.value));
              break;
            case 'LightBreath':
              ((r = 2), (i = a.speed), (u = a.value));
              break;
            case 'LightNeon':
              ((r = 3), (i = a.speed), (u = a.value));
              break;
            case 'LightWave':
              ((r = 4), (i = a.speed), (n = 'right' === a.option ? 0 : 1), (u = a.value));
              break;
            case 'LightRipple':
              ((r = 5), (i = a.speed), (u = a.value));
              break;
            case 'LightRaindrop':
              ((r = 6), (i = a.speed), (u = a.value));
              break;
            case 'LightSnake':
              ((r = 7), (i = a.speed), (u = a.value));
              break;
            case 'LightPressAction':
              ((r = 8), (i = a.speed), (u = a.value));
              break;
            case 'LightConverage':
              ((r = 9), (i = a.speed), (u = a.value), (n <<= 4));
              break;
            case 'LightSingleRipple':
              ((r = 10), (i = a.speed), (u = a.value), (n <<= 4));
              break;
            case 'LightUserPicture':
              ((r = 11), (n = 0), (u = a.value), (n = void 0 !== a.option ? s[a.option] : 0));
              break;
            case 'LightSineWave':
              ((r = 12), (i = a.speed), (u = a.value));
              break;
            case 'LightKaleidoscope':
              ((r = 13), (i = a.speed), (u = a.value));
              break;
            case 'LightLineWave':
              ((r = 14), (i = a.speed), (u = a.value));
              break;
            case 'LightObliqueWave':
              ((r = 15), (i = a.speed), (u = a.value));
              break;
            case 'LightGreedySnake':
              ((r = 16), (i = a.speed), (u = a.value));
              break;
            case 'LightStarry':
              ((r = 17), (i = a.speed), (u = a.value));
              break;
            case 'LightWaterFall':
              ((r = 18), (i = a.speed), (u = a.value));
              break;
            case 'LightRingWaterFall':
              ((r = 19), (i = a.speed), (u = a.value));
          }
          if (((e[1] = r), (e[2] = 5 - i), (e[3] = u), (e[4] = n), 'rgb' in a && void 0 !== a.rgb)) {
            let r = a.rgb;
            16777215 === r && (r = 16449530);
            const i = t.numToRgb(r);
            ((e[5] = i.r), (e[6] = i.g), (e[7] = i.b));
          }
          return (
            'LightUserPicture' === a.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200)),
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
          const u = i[1],
            n = 5 - i[2],
            l = i[3],
            p = i[4];
          let c = t.rgbToNum(i[5], i[6], i[7]);
          const o = (t) => {
            if (7 === t) return;
            const a = e[t];
            void 0 !== a && (c = a);
          };
          switch ((16449530 === c && (c = 16777215), u)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (o(p), { type: 'LightAlwaysOn', value: l, rgb: c });
            case 2:
              return (o(p), { type: 'LightBreath', value: 0, speed: n, rgb: c });
            case 3:
              return { type: 'LightNeon', value: 0, speed: n };
            case 4:
              return { type: 'LightWave', value: l, speed: n, option: 0 == (15 & p) ? 'right' : 'left' };
            case 5:
              return (
                o(p >> 4),
                { type: 'LightRipple', value: 0, speed: n, option: 0 == (15 & p) ? 'full' : 'single', rgb: c }
              );
            case 6:
              return (o(p), { type: 'LightRaindrop', value: 0, speed: n, rgb: c });
            case 7:
              return (
                o(p),
                { type: 'LightSnake', value: 0, speed: n, option: 0 == (15 & p) ? 'z' : 'return', rgb: c }
              );
            case 8:
              return (
                o(p >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: n,
                  option: 0 == (15 & p) ? 'onToOff' : 'offToOn',
                  rgb: c,
                }
              );
            case 9:
              return (o(p), { type: 'LightConverage', value: 0, speed: n, rgb: c });
            case 10:
              return (o(p), { type: 'LightSingleRipple', value: 0, speed: n, rgb: c });
            case 11:
              const e = a.valueForKey(s, p);
              return { type: 'LightUserPicture', value: 0, option: void 0 === e ? '1' : e };
            case 12:
              return (o(p), { type: 'LightSineWave', value: 0, speed: n, rgb: c });
            case 13:
              return (o(p), { type: 'LightKaleidoscope', value: 0, speed: n });
            case 14:
              return (o(p), { type: 'LightLineWave', value: 0, speed: n, rgb: c });
            case 15:
              return (o(p), { type: 'LightObliqueWave', value: 0, speed: n, rgb: c });
            case 16:
              return (o(p), { type: 'LightGreedySnake', value: 0, speed: n, rgb: c });
            case 17:
              return (o(p), { type: 'LightStarry', value: 0, speed: n });
            case 18:
              return (o(p), { type: 'LightWaterFall', value: 0, speed: n, rgb: c });
            case 19:
              return (o(p), { type: 'LightRingWaterFall', value: 0, speed: n, rgb: c });
            default:
              return;
          }
        })));
  }
}
exports.K68_SK1 = u;
