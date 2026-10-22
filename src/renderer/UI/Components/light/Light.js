/* Recovered from Tezarre Driver 1.1.31 - renderer module vEZL */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, o) {
          (void 0 === o && (o = i),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, o) {
          (void 0 === o && (o = i), (e[o] = t[i]));
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
  i =
    (this && this.__importStar) ||
    function (i) {
      if (i && i.__esModule) return i;
      var o = {};
      if (null != i) for (var l in i) 'default' !== l && Object.hasOwnProperty.call(i, l) && e(o, i, l);
      return (t(o, i), o);
    },
  o =
    (this && this.__awaiter) ||
    function (e, t, i, o) {
      return new (i || (i = Promise))(function (l, r) {
        function a(e) {
          try {
            d(o.next(e));
          } catch (t) {
            r(t);
          }
        }
        function n(e) {
          try {
            d(o.throw(e));
          } catch (t) {
            r(t);
          }
        }
        function d(e) {
          var t;
          e.done
            ? l(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(a, n);
        }
        d((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.RGBLight =
    exports.LogoLight =
    exports.WheelLight =
    exports.PopColorPicker =
    exports.lightCurrentLayout =
    exports.modeKeyChange =
    exports.getLightRgb =
      void 0));
const l = i(require('react')),
  r = require('./../../../dj.js'),
  a = require('./../../../res.js'),
  n = require('./../../../../UI/utils/LightRange.js'),
  d = require('./ColorPicker.js'),
  s = require('./../../utils/WithProps.js'),
  g = require('./../home/Keyboard.js'),
  u = require('./../../../unitys/rgbNum.js'),
  c = require('./../../utils/OutsideAlerter.js'),
  h = require('./../../../mobxStore/deviceStore.js'),
  p = require('./../../../screenConfig.js'),
  m = require('./../../../mobxStore/store.js'),
  v = require('mobx-react-lite'),
  y = require('./../keyPath.js'),
  x = require('./../../../../unitys/timeFunc.js'),
  b = 327,
  f = 335,
  S = 269,
  w = p.baseW;
exports.getLightRgb = (e) => u.numToRgb(('rgb' in e && e.rgb) || 0);
const j = (e, t) => {
  if (t.slice(t.indexOf('&') + 1) === e.light.type) return;
  let i = e.lightLayout.types.find((e) => e.type === t),
    o = { type: t };
  const l = localStorage.getItem(t);
  (null !== l
    ? (o = JSON.parse(l))
    : void 0 !== i &&
      (void 0 !== i.minSpeed && void 0 !== i.maxSpeed && (o.speed = (i.maxSpeed - i.minSpeed) / 2),
      void 0 !== i.minValue && void 0 !== i.maxValue && (o.value = (i.maxValue - i.minValue) / 2),
      void 0 !== i.rgb && (o.rgb = u.rgbToNum(255, 69, 110)),
      void 0 !== i.options && (o.option = i.options[0])),
    localStorage.setItem(t, JSON.stringify(o)),
    e.setLight(o));
};
((exports.modeKeyChange = (e, t) => {
  const i = t.slice(t.indexOf('&') + 1);
  if (i === e.light.type) return;
  let o = e.lightLayout.types.find((e) => e.type === i),
    l = { type: i };
  const r = localStorage.getItem(t);
  (null !== r
    ? (l = JSON.parse(r))
    : void 0 !== o &&
      (void 0 !== o.minSpeed && void 0 !== o.maxSpeed && (l.speed = (o.maxSpeed - o.minSpeed) / 2),
      void 0 !== o.minValue && void 0 !== o.maxValue && (l.value = o.maxValue),
      void 0 !== o.rgb && (l.rgb = u.rgbToNum(255, 69, 110)),
      void 0 !== o.dazzle && (l.dazzle = !0),
      void 0 !== o.options && (l.option = o.options[0])),
    localStorage.setItem(t, JSON.stringify(l)),
    e.setLight(l));
}),
  (exports.lightCurrentLayout = (e) => {
    const t = e.lightLayout.types.find((t) => t.type === e.light.type);
    return (
      t || {
        maxSpeed: void 0,
        minSpeed: void 0,
        maxValue: void 0,
        minValue: void 0,
        options: void 0,
        rgb: void 0,
        dazzle: void 0,
      }
    );
  }));
const L = (e) => {
  var t;
  const i = exports.lightCurrentLayout(e),
    o =
      e.lightLayout.isRgb &&
      (null === (t = e.lightLayout.types.find((t) => t.type === e.light.type)) || void 0 === t
        ? void 0
        : t.rgb),
    s = o ? exports.getLightRgb(e.light) : { r: 0, g: 0, b: 0 };
  return l.default.createElement(
    r.dj.View,
    { w: 891, h: 480, x: 0 },
    l.default.createElement(
      r.dj.View,
      { w: 280, h: 28, x: 0, y: 30 },
      l.default.createElement(r.dj.Text, { w: 60, x: 0, type: 'SubTitle', text: a.res.string.灯光模式 }),
      l.default.createElement(r.dj.ComboBox, {
        w: 200,
        h: 28,
        x: 70,
        selectedValue: h.DeviceStore.lightNameMap[e.light.type]
          ? h.DeviceStore.lightNameMap[e.light.type]
          : e.light.type,
        onChange: (t) => ((t) => j(e, t))(e.lightLayout.types[t].type),
        modes: e.lightLayout.types.map((e) =>
          h.DeviceStore.lightNameMap[e.type] ? h.DeviceStore.lightNameMap[e.type] : e.type,
        ),
      }),
    ),
    l.default.createElement(
      r.dj.View,
      { w: 334, h: 28, y: 101 },
      void 0 !== i.minSpeed &&
        l.default.createElement(
          l.Fragment,
          null,
          l.default.createElement(r.dj.Text, {
            w: 30,
            type: 'SubTitle',
            text: a.res.string.亮度,
            isDisabled: !1,
          }),
          l.default.createElement(n.LightRange, {
            min: void 0 === i.minValue ? 0 : i.minValue,
            max: void 0 === i.maxValue ? 5 : i.maxValue,
            leftDescription: a.res.text.暗(),
            rightDescription: a.res.text.明(),
            value: 'speed' in e.light ? e.light.speed : 0,
            setValue: (t) => {
              'speed' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { speed: t }));
            },
            isDisabled: !1,
          }),
        ),
      void 0 !== i.minValue &&
        l.default.createElement(
          l.Fragment,
          null,
          l.default.createElement(r.dj.Text, {
            w: 30,
            type: 'SubTitle',
            text: a.res.string.速度,
            isDisabled: !1,
          }),
          l.default.createElement(n.LightRange, {
            min: void 0 === i.minSpeed ? 0 : i.minSpeed,
            max: void 0 === i.maxSpeed ? 5 : i.maxSpeed,
            leftDescription: a.res.text.慢(),
            rightDescription: a.res.text.快(),
            value: 'value' in e.light ? e.light.value : 0,
            setValue: (t) => {
              'value' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { value: t }));
            },
            isDisabled: !1,
          }),
        ),
    ),
    o &&
      l.default.createElement(r.dj.Text, {
        h: 14,
        y: 135,
        type: '灯光界面提示',
        text: '请选择在使用呼吸模式和灯光常亮模式时要使用的颜色',
      }),
    l.default.createElement(
      r.dj.View,
      { w: 327, h: 335, y: 187 },
      l.default.createElement(d.ColorPicker, {
        color: s,
        setColor: (t) =>
          o && 'rgb' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { rgb: t })),
      }),
    ),
    !o && l.default.createElement(r.dj.View, { w: 327, h: 335, y: 187 }, ''),
    l.default.createElement(r.dj.Img, { w: 186, h: 366, x: 612, y: 52, imgBg: a.res.img.MG912 }),
  );
};
exports.PopColorPicker = (e) => {
  const [t, i] = l.useState(!1);
  return l.default.createElement(
    d.PopUpBox,
    { direction: e.direction, triangleX: e.triangleX },
    l.default.createElement(
      c.OutsideAlerter,
      {
        clickOutsideHandle: () => {
          (!t && e.clickHandle(!1), i(!1));
        },
      },
      l.default.createElement(
        r.dj.View,
        null,
        l.default.createElement(d.ColorPicker, { color: e.color, setColor: e.setColor, setEdit: i }),
      ),
    ),
  );
};
const E = (e) => {
    const { lightLayout: t, deviceLayout: i, lightPic: o, setLightPic: a } = e,
      [n, d] = l.useState(!1),
      [s, c] = l.useState({ x: -1, y: -1, width: -1, height: -1, hid: -1, index: void 0 }),
      h = u.numToRgb(
        void 0 !== o.find((e) => e.hid === s.hid && e.index === s.index)
          ? o.find((e) => e.hid === s.hid && e.index === s.index).rgb
          : 206,
      ),
      { isKeyStore: p } = m.useStore();
    p.setColorPickerKey(n);
    const v =
      s.x + s.width / 2 + 163.5 + 269 + e.deviceLayout.delt.deltX > w
        ? w - 327 - 269
        : s.x - 163.5 + s.width / 2;
    return l.default.createElement(
      l.Fragment,
      null,
      l.default.createElement(
        r.dj.View,
        { w: 871, h: 288, y: 159 },
        l.default.createElement(g.KeyboardBlocks, {
          deviceLayout: i,
          changedValue: o.map((e) => ({
            hid: e.hid,
            mode: t.isRgb
              ? {
                  color: `rgb(${u.numToRgb(e.rgb).r},${u.numToRgb(e.rgb).g},${u.numToRgb(e.rgb).b})`,
                  type: 'CustomWeight',
                }
              : { color: 0 !== e.rgb ? 'rgb(200,200,200)' : 'rgb(0,0,0)', type: 'CustomWeight' },
            index: e.index,
          })),
          mouseDown: (e, t, i, o, l, r, a) => {
            c({ x: i, y: o, width: l, height: r, hid: e, index: a });
          },
          mouseUp: (e, i, l, r, n, g, u) => {
            t.isRgb
              ? d(!0)
              : ((e, t) => {
                  const i = o.slice(),
                    l = i.findIndex((i) => i.hid === e && i.index === t);
                  -1 !== l &&
                    (0 === i[l].rgb
                      ? i.splice(l, 1, { hid: s.hid, rgb: 13158600, index: t })
                      : i.splice(l, 1, { hid: s.hid, rgb: 0, index: t }),
                    void 0 === t && a(i));
                })(e, u);
          },
          mode: t.isRgb ? 'Multicolor' : 'Monochrome',
        }),
      ),
      n &&
        l.default.createElement(
          r.dj.View,
          { x: v, y: s.y - 335 - s.height / 2 + 159 },
          l.default.createElement(exports.PopColorPicker, {
            color: h,
            setColor: (e) => {
              const t = o.slice(),
                i = t.findIndex((e) => e.hid === s.hid && e.index === s.index);
              (t.splice(i, 1, { hid: s.hid, rgb: e, index: s.index }), a(t));
            },
            clickHandle: d,
            direction: 'up',
            triangleX: s.x + s.width / 2 - v - 9,
          }),
        ),
    );
  },
  O = (e) => {
    var t;
    const i = exports.lightCurrentLayout(e),
      [d, s] = l.useState(!1),
      g = e.lightLayout.isRgb && i.rgb,
      u = e.lightLayout.isRgb && i.dazzle,
      c = g ? exports.getLightRgb(e.light) : { r: 0, g: 0, b: 0 },
      p = (t) => {
        g &&
          'rgb' in e.light &&
          e.setLight(Object.assign(Object.assign({}, e.light), { rgb: t, dazzle: !1 }));
      },
      { isKeyStore: b } = m.useStore(),
      { lightPageStore: f } = m.useStore();
    (b.setColorPickerKey(d),
      (document.onkeydown = () =>
        !(b.lightKey && !b.colorPickerKey && !b.loginTipBoxKey && 2 !== f.pageIndex)));
    const { deviceStore: S } = m.useStore(),
      { screenStore: w } = m.useStore(),
      j = null === (t = S.currentDev) || void 0 === t ? void 0 : t.deviceType.id,
      L = y.getKeyPath(),
      O = new Array();
    for (let o = 0; o < w.screenArr.length; o++) O.push(a.res.text.屏幕() + (o + 1));
    return (
      e.lightLayout.isFormal && S.setFormalLightName(),
      v.useObserver(() => {
        var t, v, y, f, V, D, C, k, M, P, T, z;
        return l.default.createElement(
          r.dj.View,
          { w: 891, h: 480, x: 0, y: 30 },
          l.default.createElement(
            r.dj.FlexView,
            { flexDirection: 'column', w: 871, h: 80, justifyContent: 'space-between' },
            l.default.createElement(
              r.dj.View,
              { relative: !0, w: 871, h: 28 },
              l.default.createElement(
                r.dj.View,
                { w: 280, h: 28, x: 0 },
                l.default.createElement(r.dj.Text, {
                  w: 60,
                  x: 0,
                  type: 'SubTitle',
                  text: a.res.string.灯光模式,
                }),
                l.default.createElement(r.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 70,
                  selectedValue: h.DeviceStore.lightNameMap[e.light.type]
                    ? h.DeviceStore.lightNameMap[e.light.type]
                    : e.light.type,
                  onChange: (t) => {
                    var i;
                    if (null === (i = S.keyboardOption) || void 0 === i ? void 0 : i.powerSaveMode) return;
                    ((t) => exports.modeKeyChange(e, t))(j + '&' + e.lightLayout.types[t].type);
                  },
                  modes: (null === (t = S.keyboardOption) || void 0 === t ? void 0 : t.powerSaveMode)
                    ? [a.res.text.关闭()]
                    : e.lightLayout.types.map((e) =>
                        h.DeviceStore.lightNameMap[e.type] ? h.DeviceStore.lightNameMap[e.type] : e.type,
                      ),
                  clickHandle: () => {
                    var t;
                    if (null === (t = S.keyboardOption) || void 0 === t ? void 0 : t.powerSaveMode) return;
                    const i = j + '&' + e.light.type;
                    localStorage.setItem(i, JSON.stringify(e.light));
                  },
                }),
              ),
              l.default.createElement(
                r.dj.View,
                { w: 334, h: 28, x: 332 },
                l.default.createElement(r.dj.Text, {
                  w: 50,
                  x: 0,
                  type: 'SubTitle',
                  text: a.res.string.速度,
                  isDisabled:
                    void 0 === i.minSpeed ||
                    !!(null === (v = S.keyboardOption) || void 0 === v ? void 0 : v.powerSaveMode),
                }),
                l.default.createElement(n.LightRange, {
                  min: void 0 === i.minSpeed ? 0 : i.minSpeed,
                  max: void 0 === i.maxSpeed ? 4 : i.maxSpeed,
                  value: 'speed' in e.light ? e.light.speed : 0,
                  setValue: (t) => {
                    'speed' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { speed: t }));
                  },
                  leftDescription: a.res.text.慢(),
                  rightDescription: a.res.text.快(),
                  isDisabled:
                    void 0 === i.minSpeed ||
                    !!(null === (y = S.keyboardOption) || void 0 === y ? void 0 : y.powerSaveMode),
                }),
              ),
              l.default.createElement(
                r.dj.View,
                { w: 120, h: 28, x: 727 },
                g &&
                  !(null === (f = S.keyboardOption) || void 0 === f ? void 0 : f.powerSaveMode) &&
                  l.default.createElement(
                    l.Fragment,
                    null,
                    l.default.createElement(r.dj.ColorBlock, {
                      w: 16,
                      h: 16,
                      y: 0,
                      bg: `rgb(${c.r},${c.g},${c.b})`,
                      clickHandle: () => {
                        s(!d);
                      },
                    }),
                    l.default.createElement(r.dj.Text, {
                      w: 100,
                      h: 26,
                      x: 28,
                      y: -0,
                      type: 'SubTitle',
                      text: a.res.string.当前使用颜色,
                    }),
                  ),
              ),
              'LightScreenColor' === e.light.type &&
                !(null === (V = S.keyboardOption) || void 0 === V ? void 0 : V.powerSaveMode) &&
                l.default.createElement(
                  r.dj.View,
                  { w: 120, h: 56, x: 727 },
                  l.default.createElement(
                    'div',
                    { style: { width: 120, height: 56 } },
                    l.default.createElement(r.dj.ColorBlock, {
                      w: 120,
                      h: 56,
                      y: 0,
                      bg: `rgba(\n                  ${w.screenDataArray[0]},\n                  ${w.screenDataArray[1]},\n                  ${w.screenDataArray[2]},\n                  ${w.screenDataArray[3] / 255}\n                  )`,
                    }),
                  ),
                ),
            ),
            l.default.createElement(
              r.dj.View,
              { relative: !0, w: 871, h: 28 },
              l.default.createElement(
                r.dj.View,
                { w: 280, h: 28, x: 0 },
                l.default.createElement(r.dj.Text, {
                  w: 60,
                  x: 0,
                  type: 'SubTitle',
                  text: a.res.text.播放方式(),
                  isDisabled:
                    (void 0 === i.options && 'LightScreenColor' !== e.light.type) ||
                    !!(null === (D = S.keyboardOption) || void 0 === D ? void 0 : D.powerSaveMode),
                }),
                l.default.createElement(r.dj.ComboBox, {
                  w: 200,
                  h: 28,
                  x: 70,
                  onChange: (t) =>
                    o(void 0, void 0, void 0, function* () {
                      'LightScreenColor' !== e.light.type
                        ? 'option' in e.light &&
                          i.options &&
                          e.setLight(Object.assign(Object.assign({}, e.light), { option: i.options[t] }))
                        : (m.mobxStore.toastStore.setState('bussy', 'screen'),
                          yield x.sleep(2e3),
                          w.setScreenIndex(t),
                          m.mobxStore.toastStore.setState('idle', 'screen'));
                    }),
                  selectedValue:
                    'LightScreenColor' === e.light.type
                      ? O[w.screenIndex]
                      : 'option' in e.light && e.light.option
                        ? h.DeviceStore.optionNameMap[e.light.option]
                          ? h.DeviceStore.optionNameMap[e.light.option]
                          : e.light.option
                        : void 0,
                  modes: (null === (C = S.keyboardOption) || void 0 === C ? void 0 : C.powerSaveMode)
                    ? []
                    : 'LightScreenColor' === e.light.type
                      ? O
                      : void 0 === i.options
                        ? []
                        : i.options
                          ? i.options.map((e) =>
                              h.DeviceStore.optionNameMap[e] ? h.DeviceStore.optionNameMap[e] : e,
                            )
                          : [],
                  isDisabled:
                    (void 0 === i.options && 'LightScreenColor' !== e.light.type) ||
                    !!(null === (k = S.keyboardOption) || void 0 === k ? void 0 : k.powerSaveMode),
                }),
              ),
              l.default.createElement(
                r.dj.View,
                { w: 334, h: 28, x: 332 },
                l.default.createElement(r.dj.Text, {
                  w: 80,
                  type: 'SubTitle',
                  text: a.res.string.亮度,
                  isDisabled:
                    void 0 === i.minValue ||
                    !!(null === (M = S.keyboardOption) || void 0 === M ? void 0 : M.powerSaveMode),
                }),
                l.default.createElement(n.LightRange, {
                  min: void 0 === i.minValue ? 0 : i.minValue,
                  max: void 0 === i.maxValue ? 5 : i.maxValue,
                  leftDescription: a.res.text.暗(),
                  rightDescription: a.res.text.明(),
                  value: 'value' in e.light ? e.light.value : 0,
                  setValue: (t) => {
                    'value' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { value: t }));
                  },
                  isDisabled:
                    void 0 === i.minValue ||
                    !!(null === (P = S.keyboardOption) || void 0 === P ? void 0 : P.powerSaveMode),
                }),
              ),
            ),
            l.default.createElement(
              r.dj.View,
              { w: 120, h: 28, x: 727, y: 53 },
              u &&
                !(null === (T = S.keyboardOption) || void 0 === T ? void 0 : T.powerSaveMode) &&
                l.default.createElement(
                  l.Fragment,
                  null,
                  l.default.createElement(r.dj.DazzleColorCheckBox, {
                    w: 60,
                    h: 16,
                    y: 0,
                    text: a.res.string.炫彩,
                    isBool: !0,
                    checkState: void 0 !== e.light.dazzle && e.light.dazzle,
                    type: 'Normal',
                    clickHandle: () => {
                      (b.setDazzleKey(!e.light.dazzle),
                        e.setLight(Object.assign(Object.assign({}, e.light), { dazzle: b.dazzleKey })));
                    },
                  }),
                ),
            ),
          ),
          (null === (z = S.keyboardOption) || void 0 === z ? void 0 : z.powerSaveMode) &&
            l.default.createElement(
              r.dj.View,
              { h: 20, y: 103 },
              l.default.createElement(r.dj.Text, {
                x: 0,
                type: '键盘提示',
                text: a.res.text.键盘已关闭灯光请打开灯光后重新切换灯效(),
              }),
            ),
          l.default.createElement(r.dj.Img, {
            w: 871,
            h: 288,
            y: 159,
            imgBg: e.deviceName ? L : a.res.img.MG912,
          }),
          g &&
            d &&
            l.default.createElement(
              r.dj2.View2,
              { x: 571, y: 33 },
              l.default.createElement(exports.PopColorPicker, {
                color: c,
                setColor: p,
                clickHandle: s,
                direction: 'down',
              }),
            ),
          'LightUserPicture' === e.light.type && l.default.createElement(E, Object.assign({}, e)),
        );
      })
    );
  };
((exports.WheelLight = s.withProps(L, s.wheelLightData)),
  (exports.LogoLight = s.withProps(L, s.logoLightData)),
  (exports.RGBLight = s.withProps(O, s.wheelLightData)));
