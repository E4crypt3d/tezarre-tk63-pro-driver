/* Recovered from Tezarre Driver 1.1.31 - renderer module rcT1 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Top = void 0));
const t = e(require('react')),
  r = require('electron'),
  o = require('./../res.js'),
  l = require('./../dj.js'),
  a = require('./store.js'),
  i = require('./../mobxStore/store.js'),
  d = require('mobx-react-lite'),
  s = require('./../appConfig.js');
exports.Top = () => {
  const { userStore: e, isKeyStore: u, deviceStore: n, batteryStore: c } = i.useStore();
  return (
    u.setLoginTipBoxKey(a.store.state.userOpen),
    d.useObserver(() => {
      var i, d, y, b, m;
      return t.default.createElement(
        l.dj.View,
        { w: 1200, h: 61, drag: !0 },
        t.default.createElement(l.dj.Img, { w: 35, h: 29, x: 42, y: 20, imgBg: s.urlStr(s.topnav_logo_p) }),
        (null === (i = n.currentDev) || void 0 === i ? void 0 : i.deviceType.is24) &&
          void 0 !== c.battery &&
          t.default.createElement(
            l.dj.FlexView,
            { w: 200, h: 20, x: 881, y: 24, justifyContent: 'flex-start' },
            t.default.createElement(l.dj.Text, {
              relative: !0,
              w: 35,
              h: 18,
              type: '键盘提示',
              text: c.battery.battery + '%',
            }),
            t.default.createElement(
              'div',
              { style: { position: 'absolute', left: 34, top: 2 } },
              t.default.createElement('img', {
                style: { display: 'block', width: 42, height: 'auto' },
                src: o.res.img.battery.battery_0,
              }),
              t.default.createElement('div', {
                style: {
                  position: 'absolute',
                  left: 11,
                  top: 3,
                  width: Math.ceil((c.battery.battery / 100) * 18),
                  height: 8,
                  backgroundColor:
                    c.battery.battery > 20
                      ? `rgba(25,249,226,${1 === (null === (d = n.battery) || void 0 === d ? void 0 : d.state) ? 0.5 : 1})`
                      : `rgba(255,204,0,${1 === (null === (y = n.battery) || void 0 === y ? void 0 : y.state) ? 0.5 : 1})`,
                },
              }),
              1 === (null === (b = c.battery) || void 0 === b ? void 0 : b.state) &&
                t.default.createElement('img', {
                  style: {
                    display: 'block',
                    position: 'absolute',
                    top: -1,
                    left: 12,
                    width: 16,
                    transform:
                      1 === (null === (m = c.battery) || void 0 === m ? void 0 : m.state)
                        ? 'rotate(90deg)'
                        : 'rotate(0deg)',
                  },
                  src: o.res.img.top_charge,
                }),
            ),
          ),
        void 0 === e.user
          ? !s.blockCloud &&
              t.default.createElement(l.dj.Button, {
                x: 968,
                y: 19,
                w: 70,
                h: 26,
                isHightLight: !1,
                mode: 'Lighter',
                text: '登录/注册',
                clickHandle: () => {
                  (u.setTextKey(!1), a.store.setState.userOpen(!0));
                },
              })
          : t.default.createElement(l.dj.TextEll, {
              w: 100,
              h: 20,
              x: 968,
              y: 21,
              type: 'SubTitle',
              text: s.blockCloud ? '' : e.user.name,
            }),
        t.default.createElement(l.dj.Button, {
          w: 13,
          h: 13,
          x: 1146,
          y: 23,
          img: { size: { w: 13, h: 13 }, src: o.res.img.close },
          clickHandle: () => r.remote.getCurrentWindow().hide(),
        }),
        t.default.createElement(l.dj.Line, { y: 61, h: 1, lineColor: 'Normal' }),
      );
    })
  );
};
