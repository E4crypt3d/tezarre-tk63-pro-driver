/* Recovered from Tezarre Driver 1.1.31 - renderer module QZB6 */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, r, o) {
    return new (r || (r = Promise))(function (n, a) {
      function s(e) {
        try {
          c(o.next(e));
        } catch (t) {
          a(t);
        }
      }
      function i(e) {
        try {
          c(o.throw(e));
        } catch (t) {
          a(t);
        }
      }
      function c(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(s, i);
      }
      c((o = o.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.newConfigName =
    exports.newMacroFolderName =
    exports.newMacroName =
    exports.setMacroNameList =
      void 0));
const t = require('./../store.js'),
  r = require('./../../sdk.js'),
  o = require('./../../res.js');
exports.setMacroNameList = () =>
  e(void 0, void 0, void 0, function* () {
    const e = yield r.sdk.ioFunc.getMacros(),
      o = r.sdk.ioFunc.macrosToFolder(e);
    t.store.setState.macro_list(o);
  });
const n = (e, t) => e.filter((e) => e.includes(t)).length + 1;
((exports.newMacroName = (e) => {
  const t = e.map((e) => (e.name ? e.name : ''));
  return (
    o.res.text.新的宏_() +
    n(
      t.filter((e) => '' !== e),
      o.res.text.新的宏_(),
    )
  );
}),
  (exports.newMacroFolderName = (e) =>
    o.res.text.新建文件夹_() +
    n(
      e.map((e) => e.name),
      o.res.text.新建文件夹_(),
    ).toString()),
  (exports.newConfigName = (e) => {
    return ((e, t) => {
      let r = 1,
        o = e
          .map((e) => e.split(t))
          .filter((e) => e.length > 1)
          .map((e) => e[1]);
      for (;;) {
        let e = !1;
        for (let t = 0; t < o.length; t++) Number(o[t]) === r && (e = !0);
        if (!e) break;
        r++;
      }
      return t + r;
    })(
      e.map((e) => (e.name ? e.name : '')).map((e) => e),
      o.res.text.新的配置_(),
    );
  }));
