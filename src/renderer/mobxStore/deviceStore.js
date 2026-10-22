/* Recovered from Tezarre Driver 1.1.31 - renderer module gNPn */

'use strict';
var e,
  t,
  i,
  o,
  r,
  n,
  s,
  c,
  d,
  u,
  h =
    (this && this.__decorate) ||
    function (e, t, i, o) {
      var r,
        n = arguments.length,
        s = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, i)) : o;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, o);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (r = e[c]) && (s = (n < 3 ? r(s) : n > 3 ? r(t, i, s) : r(t, i)) || s);
      return (n > 3 && s && Object.defineProperty(t, i, s), s);
    },
  g =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  l =
    (this && this.__awaiter) ||
    function (e, t, i, o) {
      return new (i || (i = Promise))(function (r, n) {
        function s(e) {
          try {
            d(o.next(e));
          } catch (t) {
            n(t);
          }
        }
        function c(e) {
          try {
            d(o.throw(e));
          } catch (t) {
            n(t);
          }
        }
        function d(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(s, c);
        }
        d((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.DeviceStore = void 0));
const a = require('mobx'),
  p = require('./../WebService.js'),
  v = require('./../DB.js'),
  y = require('./baseStore.js'),
  f = require('./store.js'),
  b = require('./../res.js'),
  S = require('./../../unitys/timeFunc.js'),
  m = require('./../../DriverIO/DeviceAPI/DevFactory.js'),
  C = require('./../sdk/DriverIO/usb/USBDevice.js'),
  D = 'reading...';
let x, L;
class F extends y.BaseStore {
  constructor() {
    (super(),
      (this.deviceArr = p.DBService.getDeviceInstanceArr()),
      (this.currentSelectIndex = p.DBService.getDeviceSelectIndex()),
      (this.currentDev = p.DBService.getCurrentDev()),
      (this.currentConfig = new v.Config()),
      (this.currentProfile = 0),
      (this.fnIndex = 0),
      (this.isFnMode = !1),
      (this.currentDevVersion = D),
      (this.blockMusicFlow = !1),
      (this.blockScreenFlow = !1),
      (this.blockSetLight = !1),
      (this.musicframeReady = !0),
      (this.screenFrameReady = !0),
      (this.userDevList = []),
      (this.commonHandleErr = (e) => {
        f.mobxStore.toastStore.setErr(e);
      }),
      (this.commonHandleSuccess = (e) => {
        'boolean' == typeof e && !1 === e && f.mobxStore.toastStore.setErr(b.res.text.读取设备错误());
      }),
      C.batterySubject.subscribe((e) =>
        l(this, void 0, void 0, function* () {
          var t;
          (0 === e.battery && null !== (t = this.currentDev) && void 0 !== t && t.deviceType.is24) ||
            (this.battery = { battery: 20 * Math.ceil(e.battery / 20), state: e.state });
        }),
      ),
      m.venderSubject.subscribe((e) =>
        l(this, void 0, void 0, function* () {
          var t, i, o;
          ('开始' === e.type && ((this.blockMusicFlow = !0), (this.blockScreenFlow = !0)),
            '停止' === e.type &&
              (clearTimeout(x),
              (x = setTimeout(() => {
                ((this.blockMusicFlow = !1), (this.blockScreenFlow = !1));
              }, 500))),
            '切灯效' === e.type &&
              (clearTimeout(L),
              (L = setTimeout(() => {
                this.getLightSetting();
              }, 1e3))),
            '切配置' === e.type && (this.getCurrentProfile(), this.loadCurrentConfig()),
            '重置' === e.type &&
              (this.stopLight(),
              yield S.sleep(1e3),
              f.mobxStore.toastStore.setState('bussy', 'setReset type'),
              this.isFnMode && (this.isFnMode = !1),
              yield this.loadCurrentConfig(),
              this.removeLightLocal(),
              f.mobxStore.toastStore.setState('idle', 'setReset type')),
            '省电模式' === e.type && (this.getKeyboardOption(), this.stopLight()),
            '常规模式' === e.type &&
              (this.getKeyboardOption(),
              yield S.sleep(100),
              (null === (t = this.currentDev) || void 0 === t ? void 0 : t.deviceType.is24) &&
                (yield S.sleep(500)),
              this.startLight()),
            '切WIN' === e.type &&
              (null === (i = this.keyboardOption) || void 0 === i ? void 0 : i.system) &&
              (console.error('________WIN'), this.loadCurrentConfig()),
            '切MAC' === e.type &&
              ((null === (o = this.keyboardOption) || void 0 === o ? void 0 : o.system) ||
                (console.error('________MAC'), this.loadCurrentConfig())),
            '切睡眠' === e.type && this.getSleepTime());
        }),
      ),
      a.reaction(
        () => this.currentConfig.light,
        (e) =>
          l(this, void 0, void 0, function* () {
            (this.musicReaction && (this.musicReaction(), (this.musicReaction = void 0)),
              void 0 !== (null == e ? void 0 : e.type) && -1 !== e.type.indexOf('LightMusicFollow')
                ? (f.mobxStore.musicFollowStore.start(),
                  'LightMusicFollow' === (null == e ? void 0 : e.type) &&
                    (this.musicReaction = a.reaction(
                      () => f.mobxStore.musicFollowStore.musicDelt,
                      (e) => {
                        this.setMusicFollow(e, 14);
                      },
                    )),
                  'LightMusicFollow2' === (null == e ? void 0 : e.type) &&
                    (this.musicReaction = a.reaction(
                      () => f.mobxStore.musicFollowStore.music2Delt,
                      (e) => {
                        this.setMusicFollow(e, 14);
                      },
                    )),
                  'LightMusicFollow3' === (null == e ? void 0 : e.type) &&
                    (this.musicReaction = a.reaction(
                      () => f.mobxStore.musicFollowStore.music3Delt,
                      (e) => {
                        this.setMusicFollow(e, 0);
                      },
                    )))
                : f.mobxStore.musicFollowStore.stop(),
              this.screenReaction && (this.screenReaction(), (this.screenReaction = void 0)),
              'LightScreenColor' === (null == e ? void 0 : e.type)
                ? (f.mobxStore.screenStore.start(),
                  (this.screenReaction = a.reaction(
                    () => f.mobxStore.screenStore.screenDataArray,
                    (e) => {
                      this.setScreen(e);
                    },
                  )))
                : f.mobxStore.screenStore.stop());
          }),
      ),
      p.DBService.deviceListChangeSubject.subscribe((e) => {
        this.refresh();
      }));
  }
  setKeyboardOption(e) {
    var t;
    if (!this.checkDev()) return;
    if ('keyboard' !== (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type)) return;
    let i =
      void 0 !== this.keyboardOption
        ? this.keyboardOption
        : {
            winKeyLockControl: !1,
            system: !1,
            wasdKeyAndArrowKeyExchange: !1,
            ledOff: !1,
            sLedOff: !1,
            keyboardMode: !1,
            keyboardLockControl: !1,
            keyboardFnKeyMatrix: !1,
            powerSaveMode: !1,
          };
    ((i.powerSaveMode = e),
      this.doAsync(
        this.currentDev.setKeyboardOption,
        (e) =>
          l(this, void 0, void 0, function* () {
            e && (this.keyboardOption = i);
          }),
        i,
      ));
  }
  getKeyboardOption() {
    var e;
    this.checkDev() &&
      'keyboard' === (null === (e = this.currentDev) || void 0 === e ? void 0 : e.type) &&
      this.doAsync(this.currentDev.getKeyboardOption, (e) =>
        l(this, void 0, void 0, function* () {
          e &&
            ((this.keyboardOption = e),
            (this.blockSetLight = e.powerSaveMode),
            e.powerSaveMode && this.stopLight());
        }),
      );
  }
  setDeBounce(e) {
    var t;
    this.checkDev() &&
      'keyboard' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
      this.doAsync(
        this.currentDev.setDeBounce,
        (t) => {
          t && f.mobxStore.otherStore.setCurrentOtherKey(e, 'deBounce');
        },
        e,
      );
  }
  getDeBounce() {
    var e;
    this.checkDev() &&
      'keyboard' === (null === (e = this.currentDev) || void 0 === e ? void 0 : e.type) &&
      this.doAsync(this.currentDev.getDeBounce, (e) => {
        f.mobxStore.otherStore.setCurrentOtherKey(e, 'deBounce');
      });
  }
  setSleepTime(e) {
    var t;
    this.checkDev() &&
      'keyboard' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
      this.doAsync(
        this.currentDev.setSleepKeyTime,
        (t) => {
          t && f.mobxStore.otherStore.setCurrentOtherKey(e, 'sleep');
        },
        e,
      );
  }
  getSleepTime() {
    var e;
    this.checkDev() &&
      'keyboard' === (null === (e = this.currentDev) || void 0 === e ? void 0 : e.type) &&
      this.doAsync(this.currentDev.getSleepKeyTime, (e) => {
        f.mobxStore.otherStore.setCurrentOtherKey(e, 'sleep');
      });
  }
  getSLEDParam() {
    var e;
    this.checkDev() &&
      'keyboard' === (null === (e = this.currentDev) || void 0 === e ? void 0 : e.type) &&
      this.doAsync(this.currentDev.getSLEDParam, (e) => {
        ((this.currentConfig.logoLight = e), this.saveCurrentConfig());
      });
  }
  setSLEDParam(e) {
    var t;
    return l(this, void 0, void 0, function* () {
      this.blockSetLight
        ? f.mobxStore.toastStore.setInfo('灯带关闭请开启后切换')
        : this.checkDev() &&
          'keyboard' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
          this.doAsync(
            this.currentDev.setSLEDParam,
            (t) =>
              l(this, void 0, void 0, function* () {
                t && ((this.currentConfig.logoLight = e), this.saveCurrentConfig());
              }),
            e,
          );
    });
  }
  setFormalLightName() {
    F.lightNameMap = {
      LightOff: b.res.text.关闭(),
      LightAlwaysOn: b.res.text.常亮(),
      LightBreath: b.res.text.动态呼吸(),
      LightWave: b.res.text.随波逐流(),
      LightRipple: b.res.text.碧波荡漾(),
      LightRaindrop: b.res.text.繁星点点(),
      LightSnake: b.res.text.川流不息(),
      LightPressAction: b.res.text.如影随形(),
      LightConverage: b.res.text.重峦叠嶂(),
      LightNeon: b.res.text.光谱循环(),
      LightSineWave: b.res.text.正弦波(),
      LightKaleidoscope: b.res.text.彩泉涌动(),
      LightLineWave: b.res.text.百花争艳(),
      LightLaser: b.res.text.一石二鸟(),
      LightCircleWave: b.res.text.峰回路转(),
      LightDazzing: b.res.text.斜风细雨(),
      LightUserPicture: b.res.text.自定义(),
      LightMusicFollow: b.res.text.音乐律动(),
      LightMusicFollow2: b.res.text.音乐律动2(),
      LightMusicFollow3: b.res.text.音乐律动(),
      LightScreenColor: b.res.text.光影(),
      LightSingleRipple: b.res.text.激光(),
      LightRoundRipple: b.res.text.烟花(),
      LightObliqueWave: b.res.text.斜波(),
      LightGreedySnake: b.res.text.贪吃蛇(),
      LightStarry: b.res.text.星空(),
      LightWaterFall: b.res.text.瀑布(),
      LightRingWaterFall: b.res.text.环形瀑布(),
      LightRainDown: b.res.text.漫天飞雪(),
      LightMeteor: b.res.text.流星(),
      LightPressActionOff: b.res.text.踏雪无痕(),
      LightTrain: b.res.text.多彩纵横(),
      LightFireWorks: b.res.text.层出不穷(),
    };
  }
  loadGetKeyboardOption() {
    (f.mobxStore.toastStore.setState('bussy', 'getKeyboardOption'),
      this.getKeyboardOption(),
      f.mobxStore.toastStore.setState('idle', 'getKeyboardOption'));
  }
  loadAddAction() {
    (this.startLight(), this.loadGetKeyboardOption());
  }
  loadCurrentConfig() {
    return l(this, void 0, void 0, function* () {
      return (
        yield this.stopLight(),
        yield S.sleep(400),
        (this.currentConfig.name = 'loading'),
        new Promise((e) =>
          l(this, void 0, void 0, function* () {
            var t;
            'help' !== (null === (t = this.currentDev) || void 0 === t ? void 0 : t.deviceType.displayName)
              ? (yield this.getCurrentProfile(),
                this.doAsync(p.DBService.loadCurrentConfig, (t) => {
                  this.doAsync(
                    p.DBService.devToConfig,
                    (i) =>
                      l(this, void 0, void 0, function* () {
                        var o;
                        if (void 0 === i)
                          return (
                            console.log('设备状态读不出'),
                            this.creatNewConfigToCurrentAndSave('default', ''),
                            e(),
                            void this.loadAddAction()
                          );
                        if (void 0 === t || !p.DBService.checkConfigValueEqual(t, i)) {
                          (console.log('当前状态与设备状态不同'), console.log('查找数据里有没有相同的'));
                          const t = yield p.DBService.findSameConfig(i);
                          return (
                            void 0 === t
                              ? (console.log('没有找到相同的配置'),
                                (this.currentConfig = i),
                                (this.currentConfig.name =
                                  null === (o = this.currentDev) || void 0 === o
                                    ? void 0
                                    : o.deviceType.displayName),
                                (this.currentConfig.category = ''),
                                this.saveCurrentConfig().then(() => {
                                  (console.log('NNNAAAAMMEEEEE', this.currentConfig.name),
                                    console.log('将设备状态作为当前状态', this.currentConfig.localId),
                                    this.doAsync(p.DBService.setCurrentConfig, (e) => {}, this.currentConfig),
                                    f.mobxStore.configStore.getConfigListFormDB());
                                }))
                              : (console.log('找到相同的配置'), (this.currentConfig = t)),
                            e(),
                            void this.loadAddAction()
                          );
                        }
                        ((this.currentConfig = t), e(), this.loadAddAction());
                      }),
                    this.isFnMode,
                    this.fnIndex,
                  );
                }))
              : e();
          }),
        )
      );
    });
  }
  getLightSetting() {
    var e, t;
    return l(this, void 0, void 0, function* () {
      this.checkDev() &&
        (f.mobxStore.toastStore.setState('bussy', 'getLightSetting'),
        (-1 ===
          (null === (e = this.currentConfig.light) || void 0 === e
            ? void 0
            : e.type.indexOf('LightMusicFollow')) &&
          -1 ===
            (null === (t = this.currentConfig.light) || void 0 === t
              ? void 0
              : t.type.indexOf('LightScreenColor'))) ||
          (yield S.sleep(500)),
        this.doAsync(this.currentDev.getLightSetting, (e) => {
          ((this.currentConfig.light = e),
            'LightUserPicture' === (null == e ? void 0 : e.type) && this.getLightPic(),
            this.saveCurrentConfig());
        }),
        f.mobxStore.toastStore.setState('idle', 'getLightSetting'));
    });
  }
  refresh() {
    var e, t, i, o, r;
    ((this.currentDev = p.DBService.getCurrentDev()),
      void 0 !== this.currentDev &&
        void 0 === this.currentConfig.name &&
        this.getCurrentProfile().then((e) =>
          l(this, void 0, void 0, function* () {
            (f.mobxStore.toastStore.setState('bussy', 'refresh_loadCurrentConfig --'),
              yield this.loadCurrentConfig().then((e) => f.mobxStore.configStore.getConfigListFormDB()),
              f.mobxStore.toastStore.setState('idle', 'refresh_loadCurrentConfig --'));
          }),
        ),
      (this.deviceArr = p.DBService.getDeviceInstanceArr()),
      (this.currentSelectIndex = p.DBService.getDeviceSelectIndex()),
      0 === this.deviceArr.length && (this.currentConfig = new v.Config()),
      (null === (e = this.currentDev) || void 0 === e ? void 0 : e.deviceType.version) &&
        ((this.currentDevVersion =
          null === (t = this.currentDev) || void 0 === t ? void 0 : t.deviceType.version),
        (null === (i = this.currentDev) || void 0 === i ? void 0 : i.deviceType.severVersion) &&
          f.mobxStore.upgradeStore.setDevNeedUpgrade(
            Number(null === (o = this.currentDev) || void 0 === o ? void 0 : o.deviceType.version) <
              Number(null === (r = this.currentDev) || void 0 === r ? void 0 : r.deviceType.severVersion),
          )));
  }
  setCurrentSelectIndex(e) {
    (p.DBService.setDeviceSelectIndex(e), (this.currentConfig = new v.Config()), this.refresh());
  }
  writeCurrentConfigToDev() {
    this.doAsync(p.DBService.configToDev, () => {}, this.currentConfig);
  }
  checkDev() {
    return void 0 !== this.currentDev || (f.mobxStore.toastStore.setErr(b.res.text.当前未检测到设备()), !1);
  }
  setCurrentFnIndex(e) {
    ((this.fnIndex = e), this.loadCurrentConfig());
  }
  setIsFnMode(e) {
    return l(this, void 0, void 0, function* () {
      (f.mobxStore.toastStore.setState('bussy', 'setIsFnMode'),
        (this.isFnMode = e),
        yield this.loadCurrentConfig(),
        f.mobxStore.toastStore.setState('idle', 'setIsFnMode'));
    });
  }
  getCurrentProfile() {
    var e;
    return l(this, void 0, void 0, function* () {
      if (
        this.checkDev() &&
        'help' !== (null === (e = this.currentDev) || void 0 === e ? void 0 : e.deviceType.displayName)
      )
        return this.doAsync(this.currentDev.getCurrentProfile, (e) =>
          l(this, void 0, void 0, function* () {
            void 0 !== e && e >= 0 && (this.currentProfile = this.currentDev.currentProfile);
          }),
        );
    });
  }
  setCurrentProfile(e) {
    return l(this, void 0, void 0, function* () {
      if (this.checkDev())
        return this.doAsync(
          this.currentDev.setCurrentProfile,
          (e) =>
            l(this, void 0, void 0, function* () {
              e &&
                ('win32' !== process.platform &&
                  (f.mobxStore.toastStore.setState('bussy', 'setCurrentProfile'), yield S.sleep(1e3)),
                this.loadCurrentConfig(),
                (this.currentProfile = this.currentDev.currentProfile),
                'win32' !== process.platform && f.mobxStore.toastStore.setState('idle', 'setCurrentProfile'));
            }),
          e,
        );
    });
  }
  setMusicFollow(e, t) {
    var i, o;
    return l(this, void 0, void 0, function* () {
      this.checkDev() &&
        'keyboard' === (null === (i = this.currentDev) || void 0 === i ? void 0 : i.type) &&
        this.musicframeReady &&
        ((null !== (o = this.keyboardOption) && void 0 !== o && o.powerSaveMode) ||
          this.blockMusicFlow ||
          ((this.musicframeReady = !1),
          yield this.currentDev.setMusicFollow(e, t),
          (this.musicframeReady = !0)));
    });
  }
  setScreen(e) {
    var t, i;
    return l(this, void 0, void 0, function* () {
      this.checkDev() &&
        'keyboard' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
        this.screenFrameReady &&
        ((null !== (i = this.keyboardOption) && void 0 !== i && i.powerSaveMode) ||
          this.blockScreenFlow ||
          ((this.screenFrameReady = !1), yield this.currentDev.setScreen(e), (this.screenFrameReady = !0)));
    });
  }
  getDevVersion() {
    this.checkDev() &&
      ((this.currentDevVersion = D),
      this.doAsync(this.currentDev.getFirmwareVersion, (e) =>
        l(this, void 0, void 0, function* () {
          var t;
          if (void 0 === e) return;
          this.currentDevVersion = e.toString();
          const i = yield v.DeviceType.findOne(
            null === (t = this.currentDev) || void 0 === t ? void 0 : t.deviceType.id,
          );
          void 0 !== i && ((i.version = e.toString()), yield i.save(), this.saveCurrentConfig());
        }),
      ));
  }
  setReportRate(e) {
    this.checkDev() &&
      this.doAsync(
        this.currentDev.setReportRate,
        (t) => {
          t && ((this.currentConfig.reportRate = e), this.saveCurrentConfig());
        },
        e,
      );
  }
  setLightSetting(e) {
    return l(this, void 0, void 0, function* () {
      this.blockSetLight
        ? f.mobxStore.toastStore.setInfo('灯效关闭请开启后切换')
        : this.checkDev() &&
          this.doAsync(
            this.currentDev.setLightSetting,
            (t) =>
              l(this, void 0, void 0, function* () {
                t &&
                  ((this.currentConfig.light = e),
                  this.saveCurrentConfig(),
                  'LightUserPicture' === e.type && void 0 !== e.option && this.getLightPic(),
                  -1 !== e.type.indexOf('LightMusicFollow') && f.mobxStore.musicFollowStore.stop(),
                  -1 !== e.type.indexOf('LightScreenColor') && f.mobxStore.screenStore.stop());
              }),
            e,
          );
    });
  }
  setLogoLightSetting(e) {
    var t;
    this.checkDev() &&
      'mouse' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
      this.doAsync(
        this.currentDev.setLogoLightSetting,
        (t) => {
          t && (console.error(this.currentConfig), (this.currentConfig.light = e), this.saveCurrentConfig());
        },
        e,
      );
  }
  getLightPic() {
    var e;
    this.blockSetLight
      ? f.mobxStore.toastStore.setInfo('灯带关闭请开启后切换')
      : this.checkDev() &&
        'keyboard' === (null === (e = this.currentDev) || void 0 === e ? void 0 : e.type) &&
        this.doAsync(this.currentDev.getLightPic, (e) => {
          e && ((this.currentConfig.lightPic = e), this.saveCurrentConfig());
        });
  }
  setLightPic(e) {
    var t;
    this.checkDev() &&
      'keyboard' === (null === (t = this.currentDev) || void 0 === t ? void 0 : t.type) &&
      this.doAsync(
        this.currentDev.setLightPic,
        (t) => {
          t && ((this.currentConfig.lightPic = e), this.saveCurrentConfig());
        },
        e,
      );
  }
  stopLight() {
    var e;
    return l(this, void 0, void 0, function* () {
      (f.mobxStore.musicFollowStore.stop(),
        f.mobxStore.screenStore.stop(),
        (this.blockMusicFlow = !0),
        (this.blockScreenFlow = !0),
        (null === (e = this.currentDev) || void 0 === e ? void 0 : e.deviceType.is24) &&
          (yield S.sleep(400), console.log('mode is 2.4G')));
    });
  }
  startLight() {
    var e;
    (null !== (e = this.keyboardOption) && void 0 !== e && e.powerSaveMode) ||
      (void 0 !== this.currentConfig.light &&
        ((this.blockMusicFlow = !1),
        (this.blockScreenFlow = !1),
        -1 !== this.currentConfig.light.type.indexOf('LightMusicFollow') &&
          f.mobxStore.musicFollowStore.start(),
        'LightScreenColor' === this.currentConfig.light.type && f.mobxStore.screenStore.start()));
  }
  setKeyConfig(e) {
    return l(this, void 0, void 0, function* () {
      if (
        (f.mobxStore.toastStore.setState('bussy', 'setKeyConfig'), yield this.stopLight(), !this.checkDev())
      )
        return;
      if (void 0 === this.currentDev) return;
      const t = void 0 === this.currentConfig.value ? [e] : [...this.currentConfig.value],
        i = t.find((t) => t.original === e.original && t.index === e.index);
      (void 0 !== i && t.splice(t.indexOf(i), 1),
        t.push(e),
        (this.isFnMode && 'mouse' === this.currentDev.type) ||
          (this.doAsync(
            this.isFnMode ? this.currentDev.setFnKeyConfig : this.currentDev.setKeyConfig,
            (i) =>
              l(this, void 0, void 0, function* () {
                if (i) {
                  if ('combo' === e.type && e.original === e.key && 'none' === e.skey && 0 === e.key2) {
                    const i = t.find((t) => t.original === e.original && t.index === e.index);
                    void 0 !== i && t.splice(t.indexOf(i), 1);
                  }
                  ((this.currentConfig.value = t),
                    this.saveCurrentConfig().then((e) => {}),
                    yield S.sleep(100));
                }
              }),
            t,
            this.fnIndex,
          ),
          f.mobxStore.toastStore.setState('idle', 'setKeyConfig')));
    });
  }
  setReset() {
    return l(this, void 0, void 0, function* () {
      this.checkDev() &&
        (yield this.stopLight(),
        0 !== this.currentProfile && (this.currentProfile = 0),
        this.isFnMode && (this.isFnMode = !1),
        this.doAsync(this.currentDev.setReSet, (e) =>
          l(this, void 0, void 0, function* () {
            e &&
              (f.mobxStore.toastStore.setState('bussy', 'setReset -'),
              yield S.sleep(5e3),
              yield this.loadCurrentConfig(),
              this.removeLightLocal(),
              f.mobxStore.toastStore.setState('idle', 'setReset -'));
          }),
        ));
    });
  }
  removeLightLocal() {
    var e, t, i;
    let o = '';
    void 0 !== (null === (e = this.currentDev) || void 0 === e ? void 0 : e.deviceType.id) &&
      ((o = this.currentDev.deviceType.id + '&'),
      null === (i = null === (t = this.currentDev) || void 0 === t ? void 0 : t.deviceType.layout) ||
        void 0 === i ||
        i.light.types.map((e) => localStorage.removeItem(o + e.type)));
  }
  setDpi(e) {
    this.checkDev() &&
      void 0 !== this.currentDev &&
      'mouse' === this.currentDev.type &&
      this.doAsync(
        this.currentDev.setDPI,
        (t) => {
          t && ((this.currentConfig.dpi = e), this.saveCurrentConfig());
        },
        e,
      );
  }
  saveCurrentConfig() {
    return new Promise((e) => {
      const t = this.currentConfig;
      ((this.currentConfig = new v.Config()),
        Object.assign(this.currentConfig, t),
        this.doAsync(
          p.DBService.saveConfig,
          (t) => {
            e();
          },
          this.currentConfig,
        ));
    });
  }
  setCurrentConfig(e) {
    ((this.currentConfig = e),
      this.doAsync(
        p.DBService.setCurrentConfig,
        (e) => {
          this.writeCurrentConfigToDev();
        },
        this.currentConfig,
      ));
  }
  renameCurrentConfig(e) {
    ((this.currentConfig.name = e.name), this.saveCurrentConfig());
  }
  creatNewConfigToCurrentAndSave(e, t) {
    const i = new v.Config();
    ((i.name = e),
      (i.category = t),
      (i.reportRate = 500),
      (i.value = []),
      (i.light = { type: 'LightAlwaysOn', value: 1, rgb: 16729454, dazzle: !0 }),
      (i.logoLight = { type: 'LightAlwaysOn', value: 1, rgb: 16729454, dazzle: !0 }),
      (this.currentConfig = i),
      this.doAsync(
        p.DBService.saveConfig,
        (e) => {
          (f.mobxStore.configStore.getConfigListFormDB(), this.writeCurrentConfigToDev());
        },
        this.currentConfig,
      ),
      S.sleep(2e3));
  }
  getUserDevList() {
    this.doAsync(p.getCurrentUser, (e) => {
      void 0 !== e &&
        void 0 !== e.deviceTypes &&
        (this.userDevList = [...(null == e ? void 0 : e.deviceTypes)]);
    });
  }
}
((F.lightNameMap = {
  LightOff: b.res.text.关闭(),
  LightAlwaysOn: b.res.text.常亮(),
  LightBreath: b.res.text.呼吸(),
  LightWave: b.res.text.光波(),
  LightRipple: b.res.text.涟漪(),
  LightRaindrop: b.res.text.雨滴(),
  LightSnake: b.res.text.蛇形(),
  LightPressAction: b.res.text.跟随(),
  LightConverage: b.res.text.聚合(),
  LightNeon: b.res.text.霓虹(),
  LightUserPicture: b.res.text.自定义(),
  LightSingleRipple: b.res.text.激光(),
  LightSineWave: b.res.text.正玄波(),
  LightRoundRipple: b.res.text.烟花(),
  LightMusicFollow: b.res.text.音乐律动(),
  LightMusicFollow2: b.res.text.音乐律动2(),
  LightMusicFollow3: b.res.text.音乐律动(),
  LightKaleidoscope: b.res.text.万花筒(),
  LightLineWave: b.res.text.线性波浪(),
  LightObliqueWave: b.res.text.斜波(),
  LightGreedySnake: b.res.text.贪吃蛇(),
  LightStarry: b.res.text.星空(),
  LightWaterFall: b.res.text.瀑布(),
  LightRingWaterFall: b.res.text.环形瀑布(),
  LightLaser: b.res.text.激光2(),
  LightCircleWave: b.res.text.圆波(),
  LightDazzing: b.res.text.炫目(),
  LightScreenColor: b.res.text.光影(),
  LightRainDown: b.res.text.落雨(),
  LightMeteor: b.res.text.流星(),
  LightPressActionOff: b.res.text.单点灭(),
  LightTrain: b.res.text.火车(),
  LightFireWorks: b.res.text.焰火(),
}),
  (F.optionNameMap = {
    right: b.res.text.右(),
    left: b.res.text.左(),
    up: b.res.text.上(),
    down: b.res.text.下(),
    upright: b.res.text.垂直(),
    separate: b.res.text.分离(),
    intersect: b.res.text.横断(),
    out: b.res.text.外扩(),
    in: b.res.text.吸引(),
    'anti-clockwise': b.res.text.逆时针(),
    clockwise: b.res.text.顺时针(),
    single: b.res.text.单列(),
    full: b.res.text.外扩(),
    z: b.res.text.z字型(),
    return: b.res.text.折返(),
  }),
  h([a.observable, g('design:type', Object)], F.prototype, 'deviceArr', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'currentSelectIndex', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'currentDev', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'currentConfig', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'currentProfile', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'fnIndex', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'isFnMode', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'currentDevVersion', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'battery', void 0),
  h([a.observable, g('design:type', Object)], F.prototype, 'keyboardOption', void 0),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Boolean]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setKeyboardOption',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getKeyboardOption',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Number]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setDeBounce',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getDeBounce',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (t = 'undefined' != typeof SleepKeyTime && SleepKeyTime) ? t : Object,
      ]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setSleepTime',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getSleepTime',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getSLEDParam',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (i = 'undefined' != typeof LightSetting && LightSetting) ? i : Object,
      ]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setSLEDParam',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', Promise)],
    F.prototype,
    'loadCurrentConfig',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', Promise)],
    F.prototype,
    'getLightSetting',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'refresh',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Number]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setCurrentSelectIndex',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'writeCurrentConfigToDev',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'checkDev',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Number]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setCurrentFnIndex',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Boolean]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setIsFnMode',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', Promise)],
    F.prototype,
    'getCurrentProfile',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Number]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setCurrentProfile',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (o = 'undefined' != typeof Array && Array) ? o : Object,
        Number,
      ]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setMusicFollow',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (r = 'undefined' != typeof Uint8ClampedArray && Uint8ClampedArray) ? r : Object,
      ]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setScreen',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getDevVersion',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Number]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setReportRate',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (n = 'undefined' != typeof LightSetting && LightSetting) ? n : Object,
      ]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setLightSetting',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (s = 'undefined' != typeof LightSetting && LightSetting) ? s : Object,
      ]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setLogoLightSetting',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getLightPic',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Array]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setLightPic',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', Promise)],
    F.prototype,
    'stopLight',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'startLight',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [
        'function' == typeof (c = 'undefined' != typeof ConfigValue && ConfigValue) ? c : Object,
      ]),
      g('design:returntype', Promise),
    ],
    F.prototype,
    'setKeyConfig',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', Promise)],
    F.prototype,
    'setReset',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [Array]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setDpi',
    null,
  ),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'saveCurrentConfig',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', ['function' == typeof (d = void 0 !== v.Config && v.Config) ? d : Object]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'setCurrentConfig',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', ['function' == typeof (u = void 0 !== v.Config && v.Config) ? u : Object]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'renameCurrentConfig',
    null,
  ),
  h(
    [
      a.action.bound,
      g('design:type', Function),
      g('design:paramtypes', [String, String]),
      g('design:returntype', void 0),
    ],
    F.prototype,
    'creatNewConfigToCurrentAndSave',
    null,
  ),
  h([a.observable, g('design:type', Array)], F.prototype, 'userDevList', void 0),
  h(
    [a.action.bound, g('design:type', Function), g('design:paramtypes', []), g('design:returntype', void 0)],
    F.prototype,
    'getUserDevList',
    null,
  ),
  (exports.DeviceStore = F));
