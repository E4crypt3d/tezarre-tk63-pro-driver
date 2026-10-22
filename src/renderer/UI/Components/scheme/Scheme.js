/* Recovered from Tezarre Driver 1.1.31 - renderer module LIKZ */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, a, r) {
          (void 0 === r && (r = a),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[a];
              },
            }));
        }
      : function (e, t, a, r) {
          (void 0 === r && (r = a), (e[r] = t[a]));
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
  a =
    (this && this.__importStar) ||
    function (a) {
      if (a && a.__esModule) return a;
      var r = {};
      if (null != a) for (var o in a) 'default' !== o && Object.hasOwnProperty.call(a, o) && e(r, a, o);
      return (t(r, a), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.MacroScheme = exports.ConfigScheme = void 0));
const r = a(require('react')),
  o = require('./../../../dj.js'),
  n = require('./../../../mobxStore/store.js'),
  i = require('mobx-react-lite'),
  d = require('./../../utils/WithProps.js'),
  s = (e) =>
    r.default.createElement(
      r.Fragment,
      null,
      r.default.createElement(o.dj.SchemeItem, {
        w: 892,
        h: 36,
        y: 81,
        mode: 'head',
        name: '文件名称',
        describe: '文件描述',
        deviceName: '设备名称',
        username: '用户名',
        time: '时间',
        downloadTimes: '下载量',
        detail: '详细',
        download: () => {},
      }),
      r.default.createElement(
        o.dj.FlexView,
        { w: 892, h: 370, y: 127, flexDirection: 'column' },
        e.items.map((t, a) =>
          r.default.createElement(o.dj.SchemeItem, {
            relative: !0,
            key: a,
            w: 892,
            h: 44,
            mode: 'body',
            name: t.name,
            describe: t.describe,
            deviceName: t.deviceName,
            username: t.userName,
            time: t.time,
            downloadTimes: t.downloadTimes,
            detail: '',
            download: () => e.download(a),
          }),
        ),
      ),
    ),
  c = (e) => {
    const { shareStore: t } = n.useStore();
    return r.default.createElement(
      r.Fragment,
      null,
      r.default.createElement(o.dj.Button, {
        w: 148,
        h: 30,
        y: 32,
        mode: 'BorderBackground',
        text: '最热',
        isHightLight: 'count' === e.rankyType,
        clickHandle: () => {
          (t.setPageCount(), e.setData('count', 0));
        },
      }),
      r.default.createElement(o.dj.Button, {
        w: 148,
        h: 30,
        x: 162,
        y: 32,
        mode: 'BorderBackground',
        text: '最新',
        isHightLight: 'time' === e.rankyType,
        clickHandle: () => {
          (t.setPageCount(), e.setData('time', 0));
        },
      }),
      r.default.createElement(s, { items: e.listItems, download: e.download }),
      r.default.createElement(o.dj.PageList, {
        w: 892,
        h: 18,
        y: 497,
        relative: !0,
        count: e.count,
        pageIndex: e.pageIndex,
        setPage: (t) => {
          e.setData(e.rankyType, t);
        },
      }),
    );
  },
  m = () => {
    const { shareStore: e } = n.useStore();
    return i.useObserver(() => ({
      download: (t) => e.downloadSharedConfig(e.configShareList[t]),
      count: e.configPageCount,
      pageIndex: e.configPageIndex,
      rankyType: e.configPageType,
      setListType: () => e.setCurrentShareListType('config'),
      setData: (t, a) => e.getConfigShareList(t, a),
      listItems: e.configShareList.map((e) => {
        var t, a;
        return {
          name: e.config.name,
          describe: e.describe,
          deviceName: null === (t = e.config.deviceType) || void 0 === t ? void 0 : t.displayName,
          userName: null === (a = e.config.user) || void 0 === a ? void 0 : a.name,
          time: e.createAt,
          downloadTimes: e.downloadTimes,
          detail: '',
        };
      }),
    }));
  },
  l = () => {
    const { shareStore: e } = n.useStore();
    return i.useObserver(() => ({
      download: (t) => e.downloadSharedMacro(e.macroShareList[t]),
      count: e.macrosPageCount,
      pageIndex: e.macrosPageindex,
      rankyType: e.macrosPageType,
      setListType: () => e.setCurrentShareListType('macro'),
      setData: (t, a) => {
        e.getMacroShareList(t, a);
      },
      listItems: e.macroShareList.map((e) => {
        var t, a;
        return {
          name: e.macro.name,
          describe: e.describe,
          deviceName: null === (t = e.macro.deviceType) || void 0 === t ? void 0 : t.name,
          userName: null === (a = e.macro.user) || void 0 === a ? void 0 : a.name,
          time: e.createAt,
          downloadTimes: e.downloadTimes,
          detail: '',
        };
      }),
    }));
  };
((exports.ConfigScheme = d.withProps(c, m)), (exports.MacroScheme = d.withProps(c, l)));
