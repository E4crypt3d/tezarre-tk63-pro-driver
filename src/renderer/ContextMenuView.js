/* Recovered from Tezarre Driver 1.1.31 - renderer module AoV7 */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ContextMenuView = void 0));
const t = e(require('react')),
  n = e(require('@emotion/styled')),
  o = require('react-contextmenu'),
  r = require('./res.js'),
  i = n.default.div`
  .react-contextmenu {
    position: relative
    background-color: #282828;
    background-clip: padding-box;
    border-radius: 0.25rem;
    color: #373a3c;
    font-size: 16px;
    margin: 2px 0 0;
    min-width: 160px;
    outline: none;
    opacity: 0;
    padding: 5px 0;
    pointer-events: none;
    text-align: left;
    transition: opacity 250ms ease !important;
    outline: none;
  }

  .react-contextmenu.react-contextmenu--visible {
    opacity: 1;
    pointer-events: auto;
    z-index: 9999;
    outline: none;
  }

  .react-contextmenu-item {
    height: 28;
    background: 0 0;
    border: 0;
    color: #ffffff;
    cursor: pointer;
    font-weight: 400;
    line-height: 1.5;
    padding: 3px 20px;
    text-align: inherit;
    white-space: nowrap;
    background-color: #282828;
    outline: none;
  }

  .react-contextmenu-item.react-contextmenu-item--active,
  .react-contextmenu-item.react-contextmenu-item--selected {
    color: #fff;
    background-color: #3a3a3a;
    text-decoration: none;
    outline: none;
  }

  .react-contextmenu-item.react-contextmenu-item--disabled,
  .react-contextmenu-item.react-contextmenu-item--disabled:hover {
    background-color: transparent;
    color: #878a8c;
    outline: none;
  }

  .react-contextmenu-item--divider {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    cursor: inherit;
    margin-bottom: 3px;
    padding: 2px 0;
  }
  .react-contextmenu-item--divider:hover {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.15);
  }

  .react-contextmenu-item.react-contextmenu-submenu {
    padding: 0;
    outline: none;
  }

  .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item {
    outline: none;
  }

  .react-contextmenu-item.react-contextmenu-submenu
    > .react-contextmenu-item:after {
    content: '▶';
    display: inline-block;
    position: absolute;
    right: 7px;
  }

  .example-multiple-targets::after {
    content: attr(data-count);
    display: block;
  }
`;
exports.ContextMenuView = (e) =>
  t.default.createElement(
    i,
    null,
    t.default.createElement(o.ContextMenuTrigger, { id: e.id }, e.children),
    t.default.createElement(
      o.ContextMenu,
      { id: e.id },
      e.onRename && t.default.createElement(o.MenuItem, { onClick: e.onRename }, r.res.string.重命名),
      t.default.createElement(o.MenuItem, { onClick: e.onNewMacro }, r.res.string.新建宏),
      t.default.createElement(o.MenuItem, { onClick: e.onNewFolder }, r.res.string.新建文件夹),
      e.onRename && t.default.createElement(o.MenuItem, { onClick: e.onDelete }, r.res.string.删除),
    ),
  );
