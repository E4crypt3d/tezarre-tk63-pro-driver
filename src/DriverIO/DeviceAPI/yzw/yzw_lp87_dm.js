/* Recovered from Tezarre Driver 1.1.31 - renderer module SrnQ */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_LP87_DM = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./../../../../unitys/tableValueForKey.js'),
  a = require('./../../../unitys/timeFunc.js'),
  s = require('./yzw_k68.js'),
  r = require('./yzw_lp87_dmMatrix.js');
class o extends s.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_yzw_lp87_dm),
      (this.DAZZLE = 8),
      (this.NORMAL = 9),
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
            o = 0,
            n = 7,
            u = i.dazzle;
          const l = u ? this.DAZZLE : this.NORMAL,
            c = u ? 0 : 4;
          switch (i.type) {
            case 'LightOff':
              s = 0;
              break;
            case 'LightAlwaysOn':
              ((s = 1), (o = i.value), (n = l));
              break;
            case 'LightBreath':
              ((s = 2), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightNeon':
              ((s = 3), (r = i.speed), (o = i.value));
              break;
            case 'LightWave':
              ((s = 4),
                (r = i.speed),
                (n = void 0 !== i.option ? (this.WAVEOP[i.option] << 4) | l : (this.WAVEOP.right << 4) | l),
                (o = i.value));
              break;
            case 'LightRipple':
              ((s = 5), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightRaindrop':
              ((s = 6), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightSnake':
              ((s = 7),
                (r = i.speed),
                (n = 'z' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (o = i.value));
              break;
            case 'LightPressAction':
              ((s = 8), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightConverage':
              ((s = 9), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightSineWave':
              ((s = 10), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightKaleidoscope':
              ((s = 11),
                (r = i.speed),
                (n = 'out' === i.option || void 0 === i.option ? 0 | l : 16 | l),
                (o = i.value));
              break;
            case 'LightLineWave':
              ((s = 12), (r = i.speed), (o = i.value), (n = this.DAZZLE));
              break;
            case 'LightUserPicture':
              ((s = 13), (n = void 0 !== i.option ? this.USEROP[i.option] : 0), (o = i.value));
              break;
            case 'LightLaser':
              ((s = 14), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightCircleWave':
              ((s = 15),
                (r = i.speed),
                (o = i.value),
                (n = 'anti-clockwise' === i.option || void 0 === i.option ? 0 | l : 16 | l));
              break;
            case 'LightDazzing':
              ((s = 16), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightPressActionOff':
              ((s = 19), (r = i.speed), (o = i.value), (n = l));
              break;
            case 'LightMusicFollow':
              ((s = 20), (n = (this.MP[i.option] << 4) | c), (o = i.value));
              break;
            case 'LightMusicFollow2':
              ((s = 22),
                (o = i.value),
                (n = void 0 === i.option || 'upright' === i.option ? 0 | c : (this.MP[i.option] << 4) | c));
          }
          if (
            ((e[1] = s), (e[2] = this.MAXSPEED - r), (e[3] = o), (e[4] = n), 'rgb' in i && void 0 !== i.rgb)
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
          const e = this.COMMONCOLOR,
            a = Buffer.alloc(64);
          a[0] = this.FEA_CMD_GET_LEDPARAM;
          const s = yield this.getBufSe(a),
            r = yield this.commomFeature(s);
          if (void 0 === r) return;
          const o = r[1],
            n = this.MAXSPEED - r[2],
            u = r[3],
            l = r[4];
          let c = t.rgbToNum(r[5], r[6], r[7]);
          const p = l >> 4,
            h = 15 & l,
            d = (t) => {
              if (t === this.DAZZLE || t === this.NORMAL) return;
              const i = e[t];
              void 0 !== i && (c = i);
            },
            g = h === this.DAZZLE,
            v = 0 === l;
          switch ((16449530 === c && (c = 16777215), o)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (d(h), { type: 'LightAlwaysOn', value: u, rgb: c, dazzle: g });
            case 2:
              return (d(h), { type: 'LightBreath', value: u, speed: n, rgb: c, dazzle: g });
            case 3:
              return { type: 'LightNeon', value: u, speed: n, option: 0 === p ? 'Default' : 'Random' };
            case 4:
              d(h);
              const e = i.valueForKey(this.WAVEOP, p);
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
                d(h),
                {
                  type: 'LightRipple',
                  value: u,
                  speed: n,
                  option: 0 === p ? 'full' : 'single',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 6:
              return (d(h), { type: 'LightRaindrop', value: u, speed: n, rgb: c, dazzle: g });
            case 7:
              return (
                d(h),
                {
                  type: 'LightSnake',
                  value: u,
                  speed: n,
                  option: 0 === p ? 'z' : 'return',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 8:
              return (
                d(h),
                {
                  type: 'LightPressAction',
                  value: u,
                  speed: n,
                  option: 0 === p ? 'onToOff' : 'offToOn',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 9:
              return (d(h), { type: 'LightConverage', value: u, speed: n, rgb: c, dazzle: g });
            case 10:
              return (d(h), { type: 'LightSineWave', value: u, speed: n, rgb: c, dazzle: g });
            case 11:
              return (
                d(h),
                {
                  type: 'LightKaleidoscope',
                  option: 0 === p ? 'out' : 'in',
                  value: u,
                  speed: n,
                  rgb: c,
                  dazzle: g,
                }
              );
            case 12:
              return (d(h), { type: 'LightLineWave', value: u, speed: n, rgb: c, dazzle: g });
            case 13:
              const t = i.valueForKey(this.USEROP, l);
              return { type: 'LightUserPicture', value: u, option: void 0 === t ? '1' : t };
            case 14:
              return (d(h), { type: 'LightLaser', value: u, speed: n, rgb: c, dazzle: g });
            case 15:
              return (
                d(h),
                {
                  type: 'LightCircleWave',
                  value: u,
                  speed: n,
                  option: 0 === p ? 'anti-clockwise' : 'clockwise',
                  rgb: c,
                  dazzle: g,
                }
              );
            case 16:
              return (d(h), { type: 'LightDazzing', value: u, speed: n, rgb: c, dazzle: g });
            case 19:
              return (d(h), { type: 'LightPressActionOff', value: u, speed: n, rgb: c, dazzle: g });
            case 20:
              const a = i.valueForKey(this.MP, p);
              return {
                type: 'LightMusicFollow',
                value: u,
                option: void 0 === a ? 'upright' : a,
                rgb: c,
                dazzle: v,
              };
            case 22:
              const s = i.valueForKey(this.MP, p);
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
exports.YZW_LP87_DM = o;
