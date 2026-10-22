/* Recovered from Tezarre Driver 1.1.31 - renderer module J6ij */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Rotate = void 0));
const t = require('@emotion/core'),
  o = e(require('@emotion/styled')),
  r = t.keyframes({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(359deg)' } });
exports.Rotate = o.default.div({ animation: `${r} 3s infinite linear`, width: '100%', height: '100%' });
