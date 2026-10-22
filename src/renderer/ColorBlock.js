/* Recovered from Tezarre Driver 1.1.31 - renderer module Gojt */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ColorBlock = void 0));
const t = e(require('react'));
exports.ColorBlock = (e) =>
  t.default.createElement('div', {
    style: {
      background: e.bg || 'transparent',
      border: `solid 2px ${e.bg || '#929292'}`,
      width: '100%',
      height: '100%',
      borderRadius: 2,
    },
    onClick: e.clickHandle,
  });
