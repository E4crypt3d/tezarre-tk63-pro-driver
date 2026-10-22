/* Recovered from Tezarre Driver 1.1.31 - renderer module fAHp */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Progress = void 0));
const t = e(require('react')),
  r = e(require('@emotion/styled')),
  a = r.default.div({ width: '100%', height: '100%', background: 'gray' }),
  u = r.default.div((e) => ({ width: `${e.rate}%`, height: '100%', background: '#21ae9f' }));
exports.Progress = (e) => t.default.createElement(a, null, t.default.createElement(u, { rate: e.rate }));
