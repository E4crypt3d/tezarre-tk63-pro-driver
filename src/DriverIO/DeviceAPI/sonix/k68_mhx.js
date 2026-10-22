/* Recovered from Tezarre Driver 1.1.31 - renderer module I8zc */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_MHX = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./../../../../unitys/tableValueForKey.js'),
  i = require('./k68.js'),
  a = require('./k68_mhxMatrix.js'),
  s = { upright: 0, separate: 1, intersect: 2 };
class n extends i.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = a.defaultMatrix_k68_mhx),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            a = 0,
            n = 0,
            u = 7;
          switch (r.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (n = r.value));
              break;
            case 'LightBreath':
              ((i = 2), (a = r.speed), (n = r.value));
              break;
            case 'LightNeon':
              ((i = 3), (a = r.speed), (n = r.value));
              break;
            case 'LightWave':
              ((i = 4), (a = r.speed), (u = 'right' === r.option ? 0 : 1), (n = r.value));
              break;
            case 'LightRipple':
              ((i = 5), (a = r.speed), (u = 'full' === r.option ? 7 : 23), (n = r.value));
              break;
            case 'LightRaindrop':
              ((i = 6), (a = r.speed), (n = r.value));
              break;
            case 'LightSnake':
              ((i = 7), (a = r.speed), (u = 'z' === r.option ? 7 : 23), (n = r.value));
              break;
            case 'LightPressAction':
              ((i = 8), (a = r.speed), (u = 7), (n = r.value));
              break;
            case 'LightConverage':
              ((i = 9), (a = r.speed), (n = r.value));
              break;
            case 'LightUserPicture':
              ((i = 10), (u = 0), (n = r.value));
              break;
            case 'LightMusicFollow':
              ((i = 11), (u = s[r.option] << 4), (n = r.value));
          }
          if (((e[1] = i), (e[2] = 5 - a), (e[3] = n), (e[4] = u), 'rgb' in r && void 0 !== r.rgb)) {
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
            i = Buffer.alloc(64);
          i[0] = 132;
          const a = yield this.commomFeature(i);
          if (void 0 === a) return;
          const n = a[1],
            u = 5 - a[2],
            o = a[3],
            c = a[4];
          let l = t.rgbToNum(a[5], a[6], a[7]);
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
              return (p(c), { type: 'LightBreath', value: 0, speed: u, rgb: l });
            case 3:
              return { type: 'LightNeon', value: 0, speed: u };
            case 4:
              return { type: 'LightWave', value: 0, speed: u, option: 0 == (15 & c) ? 'right' : 'left' };
            case 5:
              return (
                p(c >> 4),
                { type: 'LightRipple', value: 0, speed: u, option: 0 == (15 & c) ? 'full' : 'single', rgb: l }
              );
            case 6:
              return (p(c), { type: 'LightRaindrop', value: 0, speed: u, rgb: l });
            case 7:
              return (
                p(c),
                { type: 'LightSnake', value: 0, speed: u, option: 0 == (15 & c) ? 'z' : 'return', rgb: l }
              );
            case 8:
              return (
                p(c >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: u,
                  option: 0 == (15 & c) ? 'onToOff' : 'offToOn',
                  rgb: l,
                }
              );
            case 9:
              return (p(c), { type: 'LightConverage', value: 0, speed: u, rgb: l });
            case 10:
              return { type: 'LightUserPicture', value: 0 };
            case 11:
              const e = r.valueForKey(s, c);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === e ? 'upright' : e, rgb: l };
            default:
              return;
          }
        })));
  }
}
exports.K68_MHX = n;
