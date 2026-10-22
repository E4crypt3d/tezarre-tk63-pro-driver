/* Recovered from Tezarre Driver 1.1.31 - renderer module zcph */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_HS_G20 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_hs_g20Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_hs_g20));
  }
}
exports.YC300_HS_G20 = r;
