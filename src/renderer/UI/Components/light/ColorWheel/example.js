/* Recovered from Tezarre Driver 1.1.31 - renderer module a1ol */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.rgbToHsv = exports.hsvToHex = exports.hsvToRgb = exports.hexToRgb = void 0),
  (exports.hexToRgb = (a) => {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, t, r, e) {
      return t + t + r + r + e + e;
    });
    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : { r: 0, g: 0, b: 0 };
  }),
  (exports.hsvToRgb = (a, t, r) => {
    var e, o, n, h, s, d, M, u;
    if (
      ((a = Math.max(0, Math.min(360, a))),
      (t = Math.max(0, Math.min(100, t))),
      (r = Math.max(0, Math.min(100, r))),
      (r /= 100),
      0 == (t /= 100))
    )
      return ((e = o = n = r), { r: Math.round(255 * e), g: Math.round(255 * o), b: Math.round(255 * n) });
    switch (
      ((d = r * (1 - t)),
      (M = r * (1 - t * (s = (a /= 60) - (h = Math.floor(a))))),
      (u = r * (1 - t * (1 - s))),
      h)
    ) {
      case 0:
        ((e = r), (o = u), (n = d));
        break;
      case 1:
        ((e = M), (o = r), (n = d));
        break;
      case 2:
        ((e = d), (o = r), (n = u));
        break;
      case 3:
        ((e = d), (o = M), (n = r));
        break;
      case 4:
        ((e = u), (o = d), (n = r));
        break;
      default:
        ((e = r), (o = d), (n = M));
    }
    return { r: Math.round(255 * e), g: Math.round(255 * o), b: Math.round(255 * n) };
  }),
  (exports.hsvToHex = (a, t = 100, r = 100) => {
    var e, o, n, h, s, d, M, u;
    if (
      ((a = Math.max(0, Math.min(360, a))),
      (t = Math.max(0, Math.min(100, t))),
      (r = Math.max(0, Math.min(100, r))),
      (r /= 100),
      0 == (t /= 100))
    )
      return (
        (e = o = n = r),
        `#${Math.round(255 * e)
          .toString(16)
          .padStart(2, '0')}${Math.round(255 * o)
          .toString(16)
          .padStart(2, '0')}${Math.round(255 * n)
          .toString(16)
          .padStart(2, '0')}`
      );
    switch (
      ((d = r * (1 - t)),
      (M = r * (1 - t * (s = (a /= 60) - (h = Math.floor(a))))),
      (u = r * (1 - t * (1 - s))),
      h)
    ) {
      case 0:
        ((e = r), (o = u), (n = d));
        break;
      case 1:
        ((e = M), (o = r), (n = d));
        break;
      case 2:
        ((e = d), (o = r), (n = u));
        break;
      case 3:
        ((e = d), (o = M), (n = r));
        break;
      case 4:
        ((e = u), (o = d), (n = r));
        break;
      default:
        ((e = r), (o = d), (n = M));
    }
    return `#${Math.round(255 * e)
      .toString(16)
      .padStart(2, '0')}${Math.round(255 * o)
      .toString(16)
      .padStart(2, '0')}${Math.round(255 * n)
      .toString(16)
      .padStart(2, '0')}`;
  }),
  (exports.rgbToHsv = (a, t, r) => {
    let e, o, n, h, s, d, M, u, i, b, x, p;
    return (
      (e = a / 255),
      (o = t / 255),
      (n = r / 255),
      (i = Math.max(e, o, n)),
      (x = (a) => (i - a) / 6 / b + 0.5),
      (p = (a) => Math.round(100 * a) / 100),
      0 === (b = i - Math.min(e, o, n))
        ? (M = u = 0)
        : ((u = b / i),
          (h = x(e)),
          (s = x(o)),
          (d = x(n)),
          e === i ? (M = d - s) : o === i ? (M = 1 / 3 + h - d) : n === i && (M = 2 / 3 + s - h),
          M < 0 ? (M += 1) : M > 1 && (M -= 1)),
      { h: Math.round(360 * M), s: p(100 * u), v: p(100 * i) }
    );
  }));
