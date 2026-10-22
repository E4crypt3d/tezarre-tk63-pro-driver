/* Recovered from Tezarre Driver 1.1.31 - renderer module UZmr */

'use strict';
var e =
    (this && this.__decorate) ||
    function (e, t, r, i) {
      var s,
        o = arguments.length,
        n = o < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, r)) : i;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        n = Reflect.decorate(e, t, r, i);
      else
        for (var d = e.length - 1; d >= 0; d--)
          (s = e[d]) && (n = (o < 3 ? s(n) : o > 3 ? s(t, r, n) : s(t, r)) || n);
      return (o > 3 && n && Object.defineProperty(t, r, n), n);
    },
  t =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  r =
    (this && this.__awaiter) ||
    function (e, t, r, i) {
      return new (r || (r = Promise))(function (s, o) {
        function n(e) {
          try {
            p(i.next(e));
          } catch (t) {
            o(t);
          }
        }
        function d(e) {
          try {
            p(i.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function p(e) {
          var t;
          e.done
            ? s(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(n, d);
        }
        p((i = i.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ToastStore = void 0));
const i = require('mobx'),
  s = require('./../../sdk/DriverIO/usb/DetectSupportDevice.js'),
  o = require('./../../DriverIO/DeviceAPI/DevFactory.js'),
  n = require('./../sdk/DriverIO/usb/USBDevice.js'),
  d = require('./../../unitys/timeFunc.js'),
  p = require('./baseStore.js'),
  c = require('./store.js');
let v, l, u;
class a extends p.BaseStore {
  constructor() {
    (super(),
      (this.devSleepTipsShow = !1),
      (this.devSleeping = !1),
      (this.state = 'idle'),
      (this.senders = []),
      (this.errMsg = ''),
      (this.errType = 'error'),
      s.detectSubject.subscribe((e) =>
        r(this, void 0, void 0, function* () {
          void 0 !== e.deviceType.id &&
            '设备插入' === e.type &&
            e.deviceType.id < 0 &&
            (console.error('WAKE_____'),
            clearInterval(u),
            yield d.sleep(5e3),
            (this.devSleepTipsShow = !1),
            (this.devSleeping = !1));
        }),
      ),
      n.sleepSubject.subscribe((e) =>
        r(this, void 0, void 0, function* () {
          var t;
          (null === (t = c.mobxStore.deviceStore.currentDev) || void 0 === t ? void 0 : t.deviceType.is24) &&
            (console.error('vvvvvvvvvvvvvv: ', e.type),
            '设备睡眠' === e.type
              ? (console.error('____SLEEP'),
                (this.devSleepTipsShow = !0),
                (this.devSleeping = !0),
                clearInterval(u),
                (u = setInterval(
                  () =>
                    r(this, void 0, void 0, function* () {
                      var e;
                      const t = c.mobxStore.deviceStore.deviceArr.length,
                        r = c.mobxStore.deviceStore.deviceArr.findIndex((e) => !0 === e.deviceType.is24);
                      (-1 !== r &&
                        this.devSleepTipsShow &&
                        t > 1 &&
                        (yield d.sleep(1e3),
                        r !== t - 1
                          ? c.mobxStore.deviceStore.currentSelectIndex !== t - 1 &&
                            ((this.devSleepTipsShow = !1),
                            c.mobxStore.deviceStore.setCurrentSelectIndex(t - 1))
                          : ((this.devSleepTipsShow = !1),
                            c.mobxStore.deviceStore.setCurrentSelectIndex(r - 1))),
                        (null === (e = c.mobxStore.deviceStore.currentDev) || void 0 === e
                          ? void 0
                          : e.deviceType.is24) && (this.devSleepTipsShow = !0));
                    }),
                  1e3,
                )))
              : (console.error('WAKE_____'),
                clearInterval(u),
                yield d.sleep(1e3),
                (this.devSleepTipsShow = !1),
                (this.devSleeping = !1)));
        }),
      ),
      o.venderSubject.subscribe((e) => {
        const t = 'vender';
        ('开始' === e.type &&
          -1 === this.senders.findIndex((e) => e === t) &&
          (this.setState('bussy', t),
          clearTimeout(l),
          (l = setTimeout(() => {
            this.setState('idle', t);
          }, 5e3))),
          '停止' === e.type &&
            -1 !== this.senders.findIndex((e) => e === t) &&
            (this.setState('idle', t), clearTimeout(l)));
      }));
  }
  closeErr() {
    this.errMsg = '';
  }
  setInfo(e) {
    ((this.errType = 'info'), (this.errMsg = e));
  }
  setErr(e) {
    ((this.errType = 'error'), (this.errMsg = e));
  }
  setState(e = 'idle', t) {
    ('bussy' === e
      ? (clearInterval(v),
        this.senders.push(t),
        (v = setTimeout(() => {
          this.senders.some((e) => e === t) && this.setState('idle', t);
        }, 1e4)))
      : this.senders.splice(this.senders.indexOf(t), 1),
      0 === this.senders.length ? (this.state = 'idle') : (this.state = 'bussy'));
  }
  get isError() {
    return 'error' === this.errType && '' !== this.errMsg;
  }
}
(e([i.observable, t('design:type', Boolean)], a.prototype, 'devSleepTipsShow', void 0),
  e([i.observable, t('design:type', Boolean)], a.prototype, 'devSleeping', void 0),
  e([i.observable, t('design:type', String)], a.prototype, 'state', void 0),
  e([i.observable, t('design:type', Object)], a.prototype, 'errMsg', void 0),
  e([i.observable, t('design:type', String)], a.prototype, 'errType', void 0),
  e(
    [i.action.bound, t('design:type', Function), t('design:paramtypes', []), t('design:returntype', void 0)],
    a.prototype,
    'closeErr',
    null,
  ),
  e(
    [
      i.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [String]),
      t('design:returntype', void 0),
    ],
    a.prototype,
    'setInfo',
    null,
  ),
  e(
    [
      i.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [String]),
      t('design:returntype', void 0),
    ],
    a.prototype,
    'setErr',
    null,
  ),
  e(
    [
      i.action.bound,
      t('design:type', Function),
      t('design:paramtypes', [String, String]),
      t('design:returntype', void 0),
    ],
    a.prototype,
    'setState',
    null,
  ),
  e([i.computed, t('design:type', Object), t('design:paramtypes', [])], a.prototype, 'isError', null),
  (exports.ToastStore = a));
