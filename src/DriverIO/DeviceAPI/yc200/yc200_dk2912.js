/* Recovered from Tezarre Driver 1.1.31 - renderer module DaUV */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_DK2912 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_dk2912Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_dk2912));
  }
}
exports.YC200_DK2912 = r;
