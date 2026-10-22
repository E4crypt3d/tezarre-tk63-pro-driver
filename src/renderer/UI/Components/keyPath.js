/* Recovered from Tezarre Driver 1.1.31 - renderer module jPEq */

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
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(o, r, i);
      return (t(o, r), o);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.getKeyPath = void 0));
const o = r(require('path')),
  i = r(require('url')),
  n = require('./../../appConfig.js'),
  u = require('./../../mobxStore/store.js');
exports.getKeyPath = () =>
  u.mobxStore.deviceStore.currentDev
    ? i
        .pathToFileURL(
          o.join(
            require('path').resolve(__dirname, '../../../../dist'),
            '..',
            'company',
            'company_' + n.kCompany,
            'dev',
            u.mobxStore.deviceStore.currentDev.deviceType.name + '.png',
          ),
        )
        .toString()
    : '';
