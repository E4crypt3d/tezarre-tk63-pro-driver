/* Recovered from Tezarre Driver 1.1.31 - renderer module feAJ */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_HF68 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./k68_hf68Matrix.js'),
  i = require('./k68.js'),
  s = { upright: 0, separate: 1, intersect: 2 };
class n extends i.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = a.defaultMatrix_k68_hf68),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let a = 0,
            i = 0,
            n = 0,
            u = 7;
          switch (r.type) {
            case 'LightOff':
              a = 0;
              break;
            case 'LightAlwaysOn':
              ((a = 1), (n = r.value));
              break;
            case 'LightBreath':
              ((a = 2), (i = r.speed), (n = r.value));
              break;
            case 'LightNeon':
              ((a = 3), (i = r.speed), (n = r.value));
              break;
            case 'LightWave':
              ((a = 4), (i = r.speed), (u = 'right' === r.option ? 0 : 1), (n = r.value));
              break;
            case 'LightRipple':
              ((a = 5), (i = r.speed), (u = 'full' === r.option ? 112 : 113), (n = r.value));
              break;
            case 'LightRaindrop':
              ((a = 6), (i = r.speed), (n = r.value));
              break;
            case 'LightSnake':
              ((a = 7), (i = r.speed), (u = 'z' === r.option ? 112 : 113), (n = r.value));
              break;
            case 'LightPressAction':
              ((a = 8), (i = r.speed), (u = 'onToOff' === r.option ? 112 : 113), (n = r.value));
              break;
            case 'LightConverage':
              ((a = 9), (i = r.speed), (n = r.value));
              break;
            case 'LightUserPicture':
              ((a = 10), (u = 0));
              break;
            case 'LightMusicFollow':
              ((a = 11), (u = s[r.option] << 4));
              break;
            case 'LightSineWave':
              ((a = 12), (i = r.speed), (n = r.value));
              break;
            case 'LightKaleidoscope':
              ((a = 13), (i = r.speed), (n = r.value));
              break;
            case 'LightCircleWave':
              ((a = 14), (i = r.speed), (n = r.value));
              break;
            case 'LightScreenColor':
              ((a = 15), (n = r.value));
          }
          if (((e[1] = a), (e[2] = 5 - i), (e[3] = n), (e[4] = u), 'rgb' in r && void 0 !== r.rgb)) {
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
            a = Buffer.alloc(64);
          a[0] = 132;
          const i = yield this.commomFeature(a);
          if (void 0 === i) return;
          const n = i[1],
            u = 5 - i[2],
            o = i[3],
            c = i[4];
          let l = t.rgbToNum(i[5], i[6], i[7]);
          const p = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (l = r);
          };
          switch ((16449530 === l && (l = 16777215), n)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (p(c), { type: 'LightAlwaysOn', value: o, rgb: l });
            case 2:
              return (p(c), { type: 'LightBreath', value: o, speed: u, rgb: l });
            case 3:
              return { type: 'LightNeon', value: o, speed: u };
            case 4:
              return { type: 'LightWave', value: o, speed: u, option: 0 == (15 & c) ? 'right' : 'left' };
            case 5:
              return (
                p(c >> 4),
                { type: 'LightRipple', value: o, speed: u, option: 0 == (15 & c) ? 'full' : 'single', rgb: l }
              );
            case 6:
              return (p(c), { type: 'LightRaindrop', value: o, speed: u, rgb: l });
            case 7:
              return (
                p(c),
                { type: 'LightSnake', value: o, speed: u, option: 0 == (15 & c) ? 'z' : 'return', rgb: l }
              );
            case 8:
              return (
                p(c >> 4),
                {
                  type: 'LightPressAction',
                  value: o,
                  speed: u,
                  option: 0 == (15 & c) ? 'onToOff' : 'offToOn',
                  rgb: l,
                }
              );
            case 9:
              return (p(c), { type: 'LightConverage', value: o, speed: u, rgb: l });
            case 10:
              return { type: 'LightUserPicture', value: o };
            case 11:
              const e = r.valueForKey(s, c);
              return { type: 'LightMusicFollow', value: o, option: void 0 === e ? 'upright' : e, rgb: l };
            case 12:
              return (p(c), { type: 'LightSineWave', value: o, speed: u, rgb: l });
            case 12:
              return (p(c), { type: 'LightKaleidoscope', value: o, speed: u, rgb: l });
            case 13:
              return (p(c), { type: 'LightCircleWave', value: o, speed: u, rgb: l });
            case 14:
              return { type: 'LightScreenColor', value: o };
            default:
              return;
          }
        })));
  }
}
exports.K68_HF68 = n;
