/* Recovered from Tezarre Driver 1.1.31 - renderer module MoJ6 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Sector = void 0));
const t = e(require('react')),
  n = e(require('./hsvToRgb.js'));
exports.Sector = (e) => {
  const r = (t, n) => ({ x: e.size / 2 + t * Math.cos(n), y: e.size / 2 - t * Math.sin(n) }),
    s = r(e.outerRadius, e.startAngle),
    a = r(e.outerRadius, e.endAngle),
    u = r(e.innerRadius, e.endAngle),
    i = r(e.innerRadius, e.startAngle),
    d = +(e.endAngle < e.startAngle
      ? e.startAngle - e.endAngle > Math.PI
      : e.startAngle - e.endAngle > -Math.PI),
    l = `M ${s.x},${s.y}\n  A ${e.outerRadius},${e.outerRadius} 0 ${d} 1 ${a.x} ${a.y}\n  L ${u.x},${u.y}\n  A ${e.innerRadius},${e.innerRadius} 0 ${d} 0 ${i.x} ${i.y}\n  Z`,
    o = n.default(e.currentBlockIndex);
  return t.default.createElement('path', { d: l, fill: o });
};
