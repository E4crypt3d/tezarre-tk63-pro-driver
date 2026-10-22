/* Recovered from Tezarre Driver 1.1.31 - renderer module dEwC */

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
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(n, r, o);
      return (t(n, r), n);
    },
  n =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function c(e) {
          try {
            u(n.next(e));
          } catch (t) {
            i(t);
          }
        }
        function s(e) {
          try {
            u(n.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function u(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(c, s);
        }
        u((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.connectDB =
    exports.CurrentConfig =
    exports.SessionUser =
    exports.User =
    exports.Macro =
    exports.DeviceType =
    exports.Config =
      void 0));
const o = require('./entity/config.js');
Object.defineProperty(exports, 'Config', {
  enumerable: !0,
  get: function () {
    return o.Config;
  },
});
const i = require('./entity/device_type.js');
Object.defineProperty(exports, 'DeviceType', {
  enumerable: !0,
  get: function () {
    return i.DeviceType;
  },
});
const c = require('./entity/macro.js');
Object.defineProperty(exports, 'Macro', {
  enumerable: !0,
  get: function () {
    return c.Macro;
  },
});
const s = require('./entity/user.js');
Object.defineProperty(exports, 'User', {
  enumerable: !0,
  get: function () {
    return s.User;
  },
});
const u = r(require('path')),
  a = require('typeorm'),
  f = require('./entity/support_config.js'),
  l = require('./entity/session_user.js');
Object.defineProperty(exports, 'SessionUser', {
  enumerable: !0,
  get: function () {
    return l.SessionUser;
  },
});
const p = require('./entity/currentConfig.js');
Object.defineProperty(exports, 'CurrentConfig', {
  enumerable: !0,
  get: function () {
    return p.CurrentConfig;
  },
});
const y = require('electron'),
  d = r(require('fs')),
  g = 'kFirstLanuch____',
  b = y.remote.app.getPath('userData');
console.log('dbPath:', b);
let v = 0;
exports.connectDB = () =>
  n(void 0, void 0, void 0, function* () {
    localStorage.getItem(g);
    const e = u.join(b, 'db');
    try {
      yield a.createConnection({
        type: 'sqlite',
        database: e,
        synchronize: !0,
        logging: !1,
        entities: [o.Config, i.DeviceType, c.Macro, s.User, l.SessionUser, p.CurrentConfig],
        subscribers: [],
        cli: { migrationsDir: './' },
      });
    } catch (t) {
      return (
        console.error('数据库 建立错误', t),
        void (++v < 4 && (d.unlinkSync(e), yield exports.connectDB()))
      );
    }
    try {
      (console.log('插入本地支持设备数据'), yield i.DeviceType.save(f.config));
    } catch (t) {
      return void console.error('device 初始化错误', t);
    }
    localStorage.setItem(g, 'true');
  });
