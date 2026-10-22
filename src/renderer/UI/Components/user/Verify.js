/* Recovered from Tezarre Driver 1.1.31 - renderer module Jayc */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Verify = void 0));
const a = r(require('react')),
  l = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  u = require('./../../store.js'),
  i = require('./Login.js'),
  s = require('./VerifyPassword.js'),
  o = require('./../../utils/_2500ms消失文字.js'),
  c = require('./VerifyFailed.js');
exports.Verify = (e) => {
  const [t, r] = a.useState(''),
    [d, f] = a.useState(60);
  return (
    a.useEffect(() => {
      const e = setTimeout(() => {
        d >= 1 ? f(d - 1) : clearTimeout(e);
      }, 1e3);
      return () => {
        clearTimeout(e);
      };
    }, [d]),
    a.default.createElement(
      a.Fragment,
      null,
      a.default.createElement(
        l.dj.View,
        { w: 370, h: 330, x: 416, y: 170, form: '弹出框' },
        a.default.createElement(l.dj.Text, { h: 25, y: 23, text: '验证', type: '个人中心标题' }),
        a.default.createElement(l.dj.Line, { y: 53, lineColor: 'UserVerify' }),
        d <= 0
          ? a.default.createElement(l.dj.Button, {
              mode: '同意用户协议',
              w: 105,
              h: 18,
              x: 135,
              y: 124,
              text: '没有收到验证码?',
              clickHandle: () => u.store.setState.user_UI(a.default.createElement(c.VerifyFailed, null)),
            })
          : a.default.createElement(l.dj.Text, { h: 18, y: 124, text: d + ' s', type: '启动页搜索' }),
        a.default.createElement(l.dj.Button, {
          w: 12,
          h: 12,
          x: 36,
          y: 26,
          img: { size: { w: 12, h: 12 }, src: n.res.img.return },
          clickHandle: () => u.store.setState.user_UI(a.default.createElement(i.Login, null)),
        }),
        a.default.createElement(l.dj.TextInput, {
          w: 300,
          h: 34,
          x: 35,
          y: 76,
          type: 'Center',
          usePlaceholder: n.res.useString.请输入邮箱验证码,
          value: t,
          onChange: (e) => r(e.target.value),
        }),
        a.default.createElement(l.dj.Button, {
          w: 300,
          h: 36,
          x: 35,
          y: 193,
          mode: 'Sparker',
          text: '确定',
          clickHandle: () => {
            t.length < 6
              ? a.default.createElement(o._2500ms消失文字, { key: Date.now(), text: '验证码不得少于6位' })
              : u.store.setState.user_UI(
                  a.default.createElement(s.VerifyPassword, { email: e.email, verifyCode: t }),
                );
          },
        }),
        a.default.createElement(l.dj.Button, {
          w: 12,
          h: 12,
          x: 321,
          y: 26,
          img: { size: { w: 12, h: 12 }, src: n.res.img.close },
          clickHandle: () => {
            (u.store.setState.userOpen(!1),
              u.store.setState.user_UI(a.default.createElement(i.Login, null)),
              u.store.setState.user_warningText(''));
          },
        }),
      ),
    )
  );
};
