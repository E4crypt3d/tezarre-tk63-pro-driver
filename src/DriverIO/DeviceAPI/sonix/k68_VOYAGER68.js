/* Recovered from Tezarre Driver 1.1.31 - renderer module b0lg */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, r, i) {
    return new (r || (r = Promise))(function (s, n) {
      function a(e) {
        try {
          u(i.next(e));
        } catch (t) {
          n(t);
        }
      }
      function o(e) {
        try {
          u(i.throw(e));
        } catch (t) {
          n(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? s(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(a, o);
      }
      u((i = i.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_VOYAGER68 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  r = require('./k68.js'),
  i = require('./k68_voyager68Matrix.js');
class s extends r.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_k68_voyager68),
      (this.setLightSetting = (r) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            s = 0,
            n = 0,
            a = 7;
          switch (r.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (n = r.value), (a <<= 4));
              break;
            case 'LightBreath':
              ((i = 2), (s = r.speed), (a <<= 4));
              break;
            case 'LightNeon':
              ((i = 3), (s = r.speed), (a <<= 4));
              break;
            case 'LightWave':
              ((i = 4), (s = r.speed), (a = 'right' === r.option ? 0 : 1), (a <<= 4));
              break;
            case 'LightRipple':
              ((i = 5), (s = r.speed), (a = 'full' === r.option ? 112 : 113));
              break;
            case 'LightRaindrop':
              ((i = 6), (s = r.speed), (a <<= 4));
              break;
            case 'LightSnake':
              ((i = 7), (s = r.speed), (a = 'z' === r.option ? 112 : 113));
              break;
            case 'LightPressAction':
              ((i = 8), (s = r.speed), (a = 'onToOff' === r.option ? 112 : 113));
              break;
            case 'LightConverage':
              ((i = 9), (s = r.speed), (a <<= 4));
              break;
            case 'LightUserPicture':
              ((i = 10), (a = 0), (a <<= 4));
          }
          if (((e[1] = i), (e[2] = 5 - s), (e[3] = n), (e[4] = a), 'rgb' in r && void 0 !== r.rgb)) {
            let i = r.rgb;
            16777215 === i && (i = 16449530);
            const s = t.numToRgb(i);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
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
          const s = i[1],
            n = 5 - i[2],
            a = i[3],
            o = i[4];
          let u = t.rgbToNum(i[5], i[6], i[7]);
          const c = (t) => {
            if (7 === t) return;
            const r = e[t];
            void 0 !== r && (u = r);
          };
          switch ((16449530 === u && (u = 16777215), s)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (c(o), { type: 'LightAlwaysOn', value: a, rgb: u });
            case 2:
              return (c(o), { type: 'LightBreath', value: 0, speed: n, rgb: u });
            case 3:
              return { type: 'LightNeon', value: 0, speed: n };
            case 4:
              return { type: 'LightWave', value: 0, speed: n, option: 0 === o ? 'right' : 'left' };
            case 5:
              return (
                c(o >> 4),
                { type: 'LightRipple', value: 0, speed: n, option: 0 === o ? 'full' : 'single', rgb: u }
              );
            case 6:
              return (c(o), { type: 'LightRaindrop', value: 0, speed: n, rgb: u });
            case 7:
              return (
                c(o),
                { type: 'LightSnake', value: 0, speed: n, option: 0 === o ? 'z' : 'return', rgb: u }
              );
            case 8:
              return (
                c(o >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: n,
                  option: 0 === o ? 'onToOff' : 'offToOn',
                  rgb: u,
                }
              );
            case 9:
              return (c(o), { type: 'LightConverage', value: 0, speed: n, rgb: u });
            case 10:
              return { type: 'LightUserPicture', value: 0 };
            default:
              return;
          }
        })));
  }
}
exports.K68_VOYAGER68 = s;
