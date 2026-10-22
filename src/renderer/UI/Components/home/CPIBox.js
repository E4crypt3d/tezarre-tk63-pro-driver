/* Recovered from Tezarre Driver 1.1.31 - renderer module EBCl */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, a, l) {
          (void 0 === l && (l = a),
            Object.defineProperty(e, l, {
              enumerable: !0,
              get: function () {
                return t[a];
              },
            }));
        }
      : function (e, t, a, l) {
          (void 0 === l && (l = a), (e[l] = t[a]));
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
      var l = {};
      if (null != a) for (var r in a) 'default' !== r && Object.hasOwnProperty.call(a, r) && e(l, a, r);
      return (t(l, a), l);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.CPIBox = void 0));
const l = a(require('react')),
  r = require('./../../../dj.js');
exports.CPIBox = (e) => {
  const [t, a] = l.useState(e.value);
  l.useEffect(() => {
    a(e.value);
  }, [e.value]);
  const { index: n, min: u, max: i, step: c } = e;
  return l.default.createElement(
    r.dj.View,
    { relative: !0 },
    l.default.createElement(r.dj.Text, { y: 1, type: 'CPI序号', text: n + 1 }),
    l.default.createElement(r.dj.CheckBox, {
      w: 18,
      h: 18,
      x: 26,
      y: 4,
      type: 'Normal',
      checkState: t > 0,
      clickHandle: () => {
        t <= 0 ? e.setValue(Math.floor((i - u) / 2)) : e.setValue(0);
      },
    }),
    l.default.createElement(r.dj.Slider, {
      w: 190,
      x: 74,
      y: 0,
      sliderW: 190,
      min: u,
      max: i,
      step: c,
      type: 'Normal',
      value: t,
      setValue: a,
      changeComplete: () => e.setValue(t - (t % c)),
      isDisabled: t <= 0,
    }),
    l.default.createElement(r.dj.Text, { x: 74, y: 17, type: 'CPI小标题', text: 50 }),
    l.default.createElement(r.dj.Text, { x: 205, y: 17, type: 'CPI小标题', text: 16e3 }),
    l.default.createElement(r.dj.SpinBox, {
      y: 0,
      x: 280,
      w: 74,
      h: 22,
      min: u,
      max: i,
      value: t,
      step: c,
      setValue: a,
      changeFinished: (t) => {
        e.setValue(t - (t % c));
      },
      isDisable: t > 0,
    }),
  );
};
