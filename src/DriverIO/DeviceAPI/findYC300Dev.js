/* Recovered from Tezarre Driver 1.1.31 - renderer module aRIr */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.findYC300Dev = void 0));
const e = require('./yc200/YC200AKKOCommon.js'),
  _ = require('./yc200/YC200Common.js'),
  r = require('./yc200/yc200_3084b.js'),
  c = require('./yc200/yc200_ac067.js'),
  y = require('./yc200/yc200_acr_pro_68.js'),
  n = require('./yc200/yc200_acr_pro_75.js'),
  u = require('./yc200/yc200_b67.js'),
  s = require('./yc200/yc200_bk980.js'),
  t = require('./yc200/yc200_dk2912.js'),
  i = require('./yc200/yc200_dk2922.js'),
  a = require('./yc200/yc200_domikey.js'),
  C = require('./yc200/yc200_f081.js'),
  w = require('./yc200/yc200_feker_ik75.js'),
  k = require('./yc200/yc200_fk2102.js'),
  Y = require('./yc200/yc200_fk5011gb.js'),
  q = require('./yc200/yc200_gm885.js'),
  g = require('./yc200/yc200_hf67.js'),
  m = require('./yc200/yc200_k220.js'),
  K = require('./yc200/yc200_k224.js'),
  l = require('./yc200/yc200_k232.js'),
  o = require('./yc200/yc200_k401t.js'),
  G = require('./yc200/yc200_k411t.js'),
  S = require('./yc200/yc200_k61.js'),
  d = require('./yc200/yc200_k87.js'),
  b = require('./yc200/yc200_k980.js'),
  p = require('./yc200/yc200_l10.js'),
  M = require('./yc200/yc200_l8.js'),
  f = require('./yc200/yc200_l9.js'),
  L = require('./yc200/yc200_lp84.js'),
  E = require('./yc200/yc200_mk108l_uk.js'),
  R = require('./yc200/yc200_mk11.js'),
  D = require('./yc200/yc200_mk15.js'),
  N = require('./yc200/yc200_nj68.js'),
  I = require('./yc200/yc200_nj80.js'),
  P = require('./yc200/yc200_pc75b.js'),
  A = require('./yc200/yc200_sg8821.js'),
  B = require('./yc200/yc200_sg8835.js'),
  O = require('./yc200/yc200_sg8835_24_2m.js'),
  U = require('./yc200/yc200_sg8836_single_3m.js'),
  v = require('./yc200/yc200_sg8843.js'),
  x = require('./yc200/yc200_sg8845_24_single_2m.js'),
  z = require('./yc200/yc200_sg8857_24_single_2m.js'),
  T = require('./yc200/yc200_sk63.js'),
  h = require('./yc200/yc200_sk66.js'),
  F = require('./yc200/yc200_sk72.js'),
  j = require('./yc200/yc200_vn66.js'),
  H = require('./yc200/yc300_alice_dm.js'),
  X = require('./yc200/yc300_g691_krux_dm.js'),
  Z = require('./yc200/yc300_f108.js'),
  J = require('./yc200/yc300_k182.js'),
  V = require('./yc200/yc300_k235.js'),
  W = require('./yc200/yc300_k402t_single.js'),
  Q = require('./yc200/yc300_k403t_single.js'),
  $ = require('./yc200/yc300_mmd_k87pro.js'),
  ee = require('./yc200/yc300_tk63pro.js'),
  _e = require('./yzw/yzw_gemrise_k68.js'),
  re = require('./yzw/yzw_lp98_dm.js'),
  ce = require('./yc200/yc300_sg8835_2m_24_single.js'),
  ye = require('./yc200/yc300_ek3000_2m_bt.js'),
  ne = require('./yc200/yc300_rx980.js'),
  ue = require('./yc200/yc300_hs_g20.js'),
  se = require('./yc200/yc300_dz61.js'),
  te = require('./yc200/yc300_sg8925.js'),
  ie = require('./yc200/yc300_5108b_plus_uk.js'),
  ae = require('./yc200/yc300_gm807.js'),
  Ce = require('./yc200/yc300_sg8886_single.js'),
  we = require('./yc200/yc300_sg8886.js'),
  ke = require('./yc200/yc300_sg8922.js'),
  Ye = require('./yc200/yc300_nk100.js'),
  qe = require('./yc200/yc300_5087beu_plus_uk.js'),
  ge = require('./yc200/yc300_k402t.js'),
  me = require('./yc200/yc300_k403t.js'),
  Ke = require('./yc200/yc300_kg039.js'),
  le = require('./yc200/yc300_dukharo_vn80.js'),
  oe = require('./yc200/yc300_sk5.js'),
  Ge = require('./yc200/yc300_abko_ar75.js'),
  Se = require('./yc200/yc300_kg043.js');
