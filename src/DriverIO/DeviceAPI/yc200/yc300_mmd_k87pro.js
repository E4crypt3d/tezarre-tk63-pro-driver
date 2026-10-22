/* Recovered from Tezarre Driver 1.1.31 - renderer module z25J */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_MMD_K87PRO = void 0));
const e = require('./YC200Common.js'),
  r = require('./yc300_mmd_k87proMatrix.js');
class t extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = r.defaultMatrix_yc300_mmd_k87pro));
  }
}
exports.YC300_MMD_K87PRO = t;
