/* Recovered from Tezarre Driver 1.1.31 - renderer module Yth0 */

'use strict';
var t =
  (this && this.__awaiter) ||
  function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (e) {
          i(e);
        }
      }
      function c(t) {
        try {
          u(r.throw(t));
        } catch (e) {
          i(e);
        }
      }
      function u(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, c);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68Help = void 0));
const e = require('./k68.js');
class n extends e.K68 {
  constructor() {
    (super(...arguments),
      (this.getFirmwareVersion = () =>
        t(this, void 0, void 0, function* () {
          return 0;
        })));
  }
}
exports.K68Help = n;
