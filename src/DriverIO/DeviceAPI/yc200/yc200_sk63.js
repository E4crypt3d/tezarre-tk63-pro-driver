/* Recovered from Tezarre Driver 1.1.31 - renderer module yYux */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_SK63 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_sk63Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_sk63));
  }
}
exports.YC200_SK63 = r;
