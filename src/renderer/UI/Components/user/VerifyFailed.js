/* Recovered from Tezarre Driver 1.1.31 - renderer module UxYK */

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
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.VerifyFailed = void 0));
const a = r(require('react')),
  l = require('./../../../dj.js'),
  i = require('./../../../res.js'),
  n = require('./../../store.js'),
  u = require('./Login.js'),
  c = require('./Verify.js');
exports.VerifyFailed = () =>
  a.default.createElement(
    a.Fragment,
    null,
    a.default.createElement(
      l.dj.View,
      { w: 370, h: 330, x: 416, y: 170, form: '弹出框' },
      a.default.createElement(l.dj.Button, {
        w: 12,
        h: 12,
        x: 36,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: i.res.img.return },
        clickHandle: () => n.store.setState.user_UI(a.default.createElement(c.Verify, { email: '' })),
      }),
      a.default.createElement(l.dj.TextArea, {
        w: 268,
        h: 112,
        x: 40,
        y: 60,
        editble: !1,
        placeholder:
          '1.  邮箱地址不正确 \n\n2. 验证邮箱因为延迟等原因还没有发出 \n\n3. 邮箱验证被接收的邮箱服务器判断为垃圾邮件，自动转入垃圾邮箱中',
      }),
      a.default.createElement(l.dj.TextArea, {
        w: 293,
        h: 36,
        x: 40,
        y: 190,
        editble: !1,
        placeholder: '以上方法还为解决您的问题，请在验证界面点击重新发送或重新注册',
      }),
      a.default.createElement(l.dj.Button, {
        w: 300,
        h: 36,
        x: 35,
        y: 254,
        mode: 'Sparker',
        text: '上一步',
        clickHandle: () => n.store.setState.user_UI(a.default.createElement(c.Verify, { email: '' })),
      }),
      a.default.createElement(l.dj.Button, {
        w: 12,
        h: 12,
        x: 321,
        y: 26,
        img: { size: { w: 12, h: 12 }, src: i.res.img.close },
        clickHandle: () => {
          (n.store.setState.userOpen(!1),
            n.store.setState.user_UI(a.default.createElement(u.Login, null)),
            n.store.setState.user_warningText(''));
        },
      }),
    ),
  );
