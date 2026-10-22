/* Recovered from Tezarre Driver 1.1.31 - renderer module RwBQ */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_FK5011GB = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_fk5011gbMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_fk5011gb));
  }
}
exports.YC200_FK5011GB = r;
