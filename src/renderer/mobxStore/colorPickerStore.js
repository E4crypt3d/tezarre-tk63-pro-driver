/* Recovered from Tezarre Driver 1.1.31 - renderer module ECxk */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, o, r) {
      var i,
        c = arguments.length,
        n = c < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, o)) : r;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        n = Reflect.decorate(e, t, o, r);
      else
        for (var s = e.length - 1; s >= 0; s--)
          (i = e[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(t, o, n) : i(t, o)) || n);
      return (c > 3 && n && Object.defineProperty(t, o, n), n);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ColorPickerStore = void 0));
const o = require('mobx'),
  r = require('./baseStore.js');
class i extends r.BaseStore {
  constructor() {
    (super(), (this.colorPickerEditState = 'close'));
  }
  setColorPickerEditState(e) {
    this.colorPickerEditState = e;
  }
}
(e([o.observable, t('design:type', String)], i.prototype, 'colorPickerEditState', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [String]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setColorPickerEditState',
    null,
  ),
  (exports.ColorPickerStore = i));
