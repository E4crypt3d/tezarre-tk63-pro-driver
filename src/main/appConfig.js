/* Recovered from Tezarre Driver 1.1.31 - main module eg05 */

'use strict';
var o =
    (this && this.__createBinding) ||
    (Object.create
      ? function (o, e, p, r) {
          (void 0 === r && (r = p),
            Object.defineProperty(o, r, {
              enumerable: !0,
              get: function () {
                return e[p];
              },
            }));
        }
      : function (o, e, p, r) {
          (void 0 === r && (r = p), (o[r] = e[p]));
        }),
  e =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (o, e) {
          Object.defineProperty(o, 'default', { enumerable: !0, value: e });
        }
      : function (o, e) {
          o.default = e;
        }),
  p =
    (this && this.__importStar) ||
    function (p) {
      if (p && p.__esModule) return p;
      var r = {};
      if (null != p) for (var t in p) 'default' !== t && Object.hasOwnProperty.call(p, t) && o(r, p, t);
      return (e(r, p), r);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.urlStr =
    exports.topnav_logo_p =
    exports.login_logo_p =
    exports.default_logo_p =
    exports.APP_p =
    exports.icon_p =
    exports.ClickKey =
    exports.ShopKey =
    exports.blockCloud =
    exports.kCompanyDisplayName =
    exports.kCompany =
    exports.kSeverAddr =
    exports.kAppVersion =
    exports.kBaseAppVersion =
    exports.appPath =
      void 0));
const r = require('electron'),
  t = p(require('path')),
  n = p(require('url')),
  a = require('./../APP_VERSION.json.js'),
  s = t.join(require('path').resolve(__dirname, '../../dist'), '..', 'CurrentCompany.json'),
  i = require(s),
  l = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + i.currentCompany,
    'CONFIG.json',
  ),
  _ = require(l);
((exports.appPath = () => r.remote.app.getPath('userData')),
  (exports.kBaseAppVersion = a.BaseAppVersion),
  (exports.kAppVersion = a.AppVersion),
  (exports.kSeverAddr = 'http://api.rongyuan.tech:3000/v1'),
  (exports.kCompany = _.company),
  (exports.kCompanyDisplayName = _.displayName),
  (exports.blockCloud = _.blockCloud),
  (exports.ShopKey = _.shop),
  (exports.ClickKey = _.click),
  (exports.icon_p = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + exports.kCompany,
    'icon.png',
  )),
  (exports.APP_p = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + exports.kCompany,
    'APP.png',
  )),
  (exports.default_logo_p = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + exports.kCompany,
    'default_logo.png',
  )),
  (exports.login_logo_p = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + exports.kCompany,
    'login_logo.png',
  )),
  (exports.topnav_logo_p = t.join(
    require('path').resolve(__dirname, '../../dist'),
    '..',
    'company',
    'company_' + exports.kCompany,
    'topnav_logo.png',
  )),
  (exports.urlStr = (o) => n.pathToFileURL(o).toString()));
