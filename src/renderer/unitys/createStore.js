/* Recovered from Tezarre Driver 1.1.31 - renderer module h35n */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.createStore = void 0));
const n = r(require('react')),
  u = require('rxjs'),
  i = require('ramda');
exports.createStore = (e) => {
  const t = e,
    r = i.mapObjIndexed(() => new u.Subject(), t),
    s = i.mapObjIndexed(
      (e, r) => (n) => {
        ((t[r] = n), e.next(n));
      },
      r,
    );
  return {
    state: t,
    setState: s,
    useState: (e) => {
      let u = [],
        s = new Proxy({}, { get: (e, t) => (u.push(t), s) });
      return (
        e(s),
        i.zipObj(
          u,
          u.map((e) => {
            const [u, i] = n.useState(t[e]);
            return (
              n.useEffect(() => {
                const t = r[e].subscribe(i);
                return () => t.unsubscribe();
              }),
              u
            );
          }),
        )
      );
    },
  };
};
