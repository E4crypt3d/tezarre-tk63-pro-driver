/* Recovered from Tezarre Driver 1.1.31 - renderer module OTYm */

'use strict';
var e,
  t =
    (this && this.__decorate) ||
    function (e, t, o, n) {
      var i,
        r = arguments.length,
        s = r < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, o)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, o, n);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (i = e[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(t, o, s) : i(t, o)) || s);
      return (r > 3 && s && Object.defineProperty(t, o, s), s);
    },
  o =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  n =
    (this && this.__awaiter) ||
    function (e, t, o, n) {
      return new (o || (o = Promise))(function (i, r) {
        function s(e) {
          try {
            d(n.next(e));
          } catch (t) {
            r(t);
          }
        }
        function c(e) {
          try {
            d(n.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function d(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof o
                ? t
                : new o(function (e) {
                    e(t);
                  })).then(s, c);
        }
        d((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SessionUser = void 0));
const i = require('typeorm');
let r = (e = class extends i.BaseEntity {
  constructor(e, t) {
    (super(), (this.id = 1), (this.session = e), (this.userId = t));
  }
});
((r.getSession = () =>
  n(void 0, void 0, void 0, function* () {
    const t = yield e.find();
    if (0 !== t.length) return t[0];
  })),
  (r.setSession = (t, o) =>
    n(void 0, void 0, void 0, function* () {
      const n = new e(t, o);
      try {
        yield n.save();
      } catch (i) {
        console.log('eeeerrrrroooorrrr', i);
      }
    })),
  (r.delSession = () =>
    n(void 0, void 0, void 0, function* () {
      yield e.delete(1);
    })),
  t([i.PrimaryColumn(), o('design:type', Number)], r.prototype, 'id', void 0),
  t([i.Column(), o('design:type', String)], r.prototype, 'session', void 0),
  t([i.Column(), o('design:type', Number)], r.prototype, 'userId', void 0),
  (r = e = t([i.Entity(), o('design:paramtypes', [String, Number])], r)),
  (exports.SessionUser = r));
