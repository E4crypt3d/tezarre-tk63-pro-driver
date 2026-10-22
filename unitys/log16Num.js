/* Recovered from Tezarre Driver 1.1.31 - renderer module vHh5 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.log16Num = void 0),
  (exports.log16Num = (o, e) => {
    void 0 !== e
      ? console.log(o, [...e].map((o) => o.toString(16).padStart(4, '0x')).join(','))
      : console.error(o, '数据返回为空,数据错误!');
  }));
