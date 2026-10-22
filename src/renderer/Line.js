/* Recovered from Tezarre Driver 1.1.31 - renderer module WGAD */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Line = void 0));
const r = e(require('react')),
  t = {
    Normal: '1px solid #201f1f',
    UserCenter: '1px solid #282727',
    User: '1px solid #353535',
    UserVerify: '1px solid #202020',
    按键设置: '1px solid #252525',
  };
exports.Line = (e) => r.default.createElement('hr', { style: { width: '100%', border: t[e.lineColor] } });
