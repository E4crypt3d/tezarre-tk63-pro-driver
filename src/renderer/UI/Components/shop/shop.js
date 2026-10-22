/* Recovered from Tezarre Driver 1.1.31 - renderer module Hums */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, o, r) {
          (void 0 === r && (r = o),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[o];
              },
            }));
        }
      : function (e, t, o, r) {
          (void 0 === r && (r = o), (e[r] = t[o]));
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
      var r = {};
      if (null != o) for (var i in o) 'default' !== i && Object.hasOwnProperty.call(o, i) && e(r, o, i);
      return (t(r, o), r);
    },
  r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.Shop = exports.ShopContainer = exports.shopWidth = void 0));
const i = o(require('react')),
  n = r(require('@emotion/styled')),
  l = require('./../../../mobxStore/store.js'),
  a = require('./rot.js');
((exports.shopWidth = 897),
  (exports.ShopContainer = n.default('div')`
    position: absolute;
    left: -42px;
    top: -83px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 974px;
    height: 604px;
    overflow-y: auto;
    padding-top: 30px;
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #808080;
    }
    &::-webkit-scrollbar {
        width: 5px; 
    }
`));
const u = n.default.div(
  {
    height: 30,
    color: '#FFFFFF',
    borderBottom: '2px solid #00000000',
    fontSize: 16,
    cursor: 'pointer',
    marginRight: 30,
    '&:hover': { color: '#FD6D19', borderBottom: '2px solid #FD6D19' },
  },
  (e) => ({ color: e.color, borderBottom: e.borderBottom }),
);
exports.Shop = () => {
  const { shopStore: e } = l.useStore(),
    [t, o] = i.useState('全部');
  return i.default.createElement(
    'div',
    null,
    i.default.createElement(
      exports.ShopContainer,
      null,
      i.default.createElement(
        'div',
        {
          style: {
            display: 'flex',
            width: exports.shopWidth,
            flexShrink: 0,
            paddingBottom: 30,
            justifyContent: 'flex-start',
            zIndex: 99,
          },
        },
        ['全部', '键盘', '鼠标', '耳机', '其他'].map((e, r) =>
          i.default.createElement(
            u,
            {
              key: r,
              color: t === e ? '#FD6D19' : '#FFFFFF',
              borderBottom: t === e ? '2px solid #FD6D19' : '2px solid #00000000',
              onClick: () => {
                t !== e && o(e);
              },
            },
            e,
          ),
        ),
      ),
      i.default.createElement(
        'div',
        { style: { flexShrink: 0, marginBottom: 30 } },
        i.default.createElement(a.Rot, {
          imgArr: [
            { img: 'http://img.rongyuan.tech/ry-rot1.png', url: 'www.baidu.com' },
            { img: 'http://img.rongyuan.tech/ry-rot2.png', url: 'www.bilibili.com' },
            { img: 'http://img.rongyuan.tech/ry-rot3.png', url: 'www.google.com' },
          ],
        }),
      ),
      i.default.createElement('div', {
        style: {
          flexShrink: 0,
          margin: '30px 100px',
          height: 800,
          width: 200,
          backgroundColor: '#ff0000',
          cursor: 'pointer',
        },
      }),
    ),
    !e.shopKey && i.default.createElement(exports.ShopContainer, null),
  );
};
