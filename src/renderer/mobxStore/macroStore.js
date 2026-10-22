/* Recovered from Tezarre Driver 1.1.31 - renderer module KS8p */

'use strict';
var e,
  t,
  r,
  o,
  n,
  i,
  s,
  c,
  a,
  d,
  u,
  l,
  p,
  v =
    (this && this.__decorate) ||
    function (e, t, r, o) {
      var n,
        i = arguments.length,
        s = i < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, r, o);
      else
        for (var c = e.length - 1; c >= 0; c--)
          (n = e[c]) && (s = (i < 3 ? n(s) : i > 3 ? n(t, r, s) : n(t, r)) || s);
      return (i > 3 && s && Object.defineProperty(t, r, s), s);
    },
  h =
    (this && this.__metadata) ||
    function (e, t) {
      if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
  y =
    (this && this.__awaiter) ||
    function (e, t, r, o) {
      return new (r || (r = Promise))(function (n, i) {
        function s(e) {
          try {
            a(o.next(e));
          } catch (t) {
            i(t);
          }
        }
        function c(e) {
          try {
            a(o.throw(e));
          } catch (t) {
            i(t);
          }
        }
        function a(e) {
          var t;
          e.done
            ? n(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(s, c);
        }
        a((o = o.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.MacroStore = void 0));
const g = require('mobx'),
  m = require('./baseStore.js'),
  S = require('./store.js'),
  M = require('./../sdk/DriverIO/djIOHook/hookFunction.js'),
  f = require('./../WebService.js'),
  b = require('./../DB.js'),
  E = require('./../res.js');
class F extends m.BaseStore {
  constructor() {
    (super(),
      (this.currentRecMacroArr = []),
      (this.currentSingleValue = 0),
      (this.isFull = !1),
      (this.recodingState = 'stop'),
      (this.macroType = 'touch_repeat'),
      (this.repeatTimes = 1),
      (this.macroList = f.DBService.macrosToFolder([])),
      (this.currentSelectMacro = void 0),
      (this.checkIsRec = () =>
        'recording' === this.recodingState &&
        (S.mobxStore.toastStore.setInfo(E.res.text.请先停止录制()), !0)),
      (this.getFolderMacros = (e) => {
        const t = [];
        return (
          t.push(...e.macros),
          e.folders.length > 0 && e.folders.forEach((e) => t.push(...this.getFolderMacros(e))),
          t
        );
      }),
      (this.checkName = (e) =>
        '' === e
          ? (S.mobxStore.toastStore.setInfo(E.res.text.名称不可为空()), !1)
          : e.length > 20
            ? (S.mobxStore.toastStore.setInfo(E.res.text.名称不可大于20个字符()), !1)
            : e.split('').some((e) => ' ' != e)
              ? (!e.includes('/') && !e.includes('*')) ||
                (S.mobxStore.toastStore.setInfo(E.res.text.名称不可包含特殊字符()), !1)
              : (S.mobxStore.toastStore.setInfo(E.res.text.名称不可全部为空()), !1)),
      (this.newDefaultName = (e, t) => {
        let r = 1,
          o = e
            .map((e) => e.split(t))
            .filter((e) => e.length > 1)
            .map((e) => e[1]);
        for (;;) {
          let e = !1;
          for (let t = 0; t < o.length; t++) {
            Number(o[t]) === r && (e = !0);
          }
          if (!e) break;
          r++;
        }
        return t + r;
      }),
      (this.alertIsFull = () => {
        S.mobxStore.toastStore.errMsg !== E.res.text.宏已录满() &&
          S.mobxStore.toastStore.setInfo(E.res.text.宏已录满());
      }),
      (this.checkMacro = (e) =>
        'mouse_move' === e.type && (Math.abs(e.dx) > 127 || Math.abs(e.dy) > 127)
          ? (S.mobxStore.toastStore.setInfo(E.res.text.坐标值范围应在()), !1)
          : !('delay' === e.type && e.value < 0) ||
            (S.mobxStore.toastStore.setInfo(E.res.text.延时应该大于0()), !1)),
      (this.isStarting = !1),
      (this.isStoppting = !1),
      (this.recEvent = (e) => {
        M.getMacroEvents(e).forEach((e) => this.addEvent(e));
      }),
      (this.recSingleEvent = (e) => {
        M.getMacroEvents(e).forEach((e) => {
          'delay' !== e.type && 'mouse_move' !== e.type && (this.currentSingleValue = e.value);
        });
      }),
      g.autorun(() => console.log('currentSingleValue', this.currentSingleValue)));
  }
  setCurrentSelectMacro(e) {
    var t, r, o, n, i, s, c, a;
    this.checkIsRec() ||
      ((this.currentSelectMacro = e),
      (this.repeatTimes =
        void 0 === (null === (t = null == e ? void 0 : e.value) || void 0 === t ? void 0 : t.repeatCount)
          ? 1
          : null === (r = null == e ? void 0 : e.value) || void 0 === r
            ? void 0
            : r.repeatCount),
      (this.macroType =
        void 0 === (null === (o = null == e ? void 0 : e.value) || void 0 === o ? void 0 : o.macroType)
          ? 'touch_repeat'
          : null === (n = null == e ? void 0 : e.value) || void 0 === n
            ? void 0
            : n.macroType),
      void 0 !==
        (null === (s = null === (i = this.currentSelectMacro) || void 0 === i ? void 0 : i.value) ||
        void 0 === s
          ? void 0
          : s.macro) &&
        this.setCurrentRecMacroArr(
          null === (a = null === (c = this.currentSelectMacro) || void 0 === c ? void 0 : c.value) ||
            void 0 === a
            ? void 0
            : a.macro,
        ));
  }
  refreshMacroList() {
    this.doAsync(f.DBService.getMacros, (e) => {
      this.macroList = f.DBService.macrosToFolder(e);
    });
  }
  deleteFolder(e) {
    if (this.checkIsRec()) return;
    const t = this.getFolderMacros(e);
    (t.some((e) => {
      var t;
      return e.localId === (null === (t = this.currentSelectMacro) || void 0 === t ? void 0 : t.localId);
    }) && (this.setCurrentSelectMacro(void 0), (this.currentRecMacroArr = [])),
      this.doAsync(
        f.DBService.deleteMacros,
        (e) => {
          this.refreshMacroList();
        },
        t,
      ));
  }
  deleteMacro(e) {
    this.checkIsRec() ||
      this.doAsync(
        f.DBService.deleteMacro,
        (t) => {
          var r;
          ((null === (r = this.currentSelectMacro) || void 0 === r ? void 0 : r.localId) === e.localId &&
            (this.setCurrentSelectMacro(void 0), (this.currentRecMacroArr = [])),
            this.refreshMacroList());
        },
        e,
      );
  }
  renameMacro(e, t) {
    this.checkIsRec() ||
      (this.checkName(t) &&
        ((e.name = t),
        this.doAsync(f.DBService.saveMacro, (e) => this.refreshMacroList(), e),
        this.currentSelectMacro && (this.currentSelectMacro.name = t)));
  }
  renameFolder(e, t) {
    if (!this.checkIsRec() && this.checkName(t)) {
      const r = this.getFolderMacros(e),
        o = e.id.substring(0, e.id.lastIndexOf(e.name)) + t;
      (r.forEach((t) => {
        var r;
        t.category = null === (r = t.category) || void 0 === r ? void 0 : r.replace(e.id, o);
      }),
        this.doAsync(f.DBService.saveMacros, (e) => this.refreshMacroList(), r));
    }
  }
  saveMacro() {
    var e, t;
    return y(this, void 0, void 0, function* () {
      (console.log(
        '!!!!!!!!~~~~~~~~~~~~~',
        null === (e = this.currentSelectMacro) || void 0 === e ? void 0 : e.name,
      ),
        void 0 === this.currentSelectMacro && (yield this.newMacro(this.macroList)),
        ('recording' !== this.recodingState && 'singleRecording' !== this.recodingState) || this.stoptHook(),
        void 0 !== (null === (t = this.currentSelectMacro) || void 0 === t ? void 0 : t.value) &&
          ((this.currentSelectMacro.value.macro = this.currentRecMacroArr),
          (this.currentSelectMacro.value.macroType = this.macroType),
          (this.currentSelectMacro.value.repeatCount = this.repeatTimes),
          this.doAsync(
            f.DBService.saveMacro,
            (e) => {
              (this.refreshMacroList(),
                e.length > 0 && void 0 === this.currentSelectMacro && (this.currentSelectMacro = e[0]));
            },
            this.currentSelectMacro,
          )));
    });
  }
  newFolder(e) {
    if (this.checkIsRec()) return;
    const t = new b.Macro();
    ((t.category =
      e.id +
      this.newDefaultName(
        e.folders.map((e) => e.name),
        E.res.text.新建文件夹_(),
      ) +
      '/'),
      (t.name = E.res.text.新的宏_() + 1),
      (t.value = { original: 0, type: 'ConfigMacro', macro: [], macroType: this.macroType, repeatCount: 1 }),
      this.doAsync(
        f.DBService.saveMacro,
        (e) => {
          (this.setCurrentSelectMacro(e[0]), this.refreshMacroList());
        },
        t,
      ));
  }
  newMacro(e) {
    if (!this.checkIsRec())
      return new Promise((t) => {
        const r = new b.Macro();
        ((r.category = e.id),
          (r.name = this.newDefaultName(
            e.macros.map((e) => e.name),
            E.res.text.新的宏_(),
          )),
          (r.value = {
            original: 0,
            type: 'ConfigMacro',
            macro: this.currentRecMacroArr,
            macroType: this.macroType,
            repeatCount: this.repeatTimes,
          }),
          (r.value.macro = []),
          void 0 === this.currentSelectMacro && (r.value.macro = this.currentRecMacroArr),
          this.doAsync(
            f.DBService.saveMacro,
            (e) => {
              (this.setCurrentSelectMacro(e[0]),
                this.refreshMacroList(),
                e.length > 0 && (this.currentSelectMacro = e[0]),
                t({}));
            },
            r,
          ));
      });
  }
  cleanMacroArr() {
    this.setCurrentRecMacroArr([]);
  }
  cleanSingleValue() {
    this.currentSingleValue = 0;
  }
  setRepeatTimes(e) {
    this.repeatTimes = e;
  }
  setMacroType(e) {
    this.macroType !== e && (this.macroType = e);
  }
  setCurrentRecMacroArr(e) {
    var t;
    !1 ===
    (null === (t = S.mobxStore.deviceStore.currentDev) || void 0 === t ? void 0 : t.checkMacroLenthIsFull(e))
      ? ((this.currentRecMacroArr = [...e]), (this.isFull = !1))
      : (this.alertIsFull(), (this.isFull = !0));
  }
  addEvent(e, t) {
    if (!this.checkMacro(e)) return;
    const r = [...this.currentRecMacroArr];
    (void 0 === t ? r.push(e) : r.splice(t, 0, e), this.setCurrentRecMacroArr(r));
  }
  delEvent(e) {
    const t = [...this.currentRecMacroArr];
    (t.splice(e, 1), this.setCurrentRecMacroArr(t));
  }
  changeEvent(e, t) {
    if (!this.checkMacro(t)) return;
    const r = [...this.currentRecMacroArr];
    ((r[e] = t), this.setCurrentRecMacroArr(r));
  }
  stoptHook() {
    this.isStarting ||
      ((this.isStoppting = !0),
      (this.recodingState = 'stop'),
      document.removeEventListener('keyup', this.recEvent, !1),
      document.removeEventListener('keydown', this.recEvent, !1),
      document.removeEventListener('mouseup', this.recEvent, !1),
      document.removeEventListener('mousedown', this.recEvent, !1),
      document.removeEventListener('keyup', this.recSingleEvent, !1),
      document.removeEventListener('keydown', this.recSingleEvent, !1),
      document.removeEventListener('mouseup', this.recSingleEvent, !1),
      document.removeEventListener('mousedown', this.recSingleEvent, !1),
      M.cleanTime(),
      (this.isStoppting = !1));
  }
  starHook() {
    this.isStoppting ||
      (this.isFull
        ? this.alertIsFull()
        : 'recording' !== this.recodingState &&
          ('singleRecording' === this.recodingState && this.stoptHook(),
          (this.isStarting = !0),
          (this.recodingState = 'recording'),
          document.addEventListener('keyup', this.recEvent, !1),
          document.addEventListener('keydown', this.recEvent, !1),
          document.addEventListener('mouseup', this.recEvent, !1),
          document.addEventListener('mousedown', this.recEvent, !1),
          M.cleanTime(),
          (this.isStarting = !1)));
  }
  startSingleHook() {
    this.isStoppting ||
      ('singleRecording' !== this.recodingState &&
        ('recording' === this.recodingState && this.stoptHook(),
        (this.recodingState = 'singleRecording'),
        (this.currentSingleValue = 0),
        (this.isStarting = !0),
        document.addEventListener('keyup', this.recSingleEvent, !1),
        document.addEventListener('keydown', this.recSingleEvent, !1),
        document.addEventListener('mouseup', this.recSingleEvent, !1),
        document.addEventListener('mousedown', this.recSingleEvent, !1),
        (this.isStarting = !1)));
  }
  stopMouseEvent() {
    (document.removeEventListener('mouseup', this.recEvent, !1),
      document.removeEventListener('mousedown', this.recEvent, !1),
      document.removeEventListener('mouseup', this.recSingleEvent, !1),
      document.removeEventListener('mousedown', this.recSingleEvent, !1));
  }
  startMouseEvent() {
    ('recording' === this.recodingState &&
      (document.addEventListener('mouseup', this.recEvent, !1),
      document.addEventListener('mousedown', this.recEvent, !1)),
      'singleRecording' === this.recodingState &&
        (document.addEventListener('mouseup', this.recSingleEvent, !1),
        document.addEventListener('mousedown', this.recSingleEvent, !1)));
  }
  uiSaveMacro(e = !0) {
    var t, r, o;
    const n = new b.Macro();
    if (
      ((n.value = {
        original: 0,
        type: 'ConfigMacro',
        macro: this.currentRecMacroArr,
        macroType: this.macroType,
        repeatCount: this.repeatTimes,
      }),
      (n.category = null === (t = this.currentSelectMacro) || void 0 === t ? void 0 : t.category),
      (n.localId = null === (r = this.currentSelectMacro) || void 0 === r ? void 0 : r.localId),
      (n.name = null === (o = this.currentSelectMacro) || void 0 === o ? void 0 : o.name),
      e)
    ) {
      if (this.getKeyCheck(this.currentRecMacroArr))
        return void S.mobxStore.toastStore.setErr(E.res.text.宏按键未抬起());
    }
    ('repeat_times' !== this.macroType && this.setRepeatTimes(1), this.stoptHook(), this.saveMacro());
  }
  getKeyCheck(e) {
    let t = 0,
      r = 0;
    return (
      e.map((e, o) => {
        'mouse_move' !== e.type &&
          'delay' !== e.type &&
          ('down' === e.action && t++,
          'up' === e.action && r++,
          o === this.currentRecMacroArr.length - 1 && 'down' === e.action && t++);
      }),
      t > r
    );
  }
}
(v([g.observable, h('design:type', Array)], F.prototype, 'currentRecMacroArr', void 0),
  v([g.observable, h('design:type', Object)], F.prototype, 'currentSingleValue', void 0),
  v([g.observable, h('design:type', Boolean)], F.prototype, 'isFull', void 0),
  v([g.observable, h('design:type', String)], F.prototype, 'recodingState', void 0),
  v(
    [
      g.observable,
      h(
        'design:type',
        'function' == typeof (e = 'undefined' != typeof MacroRepeatType && MacroRepeatType) ? e : Object,
      ),
    ],
    F.prototype,
    'macroType',
    void 0,
  ),
  v([g.observable, h('design:type', Number)], F.prototype, 'repeatTimes', void 0),
  v(
    [
      g.observable,
      h(
        'design:type',
        'function' == typeof (t = void 0 !== f.DBService && f.DBService.MacroFolder) ? t : Object,
      ),
    ],
    F.prototype,
    'macroList',
    void 0,
  ),
  v([g.observable, h('design:type', Object)], F.prototype, 'currentSelectMacro', void 0),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [Object]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'setCurrentSelectMacro',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'refreshMacroList',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (n = void 0 !== f.DBService && f.DBService.MacroFolder) ? n : Object,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'deleteFolder',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', ['function' == typeof (i = void 0 !== b.Macro && b.Macro) ? i : Object]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'deleteMacro',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', ['function' == typeof (s = void 0 !== b.Macro && b.Macro) ? s : Object, String]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'renameMacro',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (c = void 0 !== f.DBService && f.DBService.MacroFolder) ? c : Object,
        String,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'renameFolder',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', Promise)],
    F.prototype,
    'saveMacro',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (a = void 0 !== f.DBService && f.DBService.MacroFolder) ? a : Object,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'newFolder',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (d = void 0 !== f.DBService && f.DBService.MacroFolder) ? d : Object,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'newMacro',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'cleanMacroArr',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'cleanSingleValue',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [Number]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'setRepeatTimes',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (u = 'undefined' != typeof MacroRepeatType && MacroRepeatType) ? u : Object,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'setMacroType',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [Array]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'setCurrentRecMacroArr',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        'function' == typeof (l = 'undefined' != typeof MacroEvent && MacroEvent) ? l : Object,
        Number,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'addEvent',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [Number]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'delEvent',
    null,
  ),
  v(
    [
      g.action.bound,
      h('design:type', Function),
      h('design:paramtypes', [
        Number,
        'function' == typeof (p = 'undefined' != typeof MacroEvent && MacroEvent) ? p : Object,
      ]),
      h('design:returntype', void 0),
    ],
    F.prototype,
    'changeEvent',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'stoptHook',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'starHook',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'startSingleHook',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'stopMouseEvent',
    null,
  ),
  v(
    [g.action.bound, h('design:type', Function), h('design:paramtypes', []), h('design:returntype', void 0)],
    F.prototype,
    'startMouseEvent',
    null,
  ),
  v(
    [g.action, h('design:type', Function), h('design:paramtypes', [Boolean]), h('design:returntype', void 0)],
    F.prototype,
    'uiSaveMacro',
    null,
  ),
  (exports.MacroStore = F));
