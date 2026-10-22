/* Recovered from Tezarre Driver 1.1.31 - renderer module mXvt */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, _, t, l) {
          (void 0 === l && (l = t),
            Object.defineProperty(e, l, {
              enumerable: !0,
              get: function () {
                return _[t];
              },
            }));
        }
      : function (e, _, t, l) {
          (void 0 === l && (l = t), (e[l] = _[t]));
        }),
  _ =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, _) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: _ });
        }
      : function (e, _) {
          e.default = _;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var l = {};
      if (null != t) for (var i in t) 'default' !== i && Object.hasOwnProperty.call(t, i) && e(l, t, i);
      return (_(l, t), l);
    },
  l =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.TextCheckBox = exports.TextWarn = exports.TextEll = exports.Text = void 0));
const i = t(require('react')),
  r = l(require('@emotion/styled')),
  a = {
    ____normal: '#5a5a5a',
    ____active: '#ffffff',
    ____hover: '#959595',
    ____dark: '#121212',
    ____macroDefault: '#cfcfcf',
    ____schemeHead: '#7a7a7a',
    ____sparker: '#21b6a6',
    ____default: 'inherit',
    ____keyboard: '#b9b9b9',
    ____waring: 'red',
    ____blue: '#23f9e2',
    ____upgrade: '#acaaaa',
  },
  o = { ____regular: 'PingFangSC-Regular', ____medium: 'PingFangSC-Medium', ____bold: 'PingFangSC-Bold' },
  n = {
    侧边栏: { size: '16px', color: a.____default, fontFamily: o.____bold, textAlgin: 'left' },
    子侧边栏: { size: '18px', color: a.____default, fontFamily: o.____bold, textAlgin: 'left' },
    SubTitle: { size: '14px', color: a.____active, fontFamily: o.____regular, textAlgin: 'left' },
    描述: { size: '14px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    CPI小标题: { size: '13px', color: a.____normal, fontFamily: o.____regular, textAlgin: 'left' },
    CPI序号: { size: '16px', color: a.____normal, fontFamily: o.____regular, textAlgin: 'left' },
    default: { size: '14px', color: 'inherit', fontFamily: o.____regular, textAlgin: 'left' },
    鼠标型号: { size: '16px', color: a.____normal, fontFamily: o.____regular, textAlgin: 'center' },
    启动页主标题: { size: '28px', color: a.____active, fontFamily: o.____regular, textAlgin: 'center' },
    启动页搜索: { size: '13px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'center' },
    个人中心标题: { size: '18px', color: a.____active, fontFamily: o.____bold, textAlgin: 'center' },
    配置页标题: { size: '16px', color: a.____active, fontFamily: o.____bold, textAlgin: 'center' },
    配置页名称: { size: '13px', color: a.____active, fontFamily: o.____medium, textAlgin: 'left' },
    灯光页描述: { size: '13px', color: a.____active, fontFamily: o.____regular, textAlgin: 'center' },
    灯光页数值: { size: '10px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'center' },
    弹框标题: { size: '20px', color: a.____active, fontFamily: o.____bold, textAlgin: 'center' },
    分享配置页设备名: { size: '17px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    方案共享页表头: { size: '12px', color: '#7a7a7a', fontFamily: o.____regular, textAlgin: 'left' },
    方案共享页表内容: { size: '13px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    树形文字: { size: '13px', color: a.____active, fontFamily: o.____regular, textAlgin: 'left' },
    按钮_常规: { size: '14px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    宏_常规: { size: '12px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    按钮_子页面: { size: '13px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    按钮_宏菜单: { size: '11px', color: a.____active, fontFamily: o.____regular, textAlgin: 'center' },
    按钮_宏菜单_Head: { size: '13px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    登录注册按钮: { size: '14px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    按钮_恢复默认设置: { size: '14px', color: a.____default, fontFamily: o.____regular, textAlgin: 'center' },
    按钮_默认配置: { size: '14px', color: a.____default, fontFamily: o.____regular, textAlgin: 'right' },
    user提示: { size: '12px', color: a.____normal, fontFamily: o.____regular, textAlgin: 'center' },
    宏的单选复选框: { size: '13px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    忘记密码: { size: '12px', color: a.____sparker, fontFamily: o.____regular, textAlgin: 'center' },
    键盘提示: { size: '13px', color: a.____keyboard, fontFamily: o.____regular, textAlgin: 'left' },
    组合键: { size: '18px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    单选框: { size: '12px', color: a.____active, fontFamily: o.____regular, textAlgin: 'left' },
    提示: { size: '14px', color: a.____waring, fontFamily: o.____bold, textAlgin: 'center' },
    已修改的按键值: { size: '14px', color: a.____blue, fontFamily: o.____regular, textAlgin: 'left' },
    鼠标按键: { size: '12px', color: a.____active, fontFamily: o.____regular, textAlgin: 'center' },
    灯光界面提示: { size: '12px', color: a.____hover, fontFamily: o.____regular, textAlgin: 'left' },
    升级提示: { size: '12px', color: a.____upgrade, fontFamily: o.____regular, textAlgin: 'center' },
    升级警告: { size: '20px', color: a.____waring, fontFamily: o.____regular, textAlgin: 'center' },
    单选框2: { size: '12px', color: '#6c6c6c', fontFamily: o.____regular, textAlgin: 'left' },
  },
  c = r.default.span((e) => ({
    textAlign: n[e.type || 'default'].textAlgin,
    fontFamily: n[e.type || 'default'].fontFamily,
    fontSize: n[e.type || 'default'].size,
    color: n[e.type || 'default'].color,
    display: 'block',
    margin: 0,
    padding: 0,
    background: 'inherit',
    verticalAlign: 'middle',
    opacity: e.isDisabled ? 0.4 : 1,
  })),
  f = r.default.span((e) => ({
    textAlign: n[e.type || 'default'].textAlgin,
    fontFamily: n[e.type || 'default'].fontFamily,
    fontSize: n[e.type || 'default'].size,
    color: n[e.type || 'default'].color,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    margin: 0,
    padding: 0,
    background: 'inherit',
    verticalAlign: 'middle',
    opacity: e.isDisabled ? 0.4 : 1,
  }));
((exports.Text = (e) => i.createElement(c, Object.assign({}, e, { className: e.classname }), e.text)),
  (exports.TextEll = (e) => i.createElement(f, Object.assign({}, e, { className: e.classname }), e.text)),
  (exports.TextWarn = (e) => i.createElement(c, Object.assign({}, e, { className: e.classname }), e.text)));
const s = r.default.span((e) => ({
  textAlign: n[e.type || 'default'].textAlgin,
  fontFamily: n[e.type || 'default'].fontFamily,
  fontSize: n[e.type || 'default'].size,
  color: e.isBool ? n[e.type || 'default'].color : '#ffffff',
  textOverflow: 'ellipsis',
  display: 'block',
  margin: 0,
  padding: 0,
  background: 'inherit',
  verticalAlign: 'middle',
  opacity: e.isDisabled ? 0.4 : 1,
}));
exports.TextCheckBox = (e) => i.createElement(s, Object.assign({}, e, { className: e.classname }), e.text);
