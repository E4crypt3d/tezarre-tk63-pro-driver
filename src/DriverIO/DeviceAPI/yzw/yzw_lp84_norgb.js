/* Recovered from Tezarre Driver 1.1.31 - renderer module SgVS */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_LP84_NORGB = void 0));
const e = require('./yzw_lp84.js'),
  t = require('./yzw_lp84matrix.js');
class r extends e.YZW_LP84 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yzw_lp84));
  }
}
exports.YZW_LP84_NORGB = r;
