/* Recovered from Tezarre Driver 1.1.31 - renderer module pZ5d */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K980 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  s = require('./yzw_k68.js'),
  r = require('./yzw_k980Matrix.js'),
  o = 6;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_k980),
      (this.DAZZLE = 7),
      (this.NORMAL = 8),
      (this.MAXSPEED = 4),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 65280,
        2: 255,
        3: 16733440,
        4: 7799039,
        5: 16776960,
        6: 16777215,
      }),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let s = 0,
            r = 0,
            n = 0,
            u = 7,
            l = i.dazzle;
          const c = l ? this.DAZZLE : this.NORMAL,
            h = l ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              s = 0;
              break;
            case 'LightAlwaysOn':
              ((s = 1), (n = i.value), (u = c));
              break;
            case 'LightBreath':
              ((s = 2), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightNeon':
              ((s = 3), (r = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((s = 4),
                (r = i.speed),
                (u = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | c : (this.WAVEOP.right << 4) | c),
                (n = i.value));
              break;
            case 'LightRipple':
              ((s = 5), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightRaindrop':
              ((s = 6), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightSnake':
              ((s = 7),
                (r = i.speed),
                (u = 'z' === i.option || void 0 === i.option ? 0 | c : 16 | c),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((s = 8), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightConverage':
              ((s = 9), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightSineWave':
              ((s = 10), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightKaleidoscope':
              ((s = 11),
                (r = i.speed),
                (u = 'out' === i.option || void 0 === i.option ? 0 | c : 16 | c),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((s = 12), (r = i.speed), (n = i.value), (u = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((s = 13), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((s = 14), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightCircleWave':
              ((s = 15),
                (r = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | c : 16 | c));
              break;
            case 'LightDazzing':
              ((s = 16), (r = i.speed), (n = i.value), (u = c));
              break;
            case 'LightMusicFollow':
              ((s = 20), (u = (this.MP[i.option] << 4) | h), (n = i.value));
              break;
            case 'LightScreenColor':
              ((s = 21), (n = o), (u = 0));
              break;
            case 'LightMusicFollow2':
              ((s = 22),
                (n = i.value),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | h : (this.MP[i.option] << 4) | h));
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
          const p = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(p, this.BIGCMDDELAY)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_LEDPARAM;
          const a = yield this.getBufSe(e),
            s = yield this.commomFeature(a);
          if (void 0 === s) return;
          const r = s[1],
            n = this.MAXSPEED - s[2],
            u = s[3],
            l = s[4];
          let c = t.rgbToNum(s[5], s[6], s[7]);
          const h = l >> 4,
            p = 15 & l,
            d = (e) => {
              if (e === this.DAZZLE || e === this.NORMAL) return;
              const t = this.COMMONCOLOR[e];
              void 0 !== t && (c = t);
            },
            g = p === this.DAZZLE,
            v = 0 === l;
          switch ((16449530 === c && (c = 16777215), r)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (d(p), { type: 'LightAlwaysOn', value: u, rgb: c, dazzle: g });
            case 2:
              return (d(p), { type: 'LightBreath', value: u, speed: n, rgb: c, dazzle: g });
            case 3:
              return { type: 'LightNeon', value: u, speed: n, option: 0 === h ? 'Default' : 'Random' };
            case 4:
              const e = i.valueForKey(this.WAVEOP, h);
              return {
                type: 'LightWave',
                value: u,
                speed: n,
                option: void 0 === e ? 'right' : e,
                rgb: c,
                dazzle: g,
              };
            case 5:
              return (
                d(p),
                {
                  type: 'LightRipple',
                  value: u,
                  speed: n,
                  option: 0 === h ? 'full' : 'single',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 6:
              return (d(p), { type: 'LightRaindrop', value: u, speed: n, rgb: c, dazzle: g });
            case 7:
              return (
                d(p),
                {
                  type: 'LightSnake',
                  value: u,
                  speed: n,
                  option: 0 === h ? 'z' : 'return',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 8:
              return (
                d(p),
                {
                  type: 'LightPressAction',
                  value: u,
                  speed: n,
                  option: 0 === h ? 'onToOff' : 'offToOn',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 9:
              return (d(p), { type: 'LightConverage', value: u, speed: n, rgb: c, dazzle: g });
            case 10:
              return (d(p), { type: 'LightSineWave', value: u, speed: n, rgb: c, dazzle: g });
            case 11:
              return (
                d(p),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === h ? 'out' : 'in',
                  value: u,
                  speed: n,
                  rgb: c,
                  dazzle: g,
                }
              );
            case 12:
              return (d(p), { type: 'LightLineWave', value: u, speed: n, rgb: c, dazzle: g });
            case 13:
              const t = i.valueForKey(this.USEROP, l);
              return { type: 'LightUserPicture', value: u, option: void 0 === t ? '1' : t };
            case 14:
              return (d(p), { type: 'LightLaser', value: u, speed: n, rgb: c, dazzle: g });
            case 15:
              return (
                d(p),
                {
                  type: 'LightCircleWave',
                  value: u,
                  speed: n,
                  rgb: c,
                  option: 0 === h ? 'anti-clockwise' : 'clockwise',
                  dazzle: g,
                }
              );
            case 16:
              return (d(p), { type: 'LightDazzing', value: u, speed: n, rgb: c, dazzle: g });
            case 20:
              const a = i.valueForKey(this.MP, h);
              return {
                type: 'LightMusicFollow',
                value: u,
                option: void 0 === a ? 'upright' : a,
                rgb: c,
                dazzle: v,
              };
            case 21:
              return { type: 'LightScreenColor', value: o };
            case 22:
              const s = i.valueForKey(this.MP, h);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === s ? 'upright' : s,
                value: u,
                rgb: c,
                dazzle: v,
              };
            default:
              return;
          }
        })));
  }
}
exports.YZW_K980 = n;
