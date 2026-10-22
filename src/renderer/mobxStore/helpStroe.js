/* Recovered from Tezarre Driver 1.1.31 - renderer module lxCQ */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, r, n) {
      var o,
        i = arguments.length,
        c = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        c = Reflect.decorate(e, t, r, n);
      else
        for (var s = e.length - 1; s >= 0; s--)
          (o = e[s]) && (c = (i < 3 ? o(c) : i > 3 ? o(t, r, c) : o(t, r)) || c);
      return (i > 3 && c && Object.defineProperty(t, r, c), c);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  r =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function c(e) {
          try {
            a(n.next(e));
          } catch (t) {
            i(t);
          }
        }
        function s(e) {
          try {
            a(n.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function a(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(c, s);
        }
        a((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.HelpStore = void 0));
const n = require('mobx'),
  o = require('./../WebService.js'),
  i = require('./baseStore.js'),
  c = require('./store.js');
class s extends i.BaseStore {
  constructor() {
    (super(), (this.currentComanyDevList = []));
  }
  getCurrentComanyDevList() {
    return r(this, void 0, void 0, function* () {
      this.doAsync(o.DBService.getCurrentComanyDevList, (e) => {
        this.currentComanyDevList = e.filter((e) => {
          var t, r;
          return 'help' ===
            (null === (t = c.mobxStore.deviceStore.currentDev) || void 0 === t ? void 0 : t.deviceType.name)
            ? e.id < 66 && e.id > 0
            : 'helpYZW' ===
                (null === (r = c.mobxStore.deviceStore.currentDev) || void 0 === r
                  ? void 0
                  : r.deviceType.name)
              ? e.id >= 66
              : void 0;
        });
      });
    });
  }
}
(e([n.observable, t('design:type', Array)], s.prototype, 'currentComanyDevList', void 0),
  e(
    [n.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', Promise)],
    s.prototype,
    'getCurrentComanyDevList',
    null,
  ),
  (exports.HelpStore = s));
