/* Recovered from Tezarre Driver 1.1.31 - renderer module H48f */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, n) {
          (void 0 === n && (n = r),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, n) {
          (void 0 === n && (n = r), (e[n] = t[r]));
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
      var n = {};
      if (null != r) for (var a in r) 'default' !== a && Object.hasOwnProperty.call(r, a) && e(n, r, a);
      return (t(n, r), n);
    },
  n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SpinBox = void 0));
const a = r(require('react')),
  o = n(require('@emotion/styled')),
  i = o.default('div')`
  dispaly: inline-block;
  width: 100%;
  height: 100%;
  margin: 0px;
  & input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #333333;
    border-radius: 2px;
    border: 0px;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    color: #959595;
    text-align: center;
  }

  & input:focus {
    color: #ffffff;
    outline: none;
  }

  & input[type='number']::-webkit-inner-spin-button,
  & input[type='number']::-webkit-outer-spin-button {
    opacity: 0;
    -webkit-appearance: none;
    width: 15px;
    height: 22px;
  }

  span {
    margin: 0;
    padding: 0;
    width: 20px;
    height: 50%;
    position: absolute;
    right: 0px;
  }

  .before {
    top: 3px;
    right: 3px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 6px 4px;
    border-color: transparent transparent #959595 transparent;
    pointer-events: none;
  }

  .after {
    bottom: 3px;
    right: 3px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #959595 transparent transparent transparent;
    pointer-events: none;
  }

  .before:hover {
    border-color: transparent transparent #ffffff transparent;
  }

  .after:hover {
    border-color: #ffffff transparent transparent transparent;
  }

  .before:active {
    border-color: transparent transparent #ffffff transparent;
  }

  .after:active {
    border-color: #ffffff transparent transparent transparent;
  }
`,
  s = o.default.button({
    position: 'absolute',
    width: 22,
    height: '50%',
    right: 0,
    background: 'transparent',
    border: '0',
    outline: 'none',
    '&.add': { top: 0 },
    '& .add-arrow': {
      width: 0,
      height: 0,
      position: 'absolute',
      top: 2,
      left: 6,
      borderStyle: 'solid',
      borderWidth: '0px 4px 6px 4px',
      borderColor: ' transparent transparent #959595 transparent',
    },
    '&:active .add-arrow': { borderColor: ' transparent transparent #ffffff transparent' },
    '&.reduce': { top: 11 },
    '& .down-arrow': {
      width: 0,
      height: 0,
      position: 'absolute',
      top: 3,
      left: 6,
      borderStyle: 'solid',
      borderWidth: '6px 4px 0 4px',
      borderColor: '#959595 transparent transparent transparent',
    },
    '&:active .down-arrow': { borderColor: '#ffffff transparent transparent transparent' },
  });
exports.SpinBox = (e) => {
  return a.default.createElement(
    a.Fragment,
    null,
    a.default.createElement(
      i,
      null,
      a.default.createElement('input', {
        disabled: e.isDisable,
        type: 'number',
        value: void 0 !== e.value ? e.value.toString() : 'undefined',
        onChange: (t) => {
          let r = parseInt('' === t.target.value ? e.min.toString() : t.target.value);
          if (r > e.max) return ((r = e.max), void e.setValue(r));
          r < e.min || r > e.max || e.setValue(r);
        },
        onKeyDown: (t) => {
          'Enter' === t.key && (t.currentTarget.blur(), e.setEdit && e.setEdit(!1));
        },
        onFocus: () => {
          e.setEdit && e.setEdit(!0);
        },
        onBlur: (t) => {
          e.changeFinished(e.value);
        },
      }),
      a.default.createElement(
        s,
        {
          className: 'add',
          onClick: () => {
            e.isDisable || e.value + e.step > e.max || e.changeFinished(e.value + e.step);
          },
          onMouseEnter: e.mouseEnter,
          onMouseLeave: e.mouseLeave,
        },
        a.default.createElement('div', { className: 'add-arrow' }),
      ),
      a.default.createElement(
        s,
        {
          className: 'reduce',
          onClick: () => {
            e.isDisable || e.value - e.step < e.min || e.changeFinished(e.value - e.step);
          },
          onMouseEnter: e.mouseEnter,
          onMouseLeave: e.mouseLeave,
        },
        a.default.createElement('div', { className: 'down-arrow' }),
      ),
    ),
  );
};
