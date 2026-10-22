/* Recovered from Tezarre Driver 1.1.31 - renderer module f2z1 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Bottom = void 0));
const t = e(require('react')),
  r = require('./../res.js'),
  i = require('./../dj.js'),
  o = require('./store.js'),
  s = require('./../mobxStore/store.js'),
  d = require('mobx-react-lite'),
  n = (e) =>
    t.default.createElement(
      i.dj.View,
      { w: e.ishide ? 0 : 40, h: e.ishide ? 0 : 25, relative: !0 },
      !e.ishide && t.default.createElement(i.dj.VerticalLine, { h: 14, y: 4, x: 21 }),
      !e.ishide &&
        t.default.createElement(i.dj.Button, {
          w: 22,
          h: 22,
          x: 26,
          y: 0,
          isHightLight: e.isHightLight,
          img: {
            size: { w: 22, h: 22 },
            src:
              'keyboard' !== e.type || e.is24
                ? 'keyboard' === e.type && e.is24
                  ? r.res.img.bottom_keyboard_24g
                  : 'mouse' === e.type
                    ? r.res.img.bottom_mouse
                    : r.res.img.bottom_delete
                : r.res.img.bottom_keyboard,
          },
          clickHandle: e.clickHandle,
        }),
    );
exports.Bottom = () => {
  const { configurationOpen: e } = o.store.useState((e) => e.configurationOpen),
    { deviceStore: a } = s.useStore(),
    { isKeyStore: c } = s.useStore(),
    { macroStore: l } = s.useStore(),
    { toastStore: u } = s.useStore();
  return d.useObserver(() => {
    var d;
    return t.default.createElement(
      i.dj.View,
      { w: 1200, h: 61, x: 0, y: 667 },
      t.default.createElement(i.dj.Line, { lineColor: 'Normal' }),
      t.default.createElement(i.dj.Text, {
        w: 160,
        h: 20,
        x: 8,
        y: 20,
        type: '鼠标型号',
        text: null === (d = a.currentDev) || void 0 === d ? void 0 : d.deviceType.displayName,
      }),
      t.default.createElement(
        i.dj.FlexView,
        { w: 630, h: 35, x: 132, y: 20, justifyContent: 'start', horizontalScroll: !0 },
        a.deviceArr.map((e, i) =>
          t.default.createElement(n, {
            ishide: !1,
            key: i,
            type: e.deviceType.type ? e.deviceType.type : '',
            is24: e.deviceType.is24,
            isHightLight: a.currentSelectIndex === i,
            clickHandle: () => {
              e.deviceType.is24 && u.devSleeping
                ? u.setErr(r.res.text.未连接到24G键盘())
                : (l.stoptHook(), a.currentSelectIndex !== i && a.setCurrentSelectIndex(i));
            },
          }),
        ),
      ),
      t.default.createElement(i.dj.Button, {
        w: 130,
        h: 22,
        x: 771,
        y: 20,
        img: { size: { w: 22, h: 22 }, src: r.res.img.leftbar_recovery },
        mode: 'Lighter',
        isHightLight: !1,
        textW: 108,
        text: r.res.string.恢复默认,
        clickHandle: () => {
          'stop' === l.recodingState
            ? a.setReset()
            : s.mobxStore.toastStore.setInfo(r.res.text.请先停止录制());
        },
      }),
      t.default.createElement(i.dj.ButtonELL, {
        w: 80,
        h: 22,
        x: 893,
        y: 20,
        mode: '文本text',
        isHightLight: !1,
        isDisabled: !1,
        text: r.res.text.配置(),
      }),
      t.default.createElement(i.dj.ButtonELL, {
        w: 180,
        h: 22,
        x: 962,
        y: 20,
        reverse: !0,
        img: { size: { w: 10, h: 6 }, src: r.res.img.bottom_configure },
        mode: 'Lighter',
        isHightLight: e,
        textW: 165,
        text: a.currentConfig.name,
        clickHandle: () => {
          'recording' !== s.mobxStore.macroStore.recodingState
            ? (c.setIsOpen(!1), l.stoptHook(), o.store.setState.configurationOpen(!e))
            : s.mobxStore.toastStore.setErr(r.res.text.请先停止录制());
        },
      }),
    );
  });
};
