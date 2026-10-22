/* Recovered from Tezarre Driver 1.1.31 - renderer module RLwk */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.TextSetInput = exports.TextInput = void 0));
const t = e(require('react')),
  n = e(require('@emotion/styled')),
  r = {
    Default: { textAlgin: 'left', background: 'inherit', borderRadius: '0px', border: 'none' },
    密码: { textAlgin: 'left', background: 'inherit', borderRadius: '0px', border: 'none' },
    Center: { textAlgin: 'center', background: '#252525', borderRadius: '0px', border: 'none' },
    组合键按键: {
      background: '#252525',
      borderRadius: '2px',
      border: 'solid 1px #23f9e2',
      textAlgin: 'center',
    },
    宏按键: { background: 'transparent', borderRadius: '0px', border: 'transparent', textAlgin: 'center' },
    重命名: { background: '#252525', borderRadius: '2px', border: 'solid 1px #23f9e2', textAlgin: 'left' },
  },
  i = n.default.div((e) => ({
    width: '100%',
    height: '100%',
    '& input': {
      width: '100%',
      height: '100%',
      color: '#ffffff',
      outline: 'none',
      border: r[e.type || 'Default'].border,
      background: r[e.type || 'Default'].background,
      '::-webkit-input-placeholder': { textAlign: r[e.type || 'Default'].textAlgin },
      borderRadius: r[e.type || 'Default'].borderRadius,
      textAlign: r[e.type || 'Default'].textAlgin,
      fontFamily: 'PingFangSC-Regular',
    },
  }));
exports.TextInput = (e) => {
  const n = e.usePlaceholder();
  return t.default.createElement(
    i,
    { type: e.type },
    t.default.createElement('input', {
      type: '密码' === e.type ? 'password' : 'text',
      placeholder: n,
      onChange: e.onChange,
      value: e.value,
      autoFocus: e.autoFocus,
      onFocus: e.inputFocus,
      onKeyUp: (t) => {
        ('组合键按键' !== e.type && e.inputFinished && 'Enter' === t.key && e.inputFinished(),
          '组合键按键' === e.type && t.target.blur());
      },
      onBlur: () => e.inputFinished && e.inputFinished(),
    }),
  );
};
const o = n.default.div((e) => ({
  width: '100%',
  height: '100%',
  '& input': {
    width: '100%',
    height: '100%',
    color: e.forBidden ? '#ffffff' : '#6c6c6c',
    outline: 'none',
    border: e.forBidden ? r[e.type || 'Default'].border : 'solid 1px #252525',
    background: r[e.type || 'Default'].background,
    '::-webkit-input-placeholder': { textAlign: r[e.type || 'Default'].textAlgin },
    borderRadius: r[e.type || 'Default'].borderRadius,
    textAlign: r[e.type || 'Default'].textAlgin,
    fontFamily: 'PingFangSC-Regular',
  },
}));
exports.TextSetInput = (e) => {
  const n = e.usePlaceholder(),
    r = e.disabled;
  return t.default.createElement(
    o,
    { type: e.type, forBidden: !e.disabled || e.disabled },
    t.default.createElement('input', {
      type: '密码' === e.type ? 'password' : 'text',
      placeholder: n,
      disabled: !r,
      onChange: e.onChange,
      value: e.value,
      onFocus: e.inputFocus,
      onKeyUp: (t) => {
        ('组合键按键' !== e.type && e.inputFinished && 'Enter' === t.key && e.inputFinished(),
          '组合键按键' === e.type && t.target.blur());
      },
      onBlur: () => e.inputFinished && e.inputFinished(),
    }),
  );
};
