/* Recovered from Tezarre Driver 1.1.31 - renderer module hGWo */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.rongyuanMusicValueLayout =
    exports.rongyuanMusicNoPicValueLayout =
    exports.rongyuanMusicLayout =
      void 0),
  (exports.rongyuanMusicLayout = {
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
        { type: 'LightMusicFollow', options: ['upright', 'separate', 'intersect'], rgb: !1 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanMusicNoPicValueLayout = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightWave', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
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
        { type: 'LightMusicFollow', options: ['upright', 'separate', 'intersect'], rgb: !0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }),
  (exports.rongyuanMusicValueLayout = {
    light: {
      isRgb: !0,
      types: [
        { type: 'LightOff' },
        { type: 'LightAlwaysOn', maxValue: 6, minValue: 0, rgb: !0 },
        { type: 'LightBreath', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, rgb: !0 },
        { type: 'LightWave', maxValue: 6, minValue: 0, maxSpeed: 5, minSpeed: 0, options: ['right', 'left'] },
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
        { type: 'LightMusicFollow', options: ['upright', 'separate', 'intersect'], rgb: !0 },
      ],
    },
    reportRate: [125, 250, 500, 1e3],
  }));
