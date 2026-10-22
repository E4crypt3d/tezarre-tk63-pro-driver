/* Recovered from Tezarre Driver 1.1.31 - renderer module QytN */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.lightTaoDiLayout = void 0),
  (exports.lightTaoDiLayout = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightWave', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        {
          type: 'LightRipple',
          maxValue: 6,
          minValue: 0,
          maxSpeed: 5,
          minSpeed: 0,
          rgb: !0,
          options: ['full', 'single'],
        },
        { type: 'LightRaindrop', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        {
          type: 'LightSnake',
          maxValue: 6,
          minValue: 0,
          maxSpeed: 5,
          minSpeed: 0,
          options: ['z', 'return'],
          rgb: !0,
        },
        { type: 'LightPressAction', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightConverage', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightNeon', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightUserPicture' },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }));
