/* Recovered from Tezarre Driver 1.1.31 - renderer module rxew */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_MK61MAX = void 0));
const e = require('./yzw_rs1.js'),
  r = require('./yzw_mk61maxMatrix.js');
class t extends e.YZW_RS1 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = r.defaultMatrix_yzw_mk61max));
  }
}
exports.YZW_MK61MAX = t;
