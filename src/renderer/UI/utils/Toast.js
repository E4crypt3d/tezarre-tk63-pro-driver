/* Recovered from Tezarre Driver 1.1.31 - renderer module Isaf */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.toToast = void 0));
const e = require('react-toastify');
let o,
  r = '';
exports.toToast = (t, s) => {
  r !== s &&
    ((r = s),
    null != o && clearTimeout(o),
    (o = setTimeout(() => {
      r = '';
    }, 2e3)),
    'error' === t
      ? e.toast.error(s, {
          position: 'top-center',
          autoClose: 2e3,
          hideProgressBar: !0,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !1,
          progress: void 0,
        })
      : e.toast.info(s, {
          position: 'top-center',
          autoClose: 2e3,
          hideProgressBar: !0,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !1,
          progress: void 0,
        }));
};
