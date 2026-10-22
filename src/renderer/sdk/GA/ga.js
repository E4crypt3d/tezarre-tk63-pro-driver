/* Recovered from Tezarre Driver 1.1.31 - renderer module Oa77 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.GA = void 0));
const t = e(require('universal-analytics')),
  o = require('node-machine-id'),
  r = require('./../../appConfig.js');
let i, s;
var n;
(o.machineId().then((e) => {
  (console.log(e),
    (i = t.default('UA-175174086-1', e, { strictCidFormat: !1 })),
    console.log(process.platform + ' ' + require('os').release()));
  const o = process.platform + ' ' + require('os').release();
  (i.set('ua', o), (s = t.default('UA-175174086-2', e, { strictCidFormat: !1 })).set('ua', o));
}),
  (function (e) {
    ((e.trackPage = (e) => {
      (console.log('GGGAAAA', e),
        void 0 !== i && (i.pageview(e).send((e) => {}), void 0 !== s && s.pageview(e).send((e) => {})));
    }),
      (e.trackScreen = (e, t, o) => {
        void 0 !== i && (i.screenview(e, t, o).send(), void 0 !== s && s.screenview(e, t, o).send());
      }),
      (e.trackEvent = (e, t, o, r, n) => {
        void 0 !== i &&
          (i.event(e, t).send((e, t, o) => {}), void 0 !== s && s.event(e, t).send((e, t, o) => {}));
      }),
      (e.trackTime = (e, t, o, r) => {
        void 0 !== i &&
          (i.timing({ utc: e, utv: t, utt: o, utl: r }).send(),
          void 0 !== s && s.timing({ utc: e, utv: t, utt: o, utl: r }).send());
      }),
      (e.gaDevice = (t) => {
        const o = localStorage.getItem(t.name);
        (localStorage.getItem('gaversion') != r.kAppVersion &&
          (e.trackEvent('appVersion', r.kAppVersion), localStorage.setItem('gaversion', r.kAppVersion)),
          '3' !== o &&
            (e.trackEvent(t.company, t.name + '_' + t.version, JSON.stringify(t)),
            localStorage.setItem(t.name, '3')));
      }));
  })((n = exports.GA || (exports.GA = {}))));
