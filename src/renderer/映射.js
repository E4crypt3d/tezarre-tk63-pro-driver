/* Recovered from Tezarre Driver 1.1.31 - renderer module nsBL */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.getKeyboradList =
    exports.numToByte4 =
    exports.arrTo16 =
    exports.specialFunTablectionArr =
    exports.specialFunTablectionMap =
    exports.HidMapping =
      void 0));
const e = [
  { value: '`', scanCode: 41, hidCode: 53, keyCode: 192 },
  { value: '1', scanCode: 2, hidCode: 30, keyCode: 49 },
  { value: '2', scanCode: 3, hidCode: 31, keyCode: 50 },
  { value: '3', scanCode: 4, hidCode: 32, keyCode: 51 },
  { value: '4', scanCode: 5, hidCode: 33, keyCode: 52 },
  { value: '5', scanCode: 6, hidCode: 34, keyCode: 53 },
  { value: '6', scanCode: 7, hidCode: 35, keyCode: 54 },
  { value: '7', scanCode: 8, hidCode: 36, keyCode: 55 },
  { value: '8', scanCode: 9, hidCode: 37, keyCode: 56 },
  { value: '9', scanCode: 10, hidCode: 38, keyCode: 57 },
  { value: '0', scanCode: 11, hidCode: 39, keyCode: 48 },
  { value: '-', scanCode: 12, hidCode: 45, keyCode: 189 },
  { value: '=', scanCode: 13, hidCode: 46, keyCode: 187 },
  { value: '__¥', scanCode: 125, hidCode: 137, keyCode: null },
  { value: 'BackSpace', scanCode: 14, hidCode: 42, keyCode: 8 },
  { value: 'Tab', scanCode: 15, hidCode: 43, keyCode: 9 },
  { value: 'Q', scanCode: 16, hidCode: 20, keyCode: 81 },
  { value: 'W', scanCode: 17, hidCode: 26, keyCode: 87 },
  { value: 'E', scanCode: 18, hidCode: 8, keyCode: 69 },
  { value: 'R', scanCode: 19, hidCode: 21, keyCode: 82 },
  { value: 'T', scanCode: 20, hidCode: 23, keyCode: 84 },
  { value: 'Y', scanCode: 21, hidCode: 28, keyCode: 89 },
  { value: 'U', scanCode: 22, hidCode: 24, keyCode: 85 },
  { value: 'I', scanCode: 23, hidCode: 12, keyCode: 73 },
  { value: 'O', scanCode: 24, hidCode: 18, keyCode: 79 },
  { value: 'P', scanCode: 25, hidCode: 19, keyCode: 80 },
  { value: '[', scanCode: 26, hidCode: 47, keyCode: 219 },
  { value: ']', scanCode: 27, hidCode: 48, keyCode: 221 },
  { value: '\\', scanCode: 43, hidCode: 49, keyCode: 220 },
  { value: 'Caps Lock', scanCode: 58, hidCode: 57, keyCode: 20 },
  { value: 'A', scanCode: 30, hidCode: 4, keyCode: 65 },
  { value: 'S', scanCode: 31, hidCode: 22, keyCode: 83 },
  { value: 'D', scanCode: 32, hidCode: 7, keyCode: 68 },
  { value: 'F', scanCode: 33, hidCode: 9, keyCode: 70 },
  { value: 'G', scanCode: 34, hidCode: 10, keyCode: 71 },
  { value: 'H', scanCode: 35, hidCode: 11, keyCode: 72 },
  { value: 'J', scanCode: 36, hidCode: 13, keyCode: 74 },
  { value: 'K', scanCode: 37, hidCode: 14, keyCode: 75 },
  { value: 'L', scanCode: 38, hidCode: 15, keyCode: 76 },
  { value: ';', scanCode: 39, hidCode: 51, keyCode: 186 },
  { value: "'", scanCode: 40, hidCode: 52, keyCode: 222 },
  { value: '__]', scanCode: 43, hidCode: 50, keyCode: null },
  { value: 'Enter', scanCode: 28, hidCode: 40, keyCode: 13 },
  { value: 'Shift', scanCode: 42, hidCode: 225, keyCode: 16 },
  { value: '_\\', scanCode: 86, hidCode: 100, keyCode: null },
  { value: 'Z', scanCode: 44, hidCode: 29, keyCode: 90 },
  { value: 'X', scanCode: 45, hidCode: 27, keyCode: 88 },
  { value: 'C', scanCode: 46, hidCode: 6, keyCode: 67 },
  { value: 'V', scanCode: 47, hidCode: 25, keyCode: 86 },
  { value: 'B', scanCode: 48, hidCode: 5, keyCode: 66 },
  { value: 'N', scanCode: 49, hidCode: 17, keyCode: 78 },
  { value: 'M', scanCode: 50, hidCode: 16, keyCode: 77 },
  { value: ',', scanCode: 51, hidCode: 54, keyCode: 188 },
  { value: '.', scanCode: 52, hidCode: 55, keyCode: 190 },
  { value: '/', scanCode: 53, hidCode: 56, keyCode: 191 },
  { value: '__\\', scanCode: 115, hidCode: 135, keyCode: null },
  { value: 'r_Shift', scanCode: 54, hidCode: 229, keyCode: 16 },
  { value: 'Ctrl', scanCode: 29, hidCode: 224, keyCode: 17 },
  { value: 'Alt', scanCode: 56, hidCode: 226, keyCode: 18 },
  { value: '(space)', scanCode: 57, hidCode: 44, keyCode: 32 },
  { value: 'r_Alt', scanCode: 3640, hidCode: 230, keyCode: 18 },
  { value: 'r_Ctrl', scanCode: 3613, hidCode: 228, keyCode: 17 },
  { value: 'Insert', scanCode: 61010, hidCode: 73, keyCode: 45 },
  { value: 'Delete', scanCode: 61011, hidCode: 76, keyCode: 46 },
  { value: '←', scanCode: 61003, hidCode: 80, keyCode: 37 },
  { value: 'Home', scanCode: 60999, hidCode: 74, keyCode: 36 },
  { value: 'End', scanCode: 61007, hidCode: 77, keyCode: 35 },
  { value: '↑', scanCode: 61e3, hidCode: 82, keyCode: 38 },
  { value: '↓', scanCode: 61008, hidCode: 81, keyCode: 40 },
  { value: 'Page\nUp', scanCode: 61001, hidCode: 75, keyCode: 33 },
  { value: 'Page\nDown', scanCode: 61009, hidCode: 78, keyCode: 34 },
  { value: '→', scanCode: 61005, hidCode: 79, keyCode: 39 },
  { value: 'Num\nLock', scanCode: 69, hidCode: 83, keyCode: 144 },
  { value: 'num_7', scanCode: 71, hidCode: 95, keyCode: 103 },
  { value: 'num_Home', scanCode: 3655, hidCode: 74, keyCode: null },
  { value: 'num_4', scanCode: 75, hidCode: 92, keyCode: 100 },
  { value: 'num_←', scanCode: 57419, hidCode: 80, keyCode: 37 },
  { value: 'num_1', scanCode: 79, hidCode: 89, keyCode: 97 },
  { value: 'num_End', scanCode: 3663, hidCode: 77, keyCode: 0 },
  { value: 'num_/', scanCode: 3637, hidCode: 84, keyCode: 111 },
  { value: 'num_8', scanCode: 72, hidCode: 96, keyCode: 104 },
  { value: 'num_↑', scanCode: 57416, hidCode: 82, keyCode: 38 },
  { value: 'num_5', scanCode: 76, hidCode: 93, keyCode: 101 },
  { value: 'num_2', scanCode: 80, hidCode: 90, keyCode: 98 },
  { value: 'num_↓', scanCode: 57424, hidCode: 81, keyCode: 40 },
  { value: 'num_0', scanCode: 82, hidCode: 98, keyCode: 96 },
  { value: 'num_*', scanCode: 55, hidCode: 85, keyCode: 106 },
  { value: 'num_9', scanCode: 73, hidCode: 97, keyCode: 105 },
  { value: 'num_Pgup', scanCode: 3657, hidCode: 75, keyCode: 33 },
  { value: 'num_6', scanCode: 77, hidCode: 94, keyCode: 102 },
  { value: 'num_→', scanCode: 57421, hidCode: 79, keyCode: 39 },
  { value: 'num_3', scanCode: 81, hidCode: 91, keyCode: 99 },
  { value: 'num_Pgdn', scanCode: 3665, hidCode: 78, keyCode: 34 },
  { value: 'num_.', scanCode: 83, hidCode: 99, keyCode: 110 },
  { value: 'num_-', scanCode: 74, hidCode: 86, keyCode: 109 },
  { value: 'num_+', scanCode: 78, hidCode: 87, keyCode: 107 },
  { value: 'num_Enter', scanCode: 3612, hidCode: 88, keyCode: 13 },
  { value: 'Esc', scanCode: 1, hidCode: 41, keyCode: 27 },
  { value: 'F1', scanCode: 59, hidCode: 58, keyCode: 112 },
  { value: 'F2', scanCode: 60, hidCode: 59, keyCode: 113 },
  { value: 'F3', scanCode: 61, hidCode: 60, keyCode: 114 },
  { value: 'F4', scanCode: 62, hidCode: 61, keyCode: 115 },
  { value: 'F5', scanCode: 63, hidCode: 62, keyCode: 116 },
  { value: 'F6', scanCode: 64, hidCode: 63, keyCode: 117 },
  { value: 'F7', scanCode: 65, hidCode: 64, keyCode: 118 },
  { value: 'F8', scanCode: 66, hidCode: 65, keyCode: 119 },
  { value: 'F9', scanCode: 67, hidCode: 66, keyCode: 120 },
  { value: 'F10', scanCode: 68, hidCode: 67, keyCode: 121 },
  { value: 'F11', scanCode: 87, hidCode: 68, keyCode: 122 },
  { value: 'F12', scanCode: 88, hidCode: 69, keyCode: 123 },
  { value: 'Print\nScreen', scanCode: 3639, hidCode: 70, keyCode: 44 },
  { value: 'Scroll\nLock', scanCode: 70, hidCode: 71, keyCode: 145 },
  { value: 'Pause', scanCode: 3653, hidCode: 72, keyCode: 19 },
  { value: 'Win', scanCode: 3675, hidCode: 227, keyCode: 91 },
  { value: 'r_Win', scanCode: 3676, hidCode: 231, keyCode: 92 },
  { value: '(Application)', scanCode: null, hidCode: 101, keyCode: 93 },
  { value: '', scanCode: 123, hidCode: 139, keyCode: null },
  { value: '', scanCode: 121, hidCode: 138, keyCode: null },
  { value: '', scanCode: 112, hidCode: 136, keyCode: null },
  { value: 'fn', scanCode: 0, hidCode: 167837696, keyCode: null },
  { value: 'Calculator', scanCode: null, hidCode: 50369025, keyCode: null },
  { value: 'U-', scanCode: null, hidCode: 50391552, keyCode: null },
  { value: 'U+', scanCode: null, hidCode: 50391296, keyCode: null },
  { value: 'Mute', scanCode: null, hidCode: 50389504, keyCode: null },
  { value: 'Play', scanCode: null, hidCode: 50384128, keyCode: null },
  { value: 'Prev', scanCode: null, hidCode: 50378240, keyCode: null },
  { value: 'Next', scanCode: null, hidCode: 50377984, keyCode: null },
  { value: '{', scanCode: null, hidCode: 14757632, keyCode: null },
  { value: '}', scanCode: null, hidCode: 14757888, keyCode: null },
  { value: '', scanCode: -1, hidCode: -1, keyCode: null },
];
var d;
!(function (d) {
  ((d.keyCodeMapHIDCode = (d) => {
    if (void 0 === d) return;
    const o = e.find((e) => e.keyCode === d);
    return void 0 !== o ? o.hidCode : void 0;
  }),
    (d.scanCodeMapHIDCode = (d) => {
      if (void 0 === d) return;
      const o = e.find((e) => e.scanCode === d);
      return void 0 !== o ? o.hidCode : void 0;
    }),
    (d.hidCodeMapKeyName = (d) => {
      const o = e.find((e) => e.hidCode === d);
      if (void 0 !== o) return o.value;
    }));
})((d = exports.HidMapping || (exports.HidMapping = {})));
const o = {
    上一曲: [3, 0, 182, 0],
    下一曲: [3, 0, 181, 0],
    停止: [3, 0, 183, 0],
    '播放/暂停': [3, 0, 205, 0],
    播放器: [3, 0, 131, 1],
    火力: [],
    狙击键: [],
    静音: [3, 0, 226, 0],
    音量减: [3, 0, 234, 0],
    音量大: [3, 0, 233, 0],
    计算器: [3, 0, 146, 1],
    fn: [10, 1, 0, 0],
    邮件: [3, 0, 138, 1],
    我的电脑: [3, 0, 148, 1],
    搜索: [3, 0, 33, 2],
    主页: [3, 0, 35, 2],
    亮度减: [3, 0, 112, 0],
    亮度加: [3, 0, 111, 0],
    呼出siri: [18, 0, 227, 44],
  },
  C = {
    '(': [0, 225, 38, 0],
    ')': [0, 225, 39, 0],
    切换输入法: [0, 224, 44, 0],
    缩小: [0, 227, 38, 0],
    放大: [0, 227, 39, 0],
    返回: [3, 0, 36, 2],
    fn锁屏: [10, 13, 0, 0],
    锁屏: [0, 0, 227, 15],
    r_FN: [10, 1, 1, 0],
    '音量<->键盘亮度': [10, 15, 0, 0],
  };
((exports.specialFunTablectionMap = Object.assign(o, C)),
  (exports.specialFunTablectionArr = Object.values(exports.specialFunTablectionMap)),
  (exports.arrTo16 = (e) => {
    let d = 0;
    return (4 === e.length && (d = (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3]), d);
  }),
  (exports.numToByte4 = (e) =>
    e > 4294967295
      ? [0, 0, 0, 0]
      : [(4294967295 & e) >> 24, (16777215 & e) >> 16, (65535 & e) >> 8, 255 & e]),
  (exports.getKeyboradList = () => {
    const d = new Array(),
      o = exports.specialFunTablectionArr.map((e) => exports.arrTo16(e));
    for (var C = 0; C < e.length; C++)
      -1 === o.findIndex((d) => d === e[C].hidCode) &&
        '' !== e[C].value &&
        137 !== e[C].hidCode &&
        50 !== e[C].hidCode &&
        135 !== e[C].hidCode &&
        100 !== e[C].hidCode &&
        d.push(e[C]);
    return d;
  }));
