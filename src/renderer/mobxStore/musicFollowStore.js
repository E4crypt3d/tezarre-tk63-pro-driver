/* Recovered from Tezarre Driver 1.1.31 - renderer module xoUH */

'use strict';
var t =
    (this && this.__decorate) ||
    function (t, e, r, i) {
      var o,
        s = arguments.length,
        a = s < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, r)) : i;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        a = Reflect.decorate(t, e, r, i);
      else
        for (var n = t.length - 1; n >= 0; n--)
          (o = t[n]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, r, a) : o(e, r)) || a);
      return (s > 3 && a && Object.defineProperty(e, r, a), a);
    },
  e =
    (this && this.__metadata) ||
    function (t, e) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e);
    },
  r =
    (this && this.__awaiter) ||
    function (t, e, r, i) {
      return new (r || (r = Promise))(function (o, s) {
        function a(t) {
          try {
            c(i.next(t));
          } catch (e) {
            s(e);
          }
        }
        function n(t) {
          try {
            c(i.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          var e;
          t.done
            ? o(t.value)
            : ((e = t.value),
              e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  })).then(a, n);
        }
        c((i = i.apply(t, e || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MusicFollowStore = void 0));
const i = require('electron'),
  o = require('mobx'),
  s = require('./../res.js'),
  a = require('./../../DriverIO/DeviceAPI/DevFactory.js'),
  n = require('./../../unitys/timeFunc.js'),
  c = require('./baseStore.js'),
  u = require('./store.js'),
  d = 2048;
let l = 0,
  h = 0;
class y extends c.BaseStore {
  constructor() {
    (super(),
      (this.judgeDataArray = new Uint8Array()),
      (this.musicDataArray = new Float32Array()),
      (this.musicDelt = new Array()),
      (this.music2Delt = new Array()),
      (this.music3Delt = new Array()),
      (this.isStart = !1),
      a.venderSubject.subscribe((t) => {
        (('切灯效' !== t.type && '停止' !== t.type) || this.stop(),
          u.mobxStore.deviceStore.currentConfig.light &&
            -1 !== u.mobxStore.deviceStore.currentConfig.light.type.indexOf('LightMusicFollow') &&
            this.start());
      }));
  }
  start() {
    return r(this, void 0, void 0, function* () {
      (yield n.sleep(1e3),
        console.error('STTARRRTTTTT'),
        (this.isStart = !0),
        this.context ||
          (console.error('-------------------------------'),
          i.desktopCapturer.getSources({ types: ['screen'] }).then((t) =>
            r(this, void 0, void 0, function* () {
              if (
                yield (() =>
                  r(this, void 0, void 0, function* () {
                    let t;
                    try {
                      const r = (t = yield navigator.mediaDevices.getUserMedia({
                        audio: {
                          mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: 'sourceIdCapturedUsingChromeExtension',
                          },
                        },
                        video: { mandatory: { chromeMediaSource: 'desktop' } },
                      }))
                        .getTracks()
                        .some((t) => 'audio' === t.kind);
                      return (r ? this.isStart && this.start() : yield this.musicStop(), r);
                    } catch (e) {
                      return (yield this.musicStop(), !1);
                    }
                  }))()
              )
                try {
                  (console.error('startMusicstartMusicstartMusic'), this.startMusic());
                } catch (t) {
                  this.handleError(t.toString());
                }
            }),
          )));
    });
  }
  musicStop() {
    return r(this, void 0, void 0, function* () {
      (yield u.mobxStore.deviceStore.setLightSetting({
        type: 'LightAlwaysOn',
        value: 1,
        rgb: 16729454,
        dazzle: !0,
      }),
        this.stop(),
        (this.context = void 0),
        this.trackTimer && clearInterval(this.trackTimer),
        u.mobxStore.toastStore.setErr(s.res.text.未检测到扬声器()));
    });
  }
  stop() {
    this.isStart = !1;
  }
  startMusic() {
    return r(this, void 0, void 0, function* () {
      const t = yield navigator.mediaDevices.getUserMedia({
        audio: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: 'sourceIdCapturedUsingChromeExtension',
          },
        },
        video: { mandatory: { chromeMediaSource: 'desktop' } },
      });
      this.handleStream(t);
    });
  }
  handleStream(t) {
    return r(this, void 0, void 0, function* () {
      (null != this.trackTimer && clearInterval(this.trackTimer),
        (this.context = new AudioContext()),
        (this.mediaStream = this.context.createMediaStreamSource(t)));
      var e = d;
      const i = this.context.createAnalyser();
      ((i.smoothingTimeConstant = 0.4),
        this.mediaStream.connect(i),
        (i.fftSize = e),
        (this.musicDataArray = new Float32Array(i.frequencyBinCount)),
        (this.judgeDataArray = new Uint8Array(i.frequencyBinCount)),
        (this.musicDelt = new Array(i.frequencyBinCount)),
        (this.music2Delt = new Array(i.frequencyBinCount)),
        (this.music3Delt = new Array(i.frequencyBinCount)),
        console.log('LLLEEEENNNNN', i.frequencyBinCount));
      let o = new Array(i.frequencyBinCount);
      const s = () => {
          this.musicDelt = [...this.judgeDataArray];
        },
        a = () => {
          let t = [...new Array(13).fill(0), ...this.musicDataArray.slice(0, 30)];
          const e = Math.min(...t),
            r = (-28 - e) / 6;
          ((t = t.map((t) => {
            const i = (t - e) / r < 0 ? 0 : (t - e) / r;
            return NaN === i ? 0 : i;
          })),
            (this.music2Delt = [...t]));
        },
        n = () => {
          let t = new Array(100);
          const e = this.judgeDataArray.slice(0, 100),
            r = Math.min(...e.slice(20, 40));
          for (let o = 0; o < 100; o++) t[o] = e[o] - r;
          const i = Math.max(...t);
          t = t.map((t) => {
            const e = i / 6,
              r = Math.round(t / e - 0);
            return r < 0 ? 0 : r > 6 ? 6 : r;
          });
          this.music3Delt = [...t.slice(27, 59)];
        };
      this.trackTimer = setInterval(
        () =>
          r(this, void 0, void 0, function* () {
            try {
              if ('bussy' === u.mobxStore.toastStore.state) return;
              if (!1 === this.isStart) return;
              ((this.judgeDataArray = new Uint8Array(this.judgeDataArray)),
                (this.musicDataArray = new Float32Array(this.musicDataArray)),
                i.getByteFrequencyData(this.judgeDataArray),
                i.getFloatFrequencyData(this.musicDataArray),
                s(),
                a(),
                n(),
                o.toString() !== this.judgeDataArray.toString()
                  ? (h = 0)
                  : -1 !== o.findIndex((t) => t > 0) && (h += 1),
                (o = [...this.judgeDataArray]),
                h >= 150 &&
                  (console.error('Repeatnum Exceeds 300, Judged As Switching Channel, Restart MusicFollow'),
                  this.stop(),
                  this.trackTimer && clearInterval(this.trackTimer),
                  (h = 0),
                  (this.context = void 0),
                  this.start()),
                ++l >= 144e4 &&
                  void 0 !== this.trackTimer &&
                  (console.error('restart handleStream(stream)'),
                  (l = 0),
                  clearInterval(this.trackTimer),
                  this.startMusic()));
            } catch (t) {
              (console.error('music follow send data error!!!!!!!'), console.error('err: ', t.toString()));
            }
          }),
        30,
      );
    });
  }
  handleError(t) {
    console.log('音乐律动开启source错误', t);
  }
}
// These buffers are replaced wholesale every 30 ms and contain up to 1024
// entries, so deep observability only made MobX wrap a thousand values per
// tick. .ref keeps the reassignment reaction (device streaming depends on it)
// without the wrapping.
(t([o.observable.ref, e('design:type', Object)], y.prototype, 'judgeDataArray', void 0),
  t([o.observable.ref, e('design:type', Object)], y.prototype, 'musicDataArray', void 0),
  t([o.observable.ref, e('design:type', Object)], y.prototype, 'musicDelt', void 0),
  t([o.observable.ref, e('design:type', Object)], y.prototype, 'music2Delt', void 0),
  t([o.observable.ref, e('design:type', Object)], y.prototype, 'music3Delt', void 0),
  t([o.observable, e('design:type', Object)], y.prototype, 'isStart', void 0),
  t(
    [o.action.bound, e('design:type', Function), e('design:paramtypes', []), e('design:returntype', Promise)],
    y.prototype,
    'start',
    null,
  ),
  t(
    [o.action.bound, e('design:type', Function), e('design:paramtypes', []), e('design:returntype', void 0)],
    y.prototype,
    'stop',
    null,
  ),
  (exports.MusicFollowStore = y));
