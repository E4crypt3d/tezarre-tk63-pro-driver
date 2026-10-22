/* Recovered from Tezarre Driver 1.1.31 - renderer module xlGy */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Progress = void 0));
const t = e(require('react')),
  r = require('./../../dj.js'),
  a = require('./../../res.js');
exports.Progress = (e) =>
  t.default.createElement(
    t.default.Fragment,
    null,
    t.default.createElement(r.dj.View, { form: '背景页', drag: !0 }, ''),
    t.default.createElement(r.dj.Progress, { w: 800, h: 40, x: 200, y: 348, rate: Math.floor(100 * e.rate) }),
    !0 !== e.hidAlert &&
      t.default.createElement(r.dj.Text, {
        h: 40,
        y: 290,
        text: a.res.string.升级过程中严禁拔出或触碰设备USB,
        type: '升级警告',
      }),
    t.default.createElement(r.dj.Text, {
      h: 15,
      y: 400,
      text: a.res.string.正在升级中请耐心等候,
      type: '升级提示',
    }),
  );
