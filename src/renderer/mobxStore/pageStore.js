/* Recovered from Tezarre Driver 1.1.31 - renderer module i0RH */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, r, o) {
      var n,
        a = arguments.length,
        s = a < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, r, o);
      else
        for (var i = e.length - 1; i >= 0; i--)
          (n = e[i]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, r, s) : n(t, r)) || s);
      return (a > 3 && s && Object.defineProperty(t, r, s), s);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.PageStore = void 0));
const r = require('mobx'),
  o = require('./../sdk/GA/ga.js'),
  n = require('./baseStore.js'),
  a = { 0: '主要设置', 1: '灯光设置', 2: '宏编辑', 3: '方案共享', 4: '个人中心', 5: '支持' };
class s extends n.BaseStore {
  constructor() {
    (super(),
      (this.pageIndex = 0),
      r.autorun(() => {
        o.GA.trackPage(a[this.pageIndex]);
      }));
  }
  setPageIndex(e) {
    this.pageIndex = e;
  }
}
(e([r.observable, t('design:type', Object)], s.prototype, 'pageIndex', void 0),
  e(
    [
      r.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Number]),
      t('design:returntype', void 0),
    ],
    s.prototype,
    'setPageIndex',
    null,
  ),
  (exports.PageStore = s));
