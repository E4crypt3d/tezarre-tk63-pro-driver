/* Recovered from Tezarre Driver 1.1.31 - renderer module lYm7 */

'use strict';
var t =
    (this && this.__decorate) ||
    function (t, e, r, a) {
      var i,
        o = arguments.length,
        n = o < 3 ? e : null === a ? (a = Object.getOwnPropertyDescriptor(e, r)) : a;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        n = Reflect.decorate(t, e, r, a);
      else
        for (var s = t.length - 1; s >= 0; s--)
          (i = t[s]) && (n = (o < 3 ? i(n) : o > 3 ? i(e, r, n) : i(e, r)) || n);
      return (o > 3 && n && Object.defineProperty(e, r, n), n);
    },
  e =
    (this && this.__metadata) ||
    function (t, e) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e);
    },
  r =
    (this && this.__awaiter) ||
    function (t, e, r, a) {
      return new (r || (r = Promise))(function (i, o) {
        function n(t) {
          try {
            c(a.next(t));
          } catch (e) {
            o(e);
          }
        }
        function s(t) {
          try {
            c(a.throw(t));
          } catch (e) {
            o(e);
          }
        }
        function c(t) {
          var e;
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  })).then(n, s);
        }
        c((a = a.apply(t, e || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.BatteryStore = void 0));
const a = require('mobx'),
  i = require('./../sdk/DriverIO/usb/USBDevice.js'),
  o = require('./baseStore.js'),
  n = require('./store.js');
let s = 0;
class c extends o.BaseStore {
  constructor() {
    (super(),
      (this.num = 0),
      (this.batteryArr = new Array()),
      i.batterySubject.subscribe((t) =>
        r(this, void 0, void 0, function* () {
          var e;
          if (
            0 !== t.battery ||
            null === (e = n.mobxStore.deviceStore.currentDev) ||
            void 0 === e ||
            !e.deviceType.is24
          )
            if (
              ((s = 0),
              this.batteryArr.length >= 10 && (this.batteryArr = this.batteryArr.filter((t, e) => 0 !== e)),
              this.batteryArr.push(t.battery),
              this.batteryArr.length <= 3)
            )
              this.battery = { battery: t.battery, state: t.state };
            else {
              const e = Math.max(...this.batteryArr),
                r = Math.min(...this.batteryArr);
              if (e === r) s = e;
              else {
                const t = new Array(),
                  a = this.batteryArr.findIndex((t) => t === e),
                  i = this.batteryArr.findIndex((t) => t === r);
                (this.batteryArr.map((e, r) => {
                  r !== a && r !== i && t.push(e);
                }),
                  t.map((t) => (s += t)),
                  (s = Math.floor(s / t.length)));
              }
              this.battery = { battery: s, state: t.state };
            }
        }),
      ));
  }
}
(t([a.observable, e('design:type', Object)], c.prototype, 'battery', void 0),
  t([a.observable, e('design:type', Array)], c.prototype, 'batteryArr', void 0),
  (exports.BatteryStore = c));
