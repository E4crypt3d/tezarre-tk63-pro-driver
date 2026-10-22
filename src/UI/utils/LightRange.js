/* Recovered from Tezarre Driver 1.1.31 - renderer module p1YD */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, a) {
          (void 0 === a && (a = i),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, a) {
          (void 0 === a && (a = i), (e[a] = t[i]));
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
      var a = {};
      if (null != i) for (var r in i) 'default' !== r && Object.hasOwnProperty.call(i, r) && e(a, i, r);
      return (t(a, i), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.LightRange = void 0));
const a = i(require('react')),
  r = require('./../../renderer/dj.js');
exports.LightRange = (e) => {
  const { min: t, max: i, leftDescription: l, rightDescription: n, isDisabled: u } = e,
    [s, d] = a.useState(e.value);
  return (
    a.useEffect(() => {
      d(e.value);
    }, [e.value]),
    a.default.createElement(
      r.dj.View,
      { w: 290, h: 27, x: 57 },
      a.default.createElement(r.dj.Text, { w: 14, x: 0, y: 1, type: '灯光页描述', text: l, isDisabled: u }),
      a.default.createElement(r.dj.Text, {
        w: 14,
        h: 25,
        x: 24,
        y: 3,
        type: '灯光页数值',
        text: t,
        isDisabled: u,
      }),
      a.default.createElement(r.dj.Slider, {
        w: 190,
        x: 42,
        y: -3,
        step: 1,
        sliderW: 190,
        min: t,
        max: i,
        type: 'Balloon',
        value: s,
        setValue: d,
        changeComplete: () => e.setValue(s),
        isDisabled: u,
      }),
      a.default.createElement(r.dj.Text, {
        w: 14,
        h: 25,
        x: 241,
        y: 3,
        type: '灯光页数值',
        text: i,
        isDisabled: u,
      }),
      a.default.createElement(r.dj.Text, { w: 14, x: 263, y: 1, type: '灯光页描述', text: n, isDisabled: u }),
    )
  );
};
