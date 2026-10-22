/* Recovered from Tezarre Driver 1.1.31 - renderer module kuVY */

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
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(a, r, o);
      return (t(a, r), a);
    },
  a =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroButton = void 0));
const o = r(require('react')),
  i = a(require('react-dom')),
  l = a(require('@emotion/styled')),
  n = require('./Text.js'),
  d = require('./NumberInput.js'),
  u = require('./NumberInput.js'),
  c = require('./MacroContextMenu.js'),
  s = require('./Img.js'),
  m = require('./FlexView.js'),
  f = require('./res.js'),
  p = require('./sdk/DriverIO/DeviceAPI/DeviceInterface.js'),
  b = require('./mobxStore/store.js'),
  g = {
    Default: { border: 'solid 1px #3d3d3d', bgc: 'rgba(0,0,0,0)' },
    HightLight: { border: 'solid 1px rgba(35,249,226,0.5)', bgc: 'rgba(35,249,226,0.5)' },
    delay: { border: 'solid 1px rgba(61,61,61,0.5)', bgc: 'rgba(61,61,61,0.5)' },
    mouse_move: { border: 'solid 1px rgba(153,187,255,0.5)', bgc: 'rgba(153,187,255,0.5)' },
    keyboard: { border: 'solid 1px rgba(255,136,136,0.5)', bgc: 'rgba(255,136,136,0.5)' },
    mouse_button: { border: 'solid 1px rgba(255,136,136,0.5)', bgc: 'rgba(255,136,136,0.5)' },
  },
  y = l.default.div((e) => ({
    width: '100%',
    height: '100%',
    borderRadius: '2px',
    color: '#cfcfcf',
    border: g[e.type].border,
    backgroundColor: g[e.type].bgc,
    opacity: '1',
    '.down-arrow': {
      width: 0,
      height: 0,
      position: 'absolute',
      top: 29,
      left: 16,
      borderStyle: 'solid',
      borderWidth: '8px 6px 0 6px',
      borderColor: '#cfcfcf transparent transparent transparent',
    },
    '.up-arrow': {
      width: 0,
      height: 0,
      position: 'absolute',
      top: 29,
      left: 16,
      borderStyle: 'solid',
      borderWidth: '0px 6px 8px 6px',
      borderColor: ' transparent transparent #cfcfcf transparent',
    },
    '&:hover': { border: 'solid 1px #ffffff', color: 'white' },
    '&:hover .arrow': {
      borderStyle: 'solid',
      borderWidth: '8px 6px 0 6px',
      borderColor: '#ffffff transparent transparent transparent',
    },
    '&:active': { border: 'solid 1px #23f9e2' },
  })),
  h = document.getElementById('root'),
  x = (e) => {
    if (null !== h) return i.default.createPortal(e.children, h);
  },
  v = (e) =>
    o.default.createElement(
      m.FlexView,
      { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' },
      o.default.createElement(
        'div',
        { style: { width: '100%', height: 15 } },
        o.default.createElement(n.Text, { type: '按钮_宏菜单', text: Math.round(e.time) }),
      ),
      o.default.createElement('div', { style: { width: 35, height: 1, background: '#3d3d3d' } }),
      o.default.createElement(
        'div',
        { style: { width: '100%', height: 17 } },
        o.default.createElement(n.Text, { type: '按钮_宏菜单', text: e.describe }),
      ),
    ),
  _ = (e) =>
    e < 1e3
      ? o.default.createElement(v, { time: e, describe: 'ms' })
      : o.default.createElement(v, { time: e / 1e3, describe: '秒' });
exports.MacroButton = (e) => {
  var t;
  const r = o.useRef(null),
    [a, i] = o.useState(!1);
  (o.useEffect(() => {
    a && ('keyboard' === e.item.type || 'mouse_button' === e.item.type) && i(!1);
  }, [e.item]),
    o.useEffect(() => {
      e.isAddState && (i(!0), l());
    }, [e.isAddState]));
  const l = () => {
      ('keyboard' !== e.item.type && 'mouse_button' !== e.item.type) ||
        e.editHandle(Object.assign({}, e.item));
    },
    { macroStore: g } = b.useStore();
  if (
    'keyboard' === e.item.type &&
    0 === (null === (t = e.item) || void 0 === t ? void 0 : t.value) &&
    'recording' === g.recodingState
  ) {
    b.mobxStore.toastStore.setErr(f.res.text.该键无法录制宏());
    const e = [];
    if (g.currentRecMacroArr.length <= 3) g.setCurrentRecMacroArr([]);
    else {
      const t = g.currentRecMacroArr.length - 3;
      if ('delay' === g.currentRecMacroArr[t].type)
        for (let r = 0; r <= t + 1; r++)
          void 0 !== g.currentRecMacroArr[r] && e.push(g.currentRecMacroArr[r]);
      else for (let r = 0; r <= t; r++) void 0 !== g.currentRecMacroArr[r] && e.push(g.currentRecMacroArr[r]);
    }
    g.setCurrentRecMacroArr(e);
  }
  return o.default.createElement(
    o.Fragment,
    null,
    o.default.createElement(
      y,
      {
        ref: r,
        onMouseUp: e.clickHandle,
        onClick: (e) => e.stopPropagation(),
        type: e.item.type ? e.item.type : 'Default',
      },
      'keyboard' === e.item.type &&
        o.default.createElement(
          o.Fragment,
          null,
          a
            ? null
            : o.default.createElement(n.Text, {
                type: '宏_常规',
                text:
                  'BackSpace' === f.res.映射.hidCodeMapKeyName(e.item.value)
                    ? 'BackS'
                    : f.res.映射.hidCodeMapKeyName(e.item.value),
              }),
          o.default.createElement('div', { className: 'down' === e.item.action ? 'down-arrow' : 'up-arrow' }),
        ),
      'mouse_button' === e.item.type &&
        o.default.createElement(
          o.Fragment,
          null,
          a
            ? null
            : o.default.createElement(
                'div',
                { style: { width: 11, height: 17, position: 'absolute', left: 16, top: 5 } },
                o.default.createElement(s.Img, {
                  imgBg:
                    e.item.value === p.MouseKey.Left
                      ? f.res.img.left_mouse_key
                      : e.item.value === p.MouseKey.Middle
                        ? f.res.img.middle_mouse_key
                        : e.item.value === p.MouseKey.Right
                          ? f.res.img.right_mouse_key
                          : e.item.value === p.MouseKey.Forward
                            ? f.res.img.mouse_keyUp
                            : e.item.value === p.MouseKey.Back
                              ? f.res.img.mouse_keydown
                              : '',
                }),
              ),
          o.default.createElement('div', { className: 'down' === e.item.action ? 'down-arrow' : 'up-arrow' }),
        ),
      'delay' === e.item.type &&
        (a
          ? o.default.createElement(d.NumberInput, {
              inputFinished: (t) => {
                'delay' === e.item.type &&
                  (t !== e.item.value && e.editHandle(Object.assign(Object.assign({}, e.item), { value: t })),
                  i(!1),
                  b.mobxStore.macroStore.uiSaveMacro());
              },
            })
          : _(e.item.value)),
      'mouse_move' === e.item.type &&
        (a
          ? o.default.createElement(u.DoublueNumberInut, {
              placeHolderTop: 'X',
              placeHolderBottom: 'Y',
              inputFinished: (t, r) => {
                'mouse_move' === e.item.type &&
                  (e.editHandle(
                    Object.assign(Object.assign({}, e.item), {
                      dx: '' !== t ? parseInt(t) : e.item.dx,
                      dy: '' !== r ? parseInt(r) : e.item.dy,
                    }),
                  ),
                  i(!1),
                  b.mobxStore.macroStore.uiSaveMacro());
              },
            })
          : o.default.createElement(
              m.FlexView,
              { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' },
              o.default.createElement(
                'div',
                { style: { width: '100%', height: 15 } },
                o.default.createElement(n.Text, { type: '按钮_宏菜单', text: 'X:' + e.item.dx }),
              ),
              o.default.createElement('div', { style: { width: 35, height: 1, background: '#3d3d3d' } }),
              o.default.createElement(
                'div',
                { style: { width: '100%', height: 17 } },
                o.default.createElement(n.Text, { type: '按钮_宏菜单', text: 'Y:' + e.item.dy }),
              ),
            )),
    ),
    e.isContextVisible &&
      !a &&
      o.default.createElement(
        x,
        null,
        o.default.createElement(
          'div',
          {
            style: {
              position: 'absolute',
              top: null !== r.current ? r.current.getBoundingClientRect().top : 0,
              left: null !== r.current ? r.current.getBoundingClientRect().left : 0,
            },
          },
          o.default.createElement(c.MacroContextMenu, {
            clickHandle: () => {
              (e.clickHandle(), i(!1));
            },
            deleteHandle: e.deleteHandle,
            editeHandle: () => {
              (i(!0), l());
            },
            addHandle: e.addHandle,
          }),
        ),
      ),
  );
};
