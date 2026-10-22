/* Recovered from Tezarre Driver 1.1.31 - renderer module k07h */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_L9 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_l9matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_l9));
  }
}
exports.YC200_L9 = r;
