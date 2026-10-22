/* Recovered from Tezarre Driver 1.1.31 - renderer module qkCl */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ledCommonLayout = void 0),
  (exports.ledCommonLayout = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 4, minValue: 0, rgb: !0, dazzle: !0 },
        { type: 'LightBreath', maxValue: 4, minValue: 0, maxSpeed: 4, minSpeed: 0, rgb: !0, dazzle: !0 },
        { type: 'LightNeon', maxValue: 4, minValue: 0, maxSpeed: 4, minSpeed: 0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }));
