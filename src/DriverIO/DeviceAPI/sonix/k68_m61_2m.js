/* Recovered from Tezarre Driver 1.1.31 - renderer module os3O */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, a) {
    return new (i || (i = Promise))(function (r, s) {
      function n(e) {
        try {
          u(a.next(e));
        } catch (t) {
          s(t);
        }
      }
      function o(e) {
        try {
          u(a.throw(e));
        } catch (t) {
          s(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(n, o);
      }
      u((a = a.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_M61_2M = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./k68.js'),
  s = require('./k68_m61_2mMatrix.js'),
  n = { 1: 0, 2: 16, 3: 32, 4: 48, 5: 0 },
  o = { right: 0, left: 1, down: 2, up: 3 };
class u extends r.K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = s.defaultMatrix_k68_m61_2m),
      (this.BIGCMDDELAY = 'darwin' == process.platform ? 800 : 100),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            u = 0,
            l = 7;
          const p = i.dazzle ? 6 : 7;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (u = i.value), (l = p));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (u = i.value));
              break;
            case 'LightWave':
              ((r = 4), (s = i.speed), (l = void 0 !== i.option ? o[i.option] : o.right), (u = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (l = 'z' === i.option || void 0 === i.option ? 0 | p : 16 | p),
                (u = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightUserPicture':
              ((r = 10), (l = void 0 !== i.option ? n[i.option] : 0), (u = i.value));
              break;
            case 'LightSineWave':
              ((r = 11), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightDazzing':
              ((r = 12), (s = i.speed), (u = i.value), (l = p));
              break;
            case 'LightKaleidoscope':
              ((r = 13),
                (s = i.speed),
                (l = 'out' === i.option || void 0 === i.option ? 0 | p : 16 | p),
                (u = i.value));
              break;
            case 'LightLineWave':
              ((r = 14), (s = i.speed), (u = i.value), (l = p));
          }
          if (((e[1] = r), (e[2] = 5 - s), (e[3] = u), (e[4] = l), 'rgb' in i && void 0 !== i.rgb)) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const c = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(c, this.BIGCMDDELAY)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 16732160, 4: 16711935, 5: 16776960, 6: 16777215 },
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const u = s[1],
            l = 5 - s[2],
            p = s[3],
            c = s[4];
          let d = t.rgbToNum(s[5], s[6], s[7]);
          const g = c >> 4,
            h = 15 & c,
            v = (t) => {
              if (7 === t || 6 === t) return;
              const i = e[t];
              void 0 !== i && (d = i);
            },
            L = 6 === h;
          switch ((16449530 === d && (d = 16777215), u)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (v(h), { type: 'LightAlwaysOn', value: p, rgb: d, dazzle: L });
            case 2:
              return (v(h), { type: 'LightBreath', value: p, speed: l, rgb: d, dazzle: L });
            case 3:
              return { type: 'LightNeon', value: p, speed: l, option: 0 === g ? 'Default' : 'Random' };
            case 4:
              const e = i.valueForKey(o, g);
              return { type: 'LightWave', value: p, speed: l, option: void 0 === e ? 'right' : e };
            case 5:
              return (
                v(h),
                {
                  type: 'LightRipple',
                  value: p,
                  speed: l,
                  option: 0 === g ? 'full' : 'single',
                  rgb: d,
                  dazzle: L,
                }
              );
            case 6:
              return (v(h), { type: 'LightRaindrop', value: p, speed: l, rgb: d, dazzle: L });
            case 7:
              return (
                v(h),
                {
                  type: 'LightSnake',
                  value: p,
                  speed: l,
                  option: 0 === g ? 'z' : 'return',
                  rgb: d,
                  dazzle: L,
                }
              );
            case 8:
              return (
                v(h),
                {
                  type: 'LightPressAction',
                  value: p,
                  speed: l,
                  option: 0 === g ? 'onToOff' : 'offToOn',
                  rgb: d,
                  dazzle: L,
                }
              );
            case 9:
              return (v(h), { type: 'LightConverage', value: p, speed: l, rgb: d, dazzle: L });
            case 10:
              const t = i.valueForKey(n, g);
              return { type: 'LightUserPicture', value: p, option: void 0 === t ? '1' : t };
            case 11:
              return (v(h), { type: 'LightSineWave', value: p, speed: l, rgb: d, dazzle: L });
            case 12:
              return (v(h), { type: 'LightDazzing', value: p, speed: l, rgb: d, dazzle: L });
            case 13:
              return (
                v(h),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === g ? 'out' : 'in',
                  value: p,
                  speed: l,
                  rgb: d,
                  dazzle: L,
                }
              );
            case 14:
              return (v(h), { type: 'LightLineWave', value: p, speed: l, rgb: d, dazzle: L });
            default:
              return;
          }
        })));
  }
}
exports.K68_M61_2M = u;
