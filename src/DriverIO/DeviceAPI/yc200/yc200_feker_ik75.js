/* Recovered from Tezarre Driver 1.1.31 - renderer module lnJd */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_FEKER_IK75 = void 0));
const e = require('./YC200Common.js'),
  r = require('./yc200_feker_ik75Matrix.js');
class t extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = r.defaultMatrix_yc200_feker_ik75));
  }
}
exports.YC200_FEKER_IK75 = t;
