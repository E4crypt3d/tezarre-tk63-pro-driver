/* Recovered from Tezarre Driver 1.1.31 - renderer module AHNe */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SG8835_24_2M = void 0));
const e = require('./yc200_sg8821.js'),
  t = require('./yc200_sg8835Matrix.js');
class r extends e.YC200_SG8821 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_sg8835));
  }
}
exports.YC200_SG8835_24_2M = r;
