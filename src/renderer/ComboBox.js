/* Recovered from Tezarre Driver 1.1.31 - renderer module LUFp */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ComboBox = void 0));
const t = e(require('react')),
  o = e(require('@emotion/styled')),
  i = o.default.select({
    WebkitAppearance: 'none',
    outline: 0,
    boxShadow: 'none',
    border: '0 !important',
    background: '#252525',
    backgroundImage: 'none',
    flex: 1,
    color: '#959595',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    '& :disabled': { opacity: '0.4' },
  }),
  n = o.default.div((e) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    background: 'pink',
    overflow: 'hidden',
    borderRadius: '2px',
    textAlignLast: 'center',
    fontSize: 7,
    '&::after': {
      content: "'\\25BC'",
      height: '100%',
      position: 'absolute',
      top: '30%',
      right: 0,
      padding: '0 1.5em',
      cursor: 'pointer',
      pointerEvents: 'none',
      color: e.isDisabled ? '#959595' : '#ffffff',
      transition: '.25s all ease',
    },
    '&:hover::after': { color: '#959595' },
  }));
exports.ComboBox = (e) =>
  t.default.createElement(
    n,
    { isDisabled: !!e.isDisabled && e.isDisabled, onClick: e.clickHandle },
    t.default.createElement(
      i,
      {
        id: 'slct',
        disabled: e.isDisabled,
        value: e.selectedValue,
        onChange: (t) => e.onChange(e.modes.findIndex((e) => e === t.target.value)),
      },
      e.modes.map((e, o) => t.default.createElement('option', { key: o }, e)),
    ),
  );
