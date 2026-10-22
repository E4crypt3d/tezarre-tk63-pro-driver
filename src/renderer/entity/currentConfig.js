/* Recovered from Tezarre Driver 1.1.31 - renderer module Xjj7 */

'use strict';
var e,
  t =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var r,
        i = arguments.length,
        f = i < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        f = Reflect.decorate(e, t, o, n);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (r = e[c]) && (f = (i < 3 ? r(f) : i > 3 ? r(t, o, f) : r(t, o)) || f);
      return (i > 3 && f && Object.defineProperty(t, o, f), f);
    },
  o =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.CurrentConfig = void 0));
const n = require('typeorm'),
  r = require('./../DB.js');
let i = class extends n.BaseEntity {};
(t(
  [
    n.OneToOne((e) => r.Config, { nullable: !0, onDelete: 'CASCADE', primary: !0 }),
    n.JoinColumn(),
    o('design:type', 'function' == typeof (e = void 0 !== r.Config && r.Config) ? e : Object),
  ],
  i.prototype,
  'currentConfig',
  void 0,
),
  (i = t([n.Entity()], i)),
  (exports.CurrentConfig = i));
