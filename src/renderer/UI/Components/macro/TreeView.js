/* Recovered from Tezarre Driver 1.1.31 - renderer module uvDr */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, a) {
          (void 0 === a && (a = r),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, a) {
          (void 0 === a && (a = r), (e[a] = t[r]));
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
      var a = {};
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(a, r, o);
      return (t(a, r), a);
    },
  a =
    (this && this.__awaiter) ||
    function (e, t, r, a) {
      return new (r || (r = Promise))(function (o, n) {
        function c(e) {
          try {
            i(a.next(e));
          } catch (t) {
            n(t);
          }
        }
        function l(e) {
          try {
            i(a.throw(e));
          } catch (t) {
            n(t);
          }
        }
        function i(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  })).then(c, l);
        }
        i((a = a.apply(e, t || [])).next());
      });
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.TreeView = void 0));
const o = r(require('react')),
  n = require('./../../../dj.js'),
  c = require('./../../utils/Share.js'),
  l = require('./../../../mobxStore/store.js'),
  i = require('mobx-react-lite'),
  u = require('mobx'),
  d = require('./../../../res.js'),
  s = require('./../../../appConfig.js');
exports.TreeView = () => {
  const [e, t] = o.useState({}),
    [r, m] = o.useState(void 0),
    { macroStore: f, pageStore: v, shareStore: w, toastStore: h } = l.useStore(),
    p = (e) =>
      a(void 0, void 0, void 0, function* () {
        '' !== j.name
          ? (e.name !== j.name && f.renameMacro(e, j.name), y({ id: '', name: '' }))
          : y({ id: '', name: '' });
      }),
    M = (e) =>
      a(void 0, void 0, void 0, function* () {
        '' !== j.name
          ? (e.name !== j.name && f.renameFolder(e, j.name), y({ id: '', name: '' }))
          : y({ id: '', name: '' });
      }),
    S = (e) => {
      var t;
      e.localId !== (null === (t = f.currentSelectMacro) || void 0 === t ? void 0 : t.localId)
        ? (f.setCurrentRecMacroArr(e.value ? e.value.macro.slice() : []),
          f.setMacroType(e.value ? e.value.macroType : 'on_off'),
          f.setRepeatTimes(e.value ? e.value.repeatCount : 1),
          f.setCurrentSelectMacro(e),
          'recording' === f.recodingState && f.stoptHook())
        : 'recording' === f.recodingState && f.stoptHook();
    },
    g = (e) => {
      m(e);
    },
    [j, y] = o.useState({ id: '', name: '' });
  o.useEffect(
    () =>
      u.autorun(() => {
        f.refreshMacroList();
      }),
    [],
  );
  const x = (e) => {
      var t;
      ((null === (t = f.currentSelectMacro) || void 0 === t ? void 0 : t.localId) === e.localId &&
        f.setCurrentRecMacroArr([]),
        f.deleteMacro(e));
    },
    _ = () => {
      (f.setMacroType('touch_repeat'),
        f.setCurrentRecMacroArr([]),
        f.setRepeatTimes(1),
        f.newMacro(f.macroList));
    };
  return i.useObserver(() => {
    var a;
    return o.default.createElement(
      o.Fragment,
      null,
      o.default.createElement(
        n.dj.ContextMenuView,
        {
          w: 301,
          h: 480,
          y: 25,
          id: '-1',
          onNewMacro: () => _(),
          onNewFolder: () => {
            f.newFolder(f.macroList);
          },
        },
        o.default.createElement(
          n.dj.View,
          { form: 'Border' },
          o.default.createElement(
            n.dj.FlexView,
            { flexDirection: 'column', justifyContent: 'space-between' },
            o.default.createElement(
              n.dj.View,
              { relative: !0, h: 32, form: 'MacroBackground' },
              !s.blockCloud &&
                o.default.createElement(n.dj.Button, {
                  w: 70,
                  h: 18,
                  y: 7,
                  text: d.res.string.热门,
                  mode: 'Bluer',
                  clickHandle: () => {
                    (v.setPageIndex(3),
                      w.setCurrentShareListType('macro'),
                      w.setShareListPage('macro', 'count'));
                  },
                }),
              o.default.createElement(
                n.dj.FlexView,
                { w: 82, h: 14, x: 191, y: 9, justifyContent: 'space-between' },
                o.default.createElement(n.dj.Button, {
                  relative: !0,
                  w: 14,
                  h: 14,
                  img: { src: d.res.img.new_macro },
                  clickHandle: () => _(),
                }),
                o.default.createElement(n.dj.Button, {
                  relative: !0,
                  w: 14,
                  h: 14,
                  img: { src: d.res.img.new_folder },
                  clickHandle: () => {
                    f.newFolder(f.macroList);
                  },
                }),
                o.default.createElement(n.dj.Button, {
                  relative: !0,
                  w: 14,
                  h: 14,
                  img: { src: d.res.img.folder_close },
                  clickHandle: () => {
                    t({});
                  },
                }),
              ),
            ),
            o.default.createElement(n.dj.TreeView, {
              relative: !0,
              options: f.macroList,
              selectedOptions: e,
              onChange: t,
              clickId: (null === (a = f.currentSelectMacro) || void 0 === a ? void 0 : a.localId)
                ? f.currentSelectMacro.localId
                : 0,
              contextMenu: {
                onRenameMacro: p,
                onRenameFolder: M,
                onNewMacro: f.newMacro,
                onNewFolder: f.newFolder,
                onDelete: x,
                onDeleteUnderFolder: f.deleteFolder,
                updateOutsideData: S,
                onShareMacro: g,
                onSetRenameState: (e, t) => y({ id: e, name: t }),
                renameState: j,
              },
            }),
          ),
        ),
      ),
      void 0 !== r &&
        o.default.createElement(
          o.Fragment,
          null,
          o.default.createElement(n.dj.View, { w: 1200, h: 730, x: -264, y: -101, form: '背景页' }, ' '),
          o.default.createElement(
            n.dj.View,
            { w: 1200, h: 730, x: -264, y: -101 },
            o.default.createElement(c.Share, { type: 'Macro', macro: r, close: () => m(void 0) }),
          ),
        ),
    );
  });
};
