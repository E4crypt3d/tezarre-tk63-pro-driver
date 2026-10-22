/* Recovered from Tezarre Driver 1.1.31 - renderer module Sgu3 */

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
      return new (r || (r = Promise))(function (a, l) {
        function i(e) {
          try {
            d(n.next(e));
          } catch (t) {
            l(t);
          }
        }
        function o(e) {
          try {
            d(n.throw(e));
          } catch (t) {
            l(t);
          }
        }
        function d(e) {
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
        d((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.UserCenter = void 0));
const a = r(require('react')),
  l = require('./../../../dj.js'),
  i = require('./../../../res.js'),
  o = require('./../../../sdk.js'),
  d = require('./../../store.js'),
  u = require('./../../utils/_2500ms消失文字.js'),
  s = require('./../../../mobxStore/store.js'),
  c = require('mobx-react-lite'),
  f = require('./../../../../unitys/timeFunc.js');
exports.UserCenter = () => {
  const { user_warningText: e } = d.store.useState((e) => e.user_warningText),
    [t, r] = a.useState({ old: '', new: '', new2: '' }),
    { isKeyStore: y } = s.useStore(),
    w = () =>
      n(void 0, void 0, void 0, function* () {
        (y.setTextKey(!0),
          '' === t.old || '' === t.new || '' === t.new2
            ? d.store.setState.user_warningText(
                a.default.createElement(u._2500ms消失文字, {
                  key: Date.now(),
                  text: i.res.string.请将所有的内容填满噢,
                }),
              )
            : t.new.length < 6 || t.new.length > 25
              ? d.store.setState.user_warningText(
                  a.default.createElement(u._2500ms消失文字, {
                    key: Date.now(),
                    text: '密码长度应在 6-25 个字符之间',
                  }),
                )
              : t.new !== t.new2
                ? d.store.setState.user_warningText(
                    a.default.createElement(u._2500ms消失文字, {
                      key: Date.now(),
                      text: i.res.string.您两次输入的密码不一致,
                    }),
                  )
                : t.new === t.old
                  ? d.store.setState.user_warningText(
                      a.default.createElement(u._2500ms消失文字, {
                        key: Date.now(),
                        text: i.res.string.新旧密码一致无法进行修改,
                      }),
                    )
                  : yield o.sdk.ioFunc
                      .userChangePassword(t.old, t.new)
                      .then((e) =>
                        d.store.setState.user_warningText(
                          a.default.createElement(u._2500ms消失文字, {
                            key: Date.now(),
                            text: 0 === e.errCode ? i.res.string.密码修改成功 : i.res.string.密码修改失败,
                          }),
                        ),
                      ),
          r({ old: '', new: '', new2: '' }));
      }),
    { configStore: m, deviceStore: x, userStore: g } = s.useStore(),
    h = () =>
      n(void 0, void 0, void 0, function* () {
        var e, t;
        if (
          (yield o.sdk.ioFunc.userLogout().then((e) => {
            0 === e.errCode && d.store.setState.user_Name('');
          }),
          yield f.sleep(500),
          0 === m.configList.length)
        ) {
          if (void 0 === (null === (e = x.currentDev) || void 0 === e ? void 0 : e.deviceType.displayName))
            return;
          x.creatNewConfigToCurrentAndSave(
            null === (t = x.currentDev) || void 0 === t ? void 0 : t.deviceType.displayName,
            '',
          );
        }
        x.currentConfig.localId !== m.configList[0].localId &&
          (x.setCurrentConfig(m.configList[0]), d.store.setState.configurationOpen(!1));
      }),
    v = () => m.uploadConfigs(),
    j = () => m.downloadConfigs();
  return c.useObserver(() => {
    var n;
    return void 0 === g.user
      ? a.default.createElement(l.dj.Text, {
          type: '启动页主标题',
          text: i.res.string.请您登录后再进入个人中心,
        })
      : a.default.createElement(
          a.Fragment,
          null,
          a.default.createElement(
            l.dj.View,
            { w: 400, h: 131, x: 0, y: 0 },
            a.default.createElement(l.dj.Text, { h: 25, y: 0, type: '个人中心标题', text: '云同步' }),
            a.default.createElement(l.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.Text, {
              h: 20,
              y: 60,
              text: '上传该设置，将保存到我的云共享',
              type: '描述',
            }),
            a.default.createElement(l.dj.Button, {
              w: 130,
              h: 32,
              y: 99,
              text: '上传当前设置',
              mode: 'BorderBackground',
              clickHandle: v,
            }),
          ),
          a.default.createElement(
            l.dj.View,
            { w: 400, h: 131, x: 491, y: 0 },
            a.default.createElement(l.dj.Text, { h: 25, y: 0, type: '个人中心标题', text: '云同步' }),
            a.default.createElement(l.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.Text, {
              h: 20,
              y: 60,
              text: '下载云端设置，将覆盖当前设置',
              type: '描述',
            }),
            a.default.createElement(l.dj.Button, {
              w: 130,
              h: 32,
              y: 99,
              text: '下载云端设置',
              mode: 'BorderBackground',
              clickHandle: j,
            }),
          ),
          a.default.createElement(
            l.dj.View,
            { w: 400, h: 201, y: 211 },
            a.default.createElement(l.dj.Text, { h: 25, y: 0, text: '修改密码', type: '个人中心标题' }),
            ' ',
            a.default.createElement(l.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.TextInput, {
              w: 400,
              h: 35,
              y: 59,
              type: '密码',
              usePlaceholder: i.res.useString.请输入旧密码,
              value: t.old,
              onChange: (e) => r(Object.assign(Object.assign({}, t), { old: e.target.value })),
            }),
            a.default.createElement(l.dj.Line, { w: 400, y: 98, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.TextInput, {
              w: 400,
              h: 35,
              y: 116,
              type: '密码',
              usePlaceholder: i.res.useString.请输入新密码,
              value: t.new,
              onChange: (e) => r(Object.assign(Object.assign({}, t), { new: e.target.value })),
            }),
            a.default.createElement(l.dj.Line, { w: 400, y: 155, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.TextInput, {
              w: 400,
              h: 35,
              y: 171,
              type: '密码',
              usePlaceholder: i.res.useString.再次输入新密码,
              value: t.new2,
              onChange: (e) => r(Object.assign(Object.assign({}, t), { new2: e.target.value })),
            }),
            a.default.createElement(l.dj.Line, { w: 400, y: 210, lineColor: 'UserCenter' }),
          ),
          a.default.createElement(
            l.dj.View,
            { w: 400, h: 201, x: 491, y: 211 },
            a.default.createElement(l.dj.Text, { h: 25, y: 0, text: '我的设备', type: '个人中心标题' }),
            a.default.createElement(l.dj.Line, { w: 400, y: 41, lineColor: 'UserCenter' }),
            a.default.createElement(l.dj.Text, {
              w: 400,
              h: 35,
              y: 67,
              type: 'SubTitle',
              text: null === (n = x.currentDev) || void 0 === n ? void 0 : n.deviceType.displayName,
            }),
            a.default.createElement(l.dj.Line, { w: 400, y: 98, lineColor: 'UserCenter' }),
          ),
          a.default.createElement(l.dj.Button, {
            w: 130,
            h: 32,
            x: 0,
            y: 453,
            text: '修改密码',
            mode: 'BorderBackground',
            clickHandle: w,
          }),
          a.default.createElement(l.dj.Button, {
            w: 92,
            h: 32,
            x: 800,
            y: 450,
            text: '退出登录',
            mode: 'Border',
            clickHandle: h,
          }),
          y.textKey &&
            a.default.createElement(l.dj.Text, { text: e, type: '提示', w: 360, h: 20, x: 400, y: 400 }),
        );
  });
};
