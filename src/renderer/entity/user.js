/* Recovered from Tezarre Driver 1.1.31 - renderer module LojZ */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, o, r) {
      var i,
        n = arguments.length,
        p = n < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, o)) : r;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        p = Reflect.decorate(e, t, o, r);
      else
        for (var y = e.length - 1; y >= 0; y--)
          (i = e[y]) && (p = (n < 3 ? i(p) : n > 3 ? i(t, o, p) : i(t, o)) || p);
      return (n > 3 && p && Object.defineProperty(t, o, p), p);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.User = void 0));
const o = require('typeorm'),
  r = require('./macro.js'),
  i = require('./config.js'),
  n = require('./device_type.js');
let p = class extends o.BaseEntity {
  constructor() {
    (super(...arguments), (this.gender = 'male'));
  }
};
(e([o.PrimaryColumn(), t('design:type', Number)], p.prototype, 'id', void 0),
  e([o.Column(), t('design:type', String)], p.prototype, 'name', void 0),
  e([o.Column(), t('design:type', String)], p.prototype, 'gender', void 0),
  e([o.Column(), t('design:type', String)], p.prototype, 'email', void 0),
  e([o.Column(), t('design:type', String)], p.prototype, 'company', void 0),
  e(
    [
      o.OneToMany(
        (e) => r.Macro,
        (e) => e.user,
      ),
      t('design:type', Array),
    ],
    p.prototype,
    'macros',
    void 0,
  ),
  e(
    [
      o.OneToMany(
        (e) => i.Config,
        (e) => e.user,
      ),
      t('design:type', Array),
    ],
    p.prototype,
    'configs',
    void 0,
  ),
  e(
    [
      o.ManyToMany(
        (e) => n.DeviceType,
        (e) => e.users,
      ),
      o.JoinTable(),
      t('design:type', Array),
    ],
    p.prototype,
    'deviceTypes',
    void 0,
  ),
  (p = e([o.Entity(), o.Unique(['name']), o.Unique(['email'])], p)),
  (exports.User = p));
