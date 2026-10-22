/* Recovered from Tezarre Driver 1.1.31 - renderer module wtAr */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.findSonixDev = void 0));
const e = require('./dk2017.js'),
  r = require('./sonix/k68.js'),
  _ = require('./sonix/k68_elite.js'),
  n = require('./sonix/k68_g68.js'),
  k = require('./sonix/k68_hf68.js'),
  s = require('./sonix/k68_HYEKYU.js'),
  i = require('./sonix/k68_k217.js'),
  u = require('./sonix/k68_k219.js'),
  K = require('./sonix/k68_k220.js'),
  t = require('./sonix/k68_k223.js'),
  o = require('./sonix/k68_k224.js'),
  c = require('./sonix/k68_k669.js'),
  a = require('./sonix/k68_k84.js'),
  x = require('./sonix/k68_k84_2m.js'),
  w = require('./sonix/k68_k84_dm.js'),
  q = require('./sonix/k68_kb61.js'),
  m = require('./sonix/k68_kg008.js'),
  M = require('./sonix/k68_kl.js'),
  l = require('./sonix/k68_kl68DM.js'),
  d = require('./sonix/k68_lp87.js'),
  p = require('./sonix/k68_m61_2m.js'),
  E = require('./sonix/k68_m68.js'),
  g = require('./sonix/k68_MAGNET.js'),
  v = require('./sonix/k68_mg.js'),
  D = require('./sonix/k68_mhx.js'),
  G = require('./sonix/k68_mk1.js'),
  f = require('./sonix/k68_sk1.js'),
  h = require('./sonix/k68_vl96.js'),
  Y = require('./sonix/k68_VOYAGER68.js'),
  L = require('./sonix/k68_x90_3m.js');
exports.findSonixDev = (y, A) => {
  switch (A) {
    case 'dk2017':
      return new e.Dk2017(y);
    case 'k68':
      return new r.K68(y);
    case 'k68_k84':
      return new a.K68_K84(y);
    case 'k68_elite':
    case 'k68_elite_pro':
      return new _.K68_ELITE(y);
    case 'k68_kl':
      return new M.K68_KL(y);
    case 'k68_mhx':
      return new D.K68_MHX(y);
    case 'k68_hyekyu':
      return new s.K68_HYEKYU(y);
    case 'k68_tk568':
      return new v.K68_MG(y);
    case 'k68_vl96':
      return new h.K68_VL96(y);
    case 'k68_kb61':
      return new q.K68_KB61(y);
    case 'k68_m68':
      return new E.K68_M68(y);
    case 'k68_k219':
      return new u.K68_K219(y);
    case 'k68_k220':
      return new K.K68_K220(y);
    case 'k68_voyager68':
      return new Y.K68_VOYAGER68(y);
    case 'k68_k217':
      return new i.K68_K217(y);
    case 'k68_k84_2m':
      return new x.K68_K84_2M(y);
    case 'k68_pro':
      return new r.K68(y);
    case 'k68_magnet':
      return new g.K68_MAGNET(y);
    case 'k68_sk1':
      return new f.K68_SK1(y);
    case 'k68_lp87':
      return new d.K68_LP87(y);
    case 'k68_kl68_dm':
      return new l.K68_KL68_DM(y);
    case 'k68_mk1':
      return new G.K68_MK1(y);
    case 'k68_k669':
      return new c.K68_K669(y);
    case 'k68_k84_dm':
      return new w.K68_K84_DM(y);
    case 'k68_x90_3m':
      return new L.K68_X90_3M(y);
    case 'ek384':
    case 'meca_8x':
      return new w.K68_K84_DM(y);
    case 'k68_hf68':
      return new k.K68_HF68(y);
    case 'k68_k223':
      return new t.K68_K223(y);
    case 'k68_k224':
      return new o.K68_K224(y);
    case 'k68_kg008':
      return new m.K68_KG008(y);
    case 'k68_g68':
      return new n.K68_G68(y);
    case 'k68_m61_2m':
      return new p.K68_M61_2M(y);
    case 'common':
      return new r.K68(y);
    default:
      return;
  }
};
