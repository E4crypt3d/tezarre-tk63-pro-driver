/* Recovered from Tezarre Driver 1.1.31 - renderer module ZKD5 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
        }),
  t =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  r =
    (this && this.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var o = {};
      if (null != r) for (var a in r) 'default' !== a && Object.hasOwnProperty.call(r, a) && e(o, r, a);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroRecordArea = void 0));
const o = r(require('react')),
  a = require('./MacroList.js'),
  n = require('./../../../dj.js'),
  c = require('./../../../res.js'),
  i = require('./../../../mobxStore/store.js'),
  u = require('mobx-react-lite'),
  d = require('./../../../appConfig.js');
exports.MacroRecordArea = () => {
  const { macroStore: e } = i.useStore(),
    t = () => e.uiSaveMacro();
  return u.useObserver(() =>
    o.default.createElement(
      o.Fragment,
      null,
      o.default.createElement(
        n.dj.View,
        { w: 580, h: 32, x: 311, y: 25 },
        o.default.createElement(
          n.dj.View,
          null,
          o.default.createElement(n.dj.RadioButton, {
            x: 22,
            type: '方形',
            name: '宏播放形式',
            text: c.res.text.循环次数(),
            isChecked: 'repeat_times' === e.macroType,
            clickHandle: () => {
              (e.setMacroType('repeat_times'),
                'stop' === e.recodingState && e.currentRecMacroArr.length > 0 && t());
            },
          }),
          o.default.createElement(n.dj.SpinBox, {
            w: 74,
            h: 22,
            x: 110,
            y: -3,
            min: 1,
            max: 65535,
            value: e.repeatTimes,
            step: 1,
            setValue: (t) => {
              e.setRepeatTimes(t);
            },
            changeFinished: (r) => {
              (e.setRepeatTimes(r), 'stop' === e.recodingState && e.currentRecMacroArr.length > 0 && t());
            },
          }),
        ),
        o.default.createElement(n.dj.RadioButton, {
          w: 201,
          x: 225,
          type: '方形',
          name: '宏播放形式',
          text: c.res.text.使用指派按键切换开关播放(),
          isChecked: 'on_off' === e.macroType,
          clickHandle: () => {
            (e.setMacroType('on_off'), 'stop' === e.recodingState && e.currentRecMacroArr.length > 0 && t());
          },
        }),
        o.default.createElement(n.dj.RadioButton, {
          w: d.blockCloud ? 200 : 100,
          x: d.blockCloud ? 425 : 465,
          type: '方形',
          name: '宏播放形式',
          text: c.res.text.按下时播放(),
          isChecked: 'touch_repeat' === e.macroType,
          clickHandle: () => {
            (e.setMacroType('touch_repeat'),
              'stop' === e.recodingState && e.currentRecMacroArr.length > 0 && t());
          },
        }),
      ),
      o.default.createElement(
        n.dj.View,
        { w: 580, h: 447, x: 311, y: 57, form: 'Border' },
        o.default.createElement(
          n.dj.View,
          { w: 580, h: 34, form: 'MacroBackground' },
          o.default.createElement(n.dj.Button, {
            w: 58,
            h: 18,
            x: 21,
            y: 7,
            mode: 'Bluer',
            text: 'recording' === e.recodingState ? c.res.string.结束录制 : c.res.string.开始录制,
            clickHandle: () => {
              ('stop' === e.recodingState ? e.starHook() : e.stoptHook(),
                e.stopMouseEvent(),
                'stop' === e.recodingState && e.currentRecMacroArr.length > 0 && t());
            },
            mouseEnter: () => {
              'recording' === e.recodingState && e.stopMouseEvent();
            },
            mouseLeave: () => {
              'recording' === e.recodingState && e.startMouseEvent();
            },
          }),
          o.default.createElement(n.dj.Button, {
            w: 58,
            h: 18,
            x: 203,
            y: 7,
            mode: 'Bluer',
            text: c.res.string.清空,
            isDisabled: 'recording' === e.recodingState,
            clickHandle: () => {
              (e.setCurrentRecMacroArr([]), t());
            },
          }),
          o.default.createElement(n.dj.Button, {
            w: 58,
            h: 18,
            x: 510,
            y: 7,
            mode: 'Bluer',
            text: c.res.string.保存,
            clickHandle: t,
            mouseEnter: () => {
              'recording' === e.recodingState && e.stopMouseEvent();
            },
            mouseLeave: () => {
              'recording' === e.recodingState && e.startMouseEvent();
            },
          }),
        ),
        o.default.createElement(a.MacroList, null),
      ),
    ),
  );
};
