/* Recovered from Tezarre Driver 1.1.31 - renderer module DjF3 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_5087BEU_PLUS_UK = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_5087beu_plus_ukMatrix.js');
class s extends e.YC200Common {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = t.defaultMatrix_yc300_5087beu_plus_uk),
      (this.DAZZLE = 7),
      (this.NORMAL = 8));
  }
}
exports.YC300_5087BEU_PLUS_UK = s;
