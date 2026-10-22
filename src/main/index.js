/* Recovered from Tezarre Driver 1.1.31 - main module ZCfc */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, a) {
          (void 0 === a && (a = n),
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }));
        }
      : function (e, t, n, a) {
          (void 0 === a && (a = n), (e[a] = t[n]));
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
  n =
    (this && this.__importStar) ||
    function (n) {
      if (n && n.__esModule) return n;
      var a = {};
      if (null != n) for (var i in n) 'default' !== i && Object.hasOwnProperty.call(n, i) && e(a, n, i);
      return (t(a, n), a);
    };
Object.defineProperty(exports, '__esModule', { value: !0 });
const a = require('electron'),
  i = n(require('path')),
  r = require('./appConfig.js'),
  o = require('./res.js'),
  s = require('./screenConfig.js'),
  l = require('./UI/utils/changeLanguage.js');
if ('1' === process.env.TEZARRE_PORTABLE) {
  a.app.setPath('userData', i.join(i.dirname(a.app.getPath('exe')), 'UserData'));
}
let c = null;
const d = () => {
    const e = r.icon_p;
    let t = a.nativeImage.createFromPath(
      i.join(require('path').resolve(__dirname, '../../dist'), i.basename(e)),
    );
    const n = a.screen.getPrimaryDisplay().size,
      o = Math.round(0.8 * n.height) / s.baseH;
    (s.setRatio(o > 1 ? 1 : o),
      (c = new a.BrowserWindow({
        width: Math.round(s.baseW * s.ratio),
        height: Math.round(s.baseH * s.ratio),
        backgroundColor: '#121212',
        icon: t,
        frame: !1,
        resizable: !1,
        titleBarStyle: 'hidden',
        show: !1,
        webPreferences: { nodeIntegration: !0 },
      })),
      'darwin' === process.platform && c.setWindowButtonVisibility(!1),
      a.app.isPackaged || c.webContents.openDevTools(),
      c.loadFile(i.join(i.dirname(require('path').resolve(__dirname, '../../dist')), 'index.html')),
      c.on('closed', () => (c = null)),
      c.on('ready-to-show', function () {
        c && c.show();
      }),
      c.webContents.on('crashed', (e, t) => {
        setImmediate(() => {
          c && c.reload();
        });
      }));
  },
  u = a.app.requestSingleInstanceLock();
let p;
(u
  ? a.app.on('second-instance', (e, t, n) => {
      c && c.show();
    })
  : a.app.quit(),
  a.app.commandLine.appendSwitch('disable-background-timer-throttling'),
  a.app.on('ready', () => {
    if (!r.ClickKey) {
      const e = a.app.getLocale().toLowerCase();
      l.changeLanguage(-1 === e.indexOf('zh'));
    }
    (h(), d());
    const { Menu: e } = require('electron');
    (a.app.isPackaged && e.setApplicationMenu(null), process.platform);
  }),
  a.app.on('window-all-closed', () => {
    'darwin' !== process.platform && a.app.quit();
  }),
  a.app.on('activate', () => {
    null === c && d();
  }));
const h = () => {
  if (void 0 === p) {
    const e = r.APP_p;
    let t = a.nativeImage.createFromPath(e);
    ((t = t.resize({ width: 18, height: 18 })),
      (p = new a.Tray(t)).addListener('click', (e) => {
        c && c.show();
      }),
      p.setContextMenu(
        a.Menu.buildFromTemplate([
          {
            label: o.res.text.显示(),
            click: () => {
              c && c.show();
            },
          },
          {
            label: o.res.text.隐藏(),
            click: () => {
              c && c.hide();
            },
          },
          { type: 'separator' },
          { label: o.res.text.退出(), click: () => a.app.exit() },
        ]),
      ));
  }
};
