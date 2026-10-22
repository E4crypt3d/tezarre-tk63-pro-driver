/* Recovered from Tezarre Driver 1.1.31 - renderer module P1iP */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, a) {
    return new (i || (i = Promise))(function (s, r) {
      function o(e) {
        try {
          u(a.next(e));
        } catch (t) {
          r(t);
        }
      }
      function n(e) {
        try {
          u(a.throw(e));
        } catch (t) {
          r(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? s(e.value)
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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_NJ80 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  s = require('./yzw_k68.js'),
  r = require('./yzw_nj80Matrix.js'),
  o = 4;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_nj80),
      (this.DAZZLE = 7),
      (this.NORMAL = 8),
      (this.MAXSPEED = 4),
      (this.COMMONCOLOR = { 0: 16711680, 1: 65280, 2: 255, 3: 16720435, 4: 16733440, 5: 51400, 6: 16777215 }),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let s = 0,
            r = 0,
            n = 0,
            u = 7;
          const l = i.dazzle ? this.DAZZLE : this.NORMAL;
          switch (i.type) {
            case 'LightOff':
              s = 0;
              break;
            case 'LightAlwaysOn':
              ((s = 1), (n = i.value), (u = l));
              break;
            case 'LightBreath':
              ((s = 2), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightNeon':
              ((s = 3), (r = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((s = 4),
                (r = i.speed),
                (u = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | l : (this.WAVEOP.right << 4) | l),
                (n = i.value));
              break;
            case 'LightRipple':
              ((s = 5), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightRaindrop':
              ((s = 6), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightSnake':
              ((s = 7),
                (r = i.speed),
                (u = 'z' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((s = 8), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightConverage':
              ((s = 9), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightSineWave':
              ((s = 10), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightKaleidoscope':
              ((s = 11),
                (r = i.speed),
                (u = 'out' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((s = 12), (r = i.speed), (n = i.value), (u = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((s = 13), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((s = 14), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightCircleWave':
              ((s = 15),
                (r = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | l : 16 | l));
              break;
            case 'LightDazzing':
              ((s = 16), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightRainDown':
              ((s = 17), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightMeteor':
              ((s = 18), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightPressActionOff':
              ((s = 19), (r = i.speed), (n = i.value), (u = l));
              break;
            case 'LightMusicFollow':
              ((s = 20), (u = this.MP[i.option] << 4), (n = o));
              break;
            case 'LightScreenColor':
              ((s = 21), (n = o));
              break;
            case 'LightMusicFollow2':
              ((s = 22), (n = o), (u = 0));
          }
          if (
            ((e[1] = s), (e[2] = this.MAXSPEED - r), (e[3] = n), (e[4] = u), 'rgb' in i && void 0 !== i.rgb)
          ) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const s = t.numToRgb(a);
            ((e[5] = s.r), (e[6] = s.g), (e[7] = s.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const c = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(c, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = this.COMMONCOLOR,
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const s = yield this.getBufSe(a),
            r = yield this.commomFeature(s);
          if (void 0 === r) return;
          const n = r[1],
            u = this.MAXSPEED - r[2],
            l = r[3],
            c = r[4];
          let p = t.rgbToNum(r[5], r[6], r[7]);
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
              const e = i.valueForKey(this.WAVEOP, h);
              return {
                type: 'LightWave',
                value: l,
                speed: u,
                rgb: p,
                option: void 0 === e ? 'right' : e,
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
              return (d(g), { type: 'LightLineWave', value: l, speed: u, rgb: p, dazzle: !0 });
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
              return (d(g), { type: 'LightRainDown', value: l, speed: u, rgb: p, dazzle: v });
            case 18:
              return (d(g), { type: 'LightMeteor', value: l, speed: u, rgb: p, dazzle: v });
            case 19:
              return (d(g), { type: 'LightPressActionOff', value: l, speed: u, rgb: p, dazzle: v });
            case 13:
              const t = i.valueForKey(this.USEROP, h);
              return { type: 'LightUserPicture', value: l, option: void 0 === t ? '1' : t };
            case 20:
              const a = i.valueForKey(this.MP, h);
              return { type: 'LightMusicFollow', value: o, option: void 0 === a ? 'upright' : a, rgb: p };
            case 21:
              return { type: 'LightScreenColor', value: o };
            case 22:
              return { type: 'LightMusicFollow2', value: o };
            default:
              return;
          }
        })));
  }
}
exports.YZW_NJ80 = n;
