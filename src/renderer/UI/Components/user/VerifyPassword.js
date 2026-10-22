/* Recovered from Tezarre Driver 1.1.31 - renderer module pkuk */

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
      if (null != r) for (var a in r) 'default' !== a && Object.hasOwnProperty.call(r, a) && e(s, r, a);
      return (t(s, r), s);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.VerifyPassword = void 0));
const s = r(require('react')),
  a = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  l = require('./../../store.js'),
  i = require('./Login.js'),
  o = require('./../../utils/_2500ms消失文字.js'),
  u = require('./User.js'),
  d = require('./Verify.js');
exports.VerifyPassword = (e) => {
  console.log('axiba', e.email, e.verifyCode);
  const [t, r] = s.useState({ password1: '', password2: '' });
  return s.default.createElement(
    s.Fragment,
    null,
    s.default.createElement(
      a.dj.View,
      { w: 370, h: 330, x: 416, y: 170, form: '弹出框' },
      s.default.createElement(a.dj.Text, { h: 25, y: 23, text: '验证', type: '个人中心标题' }),
      s.default.createElement(a.dj.Line, { y: 53, lineColor: 'UserVerify' }),
      s.default.createElement(a.dj.Button, {
        w: 12,
        h: 12,
        x: 36,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: n.res.img.return },
        clickHandle: () => l.store.setState.user_UI(s.default.createElement(d.Verify, { email: e.email })),
      }),
      s.default.createElement(a.dj.TextInput, {
        type: '密码',
        w: 300,
        h: 34,
        x: 35,
        y: 76,
        usePlaceholder: n.res.useString.密码,
        value: t.password1,
        onChange: (e) => r(Object.assign(Object.assign({}, t), { password1: e.target.value })),
      }),
      s.default.createElement(a.dj.Line, { w: 300, x: 35, y: 110, lineColor: 'User' }),
      s.default.createElement(a.dj.TextInput, {
        type: '密码',
        w: 300,
        h: 34,
        x: 35,
        y: 125,
        usePlaceholder: n.res.useString.再次输入密码,
        value: t.password2,
        onChange: (e) => r(Object.assign(Object.assign({}, t), { password2: e.target.value })),
      }),
      s.default.createElement(a.dj.Line, { w: 300, x: 35, y: 159, lineColor: 'User' }),
      s.default.createElement(a.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 193,
        mode: 'Sparker',
        text: '发送',
        clickHandle: () => {
          '' === t.password1 || '' === t.password2
            ? s.default.createElement(o._2500ms消失文字, { key: Date.now(), text: '密码不能为空' })
            : t.password1 !== t.password2
              ? s.default.createElement(o._2500ms消失文字, { key: Date.now(), text: '两次输入的密码不相等' })
              : u.webServerCompose('resetPassword')(
                  Object.assign(Object.assign({}, e), { password: t.password1 }),
                );
        },
      }),
      s.default.createElement(a.dj.Button, {
        w: 12,
        h: 12,
        x: 321,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: n.res.img.close },
        clickHandle: () => {
          (l.store.setState.userOpen(!1),
            l.store.setState.user_UI(s.default.createElement(i.Login, null)),
            l.store.setState.user_warningText(''));
        },
      }),
    ),
  );
};
