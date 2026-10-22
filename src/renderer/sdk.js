/* Recovered from Tezarre Driver 1.1.31 - renderer module DJVV */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (n, c) {
      function o(e) {
        try {
          u(r.next(e));
        } catch (t) {
          c(t);
        }
      }
      function s(e) {
        try {
          u(r.throw(e));
        } catch (t) {
          c(t);
        }
      }
      function u(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(o, s);
      }
      u((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.sdk = void 0));
const t = require('./../sdk/DriverIO/usb/DetectSupportDevice.js'),
  i = require('./DB.js'),
  r = require('./WebService.js'),
  n = require('./WebService.js'),
  c = require('./WebService.js');
exports.sdk = {
  init: () =>
    e(void 0, void 0, void 0, function* () {
      (yield i.connectDB(), t.detectSubject.subscribe((e) => console.log(e)), yield t.initUSBDetect());
    }),
  ioFunc: Object.assign(Object.assign(Object.assign({}, n.DBService), r.webService), {
    getCurrentUser: c.getCurrentUser,
  }),
};
