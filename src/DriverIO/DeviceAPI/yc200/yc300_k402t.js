/* Recovered from Tezarre Driver 1.1.31 - renderer module o7eE */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_K402T = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_k402t_singleMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_k402t_single));
  }
}
exports.YC300_K402T = r;
