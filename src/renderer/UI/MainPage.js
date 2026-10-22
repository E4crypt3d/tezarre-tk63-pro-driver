/* Recovered from Tezarre Driver 1.1.31 - renderer module yS20 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, n) {
          (void 0 === n && (n = r),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, n) {
          (void 0 === n && (n = r), (e[n] = t[r]));
        }),
  t =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  r =
    (this && this.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var n = {};
      if (null != r) for (var u in r) 'default' !== u && Object.hasOwnProperty.call(r, u) && e(n, r, u);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MainPage = void 0));
const n = r(require('react')),
  u = require('./Bottom.js'),
  i = require('./Components/configuration/Configuration.js'),
  a = require('./utils/Share.js'),
  o = require('./Top.js'),
  l = require('./MainLayout.js'),
  s = require('./Components/user/User.js'),
  c = require('./store.js'),
  f = require('./utils/Loading.js'),
  d = require('./../res.js'),
  p = require('./../mobxStore/store.js');
exports.MainPage = () => {
  const {
      configurationOpen: e,
      shareOpen: t,
      userOpen: r,
    } = c.store.useState((e) => e.configurationOpen.shareOpen.userOpen.appUpgrdeOpen),
    { isKeyStore: m } = p.useStore();
  m.setLightKey(!e);
  const [g, O] = n.useState(void 0);
  return n.default.createElement(
    'div',
    null,
    n.default.createElement(
      'div',
      null,
      n.default.createElement(o.Top, null),
      n.default.createElement(l.MainLayout, null),
      n.default.createElement(u.Bottom, null),
    ),
    e &&
      n.default.createElement(i.Configuration, { title: d.res.text.配置设置(), setShareConfig: (e) => O(e) }),
    t &&
      n.default.createElement(a.Share, {
        type: 'Config',
        config: g,
        close: () => {
          (c.store.setState.shareOpen(!1), O(void 0));
        },
      }),
    n.default.createElement(f.Loading, null),
    n.default.createElement(f.DevSleepLoading, null),
    r && n.default.createElement(s.User, null),
  );
};
