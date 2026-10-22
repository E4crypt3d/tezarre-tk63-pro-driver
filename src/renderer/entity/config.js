/* Recovered from Tezarre Driver 1.1.31 - renderer module dwvF */

'use strict';
var e,
  t,
  o,
  n,
  i,
  p,
  r =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var i,
        p = arguments.length,
        r = p < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        r = Reflect.decorate(e, t, o, n);
      else
        for (var y = e.length - 1; y >= 0; y--)
          (i = e[y]) && (r = (p < 3 ? i(r) : p > 3 ? i(t, o, r) : i(t, o)) || r);
      return (p > 3 && r && Object.defineProperty(t, o, r), r);
    },
  y =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Config = void 0));
const d = require('typeorm'),
  s = require('./user.js'),
  l = require('./device_type.js');
let u = class extends d.BaseEntity {
  constructor() {
    (super(...arguments), (this.isShared = !1), (this.hasUpload = !1), (this.needDelete = !1));
  }
};
(r([d.PrimaryGeneratedColumn(), y('design:type', Number)], u.prototype, 'localId', void 0),
  r([d.Column({ nullable: !0 }), y('design:type', Number)], u.prototype, 'serverId', void 0),
  r([d.Column(), y('design:type', String)], u.prototype, 'name', void 0),
  r([d.Column(), y('design:type', String)], u.prototype, 'category', void 0),
  r(
    [
      d.Column('simple-json', { nullable: !0 }),
      y('design:type', 'function' == typeof (e = 'undefined' != typeof Array && Array) ? e : Object),
    ],
    u.prototype,
    'dpi',
    void 0,
  ),
  r([d.Column(), y('design:type', Number)], u.prototype, 'reportRate', void 0),
  r([d.Column('simple-json'), y('design:type', Array)], u.prototype, 'value', void 0),
  r(
    [
      d.Column('simple-json'),
      y(
        'design:type',
        'function' == typeof (t = 'undefined' != typeof LightSetting && LightSetting) ? t : Object,
      ),
    ],
    u.prototype,
    'light',
    void 0,
  ),
  r(
    [
      d.Column('simple-json', { nullable: !0 }),
      y(
        'design:type',
        'function' == typeof (o = 'undefined' != typeof LightSetting && LightSetting) ? o : Object,
      ),
    ],
    u.prototype,
    'logoLight',
    void 0,
  ),
  r(
    [
      d.Column('simple-json', { nullable: !0 }),
      y('design:type', 'function' == typeof (n = 'undefined' != typeof Array && Array) ? n : Object),
    ],
    u.prototype,
    'lightPic',
    void 0,
  ),
  r(
    [
      d.ManyToOne(
        (e) => s.User,
        (e) => e.configs,
      ),
      y('design:type', 'function' == typeof (i = void 0 !== s.User && s.User) ? i : Object),
    ],
    u.prototype,
    'user',
    void 0,
  ),
  r(
    [
      d.ManyToOne(
        (e) => l.DeviceType,
        (e) => e.configs,
      ),
      y('design:type', 'function' == typeof (p = void 0 !== l.DeviceType && l.DeviceType) ? p : Object),
    ],
    u.prototype,
    'deviceType',
    void 0,
  ),
  r([d.Column(), y('design:type', Boolean)], u.prototype, 'isShared', void 0),
  r([d.Column(), y('design:type', Boolean)], u.prototype, 'hasUpload', void 0),
  r([d.Column(), y('design:type', Boolean)], u.prototype, 'needDelete', void 0),
  (u = r([d.Entity()], u)),
  (exports.Config = u));
