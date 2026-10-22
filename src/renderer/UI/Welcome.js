/* Recovered from Tezarre Driver 1.1.31 - renderer module jNWc */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
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
      var o = {};
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(o, r, n);
      return (t(o, r), o);
    },
  o =
    (this && this.__awaiter) ||
    function (e, t, r, o) {
      return new (r || (r = Promise))(function (n, i) {
        function a(e) {
          try {
            s(o.next(e));
          } catch (t) {
            i(t);
          }
        }
        function c(e) {
          try {
            s(o.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function s(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(a, c);
        }
        s((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DevSleepWelcome = exports.Welcome = void 0));
const n = r(require('react')),
  i = require('./../dj.js'),
  a = require('./../res.js'),
  c = require('electron'),
  s = require('./utils/WithProps.js'),
  d = require('./store.js'),
  u = require('./../appConfig.js'),
  l = require('./../screenConfig.js'),
  p = require('./../sdk/GA/ga.js'),
  x = require('mobx-react-lite'),
  m = require('./../dj/View.js'),
  g = require('./../mobxStore/store.js'),
  h = (e) => (
    n.useEffect(() => {
      p.GA.trackPage('welcome');
    }, []),
    n.createElement(
      i.dj.View,
      { drag: !0 },
      n.createElement(i.dj.Button, {
        w: 13,
        h: 13,
        x: 1146,
        y: 23,
        img: { size: { w: 13, h: 13 }, src: a.res.img.close },
        clickHandle: () => c.remote.getCurrentWindow().hide(),
      }),
      n.createElement(i.dj.Img, { w: 100, h: 88, x: 550, y: 269, imgBg: u.urlStr(u.default_logo_p) }),
      n.createElement(i.dj.Text, {
        w: l.baseW,
        h: 40,
        x: 0,
        y: 382,
        text: a.res.text.欢迎使用() + u.kCompanyDisplayName + a.res.text.驱动(),
        type: '启动页主标题',
      }),
      n.createElement(i.dj.Text, {
        w: 386,
        x: 407,
        h: 20,
        y: 519,
        text: a.res.string.搜寻设备中,
        type: '启动页搜索',
      }),
      n.createElement(i.dj.Text, { w: 386, h: 13, x: 407, y: 533, text: '...', type: '启动页搜索' }),
      n.createElement(i.dj.Text, {
        w: 386,
        h: 20,
        x: 780,
        y: 688,
        text: 'v:' + u.kAppVersion,
        type: '启动页搜索',
      }),
      n.createElement(i.dj.Button, {
        w: 130,
        h: 32,
        x: 1030,
        y: 680,
        text: a.res.string.软件更新,
        mode: 'BorderBackground',
        clickHandle: () =>
          o(void 0, void 0, void 0, function* () {
            (yield e.checkVersion(),
              e.upgradeStore.appNeedUpgrade_ &&
                (e.upgradeStore.setUpgradeProgressApp(0), d.store.setState.appUpgrdeOpen(!0)));
          }),
      }),
    )
  );
exports.Welcome = s.withProps(h, s.SupportData);
const y = (e) => {
  n.useEffect(() => {
    p.GA.trackPage('welcome');
  }, []);
  const { toastStore: t } = g.useStore(),
    { deviceStore: r } = g.useStore();
  return x.useObserver(() =>
    t.devSleepTipsShow && r.currentDev && 'keyboard' === r.currentDev.type && r.currentDev.deviceType.is24
      ? n.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              zIndex: 99,
              width: '100%',
              height: 730,
              backgroundColor: '#000000',
            },
          },
          n.createElement(
            m.View,
            { drag: !0 },
            n.createElement(i.dj.Button, {
              w: 13,
              h: 13,
              x: 1146,
              y: 23,
              img: { size: { w: 13, h: 13 }, src: a.res.img.close },
              clickHandle: () => c.remote.getCurrentWindow().hide(),
            }),
            n.createElement(i.dj.Img, { w: 100, h: 88, x: 550, y: 269, imgBg: u.urlStr(u.default_logo_p) }),
            n.createElement(i.dj.Text, {
              w: l.baseW,
              h: 40,
              x: 0,
              y: 382,
              text: a.res.text.欢迎使用() + u.kCompanyDisplayName + a.res.text.驱动(),
              type: '启动页主标题',
            }),
            n.createElement(i.dj.Text, {
              w: 386,
              x: 407,
              h: 20,
              y: 519,
              text: a.res.string.搜寻设备中,
              type: '启动页搜索',
            }),
            n.createElement(i.dj.Text, { w: 386, h: 13, x: 407, y: 533, text: '...', type: '启动页搜索' }),
            n.createElement(i.dj.Text, {
              w: 386,
              h: 20,
              x: 780,
              y: 688,
              text: 'v:' + u.kAppVersion,
              type: '启动页搜索',
            }),
            n.createElement(i.dj.Button, {
              w: 130,
              h: 32,
              x: 1030,
              y: 680,
              text: a.res.string.软件更新,
              mode: 'BorderBackground',
              clickHandle: () =>
                o(void 0, void 0, void 0, function* () {
                  (yield e.checkVersion(),
                    e.upgradeStore.appNeedUpgrade_ &&
                      (e.upgradeStore.setUpgradeProgressApp(0), d.store.setState.appUpgrdeOpen(!0)));
                }),
            }),
          ),
        )
      : null,
  );
};
exports.DevSleepWelcome = s.withProps(y, s.SupportData);
