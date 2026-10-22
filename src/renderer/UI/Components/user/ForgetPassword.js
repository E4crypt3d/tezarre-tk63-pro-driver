/* Recovered from Tezarre Driver 1.1.31 - renderer module Iixu */

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
      if (null != r) for (var a in r) 'default' !== a && Object.hasOwnProperty.call(r, a) && e(n, r, a);
      return (t(n, r), n);
    },
  n =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (a, u) {
        function i(e) {
          try {
            l(n.next(e));
          } catch (t) {
            u(t);
          }
        }
        function o(e) {
          try {
            l(n.throw(e));
          } catch (t) {
            u(t);
          }
        }
        function l(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(i, o);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ForgetPassword = void 0));
const a = r(require('react')),
  u = require('./../../../dj.js'),
  i = require('./../../../res.js'),
  o = require('./../../store.js'),
  l = require('./Login.js'),
  s = require('./../../utils/_2500ms消失文字.js'),
  c = require('./User.js');
exports.ForgetPassword = () => {
  const [e, t] = a.useState('');
  return a.default.createElement(
    a.Fragment,
    null,
    a.default.createElement(
      u.dj.View,
      { w: 370, h: 330, x: 416, y: 170, form: '弹出框' },
      a.default.createElement(u.dj.Text, { h: 25, y: 23, text: '忘记密码', type: '个人中心标题' }),
      a.default.createElement(u.dj.Line, { y: 53, lineColor: 'UserVerify' }),
      a.default.createElement(u.dj.Text, {
        h: 18,
        y: 124,
        text: '为了您的账户安全我们将发送一条验证码至您的邮箱',
        type: '启动页搜索',
      }),
      a.default.createElement(u.dj.Button, {
        w: 12,
        h: 12,
        x: 36,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: i.res.img.return },
        clickHandle: () => o.store.setState.user_UI(a.default.createElement(l.Login, null)),
      }),
      a.default.createElement(u.dj.TextInput, {
        w: 300,
        h: 34,
        x: 35,
        y: 76,
        type: 'Center',
        usePlaceholder: i.res.useString.输入您的邮箱,
        value: e,
        onChange: (e) => t(e.target.value),
      }),
      a.default.createElement(u.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 193,
        mode: 'Sparker',
        text: '发送',
        clickHandle: () =>
          n(void 0, void 0, void 0, function* () {
            !1 === i.res.regexp.email.test(e)
              ? o.store.setState.user_warningText(
                  a.default.createElement(s._2500ms消失文字, { key: Date.now(), text: '请输入正确的邮箱' }),
                )
              : c.webServerCompose('forgetPassword')({ email: e });
          }),
      }),
      a.default.createElement(u.dj.Button, {
        w: 12,
        h: 12,
        x: 321,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: i.res.img.close },
        clickHandle: () => {
          (o.store.setState.userOpen(!1),
            o.store.setState.user_UI(a.default.createElement(l.Login, null)),
            o.store.setState.user_warningText(''));
        },
      }),
    ),
  );
};
