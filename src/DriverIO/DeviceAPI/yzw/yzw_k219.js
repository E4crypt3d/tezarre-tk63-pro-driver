/* Recovered from Tezarre Driver 1.1.31 - renderer module g0TF */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, a) {
    return new (i || (i = Promise))(function (r, s) {
      function o(e) {
        try {
          u(a.next(e));
        } catch (t) {
          s(t);
        }
      }
      function n(e) {
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
                })).then(o, n);
      }
      u((a = a.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K219 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_k219Matrix.js'),
  s = require('./yzw_k68.js'),
  o = 4;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_k219),
      (this.MAXSPEED = 4),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            n = 0,
            u = 7;
          const l = i.dazzle ? this.DAZZLE : this.NORMAL;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (n = i.value), (u = l));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (u = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | l : (this.WAVEOP.right << 4) | l),
                (n = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (u = 'z' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (u = 'out' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (n = i.value), (u = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | l : 16 | l));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (n = i.value), (u = l));
              break;
            case 'LightMusicFollow':
              ((r = 17), (u = this.MP[i.option] << 4), (n = o));
              break;
            case 'LightScreenColor':
              ((r = 18), (n = o));
              break;
            case 'LightMusicFollow2':
              ((r = 19), (n = o), (u = 0));
          }
          if (((e[1] = r), (e[2] = 4 - s), (e[3] = n), (e[4] = u), 'rgb' in i && void 0 !== i.rgb)) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const c = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(c, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 16711935, 4: 16776960, 5: 16777215, 6: 0 },
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const n = s[1],
            u = this.MAXSPEED - s[2],
            l = s[3],
            c = s[4];
          let p = t.rgbToNum(s[5], s[6], s[7]);
          const h = c >> 4,
            g = 15 & c,
            d = (t) => {
              if (t === this.DAZZLE || t === this.NORMAL) return;
              const i = e[t];
              void 0 !== i && (p = i);
            },
            v = g === this.DAZZLE;
          switch ((16449530 === p && (p = 16777215), n)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (d(g), { type: 'LightAlwaysOn', value: l, rgb: p, dazzle: v });
            case 2:
              return (d(g), { type: 'LightBreath', value: l, speed: u, rgb: p, dazzle: v });
            case 3:
              return { type: 'LightNeon', value: l, speed: u, option: 0 === h ? 'Default' : 'Random' };
            case 4:
              d(g);
              const e = i.valueForKey(this.WAVEOP, h);
              return {
                type: 'LightWave',
                value: l,
                speed: u,
                option: void 0 === e ? 'right' : e,
                rgb: p,
                dazzle: v,
              };
            case 5:
              return (
                d(g),
                {
                  type: 'LightRipple',
                  value: l,
                  speed: u,
                  option: 0 === h ? 'full' : 'single',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 6:
              return (d(g), { type: 'LightRaindrop', value: l, speed: u, rgb: p, dazzle: v });
            case 7:
              return (
                d(g),
                {
                  type: 'LightSnake',
                  value: l,
                  speed: u,
                  option: 0 === h ? 'z' : 'return',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 8:
              return (
                d(g),
                {
                  type: 'LightPressAction',
                  value: l,
                  speed: u,
                  option: 0 === h ? 'onToOff' : 'offToOn',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 9:
              return (d(g), { type: 'LightConverage', value: l, speed: u, rgb: p, dazzle: v });
            case 10:
              return (d(g), { type: 'LightSineWave', value: l, speed: u, rgb: p, dazzle: v });
            case 11:
              return (
                d(g),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === h ? 'out' : 'in',
                  value: l,
                  speed: u,
                  rgb: p,
                  dazzle: v,
                }
              );
            case 12:
              return (d(g), { type: 'LightLineWave', value: l, speed: u, rgb: p, dazzle: v });
            case 13:
              const t = i.valueForKey(this.USEROP, c);
              return { type: 'LightUserPicture', value: l, option: void 0 === t ? '1' : t };
            case 14:
              return (d(g), { type: 'LightLaser', value: l, speed: u, rgb: p, dazzle: v });
            case 15:
              return (
                d(g),
                {
                  type: 'LightCircleWave',
                  value: l,
                  speed: u,
                  rgb: p,
                  option: 0 === h ? 'anti-clockwise' : 'clockwise',
                  dazzle: v,
                }
              );
            case 16:
              return (d(g), { type: 'LightDazzing', value: l, speed: u, rgb: p, dazzle: v });
            case 17:
              const a = i.valueForKey(this.MP, h);
              return { type: 'LightMusicFollow', value: o, option: void 0 === a ? 'upright' : a, rgb: p };
            case 18:
              return { type: 'LightScreenColor', value: o };
            case 19:
              return { type: 'LightMusicFollow2', value: o };
            default:
              return;
          }
        })));
  }
}
exports.YZW_K219 = n;
