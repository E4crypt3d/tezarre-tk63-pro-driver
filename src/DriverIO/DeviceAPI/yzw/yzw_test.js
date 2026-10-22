/* Recovered from Tezarre Driver 1.1.31 - renderer module enA0 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YZW_TEST = void 0));
const t = require('./yzw_3098.js'),
  e = require('./yzw_testMatrix.js');
class s extends t.YZW_3098 {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = e.defaultMatrix_yzw_test),
      (this.DAZZLE = 6),
      (this.NORMAL = 7));
  }
}
exports.YZW_TEST = s;
