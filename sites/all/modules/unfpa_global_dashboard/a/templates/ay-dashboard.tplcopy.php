<div class="dashboard-banner-wrapper adolescents-youth-dashboard-wrapper clearfix">

  <div class="dashboard-banner-image-container adolescents-youth-image">
    <div class="dashboard-field-content">
      <img title="Adolescents and Youth Dashboard" alt="Adolescents and Youth Dashboard" src="/<?php print drupal_get_path('module', 'unfpa_global_dashboard'); ?>/images/adolescent-youth-dashboard-image.jpg" />
    </div>
  </div>
  <div class="dashboard-banner-info-container">
    <div class="dashboard-field-content">
      <span class="dashboard-icon adolescents-youth-dashboard"></span>
      <p>The Adolescents and Youth Dashboard is an animated and interactive data platform containing the latest adolescents and youth data covering the following topics: population size and distribution, parental residence in household, school attendance, marital status, age difference between couples, child marriage, adolescent pregnancy, family planning, sexual activity, HIV/AIDS knowledge, and women's empowerment. With data generated from the latest household surveys(DHS and MICS), the dashboard aims to identify the most vulnerable adolescents and youth as the essential element for evidence-based programming.</p>
    </div>
  </div>
</div>

<h2>Browse by Country</h2>
<div class="popover">
  <a href="javascript:void('0');" class="btn pencil">Select Country</a>
  <div  class="thepopover" style="display: none;">
    <span class="pinguelo"></span>

    <span id="AreaClickId" class="parent  drp_txt">
      <span id="Arealist" class="simple" >
        <ul class="simple" >

          <?php
          global $base_url;
          global $base_path;
          //echo $selAreaPageURL;
          $arBrkCnt = ceil(count($areaList['areaIDNameArr']) / 4);
          if (!$arBrkCnt)
            $arBrkCnt = 6;

          $AreaCount = count($areaList['areaIDNameArr']);
          $arCnt = 0;
          $arCnt2 = 0; //$arBrkCnt = 6;//round($AreaCount/4);
          //echo "<pre>";
          //print_r($areaList['areaIDNameArr']);
          //echo "</pre>";
          ## start to check if area ID Name exists
          if (!empty($areaList['areaIDNameArr'])) {
            ## start loop through area ID array ##
            foreach ($areaList['areaIDNameArr'] as $areaID => $areaName) {
              $pageURL = $base_url . "/ay/" . $areaID;

              echo '<li class="area_li"><a href="' . $pageURL . '"  rel="' . $areaID . '" class="area_a"><span>' . $areaName . '</span></a></li>';

              $arCnt++;

              if ($arCnt == $arBrkCnt) {
                $arCnt = 0;
                echo '</ul><ul class="simple1">';
              }
            }
          }
          ## end of checking for area ID Name existence
          ?>
        </ul>

      </span>
    </span>
  </div>
</div>

<div class="columnleft">
  <div class="mrgn_btm10 sltindc" style='min-height:90px'>
    <div class="mrgn_ryt5 flt_lft pad3 clr_blu sel-ind-lab">Select Indicator</div>
    <div class="mrgn_ryt5 flt_lft pad3 clr_blu dsk-lis">
      <select name="slctindi_id" id="slctindi_id" tabindex="1" style='width:350px;'> </select>
    </div>
  </div>
</div>
Child Marriage
<div class="childmarriage_18_15">
  <input type="radio" name="cm_age_by_18_15" id="cm_age_by_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true">Age by 15<br>
  <input type="radio" name="cm_age_by_18_15" id="cm_age_by_18" value="perc_girl_age_20_24_mrd_bfr_18">Age by 18
</div>

Adolescent pregnancy
<div class="ay_preg_18_15">
  <input type="radio" name="ay_preg_18_15" id="ay_preg_15" value="perc_girl_age_20_24_gave_birth_bfr_15" checked="true">Age by 15<br>
  <input type="radio" name="ay_preg_18_15" id="ay_preg_18" value="perc_girl_age_20_24_gave_birth_bfr_18" >Age by 18
</div>


Family Planning<br>
Using any contraceptive
<div class="fm_using_contrcptn_mthd_15_24">
  <input type="radio" name="fm_using_contrcptn_mthd_15_24" id="fm_using_contrcptn_mthd_15_19" value="perc_mrd_girl_age_15_19_using_contrcptn_mthd" checked="true">Age by 15-19<br>
  <input type="radio" name="fm_using_contrcptn_mthd_15_24" id="fm_using_contrcptn_mthd_20_24" value="perc_mrd_girl_age_20_24_using_contrcptn_mthd">Age by 20-24
</div>
Using any modern contraceptive
<div class="fm_using_mdrn_contrcptn_mthd_15_24">
  <input type="radio" name="fm_using_mdrn_contrcptn_mthd_15_24" id="fm_using_mdrn_contrcptn_mthd_15_19" value="perc_mrd_girl_age_15_19_using_mdrn_contrcptn_mthd" checked="true">Age by 15-19<br>
  <input type="radio" name="fm_using_mdrn_contrcptn_mthd_15_24" id="fm_using_mdrn_contrcptn_mthd_20_24" value="perc_mrd_girl_age_20_24_using_mdrn_contrcptn_mthd">Age by 20-24
