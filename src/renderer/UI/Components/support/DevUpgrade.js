/* Recovered from Tezarre Driver 1.1.31 - renderer module uTLP */

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
      if (null != r) for (var a in r) 'default' !== a && Object.hasOwnProperty.call(r, a) && e(o, r, a);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.DevUpgrade = void 0));
const o = require('mobx-react-lite'),
  a = r(require('react')),
  u = require('./../../../dj.js'),
  s = require('./../../../mobxStore/store.js'),
  c = require('./../../../res.js'),
  n = require('./../../../sdk/GA/ga.js'),
  i = require('./../../utils/Progress.js'),
  d = require('./../../utils/Toast.js'),
  l = require('./../../utils/WithProps.js'),
  m = require('./../keyPath.js'),
  g = (e) => {
    const [t, r] = a.useState(!1),
      l = m.getKeyPath();
    return (
      console.error(s.mobxStore.deviceStore.currentDev),
      a.useEffect(() => {
        1 === e.progress &&
          (r(!1), d.toToast('info', c.res.text.升级成功()), n.GA.trackPage('DevUpgradeUI'), e.close());
      }, [e.progress]),
      a.useEffect(() => {
        (console.log('errr msg', e.errMsg), '' !== e.errMsg && r(!1));
      }, [e.errMsg]),
      o.useObserver(() =>
        a.default.createElement(
          a.Fragment,
          null,
          a.default.createElement(u.dj.View, { form: '背景页' }, ''),
          a.default.createElement(
            u.dj.View,
            { drag: !0 },
            'keyboard' === e.deviceType
              ? a.default.createElement(u.dj.Img, {
                  w: s.mobxStore.deviceStore.currentDev ? 871 : 0,
                  h: 288,
                  x: 175,
                  y: 193,
                  imgBg: s.mobxStore.deviceStore.currentDev ? l : '',
                })
              : a.default.createElement(u.dj.Img, {
                  w: s.mobxStore.deviceStore.currentDev ? 186 : 0,
                  h: 366,
                  x: 501,
                  y: 139,
                  imgBg: s.mobxStore.deviceStore.currentDev ? c.res.img[e.deviceName] : '',
                }),
            !s.mobxStore.deviceStore.currentDev &&
              a.default.createElement(u.dj.Text, {
                h: 30,
                y: 300,
                text: c.res.string.设备被拔出,
                type: '升级警告',
              }),
            a.default.createElement(u.dj.Text, {
              h: 28,
              y: 545,
              text: c.res.text.固件升级提示(),
              type: '升级警告',
            }),
            a.default.createElement(u.dj.Button, {
              w: 160,
              h: 34,
              x: 530,
              y: 580,
              text:
                c.res.text.更新() +
                (s.mobxStore.upgradeStore.countDwon <= 0 ? '' : `(${s.mobxStore.upgradeStore.countDwon})`),
              mode: 'Sparker',
              clickHandle: () => {
                s.mobxStore.upgradeStore.countDwon <= 0 && (e.upgrade(), r('' === e.errMsg));
              },
            }),
            a.default.createElement(u.dj.Text, {
              h: 28,
              y: 510,
              text: c.res.text.升级提示(),
              type: '升级警告',
            }),
            a.default.createElement(u.dj.Text, {
              h: 15,
              text: `${c.res.text.当前固件版本()}：${e.version} `,
              x: 1016,
              y: 645,
              type: '单选框',
            }),
            a.default.createElement(u.dj.Button, {
              w: 13,
              h: 13,
              x: 1146,
              y: 23,
              img: { size: { w: 13, h: 13 }, src: c.res.img.close },
              clickHandle: e.close,
            }),
          ),
          t && a.default.createElement(i.Progress, { rate: e.progress }),
        ),
      )
    );
  };
exports.DevUpgrade = l.withProps(g, l.DevUpgradeData);
