/* Recovered from Tezarre Driver 1.1.31 - renderer module bXZ6 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ColorWheel = void 0));
const t = e(require('react')),
  i = {
    Big: { width: '75%', height: '75%', left: '12.5%', top: '12.5%' },
    Small: { width: '60%', height: '60%', left: '20%', top: '20%' },
  },
  o = (e, t) =>
    'Big' === e
      ? 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)'
      : `conic-gradient(white,${t},${t},white)`;
exports.ColorWheel = (e) =>
  t.default.createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        background: o(e.size, e.color),
        position: 'relative',
        borderRadius: '50%',
      },
    },
    t.default.createElement('div', {
      style: {
        width: i[e.size].width,
        height: i[e.size].height,
        background: '#252525',
        position: 'absolute',
        borderRadius: '50%',
        left: i[e.size].left,
        top: i[e.size].top,
      },
    }),
  );
