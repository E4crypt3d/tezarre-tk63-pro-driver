/* Recovered from Tezarre Driver 1.1.31 - renderer module AIDe */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Img = void 0));
const t = e(require('react')),
  r = { 完全装入: { backgroundSize: 'cotain' }, 完全覆盖背景区: { backgroundSize: 'cover' } };
exports.Img = (e) =>
  t.default.createElement('div', {
    style: {
      width: '100%',
      height: '100%',
      backgroundImage: e.imgBg ? `url(${e.imgBg})` : 'transparent',
      backgroundSize: r[e.type ? e.type : '完全覆盖背景区'].backgroundSize,
      backgroundRepeat: 'no-repeat',
    },
  });
