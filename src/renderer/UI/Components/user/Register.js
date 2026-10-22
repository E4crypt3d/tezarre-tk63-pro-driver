/* Recovered from Tezarre Driver 1.1.31 - renderer module NJ19 */

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
      if (null != r) for (var s in r) 'default' !== s && Object.hasOwnProperty.call(r, s) && e(a, r, s);
      return (t(a, r), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Register = void 0));
const a = r(require('react')),
  s = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  l = require('./../../store.js'),
  i = require('./Login.js'),
  u = require('./UserArgee.js'),
  d = require('./../../utils/_2500ms消失文字.js'),
  c = require('./User.js'),
  o = require('./../../../appConfig.js');
exports.Register = () => {
  const [e, t] = a.useState({
      userName: '',
      email: '',
      password: '',
      password2: '',
      gender: 'male',
      isAgree: !1,
    }),
    [r, g] = a.useState(!1),
    m = (e) => '' === e;
  return a.default.createElement(
    a.Fragment,
    null,
    a.default.createElement(
      s.dj.View,
      { w: 370, h: 490, x: 416, y: 120, form: '弹出框' },
      a.default.createElement(s.dj.Img, { w: 32, h: 29, x: 168, y: 31, imgBg: o.urlStr(o.login_logo_p) }),
      a.default.createElement(s.dj.Text, { h: 25, y: 68, type: '个人中心标题', text: n.res.string.注册 }),
      a.default.createElement(s.dj.Button, {
        w: 12,
        h: 12,
        x: 37,
        y: 33,
        img: { size: { w: 12, h: 12 }, src: n.res.img.return },
        clickHandle: () => l.store.setState.user_UI(a.default.createElement(i.Login, null)),
      }),
      a.default.createElement(s.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 121,
        value: e.email,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { email: r.target.value })),
        usePlaceholder: n.res.useString.邮箱,
      }),
      a.default.createElement(s.dj.Line, { w: 300, x: 35, y: 155, lineColor: 'User' }),
      a.default.createElement(s.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 173,
        value: e.userName,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { userName: r.target.value })),
        usePlaceholder: n.res.useString.用户名,
      }),
      a.default.createElement(s.dj.Line, { w: 300, x: 35, y: 207, lineColor: 'User' }),
      a.default.createElement(s.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 224,
        type: '密码',
        value: e.password,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { password: r.target.value })),
        usePlaceholder: n.res.useString.密码长度,
      }),
      a.default.createElement(s.dj.Line, { w: 300, x: 35, y: 258, lineColor: 'User' }),
      a.default.createElement(s.dj.TextInput, {
        w: 250,
        h: 34,
        x: 51,
        y: 274,
        type: '密码',
        value: e.password2,
        onChange: (r) => t(Object.assign(Object.assign({}, e), { password2: r.target.value })),
        usePlaceholder: n.res.useString.再次输入密码,
      }),
      a.default.createElement(s.dj.Line, { w: 300, x: 35, y: 308, lineColor: 'User' }),
      a.default.createElement(s.dj.Text, {
        w: 100,
        h: 14,
        x: 50,
        y: 330,
        type: '单选框',
        text: n.res.string.性别,
      }),
      a.default.createElement(s.dj.RadioButton, {
        w: 30,
        h: 14,
        x: 201,
        y: 334,
        type: '圆形',
        name: '性别',
        text: '男',
        isChecked: 'male' === e.gender,
        clickHandle: () => t(Object.assign(Object.assign({}, e), { gender: 'male' })),
      }),
      a.default.createElement(s.dj.RadioButton, {
        w: 30,
        h: 14,
        x: 250,
        y: 334,
        type: '圆形',
        name: '性别',
        text: '女',
        isChecked: 'female' === e.gender,
        clickHandle: () => t(Object.assign(Object.assign({}, e), { gender: 'female' })),
      }),
      a.default.createElement(s.dj.Line, { w: 300, x: 35, y: 357, lineColor: 'User' }),
      a.default.createElement(s.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 390,
        mode: 'Sparker',
        text: n.res.string.注册,
        clickHandle: () => {
          e.isAgree
            ? m(e.email) || m(e.userName) || m(e.password) || m(e.password2)
              ? l.store.setState.user_warningText(
                  a.default.createElement(d._2500ms消失文字, {
                    key: Date.now(),
                    text: n.res.string.请将所有的内容填满噢,
                  }),
                )
              : e.password !== e.password2
                ? l.store.setState.user_warningText(
                    a.default.createElement(d._2500ms消失文字, {
                      key: Date.now(),
                      text: '两次输入的密码不一致',
                    }),
                  )
                : !1 === n.res.regexp.email.test(e.email)
                  ? l.store.setState.user_warningText(
                      a.default.createElement(d._2500ms消失文字, {
                        key: Date.now(),
                        text: '请输入正确的邮箱',
                      }),
                    )
                  : e.password.length < 6 || e.password.length > 25
                    ? l.store.setState.user_warningText(
                        a.default.createElement(d._2500ms消失文字, {
                          key: Date.now(),
                          text: '密码长度应在 6-25 个字符之间',
                        }),
                      )
                    : e.userName.length < 4
                      ? l.store.setState.user_warningText(
                          a.default.createElement(d._2500ms消失文字, {
                            key: Date.now(),
                            text: '用户名至少需要 4 个字符',
                          }),
                        )
                      : c.webServerCompose('register')(e)
            : l.store.setState.user_warningText(
                a.default.createElement(d._2500ms消失文字, {
                  key: Date.now(),
                  text: '请您同意用户协议后再进行注册',
                }),
              );
        },
      }),
      a.default.createElement(s.dj.CheckBox, {
        w: 20,
        h: 14,
        x: 136,
        y: 445,
        type: '用户须知',
        text: '',
        checkState: e.isAgree,
        clickHandle: (r) => {
          t(Object.assign(Object.assign({}, e), { isAgree: r.target.checked }));
        },
      }),
      a.default.createElement(s.dj.Button, {
        mode: '同意用户协议',
        w: 90,
        h: 25,
        x: 156,
        y: 440,
        text: n.res.string.同意用户协议,
        clickHandle: () => g(!0),
      }),
      a.default.createElement(s.dj.Button, {
        w: 12,
        h: 12,
        x: 324,
        y: 33,
        img: { size: { w: 12, h: 12 }, src: n.res.img.close },
        clickHandle: () => {
          (l.store.setState.userOpen(!1),
            l.store.setState.user_UI(a.default.createElement(i.Login, null)),
            l.store.setState.user_warningText(''));
        },
      }),
    ),
    r &&
      a.default.createElement(u.UserArgee, {
        setAgree: (r) => {
          (g(!1), t(Object.assign(Object.assign({}, e), { isAgree: r })));
        },
      }),
  );
};
