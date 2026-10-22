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
}
exports.BaseStore = o;
