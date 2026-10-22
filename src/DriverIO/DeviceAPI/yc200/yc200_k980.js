/* Recovered from Tezarre Driver 1.1.31 - renderer module o8SJ */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_K980 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_k980Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_k980));
  }
}
exports.YC200_K980 = r;
