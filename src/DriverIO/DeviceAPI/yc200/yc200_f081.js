/* Recovered from Tezarre Driver 1.1.31 - renderer module dvU4 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_F081 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_f081Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_f081));
  }
}
exports.YC200_F081 = r;
