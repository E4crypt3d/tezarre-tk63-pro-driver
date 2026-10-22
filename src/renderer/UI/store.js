/* Recovered from Tezarre Driver 1.1.31 - renderer module EmYO */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.store = void 0));
const r = require('./../unitys/createStore.js'),
  t = e(require('react')),
  n = require('./Components/user/Login.js');
exports.store = r.createStore({
  configurationOpen: !1,
  shareOpen: !1,
  userOpen: !1,
  devUpgradeOpen: !1,
  appUpgrdeOpen: !1,
  user_UI: t.default.createElement(n.Login, null),
  user_warningText: '',
  user_Name: '',
  macro_list: {},
});
