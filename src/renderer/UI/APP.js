/* Recovered from Tezarre Driver 1.1.31 - renderer module Npww */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, r, t, n) {
          (void 0 === n && (n = t),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
        }
      : function (e, r, t, n) {
          (void 0 === n && (n = t), (e[n] = r[t]));
        }),
  r =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, r) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: r });
        }
      : function (e, r) {
          e.default = r;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (null != t) for (var o in t) 'default' !== o && Object.hasOwnProperty.call(t, o) && e(n, t, o);
      return (r(n, t), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.APP = void 0));
const n = t(require('react')),
  o = require('./MainPage.js'),
  a = require('./Welcome.js'),
  i = require('./../mobxStore/store.js'),
  l = require('mobx-react-lite'),
  u = require('react-toastify'),
  s = require('./store.js'),
  p = require('./Components/support/DevUpgrade.js'),
  c = require('./utils/MobxErrorWarning.js'),
  d = require('./Components/support/AppUpgrade.js'),
  v = require('./Help.js');
exports.APP = () => {
  const { deviceStore: e } = i.useStore(),
    { toastStore: r } = i.useStore(),
    { devUpgradeOpen: t, appUpgrdeOpen: m } = s.store.useState((e) => e.devUpgradeOpen.appUpgrdeOpen);
  return l.useObserver(() => {
    var r;
    return n.createElement(
      'div',
      null,
      n.createElement(u.ToastContainer, {
        position: 'top-center',
        autoClose: 5e3,
        hideProgressBar: !1,
        newestOnTop: !1,
        closeOnClick: !0,
        rtl: !1,
        pauseOnFocusLoss: !0,
        draggable: !0,
        pauseOnHover: !0,
      }),
      n.createElement(
        'div',
        null,
        'help' === (null === (r = e.currentDev) || void 0 === r ? void 0 : r.deviceType.displayName)
          ? n.createElement(v.Help, null)
          : e.deviceArr.length < 1
            ? n.createElement(a.Welcome, null)
            : n.createElement(o.MainPage, null),
        t && n.createElement(p.DevUpgrade, null),
        m && n.createElement(d.AppUpgrade, null),
        n.createElement(c.MobxErrorWarning, null),
      ),
    );
  });
};
