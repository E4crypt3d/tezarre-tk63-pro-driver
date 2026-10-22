/* Recovered from Tezarre Driver 1.1.31 - main module StaC */

'use strict';
var e;
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.defaultLayout = exports.MouseKey = void 0),
  (function (e) {
    ((e[(e.Left = -1e3)] = 'Left'),
      (e[(e.Right = -999)] = 'Right'),
      (e[(e.Middle = -998)] = 'Middle'),
      (e[(e.Back = -997)] = 'Back'),
      (e[(e.Forward = -996)] = 'Forward'),
      (e[(e.Dpi = -995)] = 'Dpi'),
      (e[(e.WheelForward = -994)] = 'WheelForward'),
      (e[(e.WheelBack = -993)] = 'WheelBack'),
      (e[(e.WheelLeft = -992)] = 'WheelLeft'),
      (e[(e.WheelRight = -991)] = 'WheelRight'),
      (e[(e.Key_1 = -990)] = 'Key_1'),
      (e[(e.Key_2 = -989)] = 'Key_2'),
      (e[(e.SCROLLUP = -988)] = 'SCROLLUP'),
      (e[(e.SCROLLDOWN = -987)] = 'SCROLLDOWN'),
      (e[(e.XUP = -986)] = 'XUP'),
      (e[(e.XDOWN = -985)] = 'XDOWN'),
      (e[(e.YUP = -984)] = 'YUP'),
      (e[(e.YDOWN = -983)] = 'YDOWN'));
  })((e = exports.MouseKey || (exports.MouseKey = {}))),
  (exports.defaultLayout = {
    light: {
      isRgb: !0,
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
  }));
