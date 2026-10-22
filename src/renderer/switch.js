/* Recovered from Tezarre Driver 1.1.31 - renderer module Ajth */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SwitchButton = void 0));
const t = e(require('react')),
  o = e(require('@emotion/styled')),
  r = require('./dj.js'),
  i = o.default.div(
    {
      outline: 'none',
      appearance: 'none',
      position: 'relative',
      width: 40,
      height: 20,
      background: '#ccc',
      borderRadius: 10,
      transition: 'border-color .3s, background-color .3s',
    },
    (e) => ({ background: e.background }),
  ),
  n = o.default.div((e) => ({
    width: 16,
    height: 16,
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0, 0, 2px, #999',
    transition: '.4s',
    top: 2,
    position: 'absolute',
    left: e.left,
  }));
exports.SwitchButton = (e) =>
  t.default.createElement(
    'div',
    null,
    t.default.createElement(
      r.dj.View,
      { w: 40, h: 20 },
      t.default.createElement(
        i,
        {
          background: e.skey ? 'rgb(19, 206, 102)' : '#6c6c6c',
          onClick: () => {
            e.clickHandle && e.clickHandle();
          },
        },
        t.default.createElement(n, { left: e.skey ? '55%' : 2 }),
      ),
    ),
  );
