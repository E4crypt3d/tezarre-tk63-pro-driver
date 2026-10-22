/* Recovered from Tezarre Driver 1.1.31 - renderer module wvM4 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, o, r, t) {
          (void 0 === t && (t = r),
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return o[r];
              },
            }));
        }
      : function (e, o, r, t) {
          (void 0 === t && (t = r), (e[t] = o[r]));
        }),
  o =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, o) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: o });
        }
      : function (e, o) {
          e.default = o;
        }),
  r =
    (this && this.__importStar) ||
    function (r) {
      if (r && r.__esModule) return r;
      var t = {};
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(t, r, i);
      return (o(t, r), t);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.dj2 = exports.dj = void 0));
const t = r(require('react')),
  i = require('./dj/View.js'),
  n = require('./FlexView.js'),
  a = require('./Text.js'),
  d = require('./List.js'),
  u = require('./CheckBox.js'),
  c = require('./Slider.js'),
  l = require('./SpinBox.js'),
  x = require('./RouterLink.js'),
  p = require('./Line.js'),
  b = require('./Ul.js'),
  s = require('./Img.js'),
  g = require('./Button.js'),
  h = require('./VerticalLine.js'),
  m = require('./ColorBlock.js'),
  B = require('./ComboBox.js'),
  w = require('./TextArea.js'),
  f = require('./TreeView.js'),
  k = require('./MacroButton.js'),
  y = require('./MacroContextMenu.js'),
  q = require('./MacroContextMenu.js'),
  S = require('./SearchBar.js'),
  C = require('./SchemeItem.js'),
  v = require('./TextInput.js'),
  L = require('./UserView.js'),
  V = require('./ColorWheel.js'),
  T = require('./Triangles.js'),
  I = require('./RadioButton.js'),
  M = require('./ContextMenuView.js'),
  R = require('./Rotate.js'),
  E = require('./NormalList.js'),
  j = require('./PageList.js'),
  O = require('./KeyboardBlock.js'),
  P = require('./Progress.js'),
  _ = require('./RedDot.js'),
  z = require('ramda'),
  U = require('./NumberInput.js'),
  D = require('./../UI/utils/LightRange.js'),
  F = require('./switch.js'),
  A = require('./../UI/Components/helpPoint/helpBox.js'),
  W = {
    DefaultBackground: { background: '#121212', border: 'none', boxShadow: 'none', opacity: 1 },
    弹出框: { background: '#1c1c1c', border: 'none', boxShadow: 'none', opacity: 1 },
    EmptyBackground: { background: 'transparent', border: 'none', boxShadow: 'none', opacity: 1 },
    MacroBackground: { background: '#201f1f', border: 'none', boxShadow: 'none', opacity: 1 },
    Border: { background: 'transparent', border: 'solid 1px #201f1f', boxShadow: 'none', opacity: 1 },
    配置页: {
      background: '#121212',
      border: 'none',
      boxShadow: '2px 0px 2px 0px #1f1f1f,-2px 0px 2px 0px #1f1f1f',
      opacity: 1,
    },
    背景页: { background: '#121212', border: 'none', boxShadow: 'none', opacity: 0.85 },
    颜色选择框背景: { background: '#252525', border: 'none', boxShadow: 'none', opacity: 1 },
    测试: { background: 'green', border: 'none', boxShadow: 'none', opacity: 1 },
    可调整: { background: '#121212', border: 'none', boxShadow: 'none', opacity: 1 },
    loading: { background: '#121212', border: 'none', boxShadow: 'none', opacity: 0.7 },
    被选中: {
      background: 'linear-gradient(90deg,#1f1e1e 0%, #121212 100%)',
      border: 'none',
      boxShadow: 'none',
      opacity: 1,
    },
    用户协议: { background: 'transparent', border: '1px solid #393939', boxShadow: 'none', opacity: 1 },
  },
  N = (e) => (o) =>
    t.createElement(
      'div',
      {
        style: {
          position: void 0 === o.relative ? 'absolute' : 'relative',
          left: void 0 === o.x ? 0 : o.x,
          top: void 0 === o.y ? 0 : o.y,
          width: void 0 === o.w ? '100%' : o.w,
          height: void 0 === o.h ? '100%' : o.h,
          display: o.display ? o.display : 'block',
          background: W[o.form ? o.form : 'EmptyBackground'].background,
          border: W[o.form ? o.form : 'EmptyBackground'].border,
          opacity: W[o.form ? o.form : 'EmptyBackground'].opacity,
          boxShadow: W[o.form ? o.form : 'EmptyBackground'].boxShadow,
          marginRight: o.marginRight ? o.marginRight : '',
          zIndex: void 0 === o.zIndex ? 1 : o.zIndex,
        },
      },
      t.createElement(e, Object.assign({}, o)),
    ),
  K = (e) => z.mapObjIndexed(N, e);
exports.dj = K({
  View: i.View,
  TextWarn: a.TextWarn,
  Text: a.Text,
  TextEll: a.TextEll,
  List: d.List,
  FlexView: n.FlexView,
  FlexColorView: n.FlexColorView,
  FlexView2: n.FlexView2,
  CheckBox: u.CheckBox,
  CheckBox2: u.CheckBox2,
  DazzleColorCheckBox: u.DazzleColorCheckBox,
  Slider: c.Slider,
  SpinBox: l.SpinBox,
  RouterLink: x.RouterLink,
  Line: p.Line,
  Ul: b.Ul,
  Img: s.Img,
  Button: g.Button,
  ButtonELL: g.ButtonELL,
  VerticalLine: h.VerticalLine,
  ColorBlock: m.ColorBlock,
  ComboBox: B.ComboBox,
  TextArea: w.TextArea,
  TreeView: f.TreeView,
  MacroButton: k.MacroButton,
  MacroContextMenu: y.MacroContextMenu,
  AddMacroContextMenu: q.AddMacroContextMenu,
  SearchBar: S.SearchBar,
  SchemeItem: C.SchemeItem,
  TextInput: v.TextInput,
  TextSetInput: v.TextSetInput,
  UserView: L.UserView,
  ColorWheel: V.ColorWheel,
  Triangles: T.Triangles,
  RadioButton: I.RadioButton,
  ContextMenuView: M.ContextMenuView,
  Rotate: R.Rotate,
  NormalList: E.NormalList,
  PageList: j.PageList,
  KeyboardBlock: O.KeyboardBlock,
  Progress: P.Progress,
  RedDot: _.RedDot,
  TimeInput: U.TimeInput,
  LightRange: D.LightRange,
  SwitchButton: F.SwitchButton,
  HelpBox: A.HelpBox,
});
const H = (e) => (o) =>
    t.createElement(
      'div',
      {
        style: {
          position: void 0 === o.relative ? 'absolute' : 'relative',
          left: void 0 === o.x ? 0 : o.x,
          top: void 0 === o.y ? 0 : o.y,
          width: void 0 === o.w ? '100%' : o.w,
          height: void 0 === o.h ? '100%' : o.h,
          display: o.display ? o.display : 'block',
          background: W[o.form ? o.form : 'EmptyBackground'].background,
          border: W[o.form ? o.form : 'EmptyBackground'].border,
          opacity: W[o.form ? o.form : 'EmptyBackground'].opacity,
          boxShadow: W[o.form ? o.form : 'EmptyBackground'].boxShadow,
          zIndex: 999,
        },
      },
      t.createElement(e, Object.assign({}, o)),
    ),
  G = (e) => z.mapObjIndexed(H, e);
exports.dj2 = G({ View2: i.View2 });
