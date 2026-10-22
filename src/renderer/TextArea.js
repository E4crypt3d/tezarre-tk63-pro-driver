/* Recovered from Tezarre Driver 1.1.31 - renderer module jORo */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.TextArea = void 0));
const t = e(require('react')),
  l = e(require('@emotion/styled')),
  a = l.default.textarea({
    width: '100%',
    height: '100%',
    border: 0,
    outline: 0,
    fontSize: '13px',
    resize: 'none',
    background: 'transparent',
    color: '#fff',
    fontFamily: 'PingFangSC-Regular',
    overflow: 'hidden scroll',
    '&::-webkit-scrollbar': { width: '6px' },
    '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '5px' },
  }),
  r = (e) =>
    t.default.createElement('textarea', {
      value: e.value,
      onChange: e.setValue,
      style: {
        width: '100%',
        height: '100%',
        border: 0,
        outline: 0,
        fontSize: '14px',
        resize: 'none',
        background: '#121212',
        color: '#959595',
        fontFamily: 'PingFangSC-Regular',
      },
      placeholder: e.placeholder,
    }),
  o = (e) => t.default.createElement(a, { disabled: !0, defaultValue: e.placeholder });
exports.TextArea = (e) =>
  e.editble
    ? t.default.createElement(r, {
        placeholder: e.placeholder,
        value: e.value ? e.value : '',
        setValue: e.setValue ? e.setValue : () => {},
      })
    : t.default.createElement(o, { placeholder: e.placeholder });
