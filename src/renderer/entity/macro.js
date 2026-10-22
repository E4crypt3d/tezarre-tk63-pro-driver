/* Recovered from Tezarre Driver 1.1.31 - renderer module uenZ */

'use strict';
var e,
  t,
  o,
  n,
  i,
  r =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var i,
        r = arguments.length,
        p = r < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        p = Reflect.decorate(e, t, o, n);
      else
        for (var d = e.length - 1; d >= 0; d--)
          (i = e[d]) && (p = (r < 3 ? i(p) : r > 3 ? i(t, o, p) : i(t, o)) || p);
      return (r > 3 && p && Object.defineProperty(t, o, p), p);
    },
  p =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Macro = void 0));
const d = require('typeorm'),
  a = require('./user.js'),
  y = require('./device_type.js');
let c = class extends d.BaseEntity {
  constructor() {
    (super(...arguments), (this.isShared = !1), (this.hasUpload = !1), (this.needDelete = !1));
  }
};
(r([d.PrimaryGeneratedColumn(), p('design:type', Number)], c.prototype, 'localId', void 0),
  r([d.Column({ nullable: !0 }), p('design:type', Number)], c.prototype, 'serverId', void 0),
  r([d.Column(), p('design:type', String)], c.prototype, 'name', void 0),
  r([d.Column({ nullable: !0 }), p('design:type', String)], c.prototype, 'category', void 0),
  r(
    [
      d.Column('simple-json'),
      p(
        'design:type',
        'function' == typeof (e = 'undefined' != typeof ConfigMacro && ConfigMacro) ? e : Object,
      ),
    ],
    c.prototype,
    'value',
    void 0,
  ),
  r(
    [
      d.ManyToOne(
        (e) => a.User,
        (e) => e.macros,
      ),
      p('design:type', 'function' == typeof (t = void 0 !== a.User && a.User) ? t : Object),
    ],
    c.prototype,
    'user',
    void 0,
  ),
  r(
    [
      d.ManyToOne(
        (e) => y.DeviceType,
        (e) => e.macros,
      ),
      p('design:type', 'function' == typeof (o = void 0 !== y.DeviceType && y.DeviceType) ? o : Object),
    ],
    c.prototype,
    'deviceType',
    void 0,
  ),
  r(
    [
      d.Column(),
      d.CreateDateColumn(),
      p('design:type', 'function' == typeof (n = 'undefined' != typeof Date && Date) ? n : Object),
    ],
    c.prototype,
    'createAt',
    void 0,
  ),
  r(
    [
      d.Column(),
      d.UpdateDateColumn(),
      p('design:type', 'function' == typeof (i = 'undefined' != typeof Date && Date) ? i : Object),
    ],
    c.prototype,
    'updatedAt',
    void 0,
  ),
  r([d.Column(), p('design:type', Boolean)], c.prototype, 'isShared', void 0),
  r([d.Column(), p('design:type', Boolean)], c.prototype, 'hasUpload', void 0),
  r([d.Column(), p('design:type', Boolean)], c.prototype, 'needDelete', void 0),
  (c = r([d.Entity()], c)),
  (exports.Macro = c));
