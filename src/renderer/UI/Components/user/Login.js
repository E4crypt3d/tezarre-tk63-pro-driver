/* Recovered from Tezarre Driver 1.1.31 - renderer module Lzj0 */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Login = void 0));
const a = r(require('react')),
  l = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  s = require('./../../store.js'),
  u = require('./ForgetPassword.js'),
  i = require('./Register.js'),
  o = require('./../../utils/_2500ms消失文字.js'),
  d = require('./User.js'),
  c = require('./../../../appConfig.js'),
  m = require('./../../../mobxStore/store.js');
exports.Login = () => {
  const [e, t] = a.useState({ email: '', password: '' }),
    { isKeyStore: r } = m.useStore();
  return a.default.createElement(
    a.Fragment,
    null,
    a.default.createElement(
      l.dj.View,
      { w: 370, h: 406, x: 416, y: 161, form: '弹出框' },
      a.default.createElement(l.dj.Img, { w: 32, h: 29, x: 168, y: 31, imgBg: c.urlStr(c.login_logo_p) }),
      a.default.createElement(l.dj.Text, { h: 25, y: 68, type: '个人中心标题', text: n.res.string.登录 }),
      a.default.createElement(l.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 122,
        usePlaceholder: n.res.useString.邮箱,
        value: e.email,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { email: r.target.value })),
      }),
      a.default.createElement(l.dj.Line, { w: 300, x: 35, y: 154, lineColor: 'User' }),
      a.default.createElement(l.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 172,
        type: '密码',
        usePlaceholder: n.res.useString.密码,
        value: e.password,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { password: r.target.value })),
      }),
      a.default.createElement(l.dj.Button, {
        w: 66,
        h: 17,
        x: 263,
        y: 179,
        mode: 'Bluer',
        text: '忘记密码?',
        clickHandle: () => s.store.setState.user_UI(a.default.createElement(u.ForgetPassword, null)),
      }),
      a.default.createElement(l.dj.Line, { w: 300, x: 35, y: 204, lineColor: 'User' }),
      a.default.createElement(l.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 237,
        mode: 'Sparker',
        text: n.res.string.登录,
        clickHandle: () => {
          ('' === e.email || '' === e.password
            ? s.store.setState.user_warningText(
                a.default.createElement(o._2500ms消失文字, { key: Date.now(), text: '请将所有的内容填满噢' }),
              )
            : !1 === n.res.regexp.email.test(e.email)
              ? s.store.setState.user_warningText(
                  a.default.createElement(o._2500ms消失文字, { key: Date.now(), text: '请输入正确的邮箱' }),
                )
              : d.webServerCompose('login')(e),
            r.setTextKey(!0));
        },
      }),
      a.default.createElement(l.dj.Line, { w: 86, x: 35, y: 302, lineColor: 'User' }),
      a.default.createElement(l.dj.Text, { y: 295, type: 'user提示', text: '尚未注册账号?' }),
      a.default.createElement(l.dj.Line, { w: 86, x: 248, y: 302, lineColor: 'User' }),
      a.default.createElement(l.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 330,
        mode: 'Border',
        text: n.res.string.注册,
        clickHandle: () => s.store.setState.user_UI(a.default.createElement(i.Register, null)),
      }),
      a.default.createElement(l.dj.Button, {
        w: 12,
        h: 12,
        x: 321,
        y: 33,
        img: { size: { w: 12, h: 12 }, src: n.res.img.close },
        clickHandle: () => {
          (s.store.setState.userOpen(!1),
            s.store.setState.user_UI(a.default.createElement(exports.Login, null)),
            s.store.setState.user_warningText(''));
        },
      }),
    ),
  );
};
