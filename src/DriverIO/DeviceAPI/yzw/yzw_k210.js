/* Recovered from Tezarre Driver 1.1.31 - renderer module JCyk */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K210 = void 0));
const e = require('./yzw_k210Matrix.js'),
  t = require('./yzw_k219.js');
class r extends t.YZW_K219 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = e.defaultMatrix_yzw_k210));
  }
}
exports.YZW_K210 = r;
