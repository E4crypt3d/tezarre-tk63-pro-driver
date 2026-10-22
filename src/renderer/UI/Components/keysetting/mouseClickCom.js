/* Recovered from Tezarre Driver 1.1.31 - renderer module CVOe */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, s) {
          (void 0 === s && (s = r),
            Object.defineProperty(e, s, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, s) {
          (void 0 === s && (s = r), (e[s] = t[r]));
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
      var s = {};
      if (null != r) for (var u in r) 'default' !== u && Object.hasOwnProperty.call(r, u) && e(s, r, u);
      return (t(s, r), s);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MouseClickCom = void 0));
const s = r(require('react')),
  u = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  o = require('mobx-react-lite');
exports.MouseClickCom = (e) => {
  const t = [-1e3, -999, -998, -997, -996, -988, -987],
    r = [
      n.res.string.鼠标左键,
      n.res.string.鼠标右键,
      n.res.string.鼠标滚轮点击,
      n.res.string.鼠标左向前,
      n.res.string.鼠标左向后,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      n.res.string.鼠标滚轮向上,
      n.res.string.鼠标滚轮向下,
      'MouseXUP',
      'MouseXDOWN',
      'MouseYUP',
      'MouseYDOWN',
    ];
  let i;
  void 0 !== e.oldValue &&
    0 !== e.oldValue.key &&
    (i = ((e) => {
      return r[1e3 + e];
    })(e.oldValue.key));
  const l = (t) => e.cMouse === t,
    c = (t) => {
      l(t)
        ? ((t) => {
            (e.setcMouse(t), e.cMouse === t && e.setcMouse(0));
          })(t)
        : ((t) => {
            (e.setcMouse(t), e.cMouse && e.setcMouse(t));
          })(t);
    };
  return o.useObserver(() =>
    s.default.createElement(
      s.Fragment,
      null,
      s.default.createElement(u.dj.Text, { text: i, type: '已修改的按键值', x: 57, y: 7, h: 36 }),
      s.default.createElement(u.dj.List, {
        w: 342,
        h: 145,
        x: 54,
        y: 48,
        itemCount: t.length,
        scrollToIndex: 0,
        itemSize: () => 30,
        renderItem: (n) =>
          s.default.createElement(u.dj.CheckBox2, {
            relative: !0,
            key: n,
            h: 32,
            type: 'Normal',
            text: 1e3 + t[n] <= r.length - 1 ? r[1e3 + t[n]] : '',
            checkState: l(t[n]) && !e.forBidden,
            clickHandle: () => c(t[n]),
          }),
      }),
    ),
  );
};
