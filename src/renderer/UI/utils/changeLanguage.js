/* Recovered from Tezarre Driver 1.1.31 - renderer module wOul */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, n) {
          (void 0 === n && (n = r),
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, n) {
          (void 0 === n && (n = r), (e[n] = t[r]));
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
      var n = {};
      if (null != r) for (var o in r) 'default' !== o && Object.hasOwnProperty.call(r, o) && e(n, r, o);
      return (t(n, r), n);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.changeLanguage = exports.Obj2Str = void 0));
const n = r(require('path')),
  o = r(require('fs'));
((exports.Obj2Str = (e) => {
  const t = Object.keys(e),
    r = Object.values(e);
  let n = '';
  for (let o = 0; o < t.length; o++) {
    let e = '',
      i = '';
    (void 0 !== r[o] &&
      ((e = '    "' + t[o] + '": '), (i = 'string' == typeof r[o] ? '"' + r[o] + '",\n' : r[o] + ',\n')),
      (n += e + i));
  }
  return '{\n' + (n = n.substring(0, n.length - 2)) + '\n}';
}),
  (exports.changeLanguage = (e, t) => {
    const r = n.join(require('path').resolve(__dirname, '../../../../dist'), '..', 'CurrentCompany.json'),
      i = require(r),
      u = n.join(
        require('path').resolve(__dirname, '../../../../dist'),
        '..',
        'company',
        'company_' + i.currentCompany,
        'CONFIG.json',
      );
    let c = require(u);
    ((c.blockCloud = e), t && (c.click = t));
    const s = exports.Obj2Str(c);
    o.writeFile(u, s, (e) => {
      e && console.error(e);
    });
  }));
