/* Recovered from Tezarre Driver 1.1.31 - renderer module ljke */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, a) {
          (void 0 === a && (a = r),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, a) {
          (void 0 === a && (a = r), (e[a] = t[r]));
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
      var a = {};
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(a, r, n);
      return (t(a, r), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ConfigurationBox = void 0));
const a = r(require('react')),
  n = require('./../../../dj.js'),
  i = require('./../../../res.js'),
  o = require('./../../store.js'),
  s = require('./../../../mobxStore/store.js'),
  c = require('mobx-react-lite'),
  l = require('./../../../appConfig.js');
exports.ConfigurationBox = (e) => {
  const { configurationOpen: t, shareOpen: r } = e,
    { configStore: u, deviceStore: d } = s.useStore(),
    [f, m] = a.useState({ state: !1, name: '' });
  return c.useObserver(() =>
    a.default.createElement(
      n.dj.View,
      { h: 70, form: e.config.localId === d.currentConfig.localId ? '被选中' : 'DefaultBackground' },
      f.state
        ? a.default.createElement(n.dj.TextInput, {
            relative: !0,
            w: 180,
            h: 20,
            x: 38,
            y: 25,
            autoFocus: f.state,
            usePlaceholder: i.res.useString.请输入新的配置名称,
            type: '重命名',
            value: f.name,
            onChange: (e) => {
              if (' ' === e.target.value.charAt(0)) {
                s.mobxStore.toastStore.setErr(i.res.text.配置命名不能以空格开头());
                const t = e.target.value.substr(1);
                e.target.value = t;
              }
              m(Object.assign(Object.assign({}, f), { name: e.target.value }));
            },
            inputFinished: () => {
              ('' !== f.name &&
                ((e.config.name = f.name), u.saveConfig(e.config), m({ state: !1, name: '' })),
                m({ state: !1, name: f.name }));
            },
          })
        : a.default.createElement(n.dj.Text, {
            relative: !0,
            w: 200,
            h: 20,
            x: 38,
            y: 28,
            type: '配置页名称',
            text: e.config.name,
          }),
      !f.state && a.default.createElement(n.dj.View, { clickHandle: e.clickHandle }, ''),
      a.default.createElement(
        n.dj.FlexView,
        { w: 83, h: 20, x: 238, y: 27, justifyContent: 'space-between', alignItems: 'center' },
        a.default.createElement(n.dj.Button, {
          relative: !0,
          w: 14,
          h: 14,
          img: { size: { w: 14, h: 14 }, src: i.res.img.bottom_rename },
          isHightLight: !1,
          clickHandle: () => {
            m(Object.assign(Object.assign({}, f), { state: !f.state }));
          },
        }),
        !l.blockCloud &&
          a.default.createElement(n.dj.Button, {
            relative: !0,
            w: 14,
            h: 14,
            img: { size: { w: 14, h: 14 }, src: i.res.img.bottom_share },
            clickHandle: () => (
              e.sharConfigClick(),
              o.store.setState.configurationOpen(!t),
              void o.store.setState.shareOpen(!r)
            ),
          }),
        a.default.createElement(n.dj.Button, {
          relative: !0,
          w: 14,
          h: 14,
          img: { size: { w: 14, h: 14 }, src: i.res.img.bottom_delete },
          clickHandle: e.onDelete,
        }),
      ),
    ),
  );
};
