/* Recovered from Tezarre Driver 1.1.31 - renderer module iFHo */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_MK108L_UK = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_mk108L_ukMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_mk108l_uk));
  }
}
exports.YC200_MK108L_UK = r;
