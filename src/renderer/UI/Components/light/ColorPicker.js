/* Recovered from Tezarre Driver 1.1.31 - renderer module CLyo */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, l, r) {
          (void 0 === r && (r = l),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[l];
              },
            }));
        }
      : function (e, t, l, r) {
          (void 0 === r && (r = l), (e[r] = t[l]));
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
      var r = {};
      if (null != l) for (var a in l) 'default' !== a && Object.hasOwnProperty.call(l, a) && e(r, l, a);
      return (t(r, l), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ColorPicker = exports.PopUpBox = void 0));
const r = l(require('react')),
  a = require('./../../../dj.js'),
  o = require('./../../../res.js'),
  c = require('./ColorWheel.js'),
  n = require('./ColorWheel/example.js'),
  i = require('./../../../unitys/rgbNum.js');
((exports.PopUpBox = (e) =>
  r.default.createElement(
    r.Fragment,
    null,
    r.default.createElement(a.dj.Triangles, {
      w: 18,
      h: 18,
      x: e.triangleX || 154,
      y: 'down' === e.direction ? -13 : 335,
      direction: e.direction,
    }),
    r.default.createElement(a.dj.View, { w: 327, h: 335, form: '颜色选择框背景' }, e.children),
  )),
  (exports.ColorPicker = (e) => {
    const [t, l] = r.useState(e.color);
    r.useEffect(() => {
      l(e.color);
    }, [e.color]);
    const s = (e) => {
        d(n.hexToRgb(e));
      },
      d = (t) => {
        (l(t), console.log('setColor', t), e.setColor(i.rgbToNum(t.r, t.g, t.b)));
      },
      [u, b] = r.useState(!1);
    return r.default.createElement(
      a.dj.View,
      null,
      r.default.createElement(a.dj.Text, {
        h: 20,
        x: 22,
        y: 42,
        type: 'SubTitle',
        text: o.res.string.当前调节颜色,
      }),
      r.default.createElement(a.dj.ColorBlock, {
        w: 18,
        h: 18,
        x: 121,
        y: 45,
        bg: `rgb(${t.r},${t.g},${t.b})`,
      }),
      r.default.createElement(
        a.dj.View,
        { x: 26, y: 106, w: 120, h: 120 },
        r.default.createElement(c.ColorWheel, {
          width: 120,
          color: t,
          setColor: l,
          mouseUp: () => {
            (console.log('!!!!', 'rgb', t, 'p.color', e.color),
              (t.r === e.color.r && t.g === e.color.g && t.b === e.color.b) || d(t));
          },
        }),
      ),
      r.default.createElement(a.dj.Text, {
        w: 45,
        h: 20,
        x: 21,
        y: 278,
        type: 'SubTitle',
        text: o.res.string.预设,
      }),
      r.default.createElement(
        a.dj.FlexView,
        { w: 121, h: 98, x: 181, y: 116, flexDirection: 'column', justifyContent: 'space-between' },
        r.default.createElement(
          a.dj.View,
          { relative: !0, w: 121, h: 22 },
          r.default.createElement(a.dj.Text, { w: 36, h: 22, type: 'SubTitle', text: 'R' }),
          r.default.createElement(a.dj.SpinBox, {
            w: 74,
            h: 22,
            x: 47,
            min: 0,
            max: 255,
            value: t.r,
            step: 1,
            mouseEnter: () => {
              b(!0);
            },
            mouseLeave: () => {
              b(!1);
            },
            setValue: (e) => l(Object.assign(Object.assign({}, t), { r: e })),
            changeFinished: (l) => {
              t.r === e.color.r && u
                ? d(Object.assign(Object.assign({}, t), { r: l }))
                : t.r !== e.color.r && d(Object.assign(Object.assign({}, t), { r: l }));
            },
            setEdit: e.setEdit,
          }),
        ),
        r.default.createElement(
          a.dj.View,
          { relative: !0, w: 121, h: 22 },
          r.default.createElement(a.dj.Text, { w: 36, h: 22, type: 'SubTitle', text: 'G' }),
          r.default.createElement(a.dj.SpinBox, {
            w: 74,
            h: 22,
            x: 47,
            min: 0,
            max: 255,
            value: t.g,
            step: 1,
            mouseEnter: () => {
              b(!0);
            },
            mouseLeave: () => {
              b(!1);
            },
            setValue: (e) => {
              l(Object.assign(Object.assign({}, t), { g: e }));
            },
            changeFinished: (l) => {
              t.g === e.color.g && u
                ? d(Object.assign(Object.assign({}, t), { g: l }))
                : t.g !== e.color.g && d(Object.assign(Object.assign({}, t), { g: l }));
            },
            setEdit: e.setEdit,
          }),
        ),
        r.default.createElement(
          a.dj.View,
          { relative: !0, w: 121, h: 22 },
          r.default.createElement(a.dj.Text, { w: 36, h: 22, type: 'SubTitle', text: 'B' }),
          r.default.createElement(a.dj.SpinBox, {
            w: 74,
            h: 22,
            x: 47,
            min: 0,
            max: 255,
            value: t.b,
            step: 1,
            mouseEnter: () => {
              b(!0);
            },
            mouseLeave: () => {
              b(!1);
            },
            setValue: (e) => l(Object.assign(Object.assign({}, t), { b: e })),
            changeFinished: (l) => {
              t.b === e.color.b && u
                ? d(Object.assign(Object.assign({}, t), { b: l }))
                : t.b !== e.color.b && d(Object.assign(Object.assign({}, t), { b: l }));
            },
            setEdit: e.setEdit,
          }),
        ),
      ),
      r.default.createElement(
        a.dj.FlexView,
        { w: 232, h: 22, x: 78, y: 278, justifyContent: 'space-between' },
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#FF0000',
          clickHandle: () => s('#FF0000'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#FFA500',
          clickHandle: () => s('#FFA500'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#FFFF00',
          clickHandle: () => s('#FFFF00'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#00FF00',
          clickHandle: () => s('#00FF00'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#007FFF',
          clickHandle: () => s('#007FFF'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#0000FF',
          clickHandle: () => s('#0000FF'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#8B00FF',
          clickHandle: () => s('#8B00FF'),
        }),
        r.default.createElement(a.dj.ColorBlock, {
          relative: !0,
          w: 22,
          h: 22,
          bg: '#000000',
          clickHandle: () => s('#000000'),
        }),
      ),
    );
  }));
