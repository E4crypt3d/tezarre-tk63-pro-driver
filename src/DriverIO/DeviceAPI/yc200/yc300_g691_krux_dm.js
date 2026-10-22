/* Recovered from Tezarre Driver 1.1.31 - renderer module nlaK */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_G691_KRUX_DM = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_g691_krux_dmMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = t.defaultMatrix_yc300_g691_krux_dm),
      (this.DAZZLE = 7),
      (this.NORMAL = 8));
  }
}
exports.YC300_G691_KRUX_DM = r;
