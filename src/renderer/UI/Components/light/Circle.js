/* Recovered from Tezarre Driver 1.1.31 - renderer module zPtL */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, a) {
          (void 0 === a && (a = r),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, a) {
          (void 0 === a && (a = r), (e[a] = t[r]));
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
      var a = {};
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(a, r, o);
      return (t(a, r), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Circle = void 0));
const a = r(require('react')),
  o = require('./Sector.js');
exports.Circle = (e) => {
  const t = Math.floor(((e.size / 2) * 0.2) / 2),
    r = Math.floor((e.size / 2) * 0.8),
    n = Math.floor(e.size / 2),
    [s, i] = a.useState({
      x: Math.floor(e.size / 2 + (r + t) * Math.cos(e.hue ? (-e.hue * Math.PI) / 180 : 0)),
      y: Math.floor(e.size / 2 - (r + t) * Math.sin(e.hue ? (-e.hue * Math.PI) / 180 : 0)),
    }),
    [u, c] = a.useState(!1),
    h = (a) => {
      const o = a <= 0 ? (180 * -a) / Math.PI : (180 * (2 * Math.PI - a)) / Math.PI;
      (i({
        x: Math.floor(e.size / 2 + (r + t) * Math.cos(a)),
        y: Math.floor(e.size / 2 - (r + t) * Math.sin(a)),
      }),
        e.setHue(o));
    };
  return a.default.createElement(
    'svg',
    {
      width: e.size,
      height: e.size,
      onMouseDown: (t) => {
        const a = t.clientX - t.currentTarget.getBoundingClientRect().x - e.size / 2,
          o = t.clientY - t.currentTarget.getBoundingClientRect().y - e.size / 2,
          s = -Math.atan2(o, a),
          i = Math.abs(Math.floor(n * Math.cos(s))),
          u = Math.abs(Math.floor(n * Math.sin(s))),
          l = Math.abs(Math.floor(r * Math.cos(s))),
          M = Math.abs(Math.floor(r * Math.sin(s)));
        ((Math.abs(a) >= l - 4 && Math.abs(a) <= i + 4) || (Math.abs(o) >= M - 4 && Math.abs(o) <= u + 4)) &&
          (h(s), c(!0));
      },
      onMouseUp: () => {
        (c(!1), e.mouseUp && e.mouseUp());
      },
      onMouseMove: (t) => {
        if (!u) return;
        const { x: r, y: a } = t.currentTarget.getBoundingClientRect(),
          o = t.clientX - r - e.size / 2,
          n = t.clientY - a - e.size / 2,
          s = -Math.atan2(n, o);
        h(s);
      },
    },
    (() =>
      Array(e.numberOfSectors)
        .fill(0)
        .map((t, s) => {
          const i = (2 * Math.PI * s) / e.numberOfSectors,
            u = (2 * Math.PI * (s + 1 === e.numberOfSectors ? 0 : s + 1)) / e.numberOfSectors;
          return a.default.createElement(o.Sector, {
            key: s,
            currentBlockIndex: s,
            size: e.size,
            startAngle: -i,
            endAngle: -u,
            innerRadius: r,
            outerRadius: n,
          });
        }))(),
  );
};
