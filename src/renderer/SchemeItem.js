/* Recovered from Tezarre Driver 1.1.31 - renderer module pzMe */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SchemeItem = void 0));
const t = e(require('react')),
  o = require('./Text.js'),
  a = require('./Button.js'),
  n = require('./res.js');
exports.SchemeItem = (e) => {
  const i = [
      { name: e.name, offsetX: 30, optional: !1 },
      { name: e.describe, offsetX: 168, optional: !1 },
      { name: e.deviceName, offsetX: 378, optional: !1 },
      { name: e.username, offsetX: 462, optional: !1 },
      { name: e.time, offsetX: 543, optional: !1 },
      { name: e.downloadTimes, offsetX: 675, optional: !1 },
      { name: n.res.string.下载, offsetX: 814, optional: !0 },
    ],
    r = ['100px', '200px', '75px', '70px', '80px', '60px', ''];
  return t.default.createElement(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        background: 'head' === e.mode ? '#201f1f' : 'transparent',
        color: 'head' === e.mode ? '#7a7a7a' : '#959595',
      },
    },
    i.map((i, l) =>
      t.default.createElement(
        'div',
        { key: i.offsetX, style: { left: i.offsetX, position: 'absolute', top: 8, height: 17, width: r[l] } },
        i.optional && 'head' !== e.mode
          ? t.default.createElement(
              'div',
              { style: { width: 49, height: 24, position: 'absolute', top: -3 } },
              t.default.createElement(a.Button, {
                mode: 'Scheme',
                text: n.res.string.下载,
                clickHandle: e.download,
              }),
            )
          : t.default.createElement(o.TextEll, {
              text: i.name,
              type: 'head' === e.mode ? '方案共享页表头' : '方案共享页表内容',
            }),
      ),
    ),
  );
};
