/* Recovered from Tezarre Driver 1.1.31 - renderer module hHCA */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, o, i) {
    return new (o || (o = Promise))(function (r, n) {
      function s(e) {
        try {
          c(i.next(e));
        } catch (t) {
          n(t);
        }
      }
      function u(e) {
        try {
          c(i.throw(e));
        } catch (t) {
          n(t);
        }
      }
      function c(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(s, u);
      }
      c((i = i.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.timeOutFUNC = exports.sleep = exports.timeOut = void 0),
  (exports.timeOut = (e, t = 5e4) =>
    new Promise((o, i) => {
      setTimeout(() => {
        i(new Error(e + 'Time Out'));
      }, t);
    })),
  (exports.sleep = (e) => new Promise((t) => setTimeout(t, e))),
  (exports.timeOutFUNC =
    (t) =>
    (...o) =>
      e(void 0, void 0, void 0, function* () {
        return (yield exports.sleep(10), yield Promise.race([exports.timeOut('超时了', 5e4), t(...o)]));
      })));
