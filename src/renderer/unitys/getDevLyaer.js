/* Recovered from Tezarre Driver 1.1.31 - renderer module zJUi */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.getDevName = exports.getDevFnLayer = exports.getDevLayer = void 0));
const e = require('./../../../supportDev.js');
((exports.getDevLayer = (r) => {
  const t = e.supportDev.find((e) => e.id === r);
  return void 0 === (null == t ? void 0 : t.layer) ? 0 : t.layer;
}),
  (exports.getDevFnLayer = (r) => {
    const t = e.supportDev.find((e) => e.id === r);
    return void 0 === (null == t ? void 0 : t.fnLayer) ? 0 : t.fnLayer;
  }),
  (exports.getDevName = (r) => {
    const t = e.supportDev.find((e) => e.id === r);
    return void 0 === (null == t ? void 0 : t.name) ? '' : t.name;
  }));
