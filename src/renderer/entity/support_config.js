/* Recovered from Tezarre Driver 1.1.31 - renderer module ePYB */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.config = void 0));
const e = require('./../DB.js'),
  p = require('./../appConfig.js'),
  o = require('./../../../supportDev.js');
((exports.config = o.supportDev.map((p) => new e.DeviceType(p))),
  exports.config.push(
    new e.DeviceType({
      id: 999,
      vid: 3141,
      pid: 28736,
      usage: 1,
      usagePage: 12,
      name: 'help',
      displayName: 'help',
      support_onboard: 2,
      type: 'keyboard',
      group: 'rongyuan_k_rgb',
      company: p.kCompany,
    }),
  ),
  exports.config.push(
    new e.DeviceType({
      id: 998,
      vid: 1121,
      pid: 16385,
      usage: 6,
      usagePage: 1,
      name: 'helpYZW',
      displayName: 'help',
      support_onboard: 2,
      type: 'keyboard',
      group: 'rongyuan_k_rgb',
      company: p.kCompany,
    }),
  ),
  exports.config.push(
    new e.DeviceType({
      id: 997,
      vid: 1121,
      pid: 16385,
      usage: 1,
      usagePage: 65281,
      name: 'helpYZW',
      displayName: 'help',
      support_onboard: 2,
      type: 'keyboard',
      group: 'rongyuan_k_rgb',
      company: p.kCompany,
    }),
  ));
