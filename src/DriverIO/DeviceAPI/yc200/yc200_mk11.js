/* Recovered from Tezarre Driver 1.1.31 - renderer module TfeZ */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_MK11 = void 0));
const e = require('./YC200AKKOCommon.js'),
  t = require('./yc200_mk11Matrix.js');
class r extends e.YC200AKKOCommon {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_mk11));
  }
}
exports.YC200_MK11 = r;
