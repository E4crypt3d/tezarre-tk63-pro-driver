/* Recovered from Tezarre Driver 1.1.31 - renderer module uf5F */

'use strict';
(Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.findYZWDev = void 0));
const e = require('./yzw/RY108.js'),
  _ = require('./yzw/yzw_3068.js'),
  r = require('./yzw/yzw_3084.js'),
  w = require('./yzw/yzw_3098.js'),
  y = require('./yzw/yzw_5087.js'),
  z = require('./yzw/yzw_5108.js'),
  n = require('./yzw/yzw_940v3.js'),
  u = require('./yzw/yzw_955.js'),
  t = require('./yzw/yzw_ak67_dm.js'),
  s = require('./yzw/yzw_ak75_dm.js'),
  a = require('./yzw/yzw_an63_dm.js'),
  c = require('./yzw/yzw_baota980.js'),
  Y = require('./yzw/yzw_bk980.js'),
  Z = require('./yzw/yzw_boyi_68.js'),
  k = require('./yzw/yzw_cl87.js'),
  W = require('./yzw/yzw_cy_th98.js'),
  i = require('./yzw/yzw_dk670.js'),
  m = require('./yzw/yzw_dk710b.js'),
  q = require('./yzw/yzw_elite.js'),
  K = require('./yzw/yzw_fk2102.js'),
  d = require('./yzw/yzw_gamakay.js'),
  M = require('./yzw/yzw_gemrise_k64.js'),
  g = require('./yzw/yzw_gemrise_k68.js'),
  l = require('./yzw/yzw_gike_s87.js'),
  o = require('./yzw/yzw_gm308.js'),
  D = require('./yzw/yzw_gm308_uk.js'),
  b = require('./yzw/yzw_gm807.js'),
  p = require('./yzw/yzw_gm884.js'),
  T = require('./yzw/yzw_gm898.js'),
  v = require('./yzw/yzw_gz87.js'),
  G = require('./yzw/yzw_gzk61.js'),
  L = require('./yzw/yzw_gzk61_2m_24.js'),
  C = require('./yzw/yzw_hf67_uk_dm.js'),
  f = require('./yzw/yzw_hf68.js'),
  A = require('./yzw/yzw_ik75.js'),
  V = require('./yzw/yzw_k081t_dm.js'),
  x = require('./yzw/yzw_k100.js'),
  E = require('./yzw/yzw_k178.js'),
  N = require('./yzw/yzw_k181_61k_dm.js'),
  S = require('./yzw/yzw_k210.js'),
  h = require('./yzw/yzw_k219.js'),
  B = require('./yzw/yzw_k220.js'),
  R = require('./yzw/yzw_k229.js'),
  I = require('./yzw/yzw_k231.js'),
  O = require('./yzw/yzw_k411t.js'),
  F = require('./yzw/yzw_k65_2m.js'),
  H = require('./yzw/yzw_k68.js'),
  P = require('./yzw/yzw_k690t.js'),
  j = require('./yzw/yzw_k84.js'),
  X = require('./yzw/yzw_k84_dm.js'),
  J = require('./yzw/yzw_k98.js'),
  U = require('./yzw/yzw_k980.js'),
  Q = require('./yzw/yzw_kc68.js'),
  $ = require('./yzw/yzw_kc84.js'),
  ee = require('./yzw/yzw_kr081.js'),
  _e = require('./yzw/yzw_ck61.js'),
  re = require('./yzw/yzw_ck68.js'),
  we = require('./yzw/yzw_ck87.js'),
  ye = require('./yzw/yzw_lp104_dm.js'),
  ze = require('./yzw/yzw_lp84.js'),
  ne = require('./yzw/yzw_lp84_norgb.js'),
  ue = require('./yzw/yzw_lp87_dm.js'),
  te = require('./yzw/yzw_lp98_dm.js'),
  se = require('./yzw/yzw_m68.js'),
  ae = require('./yzw/yzw_mk3108.js'),
  ce = require('./yzw/yzw_mk680.js'),
  Ye = require('./yzw/yzw_mk840.js'),
  Ze = require('./yzw/yzw_mk970.js'),
  ke = require('./yzw/yzw_mod006_dm.js'),
  We = require('./yzw/yzw_mod008_dm.js'),
  ie = require('./yzw/yzw_my_rtk61b_2m_bt.js'),
  me = require('./yzw/yzw_my_rtk68bp_2m_bt.js'),
  qe = require('./yzw/yzw_nj68.js'),
  Ke = require('./yzw/yzw_nj80.js'),
  de = require('./yzw/yzw_nk100.js'),
  Me = require('./yzw/yzw_rs1.js'),
  ge = require('./yzw/yzw_rx980.js'),
  le = require('./yzw/yzw_s68.js'),
  oe = require('./yzw/yzw_sk1.js'),
  De = require('./yzw/yzw_sk3.js'),
  be = require('./yzw/yzw_sk98.js'),
  pe = require('./yzw/yzw_test.js'),
  Te = require('./yzw/yzw_tk63.js'),
  ve = require('./yzw/yzw_ty61_2m.js'),
  Ge = require('./yzw/yzw_ty63_2m.js'),
  Le = require('./yzw/yzw_veil80.js'),
  Ce = require('./yzw/yzw_vl68.js'),
  fe = require('./yzw/yzw_vl96.js'),
  Ae = require('./yzw/yzw_vn66.js'),
  Ve = require('./yzw/yzw_vn80.js'),
  xe = require('./yzw/yzw_zsx68.js'),
  Ee = require('./yzw/yzw_61m_dm.js'),
  Ne = require('./yzw/yzw_mk1064_dm.js'),
  Se = require('./yzw/yzw_mod007s_dm.js'),
  he = require('./yzw/yzw_gt6.js'),
  Be = require('./yzw/yzw_dy_k68.js'),
  Re = require('./yzw/yzw_mk61max.js'),
  Ie = require('./yzw/yzw_mk68max.js');
