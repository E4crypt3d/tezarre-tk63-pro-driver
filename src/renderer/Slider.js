/* Recovered from Tezarre Driver 1.1.31 - renderer module kCxk */

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
      if (null != i) for (var a in i) 'default' !== a && Object.hasOwnProperty.call(i, a) && e(n, i, a);
      return (t(n, i), n);
    },
  n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Slider = void 0));
const a = i(require('react')),
  o = n(require('@emotion/styled')),
  r = require('./Text.js'),
  u = require('./res.js'),
  l = o.default('div')`
  position: relative;
  height: 100%;
  width: 100%;
  // margin: 4px 0;
  & input {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 12px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
  }

  & input:focus {
    outline: none;
  }

  & input::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background: red;
    background-color: #444;
  }

  & input::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    height: 4px;
    width: 4px;
    background: #23f9e2;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -190px 0 0 188px #23f9e2;
  }

  & input:active::-webkit-slider-thumb {
    background: #23f9e2;
    box-shadow: -190px 0 0 188px #21b6a6;
  }

  & input:disabled {
    opacity: 0.4;
  }

  & input:disabled::-webkit-slider-thumb {
    opacity: 0.4;
  }
`,
  s = o.default.span(
    {
      width: 19,
      height: 24,
      background: `url(${u.res.img.light_frame.normal})`,
      backgroundSize: 'contain',
      position: 'absolute',
      top: -32,
      '& > span': { position: 'absolute', color: 'black', top: 4 },
    },
    (e) => ({ left: e.dataleft - 10 }),
  );
exports.Slider = (e) => {
  const t = a.useRef(null),
    [i, n] = a.useState(!1),
    [o, u] = a.useState(!1),
    [d, p] = a.useState(!1),
    c = (i) => {
      var n;
      t.current &&
        e.setValue(
          Math.floor(
            ((i.clientX - t.current.getBoundingClientRect().left) /
              (null === (n = t.current) || void 0 === n ? void 0 : n.getBoundingClientRect().width)) *
              e.max +
              0.5,
          ),
        );
    };
  return a.default.createElement(
    l,
    {
      id: 'fatherBtn',
      ref: t,
      onMouseDown: (t) => {
        e.isDisabled || (c(t), n(!0), u(!0), p(!0));
      },
      onMouseMove: (n) => {
        e.isDisabled || (i && t.current && c(n));
      },
      onMouseOut: (t) => {
        if (!0 === d) {
          if (e.isDisabled) return;
          (e.changeComplete(), n(!1), u(!1), p(!1));
        }
      },
      onMouseUp: () => {
        if (!0 === d) {
          if (e.isDisabled) return;
          (e.changeComplete(), n(!1), u(!1), p(!1));
        }
      },
    },
    a.default.createElement('input', {
      disabled: e.isDisabled,
      type: 'range',
      value: e.value,
      min: e.min,
      max: e.max,
      style: { zIndex: -1 },
      onChange: (t) => {
        e.setValue(parseInt(t.target.value));
      },
      onMouseDown: (e) => {
        (e.stopPropagation(), u(!0));
      },
      onMouseUp: (t) => {
        (t.stopPropagation(), e.changeComplete(), n(!1), u(!1));
      },
    }),
    'Balloon' === e.type &&
      o &&
      a.default.createElement(
        s,
        { className: 'balloon', dataleft: (e.value / e.max) * e.sliderW },
        a.default.createElement(r.Text, { type: '灯光页数值', text: e.value }),
      ),
  );
};
