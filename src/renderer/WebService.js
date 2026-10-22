/* Recovered from Tezarre Driver 1.1.31 - renderer module nT2q */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, i, o, t) {
          (void 0 === t && (t = o),
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return i[o];
              },
            }));
        }
      : function (e, i, o, t) {
          (void 0 === t && (t = o), (e[t] = i[o]));
        }),
  i =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (e, i) {
          Object.defineProperty(e, 'default', { enumerable: !0, value: i });
        }
      : function (e, i) {
          e.default = i;
        }),
  o =
    (this && this.__importStar) ||
    function (o) {
      if (o && o.__esModule) return o;
      var t = {};
      if (null != o) for (var r in o) 'default' !== r && Object.hasOwnProperty.call(o, r) && e(t, o, r);
      return (i(t, o), t);
    },
  t =
    (this && this.__awaiter) ||
    function (e, i, o, t) {
      return new (o || (o = Promise))(function (r, n) {
        function d(e) {
          try {
            a(t.next(e));
          } catch (i) {
            n(i);
          }
        }
        function s(e) {
          try {
            a(t.throw(e));
          } catch (i) {
            n(i);
          }
        }
        function a(e) {
          var i;
          e.done
            ? r(e.value)
            : ((i = e.value),
              i instanceof o
                ? i
                : new o(function (e) {
                    e(i);
                  })).then(d, s);
        }
        a((t = t.apply(e, i || [])).next());
      });
    },
  r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DBService =
    exports.webService =
    exports.test =
    exports.downloadAppUpgradeFile =
    exports.downloadDevUpgradeFile =
    exports.getCurrentUser =
    exports.userChangeSubject =
      void 0));
const n = r(require('axios')),
  d = require('./DB.js'),
  s = require('./../sdk/DriverIO/usb/DetectSupportDevice.js'),
  a = require('ramda'),
  c = require('./entity/session_user.js'),
  l = require('rxjs'),
  u = require('./sdk/GA/ga.js'),
  v = r(require('moment')),
  p = require('./../DriverIO/DeviceAPI/DevFactory.js'),
  g = o(require('fs')),
  f = o(require('path')),
  y = r(require('adm-zip')),
  h = require('./appConfig.js'),
  m = require('typeorm'),
  C = require('./../../res/lightLayout/rongyuanRGBLayout.js'),
  w = require('./mobxStore/store.js');
(v.default.locale('zh-cn'),
  (n.default.defaults.adapter = require('axios/lib/adapters/http')),
  (exports.userChangeSubject = new l.Subject()));
let T = void 0;
exports.getCurrentUser = () =>
  t(void 0, void 0, void 0, function* () {
    const e = yield c.SessionUser.getSession();
    if (void 0 === e) return (void 0 !== T && exports.userChangeSubject.next(void 0), void (T = void 0));
    const i = yield d.User.findOne(e.userId, {
      where: { company: h.kCompany },
      relations: ['macros', 'configs', 'deviceTypes', 'macros.deviceType', 'configs.deviceType'],
    });
    return (a.equals(T, i) || exports.userChangeSubject.next(i), (T = i), i);
  });
