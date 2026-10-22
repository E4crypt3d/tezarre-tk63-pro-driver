/* Recovered from Tezarre Driver 1.1.31 - renderer module Rmmg */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, i) {
          (void 0 === i && (i = r),
            Object.defineProperty(e, i, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, i) {
          (void 0 === i && (i = r), (e[i] = t[r]));
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
      var i = {};
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(i, r, o);
      return (t(i, r), i);
    },
  i =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.NormalList = void 0));
const o = r(require('react')),
  l = i(require('@emotion/styled')),
  n = l.default.ul({
    width: '100%',
    height: '100%',
    overflow: 'hidden scroll',
    '&::-webkit-scrollbar': { width: '6px' },
    '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '5px' },
  });
exports.NormalList = (e) => {
  const t = o.useRef(null);
  return (
    o.useEffect(() => {
      e.isScrollToBottom && t.current && t.current.scrollIntoView({ behavior: 'auto' });
    }, [e.items]),
    o.default.createElement(
      n,
      {
        id: 'scroll-list',
        style: { width: '100%', height: '100%', overflow: 'hidden auto' },
        onClick: (t) => {
          (e.clickHandle && e.clickHandle(), t.stopPropagation());
        },
      },
      e.items.map((e, t) => o.default.createElement('li', { key: t, style: { marginBottom: 10 } }, e)),
      o.default.createElement('div', { ref: t }),
    )
  );
};
