/* Recovered from Tezarre Driver 1.1.31 - renderer module nGSZ */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_GM807 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_gm807Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_gm807));
  }
}
exports.YC300_GM807 = r;
