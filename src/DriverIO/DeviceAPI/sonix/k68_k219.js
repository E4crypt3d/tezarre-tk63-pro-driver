/* Recovered from Tezarre Driver 1.1.31 - renderer module iHQV */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_K219 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./../../../../unitys/tableValueForKey.js'),
  i = require('./k68.js'),
  a = require('./k68_k219Matrix.js'),
  s = { 1: 0, 2: 16, 3: 32, 4: 48 },
  n = { upright: 0, separate: 1, intersect: 2 };
class u extends i.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = a.defaultMatrix_k68_k219),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            a = 0,
            u = 0,
            o = 7;
          switch (r.type) {
            case 'LightOff':
              ((i = 0), (o <<= 4));
              break;
            case 'LightAlwaysOn':
              ((i = 1), (u = r.value), (o <<= 4));
              break;
            case 'LightBreath':
              ((i = 2), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightNeon':
              ((i = 3), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightWave':
              ((i = 4), (a = r.speed), (u = r.value));
              break;
            case 'LightRipple':
              ((i = 5), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightRaindrop':
              ((i = 6), (a = r.speed), (u = r.value));
              break;
            case 'LightSnake':
              ((i = 7), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightPressAction':
              ((i = 8), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightConverage':
              ((i = 9), (a = r.speed), (u = r.value));
              break;
            case 'LightSingleRipple':
              ((i = 10), (a = r.speed), (u = r.value), (o <<= 4));
              break;
            case 'LightMusicFollow':
              ((i = 11), (o = n[r.option] << 4), (u = r.value));
              break;
            case 'LightUserPicture':
              ((i = 12), (o = void 0 !== r.option ? s[r.option] : s[1]), (u = 4));
          }
          if (((e[1] = i), (e[2] = 5 - a), (e[3] = u), (e[4] = o), 'rgb' in r && void 0 !== r.rgb)) {
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
          const u = a[1],
            o = 5 - a[2],
            c = a[3],
            p = a[4];
          let l = t.rgbToNum(a[5], a[6], a[7]);
          const g = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (l = r);
          };
          switch ((16449530 === l && (l = 16777215), u)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(p), { type: 'LightAlwaysOn', value: c, rgb: l });
            case 2:
              return (g(p), { type: 'LightBreath', value: c, speed: o, rgb: l });
            case 3:
              return { type: 'LightNeon', value: c, speed: o };
            case 4:
              return { type: 'LightWave', value: c, speed: o, option: 0 === p ? 'right' : 'left' };
            case 5:
              return (
                g(p >> 4),
                { type: 'LightRipple', value: c, speed: o, option: 0 === p ? 'full' : 'single', rgb: l }
              );
            case 6:
              return (g(p), { type: 'LightRaindrop', value: c, speed: o, rgb: l });
            case 7:
              return (
                g(p),
                { type: 'LightSnake', value: c, speed: o, option: 0 === p ? 'z' : 'return', rgb: l }
              );
            case 8:
              return (
                g(p >> 4),
                {
                  type: 'LightPressAction',
                  value: c,
                  speed: o,
                  option: 0 === p ? 'onToOff' : 'offToOn',
                  rgb: l,
                }
              );
            case 9:
              return (g(p >> 4), { type: 'LightConverage', value: c, speed: o, rgb: l });
            case 10:
              return { type: 'LightSingleRipple', value: c, speed: o, rgb: l };
            case 11:
              const e = r.valueForKey(n, p);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === e ? 'upright' : e, rgb: l };
            case 12:
              const t = r.valueForKey(s, p);
              return { type: 'LightUserPicture', value: 0, option: void 0 === t ? '1' : t };
            default:
              return;
          }
        })));
  }
}
exports.K68_K219 = u;
