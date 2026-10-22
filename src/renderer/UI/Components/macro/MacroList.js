/* Recovered from Tezarre Driver 1.1.31 - renderer module WJkN */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, n, t, o) {
          (void 0 === o && (o = t),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return n[t];
              },
            }));
        }
      : function (e, n, t, o) {
          (void 0 === o && (o = t), (e[o] = n[t]));
        }),
  n =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, n) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: n });
        }
      : function (e, n) {
          e.default = n;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var o = {};
      if (null != t) for (var d in t) 'default' !== d && Object.hasOwnProperty.call(t, d) && e(o, t, d);
      return (n(o, t), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroList = void 0));
const o = t(require('react')),
  d = require('./../../../dj.js'),
  r = require('./../../utils/OutsideAlerter.js'),
  i = require('./../../../mobxStore/store.js'),
  l = require('mobx-react-lite'),
  a = require('mobx'),
  u = require('./../../../sdk/DriverIO/DeviceAPI/DeviceInterface.js'),
  c = (e) =>
    o.default.createElement(
      o.Fragment,
      null,
      o.default.createElement(
        d.dj.FlexView,
        { relative: !0, w: 528, h: 42 },
        e.items.map((n, t) =>
          o.default.createElement(
            o.Fragment,
            { key: t },
            o.default.createElement(d.dj.MacroButton, {
              relative: !0,
              w: 42,
              h: 42,
              isContextVisible: e.clickedColumnIndex === t,
              isAddState: e.addColumnIndex === t,
              item: n,
              addHandle: e.addHandle,
              editHandle: e.editHandle,
              deleteHandle: e.deleteHandle,
              clickHandle: () => e.clickHandle(t),
            }),
            o.default.createElement(d.dj.View, { relative: !0, w: 10 }, ''),
          ),
        ),
      ),
    ),
  s = (e) => {
    const n = { type: 'mouse_button', action: 'down', value: u.MouseKey.Left },
      t = { type: 'mouse_move', dx: 1, dy: 1 },
      o = { type: 'keyboard', action: 'down', value: 0 },
      d = { type: 'delay', value: 1 };
    switch (e) {
      case 'mouse_button':
      default:
        return n;
      case 'keyboard':
        return o;
      case 'delay':
        return d;
      case 'mouse_move':
        return t;
    }
  };
