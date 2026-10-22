/* Recovered from Tezarre Driver 1.1.31 - renderer module BsJ9 */

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
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(s, r, n);
      return (t(s, r), s);
    },
  s =
    (this && this.__awaiter) ||
    function (e, t, r, s) {
      return new (r || (r = Promise))(function (n, o) {
        function i(e) {
          try {
            u(s.next(e));
          } catch (t) {
            o(t);
          }
        }
        function a(e) {
          try {
            u(s.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(i, a);
        }
        u((s = s.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.User = exports.webServerCompose = void 0));
const n = r(require('react')),
  o = require('./../../../dj.js'),
  i = require('./../../store.js'),
  a = require('./Login.js'),
  u = require('./Verify.js'),
  l = require('./../../utils/_2500ms消失文字.js'),
  d = require('./../../../sdk.js'),
  c = {
    login: (e) => d.sdk.ioFunc.userLogin(e.email, e.password),
    register: (e) => d.sdk.ioFunc.userRegister(e.userName, e.gender, e.email, e.password),
    forgetPassword: (e) => d.sdk.ioFunc.reqFindPassVerifyCode(e.email),
    resetPassword: (e) => d.sdk.ioFunc.findPassword(e.email, e.verifyCode, e.password),
  },
  f = {
    login: { text: '', f: (e) => i.store.setState.userOpen(!1) },
    register: {
      text: '注册成功，请进行登录',
      f: (e) => i.store.setState.user_UI(n.default.createElement(a.Login, null)),
    },
    forgetPassword: {
      text: '验证码已发送,请注意查收',
      f: ({ email: e }) => i.store.setState.user_UI(n.default.createElement(u.Verify, { email: e })),
    },
    resetPassword: {
      text: '修改密码成功,请进行登录',
      f: (e) => i.store.setState.user_UI(n.default.createElement(a.Login, null)),
    },
  },
  m = (e, t, r) => {
    (console.log('parseUserResult', e, f[t]),
      0 === e.errCode
        ? (f[t].f(r),
          i.store.setState.user_warningText(
            n.default.createElement(l._2500ms消失文字, { key: Date.now(), text: f[t].text }),
          ))
        : i.store.setState.user_warningText(
            n.default.createElement(l._2500ms消失文字, { key: Date.now(), text: e.errMsg }),
          ));
  };
((exports.webServerCompose = (e) => (t) =>
  s(void 0, void 0, void 0, function* () {
    console.log(e, t);
    const r = yield c[e](t);
    m(r, e, t);
  })),
  (exports.User = () => {
    const { user_warningText: e, user_UI: t } = i.store.useState((e) => e.user_warningText.user_UI);
    return n.default.createElement(
      n.Fragment,
      null,
      n.default.createElement(o.dj.View, { form: '背景页', drag: !0 }, ''),
      t,
      n.default.createElement(o.dj.Text, { h: 16, y: 640, type: '提示', text: e }),
    );
  }));
