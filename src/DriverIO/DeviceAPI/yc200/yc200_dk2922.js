/* Recovered from Tezarre Driver 1.1.31 - renderer module PMdX */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_DK2922 = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc200_dk2922Matrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc200_dk2922));
  }
}
exports.YC200_DK2922 = r;
