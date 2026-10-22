/* Recovered from Tezarre Driver 1.1.31 - renderer module Qutg */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.rongyuanRGBLayout4 =
    exports.rongyuanNoRGBLayout2 =
    exports.rongyuanNoRGBLayout =
    exports.rongyuanRGBLayout2 =
    exports.rongyuanRGBLayoutKB =
    exports.MusicLightConfig =
    exports.rongyuanRGBLayout =
      void 0),
  (exports.rongyuanRGBLayout = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightWave', maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
        { type: 'LightRipple', maxSpeed: 5, minSpeed: 0, rgb: !0, options: ['full', 'single'] },
        { type: 'LightRaindrop', maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightSnake', maxSpeed: 5, minSpeed: 0, options: ['z', 'return'], rgb: !0 },
        { type: 'LightPressAction', maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightConverage', maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightNeon', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightUserPicture' },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.MusicLightConfig = {
    type: 'LightMusicFollow',
    maxValue: 6,
    minValue: 0,
    options: ['upright', 'separate', 'intersect'],
    rgb: !1,
  }),
  (exports.rongyuanRGBLayoutKB = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0 },
        { type: 'LightBreath', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightWave', maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
        { type: 'LightRipple', maxSpeed: 5, minSpeed: 0, options: ['full', 'single'] },
        { type: 'LightRaindrop', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightSnake', maxSpeed: 5, minSpeed: 0, options: ['z', 'return'] },
        { type: 'LightPressAction', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightNeon', maxSpeed: 5, minSpeed: 0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanRGBLayout2 = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 4, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightWave', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightRipple', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightRaindrop', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightSnake', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightPressAction', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightConverage', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightNeon', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightSingleRipple', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightSineWave', maxValue: 4, minValue: 0, maxSpeed: 5, minSpeed: 0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanNoRGBLayout = {
    light: {
      isRgb: !1,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightWave', maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
        { type: 'LightRipple', maxSpeed: 5, minSpeed: 0, options: ['full', 'single'] },
        { type: 'LightRaindrop', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightSnake', maxSpeed: 5, minSpeed: 0, options: ['z', 'return'] },
        { type: 'LightPressAction', maxSpeed: 5, minSpeed: 0, options: ['onToOff', 'offToOn'] },
        { type: 'LightConverage', maxSpeed: 5, minSpeed: 0 },
        { type: 'LightUserPicture' },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanNoRGBLayout2 = {
    light: {
      isRgb: !1,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightWave', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
        {
          type: 'LightRipple',
          maxValue: 6,
          minValue: 0,
          maxSpeed: 5,
          minSpeed: 0,
          options: ['full', 'single'],
        },
        { type: 'LightRaindrop', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightSnake', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, options: ['z', 'return'] },
        {
          type: 'LightPressAction',
          maxValue: 6,
          minValue: 0,
          maxSpeed: 5,
          minSpeed: 0,
          options: ['onToOff', 'offToOn'],
        },
        { type: 'LightConverage', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightUserPicture', maxValue: 6, minValue: 0 },
        { type: 'LightSingleRipple', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightRoundRipple', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanRGBLayout4 = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightNeon', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0 },
        { type: 'LightWave', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
        { type: 'LightRipple', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightRaindrop', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightSnake', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightPressAction', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightConverage', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }));
