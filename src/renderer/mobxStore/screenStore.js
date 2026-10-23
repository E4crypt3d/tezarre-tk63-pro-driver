/* Recovered from Tezarre Driver 1.1.31 - renderer module BJmD */

'use strict';
var e,
  t,
  r =
    (this && this.__decorate) ||
    function (e, t, r, n) {
      var i,
        o = arguments.length,
        s = o < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, r)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, r, n);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
      return (o > 3 && s && Object.defineProperty(t, r, s), s);
    },
  n =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  i =
    (this && this.__awaiter) ||
    function (e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (t) {
            o(t);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function c(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(s, a);
        }
        c((n = n.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ScreenStore = void 0));
const o = require('electron'),
  s = require('mobx'),
  a = require('./../../DriverIO/DeviceAPI/DevFactory.js'),
  c = require('./../../unitys/timeFunc.js'),
  d = require('./baseStore.js'),
  p = require('./store.js'),
  u = 1,
  h = 1,
  l = document.createElement('video'),
  y = document.createElement('canvas');
class m extends d.BaseStore {
  constructor() {
    (super(),
      (this.screenIndex = 0),
      (this.screenArr = new Array()),
      (this.screenDataArray = new Uint8ClampedArray()),
      (this.test = !1),
      a.venderSubject.subscribe((e) => {
        (('切灯效' !== e.type && '停止' !== e.type) || this.stop(),
          p.mobxStore.deviceStore.currentConfig.light &&
            -1 !== p.mobxStore.deviceStore.currentConfig.light.type.indexOf('LightScreenColor') &&
            this.start());
      }));
  }
  start() {
    return i(this, void 0, void 0, function* () {
      (yield c.sleep(1e3),
        (this.test = !0),
        o.desktopCapturer.getSources({ types: ['window', 'screen'] }).then((e) =>
          i(this, void 0, void 0, function* () {
            this.screenArr = [];
            for (const r of e) -1 !== r.id.indexOf('screen') && this.screenArr.push(r.id);
            for (const r of e)
              if (-1 !== r.id.indexOf(this.screenArr[this.screenIndex])) {
                try {
                  const e = yield navigator.mediaDevices.getUserMedia({
                    audio: !1,
                    video: {
                      mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: r.id,
                        minWidth: 10 * u,
                        maxWidth: 10 * u,
                        minHeight: 10 * h,
                        maxHeight: 10 * h,
                      },
                    },
                  });
                  this.handleStream(e);
                } catch (t) {
                  this.handleError(t);
                }
                return;
              }
          }),
        ));
    });
  }
  handleStream(e) {
    return i(this, void 0, void 0, function* () {
      l &&
        ((l.srcObject = e),
        (l.onloadedmetadata = () => {
          if ((this.timer && clearInterval(this.timer), l.play(), !y)) return;
          const e = y.getContext('2d');
          e &&
            (this.timer && clearInterval(this.timer),
            (this.timer = setInterval(() => {
              if ('bussy' === p.mobxStore.toastStore.state) return;
              if (!1 === this.test) return;
              e.drawImage(l, 0, 0, u, h);
              const t = e.getImageData(0, 0, u, h);
              this.screenDataArray = t.data;
            }, 40)));
        }));
    });
  }
  handleError(e) {
    console.log(e);
  }
  setScreenIndex(e) {
    (this.stop(), (this.screenIndex = e), this.start());
  }
  stop() {
    ((this.screenArr = []), (this.test = !1), this.timer && clearInterval(this.timer));
  }
}
(r([s.observable, n('design:type', Number)], m.prototype, 'screenIndex', void 0),
  r([s.observable, n('design:type', Array)], m.prototype, 'screenArr', void 0),
  // replaced wholesale on every captured frame; the reaction that streams it to
  // the keyboard only needs to know about the reassignment
  r([s.observable.ref, n('design:type', Object)], m.prototype, 'screenDataArray', void 0),
  r([s.observable, n('design:type', Object)], m.prototype, 'timer', void 0),
  r([s.observable, n('design:type', Boolean)], m.prototype, 'test', void 0),
  r(
    [s.action.bound, n('design:type', Function), n('design:paramtypes', []), n('design:returntype', Promise)],
    m.prototype,
    'start',
    null,
  ),
  r(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [
        'function' == typeof (t = 'undefined' != typeof MediaStream && MediaStream) ? t : Object,
      ]),
      n('design:returntype', Promise),
    ],
    m.prototype,
    'handleStream',
    null,
  ),
  r(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [Object]),
      n('design:returntype', void 0),
    ],
    m.prototype,
    'handleError',
    null,
  ),
  r(
    [
      s.action.bound,
      n('design:type', Function),
      n('design:paramtypes', [Number]),
      n('design:returntype', void 0),
    ],
    m.prototype,
    'setScreenIndex',
    null,
  ),
  r(
    [s.action.bound, n('design:type', Function), n('design:paramtypes', []), n('design:returntype', void 0)],
    m.prototype,
    'stop',
    null,
  ),
  (exports.ScreenStore = m));
