<h1>Adolescents and Youth Dashboard</h1>
<div class="dashboard-banner-wrapper adolescents-youth-dashboard-wrapper clearfix">

  <div class="dashboard-banner-image-container adolescents-youth-image">
    <div class="dashboard-field-content">
      <img title="Adolescents and Youth Dashboard" alt="Adolescents and Youth Dashboard" src="/<?php print drupal_get_path('module', 'unfpa_global_dashboard'); ?>/images/adolescent-youth-dashboard-image.jpg" />
    </div>
  </div>
  <div class="dashboard-banner-info-container">
    <div class="dashboard-field-content">
      <span class="dashboard-icon adolescents-youth-dashboard-icon"></span>
      <p>The Adolescents and Youth Dashboard is an animated and interactive data platform containing the latest adolescents and youth data covering the following topics: population size and distribution, parental residence in household, school attendance, marital status, age difference between couples, child marriage, adolescent pregnancy, family planning, sexual activity, HIV/AIDS knowledge, and women's empowerment. With data generated from the latest household surveys(DHS and MICS), the dashboard aims to identify the most vulnerable adolescents and youth as the essential element for evidence-based programming.</p>
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
            <li><a href="/data/adolescent-youth/<?php print $country_code; ?>"> <?php print $country_name; ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
  <span class="info"><?php print t('Click on a country or territory or select from drop down list') ?></span>
</div>


<h2>View Country Indicators</h2>
<div id="view-country-indicators" class="ay-dashboard-tabs-container clearfix">
  <div id="ay-dashboard-tabs" class="open-data-dashboard-tabs">
    <ul>
      <li class="tab1 active-tab"><span><a href="javascript:void(0)">Child Marriage</a></span>
        <ul id="tab1" style="display: block;">

          <li class="first"><span><input type="radio" name="ay-indicator" id="cm_age_by_18_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true"/><label class="label1">Percentage of women aged 20-24 who got married before age 18 or 15</label></span></li>

          <li class="second"><span><input type="radio" name="ay-indicator" id="cm_perc_wife_think_beating_jusfd_girl_15_24" value="perc_wife_think_beating_jusfd_girl_15_24"/><label>Percentage of females aged 15-24 who think that wife beating is justified under at least one condition</label></span></li>

          <li class="third"><span><input type="radio" name="ay-indicator" id="cm_perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more" value="perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more"/><label>Percentage of females aged 15-24 who have a  husband/cohabiting partner 10 or more years older</label></span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab2"><span><a href="javascript:void(0)">Adolescent pregnancy</a></span>
        <ul id="tab2">

          <li class="first"><span><input type="radio" name="ay-indicator" id="ay_preg_18_15" value="perc_girl_age_20_24_gave_birth_bfr_15"/><label>Percentage of women aged 20-24 who gave birth before age 18 or 15</label></span></li>


          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab3"><span><a href="javascript:void(0)">Family planning</a></span>
        <ul id="tab3">

          <li class="first"><span><input type="radio" name="ay-indicator" id="fm_using_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_using_contrcptn_mthd"/><label>Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</label></span></li>

          <li class=""><span><input type="radio" name="ay-indicator" id="fm_using_mdrn_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_using_mdrn_contrcptn_mthd"/><label>Percentage of currently married/in union females aged 15-24 who are currently using any modern contraceptive method</label></span></li>

          <li class=""><span><input type="radio" name="ay-indicator" id="fm_not_using_contrcptn_mthd_15_24" value="perc_mrd_girl_age_15_19_not_using_contrcptn_mthd"/><label>Percentage of currently married/in union females aged 15-24 who are not currently using any contraceptive method</label></span></li>


          <li class=""><span><input type="radio" name="ay-indicator" id="fm_hv_unmet_need_fml_pln_15_24" value="perc_mrd_girl_age_15_19_hv_unmet_need_fml_pln"/><label>Percentage of currently married/in union females aged 15-24 who have an unmet need for family planning</label></span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab4"><span><a href="javascript:void(0)">Sexual & reproductive health</a></span>
        <ul id="tab4">

          <li class="first"><span><input type="radio" name="ay-indicator" id="sr_knwldg_hiv_aids_15_24" value="perc_girl_age_15_19_have_knwldg_hiv_aids"/><label>Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</label></span></li>
          <li class="second"><span><input type="radio" name="ay-indicator" id="sr_perc_female_ever_had_all_girl_15_19" value="perc_female_ever_had_all_girl_15_19"/><label>Percentage of girls aged 15-19 who  ever had sex</label></li>
          <li class="third"><span><input type="radio" name="ay-indicator" id="sr_perc_female_sexuly_active_all_girl_15_19" value="perc_female_sexuly_active_all_girl_15_19"/><label>Percentage of girls aged 15-19 who are sexually active</label></span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
      <li class="tab5"><span><a href="javascript:void(0)">Gender Equality</a></span>
        <ul id="tab5">

          <li class="first"><span><input type="radio" name="ay-indicator" id="ge_take_contrcptn_desc_byself_or_with_hsbnd_15_24" value="perc_girl_age_15_19_take_contrcptn_desc_byself_or_with_hsbnd"/><label>Proportion of women 15-24 involved in decision making for contraceptive use</label></span></li>
          <li class="second"><span><input type="radio" name="ay-indicator" id="ge_own_hlth_desc_byself_or_with_hsbnd_15_24" value="perc_girl_age_15_19_take_contrcptn_desc_byself_or_with_hsbnd"/><label>Proportion of women 15-24 involved in decision making for own health care</label></span></li>
          <li class="third"><span><input type="radio" name="ay-indicator" id="ge_contrcptn_dmnd_stsfd_15_24" value="perc_mrd_girl_age_15_19_contrcptn_dmnd_stsfd"/><label>Percentage of currently married/in union females aged 15-24 who have their contraception demand satisfied</label></span></li>

          <li class="last"><span class="close-arrow">Close</span></li>

        </ul>
      </li>
    </ul>
  </div>

  <div id="dashboard-map-wrapper" class="dashboard-outer-box">
    <div id="map-inner-container">
      <h2 class="dashboard-map-section-title">Percentage of women aged 20-24 who got married before age 18 or 15</h2>
      <div class="map-left-section map-sections">
        <div id="filters" class="filter-block cm_age_by_18_15" style="display: block;">
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
        </div>
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

<!--<div id="dashboard-page-bottom-container"><p>Select a country from the map or the drop-down list. Move mouse over the figures and legends to explore the interactive data content.<br>The dashboard was developed by the Technical Division, UNFPA, New York. For questions and comments please send them to <a href="mailto:liang@unfpa.org">liang@unfpa.org</a></p></div>-->
