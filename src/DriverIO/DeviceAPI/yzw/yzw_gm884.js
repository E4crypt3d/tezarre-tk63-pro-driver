/* Recovered from Tezarre Driver 1.1.31 - renderer module qsd9 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_GM884 = void 0));
const e = require('./yzw_3098.js'),
  t = require('./yzw_gm884Matrix.js');
class r extends e.YZW_3098 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = t.defaultMatrix_yzw_gm884),
      (this.DAZZLE = 8),
      (this.NORMAL = 9),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 16729088,
        2: 16776960,
        3: 65280,
        4: 65365,
        5: 255,
        6: 7799039,
        7: 16777215,
      }));
  }
}
exports.YZW_GM884 = r;
