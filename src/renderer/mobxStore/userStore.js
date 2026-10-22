/* Recovered from Tezarre Driver 1.1.31 - renderer module AGKP */

'use strict';
var e,
  t,
  r =
    (this && this.__decorate) ||
    function (e, t, r, o) {
      var s,
        i = arguments.length,
        c = i < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        c = Reflect.decorate(e, t, r, o);
      else
        for (var n = e.length - 1; n >= 0; n--)
          (s = e[n]) && (c = (i < 3 ? s(c) : i > 3 ? s(t, r, c) : s(t, r)) || c);
      return (i > 3 && c && Object.defineProperty(t, r, c), c);
    },
  o =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.UserStore = void 0));
const s = require('mobx'),
  i = require('./baseStore.js'),
  c = require('./../WebService.js'),
  n = require('./store.js');
let u = 0;
class a extends i.BaseStore {
  constructor() {
    (super(),
      c.userChangeSubject.subscribe((e) => {
        var t, r, o;
        (this.setCurrentUser(e),
          0 !== u &&
            (n.mobxStore.macroStore.refreshMacroList(),
            (null ===
              (r =
                null === (t = n.mobxStore.macroStore.currentSelectMacro) || void 0 === t ? void 0 : t.user) ||
            void 0 === r
              ? void 0
              : r.id) != (null === (o = this.user) || void 0 === o ? void 0 : o.id) &&
              n.mobxStore.macroStore.setCurrentSelectMacro(void 0),
            n.mobxStore.configStore.getConfigListFormDB()),
          u++);
      }));
  }
  setCurrentUser(e) {
    this.user = e;
  }
}
(r([s.observable, o('design:type', Object)], a.prototype, 'user', void 0),
  r(
    [
      s.action.bound,
      o('design:type', Function),
      o('design:paramtypes', [Object]),
      o('design:returntype', void 0),
    ],
    a.prototype,
    'setCurrentUser',
    null,
  ),
  (exports.UserStore = a));
