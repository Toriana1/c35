$(document).ready(function(){
    //getStub('/getEmply', function(results){
    $.get('/getEmply', function(results){
    var employeeString = "<thead><tr><th data-toggle='true'>Employee Id</th><th data-hide='phone'>Course Name</th><th data-hide'tablet,phone'>Begin Date</th><th data-hide='tablet,phone'>End Date</th><th>Supp Appr</th><th>DH Appr</th><th>Completion Status</th></tr></thead>";
    console.log(results);
    $.each(results, function(index, rowObject){
      employeeString += "<tr><td>" + rowObject.trng_reqst_nbr + "</td>" +
        "<td>" + rowObject.trng_cors_nm + "</td>" +
        "<td>" + rowObject.trng_cors_strt_dt + "</td>" +
        "<td>" + rowObject.trng_cors_end_dt + "</td>" +
        "<td>" + rowObject.trng_reqst_immed_supv_apvl_flg + "</td>" +
        "<td>" + rowObject.trng_reqst_dept_hd_apvl_flg + "</td>" +
        "<td>" + rowObject.trng_cors_compl_flg + "</td></tr>";
        
    });

     $('#ftable').html(employeeString);
    });
});


function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getEmply"){
    stubbedJson = [
   {
      "trng_reqst_nbr":20140015,
      "cntct_email_addr":"ALAN_TANG@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"KATHY_MILLER@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Visual Studio Live",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2014-05-05T00:00:00.000Z",
      "trng_cors_end_dt":"2014-05-08T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"32.00",
      "trng_cors_cost":"1795.00",
      "trng_cors_rltd_exp_amt":"0.00",
      "trng_cors_locn":"Chicago",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Learn latest Microsoft technology",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"Visual Studio Live! Chicago",
      "vndr_mail_addr":"1277 University of Oregon ",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"Eugene",
      "vndr_mail_st":"OR",
      "vndr_mail_zip_cd":"97403-1277",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2014-02-26T09:06:51.000Z",
      "lst_updt_dt":"2014-03-04T12:58:50.000Z",
      "lst_updt_id":"MISBGS  "
   },
   {
      "trng_reqst_nbr":20150044,
      "cntct_email_addr":"ORLINE_CACAYAN@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Visual Studio Live! 2015",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2015-09-28T00:00:00.000Z",
      "trng_cors_end_dt":"2015-10-01T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"32.00",
      "trng_cors_cost":"1895.00",
      "trng_cors_rltd_exp_amt":"0.00",
      "trng_cors_locn":"Brooklyn, NY",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Improve my technical skills and make me a more valuable asset to the company and give me the opportunity to learn from both industry experts and Microsoft product team members in a dev-focused environment.",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"Visual Studio Live! New York ",
      "vndr_mail_addr":"Attn: Erin Shirley",
      "vndr_mail_addr_ln_2":"14901 Quorum Drive, Suite 425",
      "vndr_mail_city":"Dallas",
      "vndr_mail_st":"TX",
      "vndr_mail_zip_cd":"75254     ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2015-06-24T09:45:37.000Z",
      "lst_updt_dt":"2015-06-29T15:43:42.000Z",
      "lst_updt_id":"DEVOLC  "
   },
   {
      "trng_reqst_nbr":20150053,
      "cntct_email_addr":"ALAN_TANG@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Visual Studio Live",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2015-09-28T00:00:00.000Z",
      "trng_cors_end_dt":"2015-10-01T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"32.00",
      "trng_cors_cost":"1795.00",
      "trng_cors_rltd_exp_amt":"1375.00",
      "trng_cors_locn":"NY City",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Learn latest Micosoft technology ",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"Visual Studio Live! New York ",
      "vndr_mail_addr":"14901 Quorum Drive, Suite 425",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"Dallas",
      "vndr_mail_st":"TX",
      "vndr_mail_zip_cd":"75254     ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2015-07-27T16:34:47.000Z",
      "lst_updt_dt":"2015-07-29T09:31:24.000Z",
      "lst_updt_id":"DEVSCW  "
   },
   {
      "trng_reqst_nbr":20150076,
      "cntct_email_addr":"ALAN_TANG@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"AppDynamics In Action for Power Users - .NET",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2015-11-30T00:00:00.000Z",
      "trng_cors_end_dt":"2015-12-04T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"40.00",
      "trng_cors_cost":"0.00",
      "trng_cors_rltd_exp_amt":"0.00",
      "trng_cors_locn":"Las Vegas",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Learning AppDynmic all core product features",
      "trng_reqst_immed_supv_apvl_flg":"P",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"AppDynamics",
      "vndr_mail_addr":"",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"",
      "vndr_mail_st":"  ",
      "vndr_mail_zip_cd":"          ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2015-11-09T08:23:26.000Z",
      "lst_updt_dt":"2015-11-09T08:23:26.000Z",
      "lst_updt_id":"DEVYAT  "
   },
   {
      "trng_reqst_nbr":20160006,
      "cntct_email_addr":"ALAN_TANG@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Build 2016",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2016-03-30T00:00:00.000Z",
      "trng_cors_end_dt":"2016-04-01T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"24.00",
      "trng_cors_cost":"0.00",
      "trng_cors_rltd_exp_amt":"1500.00",
      "trng_cors_locn":"San Francisco",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Learning Microsoft new technologies",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"Microsoft",
      "vndr_mail_addr":"",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"",
      "vndr_mail_st":"  ",
      "vndr_mail_zip_cd":"          ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2016-01-27T08:41:38.000Z",
      "lst_updt_dt":"2016-01-29T16:12:16.000Z",
      "lst_updt_id":"MISBGS  "
   },
   {
      "trng_reqst_nbr":20160009,
      "cntct_email_addr":"KENDALL.ZETTLMEIER@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"DevIntersections 2016",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2016-04-16T00:00:00.000Z",
      "trng_cors_end_dt":"2016-04-22T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"48.00",
      "trng_cors_cost":"2793.00",
      "trng_cors_rltd_exp_amt":"1500.00",
      "trng_cors_locn":"Lake Buena Vista, FL",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"This conference is going to have sessions and workshops discussing new javascript tools such as AngularJS 2 and Nativescript in order to build cross-platform applications using AngularJS.",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"DevIntersections 2016",
      "vndr_mail_addr":"",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"",
      "vndr_mail_st":"  ",
      "vndr_mail_zip_cd":"          ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2016-01-28T08:31:30.000Z",
      "lst_updt_dt":"2016-01-29T16:11:43.000Z",
      "lst_updt_id":"MISBGS  "
   },
   {
      "trng_reqst_nbr":20160010,
      "cntct_email_addr":"JACQUELINE.DUKES@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Anglebrackets 2016",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2016-04-16T00:00:00.000Z",
      "trng_cors_end_dt":"2016-04-22T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"48.00",
      "trng_cors_cost":"2793.00",
      "trng_cors_rltd_exp_amt":"1500.00",
      "trng_cors_locn":"Orlando, FL 32830",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Learn about open source frameworks relevant to the Emerging Technologies team",
      "trng_reqst_immed_supv_apvl_flg":"P",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"Anglebrackets 2016",
      "vndr_mail_addr":"",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"",
      "vndr_mail_st":"  ",
      "vndr_mail_zip_cd":"          ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2016-01-28T11:55:50.000Z",
      "lst_updt_dt":"2016-01-29T16:12:00.000Z",
      "lst_updt_id":"MISBGS  "
   },
   {
      "trng_reqst_nbr":20160011,
      "cntct_email_addr":"RICH.ROUSSEAU@TTX.COM",
      "cntct_email_immed_supv_addr":"SCOTT.WISSEL@TTX.COM",
      "cntct_email_dept_hd_addr":"PURNESH.RUSTAGI@TTX.COM",
      "trng_cors_id":"          ",
      "trng_cors_nm":"Angle Brackets",
      "trng_cors_nbr":"0         ",
      "trng_cors_strt_dt":"2016-04-17T00:00:00.000Z",
      "trng_cors_end_dt":"2016-04-22T00:00:00.000Z",
      "trng_cors_totl_nbr_hrs":"48.00",
      "trng_cors_cost":"2793.00",
      "trng_cors_rltd_exp_amt":"1806.00",
      "trng_cors_locn":"Orlando, FL",
      "trng_cors_typ":"Conference               ",
      "trng_reqst_cors_bnft_txt":"Training on many new technologies including Angular, Node, JavaScript which are integral to the new Emerging Technology Team.",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" ",
      "trng_cors_budg_pln_flg":"Y",
      "trng_cors_not_budg_pln_rsn_txt":"",
      "trng_cors_not_compl_rsn_txt":"",
      "trng_reqst_fwd_actg_paym_flg":"N",
      "trng_reqst_paym_recip_email_addr":"",
      "trng_reqst_rejt_rsn_txt":"",
      "trng_reqst_paym_reqst_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_due_dt":"1899-12-31T00:00:00.000Z",
      "trng_reqst_paym_chk_amt":"0.00",
      "trng_reqst_paym_mail_flg":"N",
      "vndr_nbr":"          ",
      "vndr_nm":"AngleBrackets/DevIntersection",
      "vndr_mail_addr":"",
      "vndr_mail_addr_ln_2":"",
      "vndr_mail_city":"",
      "vndr_mail_st":"  ",
      "vndr_mail_zip_cd":"          ",
      "vndr_mail_cntry":"",
      "trng_reqst_cost_ctr":"",
      "trng_reqst_gl_acct_nbr":"464000",
      "crtd_dt":"2016-01-28T12:30:24.000Z",
      "lst_updt_dt":"2016-01-29T16:11:26.000Z",
      "lst_updt_id":"MISBGS  "
   }
];
  }
  callback(stubbedJson);  
}
