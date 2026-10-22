/* Recovered from Tezarre Driver 1.1.31 - renderer module DnSO */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_K081T_DM = void 0));
const t = require('./yzw_3098.js'),
  e = require('./yzw_k081t_dmMatrix.js');
class s extends t.YZW_3098 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = e.defaultMatrix_yzw_k081t_dm),
      (this.DAZZLE = 8),
      (this.NORMAL = 9),
      (this.MAXSPEED = 4),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 16733440,
        2: 16768256,
        3: 56576,
        4: 65365,
        5: 255,
        6: 5570815,
        7: 16777215,
      }));
  }
}
exports.YZW_K081T_DM = s;
