/* Recovered from Tezarre Driver 1.1.31 - renderer module pkz1 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DazzleColorCheckBox = exports.DazzleColorBlock = exports.CheckBox2 = exports.CheckBox = void 0));
const t = e(require('react')),
  o = e(require('@emotion/styled')),
  i = require('./Text.js'),
  l = o.default('label')`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;

  & input {
    position: absolute;
    opacity: 0;
  }
  & .pointer {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    position: absolute;

    border: 1px solid #5a5a5a;
  }

  & input:hover ~ .pointer {
    border: 1px solid #929292;
  }

  & input:checked ~ .pointer {
    background: #23f9e2;
    border: 1px solid #23f9e2;
  }
  & .pointer::after {
    content: '  ';
    width: 33%;
    height: 66%;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    position: absolute;
    left: 33%;
    top: 66%;
    transform: translate(-30%, -85%) rotateZ(40deg);
    opacity: 0;
    transition: opacity 0.8s;
  }
  & input:checked ~ .pointer::after {
    opacity: 1;
  }
  & img {
    display:block
    width:11px;
    height:17px;
  }
`,
  a = {
    Normal: { size: 16, textType: '描述', top: 0 },
    用户须知: { size: 14, textType: 'user提示', top: -2 },
    宏界面: { size: 16, textType: '宏的单选复选框', top: -2 },
  };
((exports.CheckBox = (e) =>
  t.default.createElement(
    l,
    null,
    t.default.createElement(
      'div',
      { style: { position: 'absolute', left: 24, top: a[e.type].top } },
      t.default.createElement(i.Text, { type: '单选框', text: e.text }),
    ),
    t.default.createElement(
      'div',
      {
        style: { width: a[e.type].size, height: a[e.type].size, position: 'absolute', margin: 0, padding: 0 },
      },
      t.default.createElement('input', { type: 'checkbox', onChange: e.clickHandle, checked: e.checkState }),
      t.default.createElement('span', { className: 'pointer' }),
    ),
  )),
  (exports.CheckBox2 = (e) =>
    t.default.createElement(
      l,
      null,
      t.default.createElement(
        'div',
        { style: { position: 'absolute', left: 24, top: a[e.type].top, width: e.w, height: e.h } },
        e.text &&
          t.default.createElement(i.TextCheckBox, {
            type: '单选框2',
            text: e.text,
            isBool: !!e.isBool && e.isBool,
          }),
        e.imgBg && t.default.createElement('img', { src: e.imgBg }),
      ),
      t.default.createElement(
        'div',
        {
          style: {
            width: a[e.type].size,
            height: a[e.type].size,
            position: 'absolute',
            margin: 0,
            padding: 0,
          },
        },
        t.default.createElement('input', {
          type: 'checkbox',
          onChange: e.clickHandle,
          checked: e.checkState,
        }),
        t.default.createElement('span', { className: 'pointer' }),
      ),
    )),
  (exports.DazzleColorBlock = (e) =>
    t.default.createElement('div', {
      style: {
        backgroundImage: 'conic-gradient(red 33.33% ,red 33.33%, green 66.66%,green 66.66%, blue 100%)',
        width: '100%',
        height: '100%',
        borderRadius: 2,
      },
      onClick: e.clickHandle,
    })),
  (exports.DazzleColorCheckBox = (e) =>
    t.default.createElement(
      l,
      null,
      t.default.createElement(
        'div',
        { style: { position: 'absolute', left: 50, top: a[e.type].top, width: e.w, height: e.h } },
        e.text &&
          t.default.createElement(i.TextCheckBox, { type: '单选框2', text: e.text, isBool: e.isBool }),
      ),
      t.default.createElement(
        'div',
        {
          style: {
            display: 'flex',
            width: a[e.type].size,
            height: a[e.type].size,
            position: 'relative',
            margin: 0,
            padding: 0,
          },
        },
        t.default.createElement('input', {
          type: 'checkbox',
          onChange: e.clickHandle,
          checked: e.checkState,
        }),
        t.default.createElement('div', {
          style: {
            backgroundImage: 'conic-gradient(red 33.33% ,red 33.33%, green 66.66%,green 66.66%, blue 100%)',
            position: 'absolute',
            left: 30,
            width: 16,
            height: 16,
            borderRadius: 2,
          },
        }),
        t.default.createElement('span', { className: 'pointer' }),
      ),
    )));
