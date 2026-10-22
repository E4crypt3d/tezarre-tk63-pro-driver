/* Recovered from Tezarre Driver 1.1.31 - renderer module bgaf */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_LP104_DM = void 0));
const e = require('./yzw_lp104_dmMatrix.js'),
  t = require('./yzw_lp87_dm.js');
class r extends t.YZW_LP87_DM {
  constructor() {
    (super(...arguments), (this.defaultMatrix = e.defaultMatrix_yzw_lp104_dm));
  }
}
exports.YZW_LP104_DM = r;
