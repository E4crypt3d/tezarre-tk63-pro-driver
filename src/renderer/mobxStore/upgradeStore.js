/* Recovered from Tezarre Driver 1.1.31 - renderer module WxU0 */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, r, o) {
      var i,
        s = arguments.length,
        n = s < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        n = Reflect.decorate(e, t, r, o);
      else
        for (var d = e.length - 1; d >= 0; d--)
          (i = e[d]) && (n = (s < 3 ? i(n) : s > 3 ? i(t, r, n) : i(t, r)) || n);
      return (s > 3 && n && Object.defineProperty(t, r, n), n);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  r =
    (this && this.__awaiter) ||
    function (e, t, r, o) {
      return new (r || (r = Promise))(function (i, s) {
        function n(e) {
          try {
            p(o.next(e));
          } catch (t) {
            s(t);
          }
        }
        function d(e) {
          try {
            p(o.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function p(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(n, d);
        }
        p((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.UpgradeStore = void 0));
const o = require('electron'),
  i = require('mobx'),
  s = require('./../appConfig.js'),
  n = require('./../res.js'),
  d = require('./../DB.js'),
  p = require('./../WebService.js'),
  a = require('./baseStore.js'),
  c = require('./store.js');
class u extends a.BaseStore {
  constructor() {
    (super(),
      (this.appVersion = s.kAppVersion),
      (this.appNeedUpgrade = !1),
      (this.devNeedUpgrade = !1),
      (this.upgradeProgressDev = 1),
      (this.upgradeProgressApp = 1),
      (this.countDwon = 3),
      (this.setAppNeedUpgrade = (e) => {
        this.appNeedUpgrade = e;
      }),
      (this.setDevNeedUpgrade = (e) => {
        this.devNeedUpgrade = e;
      }),
      (this.appVersionV1BiggerThanV2 = (e, t) => {
        const r = e.split('.'),
          o = t.split('.');
        if (r.length !== o.length || r.length < 3) return (console.log('非法版本号'), !1);
        console.error(e, t);
        const i = 1e5 * Number(r[0]) + 1e3 * Number(r[1]) + Number(r[2]),
          s = 1e5 * Number(o[0]) + 1e3 * Number(o[1]) + Number(o[2]);
        return (console.log('v1:', i, '  v2:', s), i > s);
      }),
      (this.commonHandleErr = (e) => {
        void 0 !== e.request
          ? c.mobxStore.toastStore.setErr(n.res.text.网络连接失败())
          : c.mobxStore.toastStore.setErr(e);
      }),
      (this.commonHandleSuccess = (e) => {
        if (void 0 === e) return;
        const t = e;
        0 !== t.errCode &&
          void 0 !== t.errMsg &&
          c.mobxStore.toastStore.setErr(t.errCode < 0 ? n.res.text.网络连接失败() : t.errMsg.toString());
      }));
  }
  startCountDwon() {
    ((this.countDwon = 3),
      this.stopCountDwon(),
      (this.time = setInterval(() => {
        (this.countDwon <= 0 && this.stopCountDwon(), this.countDwon--);
      }, 1e3)));
  }
  stopCountDwon() {
    this.time && clearInterval(this.time);
  }
  setUpgradeProgressDev(e) {
    this.upgradeProgressDev = e;
  }
  setUpgradeProgressApp(e) {
    this.upgradeProgressApp = e;
  }
  get appNeedUpgrade_() {
    return this.appNeedUpgrade;
  }
  get devNeedUpgrade_() {
    return this.devNeedUpgrade;
  }
  upgradeApp() {
    return r(this, void 0, void 0, function* () {
      if ((yield this.checkVersion(), !1 === this.appNeedUpgrade))
        return void c.mobxStore.toastStore.setInfo(n.res.text.驱动已经是最新版本无需更新());
      this.setUpgradeProgressApp(0);
      this.doAsync(
        p.downloadAppUpgradeFile,
        () => {
          (c.mobxStore.toastStore.setInfo(n.res.text.驱动升级成功将自动重启()),
            setTimeout(() => {
              (o.remote.app.relaunch(), o.remote.app.quit());
            }, 4e3));
        },
        (e) => {
          this.setUpgradeProgressApp(e);
        },
      );
    });
  }
  upgradeDev() {
    var e, t, o, i;
    return r(this, void 0, void 0, function* () {
      if ((yield this.checkVersion(), !1 === this.devNeedUpgrade))
        return void c.mobxStore.toastStore.setInfo(n.res.text.固件已经是最新版本无需更新());
      this.setUpgradeProgressDev(0);
      const r = (e) => {
        this.setUpgradeProgressDev(e);
      };
      void 0 !==
        (null === (t = null === (e = c.mobxStore.deviceStore) || void 0 === e ? void 0 : e.currentDev) ||
        void 0 === t
          ? void 0
          : t.deviceType.id) &&
        this.doAsync(
          p.downloadDevUpgradeFile,
          (e) => {
            void 0 !== e &&
              void 0 !== c.mobxStore.deviceStore.currentDev &&
              this.doAsync(
                c.mobxStore.deviceStore.currentDev.upgrade,
                (e) => {
                  e && c.mobxStore.deviceStore.getDevVersion();
                },
                e,
                r,
              );
          },
          null === (i = null === (o = c.mobxStore.deviceStore) || void 0 === o ? void 0 : o.currentDev) ||
            void 0 === i
            ? void 0
            : i.deviceType.id,
        );
    });
  }
  checkVersion() {
    return new Promise((e) => {
      this.doAsync(p.webService.checkVersion, (t) => {
        if (0 !== t.errCode) return;
        (console.log('checkVersion:', t.data.appVersion, this.appVersion),
          this.appVersionV1BiggerThanV2(t.data.baseAppVersion, this.appVersion)
            ? (c.mobxStore.toastStore.setInfo(n.res.text.当前驱动版本过低请重新下载安装()),
              this.setAppNeedUpgrade(!1))
            : this.setAppNeedUpgrade(this.appVersionV1BiggerThanV2(t.data.appVersion, this.appVersion)));
        const r = t.data.devVersion.find((e) => {
          var t, r;
          return (
            e.devId ===
            (null === (r = null === (t = c.mobxStore.deviceStore) || void 0 === t ? void 0 : t.currentDev) ||
            void 0 === r
              ? void 0
              : r.deviceType.id)
          );
        });
        return void 0 === r
          ? (console.log('该设备不在服务器中'), void e())
          : (console.log(
              'VERSION:',
              c.mobxStore.deviceStore.currentDevVersion,
              r,
              Number(c.mobxStore.deviceStore.currentDevVersion) < r.version,
            ),
            this.setDevNeedUpgrade(Number(c.mobxStore.deviceStore.currentDevVersion) < r.version),
            this.appVersionV1BiggerThanV2(r.lowestAppVersion, s.kAppVersion)
              ? (this.setDevNeedUpgrade(!1),
                c.mobxStore.toastStore.setErr(n.res.text.当前驱动版本过低已无法适配最新固件请更新驱动()),
                void e())
              : void (void 0 !== c.mobxStore.deviceStore.currentDev
                  ? ((c.mobxStore.deviceStore.currentDev.deviceType.severVersion = r.version.toString()),
                    d.DeviceType.find().then((r) => {
                      (r.forEach((e) => {
                        const r = t.data.devVersion.find((e) => {
                          var t;
                          return (
                            e.devId ===
                            (null === (t = c.mobxStore.deviceStore.currentDev) || void 0 === t
                              ? void 0
                              : t.deviceType.id)
                          );
                        });
                        void 0 !== r && (e.severVersion = r.version.toString());
                      }),
                        this.devNeedUpgrade,
                        e());
                    }))
                  : e()));
      });
    });
  }
}
(e([i.observable, t('design:type', Object)], u.prototype, 'appVersion', void 0),
  e([i.observable, t('design:type', Object)], u.prototype, 'appNeedUpgrade', void 0),
  e([i.observable, t('design:type', Object)], u.prototype, 'devNeedUpgrade', void 0),
  e([i.observable, t('design:type', Object)], u.prototype, 'upgradeProgressDev', void 0),
  e([i.observable, t('design:type', Object)], u.prototype, 'upgradeProgressApp', void 0),
  e([i.observable, t('design:type', Object)], u.prototype, 'countDwon', void 0),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    u.prototype,
    'startCountDwon',
    null,
  ),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    u.prototype,
    'stopCountDwon',
    null,
  ),
  e(
    [
      i.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Number]),
      t('design:returntype', void 0),
    ],
    u.prototype,
    'setUpgradeProgressDev',
    null,
  ),
  e(
    [
      i.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [Number]),
      t('design:returntype', void 0),
    ],
    u.prototype,
    'setUpgradeProgressApp',
    null,
  ),
  e([i.action.bound, t('design:type', Object)], u.prototype, 'setAppNeedUpgrade', void 0),
  e([i.action.bound, t('design:type', Object)], u.prototype, 'setDevNeedUpgrade', void 0),
  e([i.computed, t('design:type', Object), t('design:paramtypes', [])], u.prototype, 'appNeedUpgrade_', null),
  e([i.computed, t('design:type', Object), t('design:paramtypes', [])], u.prototype, 'devNeedUpgrade_', null),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', Promise)],
    u.prototype,
    'upgradeApp',
    null,
  ),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', Promise)],
    u.prototype,
    'upgradeDev',
    null,
  ),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    u.prototype,
    'checkVersion',
    null,
  ),
  (exports.UpgradeStore = u));
