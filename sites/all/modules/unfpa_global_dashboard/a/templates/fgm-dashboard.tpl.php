<h1>FGM Dashboard</h1>
<div class="dashboard-banner-wrapper fgm-dashboard-wrapper clearfix">

  <div class="dashboard-banner-image-container fgm-image">
    <div class="dashboard-field-content">
      <img title="FGM Dashboard" alt="FGM Dashboard" src="/<?php print drupal_get_path('module', 'unfpa_global_dashboard'); ?>/images/fgm-dashboard-image.jpg" />
    </div>
  </div>
  <div class="dashboard-banner-info-container">
    <div class="dashboard-field-content">
      <span class="dashboard-icon fgm-dashboard-icon"></span>
      <p>The Female Genital Mutilation/Cutting (FGM) Dashboard is an animated and interactive data platform containing the latest FGM data (prevalence, attitude, age at FGM, type and performers) and projections. With data generated from the latest household surveys (DHS and MICS), the dashboard provides data and analysis to support the monitoring of the UNFPA-UNICEF Joint Programme and to support evidence-based programming.</p>
    </div>
  </div>
</div>

<h2>Browse by Country</h2>
<div class="popover">
  <button class="pencil"><?php print t('Select country or territory'); ?></button>
  <div class="thepopover">
    <span class="triangle-img"></span>
    <div id="family-planning-countries">
      <div class="area">
        <h4><?php print t('Countries and Territories'); ?></h4>
        <ul>
          <?php foreach ($areaList['areaIDNameArr'] as $country_code => $country_name): ?>
            <li><a href="/data/fgm/<?php print $country_code; ?>"> <?php print $country_name; ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
  <span class="info"><?php print t('Click on a country or territory or select from drop down list') ?></span>
</div>

<!--<h2>Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49</h2>-->
<!--<div class="popover">
  <a href="javascript:void('0');" class="btn pencil">Select Country</a>
  <div  class="thepopover" style="display: none;">
    <span class="pinguelo"></span>

    <span id="AreaClickId" class="parent  drp_txt">
      <span id="Arealist" class="simple" >
        <ul class="simple" >

          //<?php
//          global $base_url;
//          global $base_path;
//          //echo $selAreaPageURL;
//          $arBrkCnt = ceil(count($areaList['areaIDNameArr']) / 4);
//          if (!$arBrkCnt)
//            $arBrkCnt = 6;
//
//          $AreaCount = count($areaList['areaIDNameArr']);
//          $arCnt = 0;
//          $arCnt2 = 0; //$arBrkCnt = 6;//round($AreaCount/4);
//echo "<pre>";
//print_r($areaList['areaIDNameArr']);
//echo "</pre>";
## start to check if area ID Name exists
//          if (!empty($areaList['areaIDNameArr'])) {
//            ## start loop through area ID array ##
//            foreach ($areaList['areaIDNameArr'] as $areaID => $areaName) {
//              $pageURL = $base_url . "/fgm/" . $areaID;
//
//              echo '<li class="area_li"><a href="' . $pageURL . '"  rel="' . $areaID . '" class="area_a"><span>' . $areaName . '</span></a></li>';
//
//              $arCnt++;
//
//              if ($arCnt == $arBrkCnt) {
//                $arCnt = 0;
//                echo '</ul><ul class="simple1">';
//              }
//            }
//          }
//          ## end of checking for area ID Name existence
//
?>
        </ul>

      </span>
    </span>
  </div>
</div>-->

