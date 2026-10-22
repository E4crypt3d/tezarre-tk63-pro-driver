/* Recovered from Tezarre Driver 1.1.31 - renderer module GQWY */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.KeyboardBlock = void 0));
const o = e(require('react')),
  r = e(require('@emotion/styled')),
  d = {
    Default: {
      opacity: 1,
      border: { normal: 'none', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: (e) => 'transparent', hover: (e) => 'transparent', active: (e) => '#4cd7c7' },
      borderRadius: 6,
    },
    CustomLight: {
      opacity: 0.33,
      border: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: (e) => e, hover: (e) => e, active: (e) => e },
      borderRadius: 6,
    },
    CustomWeight: {
      opacity: 0.75,
      border: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: (e) => e, hover: (e) => e, active: (e) => e },
      borderRadius: 6,
    },
    Test: {
      opacity: 1,
      border: { normal: 'solid 1px red', hover: 'solid 1px red', active: 'solid 1px red' },
      background: { normal: (e) => 'red', hover: (e) => 'red', active: (e) => '#red' },
      borderRadius: 6,
    },
    Forbidden: {
      opacity: 0.33,
      border: { normal: 'none', hover: 'none', active: 'none' },
      background: { normal: (e) => '#ff0000', hover: (e) => '#ff0000', active: (e) => '#ff0000' },
      borderRadius: 6,
    },
  },
  t = r.default.div((e) => ({
    with: '100%',
    height: '100%',
    opacity: d[e.type].opacity,
    border: d[e.type].border.normal,
    background: d[e.type].background.normal(e.color),
    borderRadius: d[e.type].borderRadius,
    '&:hover': { border: d[e.type].border.hover, background: d[e.type].background.hover(e.color) },
    '&:active': { border: d[e.type].border.active, background: d[e.type].background.active(e.color) },
  }));
exports.KeyboardBlock = (e) => {
  const r = e.mode ? e.mode : { color: '', type: 'Default' };
  return o.default.createElement(t, {
    color: r.color,
    type: r.type,
    onClick: e.clickHandle,
    onMouseDown: e.mouseDown,
    onMouseUp: e.mouseUp,
  });
};
