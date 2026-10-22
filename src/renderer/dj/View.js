/* Recovered from Tezarre Driver 1.1.31 - renderer module yhTQ */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.View2 = exports.View = void 0));
const o = r(require('react')),
  n = i(require('@emotion/styled')),
  d = n.default.div((e) => ({
    width: '100%',
    height: '100%',
    '&:hover': {
      background: e.hoverMode
        ? { HightLight: 'linear-gradient(90deg,#1f1e1e 0%, #121212 100%)' }[e.hoverMode]
        : '',
    },
    WebkitAppRegion: e.drag ? 'drag' : 'no-drag',
  }));
((exports.View = (e) =>
  o.createElement(
    d,
    { hoverMode: e.hoverMode, onClick: e.clickHandle, drag: !!e.drag && e.drag },
    e.children,
  )),
  (exports.View2 = (e) =>
    o.createElement(
      d,
      { hoverMode: e.hoverMode, onClick: e.clickHandle, drag: !!e.drag && e.drag },
      e.children,
    )));
