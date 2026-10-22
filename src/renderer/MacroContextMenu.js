/* Recovered from Tezarre Driver 1.1.31 - renderer module CTgk */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, o, d) {
          (void 0 === d && (d = o),
            Object.defineProperty(e, d, {
              enumerable: !0,
              get: function () {
                return t[o];
              },
            }));
        }
      : function (e, t, o, d) {
          (void 0 === d && (d = o), (e[d] = t[o]));
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
  o =
    (this && this.__importStar) ||
    function (o) {
      if (o && o.__esModule) return o;
      var d = {};
      if (null != o) for (var r in o) 'default' !== r && Object.hasOwnProperty.call(o, r) && e(d, o, r);
      return (t(d, o), d);
    },
  d =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.MacroContextMenu = exports.AddMacroContextMenu = void 0));
const r = o(require('react')),
  n = d(require('@emotion/styled')),
  l = require('./Button.js'),
  a = require('./res.js'),
  u = {
    Head: {
      width: 60,
      height: 30,
      AddButtonStyle: 'MacroAdd_Head',
      SubButtonStyle: 'MacroSub_Head',
      AddKey: { top: 40, left: 0 },
      AddCoordinte: { top: 70, left: 0 },
      Arrow: {
        borderWidth: '4px 4px 0px  4px',
        borderColor: '#ffffff transparent transparent transparent ',
        top: 10,
        left: 39,
      },
    },
    Body: {
      width: 42,
      height: 22,
      AddButtonStyle: 'MacroAdd',
      SubButtonStyle: 'MacroSub',
      AddKey: { top: -58, left: 58 },
      AddCoordinte: { top: 0, left: 58 },
      Arrow: {
        borderWidth: '4px 0px 4px 4px',
        borderColor: ' transparent transparent transparent #ffffff',
        top: 7,
        left: 35,
      },
    },
  },
  i = n.default.div({ position: 'absolute' }, (e) => ({
    width: u[e.mode].width,
    height: u[e.mode].height,
    top: e.top,
    left: e.left ? e.left : 0,
    zIndex: 1,
  })),
  s = n.default.div((e) => ({
    width: 0,
    height: 0,
    position: 'absolute',
    top: u[e.mode].Arrow.top,
    left: u[e.mode].Arrow.left,
    borderStyle: 'solid',
    borderWidth: u[e.mode].Arrow.borderWidth,
    borderColor: u[e.mode].Arrow.borderColor,
  }));
((exports.AddMacroContextMenu = (e) =>
  r.default.createElement(
    r.Fragment,
    null,
    r.default.createElement(l.Button, {
      isDisabled: e.isDisabled,
      mode: u[e.mode].AddButtonStyle,
      text: a.res.string.添加,
      clickHandle: () => {
        e.changeSub();
      },
      mouseEnter: () => {
        e.mouseEnter && e.mouseEnter();
      },
      mouseLeave: () => {
        e.mouseLeave && e.mouseLeave();
      },
      classname: 'notoutside',
    }),
    !(!0 === e.isDisabled) && r.default.createElement(s, { mode: e.mode }),
    e.isOpen &&
      r.default.createElement(
        r.Fragment,
        null,
        r.default.createElement(
          i,
          { top: u[e.mode].AddKey.top, left: u[e.mode].AddKey.left, mode: e.mode },
          r.default.createElement(l.Button, {
            mode: u[e.mode].SubButtonStyle,
            text: a.res.string.按键,
            clickHandle: () => e.addHandle('keyboard'),
            classname: 'notoutside',
          }),
        ),
        'Body' === e.mode &&
          r.default.createElement(
            i,
            { top: -29, left: 58, mode: e.mode },
            r.default.createElement(l.Button, {
              mode: 'MacroSub',
              text: a.res.string.延迟,
              clickHandle: () => e.addHandle('delay'),
              classname: 'notoutside',
            }),
          ),
        r.default.createElement(
          i,
          { top: u[e.mode].AddCoordinte.top, left: u[e.mode].AddCoordinte.left, mode: e.mode },
          r.default.createElement(l.Button, {
            mode: u[e.mode].SubButtonStyle,
            text: a.res.string.坐标,
            clickHandle: () => e.addHandle('mouse_move'),
            classname: 'notoutside',
          }),
        ),
      ),
  )),
  (exports.MacroContextMenu = (e) => {
    const [t, o] = r.useState(!1);
    return (
      r.useLayoutEffect(() => {
        let e = document.getElementById('scroll-list');
        e = null === e ? document.body : e;
        const t = window.getComputedStyle(e).overflow;
        return (
          (e.style.overflow = 'hidden hidden'),
          () => {
            null !== e && (e.style.overflow = t);
          }
        );
      }, []),
      r.default.createElement(
        'div',
        { style: { width: 42, height: 42 } },
        r.default.createElement('div', {
          style: { width: '100%', height: '100%', border: 'solid 1px #23f9e2' },
          onClick: e.clickHandle,
        }),
        r.default.createElement(
          i,
          { top: -63, mode: 'Body' },
          r.default.createElement(exports.AddMacroContextMenu, {
            mode: 'Body',
            changeSub: () => {
              o(!t);
            },
            isOpen: t,
            addHandle: e.addHandle,
          }),
        ),
        r.default.createElement(
          i,
          { top: -34, mode: 'Body' },
          r.default.createElement(l.Button, {
            mode: 'MacroEdit',
            text: a.res.string.修改,
            clickHandle: e.editeHandle,
            classname: 'notoutside',
          }),
        ),
        r.default.createElement(
          i,
          { top: 58, mode: 'Body' },
          r.default.createElement(l.Button, {
            mode: 'MacroDelete',
            text: a.res.string.删除,
            clickHandle: e.deleteHandle,
            classname: 'notoutside',
          }),
        ),
      )
    );
  }));
