/* Recovered from Tezarre Driver 1.1.31 - renderer module kqrD */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
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
      var o = {};
      if (null != r) for (var c in r) 'default' !== c && Object.hasOwnProperty.call(r, c) && e(o, r, c);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroEdit = void 0));
const o = r(require('react')),
  c = require('./../../../dj.js'),
  a = require('./../../../mobxStore/store.js'),
  i = require('mobx-react-lite'),
  s = require('./../../../res.js');
exports.MacroEdit = (e) => {
  const [t, r] = o.useState({}),
    { macroStore: n } = a.useStore(),
    u = (e) => {
      let t = [];
      return (
        e.macros.length > 0 && (t = t.concat(e.macros)),
        e.folders.length > 0 &&
          e.folders.map((e) => {
            t = t.concat(u(e));
          }),
        t
      );
    },
    [l, d] = o.useState({}),
    f = {};
  o.useEffect(() => {
    (u(n.macroList).map((e) => (f[e.localId ? e.localId : 0] = !1)), d(f));
  }, []);
  const { isKeyStore: m } = a.useStore();
  return i.useObserver(() =>
    o.default.createElement(c.dj.TreeView, {
      form: '可调整',
      options: n.macroList,
      selectedOptions: t,
      onChange: r,
      clickId: -1,
      checkBoxState: {
        checkState: e.forBidden ? { 1: !1 } : l,
        changeChecked: (t, r) => {
          var o;
          m.isKnobKey && 'touch_repeat' === (null === (o = r.value) || void 0 === o ? void 0 : o.macroType)
            ? a.mobxStore.toastStore.setErr(s.res.text.旋钮禁止设置按下播放方式的宏())
            : (l[t] ? e.setMacro(void 0) : e.setMacro(r),
              d(Object.assign(Object.assign({}, f), { [t]: !l[t] })));
        },
      },
    }),
  );
};
