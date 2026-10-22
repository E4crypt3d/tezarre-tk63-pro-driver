/* Recovered from Tezarre Driver 1.1.31 - renderer module gLwh */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.List2 = exports.List = void 0));
const t = e(require('react')),
  r = e(require('@emotion/styled')),
  i = require('react-virtualized'),
  o = r.default(i.List)({
    outline: 'none',
    overflow: 'hidden auto',
    '&::-webkit-scrollbar': { width: '6px' },
    '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '5px' },
  });
exports.List = (e) => {
  return t.default.createElement(o, {
    width: e.w,
    height: e.h,
    rowCount: e.itemCount,
    rowHeight: e.itemSize(),
    rowRenderer: function (r) {
      return t.default.createElement('div', { key: r.key, style: r.style }, e.renderItem(r.index));
    },
  });
};
const n = r.default(i.List)({
  background: '#1c1c1c',
  paddingTop: 10,
  paddingLeft: 10,
  outline: 'none',
  overflow: 'hidden auto',
  '&::-webkit-scrollbar': { width: '6px' },
  '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '5px' },
});
exports.List2 = (e) => {
  return t.default.createElement(n, {
    width: e.w,
    height: e.h,
    rowCount: e.itemCount,
    rowHeight: e.itemSize(),
    rowRenderer: function (r) {
      return t.default.createElement('div', { key: r.key, style: r.style }, e.renderItem(r.index));
    },
  });
};
