/* Recovered from Tezarre Driver 1.1.31 - renderer module tAB2 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200AKKOCommon = void 0));
const e = require('./../yzw/yzw_5108Matrix.js'),
  t = require('./YC200Common.js');
class o extends t.YC200Common {
  constructor() {
    (super(...arguments),
      (this.defaultMatrix = e.defaultMatrix_yzw_5108),
      (this.DAZZLE = 7),
      (this.NORMAL = 8),
      (this.COMMONCOLOR = {
        0: 16711680,
        1: 65280,
        2: 255,
        3: 16733440,
        4: 7799039,
        5: 16776960,
        6: 16777215,
      }));
  }
}
exports.YC200AKKOCommon = o;
