/* Recovered from Tezarre Driver 1.1.31 - renderer module GP4P */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.KeyboardSleep = void 0));
const t = e(require('react')),
  i = require('mobx-react-lite'),
  l = require('./../../../dj.js'),
  r = require('./../../../mobxStore/store.js'),
  d = require('./../../utils/WithProps.js'),
  o = require('./../keyPath.js'),
  n = require('./../../../res.js'),
  v = (e) => {
    var d, v, p, u;
    const s = o.getKeyPath(),
      { deviceStore: c } = r.useStore(),
      m = (t, i) => {
        const l = {
          time_bt: e.sleepTime.time_bt,
          time_24: e.sleepTime.time_24,
          deepTime_bt: e.sleepTime.deepTime_bt,
          deepTime_24: e.sleepTime.deepTime_24,
        };
        ((l[i] = t), e.setSleepTime(l));
      },
      a = new Array(),
      h = new Array(),
      _ = new Array(),
      T = new Array();
    if (
      null === (v = null === (d = c.currentDev) || void 0 === d ? void 0 : d.deviceType.otherSetting) ||
      void 0 === v
        ? void 0
        : v.sleep_24
    ) {
      const e = c.currentDev.deviceType.otherSetting.sleep_24;
      for (let t = 0; t <= e.max - e.min; t++) a.push(t + e.min + n.res.text.分钟());
      for (let t = 0; t <= e.max_deep - e.min_deep; t++) h.push(t + e.min_deep + n.res.text.分钟());
    }
    if (
      null === (u = null === (p = c.currentDev) || void 0 === p ? void 0 : p.deviceType.otherSetting) ||
      void 0 === u
        ? void 0
        : u.sleep_bt
    ) {
      const e = c.currentDev.deviceType.otherSetting.sleep_bt;
      for (let t = 0; t <= e.max - e.min; t++) _.push(t + e.min + n.res.text.分钟());
      for (let t = 0; t <= e.max_deep - e.min_deep; t++) T.push(t + e.min_deep + n.res.text.分钟());
    }
    return i.useObserver(() => {
      var i, r, d, o, v, p, u, g, y, b, D, S, f, x, w, j, E, M, V, C, q, B, P, A, K, O, k, F, I, W, z, G;
      return t.default.createElement(
        l.dj.View,
        { w: 891, h: 480, x: 0, y: 30 },
        t.default.createElement(
          l.dj.FlexView,
          { flexDirection: 'column', w: 871, h: 80, justifyContent: 'space-between' },
          (null === (r = null === (i = c.currentDev) || void 0 === i ? void 0 : i.deviceType.otherSetting) ||
          void 0 === r
            ? void 0
            : r.sleep_24) &&
            t.default.createElement(
              l.dj.View,
              { relative: !0, w: 871, h: 28 },
              t.default.createElement(
                l.dj.View,
                { w: 334, h: 28 },
                t.default.createElement(l.dj.Text, {
                  w: 100,
                  x: 0,
                  type: 'SubTitle',
                  text: n.res.string.关闭背光24,
                  isDisabled: !(null ===
                    (o = null === (d = c.currentDev) || void 0 === d ? void 0 : d.deviceType.otherSetting) ||
                  void 0 === o
                    ? void 0
                    : o.sleep_24),
                }),
                t.default.createElement(l.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 100,
                  isDisabled: !(null ===
                    (p = null === (v = c.currentDev) || void 0 === v ? void 0 : v.deviceType.otherSetting) ||
                  void 0 === p
                    ? void 0
                    : p.sleep_24),
                  selectedValue: (
                    null ===
                      (g =
                        null === (u = c.currentDev) || void 0 === u ? void 0 : u.deviceType.otherSetting) ||
                    void 0 === g
                      ? void 0
                      : g.sleep_24
                  )
                    ? Math.floor(e.sleepTime.time_24 / 60) -
                        c.currentDev.deviceType.otherSetting.sleep_24.min <
                      0
                      ? a[0]
                      : Math.floor(e.sleepTime.time_24 / 60) -
                            c.currentDev.deviceType.otherSetting.sleep_24.min >
                          a.length - 1
                        ? a[a.length - 1]
                        : a[
                            Math.floor(e.sleepTime.time_24 / 60) -
                              c.currentDev.deviceType.otherSetting.sleep_24.min
                          ]
                    : void 0,
                  onChange: (e) => {
                    var t, i;
                    (null ===
                      (i =
                        null === (t = c.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
                    void 0 === i
                      ? void 0
                      : i.sleep_24) &&
                      m(60 * (e + c.currentDev.deviceType.otherSetting.sleep_24.min), 'time_24');
                  },
                  modes: a,
                }),
              ),
              t.default.createElement(
                l.dj.View,
                { w: 334, h: 28, x: 390 },
                t.default.createElement(l.dj.Text, {
                  w: 100,
                  x: 0,
                  type: 'SubTitle',
                  text: n.res.string.睡眠24,
                  isDisabled: !(null ===
                    (b = null === (y = c.currentDev) || void 0 === y ? void 0 : y.deviceType.otherSetting) ||
                  void 0 === b
                    ? void 0
                    : b.sleep_24),
                }),
                t.default.createElement(l.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 100,
                  isDisabled: !(null ===
                    (S = null === (D = c.currentDev) || void 0 === D ? void 0 : D.deviceType.otherSetting) ||
                  void 0 === S
                    ? void 0
                    : S.sleep_24),
                  selectedValue: (
                    null ===
                      (x =
                        null === (f = c.currentDev) || void 0 === f ? void 0 : f.deviceType.otherSetting) ||
                    void 0 === x
                      ? void 0
                      : x.sleep_24
                  )
                    ? Math.floor(e.sleepTime.deepTime_24 / 60) -
                        c.currentDev.deviceType.otherSetting.sleep_24.min_deep <
                      0
                      ? h[0]
                      : Math.floor(e.sleepTime.deepTime_24 / 60) -
                            c.currentDev.deviceType.otherSetting.sleep_24.min_deep >
                          h.length - 1
                        ? h[h.length - 1]
                        : h[
                            Math.floor(e.sleepTime.deepTime_24 / 60) -
                              (null === (w = c.currentDev.deviceType.otherSetting) || void 0 === w
                                ? void 0
                                : w.sleep_24.min_deep)
                          ]
                    : void 0,
                  onChange: (e) => {
                    var t, i;
                    (null ===
                      (i =
                        null === (t = c.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
                    void 0 === i
                      ? void 0
                      : i.sleep_24) &&
                      m(60 * (e + c.currentDev.deviceType.otherSetting.sleep_24.min_deep), 'deepTime_24');
                  },
                  modes: h,
                }),
              ),
            ),
          (null === (E = null === (j = c.currentDev) || void 0 === j ? void 0 : j.deviceType.otherSetting) ||
          void 0 === E
            ? void 0
            : E.sleep_bt) &&
            t.default.createElement(
              l.dj.View,
              {
                w: 334,
                h: 28,
                y: (
                  null ===
                    (V = null === (M = c.currentDev) || void 0 === M ? void 0 : M.deviceType.otherSetting) ||
                  void 0 === V
                    ? void 0
                    : V.sleep_24
                )
                  ? 53
                  : 0,
              },
              t.default.createElement(
                l.dj.View,
                { w: 334, h: 28 },
                t.default.createElement(l.dj.Text, {
                  w: 100,
                  x: 0,
                  type: 'SubTitle',
                  text: n.res.string.蓝牙关闭背光,
                  isDisabled: !(null ===
                    (q = null === (C = c.currentDev) || void 0 === C ? void 0 : C.deviceType.otherSetting) ||
                  void 0 === q
                    ? void 0
                    : q.sleep_bt),
                }),
                t.default.createElement(l.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 100,
                  isDisabled: !(null ===
                    (P = null === (B = c.currentDev) || void 0 === B ? void 0 : B.deviceType.otherSetting) ||
                  void 0 === P
                    ? void 0
                    : P.sleep_bt),
                  selectedValue: (
                    null ===
                      (K =
                        null === (A = c.currentDev) || void 0 === A ? void 0 : A.deviceType.otherSetting) ||
                    void 0 === K
                      ? void 0
                      : K.sleep_bt
                  )
                    ? Math.floor(e.sleepTime.time_bt / 60) -
                        c.currentDev.deviceType.otherSetting.sleep_bt.min <
                      0
                      ? _[0]
                      : Math.floor(e.sleepTime.time_bt / 60) -
                            c.currentDev.deviceType.otherSetting.sleep_bt.min >
                          _.length - 1
                        ? _[_.length - 1]
                        : _[
                            Math.floor(e.sleepTime.time_bt / 60) -
                              (null === (O = c.currentDev.deviceType.otherSetting) || void 0 === O
                                ? void 0
                                : O.sleep_bt.min)
                          ]
                    : void 0,
                  onChange: (e) => {
                    var t, i;
                    (null ===
                      (i =
                        null === (t = c.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
                    void 0 === i
                      ? void 0
                      : i.sleep_bt) &&
                      m(60 * (e + c.currentDev.deviceType.otherSetting.sleep_bt.min), 'time_bt');
                  },
                  modes: _,
                }),
              ),
              t.default.createElement(
                l.dj.View,
                { w: 334, h: 28, x: 390 },
                t.default.createElement(l.dj.Text, {
                  w: 100,
                  x: 0,
                  type: 'SubTitle',
                  text: n.res.string.蓝牙睡眠,
                  isDisabled: !(null ===
                    (F = null === (k = c.currentDev) || void 0 === k ? void 0 : k.deviceType.otherSetting) ||
                  void 0 === F
                    ? void 0
                    : F.sleep_bt),
                }),
                t.default.createElement(l.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 100,
                  isDisabled: !(null ===
                    (W = null === (I = c.currentDev) || void 0 === I ? void 0 : I.deviceType.otherSetting) ||
                  void 0 === W
                    ? void 0
                    : W.sleep_bt),
                  selectedValue: (
                    null ===
                      (G =
                        null === (z = c.currentDev) || void 0 === z ? void 0 : z.deviceType.otherSetting) ||
                    void 0 === G
                      ? void 0
                      : G.sleep_bt
                  )
                    ? Math.floor(e.sleepTime.deepTime_bt / 60) -
                        c.currentDev.deviceType.otherSetting.sleep_bt.min_deep <
                      0
                      ? T[0]
                      : Math.floor(e.sleepTime.deepTime_bt / 60) -
                            c.currentDev.deviceType.otherSetting.sleep_bt.min_deep >
                          T.length - 1
                        ? T[T.length - 1]
                        : T[
                            Math.floor(e.sleepTime.deepTime_bt / 60) -
                              c.currentDev.deviceType.otherSetting.sleep_bt.min_deep
                          ]
                    : void 0,
                  onChange: (e) => {
                    var t, i;
                    (null ===
                      (i =
                        null === (t = c.currentDev) || void 0 === t ? void 0 : t.deviceType.otherSetting) ||
                    void 0 === i
                      ? void 0
                      : i.sleep_bt) &&
                      m(60 * (e + c.currentDev.deviceType.otherSetting.sleep_bt.min_deep), 'deepTime_bt');
                  },
                  modes: T,
                }),
              ),
            ),
        ),
        t.default.createElement(l.dj.Img, { w: 871, h: 288, y: 159, imgBg: s }),
      );
    });
  };
exports.KeyboardSleep = d.withProps(v, d.wheelSleepData);
