/* Recovered from Tezarre Driver 1.1.31 - renderer module hJYi */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, n) {
          (void 0 === n && (n = r),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, n) {
          (void 0 === n && (n = r), (e[n] = t[r]));
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
      var n = {};
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(n, r, o);
      return (t(n, r), n);
    },
  n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DoublueNumberInut =
    exports.NumberInput =
    exports.TimeInput =
    exports.TimeInputStyle =
    exports.NumberInputStyle =
      void 0));
const o = r(require('react')),
  u = n(require('@emotion/styled')),
  a = require('./FlexView.js'),
  s = require('./UI/utils/OutsideAlerter.js'),
  i = require('./mobxStore/store.js'),
  l = require('./res.js');
((exports.NumberInputStyle = u.default.input({
  '&::-webkit-inner-spin-button': { opacity: 0, WebkitAppearance: 'none', margin: 0, pointerEvents: 'none' },
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  textAlign: 'center',
})),
  (exports.TimeInputStyle = u.default.input({
    '&::-webkit-inner-spin-button': {
      opacity: 0,
      WebkitAppearance: 'none',
      margin: 0,
      pointerEvents: 'none',
    },
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: '1px solid #f2f2f2',
    outline: 'none',
    color: 'white',
    textAlign: 'center',
    boxSizing: 'border-box',
  })),
  (exports.TimeInput = (e) =>
    o.default.createElement(exports.TimeInputStyle, {
      autoFocus: !!e.autoFocus && e.autoFocus,
      type: 'number',
      min: 1,
      placeholder: e.tips ? e.tips : '',
      onChange: (t) => {
        Number(t.target.value) > e.max &&
          ((t.target.value = e.max.toString()),
          i.mobxStore.toastStore.setErr(l.res.text.输入的时间请勿超过() + e.max + 'ms'));
      },
      onKeyDown: (t) => {
        'Enter' === t.key && e.inputFinished('' === t.target.value ? 0 : parseInt(t.target.value));
      },
      onBlur: (t) => {
        e.inputFinished('' === t.target.value ? 0 : parseInt(t.target.value));
      },
      onMouseUp: (e) => e.stopPropagation(),
    })),
  (exports.NumberInput = (e) => {
    const [t, r] = o.useState('');
    return o.default.createElement(exports.NumberInputStyle, {
      autoFocus: !0,
      type: 'number',
      value: t,
      min: 1,
      onChange: (e) => {
        (Number(e.target.value) > 65536 &&
          ((e.target.value = '65535'), i.mobxStore.toastStore.setErr(l.res.text.输入的时间请勿超过65535ms())),
          r(e.target.value));
      },
      onKeyDown: (r) => {
        'Enter' === r.key && e.inputFinished('' === t || Number(t) < 1 ? 1 : parseInt(t));
      },
      onBlur: (r) => {
        e.inputFinished('' === t || Number(t) < 1 ? 1 : parseInt(t));
      },
      onMouseUp: (e) => e.stopPropagation(),
    });
  }),
  (exports.DoublueNumberInut = (e) => {
    const t = o.useRef(null),
      r = o.useRef(null),
      [n, u] = o.useState({ x: '', y: '' }),
      p = (e) => {
        const t = e.target.value,
          r = e.target.value.charAt(0),
          o = t.indexOf(' ');
        console.log(o);
        const a = t.substr(1),
          s = Number(t);
        if (('-' !== r && 'NaN' === Number(r).toString()) || 'NaN' !== Number(a).toString())
          if (-1 !== o) {
            const r = t.split(' ').join('');
            ((e.target.value = r), i.mobxStore.toastStore.setErr(l.res.text.请输入数字()));
          } else
            'NaN' === s.toString() && '-' !== t
              ? ((e.target.value = ''), i.mobxStore.toastStore.setErr(l.res.text.请输入数字()))
              : s > 127
                ? ((e.target.value = '127'), i.mobxStore.toastStore.setErr(l.res.text.坐标值范围应在()))
                : s < -127 &&
                  ((e.target.value = '-127'), i.mobxStore.toastStore.setErr(l.res.text.坐标值范围应在()));
        else {
          const r = t.substr(0, t.length - 1);
          ((e.target.value = r), i.mobxStore.toastStore.setErr(l.res.text.请输入数字()));
        }
        u(Object.assign(Object.assign({}, n), { [e.target.name]: e.target.value }));
      },
      c = (e) => {
        'Enter' === e.key && b();
      },
      b = () => {
        (console.log('focus in', n.x, n.y),
          '' === n.y
            ? r.current && r.current.focus()
            : '' === n.x
              ? t.current && t.current.focus()
              : e.inputFinished(n.x, n.y));
      };
    return o.default.createElement(
      s.OutsideAlerter,
      {
        clickOutsideHandle: () => {
          ('' === n.y && u(Object.assign(Object.assign({}, n), { y: '1' })),
            '' === n.x && u(Object.assign(Object.assign({}, n), { x: '1' })),
            e.inputFinished(n.x, n.y));
        },
      },
      o.default.createElement(
        a.FlexView,
        { flexDirection: 'column', justifyContent: 'space-between', onMouseUp: (e) => e.stopPropagation() },
        o.default.createElement(exports.NumberInputStyle, {
          autoFocus: !0,
          placeholder: e.placeHolderTop,
          ref: t,
          name: 'x',
          onChange: p,
          onKeyDown: c,
          onBlur: b,
        }),
        o.default.createElement(exports.NumberInputStyle, {
          placeholder: e.placeHolderBottom,
          ref: r,
          name: 'y',
          onChange: p,
          onKeyDown: c,
          onBlur: b,
        }),
      ),
    );
  }));