exports.MacroList = () => {
  const { macroStore: e } = i.useStore(),
    [n, t] = o.useState({ indexRow: -1, indexColumn: -1 }),
    { isKeyStore: m } = i.useStore(),
    x = () => {
      'recording' === e.recodingState
        ? m.setMacroAddClickKey(!1)
        : m.setMacroAddClickKey(!m.macroAddClickKey);
    },
    [y, g] = o.useState({ indexRow: -1, indexColumn: -1, type: 'delay' }),
    f = () => {
      t(Object.assign(Object.assign({}, n), { indexRow: -1, indexColumn: -1 }));
    },
    w = () => {
      g(Object.assign(Object.assign({}, y), { indexRow: -1, indexColumn: -1 }));
    },
    C = (t) => {
      if (!e.isFull) {
        const o = s(t);
        (e.addEvent(o, 10 * n.indexRow + n.indexColumn + 1),
          g({
            type: t,
            indexRow: Math.floor((10 * n.indexRow + n.indexColumn + 1) / 10),
            indexColumn: (10 * n.indexRow + n.indexColumn + 1) % 10,
          }),
          f());
      }
    },
    R = (t) => {
      'keyboard' !== t.type && 'mouse_button' !== t.type
        ? (e.changeEvent(
            -1 !== y.indexRow && -1 !== y.indexColumn
              ? 10 * y.indexRow + y.indexColumn
              : 10 * n.indexRow + n.indexColumn,
            t,
          ),
          f(),
          w())
        : e.startSingleHook();
    },
    b = () => {
      (e.delEvent(10 * n.indexRow + n.indexColumn), f());
    },
    v = () => {
      const d = [];
      for (let r = 0; r <= e.currentRecMacroArr.length / 10; r++)
        d.push(
          o.default.createElement(c, {
            items: e.currentRecMacroArr.slice(
              10 * r,
              10 * r + 10 > e.currentRecMacroArr.length ? e.currentRecMacroArr.length : 10 * r + 10,
            ),
            clickedColumnIndex: r === n.indexRow ? n.indexColumn : -1,
            addColumnIndex: r === y.indexRow ? y.indexColumn : -1,
            addHandle: C,
            editHandle: R,
            deleteHandle: b,
            clickHandle: (o) => {
              'stop' === e.recodingState &&
                (o === n.indexColumn && r === n.indexRow
                  ? t({ indexColumn: -1, indexRow: -1 })
                  : t({ indexRow: r, indexColumn: o }));
            },
          }),
        );
      return d;
    };
  return (
    o.useEffect(() =>
      a.autorun(() => {
        e.isFull && 'recording' === e.recodingState && e.stoptHook();
      }),
    ),
    (document.onclick = () => {
      m.macroAddTouchKey || m.setMacroAddClickKey(!1);
    }),
    l.useObserver(
      () => (
        o.useEffect(() => {
          if (0 !== e.currentSingleValue && 'singleRecording' === e.recodingState) {
            if (-1 !== y.indexColumn && -1 !== y.indexColumn)
              (e.changeEvent(10 * y.indexRow + y.indexColumn, {
                type: e.currentSingleValue <= u.MouseKey.Key_2 ? 'mouse_button' : 'keyboard',
                value: e.currentSingleValue,
                action: 'down',
              }),
                e.addEvent({ type: 'delay', value: 1 }, 10 * y.indexRow + y.indexColumn + 1),
                e.addEvent(
                  {
                    type: e.currentSingleValue <= u.MouseKey.Key_2 ? 'mouse_button' : 'keyboard',
                    value: e.currentSingleValue,
                    action: 'up',
                  },
                  10 * y.indexRow + y.indexColumn + 2,
                ));
            else {
              const t = e.currentRecMacroArr[10 * n.indexRow + n.indexColumn],
                o = 'mouse_button' === t.type || 'keyboard' === t.type ? t.action : 'down';
              e.changeEvent(10 * n.indexRow + n.indexColumn, {
                type: e.currentSingleValue <= u.MouseKey.Key_2 ? 'mouse_button' : 'keyboard',
                value: e.currentSingleValue,
                action: o,
              });
            }
            (e.stoptHook(), e.cleanSingleValue(), f(), w());
          }
        }, [e.currentSingleValue]),
        o.default.createElement(
          o.Fragment,
          null,
          o.default.createElement(d.dj.AddMacroContextMenu, {
            w: 42,
            h: 24,
            x: 125,
            y: 4,
            mode: 'Head',
            zIndex: 99,
            isOpen: m.macroAddClickKey && 'stop' === e.recodingState,
            mouseEnter: () => {
              m.setMacroAddTouchKey(!0);
            },
            mouseLeave: () => {
              m.setMacroAddTouchKey(!1);
            },
            changeSub: () => {
              x();
            },
            addHandle: (n) => {
              if (!e.isFull) {
                const t = s(n);
                (e.addEvent(t, e.currentRecMacroArr.length),
                  g({
                    type: n,
                    indexRow: Math.floor((e.currentRecMacroArr.length - 1) / 10),
                    indexColumn: (e.currentRecMacroArr.length - 1) % 10,
                  }),
                  x());
              }
            },
            isDisabled: 'recording' === e.recodingState || e.isFull,
          }),
          o.default.createElement(
            d.dj.View,
            { w: 542, h: 378, x: 36, y: 60 },
            o.default.createElement(
              r.OutsideAlerter,
              {
                clickOutsideHandle: () => {
                  t({ indexRow: -1, indexColumn: -1 });
                },
              },
              o.default.createElement(d.dj.NormalList, {
                items: v(),
                space: 10,
                clickHandle: () => t({ indexRow: -1, indexColumn: -1 }),
                isScrollToBottom: 'recording' === e.recodingState,
              }),
            ),
          ),
        )
      ),
    )
  );
};
