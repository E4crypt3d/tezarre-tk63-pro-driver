/* Recovered from Tezarre Driver 1.1.31 - renderer module j97P */

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
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(n, r, o);
      return (t(n, r), n);
    },
  n =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, d) {
        function i(e) {
          try {
            u(n.next(e));
          } catch (t) {
            d(t);
          }
        }
        function a(e) {
          try {
            u(n.throw(e));
          } catch (t) {
            d(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(i, a);
        }
        u((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Support = void 0));
const o = r(require('react')),
  d = require('./../../../appConfig.js'),
  i = require('./../../../dj.js'),
  a = require('./../../../res.js'),
  u = require('./../../store.js'),
  l = require('./../../utils/Toast.js'),
  c = require('./../../utils/WithProps.js'),
  s = require('./../../utils/changeLanguage.js'),
  p = require('electron'),
  f = require('./../../../mobxStore/store.js'),
  g = require('mobx-react-lite'),
  v = require('mobx');
let h = !1;
const K_REPO = 'https://github.com/E4crypt3d/tezarre-tk63-pro-driver';
const GITHUB_PATH =
  'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z';
const y = (e) => {
  const { deviceStore: t } = f.useStore();
  return (
    o.useEffect(() => {
      v.autorun(() =>
        n(void 0, void 0, void 0, function* () {
          h || (yield e.checkVersion(), (h = !0));
        }),
      );
    }, []),
    g.useObserver(() =>
      o.default.createElement(
        o.Fragment,
        null,
        o.default.createElement(
          i.dj.View,
          { w: 400, h: 131, x: 0, y: 0 },
          o.default.createElement(i.dj.Text, {
            h: 25,
            y: 0,
            type: '个人中心标题',
            text: a.res.string.驱动版本,
          }),
          o.default.createElement(i.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
          o.default.createElement(i.dj.Text, { h: 20, y: 60, text: e.appVersion, type: '描述' }),
          o.default.createElement(i.dj.Button, {
            w: 130,
            h: 32,
            y: 99,
            text: a.res.string.检查更新,
            mode: 'BorderBackground',
            clickHandle: () =>
              n(void 0, void 0, void 0, function* () {
                (yield e.checkVersion(),
                  e.upgradeStore.appNeedUpgrade_
                    ? (e.upgradeStore.setUpgradeProgressApp(0), u.store.setState.appUpgrdeOpen(!0))
                    : l.toToast('info', a.res.text.驱动已经是最新版本无需更新()));
              }),
          }),
          e.upgradeStore.appNeedUpgrade_ &&
            o.default.createElement(i.dj.RedDot, { w: 5, h: 5, x: 135, y: 100 }),
        ),
        o.default.createElement(
          i.dj.View,
          { w: 400, h: 131, x: 491, y: 0 },
          o.default.createElement(i.dj.Text, {
            h: 25,
            y: 0,
            type: '个人中心标题',
            text: a.res.string.固件版本,
          }),
          o.default.createElement(i.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
          o.default.createElement(i.dj.Text, {
            h: 20,
            y: 60,
            text: `V${Number(e.devVersion).toString(16)}`,
            type: '描述',
          }),
          o.default.createElement(i.dj.Button, {
            w: 130,
            h: 32,
            y: 99,
            text: a.res.string.升级固件,
            mode: 'BorderBackground',
            clickHandle: () =>
              n(void 0, void 0, void 0, function* () {
                var r;
                (null === (r = t.currentDev) || void 0 === r ? void 0 : r.deviceType.is24)
                  ? l.toToast('info', a.res.text.固件升级功能只支持在有线模式下进行())
                  : (yield e.checkVersion(),
                    e.upgradeStore.devNeedUpgrade_
                      ? (e.upgradeStore.setUpgradeProgressDev(0),
                        u.store.setState.devUpgradeOpen(!0),
                        f.mobxStore.upgradeStore.startCountDwon())
                      : l.toToast('info', a.res.text.固件已经是最新版本无需更新()));
              }),
          }),
          e.upgradeStore.devNeedUpgrade_ &&
            o.default.createElement(i.dj.RedDot, { w: 5, h: 5, x: 135, y: 100 }),
        ),
        o.default.createElement(
          i.dj.View,
          { w: 400, h: 131, x: 0, y: 340 },
          o.default.createElement(i.dj.Text, {
            h: 25,
            y: 0,
            type: '个人中心标题',
            text: a.res.string.中英切换,
          }),
          o.default.createElement(i.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
          o.default.createElement(i.dj.Button, {
            w: 130,
            h: 32,
            y: 60,
            text: a.res.string.中英,
            mode: 'BorderBackground',
            clickHandle: () =>
              n(void 0, void 0, void 0, function* () {
                (s.changeLanguage(!d.blockCloud, !0), p.remote.getCurrentWindow().reload());
              }),
          }),
          o.default.createElement(
            i.dj.View,
            {
              w: 32,
              h: 32,
              x: 150,
              y: 60,
              clickHandle: () => p.remote.shell.openExternal(K_REPO),
            },
            o.default.createElement(
              'svg',
              {
                viewBox: '0 0 16 16',
                width: 32,
                height: 32,
                fill: '#959595',
                style: { cursor: 'pointer' },
              },
              o.default.createElement('path', { d: GITHUB_PATH }),
            ),
          ),
        ),
      ),
    )
  );
};
exports.Support = c.withProps(y, c.SupportData);
