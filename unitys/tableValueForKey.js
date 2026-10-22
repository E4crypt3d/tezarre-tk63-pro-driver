/* Recovered from Tezarre Driver 1.1.31 - renderer module R4TL */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.valueForIndex = exports.valueForKey = void 0));
const e = require('ramda');
((exports.valueForKey = (r, o) => Object.keys(r).find((s) => e.equals(r[s], o))),
  (exports.valueForIndex = (r, o) => {
    const s = Object.keys(r).find((s) => e.equals(r[Number(s)], o));
    return void 0 === s ? void 0 : Number(s);
  }));
