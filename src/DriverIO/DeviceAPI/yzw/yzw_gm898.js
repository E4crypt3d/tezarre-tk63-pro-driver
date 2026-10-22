/* Recovered from Tezarre Driver 1.1.31 - renderer module JJNA */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_GM898 = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  r = require('./yzw_gm898Matrix.js'),
  s = require('./yzw_k68.js'),
  o = 4;
class n extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_gm898),
      (this.DAZZLE = 8),
      (this.NORMAL = 10),
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
            p = l ? 0 : 4;
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
                (u =
                  void 0 !== i.option
                    ? (this.WAVEOP[i.option] << 4) | this.DAZZLE
                    : (this.WAVEOP.right << 4) | this.DAZZLE),
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
              ((r = 12), (s = i.speed), (n = i.value), (u = 8));
              break;
            case 'LightLaser':
              ((r = 13), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightCircleWave':
              ((r = 14),
                (s = i.speed),
                (n = i.value),
                (u = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | c : 16 | c));
              break;
            case 'LightDazzing':
              ((r = 15), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightRainDown':
              ((r = 16), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightMeteor':
              ((r = 17), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightPressActionOff':
              ((r = 18), (s = i.speed), (n = i.value), (u = c));
              break;
            case 'LightUserPicture':
              ((r = 19), (u = void 0 !== i.option ? this.USEROP[i.option] : 0), (n = i.value));
              break;
            case 'LightMusicFollow':
              ((r = 20),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | p : (this.MP[i.option] << 4) | p),
                (n = i.value));
              break;
            case 'LightScreenColor':
              ((r = 21), (n = o), (u = 0));
              break;
            case 'LightMusicFollow2':
              ((r = 22),
                (n = i.value),
                (u = void 0 === i.option || 'upright' === i.option ? 0 | p : (this.MP[i.option] << 4) | p));
          }
          if (((e[1] = r), (e[2] = 4 - s), (e[3] = n), (e[4] = u), 'rgb' in i && void 0 !== i.rgb)) {
            let a = i.rgb;
            16777215 === a && (a = 16449530);
            const r = t.numToRgb(a);
            ((e[5] = r.r), (e[6] = r.g), (e[7] = r.b));
          }
          'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200));
          const g = yield this.getBufEi(e);
          return !!(yield this.writeFeatureCmd(g, 500)) && (yield a.sleep(this.BIGCMDDELAY), !0);
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = {
              0: 16711680,
              1: 16729088,
              2: 16768256,
              3: 56576,
              4: 56627,
              5: 238,
              6: 16711918,
              7: 16768494,
            },
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const r = yield this.getBufSe(a),
            s = yield this.commomFeature(r);
          if (void 0 === s) return;
          const n = s[1],
            u = 4 - s[2],
            l = s[3],
            c = s[4];
          let p = t.rgbToNum(s[5], s[6], s[7]);
          const g = c >> 4,
            h = 15 & c,
            d = (t) => {
              if (t >= this.DAZZLE) return;
              const i = e[t];
              void 0 !== i && (p = i);
            },
            v = h === this.DAZZLE,
            L = 0 === c;
          switch ((16449530 === p && (p = 16777215), n)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (d(h), { type: 'LightAlwaysOn', value: l, rgb: p, dazzle: v });
            case 2:
              return (d(h), { type: 'LightBreath', value: l, speed: u, rgb: p, dazzle: v });
            case 3:
              return { type: 'LightNeon', value: l, speed: u, option: 0 === g ? 'Default' : 'Random' };
            case 4:
              const e = i.valueForKey(this.WAVEOP, g);
              return { type: 'LightWave', value: l, speed: u, option: void 0 === e ? 'right' : e };
            case 5:
              return (
                d(h),
                {
                  type: 'LightRipple',
                  value: l,
                  speed: u,
                  option: 0 === g ? 'full' : 'single',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 6:
              return (d(h), { type: 'LightRaindrop', value: l, speed: u, rgb: p, dazzle: v });
            case 7:
              return (
                d(h),
                {
                  type: 'LightSnake',
                  value: l,
                  speed: u,
                  option: 0 === g ? 'z' : 'return',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 8:
              return (
                d(h),
                {
                  type: 'LightPressAction',
                  value: l,
                  speed: u,
                  option: 0 === g ? 'onToOff' : 'offToOn',
                  rgb: p,
                  dazzle: v,
                }
              );
            case 9:
              return (d(h), { type: 'LightConverage', value: l, speed: u, rgb: p, dazzle: v });
            case 10:
              return (d(h), { type: 'LightSineWave', value: l, speed: u, rgb: p, dazzle: v });
            case 11:
              return (
                d(h),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === g ? 'out' : 'in',
                  value: l,
                  speed: u,
                  rgb: p,
                  dazzle: v,
                }
              );
            case 12:
              return (d(h), { type: 'LightLineWave', value: l, speed: u, rgb: p, dazzle: v });
            case 13:
              return (d(h), { type: 'LightLaser', value: l, speed: u, rgb: p, dazzle: v });
            case 14:
              return (
                d(h),
                {
                  type: 'LightCircleWave',
                  value: l,
                  speed: u,
                  rgb: p,
                  option: 0 === g ? 'anti-clockwise' : 'clockwise',
                  dazzle: v,
                }
              );
            case 15:
              return (d(h), { type: 'LightDazzing', value: l, speed: u, rgb: p, dazzle: v });
            case 16:
              return (d(h), { type: 'LightRainDown', value: l, speed: u, rgb: p, dazzle: v });
            case 17:
              return (d(h), { type: 'LightMeteor', value: l, speed: u, rgb: p, dazzle: v });
            case 18:
              return (d(h), { type: 'LightPressActionOff', value: l, speed: u, rgb: p, dazzle: v });
            case 19:
              const a = i.valueForKey(this.USEROP, g);
              return { type: 'LightUserPicture', value: l, option: void 0 === a ? '1' : a };
            case 20:
              const r = i.valueForKey(this.MP, g);
              return {
                type: 'LightMusicFollow',
                value: l,
                option: void 0 === r ? 'upright' : r,
                rgb: t.rgbToNum(s[5], s[6], s[7]),
                dazzle: L,
              };
            case 21:
              return { type: 'LightScreenColor', value: o };
            case 22:
              const b = i.valueForKey(this.MP, c);
              return {
                type: 'LightMusicFollow2',
                option: void 0 === b ? 'upright' : b,
                value: l,
                rgb: t.rgbToNum(s[5], s[6], s[7]),
                dazzle: L,
              };
            default:
              return;
          }
        })));
  }
}
exports.YZW_GM898 = n;
