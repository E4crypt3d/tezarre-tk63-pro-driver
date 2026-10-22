/* Recovered from Tezarre Driver 1.1.31 - renderer module vUj9 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, l, a) {
          (void 0 === a && (a = l),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[l];
              },
            }));
        }
      : function (e, t, l, a) {
          (void 0 === a && (a = l), (e[a] = t[l]));
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
  l =
    (this && this.__importStar) ||
    function (l) {
      if (l && l.__esModule) return l;
      var a = {};
      if (null != l) for (var r in l) 'default' !== r && Object.hasOwnProperty.call(l, r) && e(a, l, r);
      return (t(a, l), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.KeyCombination = void 0));
const a = l(require('react')),
  r = require('./../../../dj.js'),
  i = require('./../../../res.js'),
  u = require('./../../../mobxStore/store.js'),
  n = require('mobx-react-lite'),
  c = require('mobx'),
  d = require('./../../../sdk/DriverIO/DeviceAPI/DeviceInterface.js'),
  o = require('./../../../List.js'),
  s = require('./../../../映射.js');
exports.KeyCombination = (e) => {
  const { macroStore: t } = u.useStore(),
    { isKeyStore: l } = u.useStore();
  let y = '';
  void 0 !== e.oldValue &&
    ('none' !== e.oldValue.skey && (y = e.oldValue.skey),
    0 !== e.oldValue.key &&
      (y +=
        '' === y
          ? i.res.映射.hidCodeMapKeyName(e.oldValue.key)
          : '+' + i.res.映射.hidCodeMapKeyName(e.oldValue.key)),
    0 !== e.oldValue.key2 &&
      (y +=
        '' === y
          ? i.res.映射.hidCodeMapKeyName(e.oldValue.key2)
          : '+' + i.res.映射.hidCodeMapKeyName(e.oldValue.key2)));
  const h = (t) => e.Cvalue.specialKey1 === t || e.Cvalue.specialKey2 === t,
    f = (t) => {
      h(t)
        ? ((t) => {
            e.Cvalue.specialKey1 === t
              ? e.setCValue(e.Cvalue.hid, 'none', e.Cvalue.specialKey2)
              : e.setCValue(e.Cvalue.hid, e.Cvalue.specialKey1, 'none');
          })(t)
        : ((t) => {
            'none' === e.Cvalue.specialKey1
              ? e.setCValue(e.Cvalue.hid, t, e.Cvalue.specialKey2)
              : e.setCValue(e.Cvalue.hid, e.Cvalue.specialKey1, t);
          })(t);
    };
  (a.useEffect(() => c.autorun(() => {}), [t.currentSingleValue]),
    (document.onkeydown = () => {
      l.keyIsOpen && t.startSingleHook();
    }),
    (document.onkeyup = () => {
      l.keyIsOpen &&
        (t.currentSingleValue !== d.MouseKey.Left &&
          t.currentSingleValue !== d.MouseKey.Middle &&
          t.currentSingleValue !== d.MouseKey.Right &&
          0 !== t.currentSingleValue &&
          e.setCValue(t.currentSingleValue, e.Cvalue.specialKey1, e.Cvalue.specialKey2),
        t.cleanSingleValue());
    }),
    t.startSingleHook(),
    t.cleanSingleValue());
  const [m, C] = a.useState(!1),
    p = s.getKeyboradList();
  return n.useObserver(() =>
    a.default.createElement(
      a.Fragment,
      null,
      a.default.createElement(
        r.dj.FlexView,
        { w: 73, h: 134, x: 57, y: 48, flexDirection: 'column' },
        a.default.createElement(r.dj.CheckBox2, {
          relative: !0,
          type: 'Normal',
          text: 'Ctrl',
          checkState: h('ctrl') && !e.forBidden,
          clickHandle: () => f('ctrl'),
        }),
        a.default.createElement(r.dj.CheckBox2, {
          relative: !0,
          type: 'Normal',
          text: 'Alt',
          checkState: h('alt') && !e.forBidden,
          clickHandle: () => f('alt'),
        }),
        a.default.createElement(r.dj.CheckBox2, {
          relative: !0,
          type: 'Normal',
          text: 'Shift',
          checkState: h('shift') && !e.forBidden,
          clickHandle: () => f('shift'),
        }),
        a.default.createElement(r.dj.CheckBox2, {
          relative: !0,
          type: 'Normal',
          text: 'Win',
          checkState: h('win') && !e.forBidden,
          clickHandle: () => f('win'),
        }),
      ),
      a.default.createElement(r.dj.VerticalLine, { w: 1, h: 134, x: 159, y: 54 }),
      a.default.createElement(r.dj.Text, { w: 11, h: 18, x: 192, y: 143, type: '组合键', text: '+' }),
      a.default.createElement(r.dj.TextSetInput, {
        usePlaceholder: i.res.useString.请输入按键,
        w: 117,
        h: 26,
        x: 229,
        y: 143,
        type: '组合键按键',
        value: e.forBidden ? '' : i.res.映射.hidCodeMapKeyName(e.Cvalue.hid) || '',
        onChange: () => {},
        inputFocus: () => {},
        inputFinished: () => {},
      }),
      a.default.createElement(r.dj.Button, {
        w: 24,
        h: 24,
        x: 350,
        y: 143,
        img: { size: { w: 20, h: 20 }, src: i.res.img.keyboard_kc },
        mode: '侧边栏',
        isHightLight: m,
        clickHandle: () => {
          C(!m);
        },
      }),
      a.default.createElement(r.dj.Text, { text: y, type: '已修改的按键值', x: 57, y: 7, h: 36 }),
      m &&
        a.default.createElement(
          r.dj2.View2,
          { w: 160, h: 411, x: 453, y: -132 },
          a.default.createElement(o.List2, {
            w: 160,
            h: 431,
            itemCount: p.length,
            scrollToIndex: 0,
            itemSize: () => 30,
            renderItem: (t) =>
              a.default.createElement(r.dj.CheckBox2, {
                relative: !0,
                key: t,
                h: 32,
                type: 'Normal',
                text: p[t].value,
                checkState: e.Cvalue.hid === p[t].hidCode,
                clickHandle: () => {
                  e.setCValue(p[t].hidCode, e.Cvalue.specialKey1, e.Cvalue.specialKey2);
                },
              }),
          }),
        ),
    ),
  );
};
