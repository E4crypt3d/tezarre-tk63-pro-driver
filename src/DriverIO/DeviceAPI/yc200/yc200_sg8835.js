/* Recovered from Tezarre Driver 1.1.31 - renderer module kF4v */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SG8835 = void 0));
const e = require('./yc200_sg8835Matrix.js'),
  t = require('./YC200Common.js');
class r extends t.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = e.defaultMatrix_yc200_sg8835));
  }
}
exports.YC200_SG8835 = r;
