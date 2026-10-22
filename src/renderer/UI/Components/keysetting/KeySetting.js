/* Recovered from Tezarre Driver 1.1.31 - renderer module rGxP */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, n) {
          (void 0 === n && (n = i),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, n) {
          (void 0 === n && (n = i), (e[n] = t[i]));
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
  i =
    (this && this.__importStar) ||
    function (i) {
      if (i && i.__esModule) return i;
      var n = {};
      if (null != i) for (var o in i) 'default' !== o && Object.hasOwnProperty.call(i, o) && e(n, i, o);
      return (t(n, i), n);
    },
  n =
    (this && this.__awaiter) ||
    function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, r) {
        function a(e) {
          try {
            s(n.next(e));
          } catch (t) {
            r(t);
          }
        }
        function d(e) {
          try {
            s(n.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function s(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(a, d);
        }
        s((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.KeySetting = void 0));
const o = i(require('react')),
  r = require('./../../../dj.js'),
  a = require('./../../../res.js'),
  d = require('./BasicFunction.js'),
  s = require('./KeyCombination.js'),
  l = require('./MacroEdit.js'),
  c = require('./../../../mobxStore/store.js'),
  u = require('mobx-react-lite'),
  y = require('mobx'),
  f = require('./mouseClickCom.js'),
  p = require('./FnFunction.js');
let g =
  'darwin' === process.platform
    ? [a.res.string.组合键, a.res.string.宏]
    : [a.res.string.组合键, a.res.string.宏, a.res.string.基本功能, a.res.string.鼠标];
const C = (e) => {
    let t = 0;
    switch (e) {
      case 'ctrl':
        t = 224;
        break;
      case 'alt':
        t = 226;
        break;
      case 'shift':
        t = 225;
        break;
      case 'win':
        t = 227;
        break;
      default:
        t = 0;
    }
    return t;
  },
  m = (e) => {
    switch (null == e ? void 0 : e.type) {
      case 'ConfigMacro':
        return 1;
      case 'ConfigFunction':
        return 2;
      case 'ConfigChangeToMouseBtn':
        return 3;
      default:
        return 0;
    }
  };
exports.KeySetting = (e) => {
  const [t, i] = o.useState(m(e.oldValue)),
    [h, k] = o.useState(!!e.oldValue && 'forbidden' === e.oldValue.type),
    [K, v] = o.useState(!1),
    [x, H] = o.useState({ hid: 0, specialKey1: 'none', specialKey2: 'none' }),
    [b, M] = o.useState(),
    [V, w] = o.useState(),
    [E, S] = o.useState(),
    [j, B] = o.useState(),
    { deviceStore: F, macroStore: _ } = c.useStore();
  o.useEffect(
    () =>
      y.autorun(() => {
        _.refreshMacroList();
      }),
    [],
  );
  let q = '',
    N = '';
  void 0 !== a.res.映射.hidCodeMapKeyName(e.keyHidCode) &&
    ((q = x.specialKey1.substring(0, 1).toUpperCase() + x.specialKey1.substring(1)),
    (N = x.specialKey2.substring(0, 1).toUpperCase() + x.specialKey2.substring(1)));
  const O = () => {
      const t = {
        type: 'combo',
        original: e.keyHidCode,
        skey: 'none',
        key: e.keyHidCode,
        key2: 0,
        index: e.index,
      };
      F.setKeyConfig(t);
    },
    { isKeyStore: P } = c.useStore();
  return (
    P.keyIsOpen || _.stopMouseEvent(),
    u.useObserver(() =>
      o.default.createElement(
        o.Fragment,
        null,
        o.default.createElement(r.dj.View, { form: '背景页', drag: !0 }, ''),
        o.default.createElement(
          r.dj.View,
          { w: 480, h: 431, x: 360, y: 150, form: '弹出框' },
          o.default.createElement(r.dj.Text, {
            h: 30,
            y: 24,
            text: e.title + a.res.text.键设置(),
            type: '弹框标题',
          }),
          o.default.createElement(r.dj.Line, { y: 65, lineColor: '按键设置' }),
          o.default.createElement(r.dj.Button, {
            x: 428,
            y: 28,
            w: 12,
            h: 12,
            img: { size: { w: 12, h: 12 }, src: a.res.img.close },
            clickHandle: () => {
              (e.closeHandle(), _.stoptHook());
            },
          }),
          o.default.createElement(
            r.dj.FlexView,
            { w: 300, h: 36, x: 91, y: 74, justifyContent: 'space-between', alignItems: 'center' },
            g.map((e, n) =>
              o.default.createElement(r.dj.Button, {
                relative: !0,
                key: n,
                isHightLight: t === n,
                w: 60,
                mode: '按键设置',
                text: e,
                clickHandle: () => {
                  (_.stoptHook(),
                    4 !== n || F.isFnMode ? i(n) : c.mobxStore.toastStore.setErr('需先开启Fn层'));
                },
              }),
            ),
          ),
          o.default.createElement(
            r.dj.View,
            { w: 399, h: 218, x: 41, y: 132, form: 'DefaultBackground' },
            g[t] === a.res.string.组合键
              ? o.default.createElement(s.KeyCombination, {
                  Cvalue: x,
                  setCValue: (e, t, i) => {
                    (H({ hid: e, specialKey1: t, specialKey2: i }), k(!1));
                  },
                  oldValue: e.oldValue && 'combo' === e.oldValue.type ? e.oldValue : void 0,
                  forBidden: h,
                })
              : null,
            g[t] === a.res.string.宏 &&
              o.default.createElement(l.MacroEdit, {
                setMacro: (e) => {
                  (M(e), k(!1));
                },
                forBidden: h,
              }),
            g[t] === a.res.string.基本功能 &&
              o.default.createElement(d.BasicFunction, {
                basic: V,
                setBasic: (e) => {
                  (w(e), k(!1));
                },
                oldValue: e.oldValue && 'ConfigFunction' === e.oldValue.type ? e.oldValue : void 0,
                forBidden: h,
              }),
            g[t] === a.res.string.鼠标 &&
              o.default.createElement(f.MouseClickCom, {
                cMouse: E,
                setcMouse: (e) => {
                  (S(e), k(!1));
                },
                oldValue: e.oldValue && 'ConfigChangeToMouseBtn' === e.oldValue.type ? e.oldValue : void 0,
                forBidden: h,
              }),
            g[t] === a.res.string.Fn功能 &&
              o.default.createElement(p.FnFunction, {
                func: j,
                setFunc: (e) => B(e),
                oldValue: e.oldValue && 'ConfigFunction' === e.oldValue.type ? e.oldValue : void 0,
                forBidden: !h,
              }),
          ),
          o.default.createElement(r.dj.CheckBox, {
            w: 100,
            h: 16,
            x: 44,
            y: 371,
            type: 'Normal',
            text: F.isFnMode ? a.res.string.未设置功能 : a.res.string.禁用按键,
            checkState: h,
            clickHandle: () => {
              (_.stoptHook(), k(!h), v(h));
            },
          }),
          o.default.createElement(r.dj.Button, {
            w: 84,
            h: 28,
            x: 258,
            y: 366,
            mode: 'Border',
            text: a.res.string.恢复默认,
            clickHandle: () => {
              (_.stoptHook(), O(), e.closeHandle());
            },
          }),
          o.default.createElement(r.dj.Button, {
            w: 84,
            h: 28,
            x: 356,
            y: 367,
            mode: 'Sparker',
            text: a.res.string.确定,
            clickHandle: () =>
              n(void 0, void 0, void 0, function* () {
                if ((_.stoptHook(), !0 === h))
                  return (
                    (() => {
                      const t = { type: 'forbidden', original: e.keyHidCode, index: e.index };
                      F.setKeyConfig(t);
                    })(),
                    void e.closeHandle()
                  );
                if (
                  g[t] === a.res.string.组合键 &&
                  (0 !== x.hid || 'none' !== x.specialKey1 || 'none' !== x.specialKey2)
                ) {
                  if (
                    (q === a.res.映射.hidCodeMapKeyName(e.keyHidCode) &&
                      'none' === x.specialKey2 &&
                      0 === x.hid) ||
                    ('none' === x.specialKey1 &&
                      'none' === x.specialKey2 &&
                      a.res.映射.hidCodeMapKeyName(x.hid) === a.res.映射.hidCodeMapKeyName(e.keyHidCode)) ||
                    ('none' === x.specialKey1 &&
                      N === a.res.映射.hidCodeMapKeyName(e.keyHidCode) &&
                      0 === x.hid)
                  )
                    return (O(), void e.closeHandle());
                  if (g[t] === a.res.string.组合键)
                    return (
                      (() => {
                        if (0 === x.hid && 'none' === x.specialKey1 && 'none' === x.specialKey2) return;
                        const t = 'none' !== x.specialKey1 && 'none' !== x.specialKey2;
                        let i = 'none' === x.specialKey1 ? x.specialKey2 : x.specialKey1,
                          n = t ? C(x.specialKey2) : x.hid,
                          o = t ? x.hid : 0;
                        const r = {
                          type: 'combo',
                          original: e.keyHidCode,
                          skey: 167837696 == n ? 'none' : i,
                          key: n,
                          key2: 167837696 == n ? 0 : o,
                          index: e.index,
                        };
                        (q === a.res.映射.hidCodeMapKeyName(e.keyHidCode) &&
                          'none' === x.specialKey2 &&
                          0 === x.hid) ||
                          ('none' === x.specialKey1 &&
                            'none' === x.specialKey2 &&
                            a.res.映射.hidCodeMapKeyName(x.hid) ===
                              a.res.映射.hidCodeMapKeyName(e.keyHidCode)) ||
                          ('none' === x.specialKey1 &&
                            N === a.res.映射.hidCodeMapKeyName(e.keyHidCode) &&
                            0 === x.hid) ||
                          F.setKeyConfig(r);
                      })(),
                      void e.closeHandle()
                    );
                }
                return g[t] === a.res.string.宏 && b
                  ? (void 0 !== b &&
                      (void 0 === b.value &&
                        (b.value = {
                          type: 'ConfigMacro',
                          original: e.keyHidCode,
                          macroType: 'touch_repeat',
                          repeatCount: 0,
                          macro: [],
                          index: e.index,
                        }),
                      (b.value.original = e.keyHidCode),
                      (b.value.index = e.index),
                      F.setKeyConfig(Object.assign({}, b.value))),
                    void e.closeHandle())
                  : g[t] === a.res.string.基本功能 && V
                    ? ((() => {
                        if (void 0 === V) return;
                        const t = { original: e.keyHidCode, type: 'ConfigFunction', key: V, index: e.index };
                        F.setKeyConfig(t);
                      })(),
                      void e.closeHandle())
                    : g[t] === a.res.string.鼠标 && E
                      ? ((() => {
                          if (void 0 === E) return;
                          const t = {
                            original: e.keyHidCode,
                            type: 'ConfigChangeToMouseBtn',
                            key: E,
                            index: e.index,
                          };
                          F.setKeyConfig(t);
                        })(),
                        void e.closeHandle())
                      : g[t] === a.res.string.Fn功能 && j
                        ? ((() => {
                            if (void 0 === j) return;
                            const t = {
                              original: e.keyHidCode,
                              type: 'ConfigFunction',
                              key: j,
                              index: e.index,
                            };
                            F.setKeyConfig(t);
                          })(),
                          void e.closeHandle())
                        : (!h && K && O(), void e.closeHandle());
              }),
          }),
        ),
      ),
    )
  );
};
