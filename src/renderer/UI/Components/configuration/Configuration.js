/* Recovered from Tezarre Driver 1.1.31 - renderer module QLBM */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Configuration = void 0));
const n = r(require('react')),
  i = require('./ConfigurationBox.js'),
  o = require('./../../../dj.js'),
  a = require('./../../../res.js'),
  l = require('./../../store.js'),
  u = require('./../../../mobxStore/store.js'),
  c = require('mobx-react-lite'),
  s = require('./../../utils/OutsideAlerter.js'),
  f = require('./../../utils/NameProvider.js'),
  d = require('./../../../appConfig.js');
exports.Configuration = (e) => {
  const { title: t } = e,
    { configurationOpen: r, shareOpen: g } = l.store.useState((e) => e.configurationOpen.shareOpen),
    { configStore: m, deviceStore: h, pageStore: p, shareStore: C } = u.useStore(),
    { macroStore: O } = u.useStore();
  return c.useObserver(() =>
    n.default.createElement(
      n.Fragment,
      null,
      n.default.createElement(
        s.OutsideAlerter,
        { clickOutsideHandle: () => l.store.setState.configurationOpen(!1) },
        n.default.createElement(
          o.dj.View,
          { w: 363, h: 562, x: 796, y: 87, form: '配置页' },
          n.default.createElement(
            o.dj.FlexView,
            { w: 363, h: 61, justifyContent: 'center', alignItems: 'center' },
            n.default.createElement(o.dj.Line, { y: 61, lineColor: 'UserCenter' }),
            n.default.createElement(o.dj.Text, { relative: !0, h: 22, type: '配置页标题', text: t }),
          ),
          n.default.createElement(
            o.dj.FlexView,
            { w: 363, h: 18, y: 76, justifyContent: 'space-between' },
            n.default.createElement(o.dj.Button, {
              relative: !0,
              w: 70,
              h: 18,
              isHightLight: !1,
              mode: 'Bluer',
              text: a.res.string.添加,
              clickHandle: () => {
                h.creatNewConfigToCurrentAndSave(f.newConfigName(m.configList), '');
              },
            }),
            !d.blockCloud &&
              n.default.createElement(o.dj.Button, {
                relative: !0,
                w: 70,
                h: 18,
                isHightLight: !1,
                mode: 'Bluer',
                textAlign: 'left',
                text: a.res.string.热门,
                clickHandle: () => {
                  (O.stoptHook(),
                    l.store.setState.configurationOpen(!1),
                    p.setPageIndex(3),
                    C.setCurrentShareListType('config'),
                    C.setShareListPage('config', 'count'));
                },
              }),
          ),
          n.default.createElement(o.dj.List, {
            w: 363,
            h: 450,
            y: 105,
            itemCount: m.configList.length,
            scrollToIndex: 0,
            itemSize: () => 70,
            renderItem: (t) =>
              n.default.createElement(
                'div',
                null,
                n.default.createElement(i.ConfigurationBox, {
                  key: m.configList[t].localId,
                  config: m.configList[t],
                  configurationOpen: r,
                  shareOpen: g,
                  onDelete: () => {
                    m.deleteConfig(m.configList[t]);
                  },
                  clickHandle: (e) => {
                    h.currentConfig.localId !== m.configList[t].localId &&
                      (h.setCurrentConfig(m.configList[t]),
                      e.stopPropagation(),
                      l.store.setState.configurationOpen(!1));
                  },
                  sharConfigClick: () => e.setShareConfig(m.configList[t]),
                }),
              ),
          }),
        ),
      ),
      n.default.createElement(o.dj.View, { w: 180, h: 22, x: 962, y: 686 }, ''),
    ),
  );
};
