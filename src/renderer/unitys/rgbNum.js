/* Recovered from Tezarre Driver 1.1.31 - renderer module jgDa */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.numToRgb = exports.rgbToNum = void 0),
  (exports.rgbToNum = (e, r, o) => (e << 16) | (r << 8) | o),
  (exports.numToRgb = (e) => {
    return { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  }));
