/* Recovered from Tezarre Driver 1.1.31 - renderer module L1zb */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, o, r) {
          (void 0 === r && (r = o),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[o];
              },
            }));
        }
      : function (e, t, o, r) {
          (void 0 === r && (r = o), (e[r] = t[o]));
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
  o =
    (this && this.__importStar) ||
    function (o) {
      if (o && o.__esModule) return o;
      var r = {};
      if (null != o) for (var n in o) 'default' !== n && Object.hasOwnProperty.call(o, n) && e(r, o, n);
      return (t(r, o), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.KeyboardHome = exports.KeyboardBlocks = void 0));
const r = o(require('react')),
  n = require('./../../../res.js'),
  d = require('./../../../dj.js'),
  i = require('./../keysetting/KeySetting.js'),
  l = require('./../../utils/WithProps.js'),
  a = require('./../../../mobxStore/store.js'),
  u = require('./../keyPath.js'),
  c = require('./../../../unitys/getDevLyaer.js'),
  s = require('mobx-react-lite'),
  y = require('./../../../appConfig.js'),
  v = require('./../keysetting/BasicFunction.js');
exports.KeyboardBlocks = (e) => {
  const t = (t, o) => {
      var r, n;
      let d = { color: '', type: 'Default' };
      return (
        (d = (
          null === (r = e.changedValue.find((e) => e.hid === o.value && e.index === o.index)) || void 0 === r
            ? void 0
            : r.mode
        )
          ? null === (n = e.changedValue.find((e) => e.hid === o.value && e.index === o.index)) ||
            void 0 === n
            ? void 0
            : n.mode
          : ((e) => {
              switch (e) {
                case 'Home':
                default:
                  return { color: '', type: 'Default' };
                case 'Monochrome':
                  return { color: '#4cd7c7', type: 'CustomLight' };
              }
            })(e.mode)),
        ((0 === a.mobxStore.pageStore.pageIndex && 167837696 === t) || o.ban) &&
          t === o.value &&
          (d = { color: '#ff0000', type: 'Forbidden' }),
        d
      );
    },
    { isKeyStore: o } = a.useStore();
  return s.useObserver(() =>
    r.default.createElement(
      r.Fragment,
      null,
      e.deviceLayout.layout.map(
        (n, i) =>
          ((e) => {
            if (void 0 !== e.value) {
              if (0 === a.mobxStore.pageStore.pageIndex) return !0;
              if (1 === a.mobxStore.pageStore.pageIndex && !e.knob) return !0;
            }
            return !1;
          })(n) &&
          r.default.createElement(d.dj.KeyboardBlock, {
            key: i,
            w: n.w,
            h: n.h,
            x: n.x + e.deviceLayout.delt.deltX,
            y: -n.y + e.deviceLayout.delt.deltY,
            mode: t(n.value, n),
            clickHandle: () => {
              (o.setIsKnobKey(!!n.knob && n.knob),
                e.clickHandle &&
                  e.clickHandle(
                    n.value,
                    n.keyName,
                    n.x + e.deviceLayout.delt.deltX,
                    -n.y + e.deviceLayout.delt.deltY,
                    n.w,
                    n.h,
                    n.index,
                  ));
            },
            mouseDown: () => {
              e.mouseDown &&
                e.mouseDown(
                  n.value,
                  n.keyName,
                  n.x + e.deviceLayout.delt.deltX,
                  -n.y + e.deviceLayout.delt.deltY,
                  n.w,
                  n.h,
                  n.index,
                );
            },
            mouseUp: () => {
              e.mouseUp &&
                e.mouseUp(
                  n.value,
                  n.keyName,
                  n.x + e.deviceLayout.delt.deltX,
                  -n.y + e.deviceLayout.delt.deltY,
                  n.w,
                  n.h,
                  n.index,
                );
            },
          }),
      ),
    ),
  );
};
const f = (e) => {
  var t, o;
  const [l, f] = r.useState({ open: !1, keyHidCode: 0, text: '', index: void 0 }),
    { deviceStore: x } = a.useStore(),
    { otherStore: m } = a.useStore(),
    p = c.getDevLayer(null === (t = x.currentDev) || void 0 === t ? void 0 : t.deviceType.id),
    h = new Array();
  for (var g = 0; g < p; g++) h.push(n.res.text.标准层() + '_' + (g + 1));
  const b = c.getDevFnLayer(null === (o = x.currentDev) || void 0 === o ? void 0 : o.deviceType.id),
    k = new Array();
  for (g = 0; g < b; g++) k.push(n.res.text.Fn层() + '_' + (g + 1));
  const S = u.getKeyPath(),
    { isKeyStore: w } = a.useStore(),
    E = (t, o, r) => {
      for (let n = 0; n < e.deviceLayout.layout.length; n++) {
        const o = e.deviceLayout.layout[n];
        if (o.value === t && o.knob && x.isFnMode) return '#ff0000';
      }
      return 167837696 === t
        ? '#ff0000'
        : 'ConfigUnknown' == o && x.isFnMode
          ? '#ff0000'
          : 'forbidden' === o
            ? '#ffff00'
            : 'ConfigFunction' === o && -1 === v.basicFunName.findIndex((e) => e === r)
              ? '#ff0000'
              : '#4cd7c7';
    };
  return s.useObserver(() => {
    var t, o, u, c, s;
    return r.default.createElement(
      r.Fragment,
      null,
      r.default.createElement(d.dj.Text, { h: 18, type: '键盘提示', text: n.res.string.带 }),
      r.default.createElement(d.dj.Button, { w: 14, h: 14, x: 16, y: 2, mode: 'KeyboardExample' }),
      r.default.createElement(d.dj.Text, {
        h: 18,
        x: 36,
        type: '键盘提示',
        text: n.res.string.背景的按键表示该按键的默认功能已被更改,
      }),
      0 !== b &&
        r.default.createElement(
          d.dj.View,
          { h: 20, y: 40 },
          r.default.createElement(d.dj.Text, { w: 60, x: 0, type: 'SubTitle', text: n.res.text.Fn层() }),
          r.default.createElement(d.dj.SwitchButton, {
            x: y.blockCloud ? 60 : 50,
            skey: x.isFnMode,
            clickHandle: () => {
              x.setIsFnMode(!x.isFnMode);
            },
          }),
        ),
      p > 1 &&
        !x.isFnMode &&
        r.default.createElement(
          d.dj.View,
          { w: 132, h: 28, x: 744, y: 9 },
          r.default.createElement(d.dj.ComboBox, {
            w: 132,
            selectedValue: h[x.currentProfile],
            onChange: (e) => {
              e !== x.currentProfile && x.setCurrentProfile(e);
            },
            modes: h,
            clickHandle: () => {},
          }),
        ),
      b > 1 &&
        x.isFnMode &&
        r.default.createElement(
          d.dj.View,
          { w: 132, h: 28, x: 744, y: 9 },
          r.default.createElement(d.dj.ComboBox, {
            w: 132,
            selectedValue: k[x.fnIndex],
            onChange: (e) => {
              e !== x.fnIndex && x.setCurrentFnIndex(e);
            },
            modes: k,
            clickHandle: () => {},
          }),
        ),
      (null === (o = null === (t = x.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
      void 0 === o
        ? void 0
        : o.deBounce) &&
        r.default.createElement(
          d.dj.View,
          { w: 334, h: 28, x: 27, y: 388 },
          r.default.createElement(d.dj.Text, {
            w: 100,
            type: 'SubTitle',
            text: n.res.string.按键灵敏度,
            isDisabled: !1,
          }),
          r.default.createElement(d.dj.LightRange, {
            x: 28,
            min: 1,
            max: null === (u = x.currentDev) || void 0 === u ? void 0 : u.deviceType.otherSetting.deBounce,
            leftDescription: n.res.text.快(),
            rightDescription: n.res.text.慢(),
            value:
              void 0 === m.currentOther.deBounce
                ? 0
                : m.currentOther.deBounce >
                    (null === (c = x.currentDev) || void 0 === c
                      ? void 0
                      : c.deviceType.otherSetting.deBounce)
                  ? null === (s = x.currentDev) || void 0 === s
                    ? void 0
                    : s.deviceType.otherSetting.deBounce
                  : m.currentOther.deBounce,
            setValue: (e) => {
              0 !== e ? x.setDeBounce(e) : x.setDeBounce(1);
            },
            isDisabled: !1,
          }),
        ),
      r.default.createElement(
        d.dj.View,
        { w: 871, h: 288, x: 0, y: 74 },
        r.default.createElement(d.dj.Img, {
          w: 871,
          h: 288,
          imgBg: e.deviceName ? S : n.res.img.MG912,
          type: '完全覆盖背景区',
        }),
        r.default.createElement(exports.KeyboardBlocks, {
          deviceLayout: e.deviceLayout,
          changedValue: e.keyValue.map((e) => ({
            index: e.index,
            hid: e.original,
            mode: { color: E(e.original, e.type, e.key), type: 'CustomLight' },
          })),
          clickHandle: (t, o, r, d, i, l, u) => {
            const c = e.keyValue.find((e) => e.original === t && e.index === u);
            console.error(t, u, c);
            for (let s = 0; s < e.deviceLayout.layout.length; s++) {
              const o = e.deviceLayout.layout[s];
              if (o.value === t && o.knob && x.isFnMode)
                return void a.mobxStore.toastStore.setErr(n.res.text.系统按键无法修改());
              if (o.value === t && o.ban)
                return void a.mobxStore.toastStore.setErr(n.res.text.系统按键无法修改());
            }
            'ConfigUnknown' === (null == c ? void 0 : c.type) && x.isFnMode
              ? a.mobxStore.toastStore.setErr(n.res.text.系统按键无法修改())
              : 167837696 !== t &&
                  ('ConfigFunction' !== (null == c ? void 0 : c.type) ||
                    -1 !== v.basicFunName.findIndex((e) => e === (null == c ? void 0 : c.key)))
                ? (f({ open: !0, keyHidCode: t, text: o, index: u }), w.setIsOpen(!0))
                : a.mobxStore.toastStore.setErr(n.res.text.系统按键无法修改());
          },
          mode: 'Home',
        }),
      ),
      w.keyIsOpen &&
        r.default.createElement(
          d.dj2.View2,
          { w: 1200, h: 730, x: -268, y: -146 },
          r.default.createElement(i.KeySetting, {
            keyHidCode: l.keyHidCode,
            title: l.text,
            oldValue: e.keyValue.find((e) => e.original === l.keyHidCode && e.index === l.index),
            closeHandle: () => {
              (f({ open: !1, keyHidCode: 0, text: '', index: void 0 }), w.setIsOpen(!1));
            },
            index: l.index,
          }),
        ),
    );
  });
};
exports.KeyboardHome = l.withProps(f, l.homeData);
