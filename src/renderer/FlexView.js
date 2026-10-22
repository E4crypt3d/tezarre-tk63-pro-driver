/* Recovered from Tezarre Driver 1.1.31 - renderer module GgQH */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.FlexColorView = exports.FlexView2 = exports.FlexView = void 0));
const t = e(require('@emotion/styled')),
  i = e(require('react')),
  o = t.default.div(
    (e) => ({
      flexDirection: e.flexDirection,
      justifyContent: e.justifyContent ? e.justifyContent : '',
      alignItems: e.alignItems ? e.alignItems : '',
      '&:hover': {
        background: e.hoverMode
          ? { HightLight: 'linear-gradient(90deg,#1f1e1e 0%, #121212 100%)' }[e.hoverMode]
          : '',
      },
      overflow: e.horizontalScroll ? 'auto hidden' : 'hidden hidden',
    }),
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      outline: 'none',
      '&::-webkit-scrollbar': { width: '3px', height: '3px' },
      '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '3px' },
    },
  ),
  r = t.default.div(
    (e) => ({
      flexDirection: e.flexDirection,
      justifyContent: e.justifyContent ? e.justifyContent : '',
      flexWrap: e.flexWrap ? 'wrap' : 'nowrap',
      alignItems: e.alignItems ? e.alignItems : '',
      '&:hover': {
        background: e.hoverMode
          ? { HightLight: 'linear-gradient(90deg,#1f1e1e 0%, #121212 100%)' }[e.hoverMode]
          : '',
      },
      overflow: e.horizontalScroll ? 'auto hidden' : 'hidden hidden',
    }),
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      outline: 'none',
      '&::-webkit-scrollbar': { width: '3px', height: '3px' },
      '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '3px' },
    },
  );
((exports.FlexView = o),
  (exports.FlexView2 = r),
  (exports.FlexColorView = (e) => i.default.createElement(o, { onMouseOut: e.mouseOut })));
