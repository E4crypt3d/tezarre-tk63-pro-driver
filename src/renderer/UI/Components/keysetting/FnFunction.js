/* Recovered from Tezarre Driver 1.1.31 - renderer module j0z2 */

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
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(n, r, o);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.FnFunction = exports.fnShowItems = void 0));
const n = r(require('react')),
  o = require('./../../../dj.js'),
  i = require('./../../../mobxStore/store.js'),
  u = require('./../../../映射.js'),
  c = require('./../../../unitys/getDevLyaer.js'),
  l = ['KEYCODE_Bat'];
((exports.fnShowItems = {}),
  (exports.FnFunction = (e) => {
    var t;
    let r;
    const a = e.forBidden;
    void 0 !== e.oldValue && (r = exports.fnShowItems[e.oldValue.key]);
    const { deviceStore: s } = i.useStore(),
      d = new Array();
    l.map((e) => {
      d.push(e);
    });
    const f = c.getDevLayer(null === (t = s.currentDev) || void 0 === t ? void 0 : t.deviceType.id);
    for (let n = 0; n < f; n++) {
      const e = 'KBPEOFILE' + n;
      e in u.specialFunTablectionMap && d.push(e);
    }
    return n.default.createElement(
      n.Fragment,
      null,
      n.default.createElement(o.dj.Text, { text: r, type: '已修改的按键值', x: 57, y: 7, h: 36 }),
      n.default.createElement(o.dj.List, {
        w: 342,
        h: 145,
        x: 54,
        y: 48,
        itemCount: d.length,
        scrollToIndex: 0,
        itemSize: () => 30,
        renderItem: (t) =>
          n.default.createElement(o.dj.CheckBox2, {
            relative: !0,
            key: t,
            h: 32,
            type: 'Normal',
            text: exports.fnShowItems[d[t]],
            checkState: a && e.func === d[t],
            isBool: a,
            clickHandle: () => {
              a && s.isFnMode && (e.func !== d[t] ? e.setFunc(d[t]) : e.setFunc(void 0));
            },
          }),
      }),
    );
  }));
