/* Recovered from Tezarre Driver 1.1.31 - renderer module c841 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_GM807 = void 0));
const e = require('./yzw_3098.js'),
  t = require('./yzw_gm807Matrix.js');
class r extends e.YZW_3098 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = t.defaultMatrix_yzw_gm807),
      (this.DAZZLE = 8),
      (this.NORMAL = 9));
  }
}
exports.YZW_GM807 = r;
