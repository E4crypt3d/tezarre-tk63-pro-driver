/* Recovered from Tezarre Driver 1.1.31 - renderer module c68d */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_PC75B = void 0));
const e = require('./YC200AKKOCommon.js'),
  t = require('./yc200_pc75bMatrix.js');
class r extends e.YC200AKKOCommon {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_pc75b));
  }
}
exports.YC200_PC75B = r;
