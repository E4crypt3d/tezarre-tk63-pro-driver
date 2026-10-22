/* Recovered from Tezarre Driver 1.1.31 - renderer module gALp */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_ELITE = void 0));
const e = require('./yzw_eliteMatrix.js'),
  t = require('./yzw_k68.js');
class r extends t.YZW_K68 {
  constructor() {
    (super(...arguments), (this.defaultMatrix = e.defaultMatrix_yzw_elite));
  }
}
exports.YZW_ELITE = r;
