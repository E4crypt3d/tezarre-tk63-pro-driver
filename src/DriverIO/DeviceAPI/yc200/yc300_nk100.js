/* Recovered from Tezarre Driver 1.1.31 - renderer module cx4Q */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_NK100 = void 0));
const e = require('./YC200Common.js'),
  t = require('./../yzw/yzw_nk100Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yzw_nk100));
  }
}
exports.YC300_NK100 = r;
