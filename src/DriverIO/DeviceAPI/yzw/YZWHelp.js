/* Recovered from Tezarre Driver 1.1.31 - renderer module kd4R */

'use strict';
var t =
  (this && this.__awaiter) ||
  function (t, e, n, o) {
    return new (n || (n = Promise))(function (r, i) {
      function s(t) {
        try {
          u(o.next(t));
        } catch (e) {
          i(e);
        }
      }
      function c(t) {
        try {
          u(o.throw(t));
        } catch (e) {
          i(e);
        }
      }
      function u(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(s, c);
      }
      u((o = o.apply(t, e || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZWHelp = void 0));
const e = require('./YZWCommon.js');
class n extends e.YZWCommon {
  constructor() {
    (super(...arguments),
      (this.getFirmwareVersion = () =>
        t(this, void 0, void 0, function* () {
          return 0;
        })));
  }
}
exports.YZWHelp = n;
