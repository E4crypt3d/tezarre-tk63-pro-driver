/* Recovered from Tezarre Driver 1.1.31 - renderer module jFkk */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_TK63PRO = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_tk63proMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_tk63pro));
  }
}
exports.YC300_TK63PRO = r;