exports.findYZWDev = (Oe, Fe) => {
  switch (Fe) {
    case 'ry108':
      return new e.RY108(Oe);
    case 'yzw_hf68':
      return new f.YZW_HF68(Oe);
    case 'yzw_k68':
      return new H.YZW_K68(Oe);
    case 'yzw_3098':
      return new w.YZW_3098(Oe);
    case 'yzw_lp84':
      return new ze.YZW_LP84(Oe);
    case 'yzw_gm898':
      return new T.YZW_GM898(Oe);
    case 'yzw_k219':
      return new h.YZW_K219(Oe);
    case 'yzw_k220':
      return new B.YZW_K220(Oe);
    case 'yzw_sk1':
      return new oe.YZW_SK1(Oe);
    case 'yzw_nj80':
      return new Ke.YZW_NJ80(Oe);
    case 'yzw_5087':
      return new y.YZW_5087(Oe);
    case 'yzw_5108':
      return new z.YZW_5108(Oe);
    case 'yzw_3068':
      return new _.YZW_3068(Oe);
    case 'yzw_nk100':
      return new de.YZW_NK100(Oe);
    case 'yzw_elite':
      return new q.YZW_ELITE(Oe);
    case 'yzw_gamakay':
      return new d.YZW_GAMAKAY(Oe);
    case 'yzw_k980':
      return new U.YZW_K980(Oe);
    case 'yzw_k98':
      return new J.YZW_K98(Oe);
    case 'yzw_nj68':
      return new qe.YZW_NJ68(Oe);
    case 'yzw_lp84_norgb':
      return new ne.YZW_LP84_NORGB(Oe);
    case 'yzw_elite_pro':
      return new q.YZW_ELITE(Oe);
    case 'yzw_k68_dm':
      return new H.YZW_K68(Oe);
    case 'yzw_k84':
      return new j.YZW_K84(Oe);
    case 'yzw_k84_dm':
      return new X.YZW_K84_DM(Oe);
    case 'yzw_vl96':
      return new fe.YZW_VL96(Oe);
    case 'yzw_gzk61_2m_24':
      return new L.YZW_GZK61_2M_24(Oe);
    case 'yzw_sk98':
      return new be.YZW_SK98(Oe);
    case 'yzw_lp87_dm':
      return new ue.YZW_LP87_DM(Oe);
    case 'yzw_k65_2m':
      return new F.YZW_K65_2M(Oe);
    case 'yzw_kc68':
      return new Q.YZW_KC68(Oe);
    case 'yzw_gzk61':
      return new G.YZW_GZK61(Oe);
    case 'yzw_k178':
    case 'yzw_k181_61':
    case 'yzw_k181_68':
      return new E.YZW_K178(Oe);
    case 'yzw_lp104_dm':
      return new ye.YZW_LP104_DM(Oe);
    case 'yzw_cl87':
    case 'yzw_cl87_2m':
      return new k.YZW_CL87(Oe);
    case 'yzw_tk63':
      return new Te.YZW_TK63(Oe);
    case 'yzw_kc84':
      return new $.YZW_KC84(Oe);
    case 'yzw_dk670':
      return new i.YZW_DK670(Oe);
    case 'yzw_k229':
      return new R.YZW_K229(Oe);
    case 'yzw_k690t':
      return new P.YZW_K690T(Oe);
    case 'yzw_bk980':
      return new Y.YZW_BK980(Oe);
    case 'yzw_baota98':
      return new c.YZW_BAOTA98(Oe);
    case 'yzw_sk3':
      return new De.YZW_SK3(Oe);
    case 'yzw_m68':
      return new se.YZW_M68(Oe);
    case 'yzw_lk67':
      return new f.YZW_HF68(Oe);
    case 'yzw_mk680':
      return new ce.YZW_MK680(Oe);
    case 'yzw_955':
      return new u.YZW_955(Oe);
    case 'yzw_3098_dm':
      return new w.YZW_3098(Oe);
    case 'yzw_mk840':
      return new Ye.YZW_MK840(Oe);
    case 'yzw_vl68':
      return new Ce.YZW_VL68(Oe);
    case 'yzw_k84_2m':
      return new j.YZW_K84(Oe);
    case 'yzw_dk710b':
      return new m.YZW_DK710B(Oe);
    case 'yzw_rx980':
      return new ge.YZW_RX980(Oe);
    case 'yzw_940v3':
      return new n.YZW_940V3(Oe);
    case 'yzw_ep84_dm':
      return new $.YZW_KC84(Oe);
    case 'yzw_sadeskunai':
      return new Ce.YZW_VL68(Oe);
    case 'yzw_k081t_dm':
      return new V.YZW_K081T_DM(Oe);
    case 'yzw_k231':
      return new I.YZW_K231(Oe);
    case 'yzw_test':
      return new pe.YZW_TEST(Oe);
    case 'yzw_lp98_dm':
      return new te.YZW_LP98_DM(Oe);
    case 'yzw_kr081':
      return new ee.YZW_KR081(Oe);
    case 'yzw_k210':
      return new S.YZW_K210(Oe);
    case 'yzw_hf67_dm':
      return new f.YZW_HF68(Oe);
    case 'yzw_ty61_2m':
      return new ve.YZW_TY61_2M(Oe);
    case 'yzw_ty63_2m':
      return new Ge.YZW_TY63_2M(Oe);
    case 'yzw_an63_dm':
      return new a.YZW_AN63_DM(Oe);
    case 'yzw_mk970':
      return new Ze.YZW_MK970(Oe);
    case 'yzw_gm884':
      return new p.YZW_GM884(Oe);
    case 'yzw_zsx68':
      return new xe.YZW_ZSX68(Oe);
    case 'yzw_kc84_dm':
      return new $.YZW_KC84(Oe);
    case 'yzw_dk67_g691':
      return new i.YZW_DK670(Oe);
    case 'yzw_mk970_dm':
      return new Ze.YZW_MK970(Oe);
    case 'yzw_vn66':
      return new Ae.YZW_VN66(Oe);
    case 'yzw_vn80':
      return new Ve.YZW_VN80(Oe);
    case 'yzw_ak67_dm':
      return new t.YZW_AK67_DM(Oe);
    case 'yzw_ak75_dm':
      return new s.YZW_AK75_DM(Oe);
    case 'yzw_kc68_dm':
      return new Q.YZW_KC68(Oe);
    case 'yzw_yz84_dm':
      return new $.YZW_KC84(Oe);
    case 'yzw_yz68_dm':
      return new Q.YZW_KC68(Oe);
    case 'yzw_hf67_uk_dm':
      return new C.YZW_HF67_UK_DM(Oe);
    case 'yzw_gm308':
      return new o.YZW_GM308(Oe);
    case 'yzw_gike_s87':
      return new l.YZW_GIKE_S87(Oe);
    case 'yzw_k411t':
      return new O.YZW_K411T(Oe);
    case 'yzw_kn67':
      return new f.YZW_HF68(Oe);
    case 'yzw_gm308_uk':
      return new D.YZW_GM308_UK(Oe);
    case 'yzw_gz87':
      return new v.YZW_GZ87(Oe);
    case 'yzw_kb980_dm':
      return new U.YZW_K980(Oe);
    case 'yzw_k100':
      return new x.YZW_K100(Oe);
    case 'yzw_ik75':
    case 'yzw_feker_ik75':
    case 'yzw_nk750al_dm':
      return new A.YZW_IK75(Oe);
    case 'yzw_fk2102':
      return new K.YZW_FK2102(Oe);
    case 'yzw_gm807_dm':
      return new b.YZW_GM807(Oe);
    case 'yzw_rs1':
      return new Me.YZW_RS1(Oe);
    case 'yzw_3084':
      return new r.YZW_3084(Oe);
    case 'yzw_gemrise_k68':
      return new g.YZW_GEMRISE_K68(Oe);
    case 'yzw_gemrise_k64':
      return new M.YZW_GEMRISE_K64(Oe);
    case 'yzw_k181_61k_dm':
      return new N.YZW_K181_61K_DM(Oe);
    case 'yzw_gt8':
      return new Ve.YZW_VN80(Oe);
    case 'yzw_boyi_68':
      return new Z.YZW_BOYI_68(Oe);
    case 'yzw_kono68':
      return new Ce.YZW_VL68(Oe);
    case 'yzw_kono96':
      return new fe.YZW_VL96(Oe);
    case 'yzw_woaommd75':
      return new c.YZW_BAOTA98(Oe);
    case 'yzw_mk3108':
      return new ae.YZW_MK3108(Oe);
    case 'yzw_my_rtk68bp_2m_bt':
      return new me.YZW_MY_RTK68BP_2M_BT(Oe);
    case 'yzw_my_rtk61b_2m_bt':
      return new ie.YZW_MY_RTK61B_2M_BT(Oe);
    case 'yzw_mod008_dm':
      return new We.YZW_MOD008_DM(Oe);
    case 'yzw_s68':
      return new le.YZW_S68(Oe);
    case 'yzw_cy_th66':
      return new Ae.YZW_VN66(Oe);
    case 'yzw_cy_th80':
      return new Ve.YZW_VN80(Oe);
    case 'yzw_cy_th98':
      return new W.YZW_CY_TH98(Oe);
    case 'yzw_mod006_dm':
      return new ke.YZW_MOD006_DM(Oe);
    case 'yzw_ck61':
      return new _e.YZW_CK61(Oe);
    case 'yzw_ck68':
      return new re.YZW_CK68(Oe);
    case 'yzw_ck87':
      return new we.YZW_CK87(Oe);
    case 'yzw_veil80':
      return new Le.YZW_VEIL80(Oe);
    case 'yzw_61m_dm':
      return new Ee.YZW_61M_DM(Oe);
    case 'yzw_w_87':
      return new de.YZW_NK100(Oe);
    case 'yzw_mk1064_dm':
      return new Ne.YZW_MK1064_DM(Oe);
    case 'yzw_mod007s_dm':
      return new Se.YZW_MOD007S_DM(Oe);
    case 'yzw_gt6':
      return new he.YZW_GT6(Oe);
    case 'yzw_dy_k68':
      return new Be.YZW_DY_K68(Oe);
    case 'yzw_ak980_dm':
      return new w.YZW_3098(Oe);
    case 'yzw_mk61max':
      return new Re.YZW_MK61MAX(Oe);
    case 'yzw_mk68max':
      return new Ie.YZW_MK68MAX(Oe);
    case 'yzw_zen67':
      return new f.YZW_HF68(Oe);
    case 'yzw_yzi68':
      return new Q.YZW_KC68(Oe);
    default:
      return;
  }
};
