/* Recovered from Tezarre Driver 1.1.31 - renderer module cOFE */

'use strict';
var e,
  t,
  r =
    (this && this.__decorate) ||
    function (e, t, r, n) {
      var o,
        s = arguments.length,
        i = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        i = Reflect.decorate(e, t, r, n);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (o = e[c]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
      return (s > 3 && i && Object.defineProperty(t, r, i), i);
    },
  n =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.OtherStore = exports.devOther = void 0));
const o = require('mobx'),
  s = require('./baseStore.js');
exports.devOther = {};
class i extends s.BaseStore {
  constructor() {
    (super(), (this.currentOther = {}), this.currentOther === {} && (this.currentOther = exports.devOther));
  }
  setCurrentOther(e) {
    this.currentOther = e;
  }
  setCurrentOtherKey(e, t) {
    this.currentOther[t] = e;
  }
}
(r(
  [
    o.observable,
    n('design:type', 'function' == typeof (e = 'undefined' != typeof Other && Other) ? e : Object),
  ],
  i.prototype,
  'currentOther',
  void 0,
),
  r(
    [
      o.action.bound,
      n('design:type', Function),
      n('design:paramtypes', ['function' == typeof (t = 'undefined' != typeof Other && Other) ? t : Object]),
      n('design:returntype', void 0),
    ],
    i.prototype,
    'setCurrentOther',
    null,
  ),
  r(
    [
      o.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [Object, String]),
      n('design:returntype', void 0),
    ],
    i.prototype,
    'setCurrentOtherKey',
    null,
  ),
  (exports.OtherStore = i));
