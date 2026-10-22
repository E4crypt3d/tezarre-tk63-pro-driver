/* Recovered from Tezarre Driver 1.1.31 - renderer module bejd */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, r, t, a) {
          (void 0 === a && (a = t),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
        }
      : function (e, r, t, a) {
          (void 0 === a && (a = t), (e[a] = r[t]));
        }),
  r =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, r) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: r });
        }
      : function (e, r) {
          e.default = r;
        }),
  t =
    (this && this.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var a = {};
      if (null != t) for (var s in t) 'default' !== s && Object.hasOwnProperty.call(t, s) && e(a, t, s);
      return (r(a, t), a);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.AppUpgrade = exports.AppUpgradeUI = void 0));
const a = t(require('react')),
  s = require('./../../../sdk/GA/ga.js'),
  n = require('./../../utils/Progress.js'),
  i = require('./../../utils/Warning.js'),
  p = require('./../../utils/WithProps.js');
((exports.AppUpgradeUI = (e) => {
  const [r, t] = a.useState(!1);
  return (
    a.useEffect(() => {
      1 === e.progress && (t(!1), s.GA.trackPage('AppUpgradeUI'), e.close());
    }, [e.progress]),
    a.useEffect(() => {
      '' !== e.errMsg && t(!1);
    }, [e.errMsg]),
    a.default.createElement(
      a.Fragment,
      null,
      a.default.createElement(i.Warning, {
        type: '软件升级',
        cancleHandle: e.close,
        certainHandle: () => {
          (e.upgrade(), t('' === e.errMsg));
        },
      }),
      r && a.default.createElement(n.Progress, { rate: e.progress, hidAlert: !0 }),
    )
  );
}),
  (exports.AppUpgrade = p.withProps(exports.AppUpgradeUI, p.AppUpgradeData)));
