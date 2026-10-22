/* Recovered from Tezarre Driver 1.1.31 - renderer module rWJt */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.K68_ELITE = void 0));
const e = require('./k68.js'),
  t = require('./k68_eliteMatrix.js');
class r extends e.K68 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_k68_elite));
  }
}
exports.K68_ELITE = r;
