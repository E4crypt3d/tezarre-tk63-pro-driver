/* Recovered from Tezarre Driver 1.1.31 - renderer module qL7U */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, i, r) {
          (void 0 === r && (r = i),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }));
        }
      : function (e, t, i, r) {
          (void 0 === r && (r = i), (e[r] = t[i]));
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
      var r = {};
      if (null != i) for (var l in i) 'default' !== l && Object.hasOwnProperty.call(i, l) && e(r, i, l);
      return (t(r, i), r);
    },
  r =
    (this && this.__awaiter) ||
    function (e, t, i, r) {
      return new (i || (i = Promise))(function (l, a) {
        function n(e) {
          try {
            s(r.next(e));
          } catch (t) {
            a(t);
          }
        }
        function o(e) {
          try {
            s(r.throw(e));
          } catch (t) {
            a(t);
          }
        }
        function s(e) {
          var t;
          e.done
            ? l(e.value)
            : ((t = e.value),
              t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  })).then(n, o);
        }
        s((r = r.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.LEDRGBLight = void 0));
const l = i(require('react')),
  a = require('./../../../dj.js'),
  n = require('./../../../res.js'),
  o = require('./../../../../UI/utils/LightRange.js'),
  s = require('./../../utils/WithProps.js'),
  d = require('./Light.js'),
  c = require('./../../../mobxStore/store.js'),
  u = require('./../keyPath.js'),
  g = require('mobx-react-lite'),
  h = require('./../../../mobxStore/deviceStore.js'),
  m = require('./../../../../unitys/timeFunc.js'),
  p = (e) => {
    var t;
    const i = d.lightCurrentLayout(e),
      [s, p] = l.useState(!1),
      y = e.lightLayout.isRgb && i.rgb,
      f = e.lightLayout.isRgb && i.dazzle,
      x = y ? d.getLightRgb(e.light) : { r: 0, g: 0, b: 0 },
      b = (t) => {
        y &&
          'rgb' in e.light &&
          e.setLight(Object.assign(Object.assign({}, e.light), { rgb: t, dazzle: !1 }));
      },
      { isKeyStore: v } = c.useStore(),
      { lightPageStore: w } = c.useStore();
    (v.setColorPickerKey(s),
      (document.onkeydown = () =>
        !(v.lightKey && !v.colorPickerKey && !v.loginTipBoxKey && 2 !== w.pageIndex)));
    const { deviceStore: S } = c.useStore(),
      { screenStore: j } = c.useStore(),
      E = null === (t = S.currentDev) || void 0 === t ? void 0 : t.deviceType.id,
      D = u.getKeyPath(),
      L = new Array();
    for (let r = 0; r < j.screenArr.length; r++) L.push(n.res.text.屏幕() + (r + 1));
    return g.useObserver(() =>
      l.default.createElement(
        a.dj.View,
        { w: 891, h: 480, x: 0, y: 30 },
        l.default.createElement(
          a.dj.FlexView,
          { flexDirection: 'column', w: 871, h: 80, justifyContent: 'space-between' },
          l.default.createElement(
            a.dj.View,
            { relative: !0, w: 871, h: 28 },
            l.default.createElement(
              a.dj.View,
              { w: 280, h: 28, x: 0 },
              l.default.createElement(a.dj.Text, {
                w: 60,
                x: 0,
                type: 'SubTitle',
                text: n.res.string.灯光模式,
              }),
              l.default.createElement(a.dj.ComboBox, {
                w: 200,
                h: 28,
                x: 70,
                selectedValue: h.DeviceStore.lightNameMap[e.light.type]
                  ? h.DeviceStore.lightNameMap[e.light.type]
                  : e.light.type,
                onChange: (t) => {
                  ((t) => d.modeKeyChange(e, t))(E + 'led&' + e.lightLayout.types[t].type);
                },
                modes: e.lightLayout.types.map((e) =>
                  h.DeviceStore.lightNameMap[e.type] ? h.DeviceStore.lightNameMap[e.type] : e.type,
                ),
              }),
            ),
            l.default.createElement(
              a.dj.View,
              { w: 334, h: 28, x: 332 },
              l.default.createElement(a.dj.Text, {
                w: 50,
                x: 0,
                type: 'SubTitle',
                text: n.res.string.速度,
                isDisabled: void 0 === i.minSpeed,
              }),
              l.default.createElement(o.LightRange, {
                min: void 0 === i.minSpeed ? 0 : i.minSpeed,
                max: void 0 === i.maxSpeed ? 4 : i.maxSpeed,
                value: 'speed' in e.light ? e.light.speed : 0,
                setValue: (t) => {
                  'speed' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { speed: t }));
                },
                leftDescription: n.res.text.慢(),
                rightDescription: n.res.text.快(),
                isDisabled: void 0 === i.minSpeed,
              }),
            ),
            l.default.createElement(
              a.dj.View,
              { w: 120, h: 28, x: 727 },
              y &&
                l.default.createElement(
                  l.Fragment,
                  null,
                  l.default.createElement(a.dj.ColorBlock, {
                    w: 16,
                    h: 16,
                    y: 0,
                    bg: `rgb(${x.r},${x.g},${x.b})`,
                    clickHandle: () => {
                      p(!s);
                    },
                  }),
                  l.default.createElement(a.dj.Text, {
                    w: 100,
                    h: 26,
                    x: 28,
                    y: -0,
                    type: 'SubTitle',
                    text: n.res.string.当前使用颜色,
                  }),
                ),
            ),
            'LightScreenColor' === e.light.type &&
              l.default.createElement(
                a.dj.View,
                { w: 120, h: 56, x: 727 },
                l.default.createElement(
                  'div',
                  { style: { width: 120, height: 56 } },
                  l.default.createElement(a.dj.ColorBlock, {
                    w: 120,
                    h: 56,
                    y: 0,
                    bg: `rgba(\n                                            ${j.screenDataArray[0]},\n                                            ${j.screenDataArray[1]},\n                                            ${j.screenDataArray[2]},\n                                            ${j.screenDataArray[3] / 255}\n                                            )`,
                  }),
                ),
              ),
          ),
          l.default.createElement(
            a.dj.View,
            { relative: !0, w: 871, h: 28 },
            l.default.createElement(
              a.dj.View,
              { w: 280, h: 28, x: 0 },
              l.default.createElement(a.dj.Text, {
                w: 60,
                x: 0,
                type: 'SubTitle',
                text: 'Options',
                isDisabled: void 0 === i.options && 'LightScreenColor' !== e.light.type,
              }),
              l.default.createElement(a.dj.ComboBox, {
                w: 200,
                h: 28,
                x: 70,
                onChange: (t) =>
                  r(void 0, void 0, void 0, function* () {
                    'LightScreenColor' !== e.light.type
                      ? 'option' in e.light &&
                        i.options &&
                        e.setLight(Object.assign(Object.assign({}, e.light), { option: i.options[t] }))
                      : (c.mobxStore.toastStore.setState('bussy', 'screen'),
                        yield m.sleep(2e3),
                        j.setScreenIndex(t),
                        c.mobxStore.toastStore.setState('idle', 'screen'));
                  }),
                selectedValue:
                  'LightScreenColor' === e.light.type
                    ? L[j.screenIndex]
                    : 'option' in e.light
                      ? e.light.option
                      : void 0,
                modes: 'LightScreenColor' === e.light.type ? L : void 0 === i.options ? [] : i.options,
                isDisabled: void 0 === i.options && 'LightScreenColor' !== e.light.type,
              }),
            ),
            l.default.createElement(
              a.dj.View,
              { w: 334, h: 28, x: 332 },
              l.default.createElement(a.dj.Text, {
                w: 80,
                type: 'SubTitle',
                text: n.res.string.亮度,
                isDisabled: void 0 === i.minValue,
              }),
              l.default.createElement(o.LightRange, {
                min: void 0 === i.minValue ? 0 : i.minValue,
                max: void 0 === i.maxValue ? 5 : i.maxValue,
                leftDescription: n.res.text.暗(),
                rightDescription: n.res.text.明(),
                value: 'value' in e.light ? e.light.value : 0,
                setValue: (t) => {
                  'value' in e.light && e.setLight(Object.assign(Object.assign({}, e.light), { value: t }));
                },
                isDisabled: void 0 === i.minValue,
              }),
            ),
          ),
          l.default.createElement(
            a.dj.View,
            { w: 120, h: 28, x: 727, y: 53 },
            f &&
              l.default.createElement(
                l.Fragment,
                null,
                l.default.createElement(a.dj.DazzleColorCheckBox, {
                  w: 60,
                  h: 16,
                  y: 0,
                  text: n.res.string.炫彩,
                  isBool: !0,
                  checkState: void 0 !== e.light.dazzle && e.light.dazzle,
                  type: 'Normal',
                  clickHandle: () => {
                    (v.setDazzleKey(!e.light.dazzle),
                      e.setLight(Object.assign(Object.assign({}, e.light), { dazzle: v.dazzleKey })));
                  },
                }),
              ),
          ),
        ),
        l.default.createElement(a.dj.Img, {
          w: 871,
          h: 288,
          y: 159,
          imgBg: e.deviceName ? D : n.res.img.MG912,
        }),
        y &&
          s &&
          l.default.createElement(
            a.dj2.View2,
            { x: 571, y: 33 },
            l.default.createElement(d.PopColorPicker, {
              color: x,
              setColor: b,
              clickHandle: p,
              direction: 'down',
            }),
          ),
      ),
    );
  };
exports.LEDRGBLight = s.withProps(p, s.wheelLightLEDData);
