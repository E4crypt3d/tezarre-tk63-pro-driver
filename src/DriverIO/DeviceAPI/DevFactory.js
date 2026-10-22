/* Recovered from Tezarre Driver 1.1.31 - renderer module qXSZ */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, i, r, n) {
    return new (r || (r = Promise))(function (o, d) {
      function t(e) {
        try {
          s(n.next(e));
        } catch (i) {
          d(i);
        }
      }
      function l(e) {
        try {
          s(n.throw(e));
        } catch (i) {
          d(i);
        }
      }
      function s(e) {
        var i;
        e.done
          ? o(e.value)
          : ((i = e.value),
            i instanceof r
              ? i
              : new r(function (e) {
                  e(i);
                })).then(t, l);
      }
      s((n = n.apply(e, i || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.CreateDeviceByDeviceType = exports.venderDelayTime = exports.venderSubject = void 0));
const i = require('./../../renderer/DB.js'),
  r = require('./../../renderer/sdk/DriverIO/usb/USBDevice.js'),
  n = require('./dk2017.js'),
  o = require('./../../unitys/timeFunc.js'),
  d = require('./../../renderer/appConfig.js'),
  t = require('./sonix/k68Help.js'),
  l = require('./Common.js'),
  s = require('ramda'),
  v = require('rxjs'),
  c = require('./yzw/YZWCommon.js'),
  u = require('./yzw/YZWHelp.js'),
  a = require('./findSonixDev.js'),
  p = require('./findYZWDev.js'),
  y = require('./findYC300Dev.js'),
  D = [
    '开始',
    '停止',
    '切灯效',
    '切配置',
    '重置',
    '切WIN',
    '切MAC',
    '省电模式',
    '常规模式',
    '切睡眠',
    void 0,
  ];
let m;
((exports.venderSubject = new v.Subject()),
  (exports.venderDelayTime = 500),
  (exports.CreateDeviceByDeviceType = (v) =>
    e(void 0, void 0, void 0, function* () {
      console.log('DDDTTTTEEEMMMMPPP', v, v.name);
      let D = yield i.DeviceType.find({ where: { pid: v.pid, vid: v.vid } });
      if (
        ((void 0 !== D && 0 !== D.length) ||
          (D = yield i.DeviceType.find({ where: { pid: v.pid, vid: 1121 } })),
        1 === D.length || 'help' === D[0].displayName)
      )
        switch (v.name) {
          case 'common':
            return new l.Common(v);
          case 'YZWCommon':
            return new c.YZWCommon(v);
          case 'help':
            return new t.K68Help(v);
          case 'helpYZW':
            return new u.YZWHelp(v);
          case 'v25s':
          case 'dk2017':
            return new n.Dk2017(v);
          case '小潘鼠标':
          case 'test_dj':
          default:
            return void console.error('单台设备未处理');
        }
      yield o.sleep(500);
      const f = new r.USBDevice(v);
      let q;
      (f.addVenderCallBack((i) =>
        e(void 0, void 0, void 0, function* () {
          let e = void 0;
          (s.equals([...i], [5, 15, 1, 0]) && (e = '开始'),
            s.equals([...i], [5, 15, 0, 0]) && (e = '停止'),
            e
              ? exports.venderSubject.next({ type: e })
              : (i[1] >= 4 && i[1] <= 7 && (e = '切灯效'),
                1 === i[1] && (e = '切配置'),
                s.equals([...i], [5, 13, 0, 0]) && (e = '重置'),
                5 === i[0] &&
                  3 === i[1] &&
                  (9 === i[3] && (e = i[2] ? '省电模式' : '常规模式'),
                  (0 !== i[3] && 2 !== i[3]) || (e = 2 & i[2] ? '切MAC' : '切WIN')),
                s.equals([...i], [5, 19, 0, 0]) && (e = '切睡眠'),
                clearTimeout(m),
                (m = setTimeout(() => {
                  void 0 !== e &&
                    (console.error('typetypetypetype', e), exports.venderSubject.next({ type: e }));
                }, exports.venderDelayTime))));
        }),
      ),
        yield f.open(),
        (v.is24 = yield f.check24()),
        yield o.sleep(1e3));
      let w = 0;
      const x = yield i.DeviceType.find();
      for (; 0 === q || void 0 === q;) {
        yield o.sleep(200);
        let { id: e } = yield f.whoAmI();
        if (
          ((q = e),
          console.log('DDDEEEVVUUUUIIIIDDDD', q),
          x.some((e) => e.id === q) || (q = 0),
          w++,
          !1 === v.is24 && w > 5)
        )
          break;
      }
      if ((yield f.destroy(), 0 === q || void 0 === q)) return void console.log('设备id返回错误', q);
      const h = yield i.DeviceType.findOne({ where: { id: q, company: d.kCompany } });
      if ((console.log('DDDEEEVVV', h, q, null == h ? void 0 : h.name), void 0 === h)) return;
      ((h.vid = v.vid), (h.devAddr = v.devAddr), (h.venderAddr = v.venderAddr), (h.is24 = v.is24));
      let T = a.findSonixDev(h, h.name);
      return (
        void 0 === T && (T = p.findYZWDev(h, h.name)),
        void 0 === T && (T = y.findYC300Dev(h, h.name)),
        void 0 === T && console.error('未找到对应实现', h),
        T
      );
    })));
