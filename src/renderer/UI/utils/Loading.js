/* Recovered from Tezarre Driver 1.1.31 - renderer module MIET */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DevSleepLoading = exports.Loading = void 0));
const t = e(require('react')),
  r = require('./../../dj.js'),
  o = require('./../../mobxStore/store.js'),
  a = require('mobx-react-lite'),
  d = require('./../../res.js'),
  i = require('electron');
((exports.Loading = () => {
  const { toastStore: e } = o.useStore();
  return a.useObserver(() =>
    'bussy' === e.state
      ? t.default.createElement(
          r.dj.View,
          { form: 'loading', drag: !0 },
          t.default.createElement(
            r.dj.Rotate,
            { w: 34, h: 34, x: 583, y: 348 },
            t.default.createElement(r.dj.Img, { imgBg: d.res.img.loading, type: '完全覆盖背景区' }),
          ),
        )
      : null,
  );
}),
  (exports.DevSleepLoading = () => {
    const { toastStore: e } = o.useStore(),
      { deviceStore: s } = o.useStore();
    return a.useObserver(() =>
      e.devSleepTipsShow && s.currentDev && 'keyboard' === s.currentDev.type && s.currentDev.deviceType.is24
        ? t.default.createElement(
            r.dj.View,
            { form: 'loading', drag: !0 },
            t.default.createElement(r.dj.Button, {
              w: 13,
              h: 13,
              x: 1146,
              y: 23,
              img: { size: { w: 13, h: 13 }, src: d.res.img.close },
              clickHandle: () => i.remote.getCurrentWindow().hide(),
            }),
            t.default.createElement(
              r.dj.Rotate,
              { w: 34, h: 34, x: 583, y: 348 },
              t.default.createElement(r.dj.Img, { imgBg: d.res.img.loading, type: '完全覆盖背景区' }),
            ),
            t.default.createElement(r.dj.Text, {
              h: 24,
              x: 0,
              y: 400,
              type: '升级警告',
              text: d.res.string.未连接到24G键盘,
            }),
          )
        : null,
    );
  }));
