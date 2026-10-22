/* Recovered from Tezarre Driver 1.1.31 - renderer module x8i9 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_L8 = void 0));
const e = require('./yc200_l8Matrix.js'),
  t = require('./YC200Common.js');
class r extends t.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = e.defaultMatrix_yc200_l8));
  }
}
exports.YC200_L8 = r;
