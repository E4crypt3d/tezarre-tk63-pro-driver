/* Recovered from Tezarre Driver 1.1.31 - renderer module DsMA */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, i) {
          (void 0 === i && (i = r),
            Object.defineProperty(e, i, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, i) {
          (void 0 === i && (i = r), (e[i] = t[r]));
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
      var i = {};
      if (null != r) for (var n in r) 'default' !== n && Object.hasOwnProperty.call(r, n) && e(i, r, n);
      return (t(i, r), i);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SubNavbarItem = void 0));
const i = r(require('react')),
  n = require('./../../dj.js');
exports.SubNavbarItem = (e) => {
  const { title: t, isClick: r, clickHandle: a } = e;
  return i.default.createElement(
    i.Fragment,
    null,
    i.default.createElement(n.dj.Button, {
      relative: !0,
      w: 100,
      mode: '子侧边栏',
      isHightLight: r,
      text: t,
      clickHandle: () => a(),
    }),
    i.default.createElement(n.dj.View, { relative: !0, w: 20 }, ''),
  );
};
