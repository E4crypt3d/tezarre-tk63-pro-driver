/* Recovered from Tezarre Driver 1.1.31 - renderer module woND */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, o) {
          (void 0 === o && (o = i),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, o) {
          (void 0 === o && (o = i), (e[o] = t[i]));
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
  i =
    (this && this.__importStar) ||
    function (i) {
      if (i && i.__esModule) return i;
      var o = {};
      if (null != i) for (var r in i) 'default' !== r && Object.hasOwnProperty.call(i, r) && e(o, i, r);
      return (t(o, i), o);
    },
  o =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.RadioButton = void 0));
const r = i(require('react')),
  n = o(require('@emotion/styled')),
  a = require('./Text.js'),
  l = n.default.label({
    display: 'inline-block',
    width: '100%',
    height: ' 100%',
    '& input': { position: 'absolute', opacity: 0 },
    '& .pointer': {
      display: 'inline-block',
      width: '100%',
      height: '100%',
      borderRadius: '2px',
      position: 'absolute',
      border: '1px solid #5a5a5a',
    },
    '& input:hover ~ .pointer': { border: '1px solid #929292' },
    '& input:checked ~ .pointer': { background: '#23f9e2', border: ' 1px solid #23f9e2' },
    '& .pointer::after': {
      content: "''",
      width: '33%',
      height: '66%',
      borderBottom: '2px solid black',
      borderRight: '2px solid black',
      position: 'absolute',
      left: '33%',
      top: '66%',
      transform: 'translate(-30%, -85%) rotateZ(40deg)',
      opacity: 0,
      transition: 'opacity 0.8s',
    },
    '& input:checked ~ .pointer::after': { opacity: 1 },
  }),
  d = n.default.label({
    display: 'block',
    paddingLeft: '0px',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: 12,
    color: '#ffffff',
    position: 'relative',
    '& input': { position: 'absolute', opacity: '0', cursor: 'pointer' },
    '& .pointer': {
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'transparent',
      border: 'solid 1px #979797',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
    },
    '&:hover .pointer': { border: 'solid 1px #21b6a6' },
    '& input:checked ~ .pointer': { border: 'solid 1px #21b6a6' },
    '& .pointer::after': {
      content: "''",
      width: 8,
      height: 8,
      position: 'absolute',
      left: '2px',
      top: '2px',
      borderRadius: '50%',
      background: '#21b6a6',
      display: 'none',
    },
    '& input:checked ~ .pointer::after': { display: 'block' },
  });
exports.RadioButton = (e) => {
  const t = r.default.createElement(
    r.Fragment,
    null,
    r.default.createElement(
      'div',
      { style: { position: 'absolute', left: 24, top: -2 } },
      r.default.createElement(a.Text, { type: '单选框', text: e.text }),
    ),
    r.default.createElement(
      'div',
      { style: { width: 16, height: 16, position: 'absolute', margin: 0, padding: 0 } },
      r.default.createElement('input', {
        type: 'radio',
        name: e.name,
        value: e.text,
        onClick: e.clickHandle,
        checked: e.isChecked,
        onChange: () => {},
      }),
      r.default.createElement('span', { className: 'pointer' }),
    ),
  );
  return '方形' === e.type ? r.default.createElement(l, null, t) : r.default.createElement(d, null, t);
};