const D = (e) =>
    t(void 0, void 0, void 0, function* () {
      const i = e.user,
        o = new d.User();
      Object.assign(o, i);
      try {
        if (((o.configs = void 0), (o.macros = void 0), void 0 !== o.deviceTypes)) {
          const e = [];
          for (let i = 0; i < o.deviceTypes.length; i++) {
            const t = o.deviceTypes[i],
              r = new d.DeviceType();
            (Object.assign(r, t), e.push(r));
          }
          o.deviceTypes = e;
        }
        const e = yield d.User.findOne(o.id, { relations: ['deviceTypes'] });
        if (void 0 !== e && void 0 !== e.deviceTypes) {
          const i = e.deviceTypes;
          let t = void 0 === o.deviceTypes ? [] : [...o.deviceTypes];
          (i.forEach((e) => {
            t = t.filter((i) => i.pid !== e.pid && i.vid !== e.vid);
          }),
            (o.deviceTypes = i.concat(t)));
        }
        const i = yield o.save();
        if ((console.log(i), void 0 === i.id)) throw 'user id === undefine 本地数据库User表可能被删除了';
        return (exports.userChangeSubject.next(i), { errCode: 0, data: i });
      } catch (t) {
        return { errCode: '本地DB错误', errMsg: t };
      }
    }),
  S = (e, i) =>
    t(void 0, void 0, void 0, function* () {
      const o = yield c.SessionUser.getSession(),
        t = void 0 === o ? '' : o.session,
        r = new Date().getTime();
      try {
        const o = yield n.default.post(e, Object.assign(Object.assign({}, i), { company: h.kCompany }), {
          headers: { Cookie: t, platform: process.platform },
          baseURL: h.kSeverAddr,
          withCredentials: !0,
          timeout: 8e3,
          validateStatus: (e) => !0,
        });
        (console.log(o),
          2 === o.data.errCode && (yield c.SessionUser.delSession(), exports.userChangeSubject.next(void 0)));
        const s = new Date().getTime();
        return (
          u.GA.trackTime('httpSuccess', e, s - r),
          Object.assign(Object.assign({}, o.data), { response: o })
        );
      } catch (d) {
        (console.log(d.request), console.log('EEERRRROOORRRR', d));
        const i = new Date().getTime();
        return (
          u.GA.trackTime('httpFailed', e, i - r, d.code),
          { errCode: -1, errMsg: d.code + '  ' + d.config.url }
        );
      }
    }),
  x = (e, i, o, r) =>
    t(void 0, void 0, void 0, function* () {
      const t = new Date().getTime();
      try {
        const s = yield n.default.post(e, Object.assign(Object.assign({}, o), { company: h.kCompany }), {
            responseType: 'stream',
            baseURL: h.kSeverAddr,
            withCredentials: !0,
            timeout: 2e4,
          }),
          a = f.join(require('path').resolve(__dirname, '../../dist'), i);
        console.log(i, a);
        const c = g.createWriteStream(a);
        s.data.pipe(c);
        const l = new Date().getTime(),
          v = s.headers['content-length'];
        let p = 0;
        return (
          s.data.on('data', (e) => {
            ((p += e.length), r && r(p / v));
          }),
          new Promise((i, o) => {
            (c.on('finish', () => {
              (u.GA.trackTime('httpDownloadSuccess', e, l - t), i(a));
            }),
              c.on('error', (e) => o({ msg: '写入文件错误!!', err: e })));
          })
        );
      } catch (d) {
        (console.log(d.request), console.log('EEERRRROOORRRR', d));
        const i = new Date().getTime();
        return (
          u.GA.trackTime('httpDwonloadFailed', e, i - t, d.code),
          new Promise((e, i) => {
            i(d);
          })
        );
      }
    });
