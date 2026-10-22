/* Recovered from Tezarre Driver 1.1.31 - renderer module RG7r */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_3098 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_3098Matrix.js'),
  s = require('./yzw_k68.js'),
  o = 4;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_3098),
      (this.DAZZLE = 7),
      (this.NORMAL = 8),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 65280,
        2: 255,
        3: 16733440,
        4: 7799039,
        5: 16776960,
        6: 16777215,
      }),
      (this.MAXSPEED = 4),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            n = 0,
            u = 7,
            l = i.dazzle;
          const p = l ? this.DAZZLE : this.NORMAL,
            c = l ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (n = i.value), (u = p));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (u = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | p : (this.WAVEOP.down << 4) | p),
                (n = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (u = 'z' === i.option || void 0 === i.option ? 0 | p : 16 | p),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (u = 'out' === i.option || void 0 === i.option ? 0 | p : 16 | p),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (n = i.value), (u = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | p : 16 | p));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightRainDown':
              ((r = 17), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightMeteor':
              ((r = 18), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightPressActionOff':
              ((r = 19), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightMusicFollow':
              ((r = 20),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | c : (this.MP[i.option] << 4) | c),
                (n = i.value));
              break;
            case 'LightScreenColor':
              ((r = 21), (n = o));
              break;
            case 'LightMusicFollow2':
              ((r = 22),
                (n = i.value),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | c : (this.MP[i.option] << 4) | c));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (n = i.value),
                (u = 'right' === i.option || void 0 === i.option ? 0 | p : 16 | p));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (n = i.value), (u = p));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (n = i.value),
                (u = 'right' === i.option || void 0 === i.option ? 0 | p : 16 | p));
          }
          if (
            ((e[1] = r), (e[2] = this.MAXSPEED - s), (e[3] = n), (e[4] = u), 'rgb' in i && void 0 !== i.rgb)
          ) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const h = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(h, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_LEDPARAM;
          const a = yield this.getBufSe(e),
            r = yield this.commomFeature(a);
          if (void 0 === r) return;
          const s = r[1],
            n = this.MAXSPEED - r[2],
            u = r[3],
            l = r[4];
          let p = t.rgbToNum(r[5], r[6], r[7]);
          const c = l >> 4,
            h = 15 & l,
            g = (e) => {
              if (e === this.DAZZLE || e === this.NORMAL) return;
              const t = this.COMMONCOLOR[e];
              void 0 !== t && (p = t);
            },
            d = h === this.DAZZLE,
            v = 0 === l;
          switch ((16449530 === p && (p = 16777215), s)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(h), { type: 'LightAlwaysOn', value: u, rgb: p, dazzle: d });
            case 2:
              return (g(h), { type: 'LightBreath', value: u, speed: n, rgb: p, dazzle: d });
            case 3:
              return { type: 'LightNeon', value: u, speed: n, option: 0 === c ? 'Default' : 'Random' };
            case 4:
              g(h);
              const e = i.valueForKey(this.WAVEOP, c);
              return {
                type: 'LightWave',
                value: u,
                speed: n,
                option: void 0 === e ? 'right' : e,
                rgb: p,
                dazzle: d,
              };
            case 5:
              return (
                g(h),
                {
                  type: 'LightRipple',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'full' : 'single',
                  rgb: p,
                  dazzle: d,
                }
              );
            case 6:
              return (g(h), { type: 'LightRaindrop', value: u, speed: n, rgb: p, dazzle: d });
            case 7:
              return (
                g(h),
                {
                  type: 'LightSnake',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'z' : 'return',
                  rgb: p,
                  dazzle: d,
                }
              );
            case 8:
              return (
                g(h),
                {
                  type: 'LightPressAction',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'onToOff' : 'offToOn',
                  rgb: p,
                  dazzle: d,
                }
              );
            case 9:
              return (g(h), { type: 'LightConverage', value: u, speed: n, rgb: p, dazzle: d });
            case 10:
              return (g(h), { type: 'LightSineWave', value: u, speed: n, rgb: p, dazzle: d });
            case 11:
              return (
                g(h),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === c ? 'out' : 'in',
                  value: u,
                  speed: n,
                  rgb: p,
                  dazzle: d,
                }
              );
            case 12:
              return (g(h), { type: 'LightLineWave', value: u, speed: n, rgb: p, dazzle: d });
            case 14:
              return (g(h), { type: 'LightLaser', value: u, speed: n, rgb: p, dazzle: d });
            case 15:
              return (
                g(h),
                {
                  type: 'LightCircleWave',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'anti-clockwise' : 'clockwise',
                  dazzle: d,
                }
              );
            case 16:
              return (g(h), { type: 'LightDazzing', value: u, speed: n, rgb: p, dazzle: d });
            case 17:
              return (g(h), { type: 'LightRainDown', value: u, speed: n, rgb: p, dazzle: d });
            case 18:
              return (g(h), { type: 'LightMeteor', value: u, speed: n, rgb: p, dazzle: d });
            case 19:
              return (g(h), { type: 'LightPressActionOff', value: u, speed: n, rgb: p, dazzle: d });
            case 13:
              const a = i.valueForKey(this.USEROP, l);
              return { type: 'LightUserPicture', value: u, option: void 0 === a ? '1' : a };
            case 20:
              const L = i.valueForKey(this.MP, c);
              return {
                type: 'LightMusicFollow',
                value: u,
                option: void 0 === L ? 'upright' : L,
                rgb: t.rgbToNum(r[5], r[6], r[7]),
                dazzle: v,
              };
            case 21:
              return { type: 'LightScreenColor', value: o };
            case 22:
              const b = i.valueForKey(this.MP, c);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === b ? 'upright' : b,
                value: u,
                rgb: t.rgbToNum(r[5], r[6], r[7]),
                dazzle: v,
              };
            case 23:
              return (g(h), { type: 'LightTrain', value: u, speed: n, rgb: p, dazzle: d });
            case 24:
              return (
                g(h),
                {
                  type: 'LightFireWorks',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'right' : 'left',
                  dazzle: d,
                }
              );
            case 23:
              return (g(h), { type: 'LightTrain', value: u, speed: n, rgb: p, dazzle: d });
            case 24:
              return (
                g(h),
                {
                  type: 'LightFireWorks',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'right' : 'left',
                  dazzle: d,
                }
              );
            default:
              return;
          }
        })));
  }
}
exports.YZW_3098 = n;
