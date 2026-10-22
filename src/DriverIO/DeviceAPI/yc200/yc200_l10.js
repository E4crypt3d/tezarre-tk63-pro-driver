/* Recovered from Tezarre Driver 1.1.31 - renderer module hGT9 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_L10 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_l10matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_l10));
  }
}
exports.YC200_L10 = r;
