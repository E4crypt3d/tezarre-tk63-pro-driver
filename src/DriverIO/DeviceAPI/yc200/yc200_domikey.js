/* Recovered from Tezarre Driver 1.1.31 - renderer module C9NY */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_DOMIKEY = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_domikeyMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_domikey));
  }
}
exports.YC200_DOMIKEY = r;
