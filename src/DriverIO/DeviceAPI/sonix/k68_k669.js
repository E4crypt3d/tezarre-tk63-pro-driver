/* Recovered from Tezarre Driver 1.1.31 - renderer module KpQl */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, r, i) {
    return new (r || (r = Promise))(function (a, s) {
      function n(e) {
        try {
          u(i.next(e));
        } catch (t) {
          s(t);
        }
      }
      function o(e) {
        try {
          u(i.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? a(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(n, o);
      }
      u((i = i.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_K669 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./../../../../unitys/tableValueForKey.js'),
  i = require('./k68.js'),
  a = require('./k68_k669Matrix.js'),
  s = { 1: 0, 2: 16, 3: 32, 4: 48 },
  n = { upright: 0, separate: 1, intersect: 2 };
class o extends i.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = a.defaultMatrix_k68_k669),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            a = 0,
            o = 0,
            u = 7;
          switch (r.type) {
            case 'LightOff':
              ((i = 0), (u <<= 4));
              break;
            case 'LightAlwaysOn':
              ((i = 1), (o = r.value), (u <<= 4));
              break;
            case 'LightBreath':
              ((i = 2), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightNeon':
              ((i = 3), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightWave':
              ((i = 4), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightRipple':
              ((i = 5), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightRaindrop':
              ((i = 6), (a = r.speed), (o = r.value));
              break;
            case 'LightSnake':
              ((i = 7), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightPressAction':
              ((i = 8), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightConverage':
              ((i = 9), (a = r.speed), (o = r.value));
              break;
            case 'LightSingleRipple':
              ((i = 10), (a = r.speed), (o = r.value), (u <<= 4));
              break;
            case 'LightUserPicture':
              ((i = 11), (o = 4), (u = void 0 !== r.option ? s[r.option] : 0));
              break;
            case 'LightMusicFollow':
              ((i = 12), (u = n[r.option] << 4), (o = r.value));
              break;
            case 'LightMusicFollow2':
              ((i = 13), (o = r.value), (u = 0));
          }
          if (((e[1] = i), (e[2] = 5 - a), (e[3] = o), (e[4] = u), 'rgb' in r && void 0 !== r.rgb)) {
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
          const o = a[1],
            u = 5 - a[2],
            c = a[3],
            l = a[4];
          let p = t.rgbToNum(a[5], a[6], a[7]);
          const g = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (p = r);
          };
          switch ((16449530 === p && (p = 16777215), o)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(l), { type: 'LightAlwaysOn', value: c, rgb: p });
            case 2:
              return (g(l), { type: 'LightBreath', value: c, speed: u, rgb: p });
            case 3:
              return { type: 'LightNeon', value: c, speed: u };
            case 4:
              return { type: 'LightWave', value: c, speed: u, option: 0 === l ? 'right' : 'left' };
            case 5:
              return (
                g(l >> 4),
                { type: 'LightRipple', value: c, speed: u, option: 0 === l ? 'full' : 'single', rgb: p }
              );
            case 6:
              return (g(l), { type: 'LightRaindrop', value: c, speed: u, rgb: p });
            case 7:
              return (
                g(l),
                { type: 'LightSnake', value: c, speed: u, option: 0 === l ? 'z' : 'return', rgb: p }
              );
            case 8:
              return (
                g(l >> 4),
                {
                  type: 'LightPressAction',
                  value: c,
                  speed: u,
                  option: 0 === l ? 'onToOff' : 'offToOn',
                  rgb: p,
                }
              );
            case 9:
              return (g(l >> 4), { type: 'LightConverage', value: c, speed: u, rgb: p });
            case 10:
              return { type: 'LightSingleRipple', value: c, speed: u, rgb: p };
            case 11:
              const e = r.valueForKey(s, l);
              return { type: 'LightUserPicture', value: 0, option: void 0 === e ? '1' : e };
            case 12:
              const t = r.valueForKey(n, l);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === t ? 'upright' : t };
            case 13:
              const i = r.valueForKey(n, l);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === i ? 'upright' : i,
                value: c,
                rgb: p,
                dazzle: !1,
              };
            default:
              return;
          }
        })));
  }
}
exports.K68_K669 = o;
