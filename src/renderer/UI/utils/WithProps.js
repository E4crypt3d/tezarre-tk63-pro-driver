/* Recovered from Tezarre Driver 1.1.31 - renderer module Tko2 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.withProps =
    exports.SupportData =
    exports.DevUpgradeData =
    exports.AppUpgradeData =
    exports.homeData =
    exports.logoLightData =
    exports.wheelLightData =
    exports.wheelLightLEDData =
    exports.wheelSleepData =
      void 0));
const t = e(require('react')),
  r = require('./../../res.js'),
  i = require('./../../mobxStore/store.js'),
  o = require('mobx-react-lite'),
  u = require('./../store.js'),
  n = require('./../../sdk/DriverIO/DeviceAPI/DeviceInterface.js');
((exports.wheelSleepData = () => {
  const { deviceStore: e } = i.useStore(),
    { otherStore: t } = i.useStore();
  return o.useObserver(() => {
    var r;
    return {
      sleepTime: (null === (r = t.currentOther) || void 0 === r ? void 0 : r.sleep)
        ? {
            time_bt: t.currentOther.sleep.time_bt,
            time_24: t.currentOther.sleep.time_24,
            deepTime_bt: t.currentOther.sleep.deepTime_bt,
            deepTime_24: t.currentOther.sleep.deepTime_24,
          }
        : { time_bt: 0, time_24: 0, deepTime_bt: 0, deepTime_24: 0 },
      setSleepTime: (t) => e.setSleepTime(t),
    };
  });
}),
  (exports.wheelLightLEDData = () => {
    const { deviceStore: e } = i.useStore();
    return o.useObserver(() => {
      const t = e.currentDev && e.currentDev.deviceType.name ? e.currentDev.deviceType.name : 'default',
        i = t in r.res.键鼠坐标;
      return {
        light: null != e.currentConfig.logoLight ? e.currentConfig.logoLight : { type: 'LightOff' },
        lightLayout:
          e.currentDev && e.currentDev.deviceType.logoLayout
            ? e.currentDev.deviceType.logoLayout.light
            : {
                isRgb: !1,
                types: [
                  {
                    type: 'LightAlwaysOn',
                    maxSpeed: 1,
                    minSpeed: 2,
                    maxValue: 3,
                    minValue: 4,
                    options: [''],
                    rgb: !1,
                  },
                ],
              },
        setLight: e.setSLEDParam,
        deviceName: t,
        deviceLayout: r.res.键鼠坐标[i ? t : 'default'],
        lightPic: [],
        setLightPic: (e) => {},
      };
    });
  }),
  (exports.wheelLightData = () => {
    const { deviceStore: e } = i.useStore();
    return o.useObserver(() => {
      const t = e.currentDev && e.currentDev.deviceType.name ? e.currentDev.deviceType.name : 'default',
        i = t in r.res.键鼠坐标;
      return {
        light: null != e.currentConfig.light ? e.currentConfig.light : { type: 'LightOff' },
        lightLayout:
          e.currentDev && e.currentDev.deviceType.layout
            ? e.currentDev.deviceType.layout.light
            : {
                isRgb: !1,
                types: [
                  {
                    type: 'LightAlwaysOn',
                    maxSpeed: 1,
                    minSpeed: 2,
                    maxValue: 3,
                    minValue: 4,
                    options: [''],
                    rgb: !1,
                  },
                ],
              },
        setLight: e.setLightSetting,
        deviceName: t,
        deviceLayout: r.res.键鼠坐标[i ? t : 'default'],
        lightPic: e.currentConfig.lightPic ? e.currentConfig.lightPic : [],
        setLightPic: (t) => {
          e.setLightPic(t);
        },
      };
    });
  }),
  (exports.logoLightData = () => {
    const { deviceStore: e } = i.useStore(),
      t = e.currentDev && e.currentDev.deviceType.name ? e.currentDev.deviceType.name : 'default',
      u = t in r.res.键鼠坐标;
    return o.useObserver(() => {
      var i, o;
      return {
        light: null != e.currentConfig.logoLight ? e.currentConfig.logoLight : { type: 'LightOff' },
        lightLayout:
          void 0 === (null === (i = e.currentDev) || void 0 === i ? void 0 : i.deviceType.layout)
            ? n.defaultLayout.light
            : null === (o = e.currentDev) || void 0 === o
              ? void 0
              : o.deviceType.layout.light,
        setLight: e.setLogoLightSetting,
        deviceName: t,
        deviceLayout: r.res.键鼠坐标[u ? t : 'default'],
        lightPic: e.currentConfig.lightPic ? e.currentConfig.lightPic : [],
        setLightPic: (t) => {
          e.setLightPic(t);
        },
      };
    });
  }),
  (exports.homeData = () => {
    const { deviceStore: e } = i.useStore();
    return o.useObserver(() => {
      const t =
          e.currentDev && e.currentDev.deviceType.layout && e.currentDev.deviceType.layout.dpi
            ? e.currentDev.deviceType.layout.dpi
            : { count: 0, min: 0, max: 0, delt: 0 },
        i = e.currentDev && e.currentDev.deviceType.name ? e.currentDev.deviceType.name : 'default',
        o = i in r.res.键鼠坐标;
      return {
        dpi: e.currentConfig.dpi ? e.currentConfig.dpi : [500, 500, 500, 500, 500, 500, 500],
        dpiLayout: t,
        setDpi: (t) => e.setDpi(t),
        deviceLayout: r.res.键鼠坐标[o ? i : 'default'],
        deviceName: i,
        keyValue: e.currentConfig.value ? e.currentConfig.value : [],
        reportRate: e.currentConfig.reportRate ? e.currentConfig.reportRate : 125,
        setReportRate: (t) => e.setReportRate(t),
      };
    });
  }),
  (exports.AppUpgradeData = () => {
    const { upgradeStore: e, toastStore: t } = i.useStore();
    return o.useObserver(() => ({
      progress: e.upgradeProgressApp,
      errType: t.errType,
      errMsg: t.errMsg,
      upgrade: () => e.upgradeApp(),
      close: () => u.store.setState.appUpgrdeOpen(!1),
    }));
  }),
  (exports.DevUpgradeData = () => {
    const { deviceStore: e, upgradeStore: t, toastStore: r } = i.useStore();
    return o.useObserver(() => {
      var i;
      return {
        deviceType: null === (i = e.currentDev) || void 0 === i ? void 0 : i.type,
        deviceName: e.currentDev && e.currentDev.deviceType.name ? e.currentDev.deviceType.name : 'default',
        version: e.currentDevVersion,
        progress: t.upgradeProgressDev,
        errType: r.errType,
        errMsg: r.errMsg,
        upgrade: () => t.upgradeDev(),
        close: () => {
          (u.store.setState.devUpgradeOpen(!1), t.stopCountDwon());
        },
      };
    });
  }),
  (exports.SupportData = () => {
    const { deviceStore: e, upgradeStore: t } = i.useStore();
    return o.useObserver(() => ({
      devVersion: e.currentDevVersion,
      appVersion: t.appVersion,
      checkVersion: t.checkVersion,
      devNeedUpgrade: t.devNeedUpgrade,
      upgradeStore: t,
    }));
  }),
  (exports.withProps = (e, r) => () => t.default.createElement(e, Object.assign({}, r()))));
