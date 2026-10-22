/* Recovered from Tezarre Driver 1.1.31 - renderer module tqbm */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
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
      var o = {};
      if (null != r) for (var s in r) 'default' !== s && Object.hasOwnProperty.call(r, s) && e(o, r, s);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ColorWheel = void 0));
const o = r(require('react')),
  s = require('./Circle.js'),
  i = require('./Square.js'),
  u = require('./ColorWheel/example.js');
exports.ColorWheel = (e) => {
  const t = e.width,
    r = Math.floor(0.5 * t),
    l = 0.25 * t,
    n = u.rgbToHsv(e.color.r, e.color.g, e.color.b),
    [a, c] = o.useState({ h: n.h, s: n.s, v: n.v });
  return o.default.createElement(
    'div',
    { style: { position: 'relative' } },
    o.default.createElement(s.Circle, {
      size: t,
      numberOfSectors: 360,
      hue: a.h,
      setHue: (t) => {
        (c(Object.assign(Object.assign({}, a), { h: t })), e.setColor(u.hsvToRgb(t, a.s, a.v)));
      },
      mouseUp: e.mouseUp,
    }),
    o.default.createElement(
      'div',
      { style: { position: 'absolute', left: l, top: l } },
      o.default.createElement(i.Square, {
        size: r,
        hue: a.h,
        s: a.s,
        v: a.v,
        updateSV: (t, r) => {
          (c(Object.assign(Object.assign({}, a), { s: t, v: r })), e.setColor(u.hsvToRgb(a.h, t, r)));
        },
        mouseUp: e.mouseUp,
      }),
    ),
  );
};
