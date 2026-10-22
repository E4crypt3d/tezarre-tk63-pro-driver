/* Recovered from Tezarre Driver 1.1.31 - renderer module tCfk */

'use strict';
var e =
  (this && this.__awaiter) ||
  function (e, t, i, r) {
    return new (i || (i = Promise))(function (o, c) {
      function d(e) {
        try {
          s(r.next(e));
        } catch (t) {
          c(t);
        }
      }
      function n(e) {
        try {
          s(r.throw(e));
        } catch (t) {
          c(t);
        }
      }
      function s(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(d, n);
      }
      s((r = r.apply(e, t || [])).next());
    });
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.initUSBDetect = exports.HIDAttachSwich = exports.currentUSB = exports.detectSubject = void 0));
const t = require('rxjs'),
  i = require('usb'),
  r = require('ramda'),
  o = require('./../../../renderer/DB.js'),
  c = require('./../../../renderer/appConfig.js'),
  d = require('./WinUSB.js'),
  n = require('./../../../unitys/timeFunc.js');
exports.detectSubject = new t.Subject();
const s = 'win32' === process.platform;
exports.currentUSB = [];
const u = [];
let p,
  v = [];
const a = () =>
  e(void 0, void 0, void 0, function* () {
    const e = i.getDeviceList();
    console.log(
      'PPPPIIIIDDDD VVVIIIIDDDD',
      e.map((e) => ({
        vid: e.deviceDescriptor.idVendor.toString(16),
        pid: e.deviceDescriptor.idProduct.toString(16),
      })),
    );
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      if (exports.currentUSB.some((e) => r.equals(i, e))) continue;
      const c = p.find(
        (e) =>
          (i.deviceDescriptor.idVendor === e.vid && i.deviceDescriptor.idProduct === e.pid) ||
          (12625 === i.deviceDescriptor.idVendor && i.deviceDescriptor.idProduct === e.pid),
      );
      if (void 0 === c) continue;
      12625 === i.deviceDescriptor.idVendor && (c.vid = 12625);
      const a = new o.DeviceType();
      if ((Object.assign(a, c), (a.devAddr = i.deviceAddress), s)) {
        yield n.sleep(1e3);
        let e = yield d.findWinUSB();
        if ((console.error('WINUSBLIST', e), void 0 === e)) return;
        const t = e.filter(
          (e) =>
            a.vid === e.vid &&
            a.pid === e.pid &&
            a.usage === e.usage &&
            a.usagePage === e.usagePage &&
            (null == a.featureReportByteLength || a.featureReportByteLength === e.featureReportByteLength),
        );
        console.log('!!!!!!!WUS', t);
        const i = t.find((e) => !u.some((t) => e.DevicePath === t.devAddr));
        if (void 0 === i) continue;
        a.devAddr = i.DevicePath;
        const r = e.filter(
          (e) =>
            e.vid === i.vid &&
            e.pid == i.pid &&
            1 == e.usage &&
            65535 == e.usagePage &&
            e.DeviceName === i.DeviceName &&
            e.versionNumber === i.versionNumber &&
            !v.some((t) => t === e.DevicePath),
        );
        r.length > 0 && ((a.venderAddr = r[0].DevicePath), v.push(a.venderAddr));
      }
      (exports.currentUSB.push(i),
        exports.detectSubject.next({ type: '设备插入', deviceType: a }),
        u.push(a));
    }
  });
let f = !0;
((exports.HIDAttachSwich = (e) => (f = e)),
  (exports.initUSBDetect = () =>
    e(void 0, void 0, void 0, function* () {
      return p
        ? exports.currentUSB
        : (i.on('attach', (e) => {
            f && a();
          }),
          i.on('detach', (t) => {
            exports.currentUSB.forEach((i, o) =>
              e(void 0, void 0, void 0, function* () {
                if (r.equals(i, t))
                  if (s) {
                    const e = yield d.findWinUSB();
                    if (void 0 === e) return;
                    (u.forEach((t) => {
                      !1 === e.some((e) => e.DevicePath === t.devAddr) &&
                        (exports.detectSubject.next({ type: '设备拔出', deviceType: t }),
                        u.splice(u.indexOf(t), 1));
                    }),
                      (v = v.filter((t) => e.some((e) => e.DevicePath === t))));
                  } else {
                    const e = u.find(
                      (e) =>
                        e.pid === i.deviceDescriptor.idProduct &&
                        e.vid === i.deviceDescriptor.idVendor &&
                        e.devAddr === i.deviceAddress,
                    );
                    if (void 0 === e) return;
                    (exports.currentUSB.splice(o, 1),
                      exports.detectSubject.next({ type: '设备拔出', deviceType: e }),
                      u.splice(u.indexOf(e), 1));
                  }
              }),
            );
          }),
          (p = yield o.DeviceType.find({ where: { company: c.kCompany } })),
          console.log(p),
          a(),
          exports.currentUSB);
    })));
