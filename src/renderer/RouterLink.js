/* Recovered from Tezarre Driver 1.1.31 - renderer module qKYK */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.RouterLink = void 0));
const t = e(require('react')),
  o = e(require('@emotion/styled')),
  r = require('./Button.js'),
  i = o.default.a((e) => ({
    width: 'false' === e.wauto ? '100%' : 'auto',
    height: '100%',
    borderBottom: e.boderbottomcolor ? `3px solid ${e.boderbottomcolor}` : '',
    borderRadius: e.borderraidus ? e.borderraidus : '0',
    textDecoration: 'none',
    display: 'inline-block',
  }));
exports.RouterLink = (e) =>
  t.default.createElement(
    i,
    {
      wauto: e.wAuto ? 'true' : 'false',
      boderbottomcolor: e.pure ? e.pure.boderBottomColor : 'transparent',
      borderraidus: e.pure ? e.pure.borderRaidus : '0',
      onClick: () => {
        e.clickHandle();
      },
    },
    t.default.createElement(r.Button, {
      img: e.img,
      isHightLight: e.isHightLight,
      mode: '侧边栏',
      textW: e.textW,
      textAlign: e.textAlign,
      text: e.text,
    }),
  );
