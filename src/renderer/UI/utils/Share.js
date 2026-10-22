/* Recovered from Tezarre Driver 1.1.31 - renderer module NrM1 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, a) {
          (void 0 === a && (a = r),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, a) {
          (void 0 === a && (a = r), (e[a] = t[r]));
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
      var a = {};
      if (null != r) for (var l in r) 'default' !== l && Object.hasOwnProperty.call(r, l) && e(a, r, l);
      return (t(a, r), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Share = void 0));
const a = r(require('react')),
  l = require('./../../res.js'),
  n = require('./../../dj.js'),
  i = require('./../../mobxStore/store.js'),
  c = require('mobx-react-lite'),
  o = { Config: '配置分享', Macro: '宏分享' };
exports.Share = (e) => {
  const { deviceStore: t, shareStore: r } = i.useStore(),
    [u, d] = a.useState('');
  return c.useObserver(() => {
    var i;
    return a.default.createElement(
      a.Fragment,
      null,
      a.default.createElement(n.dj.View, { form: '背景页', drag: !0 }, ''),
      a.default.createElement(
        n.dj.FlexView,
        { alignItems: 'center', justifyContent: 'center' },
        a.default.createElement(
          n.dj.View,
          { relative: !0, w: 480, h: 400, form: '弹出框' },
          a.default.createElement(n.dj.Text, { w: 480, h: 28, y: 20, type: '弹框标题', text: o[e.type] }),
          a.default.createElement(n.dj.Button, {
            w: 14,
            h: 14,
            x: 424,
            y: 26,
            img: { size: { w: 14, h: 14 }, src: l.res.img.topnav_close },
            clickHandle: () => {
              e.close();
            },
          }),
          a.default.createElement(
            n.dj.FlexView,
            { w: 400, h: 260, x: 40, y: 110, flexDirection: 'column', justifyContent: 'space-between' },
            a.default.createElement(
              n.dj.View,
              { relative: !0, h: 60 },
              a.default.createElement(n.dj.Text, {
                w: 309,
                h: 20,
                x: 0,
                y: 7,
                type: '分享配置页设备名',
                text: '设备名称',
              }),
              a.default.createElement(n.dj.Text, {
                w: 309,
                h: 36,
                x: 0,
                y: 38,
                type: '描述',
                text: null === (i = t.currentDev) || void 0 === i ? void 0 : i.deviceType.displayName,
              }),
            ),
          ),
          a.default.createElement(n.dj.TextArea, {
            w: 400,
            h: 114,
            x: 40,
            y: 194,
            placeholder: '设备描述',
            editble: !0,
            value: u,
            setValue: (e) => d(e.target.value),
          }),
          a.default.createElement(
            n.dj.FlexView,
            { w: 400, h: 34, x: 44, y: 333, justifyContent: 'space-between', alignItems: 'flex-start' },
            a.default.createElement(n.dj.Button, {
              relative: !0,
              w: 190,
              h: 33,
              mode: 'Border',
              text: l.res.string.取消,
              clickHandle: () => e.close(),
            }),
            a.default.createElement(n.dj.Button, {
              relative: !0,
              w: 190,
              h: 34,
              mode: 'Sparker',
              text: l.res.string.确定,
              clickHandle: () => {
                ('Config' === e.type
                  ? void 0 !== e.config && r.shareConfig(e.config, u)
                  : void 0 !== e.macro && r.shareMacro(e.macro, u),
                  e.close());
              },
            }),
          ),
        ),
      ),
    );
  });
};
