/* Recovered from Tezarre Driver 1.1.31 - renderer module KHQX */

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
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(n, r, i);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Square = void 0));
const n = r(require('react')),
  i = require('./ColorWheel/example.js');
exports.Square = (e) => {
  const t = e.size / 100,
    [r, u] = n.useState(!1);
  return n.default.createElement(
    'svg',
    {
      width: e.size,
      height: e.size,
      onMouseDown: (r) => {
        (u(!0),
          e.updateSV(
            (r.clientX - r.currentTarget.getBoundingClientRect().left) / t,
            (r.clientY - r.currentTarget.getBoundingClientRect().top) / t,
          ));
      },
      onMouseMove: (n) => {
        r &&
          e.updateSV(
            (n.clientX - n.currentTarget.getBoundingClientRect().left) / t,
            (n.clientY - n.currentTarget.getBoundingClientRect().top) / t,
          );
      },
      onMouseUp: (t) => {
        (u(!1), e.mouseUp());
      },
    },
    (() =>
      Array(t < 1 ? e.size : 100)
        .fill(0)
        .map((r, u) =>
          Array(t < 1 ? e.size : 100)
            .fill(0)
            .map((r, a) =>
              n.default.createElement('rect', {
                key: (u + 1) * (a + 1),
                x: t < 1 ? u : u * t,
                y: t < 1 ? a : a * t,
                width: t < 1 ? 1 : t,
                height: t < 1 ? 1 : t,
                fill: i.hsvToHex(e.hue, Math.floor(u / t), Math.floor(a / t)),
              }),
            ),
        ))(),
    (() =>
      n.default.createElement('circle', {
        cx: t * e.s,
        cy: t * e.v,
        r: 10 * t,
        stroke: `hsl(${e.hue}, ${Math.abs(e.s > 80 || e.s < 20 ? 100 - e.s : 100)}%, ${Math.abs(e.v > 80 || e.v < 20 ? 100 - e.v : 100)}%)`,
        strokeWidth: '2',
        fill: 'transparent',
      }))(),
  );
};
