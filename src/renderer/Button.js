/* Recovered from Tezarre Driver 1.1.31 - renderer module BTsL */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ButtonELL = exports.Button = void 0));
const o = e(require('react')),
  r = e(require('@emotion/styled')),
  t = require('./Text.js'),
  a = require('./FlexView.js'),
  d = r.default.div(
    (e) => ({
      opacity: e.opacity,
      color: e.isHightLight ? e.textColor.active : e.textColor.normal,
      border: e.isHightLight ? e.border.active : e.border.normal,
      background: e.background.normal,
      borderRadius: e.borderRadius,
      borderBottom: e.isHightLight ? e.borderBottom.active : e.borderBottom.normal,
      '&:hover': {
        border: e.border.hover,
        background: e.background.hover,
        borderBottom: e.isHightLight ? e.borderBottom.active : e.borderBottom.hover,
      },
      '&:active': {
        border: e.border.active,
        background: e.background.active,
        borderBottom: e.borderBottom.active,
      },
      '&:hover .text': { color: e.textColor.hover },
      '&:active .text': { color: e.textColor.active },
      '.image': {
        background: e.datasrc
          ? e.isHightLight
            ? `url(${e.datasrc.active})`
            : `url(${e.datasrc.normal})`
          : '',
      },
      '&:hover .image': {
        background: e.datasrc
          ? e.isHightLight
            ? `url(${e.datasrc.active})`
            : `url(${e.datasrc.hover})`
          : '',
      },
      '&:active .image': { background: e.datasrc ? `url(${e.datasrc.active})` : '' },
    }),
    { width: '100%', height: '100%' },
  ),
  i = { normal: '#ffffff', hover: '#ffffff', active: '#ffffff' },
  l = { normal: 'none', hover: 'none', active: 'none' },
  c = {
    不可用: {
      opacity: 1,
      textColor: { normal: '#959595', hover: '#959595', active: '#959595' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '侧边栏',
      borderBottom: l,
    },
    侧边栏: {
      opacity: 1,
      textColor: { normal: '#5a5a5a', hover: '#959595', active: '#ffffff' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '侧边栏',
      borderBottom: l,
    },
    子侧边栏: {
      opacity: 1,
      textColor: { normal: '#5a5a5a', hover: '#959595', active: '#ffffff' },
      border: { normal: '#5a5a5a', hover: '#959595', active: '#ffffff' },
      background: l,
      borderRadius: 0,
      textType: '子侧边栏',
      borderBottom: { normal: 'none', hover: 'none', active: '2px solid #23f9e2' },
    },
    Lighter: {
      opacity: 1,
      textColor: { normal: '#5a5a5a', hover: '#959595', active: '#ffffff' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_常规',
      borderBottom: l,
    },
    Bluer: {
      opacity: 1,
      textColor: { normal: '#959595', hover: '#c4c4c4', active: '#23f9e2' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_子页面',
      borderBottom: l,
    },
    Border: {
      opacity: 1,
      textColor: i,
      border: { normal: 'solid 1px #5a5a5a', hover: 'solid 1px #959595 ', active: 'solid 1px #23f9e2' },
      background: l,
      borderRadius: 0,
      textType: '按钮_子页面',
      borderBottom: { normal: 'solid 1px #5a5a5a', hover: 'solid 1px #959595 ', active: 'solid 1px #23f9e2' },
    },
    BorderBackground: {
      opacity: 1,
      textColor: i,
      border: { normal: 'solid 1px #252525', hover: 'solid 1px #323131', active: 'solid 1px #23f9e2' },
      background: { normal: '#252525', hover: ' #323131 ', active: '#252525' },
      borderRadius: 2,
      textType: '按钮_子页面',
      borderBottom: { normal: 'solid 1px #252525', hover: 'solid 1px #323131', active: 'solid 1px #23f9e2' },
    },
    Sparker: {
      opacity: 1,
      textColor: i,
      border: { normal: 'solid 1px #21ae9f', hover: 'solid 1px #21ae9f', active: 'solid 1px #21ae9f' },
      background: { normal: '#21ae9f', hover: '#21ae9f', active: '#21ae9f' },
      borderRadius: 2,
      textType: '按钮_常规',
      borderBottom: l,
    },
    MacroAdd: {
      opacity: 1,
      textColor: i,
      border: l,
      background: { normal: '#e18f02', hover: '#e18f02', active: '#e18f02' },
      borderRadius: 2,
      textType: '按钮_宏菜单',
      borderBottom: l,
    },
    MacroAdd_Head: {
      opacity: 1,
      textColor: { normal: '#959595', hover: '#c4c4c4', active: '#23f9e2' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_宏菜单_Head',
      borderBottom: l,
    },
    MacroEdit: {
      opacity: 1,
      textColor: i,
      border: l,
      background: { normal: '#028ea8', hover: '#028ea8', active: '#028ea8' },
      borderRadius: 2,
      textType: '按钮_宏菜单',
      borderBottom: l,
    },
    MacroDelete: {
      opacity: 1,
      textColor: i,
      border: l,
      background: { normal: '#bc373b', hover: '#bc373b', active: '#bc373b' },
      borderRadius: 2,
      textType: '按钮_宏菜单',
      borderBottom: l,
    },
    MacroSub: {
      opacity: 1,
      textColor: i,
      border: l,
      background: { normal: '#007ddb', hover: '#007ddb', active: '#007ddb' },
      borderRadius: 2,
      textType: '按钮_宏菜单',
      borderBottom: l,
    },
    MacroSub_Head: {
      opacity: 1,
      textColor: { normal: '#bababa', hover: '#ffff', active: '#bababa' },
      border: l,
      background: { normal: '#252525', hover: '#1d1d1d', active: '#252525' },
      borderRadius: 0,
      textType: '按钮_宏菜单',
      borderBottom: l,
    },
    Scheme: {
      opacity: 1,
      textColor: { normal: '#959595', hover: '#c4c4c4', active: '#23f9e2' },
      border: { normal: 'solid 1px #5a5a5a', hover: 'solid 1px #959595 ', active: 'solid 1px #23f9e2' },
      background: l,
      borderRadius: 0,
      textType: '按钮_常规',
      borderBottom: { normal: 'solid 1px #5a5a5a', hover: 'solid 1px #959595 ', active: 'solid 1px #23f9e2' },
    },
    Keyboard: {
      opacity: 1,
      textColor: { normal: 'transparent', hover: 'transparent', active: 'transparent' },
      border: { normal: 'none', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: 'transparent', hover: 'transparent', active: '#4cd7c7' },
      borderRadius: 6,
      textType: '按钮_常规',
      borderBottom: { normal: 'none', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
    },
    KeyboardHighLight: {
      opacity: 0.33,
      textColor: { normal: 'transparent', hover: 'transparent', active: 'transparent' },
      border: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: '#4cd7c7', hover: '#4cd7c7', active: '#4cd7c7' },
      borderRadius: 6,
      textType: '按钮_常规',
      borderBottom: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
    },
    KeyboardPic: {
      opacity: 0.5,
      textColor: { normal: 'transparent', hover: 'transparent', active: 'transparent' },
      border: { normal: 'solid 1px #ffffff', hover: 'solid 1px #ffffff', active: 'solid 1px #ffffff' },
      background: { normal: '#ffffff', hover: '#ffffff', active: '#ffffff' },
      borderRadius: 6,
      textType: '按钮_常规',
      borderBottom: { normal: 'solid 1px #ffffff', hover: 'solid 1px #ffffff', active: 'solid 1px #ffffff' },
    },
    KeyboardExample: {
      opacity: 1,
      textColor: { normal: 'transparent', hover: 'transparent', active: 'transparent' },
      border: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
      background: { normal: '#4cd7c7', hover: '#4cd7c7', active: '#4cd7c7' },
      borderRadius: 6,
      textType: '按钮_常规',
      borderBottom: { normal: 'solid 1px #23f9e2', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
    },
    按键设置: {
      opacity: 1,
      textColor: { normal: '#959595', hover: '#c4c4c4', active: '#23f9e2' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_常规',
      borderBottom: { normal: 'none', hover: 'none', active: 'solid 2px #23f9e2' },
    },
    鼠标按键: {
      opacity: 1,
      textColor: { normal: '#ffffff', hover: '#23f9e2', active: '#23f9e2' },
      border: { normal: 'solid 1px #ffffff', hover: 'solid 2px #23f9e2', active: 'solid 2px #23f9e2' },
      background: l,
      borderRadius: 11,
      textType: '鼠标按键',
      borderBottom: { normal: 'solid 1px #ffffff', hover: 'solid 2px #23f9e2', active: 'solid 2px #23f9e2' },
    },
    同意用户协议: {
      opacity: 1,
      textColor: { normal: '#5a5a5a', hover: '#23f9e2', active: '#23f9e2' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_恢复默认设置',
      borderBottom: { normal: 'solid 1px #5a5a5a', hover: 'solid 1px #23f9e2', active: 'solid 1px #23f9e2' },
    },
    文本text: {
      opacity: 1,
      textColor: { normal: '#5a5a5a', hover: '#5a5a5a', active: '#5a5a5a' },
      border: l,
      background: l,
      borderRadius: 0,
      textType: '按钮_常规',
      borderBottom: l,
    },
  };
((exports.Button = (e) => {
  var r, i, l, n, s;
  return o.default.createElement(
    d,
    {
      datasrc: null === (r = e.img) || void 0 === r ? void 0 : r.src,
      isHightLight: Boolean(e.isHightLight),
      opacity: c[e.mode || 'Lighter'].opacity,
      textColor: c[(e.isDisabled ? '不可用' : e.mode) || 'Lighter'].textColor,
      border: c[e.mode || 'Lighter'].border,
      background: c[e.mode || 'Lighter'].background,
      borderRadius: c[e.mode || 'Lighter'].borderRadius,
      borderBottom: c[e.mode || 'Lighter'].borderBottom,
      onClick: (o) => {
        !e.isDisabled && (e.clickHandle && e.clickHandle(), o.stopPropagation());
      },
      onMouseEnter: e.mouseEnter,
      onMouseLeave: e.mouseLeave,
      onMouseDown: e.mouseDown,
      onMouseUp: e.mouseUp,
    },
    o.default.createElement(
      a.FlexView,
      {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: e.reverse ? 'row-reverse' : 'row',
      },
      e.img &&
        o.default.createElement(
          'div',
          {
            style: {
              width: (null === (i = null == e ? void 0 : e.img) || void 0 === i ? void 0 : i.src)
                ? (null === (l = e.img.size) || void 0 === l ? void 0 : l.w) || '100%'
                : 0,
              height: (null === (n = null == e ? void 0 : e.img) || void 0 === n ? void 0 : n.src)
                ? (null === (s = e.img.size) || void 0 === s ? void 0 : s.h) || '100%'
                : 0,
            },
          },
          o.default.createElement('div', {
            className: 'image',
            style: {
              width: '100%',
              height: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            },
          }),
        ),
      e.text &&
        o.default.createElement(
          'div',
          { className: 'text', style: { width: e.textW || '100%' } },
          o.default.createElement(t.Text, {
            type: c[e.mode || '侧边栏'].textType,
            text: e.text,
            classname: e.classname,
            isDisabled: e.isDisabled,
          }),
        ),
    ),
  );
}),
  (exports.ButtonELL = (e) => {
    var r, i, l, n, s;
    return o.default.createElement(
      d,
      {
        datasrc: null === (r = e.img) || void 0 === r ? void 0 : r.src,
        isHightLight: Boolean(e.isHightLight),
        opacity: c[e.mode || 'Lighter'].opacity,
        textColor: c[(e.isDisabled ? '不可用' : e.mode) || 'Lighter'].textColor,
        border: c[e.mode || 'Lighter'].border,
        background: c[e.mode || 'Lighter'].background,
        borderRadius: c[e.mode || 'Lighter'].borderRadius,
        borderBottom: c[e.mode || 'Lighter'].borderBottom,
        onClick: (o) => {
          !e.isDisabled && (e.clickHandle && e.clickHandle(), o.stopPropagation());
        },
        onMouseEnter: e.mouseEnter,
        onMouseLeave: e.mouseLeave,
        onMouseDown: e.mouseDown,
        onMouseUp: e.mouseUp,
      },
      o.default.createElement(
        a.FlexView,
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: e.reverse ? 'row-reverse' : 'row',
        },
        e.img &&
          o.default.createElement(
            'div',
            {
              style: {
                width: (null === (i = null == e ? void 0 : e.img) || void 0 === i ? void 0 : i.src)
                  ? (null === (l = e.img.size) || void 0 === l ? void 0 : l.w) || '100%'
                  : 0,
                height: (null === (n = null == e ? void 0 : e.img) || void 0 === n ? void 0 : n.src)
                  ? (null === (s = e.img.size) || void 0 === s ? void 0 : s.h) || '100%'
                  : 0,
              },
            },
            o.default.createElement('div', {
              className: 'image',
              style: {
                width: '100%',
                height: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              },
            }),
          ),
        e.text &&
          o.default.createElement(
            'div',
            { className: 'text', style: { width: e.textW || '100%' } },
            o.default.createElement(t.TextEll, {
              type: c[e.mode || '侧边栏'].textType,
              text: e.text,
              classname: e.classname,
              isDisabled: e.isDisabled,
            }),
          ),
      ),
    );
  }));
