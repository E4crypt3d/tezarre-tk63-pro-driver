/* Recovered from Tezarre Driver 1.1.31 - renderer module eseU */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_FK2102 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_fk2102Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_fk2102));
  }
}
exports.YC200_FK2102 = r;
