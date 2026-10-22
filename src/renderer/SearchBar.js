/* Recovered from Tezarre Driver 1.1.31 - renderer module HYOK */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SearchBar = void 0));
const t = e(require('react')),
  r = require('./TextInput.js'),
  i = require('./Img.js'),
  a = require('./res.js');
exports.SearchBar = () =>
  t.default.createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        backgroundColor: '#201f1f',
        borderRadius: '2px',
        color: '#5a5a5a',
        outline: 'none',
        border: 'none',
      },
    },
    t.default.createElement(
      'div',
      { style: { position: 'relative', left: 29, width: '70%', height: '100%' } },
      t.default.createElement(r.TextInput, { usePlaceholder: a.res.useString.请输入您要搜索的内容 }),
    ),
    t.default.createElement(
      'div',
      { style: { width: 12, height: 12, position: 'absolute', left: 380, top: 8 } },
      t.default.createElement(i.Img, { imgBg: a.res.img.search }),
    ),
  );