</div>
Not using any modern contraceptive
<div class="fm_not_using_contrcptn_mthd_15_24">
  <input type="radio" name="fm_not_using_contrcptn_mthd_15_24" id="fm_not_using_contrcptn_mthd_15_19" value="perc_mrd_girl_age_15_19_not_using_contrcptn_mthd" checked="true">Age by 15-19<br>
  <input type="radio" name="fm_not_using_contrcptn_mthd_15_24" id="fm_not_using_contrcptn_mthd_19_24" value="perc_mrd_girl_age_20_24_not_using_contrcptn_mthd">Age by 20-24
</div>
Have unmet need family 15 - 24
<div class="fm_hv_unmet_need_fml_pln_15_24">
  <input type="radio" name="fm_hv_unmet_need_fml_pln_15_24" id="fm_hv_unmet_need_fml_pln_15_19" value="perc_mrd_girl_age_15_19_hv_unmet_need_fml_pln">Age by 15-19<br>
  <input type="radio" name="fm_hv_unmet_need_fml_pln_15_24" id="fm_hv_unmet_need_fml_pln_20_24" value="perc_mrd_girl_age_20_24_hv_unmet_need_fml_pln">Age by 20-24
</div>
<br>
Sexual & reproductive health
<div class="sr_knwldg_hiv_aids_15_24">
  <input type="radio" name="sr_knwldg_hiv_aids_15_24" id="sr_knwldg_hiv_aids_15_19" value="perc_girl_age_15_19_have_knwldg_hiv_aids" checked="true">Age by 15-19<br>
  <input type="radio" name="sr_knwldg_hiv_aids_15_24" id="sr_knwldg_hiv_aids_20_24" value="perc_girl_age_20_24_have_knwldg_hiv_aids">Age by 20-24
</div>



<h2>View Country Indicators</h2>
<div id="view-country-indicators" class="clearfix">
  <div id="data-dashboard-tabs" class="dashboard-tabs">
    <ul>
      <li class="tab1 active-tab"><span><a href="#">Child Marriage</a></span>
        <ul style="display: block;">

          <li class="first"><span><input type="radio" name="child_marriage" id="cm_age_by_18_15" /></span><span>Percentage of women aged 20-24 who got married before age 18/15</span></li>

          <li class=""><span><input type="radio" name="child_marriage" id="perc_wife_think_beating_jusfd_girl_15_24" value="perc_wife_think_beating_jusfd_girl_15_24"/></span><span>Percentage of females aged 15-24 who think that wife beating is justified under at least one condition</span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab2"><span><a href="#">Adolescent pregnancy</a></span>
        <ul>

          <li class="first"><span><input type="radio" name="adolescent" id="ay_preg_18_15"/></span><span>Percentage of women aged 20-24 who gave birth before age 18/15</span></li>


          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab3"><span><a href="#">Family planning</a></span>
        <ul>

          <li class="first"><span><input type="radio" name="family_planning" id="fm_using_contrcptn_mthd_15_24"/></span><span>Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</span></li>

          <li class=""><span><input type="radio" name="family_planning" id="fm_using_mdrn_contrcptn_mthd_15_24"/></span><span>Percentage of currently married/in union females aged 15-24 who are currently using any modern contraceptive method</span></li>

          <li class=""><span><input type="radio" name="family_planning" id="fm_not_using_contrcptn_mthd_15_24"/></span><span>Percentage of currently married/in union females aged 15-24 who are not currently using any contraceptive method</span></li>


          <li class=""><span><input type="radio" name="family_planning" id="fm_hv_unmet_need_fml_pln_15_24"/></span><span>Percentage of currently married/in union females aged 15-24 who have an unmet need for family planning</span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab4"><span><a href="#">Sexual & reproductive health</a></span>
        <ul>

          <li class="first"><span><input type="radio" name="family_planning" id="sr_knwldg_hiv_aids_15_24"/></span><span>Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</span></li>


          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab5"><span><a href="#">Gender Equality</a></span>
        <ul>

          <li class="first"><span><input type="radio" name="gender_equality" id="ge_take_contrcptn_desc_byself_or_with_hsbnd_15_24" value="perc_girl_age_15_19_take_contrcptn_desc_byself_or_with_hsbnd"/></span><span>Proportion of women 15-24 involved in decision making for contraceptive use</span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
    </ul>
  </div>

  <div id="dashboard-map-container" class="dash-outer-box">
    <div id="ay-map">
      <div id="map"></div>
    </div>
  </div>
</div>

<div id="dashboard-page-bottom-container"><p>Select a country from the map or the drop-down list. Move mouse over the figures and legends to explore the interactive data content.<br>The dashboard was developed by the Technical Division, UNFPA, New York. For questions and comments please send them to <a href="mailto:liang@unfpa.org">liang@unfpa.org</a></p></div>
