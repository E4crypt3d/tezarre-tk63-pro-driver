/* Recovered from Tezarre Driver 1.1.31 - renderer module lXcU */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SG8857_24_SINGLE_2M = void 0));
const e = require('./yc200_sg8821.js'),
  _ = require('./yc200_sg8857_24_single_2mMatrix.js');
class s extends e.YC200_SG8821 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = _.defaultMatrix_yc200_sg8857_24_single_2m));
  }
}
exports.YC200_SG8857_24_SINGLE_2M = s;
