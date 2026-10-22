/* Recovered from Tezarre Driver 1.1.31 - renderer module uJxQ */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          (void 0 === r && (r = n),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }));
        }
      : function (e, t, n, r) {
          (void 0 === r && (r = n), (e[r] = t[n]));
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
  n =
    (this && this.__importStar) ||
    function (n) {
      if (n && n.__esModule) return n;
      var r = {};
      if (null != n) for (var a in n) 'default' !== a && Object.hasOwnProperty.call(n, a) && e(r, n, a);
      return (t(r, n), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Warning = void 0));
const r = n(require('react')),
  a = require('./../../dj.js'),
  i = require('./../../res.js'),
  l = {
    无取消按键: { isCancle: !1, isCertain: !0, justifyContent: 'center' },
    无取确定键: { isCancle: !0, isCertain: !1, justifyContent: 'center' },
    普通: { isCancle: !0, isCertain: !0, justifyContent: 'space-between' },
  },
  c = {
    软件升级: {
      title: i.res.text.升级软件(),
      message: i.res.text.您的软件不是最新版本是否要进行软件升级(),
      certain: i.res.text.确定(),
      cancle: i.res.text.取消(),
      button: l['普通'],
    },
  };
exports.Warning = (e) =>
  r.default.createElement(
    r.Fragment,
    null,
    r.default.createElement(a.dj.View, { form: '背景页', drag: !0 }, ''),
    r.default.createElement(
      a.dj.View,
      { w: 370, h: 250, x: 415, y: 240, form: '弹出框', drag: !0 },
      r.default.createElement(a.dj.Text, { h: 25, x: 0, y: 19, type: '个人中心标题', text: c[e.type].title }),
      r.default.createElement(a.dj.Line, { y: 53, lineColor: 'UserVerify' }),
      r.default.createElement(a.dj.Text, { type: '启动页搜索', h: 80, y: 80, text: c[e.type].message }),
      r.default.createElement(
        a.dj.FlexView,
        { w: 300, h: 34, x: 35, y: 160, justifyContent: c[e.type].button.justifyContent },
        c[e.type].button.isCancle &&
          r.default.createElement(a.dj.Button, {
            relative: !0,
            w: 135,
            h: 34,
            mode: 'Border',
            text: c[e.type].cancle,
            clickHandle: e.cancleHandle,
          }),
        c[e.type].button.isCertain &&
          r.default.createElement(a.dj.Button, {
            relative: !0,
            w: 135,
            h: 34,
            mode: 'Sparker',
            text: c[e.type].certain,
            clickHandle: e.certainHandle,
          }),
      ),
    ),
  );