var _, b;
((exports.downloadDevUpgradeFile = (e) =>
  t(void 0, void 0, void 0, function* () {
    return yield x('/downloadDevUpgradeFile', 'devUpgrade_' + e, { deviceId: e });
  })),
  (exports.downloadAppUpgradeFile = (e) =>
    t(void 0, void 0, void 0, function* () {
      const i = yield x('/downloadAppUpgradeFile', 'upgrade_dist.zip', {}, (i) => {
          e(0.85 * i);
        }),
        o = new y.default(i);
      var t = o.getEntries();
      (t.forEach((i, r) => {
        if (
          (console.log(
            'vvvv',
            i.entryName,
            f.join(
              require('path').resolve(__dirname, '../../dist'),
              '..',
              'company',
              'company_' + h.kCompany,
              i.entryName,
            ),
          ),
          console.error(0.85 + (r / t.length) * 0.14),
          e(0.85 + (r / t.length) * 0.14),
          'dist.zip' !== i.entryName)
        )
          return void o.extractEntryTo(
            i.entryName,
            f.join(
              require('path').resolve(__dirname, '../../dist'),
              '..',
              'company',
              'company_' + h.kCompany,
            ),
            !0,
            !0,
          );
        (o.extractEntryTo(i.entryName, require('path').resolve(__dirname, '../../dist'), !1, !0),
          console.log(
            'dist.zip  :::: path ====   ',
            f.join(require('path').resolve(__dirname, '../../dist'), 'dist.zip'),
          ));
        const n = new y.default(f.join(require('path').resolve(__dirname, '../../dist'), 'dist.zip'));
        n.getEntries().forEach((e, i) => {
          'dist/' === e.entryName ||
            e.entryName.includes('_MACOSX/') ||
            (e.entryName.includes('.dll')
              ? n.extractEntryTo(e.entryName, f.join(h.appPath(), 'dll'), !1, !0)
              : (console.log('dddiissstttt', e.entryName),
                n.extractEntryTo(e.entryName, require('path').resolve(__dirname, '../../dist'), !1, !0)));
        });
      }),
        e(1));
    })),
  (exports.test = () =>
    t(void 0, void 0, void 0, function* () {
      (console.log('userRegister:  ', yield _.userRegister('mailtest', 'male', '81423609@qq.com', '2123456')),
        console.log('userLogin:  ', yield _.userLogin('81423609@qq.com', '2123456')));
    })),
  (function (e) {
    ((e.userRegister = (e, i, o, r) =>
      t(this, void 0, void 0, function* () {
        return yield S('/register', { userName: e, gender: i, email: o, password: r });
      })),
      (e.userLogin = (e, i) =>
        t(this, void 0, void 0, function* () {
          const o = yield S('/login', { email: e, password: i });
          if (0 !== o.errCode) return o;
          if (void 0 === o.response) return o;
          const t = o.response.headers['set-cookie'];
          return (void 0 !== t && c.SessionUser.setSession(t[0], o.data.user.id), yield D(o.data));
        })),
      (e.userInfo = () =>
        t(this, void 0, void 0, function* () {
          const e = yield S('/get_user_info');
          return 0 !== e.errCode ? e : yield D(e.data);
        })),
      (e.userLogout = () =>
        t(this, void 0, void 0, function* () {
          const e = yield S('/logout');
          return 0 !== e.errCode
            ? e
            : (yield c.SessionUser.delSession(), exports.userChangeSubject.next(void 0), e);
        })),
      (e.userChangePassword = (e, i) =>
        t(this, void 0, void 0, function* () {
          return yield S('/change_password', { oldPassword: e, newPassword: i });
        })),
      (e.reqFindPassVerifyCode = (e) =>
        t(this, void 0, void 0, function* () {
          return yield S('/req_find_password_verify_code', { email: e });
        })),
      (e.findPassword = (e, i, o) =>
        t(this, void 0, void 0, function* () {
          return yield S('/find_password', { email: e, verifyCode: i, password: o });
        })),
      (e.downloadConfigs = () =>
        t(this, void 0, void 0, function* () {
          const e = yield exports.getCurrentUser();
          if (void 0 === e) throw '没登录 无法调用 downloadConfigs';
          const i = yield S('/download_configs');
          if (0 !== i.errCode) return i;
          const { configs: o, macros: t } = i.data;
          for (let r = 0; r < o.length; r++) {
            const i = new d.Config();
            (Object.assign(i, o[r]), (i.hasUpload = !0), (i.user = e));
            const t = yield d.Config.findOne({ where: { serverId: i.serverId } });
            (void 0 !== t && (i.localId = t.localId), yield i.save());
          }
          for (let r = 0; r < t.length; r++) {
            const i = new d.Macro();
            (Object.assign(i, t[r]), (i.hasUpload = !0), (i.user = e));
            const o = yield d.Macro.findOne({ where: { serverId: i.serverId } });
            (void 0 !== o && (i.localId = o.localId), yield i.save());
          }
          return i;
        })),
      (e.uploadConfigs = () =>
        t(this, void 0, void 0, function* () {
          const e = yield exports.getCurrentUser();
          if (void 0 === e) throw '用户没登录无法调用 uploadConfigs';
          const i = yield d.Config.find({
              where: [
                { user: null, hasUpload: !1 },
                { user: e, hasUpload: !1 },
              ],
              relations: ['deviceType'],
            }),
            o = yield d.Macro.find({
              where: [
                { user: null, hasUpload: !1 },
                { user: e, hasUpload: !1 },
              ],
              relations: ['deviceType'],
            }),
            t = i.filter((e) => !0 === e.needDelete && void 0 !== e.serverId).map((e) => e.serverId),
            r = o.filter((e) => !0 === e.needDelete && void 0 !== e.serverId).map((e) => e.serverId),
            n = i.filter((e) => !1 === e.needDelete),
            s = o.filter((e) => !1 === e.needDelete),
            a = yield S('/upload_configs', {
              configs: n,
              macros: s,
              needDeleteConfigIds: t,
              needDeleteMacroIds: r,
            });
          if (0 !== a.errCode) return a;
          const c = n.map((i) => ((i.hasUpload = !0), (i.user = e), i)),
            l = s.map((i) => ((i.hasUpload = !0), (i.user = e), i));
          (yield d.Config.save(c), yield d.Macro.save(l));
          const { configServerIdArr: u, macroServerIdArr: v } = a.data;
          for (let p = 0; p < u.length; p++) {
            const e = u[p],
              i = yield d.Config.findOne(e.localId);
            if (void 0 === i) throw 'config 里找不到服务器返回的local id';
            ((i.serverId = e.serverId), yield i.save());
          }
          for (let p = 0; p < v.length; p++) {
            const e = v[p],
              i = yield d.Macro.findOne(e.localId);
            if (void 0 === i) throw 'macro 里找不到服务器返回的local id';
            ((i.serverId = e.serverId), yield i.save());
          }
          return (
            yield d.Config.remove(i.filter((e) => !0 === e.needDelete)),
            yield d.Macro.remove(o.filter((e) => !0 === e.needDelete)),
            a
          );
        })),
      (e.checkVersion = () =>
        t(this, void 0, void 0, function* () {
          return yield S('/getVersion');
        })),
      (e.shareConfig = (e, i) =>
        t(this, void 0, void 0, function* () {
          e.isShared = !0;
          const o = yield S('/share_config', { config: e, describe: i });
          return 0 !== o.errCode ? o : (yield e.save(), o);
        })),
      (e.shareMacro = (e, i) =>
        t(this, void 0, void 0, function* () {
          e.isShared = !0;
          const o = yield S('/share_macro', { macro: e, describe: i });
          return 0 !== o.errCode ? o : (yield e.save(), o);
        })),
      (e.getSharedConfigList = (e, i) =>
        t(this, void 0, void 0, function* () {
          var o, t;
          const r = null === (o = b.getCurrentDev()) || void 0 === o ? void 0 : o.deviceType.group,
            n = null === (t = b.getCurrentDev()) || void 0 === t ? void 0 : t.deviceType.type,
            s = yield S('/shared_config_list', { rankType: e, page: i, deviceGroup: r, deviceType: n });
          if ((console.log('res', s), 0 !== s.errCode)) return s;
          const a = new Array();
          for (let e = 0; e < s.data.configs.length; e++) {
            const i = s.data.configs[e],
              o = {
                describe: '',
                config: new d.Config(),
                createAt: '',
                updatedAt: '',
                id: 0,
                downloadTimes: 0,
              };
            Object.assign(o, i);
            const t = new d.Config();
            (Object.assign(t, i.config), (o.config = t), a.push(o));
            const r = Date.parse(o.updatedAt);
            o.updatedAt = v.default(r).fromNow();
            const n = Date.parse(o.createAt);
            o.createAt = v.default(n).fromNow();
          }
          return { errCode: s.errCode, data: { shareList: a, itemCount: s.data.configsCount } };
        })),
      (e.getSharedMacroList = (e, i) =>
        t(this, void 0, void 0, function* () {
          const o = yield S('/shared_macro_list', { rankType: e, page: i });
          if (0 !== o.errCode) return o;
          const t = new Array();
          for (let e = 0; e < o.data.macros.length; e++) {
            const i = o.data.macros[e],
              r = {
                describe: '',
                macro: new d.Macro(),
                createAt: '',
                updatedAt: '',
                id: 0,
                downloadTimes: 0,
              };
            Object.assign(r, i);
            const n = new d.Macro();
            (Object.assign(n, i.macro), (r.macro = n), t.push(r));
            const s = Date.parse(r.updatedAt);
            r.updatedAt = v.default(s).fromNow();
            const a = Date.parse(r.createAt);
            r.createAt = v.default(a).fromNow();
          }
          return { errCode: o.errCode, data: { shareList: t, itemCount: o.data.macrosCount } };
        })),
      (e.downloadSharedConfig = (e) =>
        t(this, void 0, void 0, function* () {
          const i = e.config;
          ((i.serverId = void 0), (i.user = yield exports.getCurrentUser()), console.log('下载:', i.localId));
          const o = yield i.save();
          return (console.log('tttt', o.localId), yield S('/download_config', { sharedId: e.id }));
        })),
      (e.downloadSharedMacro = (e) =>
        t(this, void 0, void 0, function* () {
          const i = e.macro;
          return (
            (i.serverId = void 0),
            (i.user = yield exports.getCurrentUser()),
            i.save(),
            yield S('/download_macro', { sharedId: e.id })
          );
        })),
      (e.uploadUserDevices = (e) =>
        t(this, void 0, void 0, function* () {
          return yield S('/upload_user_devices', { devices: e });
        })));
  })((_ = exports.webService || (exports.webService = {}))),
  (function (e) {
    e.deviceListChangeSubject = new l.Subject();
    const i = [];
    let o = 0;
    (s.detectSubject.subscribe((r) =>
      t(this, void 0, void 0, function* () {
        var n, d;
        if ('设备插入' === (null == r ? void 0 : r.type)) {
          const e = yield p.CreateDeviceByDeviceType(r.deviceType);
          if (void 0 === e) return;
          (yield e.open(), i.push(e));
          const o = yield e.getFirmwareVersion();
          (o &&
            (o >= 1e3 &&
              '雷神' === e.deviceType.company &&
              ((null === (n = e.deviceType.layout) || void 0 === n
                ? void 0
                : n.light.types.some((e) => 'LightMusicFollow' === e.type)) ||
                null === (d = e.deviceType.layout) ||
                void 0 === d ||
                d.light.types.push(C.MusicLightConfig)),
            (e.deviceType.version = o.toString())),
            yield e.deviceType.save(),
            u.GA.gaDevice(e.deviceType),
            exports.getCurrentUser().then((e) =>
              t(this, void 0, void 0, function* () {
                if (void 0 === e) return;
                if (void 0 === e.deviceTypes) return;
                const i = e.deviceTypes.some((e) => e.id === r.deviceType.id);
                (console.log('RREEESSS', i),
                  i ||
                    (e.deviceTypes.push(r.deviceType),
                    _.uploadUserDevices(e.deviceTypes).then((i) =>
                      t(this, void 0, void 0, function* () {
                        return yield e.save();
                      }),
                    )));
              }),
            ));
        } else {
          let e = -1;
          if (
            (i.forEach((i, o) => {
              a.equals(i.deviceType.devAddr, null == r ? void 0 : r.deviceType.devAddr) && (e = o);
            }),
            -1 === e)
          )
            return;
          (i.splice(e, 1), e === o && (o = 0), e < o && o--);
        }
        e.deviceListChangeSubject.next({ type: r.type, deviceType: r.deviceType });
      }),
    ),
      (e.getDeviceInstanceArr = () => [...i]),
      (e.getCurrentDev = () => {
        if (0 !== i.length) return i[o];
      }),
      (e.getDeviceSelectIndex = () => o),
      (e.setDeviceSelectIndex = (e) => {
        e > i.length || e < 0 || (e !== o && (o = e));
      }),
      (e.getConfigs = () =>
        t(this, void 0, void 0, function* () {
          var i;
          const o = yield exports.getCurrentUser();
          return yield d.Config.createQueryBuilder('config')
            .leftJoinAndSelect('config.deviceType', 'deviceType')
            .leftJoinAndSelect('config.user', 'user')
            .where('(config.user_id is NULL OR config.user_id = :userid)', {
              userid: null == o ? void 0 : o.id,
            })
            .andWhere('config.needDelete =:nd', { nd: !1 })
            .andWhere('deviceType.type = :type', {
              type: null === (i = e.getCurrentDev()) || void 0 === i ? void 0 : i.type,
            })
            .andWhere('deviceType.company = :company', { company: h.kCompany })
            .getMany();
        })),
      (e.macrosToFolder = (e) => {
        const i = { name: 'root', macros: [], folders: [], id: '/' };
        return (
          e.forEach((e) => {
            const o = e.category;
            if (void 0 === o || '/' === o) return void i.macros.push(e);
            const t = o.split('/');
            let r = i;
            for (let i = 0; i < t.length; i++) {
              const e = t[i];
              if ('' === e) continue;
              const o = r.folders.find((i) => i.name === e);
              if (o) r = o;
              else {
                let o = '';
                for (let e = 0; e <= i; e++) o += t[e] + '/';
                const n = { name: e, macros: [], folders: [], id: o };
                (r.folders.push(n), (r = n));
              }
            }
            r.macros.push(e);
          }),
          i
        );
      }),
      (e.getMacros = () =>
        t(this, void 0, void 0, function* () {
          const e = yield exports.getCurrentUser();
          return (yield d.Macro.find({
            where: [
              { user: null, needDelete: !1 },
              { user: e, needDelete: !1 },
            ],
            relations: ['deviceType'],
          })).filter((e) => {
            var i;
            return (null === (i = e.deviceType) || void 0 === i ? void 0 : i.company) === h.kCompany;
          });
        })),
      (e.deleteConfig = (e) =>
        t(this, void 0, void 0, function* () {
          ((e.needDelete = !0), (e.hasUpload = !1), yield e.save());
          const i = yield d.CurrentConfig.find({ where: { currentConfig: e } });
          yield d.CurrentConfig.remove(i);
        })),
      (e.deleteMacros = (e) =>
        t(this, void 0, void 0, function* () {
          (e.forEach((e) => {
            ((e.needDelete = !0), (e.hasUpload = !1));
          }),
            yield d.Macro.remove(e));
        })),
      (e.deleteMacro = (e) =>
        t(this, void 0, void 0, function* () {
          ((e.needDelete = !0), (e.hasUpload = !1), yield e.save());
        })),
      (e.saveConfig = (i) =>
        t(this, void 0, void 0, function* () {
          var o;
          return (
            (i.user = yield exports.getCurrentUser()),
            (i.deviceType = null === (o = e.getCurrentDev()) || void 0 === o ? void 0 : o.deviceType),
            void 0 === i.light && (i.light = { type: 'LightOff' }),
            yield i.save()
          );
        })),
      (e.saveMacros = (i) =>
        t(this, void 0, void 0, function* () {
          const o = yield exports.getCurrentUser();
          return (
            i.forEach((i) => {
              var t;
              if (void 0 === i.value) return;
              ((i.user = o),
                (i.deviceType = null === (t = e.getCurrentDev()) || void 0 === t ? void 0 : t.deviceType));
              const r = [];
              let n = void 0;
              for (let e = 0; e < i.value.macro.length; e++) {
                const o = i.value.macro[e];
                void 0 !== n
                  ? 'delay' === o.type
                    ? (n.value += o.value)
                    : (0 !== n.value && n.value < 65535 && r.push(n), r.push(o), (n = void 0))
                  : 'delay' === o.type
                    ? (n = Object.assign({}, o))
                    : r.push(o);
              }
              (void 0 !== n && r.push(n), (i.value.macro = r));
            }),
            yield d.Macro.save(i)
          );
        })),
      (e.saveMacro = (i) =>
        t(this, void 0, void 0, function* () {
          return yield e.saveMacros([i]);
        })),
      (e.devToConfig = (i = !1, o) =>
        t(this, void 0, void 0, function* () {
          const t = e.getCurrentDev();
          if (void 0 === t) return;
          const r = new d.Config(),
            n = yield t.getReportRate();
          if (
            ((r.reportRate = 'err' !== n ? n : 125),
            (r.value = i ? yield t.getFnKeyConfig(o) : yield t.getKeyConfig()),
            (r.light = yield t.getLightSetting()),
            'keyboard' === t.type &&
              ((r.logoLight = yield t.getSLEDParam()),
              void 0 !== t.deviceType.otherSetting && null !== t.deviceType.otherSetting))
          ) {
            const e = t.deviceType.otherSetting;
            (e.deBounce && (w.mobxStore.otherStore.currentOther.deBounce = yield t.getDeBounce()),
              (e.sleep_24 || e.sleep_bt) &&
                (w.mobxStore.otherStore.currentOther.sleep = yield t.getSleepKeyTime()));
          }
          return (
            'mouse' === t.type
              ? ((r.dpi = yield t.getDpi()), (r.logoLight = yield t.getLogoLightSetting()))
              : (r.lightPic = yield t.getLightPic()),
            r
          );
        })),
      (e.configToDev = (i) =>
        t(this, void 0, void 0, function* () {
          var o;
          const t = e.getCurrentDev();
          if (void 0 === t) throw 'error dev === undefined';
          if (
            t.type !== (null === (o = i.deviceType) || void 0 === o ? void 0 : o.type) ||
            t.deviceType.group !== i.deviceType.group
          )
            throw '该方案不匹配当前设备';
          if ((void 0 !== i.light && (yield t.setLightSetting(i.light)), void 0 !== i.reportRate)) {
            let e = 1e3;
            switch (i.reportRate) {
              case 1e3:
                e = 1e3;
                break;
              case 500:
                e = 500;
                break;
              case 250:
                e = 250;
                break;
              case 125:
                e = 125;
            }
            if (!(yield t.setReportRate(e))) throw 'configToDev 设置报包率失败';
          }
          (void 0 !== i.value && (yield t.setKeyConfig(i.value)),
            'mouse' === t.type
              ? void 0 !== i.dpi && (yield t.setDPI(i.dpi))
              : void 0 !== i.lightPic && null !== i.lightPic && (yield t.setLightPic(i.lightPic)));
        })));
    const r = () =>
      t(this, void 0, void 0, function* () {
        const i = e.getCurrentDev(),
          o = yield exports.getCurrentUser();
        if (void 0 !== i)
          return yield d.CurrentConfig.createQueryBuilder('CurrentConfig')
            .leftJoinAndSelect('CurrentConfig.currentConfig', 'config')
            .leftJoinAndSelect('config.deviceType', 'deviceType')
            .where('deviceType.pid =:pid AND deviceType.vid =:vid', {
              pid: i.deviceType.pid,
              vid: i.deviceType.vid,
            })
            .andWhere('(config.user_id is NULL OR config.user_id = :userid)', {
              userid: null == o ? void 0 : o.id,
            })
            .andWhere('config.needDelete =:nd', { nd: !1 })
            .getOne();
      });
    ((e.loadCurrentConfig = () =>
      t(this, void 0, void 0, function* () {
        if (void 0 === e.getCurrentDev()) return;
        const i = yield r();
        if (void 0 !== i) return i.currentConfig;
        const o = yield e.getConfigs();
        if (0 === o.length) return;
        const t = new d.CurrentConfig();
        return ((t.currentConfig = o[0]), yield t.save(), o[0]);
      })),
      (e.setCurrentConfig = (e) =>
        t(this, void 0, void 0, function* () {
          const i = yield r();
          void 0 !== i && (yield d.CurrentConfig.delete(i));
          const o = new d.CurrentConfig();
          ((o.currentConfig = e), yield o.save());
        })),
      (e.getCurrentComanyDevList = () =>
        t(this, void 0, void 0, function* () {
          return yield d.DeviceType.find({ where: { company: h.kCompany, displayName: m.Not('help') } });
        })),
      (e.findSameConfig = (i) =>
        t(this, void 0, void 0, function* () {
          return (yield e.getConfigs()).find((o) => e.checkConfigValueEqual(o, i));
        })),
      (e.checkConfigValueEqual = (e, i) => {
        var o, t, r;
        (null === e.dpi && (e.dpi = void 0),
          null === i.dpi && (i.dpi = void 0),
          null === e.lightPic && (e.lightPic = void 0),
          null === i.lightPic && (i.lightPic = void 0),
          null === e.logoLight && (e.logoLight = void 0),
          null === i.logoLight && (i.logoLight = void 0));
        let n = !0;
        return (
          null === (o = e.value) ||
            void 0 === o ||
            o
              .map((e) => (void 0 === e.index && (e.index = void 0), e))
              .forEach((e) => {
                var o;
                !1 ===
                  (null === (o = i.value) || void 0 === o
                    ? void 0
                    : o
                        .map((e) => (void 0 === e.index && (e.index = void 0), e))
                        .some((i) =>
                          'ConfigMacro' === e.type && 'ConfigMacro' === i.type
                            ? a.equals(e.index, i.index) &&
                              a.equals(e.macro, i.macro) &&
                              a.equals(e.macroType, i.macroType) &&
                              a.equals(e.original, i.original) &&
                              a.equals(e.repeatCount, i.repeatCount) &&
                              a.equals(e.type, i.type)
                            : a.equals(e, i),
                        )) && (n = !1);
              }),
          null === (t = i.value) ||
            void 0 === t ||
            t
              .map((e) => (void 0 === e.index && (e.index = void 0), e))
              .forEach((i) => {
                var o;
                !1 ===
                  (null === (o = e.value) || void 0 === o
                    ? void 0
                    : o
                        .map((e) => (void 0 === e.index && (e.index = void 0), e))
                        .some((e) =>
                          'ConfigMacro' === i.type && 'ConfigMacro' === e.type
                            ? a.equals(i.index, e.index) &&
                              a.equals(i.macro, e.macro) &&
                              a.equals(i.macroType, e.macroType) &&
                              a.equals(i.original, e.original) &&
                              a.equals(i.repeatCount, e.repeatCount) &&
                              a.equals(i.type, e.type)
                            : a.equals(i, e),
                        )) && (n = !1);
              }),
          e.value === i.value && (n = !0),
          null === (r = e.lightPic) || void 0 === r || r.map((e) => ('index' in e || (e.index = void 0), e)),
          a.equals(e.light, i.light) &&
            a.equals(e.dpi, i.dpi) &&
            a.equals(e.reportRate, i.reportRate) &&
            n &&
            a.equals(e.lightPic, i.lightPic) &&
            a.equals(e.logoLight, i.logoLight)
        );
      }));
  })((b = exports.DBService || (exports.DBService = {}))));
