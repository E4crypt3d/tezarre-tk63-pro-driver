/* Recovered from Tezarre Driver 1.1.31 - renderer module Ve1i */

'use strict';
var e,
  t,
  o =
    (this && this.__decorate) ||
    function (e, t, o, i) {
      var r,
        n = arguments.length,
        s = n < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, o)) : i;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, o, i);
      else
        for (var d = e.length - 1; d >= 0; d--)
          (r = e[d]) && (s = (n < 3 ? r(s) : n > 3 ? r(t, o, s) : r(t, o)) || s);
      return (n > 3 && s && Object.defineProperty(t, o, s), s);
    },
  i =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ConfigStore = void 0));
const r = require('mobx'),
  n = require('./../WebService.js'),
  s = require('./../DB.js'),
  d = require('./baseStore.js'),
  c = require('./store.js'),
  g = require('./../res.js');
class a extends d.BaseStore {
  constructor() {
    (super(),
      (this.configList = []),
      (this.commonHandleErr = (e) => {
        c.mobxStore.toastStore.setErr(e);
      }),
      (this.commonHandleSuccess = (e) => {
        const t = e;
        void 0 !== t &&
          void 0 !== t.errCode &&
          0 !== t.errCode &&
          void 0 !== t.errMsg &&
          c.mobxStore.toastStore.setErr(t.errMsg);
      }));
  }
  getConfigListFormDB() {
    this.doAsync(n.DBService.getConfigs, (e) => {
      this.configList = [...e];
    });
  }
  deleteConfig(e) {
    e.localId !== c.mobxStore.deviceStore.currentConfig.localId
      ? this.doAsync(
          n.DBService.deleteConfig,
          (e) => {
            this.getConfigListFormDB();
          },
          e,
        )
      : c.mobxStore.toastStore.setInfo(g.res.text.当前正在使用的配置无法删除请切换配置后重试());
  }
  saveConfig(e) {
    this.doAsync(
      n.DBService.saveConfig,
      (t) => {
        (this.getConfigListFormDB(),
          e.localId === c.mobxStore.deviceStore.currentConfig.localId &&
            void 0 !== e.name &&
            c.mobxStore.deviceStore.renameCurrentConfig(e));
      },
      e,
    );
  }
  uploadConfigs() {
    this.doAsync(n.webService.uploadConfigs, (e) => {
      this.getConfigListFormDB();
    });
  }
  downloadConfigs() {
    this.doAsync(n.webService.downloadConfigs, (e) => {
      (c.mobxStore.macroStore.refreshMacroList(), this.getConfigListFormDB());
    });
  }
}
(o([r.observable, i('design:type', Array)], a.prototype, 'configList', void 0),
  o(
    [r.action.bound, i('design:type', Function), i('design:paramtypes', []), i('design:returntype', void 0)],
    a.prototype,
    'getConfigListFormDB',
    null,
  ),
  o(
    [
      r.action.bound,
      i('design:type', Function),
      i('design:paramtypes', ['function' == typeof (e = void 0 !== s.Config && s.Config) ? e : Object]),
      i('design:returntype', void 0),
    ],
    a.prototype,
    'deleteConfig',
    null,
  ),
  o(
    [
      r.action.bound,
      i('design:type', Function),
      i('design:paramtypes', ['function' == typeof (t = void 0 !== s.Config && s.Config) ? t : Object]),
      i('design:returntype', void 0),
    ],
    a.prototype,
    'saveConfig',
    null,
  ),
  o(
    [r.action.bound, i('design:type', Function), i('design:paramtypes', []), i('design:returntype', void 0)],
    a.prototype,
    'uploadConfigs',
    null,
  ),
  o(
    [r.action.bound, i('design:type', Function), i('design:paramtypes', []), i('design:returntype', void 0)],
    a.prototype,
    'downloadConfigs',
    null,
  ),
  (exports.ConfigStore = a));