<h2>View Country Indicators</h2>
<div id="view-country-indicators" class="fgm-dashboard-tabs-container clearfix">
  <div id="fgm-dashboard-tabs" class="open-data-dashboard-tabs">
    <ul>
      <li class="tab1 active-tab"><span><a href="javascript:void(0)">Overview</a></span>
        <ul id="tab1" style="display: block;">

          <li class="first"><span><input type="radio" name="fgm-indicator" id="" value="prevelance" checked="true"/><label class="label1">Prevelance</label></span></li>
          <li><span><input type="radio" name="fgm-indicator" id="" value="fgm_among_young_girls"/><label class="label1">FGM among young girls</label></span></li>
          <li><span><input type="radio" name="fgm-indicator" id="" value="age_at_fgm"/><label class="label1">Age at FGM</label></span></li>
          <!--          <li class="second"><span><input type="radio" name="fgm-indicator" id="" value=""/><label>Age</label></span></li>-->

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab2" ><span><a href="javascript:void(0)">Projections and trends</a></span>
        <ul id="tab2">

          <li class="first"><span><input type="radio" name="fgm-indicator" id="" value="projections"/><label class="label1">Projections</label></span></li>

          <li class="second"><span><input type="radio" name="fgm-indicator" id="" value="trends"/><label>Trends</label></span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <!--
            <li class="tab3"><span><a href="javascript:void(0)">Inequalities and opposition</a></span>
              <ul id="tab3">

                <li class="first"><span><input type="radio" name="fgm-indicator" id="" value=""/><label class="label1">Inequalities and opposition</label></span></li>

                <li class="second"><span><input type="radio" name="fgm-indicator" id="" value=""/><label>Levels</label></span></li>

                <li class="last"><span class="close-arrow">Close</span></li>

              </ul>
            </li>
            <li class="tab4"><span><a href="javascript:void(0)">Type of FGM and performers</a></span>
              <ul id="tab4">

                <li class="first"><span><input type="radio" name="fgm-indicator" id="" value=""/><label class="label1">Type of FGM and performers</label></span></li>

                <li class="second"><span><input type="radio" name="fgm-indicator" id="" value=""/><label>Levels</label></span></li>

                <li class="third"><span><input type="radio" name="fgm-indicator" id="" value=""/><label>Trends</label></span></li>

                <li class="last"><span class="close-arrow">Close</span></li>

              </ul>
            </li>-->
    </ul>
  </div>

  <div id="dashboard-map-wrapper" class="dashboard-outer-box">
    <div id="map-inner-container">
      <h2 class="dashboard-map-section-title">Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49</h2>
      <div class="map-left-section map-sections">
        <!--        <div id="filters" class="filter-block cm_age_by_18_15" style="display: block;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="childmarriage_18_15">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="cm_age_by_15" class="cm_age_by_18_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true"><label>before age 15</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="cm_age_by_18" value="perc_girl_age_20_24_mrd_bfr_18"><label>before age 18</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block ay_preg_18_15" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="ay_preg_18_15">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="ay_preg_15" class="ay_preg_18_15" value="perc_girl_age_20_24_gave_birth_bfr_15"><label>before age 15</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="ay_preg_18" value="perc_girl_age_20_24_gave_birth_bfr_18" ><label>before age 18</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block fm_using_contrcptn_mthd_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="fm_using_contrcptn_mthd_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_using_contrcptn_mthd_15_19" class="fm_using_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_using_contrcptn_mthd"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_using_contrcptn_mthd_20_24" value="perc_mrd_girl_age_20_24_using_contrcptn_mthd"><label>age 20-24</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block fm_using_mdrn_contrcptn_mthd_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="fm_using_mdrn_contrcptn_mthd_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_using_mdrn_contrcptn_mthd_15_19" class="fm_using_mdrn_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_using_mdrn_contrcptn_mthd"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_using_mdrn_contrcptn_mthd_20_24" value="perc_mrd_girl_age_20_24_using_mdrn_contrcptn_mthd"><label>age 20-24</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block fm_not_using_contrcptn_mthd_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="fm_not_using_contrcptn_mthd_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_not_using_contrcptn_mthd_15_19" class="fm_not_using_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_not_using_contrcptn_mthd"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_not_using_contrcptn_mthd_19_24" value="perc_mrd_girl_age_20_24_not_using_contrcptn_mthd"><label>age 20-24</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block fm_hv_unmet_need_fml_pln_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="fm_hv_unmet_need_fml_pln_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_hv_unmet_need_fml_pln_15_19" class="fm_hv_unmet_need_fml_pln_15_24" value="perc_mrd_girl_age_15_19_hv_unmet_need_fml_pln"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="fm_hv_unmet_need_fml_pln_20_24" value="perc_mrd_girl_age_20_24_hv_unmet_need_fml_pln"><label>age 20-24</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block sr_knwldg_hiv_aids_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="sr_knwldg_hiv_aids_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="sr_knwldg_hiv_aids_15_19" class="sr_knwldg_hiv_aids_15_24" value="perc_girl_age_15_19_have_knwldg_hiv_aids"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="sr_knwldg_hiv_aids_20_24" value="perc_girl_age_20_24_have_knwldg_hiv_aids"><label>age 20-24</label></div>
                  </div>
                </div>
                <div id="filters" class="filter-block ge_contrcptn_dmnd_stsfd_15_24" style="display: none;">
                  <span class="filters-title">Filter</span>
                  <div id="filter-options-list" class="ge_contrcptn_dmnd_stsfd_15_24">
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="ge_contrcptn_dmnd_stsfd_15_19" class="ge_contrcptn_dmnd_stsfd_15_24" value="perc_mrd_girl_age_15_19_contrcptn_dmnd_stsfd"><label>age 15-19</label></div>
                    <div class="filter-option"><input type="radio" name="ay-indicator-filter" id="ge_contrcptn_dmnd_stsfd_20_24" value="perc_mrd_girl_age_20_24_contrcptn_dmnd_stsfd"><label>age 20-24</label></div>
                  </div>
                </div>-->
        <div id="legend" class="legend-block">
          <span class="filters-title">Legend</span>
          <ul>
            <li class="legend-data data-1">0% - 24.9%</li>
            <li class="legend-data data-2">25% - 49.9%</li>
            <li class="legend-data data-3">50% - 74.9%</li>
            <li class="legend-data data-4">75% - 100%</li>
          </ul>
        </div>
      </div>
      <div id="ay-map">
        <div id="map"></div>
      </div>
    </div>
  </div>
  <div class="loader"></div>
</div>

<!--<div id="dashboard-page-bottom-container"><p>Select a country from the map or the drop-down list. Move mouse over the figures and legends to explore the interactive data content. Then click to download a FGM Country Profile.</p><p>The dashboard was developed by the Technical Division, UNFPA, New York. For questions and comments please send them to <a href="mailto:liang@unfpa.org">liang@unfpa.org</a></p></div>-->
<!--<div id="ay-map">
  <div id="map"></div>
</div>-->


