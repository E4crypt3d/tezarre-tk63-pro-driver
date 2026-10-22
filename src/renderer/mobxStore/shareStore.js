/* Recovered from Tezarre Driver 1.1.31 - renderer module pUiI */

'use strict';
var e,
  t,
  o,
  r,
  i =
    (this && this.__decorate) ||
    function (e, t, o, r) {
      var i,
        n = arguments.length,
        s = n < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, o)) : r;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, o, r);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (i = e[a]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, o, s) : i(t, o)) || s);
      return (n > 3 && s && Object.defineProperty(t, o, s), s);
    },
  n =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ShareStore = void 0));
const s = require('mobx'),
  a = require('./../WebService.js'),
  c = require('./baseStore.js'),
  d = require('./store.js'),
  g = require('./../DB.js');
class h extends c.BaseStore {
  constructor() {
    (super(),
      (this.currentShareListType = 'config'),
      (this.currentShareListNum = 0),
      (this.configShareList = []),
      (this.macroShareList = []),
      (this.configPageIndex = 0),
      (this.configPageCount = 1),
      (this.configPageType = 'time'),
      (this.macrosPageindex = 0),
      (this.macrosPageCount = 1),
      (this.macrosPageType = 'time'),
      (this.commonHandleErr = (e) => {
        d.mobxStore.toastStore.setErr(e);
      }),
      (this.commonHandleSuccess = (e) => {
        const t = e;
        void 0 !== t.errCode &&
          0 !== t.errCode &&
          void 0 !== t.errMsg &&
          d.mobxStore.toastStore.setErr(t.errCode < 0 ? '网络连接失败' : t.errMsg.toString());
      }),
      setTimeout(() => {
        (s.when(
          () => 3 === d.mobxStore.pageStore.pageIndex,
          () => {
            this.autoRefresh();
          },
        ),
          s.reaction(
            () => d.mobxStore.deviceStore.currentDev,
            (e) => {
              this.autoRefresh();
            },
          ));
      }, 100));
  }
  setCurrentShareListNum(e) {
    this.currentShareListNum = e;
  }
  setPageCount() {
    ((this.configPageIndex = 0), (this.macrosPageindex = 0));
  }
  setShareListPage(e, t) {
    ((this.currentShareListType = e),
      'config' === this.currentShareListType
        ? ((this.configPageType = t), (this.currentShareListNum = 0))
        : 'macro' === this.currentShareListType &&
          ((this.macrosPageType = t), (this.currentShareListNum = 1)));
  }
  autoRefresh() {
    3 === d.mobxStore.pageStore.pageIndex &&
      void 0 !== d.mobxStore.deviceStore.currentDev &&
      ('config' === this.currentShareListType
        ? this.getConfigShareList(this.configPageType, 0)
        : this.getMacroShareList(this.macrosPageType, 0));
  }
  setCurrentShareListType(e) {
    e !== this.currentShareListType &&
      ((this.currentShareListType = e),
      'macro' === e && 0 === this.macroShareList.length && this.getMacroShareList(this.macrosPageType, 0),
      'config' === e && 0 === this.configShareList.length && this.getConfigShareList(this.configPageType, 0));
  }
  getConfigShareList(e, t) {
    (console.log('刷新刷新刷新!!!!!!!!'),
      this.doAsync(
        a.webService.getSharedConfigList,
        (o) => {
          0 === o.errCode &&
            ((this.configShareList = [...o.data.shareList]),
            (this.configPageIndex = t),
            (this.configPageCount = Math.ceil(o.data.itemCount / 10)),
            (this.configPageType = e));
        },
        e,
        t,
      ));
  }
  getMacroShareList(e, t) {
    this.doAsync(
      a.webService.getSharedMacroList,
      (o) => {
        0 === o.errCode &&
          ((this.macroShareList = [...o.data.shareList]),
          (this.macrosPageindex = t),
          (this.macrosPageCount = Math.ceil(o.data.itemCount / 10)),
          (this.macrosPageType = e));
      },
      e,
      t,
    );
  }
  downloadSharedConfig(e) {
    var t, o, r, i, n;
    if (void 0 === d.mobxStore.userStore.user) return void d.mobxStore.toastStore.setInfo('请先登录');
    const s = e.config;
    if (void 0 === s.value) throw 'downloadSharedConfig value empty';
    (null === (o = null === (t = s.deviceType) || void 0 === t ? void 0 : t.layout) || void 0 === o
      ? void 0
      : o.light.isRgb) !==
      (null ===
        (i =
          null === (r = d.mobxStore.deviceStore.currentDev) || void 0 === r ? void 0 : r.deviceType.layout) ||
      void 0 === i
        ? void 0
        : i.light.isRgb) && (s.light = { type: 'LightOff' });
    for (let a = 0; a < s.value.length; a++) {
      const e = s.value[a];
      if (
        'ConfigMacro' === e.type &&
        (null === (n = d.mobxStore.deviceStore.currentDev) || void 0 === n
          ? void 0
          : n.checkMacroLenthIsFull(e.macro))
      )
        return void d.mobxStore.toastStore.setInfo('宏过长,与当前设配不适配');
    }
    this.doAsync(
      a.webService.downloadSharedConfig,
      (t) => {
        (e.downloadTimes++,
          (this.configShareList = [...this.configShareList]),
          d.mobxStore.configStore.getConfigListFormDB());
      },
      e,
    );
  }
  downloadSharedMacro(e) {
    var t, o, r;
    if (void 0 !== d.mobxStore.userStore.user) {
      if (void 0 === (null === (t = e.macro.value) || void 0 === t ? void 0 : t.macro))
        throw 'downloadSharedMacro empty';
      null !== (o = d.mobxStore.deviceStore.currentDev) &&
      void 0 !== o &&
      o.checkMacroLenthIsFull(null === (r = e.macro.value) || void 0 === r ? void 0 : r.macro)
        ? d.mobxStore.toastStore.setInfo('宏过长,与当前设配不适配')
        : ((this.macroShareList = [...this.macroShareList]),
          this.doAsync(
            a.webService.downloadSharedMacro,
            (t) => {
              (e.downloadTimes++,
                (this.macroShareList = [...this.macroShareList]),
                d.mobxStore.macroStore.refreshMacroList());
            },
            e,
          ));
    } else d.mobxStore.toastStore.setInfo('请先登录');
  }
  shareMacro(e, t) {
    void 0 !== d.mobxStore.userStore.user
      ? this.doAsync(a.webService.shareMacro, (e) => {}, e, t)
      : d.mobxStore.toastStore.setInfo('请先登录');
  }
  shareConfig(e, t) {
    void 0 !== d.mobxStore.userStore.user
      ? this.doAsync(a.webService.shareConfig, (e) => {}, e, t)
      : d.mobxStore.toastStore.setInfo('请先登录');
  }
}
(i([s.observable, n('design:type', String)], h.prototype, 'currentShareListType', void 0),
  i([s.observable, n('design:type', Number)], h.prototype, 'currentShareListNum', void 0),
  i([s.observable, n('design:type', Array)], h.prototype, 'configShareList', void 0),
  i([s.observable, n('design:type', Array)], h.prototype, 'macroShareList', void 0),
  i([s.observable, n('design:type', Object)], h.prototype, 'configPageIndex', void 0),
  i([s.observable, n('design:type', Object)], h.prototype, 'configPageCount', void 0),
  i([s.observable, n('design:type', String)], h.prototype, 'configPageType', void 0),
  i([s.observable, n('design:type', Object)], h.prototype, 'macrosPageindex', void 0),
  i([s.observable, n('design:type', Object)], h.prototype, 'macrosPageCount', void 0),
  i([s.observable, n('design:type', String)], h.prototype, 'macrosPageType', void 0),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [Number]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'setCurrentShareListNum',
    null,
  ),
  i(
    [s.action.bound, n('design:type', Function), n('design:paramtypes', []), n('design:returntype', void 0)],
    h.prototype,
    'setPageCount',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [String, String]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'setShareListPage',
    null,
  ),
  i(
    [s.action.bound, n('design:type', Function), n('design:paramtypes', []), n('design:returntype', void 0)],
    h.prototype,
    'autoRefresh',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [String]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'setCurrentShareListType',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [String, Number]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'getConfigShareList',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [String, Number]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'getMacroShareList',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [
        'function' == typeof (e = void 0 !== a.webService && a.webService.SharedConfig) ? e : Object,
      ]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'downloadSharedConfig',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [
        'function' == typeof (t = void 0 !== a.webService && a.webService.SharedMacro) ? t : Object,
      ]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'downloadSharedMacro',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', ['function' == typeof (o = void 0 !== g.Macro && g.Macro) ? o : Object, String]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'shareMacro',
    null,
  ),
  i(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [
        'function' == typeof (r = void 0 !== g.Config && g.Config) ? r : Object,
        String,
      ]),
      n('design:returntype', void 0),
    ],
    h.prototype,
    'shareConfig',
    null,
  ),
  (exports.ShareStore = h));
