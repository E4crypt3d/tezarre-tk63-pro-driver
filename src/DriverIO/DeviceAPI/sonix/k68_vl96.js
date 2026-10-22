/* Recovered from Tezarre Driver 1.1.31 - renderer module A35F */

'use strict';
var t =
  (this && this.__awaiter) ||
  function (t, e, r, i) {
    return new (r || (r = Promise))(function (n, o) {
      function u(t) {
        try {
          a(i.next(t));
        } catch (e) {
          o(e);
        }
      }
      function c(t) {
        try {
          a(i.throw(t));
        } catch (e) {
          o(e);
        }
      }
      function a(t) {
        var e;
        t.done
          ? n(t.value)
          : ((e = t.value),
            e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                })).then(u, c);
      }
      a((i = i.apply(t, e || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_VL96 = void 0));
const e = require('./k68.js'),
  r = require('./k68_vl96Matrix.js');
class i extends e.K68 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = r.defaultMatrix_k68_vl96));
  }
  _getKeyMatrix(e) {
    return t(this, void 0, void 0, function* () {
      const t = Buffer.alloc(64);
      if (
        ((t[0] = 134),
        (t[1] = void 0 === e ? this.currentProfile : e),
        void 0 === (yield this.commomFeature(t)))
      )
        return;
      let r = Buffer.alloc(0);
      for (let e = 0; e < 8; e++) {
        const t = yield this.readFeatureCmd(10);
        if (void 0 === t) throw '_getKeyMatrix !!!undefine';
        null != t && (r = Buffer.concat([r, t]));
      }
      return r;
    });
  }
}
exports.K68_VL96 = i;
