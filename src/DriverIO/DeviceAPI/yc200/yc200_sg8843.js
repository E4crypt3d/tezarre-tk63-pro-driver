/* Recovered from Tezarre Driver 1.1.31 - renderer module bRFp */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SG8843 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_sg8843Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_sg8843));
  }
}
exports.YC200_SG8843 = r;
