/* Recovered from Tezarre Driver 1.1.31 - renderer module IKSx */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_MK3108 = void 0));
const e = require('./../yc200/yc200_mk15.js'),
  t = require('./yzw_mk3108Matrix.js');
class r extends e.YC200_MK15 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yzw_mk3108));
  }
}
exports.YZW_MK3108 = r;
