/* Recovered from Tezarre Driver 1.1.31 - renderer module gOj8 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.cleanTime = exports.getMacroEvents = void 0));
const e = require('ramda'),
  t = require('./../../../res.js'),
  o = require('./../DeviceAPI/DeviceInterface.js'),
  r = 65535;
let s,
  a = 0;
((exports.getMacroEvents = (t) => {
  if (e.equals(s, t)) return [];
  s = t;
  let o = 0;
  const r = Math.floor(1e3 * process.uptime());
  0 === a ? (a = r) : ((o = r - a > 65535 ? 65535 : r - a), (a = r));
  const i = c(t);
  return 0 !== o ? [{ type: 'delay', value: o }, i] : [i];
}),
  (exports.cleanTime = () => (a = 0)));
const c = (e) => {
  var r, s;
  const a = 'up' === e.type.substr(e.type.length - 2, 2) ? 'up' : 'down';
  let c = t.res.映射.keyCodeMapHIDCode(e.keyCode);
  if (
    (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) &&
    -1 != (null === (r = e.code) || void 0 === r ? void 0 : r.indexOf('Right'))
  )
    switch ((console.error('右右右'), e.keyCode)) {
      case 16:
        c = 229;
        break;
      case 17:
        c = 228;
        break;
      case 18:
        c = 230;
    }
  if (
    -1 != [13, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46].findIndex((t) => t === e.keyCode) &&
    -1 != (null === (s = e.code) || void 0 === s ? void 0 : s.indexOf('Numpad'))
  )
    switch (e.keyCode) {
      case 13:
        c = 88;
        break;
      case 37:
        c = 80;
        break;
      case 38:
        c = 82;
        break;
      case 39:
        c = 79;
        break;
      case 40:
        c = 81;
    }
  if ('k' === e.type.substr(0, 1)) return { type: 'keyboard', action: a, value: void 0 === c ? 0 : c };
  if ('m' === e.type.substr(0, 1)) {
    let t = 0;
    if (void 0 === e.button) t = 0;
    else
      switch (e.button) {
        case 0:
          t = o.MouseKey.Left;
          break;
        case 1:
          t = o.MouseKey.Middle;
          break;
        case 2:
          t = o.MouseKey.Right;
          break;
        case 3:
          t = o.MouseKey.Back;
          break;
        case 4:
          t = o.MouseKey.Forward;
      }
    return { type: 'mouse_button', action: a, value: t };
  }
  return { type: 'delay', value: 0 };
};
