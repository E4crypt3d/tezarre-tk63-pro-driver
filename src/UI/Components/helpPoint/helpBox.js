/* Recovered from Tezarre Driver 1.1.31 - renderer module HEdO */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, o) {
          (void 0 === o && (o = r),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, o) {
          (void 0 === o && (o = r), (e[o] = t[r]));
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
      var o = {};
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(o, r, n);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.HelpBox = void 0));
const o = r(require('react')),
  n = require('./../../../renderer/res.js'),
  i = require('./../../../renderer/dj.js');
exports.HelpBox = (e) => {
  const [t, r] = o.useState(!1);
  return o.default.createElement(
    'div',
    {
      style: { position: 'relative', width: 25, height: 25, cursor: 'pointer' },
      onMouseEnter: () => {
        t || r(!0);
      },
      onMouseLeave: () => {
        t && r(!1);
      },
    },
    o.default.createElement(i.dj.Button, {
      relative: !0,
      w: 25,
      h: 25,
      img: { size: { w: 25, h: 25 }, src: n.res.img.help },
    }),
    t &&
      o.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            left: '50%',
            top: 15,
            transform: 'translate(-50%, 0)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        o.default.createElement('div', {
          style: { border: '10px solid transparent', borderBottomColor: '#f30' },
        }),
        o.default.createElement(
          'div',
          { style: { backgroundColor: 'red', flex: '0 1 auto', padding: 5 } },
          o.default.createElement(
            'p',
            {
              style: {
                width: 150,
                fontSize: '14',
                color: '#ffffff',
                wordWrap: 'break-word',
                wordBreak: 'break-all',
              },
            },
            e.title,
          ),
        ),
      ),
  );
};
