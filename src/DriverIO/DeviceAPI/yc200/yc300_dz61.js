/* Recovered from Tezarre Driver 1.1.31 - renderer module s6bs */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_DZ61 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_dz61Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_dz61));
  }
}
exports.YC300_DZ61 = r;
