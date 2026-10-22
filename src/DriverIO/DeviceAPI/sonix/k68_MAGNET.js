/* Recovered from Tezarre Driver 1.1.31 - renderer module rd4H */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, a, r) {
    return new (a || (a = Promise))(function (i, s) {
      function n(e) {
        try {
          l(r.next(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
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
                })).then(n, u);
      }
      l((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_MAGNET = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  a = require('./../../../../unitys/tableValueForKey.js'),
  r = require('./../../../unitys/timeFunc.js'),
  i = require('./k68.js'),
  s = require('./k68_magnetMatrix.js'),
  n = { upright: 0, separate: 1, intersect: 2 };
class u extends i.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = s.defaultMatrix_k68_magnet),
      (this.setLightSetting = (a) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let r = 0,
            i = 0,
            s = 0,
            u = 7;
          const l = a.dazzle ? 6 : u;
          switch (a.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (s = a.value), (u = l));
              break;
            case 'LightBreath':
              ((r = 2), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightNeon':
              ((r = 3), (i = a.speed), (s = a.value));
              break;
            case 'LightWave':
              ((r = 4), (i = a.speed), (u = 'right' === a.option ? 0 : 1), (s = a.value));
              break;
            case 'LightRipple':
              ((r = 5), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightRaindrop':
              ((r = 6), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightSnake':
              ((r = 7), (i = a.speed), (s = a.value), (u = 0 | l));
              break;
            case 'LightPressAction':
              ((r = 8), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightConverage':
              ((r = 9), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightSingleRipple':
              ((r = 11), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightKaleidoscope':
              ((r = 12), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightRingWaterFall':
              ((r = 13), (i = a.speed), (s = a.value), (u = l));
              break;
            case 'LightMusicFollow':
              ((r = 14), (u = n[a.option] << 4), (s = a.value));
          }
          if (((e[1] = r), (e[2] = 5 - i), (e[3] = s), (e[4] = u), 'rgb' in a && void 0 !== a.rgb)) {
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
          const s = i[1],
            u = 5 - i[2],
            l = i[3],
            o = i[4];
          let c = t.rgbToNum(i[5], i[6], i[7]);
          const p = (t) => {
            if (7 === t || 6 === t) return;
            const a = e[t];
            void 0 !== a && (c = a);
          };
          16449530 === c && (c = 16777215);
          const d = 6 === o;
          switch (s) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (p(o), { type: 'LightAlwaysOn', value: l, rgb: c, dazzle: d });
            case 2:
              return (p(o), { type: 'LightBreath', value: l, speed: u, rgb: c, dazzle: d });
            case 3:
              return { type: 'LightNeon', value: l, speed: u, dazzle: d };
            case 4:
              return {
                type: 'LightWave',
                value: l,
                speed: u,
                option: 0 == (15 & o) ? 'right' : 'left',
                dazzle: d,
              };
            case 5:
              return (
                p(o),
                {
                  type: 'LightRipple',
                  value: l,
                  speed: u,
                  option: 0 == (15 & o) ? 'full' : 'single',
                  rgb: c,
                  dazzle: d,
                }
              );
            case 6:
              return (p(o), { type: 'LightRaindrop', value: l, speed: u, rgb: c, dazzle: d });
            case 7:
              return (
                p(o),
                {
                  type: 'LightSnake',
                  value: l,
                  speed: u,
                  option: 0 == (15 & o) ? 'z' : 'return',
                  rgb: c,
                  dazzle: d,
                }
              );
            case 8:
              return (
                p(o),
                {
                  type: 'LightPressAction',
                  value: l,
                  speed: u,
                  option: 0 == (15 & o) ? 'onToOff' : 'offToOn',
                  rgb: c,
                  dazzle: d,
                }
              );
            case 9:
              return (p(o), { type: 'LightConverage', value: l, speed: u, rgb: c, dazzle: d });
            case 10:
              return void p(o);
            case 11:
              return (p(o), { type: 'LightSingleRipple', value: l, speed: u, rgb: c, dazzle: d });
            case 12:
              return (p(o), { type: 'LightKaleidoscope', value: l, speed: u, rgb: c, dazzle: d });
            case 13:
              return (p(o), { type: 'LightRingWaterFall', value: l, speed: u, rgb: c, dazzle: d });
            case 14:
              const e = a.valueForKey(n, o);
              return {
                type: 'LightMusicFollow',
                value: l,
                option: void 0 === e ? 'upright' : e,
                rgb: c,
                dazzle: d,
              };
            default:
              return;
          }
        })),
      (this.setReSet = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_RESERT;
          const t = yield this.writeFeatureCmd(e);
          return (yield r.sleep(4e3), t);
        })));
  }
}
exports.K68_MAGNET = u;
