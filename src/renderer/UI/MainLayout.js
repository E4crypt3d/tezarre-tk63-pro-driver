/* Recovered from Tezarre Driver 1.1.31 - renderer module QQGm */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, l) {
          (void 0 === l && (l = r),
            Object.defineProperty(e, l, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, l) {
          (void 0 === l && (l = r), (e[l] = t[r]));
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
      var l = {};
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(l, r, n);
      return (t(l, r), l);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MainLayout = void 0));
const l = r(require('react')),
  n = require('./../res.js'),
  i = require('./Components/home/Keyboard.js'),
  o = require('./Components/home/Mouse.js'),
  a = require('./Components/light/Light.js'),
  s = require('./Components/macro/MacroFile.js'),
  u = require('./Components/scheme/Scheme.js'),
  c = require('./Components/center/UserCenter.js'),
  d = require('./Components/support/Support.js'),
  m = require('./../dj.js'),
  g = require('./utils/SubNavbarItem.js'),
  p = require('./../mobxStore/store.js'),
  h = require('mobx-react-lite'),
  x = require('./../appConfig.js'),
  v = require('./Components/shop/shop.js'),
  f = require('./Components/light/SleepUI.js'),
  b = require('./Components/light/LEDLight.js');
exports.MainLayout = () => {
  var e, t, r, y, E, S, j, I, L, C;
  const [_, q] = l.useState(0),
    {
      deviceStore: k,
      pageStore: D,
      macroStore: w,
      shareStore: M,
      isKeyStore: O,
      lightPageStore: P,
    } = p.useStore(),
    K = [
      {
        title: n.res.string.主要设置,
        src: n.res.img.leftbar_home,
        changeable: !0,
        mouse: [{ title: 'CPI', jsx: l.default.createElement(o.MouseHome, null) }],
        keyboard: [{ title: '', jsx: l.default.createElement(i.KeyboardHome, null) }],
        common: [],
        lineExist: !0,
      },
      {
        title: n.res.string.灯光设置,
        src: n.res.img.leftbar_light,
        changeable: !0,
        mouse: [
          { title: 'Wheel灯光', jsx: l.default.createElement(a.WheelLight, null) },
          { title: 'LOGO灯光', jsx: l.default.createElement(a.LogoLight, null) },
        ],
        keyboard: [{ title: n.res.string.灯光, jsx: l.default.createElement(a.RGBLight, null) }],
        common: [],
        lineExist: !0,
      },
      {
        title: n.res.string.宏编辑,
        src: n.res.img.leftbar_edit,
        changeable: !1,
        mouse: [],
        keyboard: [],
        common: [{ title: n.res.string.宏文件, jsx: l.default.createElement(s.MacroFile, null) }],
        lineExist: !0,
      },
      {
        title: n.res.string.方案共享,
        src: n.res.img.leftbar_programme,
        changeable: !1,
        mouse: [],
        keyboard: [],
        common: [
          { title: '配置文件', jsx: l.default.createElement(u.ConfigScheme, null) },
          { title: n.res.string.宏文件, jsx: l.default.createElement(u.MacroScheme, null) },
        ],
        lineExist: !0,
      },
      {
        title: n.res.string.个人中心,
        src: n.res.img.leftbar_personal,
        changeable: !1,
        mouse: [],
        keyboard: [],
        common: [{ title: '', jsx: l.default.createElement(c.UserCenter, null) }],
        lineExist: !1,
      },
      {
        title: n.res.string.支持,
        src: n.res.img.leftbar_support,
        changeable: !1,
        mouse: [],
        keyboard: [],
        common: [{ title: '', jsx: l.default.createElement(d.Support, null) }],
        lineExist: !1,
      },
    ];
  return (
    x.ShopKey &&
      K.push({
        title: 'shop',
        src: n.res.img.leftbar_home,
        changeable: !1,
        mouse: [],
        keyboard: [],
        common: [{ title: '', jsx: l.default.createElement(v.Shop, null) }],
        lineExist: !1,
      }),
    (null === (e = k.currentDev) || void 0 === e ? void 0 : e.deviceType.logoLayout) &&
      K[1].keyboard.push({ title: '灯带', jsx: l.default.createElement(b.LEDRGBLight, null) }),
    ((null === (r = null === (t = k.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
    void 0 === r
      ? void 0
      : r.sleep_24) ||
      (null === (E = null === (y = k.currentDev) || void 0 === y ? void 0 : y.deviceType.otherSetting) ||
      void 0 === E
        ? void 0
        : E.sleep_bt)) &&
      K[1].keyboard.push({
        title: n.res.string.睡眠设置,
        jsx: l.default.createElement(f.KeyboardSleep, null),
      }),
    x.blockCloud && (console.log('SPLLLICCCCEEE'), K.splice(3, 2)),
    (null === (S = k.currentDev) || void 0 === S ? void 0 : S.deviceType.logoLayout) ||
      (null === (I = null === (j = k.currentDev) || void 0 === j ? void 0 : j.deviceType.otherSetting) ||
      void 0 === I
        ? void 0
        : I.sleep_24) ||
      (null === (C = null === (L = k.currentDev) || void 0 === L ? void 0 : L.deviceType.otherSetting) ||
      void 0 === C
        ? void 0
        : C.sleep_bt) ||
      P.setPageIndex(0),
    h.useObserver(() =>
      l.default.createElement(
        l.Fragment,
        null,
        l.default.createElement(
          m.dj.View,
          { w: 224, h: 605, y: 61 },
          l.default.createElement(m.dj.VerticalLine, { x: 224 }),
          l.default.createElement(
            m.dj.FlexView,
            { w: 224, h: 315, x: 38, y: 44, flexDirection: 'column' },
            K.map((e, t) =>
              l.default.createElement(m.dj.Button, {
                relative: !0,
                key: t,
                w: 106,
                h: 45,
                img: { size: { w: 22, h: 22 }, src: e.src },
                textW: 72,
                mode: '侧边栏',
                isHightLight: D.pageIndex === t,
                text: e.title,
                clickHandle: () => {
                  'stop' === w.recodingState
                    ? (O.setTextKey(!1),
                      D.setPageIndex(t),
                      q(0),
                      K[D.pageIndex].title === n.res.string.灯光设置 ? O.setLightKey(!0) : O.setLightKey(!1))
                    : p.mobxStore.toastStore.setInfo(n.res.text.请先停止录制());
                },
              }),
            ),
          ),
        ),
        l.default.createElement(
          m.dj.View,
          { w: 975, h: 604, x: 224, y: 61 },
          l.default.createElement(
            m.dj.View,
            { w: 352, h: 40, x: 40, y: 44 },
            K[D.pageIndex].lineExist &&
              l.default.createElement(m.dj.Line, { y: 40, w: 880, lineColor: 'Normal' }),
            l.default.createElement(
              m.dj.FlexView,
              null,
              K[D.pageIndex][
                K[D.pageIndex].changeable ? (k.currentDev ? k.currentDev.type : 'keyboard') : 'common'
              ].map(
                (e, t) =>
                  '' !== e.title &&
                  l.default.createElement(g.SubNavbarItem, {
                    key: t,
                    title: e.title,
                    isClick:
                      K[D.pageIndex].title === n.res.string.方案共享
                        ? M.currentShareListNum === t
                        : K[D.pageIndex].title === n.res.string.灯光设置
                          ? P.pageIndex === t
                          : _ === t,
                    clickHandle: () => {
                      (K[D.pageIndex].title === n.res.string.方案共享 &&
                        (0 === t && M.setCurrentShareListNum(t), 1 === t && M.setCurrentShareListNum(t)),
                        K[D.pageIndex].title === n.res.string.灯光设置 && t <= 2 && P.setPageIndex(t));
                    },
                  }),
              ),
            ),
          ),
          l.default.createElement(
            m.dj.View,
            { x: 44, y: 85, w: 891, h: 583 },
            '',
            K[D.pageIndex][K[D.pageIndex].changeable && k.currentDev ? k.currentDev.type : 'common'].length <=
              _
              ? q(0)
              : K[D.pageIndex][K[D.pageIndex].changeable && k.currentDev ? k.currentDev.type : 'common'][
                  K[D.pageIndex].title === n.res.string.方案共享
                    ? M.currentShareListNum
                    : K[D.pageIndex].title === n.res.string.灯光设置
                      ? P.pageIndex
                      : _
                ].jsx,
          ),
        ),
      ),
    )
  );
};
