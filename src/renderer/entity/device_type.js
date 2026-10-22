/* Recovered from Tezarre Driver 1.1.31 - renderer module oy9I */

'use strict';
var e,
  t,
  o,
  i =
    (this && this.__decorate) ||
    function (e, t, o, i) {
      var n,
        p = arguments.length,
        r = p < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, o)) : i;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        r = Reflect.decorate(e, t, o, i);
      else
        for (var y = e.length - 1; y >= 0; y--)
          (n = e[y]) && (r = (p < 3 ? n(r) : p > 3 ? n(t, o, r) : n(t, o)) || r);
      return (p > 3 && r && Object.defineProperty(t, o, r), r);
    },
  n =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.DeviceType = void 0));
const p = require('typeorm'),
  r = require('./user.js'),
  y = require('./macro.js'),
  s = require('./config.js'),
  d = require('./../../../supportDev.js');
let l = class extends p.BaseEntity {
  constructor(e) {
    (super(),
      (this.needLock = !1),
      (this.group = 'rongyuan'),
      (this.company = 'rongyuan'),
      (this.devAddr = -1),
      (this.venderAddr = ''),
      (this.is24 = !1),
      (this.layer = 0),
      (this.fnLayer = 0),
      Object.assign(this, e),
      Object.assign(this, e),
      'win32' !== process.platform &&
        (this.layout &&
          (this.layout.light.types = this.layout.light.types.filter(
            (e) => -1 === e.type.indexOf('LightMusicFollow') && -1 === e.type.indexOf('LightScreenColor'),
          )),
        this.logoLayout &&
          (this.logoLayout.light.types = this.logoLayout.light.types.filter(
            (e) => -1 === e.type.indexOf('LightMusicFollow') && -1 === e.type.indexOf('LightScreenColor'),
          ))),
      void 0 === this.displayName && (this.displayName = this.name));
  }
};
(i([p.PrimaryColumn(), n('design:type', Number)], l.prototype, 'id', void 0),
  i([p.Column(), n('design:type', Number)], l.prototype, 'vid', void 0),
  i([p.Column(), n('design:type', Number)], l.prototype, 'pid', void 0),
  i([p.Column(), n('design:type', String)], l.prototype, 'name', void 0),
  i([p.Column(), n('design:type', String)], l.prototype, 'displayName', void 0),
  i([p.Column(), n('design:type', String)], l.prototype, 'type', void 0),
  i([p.Column(), n('design:type', Number)], l.prototype, 'support_onboard', void 0),
  i([p.Column({ nullable: !0 }), n('design:type', String)], l.prototype, 'version', void 0),
  i([p.Column({ nullable: !0 }), n('design:type', String)], l.prototype, 'severVersion', void 0),
  i([p.Column(), n('design:type', Number)], l.prototype, 'usage', void 0),
  i([p.Column(), n('design:type', Number)], l.prototype, 'usagePage', void 0),
  i([p.Column({ nullable: !0 }), n('design:type', Number)], l.prototype, 'featureReportByteLength', void 0),
  i([p.Column(), n('design:type', Boolean)], l.prototype, 'needLock', void 0),
  i(
    [
      p.Column('simple-json', { nullable: !0 }),
      n('design:type', 'function' == typeof (e = 'undefined' != typeof Layout && Layout) ? e : Object),
    ],
    l.prototype,
    'layout',
    void 0,
  ),
  i([p.Column(), n('design:type', String)], l.prototype, 'group', void 0),
  i([p.Column(), n('design:type', String)], l.prototype, 'company', void 0),
  i(
    [
      p.ManyToMany(
        (e) => r.User,
        (e) => e.deviceTypes,
      ),
      n('design:type', Array),
    ],
    l.prototype,
    'users',
    void 0,
  ),
  i(
    [
      p.OneToMany(
        (e) => y.Macro,
        (e) => e.deviceType,
      ),
      n('design:type', Array),
    ],
    l.prototype,
    'macros',
    void 0,
  ),
  i(
    [
      p.OneToMany(
        (e) => s.Config,
        (e) => e.deviceType,
      ),
      n('design:type', Array),
    ],
    l.prototype,
    'configs',
    void 0,
  ),
  i(
    [
      p.Column('simple-json', { nullable: !0 }),
      n('design:type', 'function' == typeof (t = 'undefined' != typeof Layout && Layout) ? t : Object),
    ],
    l.prototype,
    'logoLayout',
    void 0,
  ),
  i(
    [
      p.Column('simple-json', { nullable: !0 }),
      n('design:type', 'function' == typeof (o = void 0 !== d.OtherSetting && d.OtherSetting) ? o : Object),
    ],
    l.prototype,
    'otherSetting',
    void 0,
  ),
  (l = i([p.Entity(), n('design:paramtypes', [Object])], l)),
  (exports.DeviceType = l));
