/* Recovered from Tezarre Driver 1.1.31 - renderer module LjfG */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (o, n) {
      function u(e) {
        try {
          f(r.next(e));
        } catch (t) {
          n(t);
        }
      }
      function c(e) {
        try {
          f(r.throw(e));
        } catch (t) {
          n(t);
        }
      }
      function f(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(u, c);
      }
      f((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_DK710B = void 0));
const t = require('./../../../unitys/timeFunc.js'),
  i = require('./yzw_dk710bMatrix.js'),
  r = require('./yzw_k68.js');
class o extends r.YZW_K68 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = i.defaultMatrix_yzw_dk710b),
      (this.BIGCMDDELAY = 'darwin' == process.platform ? 800 : 100),
      (this.MAXSPEED = 4),
      (this._getLightPic = () =>
        e(this, void 0, void 0, function* () {
          const e = Buffer.alloc(64);
          ((e[0] = this.FEA_CMD_GET_USERPIC), (e[1] = 0));
          let i = Buffer.alloc(0);
          for (let t = 0; t < 7; t++) {
            e[2] = t;
            const r = yield this.getBufSe(e),
              o = yield this.commomFeature(r);
            if (void 0 === o) return;
            i = Buffer.concat([i, o]);
          }
          return (yield t.sleep(300), i);
        })));
  }
  _getKeyMatrix(i) {
    return e(this, void 0, void 0, function* () {
      const e = Buffer.alloc(64);
      ((e[0] = this.FEA_CMD_GET_KEYMATRIX), (e[1] = void 0 === i ? this.currentProfile : i));
      let r = Buffer.alloc(0);
      for (let t = 0; t < 9; t++) {
        e[2] = t;
        const i = yield this.getBufSe(e),
          o = yield this.commomFeature(i);
        if (void 0 === o) throw '_getKeyMatrix !!!undefine';
        r = Buffer.concat([r, o]);
      }
      return (yield t.sleep(300), r);
    });
  }
  _getFnKeyMatrix(i) {
    return e(this, void 0, void 0, function* () {
      const e = Buffer.alloc(64);
      ((e[0] = 144), (e[1] = i));
      let r = Buffer.alloc(0);
      for (let t = 0; t < 9; t++) {
        e[2] = t;
        const i = yield this.getBufSe(e),
          o = yield this.commomFeature(i);
        if (void 0 === o) throw '_getFnKeyMatrix !!!undefine';
        r = Buffer.concat([r, o]);
      }
      return (yield t.sleep(300), r);
    });
  }
}
exports.YZW_DK710B = o;
