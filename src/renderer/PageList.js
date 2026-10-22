/* Recovered from Tezarre Driver 1.1.31 - renderer module zJfr */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.PageList = void 0));
const t = e(require('@emotion/styled')),
  a = e(require('react')),
  i = e(require('react-paginate')),
  l = require('./FlexView.js'),
  n = t.default.div({
    color: '#959595',
    '& ul': { display: 'inline-block', paddingLeft: '15px', paddingRight: '15px' },
    '& li': { display: 'inline-block', paddingLeft: 20 },
    '& a': { outline: 'none' },
  });
exports.PageList = (e) =>
  a.default.createElement(
    l.FlexView,
    { justifyContent: 'center' },
    a.default.createElement(
      n,
      null,
      a.default.createElement(i.default, {
        previousLabel: '<',
        nextLabel: '>',
        breakLabel: '...',
        initialPage: e.pageIndex,
        pageCount: e.count,
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        activeClassName: 'light-page',
        onPageChange: (t) => e.setPage(t.selected),
      }),
    ),
  );
