/* Recovered from Tezarre Driver 1.1.31 - renderer module JowR */

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
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(n, r, i);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroFile = void 0));
const n = r(require('react')),
  i = require('./TreeView.js'),
  a = require('./MacroRecordArea.js');
exports.MacroFile = () =>
  n.default.createElement(
    n.Fragment,
    null,
    n.default.createElement(a.MacroRecordArea, null),
    n.default.createElement(i.TreeView, null),
  );
