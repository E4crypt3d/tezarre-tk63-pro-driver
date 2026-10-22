/* Recovered from Tezarre Driver 1.1.31 - renderer module W2Up */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0));
var t = (t, a = 100, r = 100) => {
  var e, o, d, n, h, i, u, M;
  if (
    ((t = Math.max(0, Math.min(360, t))),
    (a = Math.max(0, Math.min(100, a))),
    (r = Math.max(0, Math.min(100, r))),
    (r /= 100),
    0 == (a /= 100))
  )
    return (
      (e = o = d = r),
      `#${Math.round(255 * e)
        .toString(16)
        .padStart(2, '0')}${Math.round(255 * o)
        .toString(16)
        .padStart(2, '0')}${Math.round(255 * d)
        .toString(16)
        .padStart(2, '0')}`
    );
  switch (
    ((i = r * (1 - a)),
    (u = r * (1 - a * (h = (t /= 60) - (n = Math.floor(t))))),
    (M = r * (1 - a * (1 - h))),
    n)
  ) {
    case 0:
      ((e = r), (o = M), (d = i));
      break;
    case 1:
      ((e = u), (o = r), (d = i));
      break;
    case 2:
      ((e = i), (o = r), (d = M));
      break;
    case 3:
      ((e = i), (o = u), (d = r));
      break;
    case 4:
      ((e = M), (o = i), (d = r));
      break;
    default:
      ((e = r), (o = i), (d = u));
  }
  return `#${Math.round(255 * e)
    .toString(16)
    .padStart(2, '0')}${Math.round(255 * o)
    .toString(16)
    .padStart(2, '0')}${Math.round(255 * d)
    .toString(16)
    .padStart(2, '0')}`;
};
exports.default = t;
