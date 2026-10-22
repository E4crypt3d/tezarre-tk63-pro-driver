/* Recovered from Tezarre Driver 1.1.31 - renderer module B9BF */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_HF68 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_hf68Matrix.js'),
  s = require('./yzw_k68.js'),
  o = 6;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_hf68),
      (this.MAXSPEED = 4),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 65280,
        2: 255,
        3: 16732160,
        4: 16711935,
        5: 16776960,
        6: 16777215,
      }),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = this.FEA_CMD_SET_LEDPARAM;
          let r = 0,
            s = 0,
            n = 0,
            u = 7,
            l = i.dazzle;
          const c = l ? this.DAZZLE : this.NORMAL,
            h = l ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (n = i.value), (u = c));
              break;
            case 'LightBreath':
              ((r = 2), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightNeon':
              ((r = 3), (s = i.speed), (n = i.value));
              break;
            case 'LightWave':
              ((r = 4),
                (s = i.speed),
                (u = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | c : (this.WAVEOP.right << 4) | c),
                (n = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightRaindrop':
              ((r = 6), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightSnake':
              ((r = 7),
                (s = i.speed),
                (u = 'z' === i.option || void 0 === i.option ? 0 | c : 16 | c),
                (n = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightConverage':
              ((r = 9), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightSineWave':
              ((r = 10), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightKaleidoscope':
              ((r = 11),
                (s = i.speed),
                (u = 'out' === i.option || void 0 === i.option ? 0 | c : 16 | c),
                (n = i.value));
              break;
            case 'LightLineWave':
              ((r = 12), (s = i.speed), (n = i.value), (u = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((r = 13), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightLaser':
              ((r = 14), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightCircleWave':
              ((r = 15),
                (s = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | c : 16 | c));
              break;
            case 'LightDazzing':
              ((r = 16), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightMusicFollow':
              ((r = 17), (u = (this.MP[i.option] << 4) | h), (n = i.value));
              break;
            case 'LightScreenColor':
              ((r = 18), (n = o), (u = 0));
              break;
            case 'LightMusicFollow2':
              ((r = 19),
                (n = i.value),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | h : (this.MP[i.option] << 4) | h));
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
          const p = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(p, this.BIGCMDDELAY)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = this.COMMONCOLOR,
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const n = s[1],
            u = this.MAXSPEED - s[2],
            l = s[3],
            c = s[4];
          let h = t.rgbToNum(s[5], s[6], s[7]);
          const p = c >> 4,
            d = 15 & c,
            g = (t) => {
              if (t === this.NORMAL || t === this.DAZZLE) return;
              const i = e[t];
              void 0 !== i && (h = i);
            },
            v = d === this.DAZZLE,
            L = 0 === c;
          switch ((16449530 === h && (h = 16777215), n)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (g(d), { type: 'LightAlwaysOn', value: l, rgb: h, dazzle: v });
            case 2:
              return (g(d), { type: 'LightBreath', value: l, speed: u, rgb: h, dazzle: v });
            case 3:
              return { type: 'LightNeon', value: l, speed: u, option: 0 === p ? 'Default' : 'Random' };
            case 4:
              const e = i.valueForKey(this.WAVEOP, p);
              return {
                type: 'LightWave',
                value: l,
                speed: u,
                option: void 0 === e ? 'right' : e,
                rgb: h,
                dazzle: v,
              };
            case 5:
              return (
                g(d),
                {
                  type: 'LightRipple',
                  value: l,
                  speed: u,
                  option: 0 === p ? 'full' : 'single',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 6:
              return (g(d), { type: 'LightRaindrop', value: l, speed: u, rgb: h, dazzle: v });
            case 7:
              return (
                g(d),
                {
                  type: 'LightSnake',
                  value: l,
                  speed: u,
                  option: 0 === p ? 'z' : 'return',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 8:
              return (
                g(d),
                {
                  type: 'LightPressAction',
                  value: l,
                  speed: u,
                  option: 0 === p ? 'onToOff' : 'offToOn',
                  rgb: h,
                  dazzle: v,
                }
              );
            case 9:
              return (g(d), { type: 'LightConverage', value: l, speed: u, rgb: h, dazzle: v });
            case 10:
              return (g(d), { type: 'LightSineWave', value: l, speed: u, rgb: h, dazzle: v });
            case 11:
              return (
                g(d),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === p ? 'out' : 'in',
                  value: l,
                  speed: u,
                  rgb: h,
                  dazzle: v,
                }
              );
            case 12:
              return (g(d), { type: 'LightLineWave', value: l, speed: u, rgb: h, dazzle: !0 });
            case 13:
              const t = i.valueForKey(this.USEROP, p);
              return { type: 'LightUserPicture', value: l, option: void 0 === t ? '1' : t };
            case 14:
              return (g(d), { type: 'LightLaser', value: l, speed: u, rgb: h, dazzle: v });
            case 15:
              return (
                g(d),
                {
                  type: 'LightCircleWave',
                  value: l,
                  speed: u,
                  rgb: h,
                  option: 0 === p ? 'anti-clockwise' : 'clockwise',
                  dazzle: v,
                }
              );
            case 16:
              return (g(d), { type: 'LightDazzing', value: l, speed: u, rgb: h, dazzle: v });
            case 17:
              const a = i.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow',
                value: l,
                option: void 0 === a ? 'upright' : a,
                rgb: h,
                dazzle: L,
              };
            case 18:
              return { type: 'LightScreenColor', value: o };
            case 19:
              const r = i.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === r ? 'upright' : r,
                value: l,
                rgb: h,
                dazzle: L,
              };
            default:
              return;
          }
        })));
  }
}
exports.YZW_HF68 = n;
