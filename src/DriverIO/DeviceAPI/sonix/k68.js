/* Recovered from Tezarre Driver 1.1.31 - renderer module vJ2s */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (o, n) {
      function s(e) {
        try {
          a(r.next(e));
        } catch (t) {
          n(t);
        }
      }
      function u(e) {
        try {
          a(r.throw(e));
        } catch (t) {
          n(t);
        }
      }
      function a(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(s, u);
      }
      a((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68 = void 0));
const t = require('./../dk2017.js'),
  i = require('./k68matrix.js'),
  r = require('./../../../renderer/unitys/rgbNum.js'),
  o = require('./../../../../unitys/tableValueForKey.js'),
  n = { upright: 0, separate: 1, intersect: 2 };
class s extends t.Dk2017 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_k68),
      (this.getDefault = () =>
        e(this, void 0, void 0, function* () {
          console.log(yield this.getKeyConfig());
        })),
      (this.picsCount = Math.floor(((this.defaultMatrix.length / 4) * 3) / 64)),
      (this.setLightSetting = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          e[0] = 4;
          let i = 0,
            o = 0,
            s = 0,
            u = 7;
          switch (t.type) {
            case 'LightOff':
              i = 0;
              break;
            case 'LightAlwaysOn':
              ((i = 1), (s = t.value));
              break;
            case 'LightBreath':
              ((i = 2), (o = t.speed), (s = t.value));
              break;
            case 'LightNeon':
              ((i = 3), (o = t.speed), (s = t.value));
              break;
            case 'LightWave':
              ((i = 4), (o = t.speed), (u = 'right' === t.option ? 0 : 1), (s = t.value));
              break;
            case 'LightRipple':
              ((i = 5), (o = t.speed), (u = 'full' === t.option ? 112 : 113), (s = t.value));
              break;
            case 'LightRaindrop':
              ((i = 6), (o = t.speed), (s = t.value));
              break;
            case 'LightSnake':
              ((i = 7), (o = t.speed), (u = 'z' === t.option ? 112 : 113), (s = t.value));
              break;
            case 'LightPressAction':
              ((i = 8), (o = t.speed), (u = 'onToOff' === t.option ? 112 : 113), (s = t.value));
              break;
            case 'LightConverage':
              ((i = 9), (o = t.speed), (s = t.value));
              break;
            case 'LightUserPicture':
              ((i = 10), (u = 0), (s = t.value));
              break;
            case 'LightMusicFollow':
              ((i = 11), (u = n[t.option] << 4), (s = t.value));
          }
          if (((e[1] = i), (e[2] = 5 - o), (e[3] = s), (e[4] = u), 'rgb' in t && void 0 !== t.rgb)) {
            let i = t.rgb;
            16777215 === i && (i = 16449530);
            const o = r.numToRgb(i);
            ((e[5] = o.r), (e[6] = o.g), (e[7] = o.b));
          }
          return (
            'LightUserPicture' === t.type && ((e[5] = 0), (e[6] = 200), (e[7] = 200)),
            yield this.writeFeatureCmd(e)
          );
        })),
      (this.getLightSetting = () =>
        e(this, void 0, void 0, function* () {
          const e = { 0: 16711680, 1: 65280, 2: 255, 3: 65535, 4: 16711935, 5: 16776960, 6: 16777215 },
            t = Buffer.alloc(64);
          t[0] = 132;
          const i = yield this.commomFeature(t);
          if (void 0 === i) return;
          const s = i[1],
            u = 5 - i[2],
            a = i[3],
            l = i[4];
          let c = r.rgbToNum(i[5], i[6], i[7]);
          const h = (t) => {
            if (7 === t) return;
            const i = e[t];
            void 0 !== i && (c = i);
          };
          switch ((16449530 === c && (c = 16777215), s)) {
            case 0:
              return { type: 'LightOff' };
            case 1:
              return (h(l), { type: 'LightAlwaysOn', value: a, rgb: c });
            case 2:
              return (h(l), { type: 'LightBreath', value: 0, speed: u, rgb: c });
            case 3:
              return { type: 'LightNeon', value: 0, speed: u };
            case 4:
              return { type: 'LightWave', value: 0, speed: u, option: 0 == (15 & l) ? 'right' : 'left' };
            case 5:
              return (
                h(l >> 4),
                { type: 'LightRipple', value: 0, speed: u, option: 0 == (15 & l) ? 'full' : 'single', rgb: c }
              );
            case 6:
              return (h(l), { type: 'LightRaindrop', value: 0, speed: u, rgb: c });
            case 7:
              return (
                h(l),
                { type: 'LightSnake', value: 0, speed: u, option: 0 == (15 & l) ? 'z' : 'return', rgb: c }
              );
            case 8:
              return (
                h(l >> 4),
                {
                  type: 'LightPressAction',
                  value: 0,
                  speed: u,
                  option: 0 == (15 & l) ? 'onToOff' : 'offToOn',
                  rgb: c,
                }
              );
            case 9:
              return (h(l), { type: 'LightConverage', value: 0, speed: u, rgb: c });
            case 10:
              return { type: 'LightUserPicture', value: 0 };
            case 11:
              const e = o.valueForKey(n, l);
              return { type: 'LightMusicFollow', value: 0, option: void 0 === e ? 'upright' : e, rgb: c };
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
          const o = yield this.writeFeatureCmd(e);
          if ((console.log('hhhhh', o), !1 === o)) return !1;
          console.log('BBBBUUUUFFFF', t);
          for (let n = 0; n < this.picsCount; n++) {
            const e = Buffer.from([...t.slice(64 * n, 64 + 64 * n)]);
            if (!(yield this.writeFeatureCmd(e))) return !1;
          }
          return !0;
        })),
      (this.setLightPic = (t) =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(600).fill(0),
            i = t.map((e) => this.findIndexInDefaultMatrix(e.hid, e.index));
          for (let o = 0; o < i.length; o++) {
            const n = i[o];
            if (void 0 === n) throw (console.log(t), Error('setLightPic 没有找到对应的hid' + t[o].hid));
            const s = r.numToRgb(t[o].rgb);
            ((e[3 * n] = s.r), (e[3 * n + 1] = s.g), (e[3 * n + 2] = s.b));
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
          let t = [];
          for (let i = 0; i < e.length; i += 3) {
            const o = r.rgbToNum(e[i], e[i + 1], e[i + 2]),
              n = this.findHidWithIndexInMatrix(Math.floor(i / 3)),
              s = t.filter((e) => e.hid === n);
            0 !== n && void 0 !== n && t.push({ hid: n, rgb: o, index: 0 === s.length ? void 0 : s.length });
          }
          return t;
        })));
  }
}
exports.K68 = s;
