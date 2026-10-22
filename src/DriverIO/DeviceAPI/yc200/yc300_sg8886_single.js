/* Recovered from Tezarre Driver 1.1.31 - renderer module oPIi */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_SG8886_SINGLE = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./YC200Common.js'),
  s = require('./yc300_sg8886_singleMatrix.js');
class o extends r.YC200Common {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = s.defaultMatrix_yc300_sg8886_single),
      (this.DAZZLE = 0),
      (this.NORMAL = 0),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            o = 0,
            n = 7;
          i.dazzle;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (o = i.value), (n = 0));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (o = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (n = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | 0 : (this.WAVEOP.right << 4) | 0),
                (o = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightSnake':
              ((r = 7), (s = i.speed), (n = 'z' === i.option || void 0 === i.option ? 0 : 16), (o = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (n = 'out' === i.option || void 0 === i.option ? 0 : 16),
                (o = i.value));
              break;
            case 'LightLineWave':
              ((r = 12),
                (s = i.speed),
                (o = i.value),
                (n = 'right' === i.option || void 0 === i.option ? 0 : 16));
              break;
            case 'LightUserPicture':
              ((r = 13), (n = void 0 !== i.option ? this.USEROP[i.option] : 0), (o = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (o = i.value),
                (n = 'anti-clockwise' === i.option || void 0 === i.option ? 0 : 16));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightRainDown':
              ((r = 17), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightMeteor':
              ((r = 18), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightPressActionOff':
              ((r = 19), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightMusicFollow3':
              ((r = 20),
                (n = void 0 === i.option || 'upright' === i.option ? 0 : (this.MP[i.option] << 4) | 0),
                (o = i.value));
              break;
            case 'LightScreenColor':
              ((r = 21), (o = 4));
              break;
            case 'LightMusicFollow2':
              ((r = 22),
                (o = i.value),
                (n = void 0 === i.option || 'upright' === i.option ? 0 : (this.MP[i.option] << 4) | 0));
              break;
            case 'LightTrain':
              ((r = 23), (s = i.speed), (o = i.value), (n = 0));
              break;
            case 'LightFireWorks':
              ((r = 24),
                (s = i.speed),
                (o = i.value),
                (n = 'right' === i.option || void 0 === i.option ? 0 : 16));
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
          const u = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(u, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_GET_LEDPARAM;
          const a = yield this.getBufSe(e),
            r = yield this.commomFeature(a);
          if (void 0 === r) return;
          const s = r[1],
            o = this.MAXSPEED - r[2],
            n = r[3],
            u = r[4];
          let l = t.rgbToNum(r[5], r[6], r[7]);
          const p = u >> 4,
            c = 15 & u,
            g = (e) => {
              if (e === this.DAZZLE || e === this.NORMAL) return;
              const t = this.COMMONCOLOR[e];
              void 0 !== t && (l = t);
            },
            h = c === this.DAZZLE,
            d = 0 === c;
          switch ((16449530 === l && (l = 16777215), s)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(c), { type: 'LightAlwaysOn', value: n, rgb: l, dazzle: h });
            case 2:
              return (g(c), { type: 'LightBreath', value: n, speed: o, rgb: l, dazzle: h });
            case 3:
              return { type: 'LightNeon', value: n, speed: o, option: 0 === p ? 'Default' : 'Random' };
            case 4:
              g(c);
              const e = i.valueForKey(this.WAVEOP, p);
              return {
                type: 'LightWave',
                value: n,
                speed: o,
                option: void 0 === e ? 'right' : e,
                rgb: l,
                dazzle: h,
              };
            case 5:
              return (
                g(c),
                {
                  type: 'LightRipple',
                  value: n,
                  speed: o,
                  option: 0 === p ? 'full' : 'single',
                  rgb: l,
                  dazzle: h,
                }
              );
            case 6:
              return (g(c), { type: 'LightRaindrop', value: n, speed: o, rgb: l, dazzle: h });
            case 7:
              return (
                g(c),
                {
                  type: 'LightSnake',
                  value: n,
                  speed: o,
                  option: 0 === p ? 'z' : 'return',
                  rgb: l,
                  dazzle: h,
                }
              );
            case 8:
              return (
                g(c),
                {
                  type: 'LightPressAction',
                  value: n,
                  speed: o,
                  option: 0 === p ? 'onToOff' : 'offToOn',
                  rgb: l,
                  dazzle: h,
                }
              );
            case 9:
              return (g(c), { type: 'LightConverage', value: n, speed: o, rgb: l, dazzle: h });
            case 10:
              return (g(c), { type: 'LightSineWave', value: n, speed: o, rgb: l, dazzle: h });
            case 11:
              return (
                g(c),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === p ? 'out' : 'in',
                  value: n,
                  speed: o,
                  rgb: l,
                  dazzle: h,
                }
              );
            case 12:
              return (
                g(c),
                {
                  type: 'LightLineWave',
                  option: 0 === p ? 'right' : 'left',
                  value: n,
                  speed: o,
                  rgb: l,
                  dazzle: h,
                }
              );
            case 14:
              return (g(c), { type: 'LightLaser', value: n, speed: o, rgb: l, dazzle: h });
            case 15:
              return (
                g(c),
                {
                  type: 'LightCircleWave',
                  value: n,
                  speed: o,
                  rgb: l,
                  option: 0 === p ? 'anti-clockwise' : 'clockwise',
                  dazzle: h,
                }
              );
            case 16:
              return (g(c), { type: 'LightDazzing', value: n, speed: o, rgb: l, dazzle: h });
            case 17:
              return (g(c), { type: 'LightRainDown', value: n, speed: o, rgb: l, dazzle: h });
            case 18:
              return (g(c), { type: 'LightMeteor', value: n, speed: o, rgb: l, dazzle: h });
            case 19:
              return (g(c), { type: 'LightPressActionOff', value: n, speed: o, rgb: l, dazzle: h });
            case 13:
              const a = i.valueForKey(this.USEROP, u);
              return { type: 'LightUserPicture', value: n, option: void 0 === a ? '1' : a };
            case 20:
              const v = i.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow3',
                value: n,
                option: void 0 === v ? 'upright' : v,
                rgb: t.rgbToNum(r[5], r[6], r[7]),
                dazzle: d,
              };
            case 21:
              return { type: 'LightScreenColor', value: 4 };
            case 22:
              const L = i.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === L ? 'upright' : L,
                value: n,
                rgb: t.rgbToNum(r[5], r[6], r[7]),
                dazzle: d,
              };
            case 23:
              return (g(c), { type: 'LightTrain', value: n, speed: o, rgb: l, dazzle: h });
            case 24:
              return (
                g(c),
                {
                  type: 'LightFireWorks',
                  value: n,
                  speed: o,
                  option: 0 === p ? 'right' : 'left',
                  rgb: l,
                  dazzle: h,
                }
              );
            default:
              return;
          }
        })));
  }
}
exports.YC300_SG8886_SINGLE = o;
