/* Recovered from Tezarre Driver 1.1.31 - renderer module LjpA */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Rot = void 0));
const t = e(require('react')),
  r = require('mobx-react-lite'),
  o = require('./../../../mobxStore/store.js'),
  i = require('electron'),
  s = require('./../../../FlexView.js'),
  n = require('./shop.js');
exports.Rot = (e) => {
  const { shopStore: l } = o.useStore();
  return (
    l.setRotLen(e.imgArr.length),
    l.start(),
    r.useObserver(() =>
      t.default.createElement(
        'div',
        {
          style: { position: 'relative', width: n.shopWidth, height: 'auto', overflow: 'hidden' },
          onMouseOver: () => {
            l.stop();
          },
          onMouseOut: () => {
            l.start();
          },
        },
        t.default.createElement('img', {
          style: { flexShrink: 0, display: 'block', width: '100%', maxHeight: 501, opacity: 0 },
          src: e.imgArr ? e.imgArr[0].img : '',
        }),
        e.imgArr.map((e, r) =>
          t.default.createElement('img', {
            key: r,
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              flexShrink: 0,
              display: 'block',
              width: '100%',
              maxHeight: 501,
              opacity: l.rotIndex === r ? 1 : 0,
              transition: 'opacity 800ms',
              cursor: 'pointer',
              zIndex: l.rotIndex === r ? 1 : 0,
            },
            src: e.img,
            onClick: (t) => {
              i.shell.openExternal(e.url);
            },
          }),
        ),
        t.default.createElement(
          'div',
          { style: { position: 'absolute', bottom: 23, width: '100%', height: 20, zIndex: 1 } },
          t.default.createElement(
            s.FlexView,
            { justifyContent: 'center', alignItems: 'center' },
            e.imgArr.map((e, r) =>
              t.default.createElement('div', {
                key: r,
                style: {
                  width: 12,
                  height: 12,
                  backgroundColor: l.rotIndex === r ? '#ffffff' : 'rgba(255,255,255,.3)',
                  margin: '0 5px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                },
                onMouseOver: () => {
                  l.stop();
                },
                onMouseOut: () => {
                  l.start();
                },
                onClick: () => {
                  l.setRotIndex(r);
                },
              }),
            ),
          ),
        ),
      ),
    )
  );
};
