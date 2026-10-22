/* Recovered from Tezarre Driver 1.1.31 - renderer module wSWM */

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
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(i, r, o);
      return (t(i, r), i);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.UserView = void 0));
const i = r(require('react'));
exports.UserView = () =>
  i.default.createElement(
    i.Fragment,
    null,
    i.default.createElement('div', {
      style: {
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      },
    }),
    i.default.createElement('div', {
      style: {
        width: 370,
        height: 406,
        backgroundColor: '#1c1c1c',
        position: 'absolute',
        top: 161,
        left: 416,
      },
    }),
  );
