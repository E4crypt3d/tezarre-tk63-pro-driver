/* Recovered from Tezarre Driver 1.1.31 - renderer module V2DD */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SG8836_SINGLE_3M = void 0));
const e = require('./yc200_sg8821.js'),
  s = require('./yc200_sg8836_single_3mMatrix.js');
class t extends e.YC200_SG8821 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = s.defaultMatrix_yc200_sg8836_single_3m));
  }
}
exports.YC200_SG8836_SINGLE_3M = t;