exports.findYC300Dev = (de, be) => {
  switch (be) {
    case 'yc200common':
      return new _.YC200Common(de);
    case 'yc200_nj80':
      return new I.YC200_NJ80(de);
    case 'yc200_bk980':
      return new s.YC200_BK980(de);
    case 'yc200_k220':
      return new m.YC200_K220(de);
    case 'yc200_5108':
      return new e.YC200AKKOCommon(de);
    case 'yc200_hf67':
      return new g.YC200_HF67(de);
    case 'yc200_k411t':
      return new G.YC200_K411T(de);
    case 'yc200_lp84':
      return new L.YC200_LP84(de);
    case 'yc200_dk2912':
      return new t.YC200_DK2912(de);
    case 'yc200_dk2922':
      return new i.YC200_DK2922(de);
    case 'yc200_vn66':
      return new j.YC200_VN66(de);
    case 'yc200_gm885':
      return new q.YC200_GM885(de);
    case 'yc200_sg8821_2m':
      return new A.YC200_SG8821(de);
    case 'yc200_sg8843':
      return new v.YC200_SG8843(de);
    case 'yc200_sg8835_bt_2m':
      return new B.YC200_SG8835(de);
    case 'yc200_sg8835_24_2m':
      return new O.YC200_SG8835_24_2M(de);
    case 'yc200_lk67':
      return new g.YC200_HF67(de);
    case 'yc200_sk72':
      return new F.YC200_SK72(de);
    case 'yc200_k401t':
      return new o.YC200_K401T(de);
    case 'yc200_k61':
      return new S.YC200_K61(de);
    case 'yc200_k87':
      return new d.YC200_K87(de);
    case 'yc200_sg8857_24_single_2m':
      return new z.YC200_SG8857_24_SINGLE_2M(de);
    case 'yc200_fk5011gb':
      return new Y.YC200_FK5011GB(de);
    case 'yc200_3084b':
      return new r.YC200_3084B(de);
    case 'yc200_mk15':
      return new D.YC200_MK15(de);
    case 'yc200_ac067':
      return new c.YC200_AC067(de);
    case 'yc200_sg8845_24_single_2m':
      return new x.YC200_SG8845_24_SINGLE_2M(de);
    case 'yc200_k980':
      return new b.YC200_K980(de);
    case 'yc200_l8':
      return new M.YC200_L8(de);
    case 'yc200_l9':
      return new f.YC200_L9(de);
    case 'yc200_nj68':
      return new N.YC200_NJ68(de);
    case 'yc200_sg8836_single_3m':
      return new U.YC200_SG8836_SINGLE_3M(de);
    case 'yc200_b67':
      return new u.YC200_B67(de);
    case 'yc200_fk2102':
      return new k.YC200_FK2102(de);
    case 'yc200_k224':
      return new K.YC200_K224(de);
    case 'yc200_feker_ik75':
      return new w.YC200_FEKER_IK75(de);
    case 'yc200_pc75b':
      return new P.YC200_PC75B(de);
    case 'yc200_mk11':
      return new R.YC200_MK11(de);
    case 'yc200_k232':
      return new l.YC200_K232(de);
    case 'yc200_mk108l_uk':
      return new E.YC200_MK108L_UK(de);
    case 'yc200_l10':
      return new p.YC200_L10(de);
    case 'yc200_sk66':
      return new h.YC200_SK66(de);
    case 'yc200_sk63':
      return new T.YC200_SK63(de);
    case 'yzw_k68_2m_bt':
      return new _e.YZW_GEMRISE_K68(de);
    case 'yc200_domikey':
      return new a.YC200_DOMIKEY(de);
    case 'yc200_f081':
      return new C.YC200_F081(de);
    case 'yc200_acr_pro_68':
      return new y.YC200_ACR_PRO_68(de);
    case 'yc200_acr_pro_75':
      return new n.YC200_ACR_PRO_75(de);
    case 'yzw_k98_dm':
      return new re.YZW_LP98_DM(de);
    case 'yc300_tk63pro':
      return new ee.YC300_TK63PRO(de);
    case 'yc300_mmd_k87pro':
      return new $.YC300_MMD_K87PRO(de);
    case 'yc300_k402t_single':
      return new W.YC300_K402T_SINGLE(de);
    case 'yc300_k403t_single':
      return new Q.YC300_K403T_SINGLE(de);
    case 'yc300_pc75s_dm':
      return new P.YC200_PC75B(de);
    case 'yc300_f108':
      return new Z.YC300_F108(de);
    case 'yc300_k182':
      return new J.YC300_K182(de);
    case 'yc300_k235':
      return new V.YC300_K235(de);
    case 'yc300_alice_dm':
      return new H.YC300_ALICE_DM(de);
    case 'yc300_g691_krux_dm':
      return new X.YC300_G691_KRUX_DM(de);
    case 'yc300_sg8835_2m_24_single':
      return new ce.YC300_SG8835_2M_24_SINGLE(de);
    case 'yc300_g691_krux_2m_bt':
      return new X.YC300_G691_KRUX_DM(de);
    case 'yc300_ek3000_2m_bt':
      return new ye.YC300_EK3000_2M_BT(de);
    case 'yc300_rx980':
      return new ne.YC300_RX980(de);
    case 'yc300_hs_g20':
      return new ue.YC300_HS_G20(de);
    case 'yc300_ac067_dm':
      return new c.YC200_AC067(de);
    case 'yc300_dz61':
      return new se.YC300_DZ61(de);
    case 'yc300_sg8925':
      return new te.YC300_SG8925(de);
    case 'yc300_5108b_plus_uk':
      return new ie.YC300_5108B_PLUS_UK(de);
    case 'yc300_gm807':
      return new ae.YC300_GM807(de);
    case 'yc300_sg8886_single':
      return new Ce.YC300_SG8886_SINGLE(de);
    case 'yc300_sg8886':
      return new we.YC300_SG8886(de);
    case 'yc300_sg8922':
      return new ke.YC300_SG8922(de);
    case 'yc300_nk100':
      return new Ye.YC300_NK100(de);
    case 'yc300_5087beu_plus_uk':
      return new qe.YC300_5087BEU_PLUS_UK(de);
    case 'yc300_k402t':
      return new ge.YC300_K402T(de);
    case 'yc300_k403t':
      return new me.YC300_K403T(de);
    case 'yc300_kg039':
      return new Ke.YC300_KG039(de);
    case 'yc300_dukharo_vn80':
      return new le.YC300_DUKHARO_VN80(de);
    case 'yc300_sk5':
      return new oe.YC300_SK5(de);
    case 'yc300_abko_ar75':
      return new Ge.YC300_ABKO_AR75(de);
    case 'yc300_kg043':
      return new Se.YC300_KG043(de);
    default:
      return;
  }
};
