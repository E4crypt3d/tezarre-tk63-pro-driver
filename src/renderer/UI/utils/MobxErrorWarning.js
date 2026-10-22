/* Recovered from Tezarre Driver 1.1.31 - renderer module SWGa */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, r, t, o) {
          (void 0 === o && (o = t),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
        }
      : function (e, r, t, o) {
          (void 0 === o && (o = t), (e[o] = r[t]));
        }),
  r =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, r) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: r });
        }
      : function (e, r) {
          e.default = r;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var o = {};
      if (null != t) for (var n in t) 'default' !== n && Object.hasOwnProperty.call(t, n) && e(o, t, n);
      return (r(o, t), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MobxErrorWarning = void 0));
const o = require('./../../mobxStore/store.js'),
  n = require('./Toast.js'),
  u = t(require('react')),
  i = require('mobx');
exports.MobxErrorWarning = () => {
  const { toastStore: e } = o.useStore();
  return (
    u.useEffect(() =>
      i.autorun(() => {
        (console.log('toToast log', e.errType, e.errMsg),
          '' !== e.errMsg &&
            (n.toToast(e.errType, e.errMsg),
            setTimeout(() => {
              e.closeErr();
            }, 2e3)));
      }),
    ),
    u.default.createElement('div', null)
  );
};
