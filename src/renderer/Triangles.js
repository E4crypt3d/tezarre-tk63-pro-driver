/* Recovered from Tezarre Driver 1.1.31 - renderer module EmrY */

'use strict';
var e =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Triangles = void 0));
const t = e(require('react'));
exports.Triangles = (e) =>
  'down' === e.direction
    ? t.default.createElement('div', {
        style: {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '0 10px 18px 10px',
          borderColor: 'transparent transparent #252525 transparent',
        },
      })
    : t.default.createElement('div', {
        style: {
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '18px 10px  0 10px ',
          borderColor: '#252525 transparent transparent transparent',
        },
      });
