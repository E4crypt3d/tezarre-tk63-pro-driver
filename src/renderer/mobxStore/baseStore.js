/* Recovered from Tezarre Driver 1.1.31 - renderer module Oez1 */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.BaseStore = void 0));
const e = require('mobx'),
  t = require('./store.js');
e.configure({ enforceActions: 'never' });
class o {
  constructor() {
    ((this.commonHandleSuccess = (e) => {}), (this.commonHandleErr = (e) => {}));
  }
  doAsync(e, o, ...r) {
    return new Promise((s) => {
      const c = new Date().getTime().toString();
      (t.mobxStore.toastStore.setState('bussy', c),
        e(...r)
          .then((e) => {
            (t.mobxStore.toastStore.setState('idle', c), this.commonHandleSuccess(e), o(e), s(e));
          })
          .catch((o) => {
            (t.mobxStore.toastStore.setState('idle', c),
              console.log('doAsync catch error:', e, 'Error:', o),
              this.commonHandleErr(o),
              s(o));
          }));
    });
  }
  // Same as doAsync, but without raising the global loading overlay. Used by
  // the lighting setters: they are short, frequent and the page already shows
  // the picked value, so blocking the whole window for their duration only
  // makes the app look like it is loading all the time.
  // Unlike doAsync, the result callback is always invoked exactly once. A
  // failure calls it with false, so callers can roll back the optimistic state
  // they applied before the write started.
  doAsyncQuiet(e, o, ...r) {
    return new Promise((s) => {
      const fail = (t) => {
        (console.log('doAsyncQuiet catch error:', e, 'Error:', t), this.commonHandleErr(t), o(!1), s(!1));
      };
      let c;
      try {
        c = e(...r);
      } catch (t) {
        return fail(t);
      }
      Promise.resolve(c)
        .then((e) => {
          (this.commonHandleSuccess(e), o(e), s(e));
        })
        .catch(fail);
    });
  }
}
exports.BaseStore = o;
