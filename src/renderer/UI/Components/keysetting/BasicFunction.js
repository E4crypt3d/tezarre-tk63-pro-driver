/* Recovered from Tezarre Driver 1.1.31 - renderer module fer0 */

'use strict';
var e =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, r, s) {
          (void 0 === s && (s = r),
            Object.defineProperty(e, s, {
              enumerable: !0,
              get: function () {
                return t[r];
              },
            }));
        }
      : function (e, t, r, s) {
          (void 0 === s && (s = r), (e[s] = t[r]));
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
      var s = {};
      if (null != r) for (var i in r) 'default' !== i && Object.hasOwnProperty.call(r, i) && e(s, r, i);
      return (t(s, r), s);
    };
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.BasicFunction = exports.basicFunName = void 0));
const s = r(require('react')),
  i = require('./../../../dj.js'),
  n = require('./../../../res.js');
exports.basicFunName = [
  '播放器',
  '播放/暂停',
  '停止',
  '上一曲',
  '下一曲',
  '音量减',
  '音量大',
  '静音',
  '计算器',
  '邮件',
  '我的电脑',
  '搜索',
  '主页',
  '亮度加',
  '亮度减',
];
const a = {
  播放器: n.res.string.播放器,
  '播放/暂停': n.res.string.播放暂停,
  停止: n.res.string.停止,
  上一曲: n.res.string.上一曲,
  下一曲: n.res.string.下一曲,
  音量减: n.res.string.音量减,
  音量大: n.res.string.音量大,
  静音: n.res.string.静音,
  计算器: n.res.string.计算器,
  邮件: n.res.string.电子邮件,
  我的电脑: n.res.string.我的电脑,
  搜索: n.res.string.搜索,
  主页: n.res.string.主页,
  亮度加: n.res.string.亮度加,
  亮度减: n.res.string.亮度减,
};
exports.BasicFunction = (e) => {
  let t;
  return (
    void 0 !== e.oldValue && (t = a[e.oldValue.key]),
    s.default.createElement(
      s.Fragment,
      null,
      s.default.createElement(i.dj.Text, { text: t, type: '已修改的按键值', x: 57, y: 7, h: 36 }),
      s.default.createElement(i.dj.List, {
        w: 342,
        h: 145,
        x: 54,
        y: 48,
        itemCount: exports.basicFunName.length,
        scrollToIndex: 0,
        itemSize: () => 30,
        renderItem: (t) =>
          s.default.createElement(i.dj.CheckBox2, {
            relative: !0,
            key: t,
            h: 32,
            type: 'Normal',
            text: a[exports.basicFunName[t]],
            checkState: e.basic === exports.basicFunName[t] && !e.forBidden,
            clickHandle: () => {
              e.basic !== exports.basicFunName[t] ? e.setBasic(exports.basicFunName[t]) : e.setBasic(void 0);
            },
          }),
      }),
    )
  );
};
