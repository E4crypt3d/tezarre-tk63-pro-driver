/* Recovered from Tezarre Driver 1.1.31 - renderer module Q4RP */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.getUint8Bit0Index =
    exports.setBit =
    exports.getBit =
    exports.reverseBit =
    exports.setBitTo0 =
    exports.setBitTo1 =
      void 0),
  (exports.setBitTo1 = (t, e) => (t |= 1 << e)),
  (exports.setBitTo0 = (t, e) => (t &= ~(1 << e))),
  (exports.reverseBit = (t, e) => (t ^= 1 << e)),
  (exports.getBit = (t, e) => (t >> e) & 1),
  (exports.setBit = (t, e, s) => (1 === s ? exports.setBitTo1(t, e) : exports.setBitTo0(t, e))),
  (exports.getUint8Bit0Index = (t) => {
    const e = [];
    for (let s = 0; s < 8; s++) exports.getBit(t, s) || e.push(s);
    return e;
  }));
