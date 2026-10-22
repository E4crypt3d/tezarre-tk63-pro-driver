/* Recovered from Tezarre Driver 1.1.31 - renderer module wcuH */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var r,
        s = arguments.length,
        i = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        i = Reflect.decorate(e, t, o, n);
      else
        for (var p = e.length - 1; p >= 0; p--)
          (r = e[p]) && (i = (s < 3 ? r(i) : s > 3 ? r(t, o, i) : r(t, o)) || i);
      return (s > 3 && i && Object.defineProperty(t, o, i), i);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ShopStore = void 0));
const o = require('mobx'),
  n = require('./baseStore.js');
let r = void 0;
class s extends n.BaseStore {
  constructor() {
    (super(...arguments), (this.shopKey = !1), (this.rotIndex = 0), (this.rotLen = 4));
  }
  setShopKey(e) {
    this.shopKey = e;
  }
  setRotIndex(e) {
    this.rotIndex = e;
  }
  setRotLen(e) {
    this.rotLen = e;
  }
  start() {
    (void 0 !== r && clearInterval(r),
      (r = setInterval(() => {
        (this.rotIndex++, this.rotIndex > this.rotLen - 1 && (this.rotIndex = 0));
      }, 3e3)));
  }
  stop() {
    void 0 !== r && clearInterval(r);
  }
}
(e([o.observable, t('design:type', Boolean)], s.prototype, 'shopKey', void 0),
  e([o.observable, t('design:type', Number)], s.prototype, 'rotIndex', void 0),
  e([o.observable, t('design:type', Number)], s.prototype, 'rotLen', void 0),
  e(
    [o.action, t('design:type', Function), t('design:paramtypes', [Boolean]), t('design:returntype', void 0)],
    s.prototype,
    'setShopKey',
    null,
  ),
  e(
    [o.action, t('design:type', Function), t('design:paramtypes', [Number]), t('design:returntype', void 0)],
    s.prototype,
    'setRotIndex',
    null,
  ),
  e(
    [o.action, t('design:type', Function), t('design:paramtypes', [Number]), t('design:returntype', void 0)],
    s.prototype,
    'setRotLen',
    null,
  ),
  e(
    [o.action, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    s.prototype,
    'start',
    null,
  ),
  e(
    [o.action, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    s.prototype,
    'stop',
    null,
  ),
  (exports.ShopStore = s));
