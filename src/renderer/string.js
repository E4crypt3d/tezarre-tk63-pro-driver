/* Recovered from Tezarre Driver 1.1.31 - renderer module qGzm */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, n) {
          (void 0 === n && (n = r),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, n) {
          (void 0 === n && (n = r), (e[n] = t[r]));
        }),
  t =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  r =
    (this && this.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var n = {};
      if (null != r) for (var u in r) 'default' !== u && Object.hasOwnProperty.call(r, u) && e(n, r, u);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.string = exports.useString = exports.text = void 0));
const n = r(require('react')),
  u = require('rxjs'),
  i = require('ramda'),
  s = require('./languageJSON.js'),
  a = require('./appConfig.js');
let o = new u.Subject(),
  c = a.blockCloud ? '英语' : '中文简体';
const l = (e) => {
  ((c = e), o.next());
};
((exports.text = i.mapObjIndexed((e) => () => e[c], s.languageJSON)),
  (exports.useString = i.mapObjIndexed(
    (e) => () => {
      const [t, r] = n.useState(e[c]);
      return (
        n.useEffect(() => {
          const t = o.subscribe(() => r(e[c]));
          return () => t.unsubscribe();
        }),
        t
      );
    },
    s.languageJSON,
  )),
  (exports.string = i.mapObjIndexed((e) => {
    return n.createElement(() => {
      const t = e();
      return n.createElement(n.Fragment, null, t);
    }, null);
  }, exports.useString)));
