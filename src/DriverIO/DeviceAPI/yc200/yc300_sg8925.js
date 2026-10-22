/* Recovered from Tezarre Driver 1.1.31 - renderer module PeGP */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_SG8925 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_sg8925Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_sg8925));
  }
}
exports.YC300_SG8925 = r;
