/* Recovered from Tezarre Driver 1.1.31 - renderer module yTwy */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.TreeView = void 0));
const t = e(require('react')),
  o = e(require('@emotion/styled')),
  n = require('./ContextMenuView.js'),
  a = require('./Text.js'),
  r = require('./CheckBox.js'),
  c = require('./TextInput.js'),
  l = require('./Button.js'),
  i = require('./res.js'),
  d = require('./Img.js'),
  u = require('./appConfig.js'),
  s = require('./mobxStore/store.js'),
  x = o.default.ul({ listStyleType: 'none' }),
  p = o.default.li((e) => ({
    '&:hover': { background: 'linear-gradient(90deg,#251f1f 0%, #121212 100%)' },
    padding: '5px 0',
    paddingLeft: '1rem',
    position: 'relative',
    background: e.isHighLight ? 'linear-gradient(90deg,#251f1f 20%, #121212 100%)' : 'transparent',
  })),
  m = o.default.div({ position: 'relative' }),
  h = o.default.span`
  userselect: none;
  color: #ffffff;
  fontsize: 13;

  &.caret::before {
    content: '';
    color: #5a5a5a;
    display: inline-block;
    margin: 0 15px 0 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent #5a5a5a;
  }

  &.caret-down::before {
    content: '';
    display: inline-block;
    margin: 0 15px 0 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: #23f9e2 transparent transparent transparent;
  }
`,
  g = (e) => {
    const { folder: o, onChange: n, isSelected: r } = e;
    return t.default.createElement(
      m,
      {
        onClick: () => {
          n();
        },
      },
      t.default.createElement(
        'div',
        { style: { width: 16, height: 16, position: 'absolute', left: 24, top: 4 } },
        t.default.createElement(d.Img, { imgBg: i.res.img.edit_folder }),
      ),
      t.default.createElement(
        h,
        { className: void 0 !== r ? 'caret-down' : 'caret' },
        t.default.createElement(
          'div',
          { style: { position: 'absolute', left: 50, top: 3 } },
          t.default.createElement(a.Text, { text: o.name, type: '树形文字' }),
        ),
      ),
    );
  },
  f = (e) => {
    const o = t.default.createElement(g, {
        folder: e.options,
        onChange: () => {
          'recording' !== s.mobxStore.macroStore.recodingState
            ? ((t) => {
                let o = Object.assign({}, e.selectedOptions);
                (void 0 !== e.selectedOptions[t] ? delete o[t] : (o[t] = {}), e.onChange(o));
              })(e.options.id.toString())
            : s.mobxStore.toastStore.setErr(i.res.text.请先停止录制());
        },
        isSelected: e.selectedOptions[e.options.id],
      }),
      d =
        e.contextMenu && e.contextMenu.renameState.id === e.options.id
          ? t.default.createElement(c.TextInput, {
              type: '重命名',
              value: e.contextMenu && e.contextMenu.renameState.name,
              onChange: (t) => e.contextMenu && e.contextMenu.onSetRenameState(e.options.id, t.target.value),
              autoFocus: !!e.contextMenu,
              usePlaceholder: i.res.useString.请输入名称,
              inputFinished: () => e.contextMenu && e.contextMenu.onRenameFolder(e.options),
            })
          : t.default.createElement(
              n.ContextMenuView,
              {
                id: e.options.id,
                onRename: () => e.contextMenu && e.contextMenu.onSetRenameState(e.options.id, e.options.name),
                onNewMacro: () => e.contextMenu && e.contextMenu.onNewMacro(e.options),
                onNewFolder: () => e.contextMenu && e.contextMenu.onNewFolder(e.options),
                onDelete: () => e.contextMenu && e.contextMenu.onDeleteUnderFolder(e.options),
              },
              o,
            ),
      m = (o) =>
        t.default.createElement(
          'div',
          { style: { position: 'absolute', right: 50, top: 5 } },
          t.default.createElement(l.Button, {
            img: { size: { w: 14, h: 14 }, src: i.res.img.bottom_share },
            clickHandle: () => e.contextMenu && e.contextMenu.onShareMacro(o),
          }),
        ),
      h = (o) =>
        t.default.createElement(
          'div',
          { style: { position: 'absolute', right: 11, top: 5 } },
          t.default.createElement(l.Button, {
            img: { size: { w: 14, h: 14 }, src: i.res.img.bottom_delete },
            clickHandle: () => e.contextMenu && e.contextMenu.onDelete(o),
          }),
        );
    return t.default.createElement(
      x,
      null,
      'root' !== e.options.name && t.default.createElement(p, { isHighLight: !1 }, e.contextMenu ? d : o),
      (void 0 !== e.selectedOptions[e.options.id] || 'root' === e.options.name) &&
        e.options.macros.map((o, l) =>
          t.default.createElement(
            p,
            {
              key: o.localId,
              onClick: (t) => {
                'recording' !== s.mobxStore.macroStore.recodingState
                  ? (e.contextMenu && e.contextMenu.updateOutsideData(o), t.stopPropagation())
                  : s.mobxStore.toastStore.setErr(i.res.text.请先停止录制());
              },
              isHighLight: o.localId === e.clickId,
            },
            e.contextMenu
              ? ((o, r) => {
                  const l = o.macros[r];
                  return e.contextMenu &&
                    e.contextMenu.renameState.id === (l.localId ? l.localId.toString() : '0')
                    ? t.default.createElement(c.TextInput, {
                        type: '重命名',
                        autoFocus: !!e.contextMenu,
                        value: e.contextMenu && e.contextMenu.renameState.name,
                        onChange: (t) =>
                          e.contextMenu &&
                          e.contextMenu.onSetRenameState(
                            l.localId ? l.localId.toString() : '-1',
                            t.target.value,
                          ),
                        usePlaceholder: i.res.useString.请输入名称,
                        inputFinished: () => e.contextMenu && e.contextMenu.onRenameMacro(l),
                      })
                    : t.default.createElement(
                        n.ContextMenuView,
                        {
                          id: l.localId ? l.localId.toString() : '-1',
                          onRename: () =>
                            e.contextMenu &&
                            e.contextMenu.onSetRenameState(
                              l.localId ? l.localId.toString() : '-1',
                              l.name ? l.name : '',
                            ),
                          onNewMacro: () => e.contextMenu && e.contextMenu.onNewMacro(o),
                          onNewFolder: () => e.contextMenu && e.contextMenu.onNewFolder(e.options),
                          onDelete: () => e.contextMenu && e.contextMenu.onDelete(l),
                        },
                        t.default.createElement(a.Text, { text: l.name, type: '树形文字' }),
                        !u.blockCloud && m(l),
                        h(l),
                      );
                })(e.options, l)
              : ((o) =>
                  t.default.createElement(
                    'div',
                    { style: { width: '100%', height: 16 } },
                    t.default.createElement(r.CheckBox, {
                      type: 'Normal',
                      text: o.name,
                      checkState:
                        !!e.checkBoxState &&
                        !!e.checkBoxState.checkState[o.localId ? o.localId : 0] &&
                        e.checkBoxState.checkState[o.localId ? o.localId : 0],
                      clickHandle: () =>
                        e.checkBoxState && e.checkBoxState.changeChecked(o.localId ? o.localId : -1, o),
                    }),
                  ))(o),
          ),
        ),
      (void 0 !== e.selectedOptions[e.options.id] || 'root' === e.options.name) &&
        e.options.folders.map((o) =>
          t.default.createElement(
            'li',
            { key: o.id },
            t.default.createElement(f, {
              options: o,
              selectedOptions: e.selectedOptions,
              onChange: e.onChange,
              clickId: e.clickId,
              contextMenu: e.contextMenu,
              checkBoxState: e.checkBoxState,
            }),
          ),
        ),
    );
  },
  M = o.default.div({
    width: '100%',
    height: '100%',
    overflow: 'hidden scroll',
    '&::-webkit-scrollbar': { width: '6px' },
    '&::-webkit-scrollbar-thumb': { background: 'gray', borderRadius: '5px' },
  });
exports.TreeView = (e) =>
  t.default.createElement(
    M,
    null,
    t.default.createElement(f, {
      options: e.options,
      selectedOptions: e.selectedOptions,
      onChange: e.onChange,
      clickId: e.clickId,
      contextMenu: e.contextMenu,
      checkBoxState: e.checkBoxState,
    }),
  );
