/* Recovered from Tezarre Driver 1.1.31 - renderer module cC60 */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports._2500ms消失文字 = void 0));
const n = r(require('react'));
exports._2500ms消失文字 = (e) => {
  const [t, r] = n.useState(e.text);
  return (
    n.useEffect(() => {
      r(e.text);
      const t = setTimeout(() => {
        r(void 0);
      }, 2500);
      return () => clearTimeout(t);
    }, [e.text]),
    n.default.createElement(n.default.Fragment, null, t)
  );
};
