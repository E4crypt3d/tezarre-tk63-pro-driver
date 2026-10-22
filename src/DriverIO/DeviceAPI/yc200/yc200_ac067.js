/* Recovered from Tezarre Driver 1.1.31 - renderer module iBMH */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_AC067 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_ac067Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_ac067));
  }
}
exports.YC200_AC067 = r;
