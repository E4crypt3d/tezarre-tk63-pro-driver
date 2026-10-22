/* Recovered from Tezarre Driver 1.1.31 - renderer module ovBA */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.YC300_EK3000_2M_BT = void 0));
const e = require('./YC200Common.js'),
  t = require('./yc300_ek3000_2m_btMatrix.js');
class r extends e.YC200Common {
  constructor() {
    (super(...arguments), (this.defaultMatrix = t.defaultMatrix_yc300_ek3000_2m_bt));
  }
}
exports.YC300_EK3000_2M_BT = r;
