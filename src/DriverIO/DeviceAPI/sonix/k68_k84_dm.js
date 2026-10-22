/* Recovered from Tezarre Driver 1.1.31 - renderer module pxqj */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (n, o) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (t) {
          o(t);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (t) {
          o(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_K84_DM = void 0));
const t = require('./../../../renderer/unitys/rgbNum.js'),
  i = require('./k68_k84.js'),
  r = require('./k68_k84_dmMatrix.js');
class n extends i.K68_K84 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = r.defaultMatrix_k68_k84_dm),
      (this.setLightSetting = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let r = 0,
            n = 0,
            o = 0,
            s = 7;
          switch (i.type) {
            case 'LightOff':
              r = 0;
              break;
            case 'LightAlwaysOn':
              ((r = 1), (o = i.value));
              break;
            case 'LightBreath':
              ((r = 2), (n = i.speed), (o = i.value));
              break;
            case 'LightNeon':
              ((r = 3), (n = i.speed), (o = i.value));
              break;
            case 'LightWave':
              ((r = 4), (n = i.speed), (s = 'right' === i.option ? 0 : 1), (o = i.value));
              break;
            case 'LightRipple':
              ((r = 5), (n = i.speed), (s = 'full' === i.option ? 7 : 23), (o = i.value));
              break;
            case 'LightRaindrop':
              ((r = 6), (n = i.speed), (o = i.value));
              break;
            case 'LightSnake':
              ((r = 7), (n = i.speed), (s = 'z' === i.option ? 7 : 23), (o = i.value));
              break;
            case 'LightPressAction':
              ((r = 8), (n = i.speed), (o = i.value));
              break;
            case 'LightConverage':
              ((r = 9), (n = i.speed), (o = i.value));
              break;
            case 'LightUserPicture':
              ((r = 10), (s = 0), (o = i.value));
          }
          if (((e[1] = r), (e[2] = 5 - n), (e[3] = o), (e[4] = s), 'rgb' in i && void 0 !== i.rgb)) {
            let r = i.rgb;
            16777215 === r && (r = 16449530);
            const n = t.numToRgb(r);
            ((e[5] = n.r), (e[6] = n.g), (e[7] = n.b));
          }
          return (
            'LightUserPicture' === i.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200)),
            yield this.writeFeatureCmd(e)
          );
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 65535, 4: 16711935, 5: 16776960, 6: 16777215 },
            i = Buffer.alloc(64);
          i[0] = 132;
          const r = yield this.commomFeature(i);
          if (void 0 === r) return;
          const n = r[1],
            o = 5 - r[2],
            s = r[3],
            a = r[4];
          let u = t.rgbToNum(r[5], r[6], r[7]);
          const c = (t) => {
            if (7 === t) return;
            const i = e[t];
            void 0 !== i && (u = i);
          };
          switch ((16449530 === u && (u = 16777215), n)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (c(a), { type: 'LightAlwaysOn', value: s, rgb: u });
            case 2:
              return (c(a), { type: 'LightBreath', value: 0, speed: o, rgb: u });
            case 3:
              return { type: 'LightNeon', value: 0, speed: o };
            case 4:
              return { type: 'LightWave', value: 0, speed: o, option: 0 == (15 & a) ? 'right' : 'left' };
            case 5:
              return (
                c(a >> 4),
                { type: 'LightRipple', value: 0, speed: o, option: 0 == (15 & a) ? 'full' : 'single', rgb: u }
              );
            case 6:
              return (c(a), { type: 'LightRaindrop', value: 0, speed: o, rgb: u });
            case 7:
              return (
                c(a),
                { type: 'LightSnake', value: 0, speed: o, option: 0 == (15 & a) ? 'z' : 'return', rgb: u }
              );
            case 8:
              return (
                c(a >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: o,
                  option: 0 == (15 & a) ? 'onToOff' : 'offToOn',
                  rgb: u,
                }
              );
            case 9:
              return (c(a), { type: 'LightConverage', value: 0, speed: o, rgb: u });
            case 10:
              return { type: 'LightUserPicture', value: 0 };
            default:
              return;
          }
        })),
      (this._setLightPic = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = 9), (e[1] = 0));
          const i = 64 * this.picsCount,
            r = Buffer.alloc(2);
          (r.writeUInt16LE(i), (e[2] = r[0]), (e[3] = r[1]));
          const n = yield this.writeFeatureCmd(e);
          if ((console.log('hhhhh', n), !1 === n)) return !1;
          console.log('BBBBUUUUFFFF', t);
          for (let o = 0; o < this.picsCount; o++) {
            const e = Buffer.from([...t.slice(64 * o, 64 + 64 * o)]);
            if (!(yield this.writeFeatureCmd(e))) return !1;
          }
          return !0;
        })),
      (this.setLightPic = (i) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(600).fill(0),
            r = i.map((e) => this.findIndexInDefaultMatrix(e.hid, e.index));
          for (let n = 0; n < r.length; n++) {
            const o = r[n];
            if (void 0 === o) throw (console.log(i), Error('setLightPic 没有找到对应的hid' + i[n].hid));
            const s = t.numToRgb(i[n].rgb);
            ((e[3 * o] = s.r), (e[3 * o + 1] = s.g), (e[3 * o + 2] = s.b));
          }
          return yield this._setLightPic(e);
        })),
      (this._getLightPic = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          if (((e[0] = 137), (e[1] = 0), void 0 === (yield this.commomFeature(e)))) return;
          let t = Buffer.alloc(0);
          for (let i = 0; i < this.picsCount; i++) {
            const e = yield this.readFeatureCmd();
            null != e && (t = Buffer.concat([t, e]));
          }
          return t;
        })),
      (this.getLightPic = () =>
        e(this, void 0, void 0, function* () {
          const e = yield this._getLightPic();
          if ((console.log('RRRREEEESSSS ', e), void 0 === e)) return;
          let i = [];
          for (let r = 0; r < e.length; r += 3) {
            const n = t.rgbToNum(e[r], e[r + 1], e[r + 2]),
              o = this.findHidWithIndexInMatrix(Math.floor(r / 3)),
              s = i.filter((e) => e.hid === o);
            0 !== o && void 0 !== o && i.push({ hid: o, rgb: n, index: 0 === s.length ? void 0 : s.length });
          }
          return i;
        })));
  }
}
exports.K68_K84_DM = n;
