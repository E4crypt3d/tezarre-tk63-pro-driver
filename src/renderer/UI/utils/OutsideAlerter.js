/* Recovered from Tezarre Driver 1.1.31 - renderer module UrB6 */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.OutsideAlerter = void 0));
const n = r(require('react'));
function u(e, t) {
  n.useEffect(() => {
    function r(r) {
      !e.current || e.current.contains(r.target) || r.target.className.includes('notoutside') || t();
    }
    return (
      document.addEventListener('mouseup', r),
      () => {
        document.removeEventListener('mouseup', r);
      }
    );
  });
}
exports.OutsideAlerter = (e) => {
  const t = n.useRef(null);
  return (
    u(t, e.clickOutsideHandle),
    n.default.createElement('div', { style: { width: '100%', height: '100%' }, ref: t }, e.children)
  );
};
