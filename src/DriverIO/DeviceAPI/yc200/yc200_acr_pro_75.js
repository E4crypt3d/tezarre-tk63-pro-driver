/* Recovered from Tezarre Driver 1.1.31 - renderer module WG75 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC200_ACR_PRO_75 = void 0));
const e = require('./YC200AKKOCommon.js'),
  r = require('./yc200_acr_pro_75Matrix.js');
class t extends e.YC200AKKOCommon {
  constructor() {
    (super(...arguments), (this.defaultMatrix = r.defaultMatrix_yc200_acr_pro_75));
  }
}
exports.YC200_ACR_PRO_75 = t;
