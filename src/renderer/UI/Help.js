/* Recovered from Tezarre Driver 1.1.31 - renderer module Wd6J */

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
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(n, r, i);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Help = void 0));
const n = r(require('react')),
  i = require('./../mobxStore/store.js'),
  o = require('mobx-react-lite'),
  a = require('./store.js'),
  l = require('./../res.js'),
  s = require('./../DB.js'),
  u = require('./../sdk/GA/ga.js');
exports.Help = () => {
  const { deviceStore: e, helpStore: t, upgradeStore: r } = i.useStore();
  return (
    console.log('HHHHHEEEEEELLLLLPPPPPPP'),
    n.useEffect(() => {
      (t.getCurrentComanyDevList(), u.GA.trackPage('help'));
    }, []),
    o.useObserver(() =>
      n.createElement(
        'div',
        { style: { color: 'black', background: 'white', height: 1e3, WebkitAppRegion: 'drag' } },
        n.createElement('div', { style: { height: 20 } }),
        n.createElement(
          'p',
          { style: { fontSize: 24, color: '#ff0000', fontWeight: 'bold' } },
          l.res.string.您的设备在升级过程中出现了问题请选择您的设备型号重新进行升级升级过程中不要拔出USB,
        ),
        n.createElement('div', { style: { height: 20 } }),
        n.createElement(
          'div',
          null,
          t.currentComanyDevList.map((t, o) => {
            var l, u;
            return n.createElement(
              'button',
              {
                key: o,
                style: { height: 'auto', width: 'auto', padding: 10 },
                onClick: () => {
                  i.mobxStore.upgradeStore.startCountDwon();
                  const n = new s.DeviceType();
                  (Object.assign(n, e.currentDev.deviceType),
                    (n.id = t.id),
                    (n.name = t.name),
                    (e.currentDev.deviceType = n),
                    (e.currentDevVersion = '0'),
                    r.setUpgradeProgressDev(0),
                    a.store.setState.devUpgradeOpen(!0));
                },
              },
              n.createElement(
                'p',
                null,
                -1 != (null === (l = t.name) || void 0 === l ? void 0 : l.indexOf('dm'))
                  ? t.displayName + '(单模)'
                  : -1 != (null === (u = t.name) || void 0 === u ? void 0 : u.indexOf('2m'))
                    ? t.displayName + '(双模)'
                    : t.displayName + '(三模)',
              ),
              n.createElement('p', null, t.name),
            );
          }),
        ),
        n.createElement('div', { style: { height: 20 } }),
        n.createElement(
          'p',
          { style: { fontSize: 24, color: '#ff0000', fontWeight: 'bold' } },
          l.res.string.后果自行承担,
        ),
      ),
    )
  );
};
