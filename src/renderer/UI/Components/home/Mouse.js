/* Recovered from Tezarre Driver 1.1.31 - renderer module B4d3 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, r) {
          (void 0 === r && (r = i),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, r) {
          (void 0 === r && (r = i), (e[r] = t[i]));
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
      var r = {};
      if (null != i) for (var a in i) 'default' !== a && Object.hasOwnProperty.call(i, a) && e(r, i, a);
      return (t(r, i), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MouseHome = void 0));
const r = i(require('react')),
  a = require('./CPIBox.js'),
  l = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  o = require('./../keysetting/KeySetting.js'),
  d = require('./../../utils/WithProps.js'),
  u = [125, 250, 500, 1e3],
  c = (e) => {
    if (void 0 === e.dpiLayout) return null;
    const t = e.dpiLayout,
      [i, d] = r.useState({ open: !1, keyHidCode: 0, text: '' });
    return r.default.createElement(
      r.Fragment,
      null,
      r.default.createElement(
        l.dj.FlexView,
        { h: 252, y: 37, flexDirection: 'column' },
        ((i, l, n) => {
          (void 0 === i && (i = 1), void 0 === l && (l = 1), void 0 === n && (n = 1));
          const o = [];
          for (let d = 0; d < i; d++)
            o.push(
              r.default.createElement(a.CPIBox, {
                index: d,
                key: d,
                min: l,
                max: n,
                step: t ? t.delt : 0,
                value: e.dpi[d],
                setValue: (t) => {
                  (e.dpi.splice(d, 1, t), e.setDpi(e.dpi));
                },
              }),
            );
          return o;
        })(t.count, t.min, t.max),
      ),
      r.default.createElement(
        l.dj.View,
        { y: 348, h: 48 },
        r.default.createElement(l.dj.Text, { type: 'SubTitle', text: '报告率' }),
        r.default.createElement(
          l.dj.FlexView,
          { w: 350, h: 20, y: 34, flexDirection: 'row', justifyContent: 'space-between' },
          u.map((t, i) =>
            r.default.createElement(
              'div',
              { style: { width: 70, height: 20, position: 'relative' }, key: i },
              r.default.createElement(l.dj.CheckBox, {
                checkState: e.reportRate === t,
                clickHandle: () => {
                  e.setReportRate(t);
                },
                type: 'Normal',
                w: 80,
                h: 16,
                text: t + 'Hz',
              }),
            ),
          ),
        ),
      ),
      r.default.createElement(l.dj.Img, {
        w: 186,
        h: 366,
        x: 612,
        y: 52,
        imgBg: e.deviceName in n.res.img ? n.res.img[e.deviceName] : n.res.img.MG912,
      }),
      n.res.键鼠坐标.MG912.layout.map((t) =>
        r.default.createElement(l.dj.Button, {
          key: t.value,
          w: t.w,
          h: t.h,
          x: t.x,
          y: t.y,
          isHightLight: e.keyValue.some((e) => e.original === t.value),
          mode: '鼠标按键',
          text: t.mark,
          clickHandle: () => d({ open: !0, keyHidCode: t.value ? t.value : 0, text: t.keyName }),
        }),
      ),
      i.open &&
        r.default.createElement(
          l.dj.View,
          { w: 1200, h: 730, x: -268, y: -146 },
          r.default.createElement(o.KeySetting, {
            keyHidCode: i.keyHidCode,
            title: i.text,
            oldValue: e.keyValue.find((e) => e.original === i.keyHidCode),
            closeHandle: () => {
              d({ open: !1, keyHidCode: 0, text: '' });
            },
          }),
        ),
    );
  };
exports.MouseHome = d.withProps(c, d.homeData);
