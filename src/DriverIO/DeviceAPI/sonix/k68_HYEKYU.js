/* Recovered from Tezarre Driver 1.1.31 - renderer module YVlA */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (a, s) {
      function n(e) {
        try {
          o(r.next(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        try {
          o(r.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function o(e) {
        var t;
        e.done
          ? a(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(n, u);
      }
      o((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_HYEKYU = void 0));
const t = require('./../dk2017.js'),
  i = require('./k68_hyekyuMatrix.js');
class r extends t.Dk2017 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_k68_hyekyu),
      (this.setLightSetting = (t) =>
        e(this, void 0, void 0, function* () {
          console.error(t);
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            r = 0,
            a = 0,
            s = 0;
          switch (t.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (a = t.value));
              break;
            case 'LightBreath':
              ((i = 2), (r = t.speed), (a = t.value));
              break;
            case 'LightWave':
              ((i = 3), (r = t.speed), (s = 'right' === t.option ? 0 : 1), (a = t.value));
              break;
            case 'LightRipple':
              ((i = 4), (r = t.speed), (s = 'full' === t.option ? 0 : 1), (a = t.value));
              break;
            case 'LightRaindrop':
              ((i = 5), (r = t.speed), (a = t.value));
              break;
            case 'LightSnake':
              ((i = 6), (r = t.speed), (s = 'z' === t.option ? 0 : 1), (a = t.value));
              break;
            case 'LightPressAction':
              ((i = 7), (r = t.speed), (s = 'onToOff' === t.option ? 0 : 1), (a = t.value));
              break;
            case 'LightConverage':
              ((i = 8), (r = t.speed), (a = t.value));
              break;
            case 'LightUserPicture':
              ((i = 9), (a = t.value));
              break;
            case 'LightSingleRipple':
              ((i = 10), (r = t.speed), (a = t.value));
              break;
            case 'LightRoundRipple':
              ((i = 11), (r = t.speed), (a = t.value));
          }
          return ((e[1] = i), (e[2] = 5 - r), (e[3] = a), (e[4] = s), yield this.writeFeatureCmd(e));
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 132;
          const t = yield this.commomFeature(e);
          if (void 0 === t) return;
          const i = t[1],
            r = 5 - t[2],
            a = t[3],
            s = t[4];
          switch (i) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return { type: 'LightAlwaysOn', value: a, rgb: 0 };
            case 2:
              return { type: 'LightBreath', value: a, speed: r, rgb: 0 };
            case 3:
              return { type: 'LightWave', value: a, speed: r, option: 0 === s ? 'right' : 'left' };
            case 4:
              return { type: 'LightRipple', value: a, speed: r, option: 0 === s ? 'full' : 'single' };
            case 5:
              return { type: 'LightRaindrop', value: a, speed: r };
            case 6:
              return { type: 'LightSnake', value: a, speed: r, option: 0 === s ? 'z' : 'return' };
            case 7:
              return {
                type: 'LightPressAction',
                value: a,
                speed: r,
                option: 0 === s ? 'onToOff' : 'offToOn',
              };
            case 8:
              return { type: 'LightConverage', value: a, speed: r };
            case 9:
              return { type: 'LightUserPicture', value: a };
            case 10:
              return { type: 'LightSingleRipple', value: a, speed: r };
            case 11:
              return { type: 'LightRoundRipple', value: a, speed: r };
            default:
              return;
          }
        })));
  }
}
exports.K68_HYEKYU = r;
