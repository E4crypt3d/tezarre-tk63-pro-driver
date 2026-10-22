/* Recovered from Tezarre Driver 1.1.31 - renderer module b8bE */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var i,
        s = arguments.length,
        y = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        y = Reflect.decorate(e, t, o, n);
      else
        for (var r = e.length - 1; r >= 0; r--)
          (i = e[r]) && (y = (s < 3 ? i(y) : s > 3 ? i(t, o, y) : i(t, o)) || y);
      return (s > 3 && y && Object.defineProperty(t, o, y), y);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.IsKeyStore = void 0));
const o = require('mobx'),
  n = require('./baseStore.js');
class i extends n.BaseStore {
  constructor() {
    (super(...arguments),
      (this.customKey = !1),
      (this.dazzleKey = !1),
      (this.lightKey = !0),
      (this.textKey = !0),
      (this.keyIsOpen = !1),
      (this.colorPickerKey = !0),
      (this.loginTipBoxKey = !1),
      (this.macroAddClickKey = !1),
      (this.macroAddTouchKey = !1),
      (this.isKnobKey = !1));
  }
  setCustomKey(e) {
    this.customKey = e;
  }
  setDazzleKey(e) {
    this.dazzleKey = e;
  }
  setLightKey(e) {
    this.lightKey = e;
  }
  setTextKey(e) {
    this.textKey = e;
  }
  setIsOpen(e) {
    this.keyIsOpen = e;
  }
  setColorPickerKey(e) {
    this.colorPickerKey = e;
  }
  setLoginTipBoxKey(e) {
    this.loginTipBoxKey = e;
  }
  setMacroAddClickKey(e) {
    this.macroAddClickKey = e;
  }
  setMacroAddTouchKey(e) {
    this.macroAddTouchKey = e;
  }
  setIsKnobKey(e) {
    this.isKnobKey = e;
  }
}
(e([o.observable, t('design:type', Boolean)], i.prototype, 'customKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setCustomKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'dazzleKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setDazzleKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'lightKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setLightKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'textKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setTextKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'keyIsOpen', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setIsOpen',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'colorPickerKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setColorPickerKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'loginTipBoxKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setLoginTipBoxKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'macroAddClickKey', void 0),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'macroAddTouchKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setMacroAddClickKey',
    null,
  ),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setMacroAddTouchKey',
    null,
  ),
  e([o.observable, t('design:type', Boolean)], i.prototype, 'isKnobKey', void 0),
  e(
    [
      o.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Boolean]),
      t('design:returntype', void 0),
    ],
    i.prototype,
    'setIsKnobKey',
    null,
  ),
  (exports.IsKeyStore = i));
