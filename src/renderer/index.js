/* Recovered from Tezarre Driver 1.1.31 - renderer module zo2T */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, r, t, o) {
          (void 0 === o && (o = t),
            Object.defineProperty(e, o, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
        }
      : function (e, r, t, o) {
          (void 0 === o && (o = t), (e[o] = r[t]));
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
      var o = {};
      if (null != t) for (var i in t) 'default' !== i && Object.hasOwnProperty.call(t, i) && e(o, t, i);
      return (r(o, t), o);
    };
Object.defineProperty(exports, '__esModule', { value: !0 });
const o = t(require('react')),
  i = t(require('react-dom')),
  n = require('./UI/APP.js'),
  c = require('./sdk.js'),
  a = require('./mobxStore/store.js');
require('mobx-react-lite/batchingForReactDom');
const u = require('electron'),
  l = require('./screenConfig.js');
(console.log('SSSSSSSSTTTTTTTT'),
  c.sdk.init().then((e) => {
    console.log('hello world');
    var r = l.baseH,
      t = l.ratio,
      c = u.remote.screen.getPrimaryDisplay().scaleFactor,
      s = (window.innerHeight / r) * (window.devicePixelRatio / 1) * (t / c);
    (require('electron').webFrame.setZoomFactor(s),
      i.render(
        o.createElement(a.MobxStoreContext.Provider, { value: a.mobxStore }, o.createElement(n.APP, null)),
        document.querySelector('#root'),
      ));
  }));
