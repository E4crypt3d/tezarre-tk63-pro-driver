/* Recovered from Tezarre Driver 1.1.31 - renderer module hVKC */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_RX980 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_kc68.js'),
  s = require('./yzw_rx980Matrix.js');
class o extends r.YZW_KC68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = s.defaultMatrix_yzw_rx980),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            o = 0,
            n = 7,
            u = i.dazzle;
          const l = u ? this.DAZZLE : this.NORMAL,
            p = u ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (o = i.value), (n = l));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (o = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (n = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | l : (this.WAVEOP.down << 4) | l),
                (o = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (n = 'z' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (o = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (n = 'out' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (o = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (o = i.value), (n = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (n = void 0 !== i.option ? this.USEROP[i.option] : 0), (o = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (o = i.value),
                (n = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | l : 16 | l));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightRainDown':
              ((r = 17), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightMeteor':
              ((r = 18), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightPressActionOff':
              ((r = 19), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightMusicFollow3':
              ((r = 20),
                (n = void 0 === i.option || 'upright' === i.option ? 0 | p : (this.MP[i.option] << 4) | p),
                (o = i.value));
              break;
            case 'LightScreenColor':
              ((r = 21), (o = 4));
              break;
            case 'LightMusicFollow2':
              ((r = 22),
                (o = i.value),
                (n = void 0 === i.option || 'upright' === i.option ? 0 | p : (this.MP[i.option] << 4) | p));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (o = i.value),
                (n = 'right' === i.option || void 0 === i.option ? 0 | l : 16 | l));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (o = i.value), (n = l));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (o = i.value),
                (n = 'right' === i.option || void 0 === i.option ? 0 | l : 16 | l));
          }
          if (
            ((e[1] = r), (e[2] = this.MAXSPEED - s), (e[3] = o), (e[4] = n), 'rgb' in i && void 0 !== i.rgb)
          ) {
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
          const e = this.COMMONCOLOR,
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const o = s[1],
            n = this.MAXSPEED - s[2],
            u = s[3],
            l = s[4];
          let p = t.rgbToNum(s[5], s[6], s[7]);
          const c = l >> 4,
            d = 15 & l,
            g = (t) => {
              if (t === this.DAZZLE || t === this.NORMAL) return;
              const i = e[t];
              void 0 !== i && (p = i);
            },
            h = d === this.DAZZLE,
            v = 0 === l;
          switch ((16449530 === p && (p = 16777215), o)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(d), { type: 'LightAlwaysOn', value: u, rgb: p, dazzle: h });
            case 2:
              return (g(d), { type: 'LightBreath', value: u, speed: n, rgb: p, dazzle: h });
            case 3:
              return { type: 'LightNeon', value: u, speed: n, option: 0 === c ? 'Default' : 'Random' };
            case 4:
              g(d);
              const e = i.valueForKey(this.WAVEOP, c);
              return {
                type: 'LightWave',
                value: u,
                speed: n,
                option: void 0 === e ? 'right' : e,
                rgb: p,
                dazzle: h,
              };
            case 5:
              return (
                g(d),
                {
                  type: 'LightRipple',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'full' : 'single',
                  rgb: p,
                  dazzle: h,
                }
              );
            case 6:
              return (g(d), { type: 'LightRaindrop', value: u, speed: n, rgb: p, dazzle: h });
            case 7:
              return (
                g(d),
                {
                  type: 'LightSnake',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'z' : 'return',
                  rgb: p,
                  dazzle: h,
                }
              );
            case 8:
              return (
                g(d),
                {
                  type: 'LightPressAction',
                  value: u,
                  speed: n,
                  option: 0 === c ? 'onToOff' : 'offToOn',
                  rgb: p,
                  dazzle: h,
                }
              );
            case 9:
              return (g(d), { type: 'LightConverage', value: u, speed: n, rgb: p, dazzle: h });
            case 10:
              return (g(d), { type: 'LightSineWave', value: u, speed: n, rgb: p, dazzle: h });
            case 11:
              return (
                g(d),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === c ? 'out' : 'in',
                  value: u,
                  speed: n,
                  rgb: p,
                  dazzle: h,
                }
              );
            case 12:
              return (g(d), { type: 'LightLineWave', value: u, speed: n, rgb: p, dazzle: h });
            case 14:
              return (g(d), { type: 'LightLaser', value: u, speed: n, rgb: p, dazzle: h });
            case 15:
              return (
                g(d),
                {
                  type: 'LightCircleWave',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'anti-clockwise' : 'clockwise',
                  dazzle: h,
                }
              );
            case 16:
              return (g(d), { type: 'LightDazzing', value: u, speed: n, rgb: p, dazzle: h });
            case 17:
              return (g(d), { type: 'LightRainDown', value: u, speed: n, rgb: p, dazzle: h });
            case 18:
              return (g(d), { type: 'LightMeteor', value: u, speed: n, rgb: p, dazzle: h });
            case 19:
              return (g(d), { type: 'LightPressActionOff', value: u, speed: n, rgb: p, dazzle: h });
            case 13:
              const t = i.valueForKey(this.USEROP, c);
              return { type: 'LightUserPicture', value: u, option: void 0 === t ? '1' : t };
            case 20:
              const a = i.valueForKey(this.MP, c);
              return {
                type: 'LightMusicFollow3',
                value: u,
                option: void 0 === a ? 'upright' : a,
                rgb: p,
                dazzle: v,
              };
            case 21:
              return { type: 'LightScreenColor', value: 4 };
            case 22:
              const r = i.valueForKey(this.MP, c);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === r ? 'upright' : r,
                value: u,
                rgb: p,
                dazzle: v,
              };
            case 23:
              return (g(d), { type: 'LightTrain', value: u, speed: n, rgb: p, dazzle: h });
            case 24:
              return (
                g(d),
                {
                  type: 'LightFireWorks',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'right' : 'left',
                  dazzle: h,
                }
              );
            case 23:
              return (g(d), { type: 'LightTrain', value: u, speed: n, rgb: p, dazzle: h });
            case 24:
              return (
                g(d),
                {
                  type: 'LightFireWorks',
                  value: u,
                  speed: n,
                  rgb: p,
                  option: 0 === c ? 'right' : 'left',
                  dazzle: h,
                }
              );
            default:
              return;
          }
        })));
  }
}
exports.YZW_RX980 = o;
