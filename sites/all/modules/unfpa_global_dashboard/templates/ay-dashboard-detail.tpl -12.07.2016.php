<!--<h1 id="page-title" class="title">Adolescents and Youth Dashboard - Nepal</h1>-->
<div class="dashboard-country-wrapper adolescents-youth-dashboard-country-wrapper clearfix">
  <span class="dashboard-icon adolescents-youth-dashboard-icon"></span>
  <div class="dashboard-country-download-profile-block">
    <span class="download-profile-text">Download the Profile to see full set of data</span>
    <div class="download-button-block">
      <a class="download-icon-text-button" href="#" target="_blank">Download PDF</a>
      <a class="download-content-langauge-button" href="#" target="_blank">English</a>
    </div>
  </div>
</div>

<div id="population-distribution-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Population Distribution, by Residence and Region</span>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <div class="country-chart-section-left chart-sections">
      <span class="filters-title">Sex and Age Group</span>
      <div id="filter-options-list">
        <ul id="sel_ppl_dstrbtn_resd_regn_radio" class="square-input-element">
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" checked="true" value="<?php echo $data['GIRL_AGE_GRP_10_14']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_10_14_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['GIRL_AGE_GRP_15_19']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_15_19_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['GIRL_AGE_GRP_20_24']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_20_24_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_10_14']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_10_14_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_15_19']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_15_19_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_20_24']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_20_24_DSP_TRM']); ?></label></span></li>
        </ul>
      </div>
    </div>
    <div class="country-chart-section-right chart-sections">
      <div class="stacked-div top-container">
        <div id="p-VO_1">
          <div class="graph flt_lft" id="graph_ppl_dstrbtn_resd_regn">
          </div>
        </div>
      </div>
      <div class="stacked-div bottom-container">
        <div id ='table_ppl_dstrbtn_resd_regn_tabledata' class="mrgn_top20 population-distribution-datatable"></div>
        <div class="population-data-source-info">Source: <span id='ppl_source_nm'>World Population Prospects, 2012 Revision</span></div>
      </div>
    </div>
  </div>
</div>

<div id="child-marriage-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Child Marriage</span>
  </div>
  <div class="section-indicators" id="child-marriage-indicators">
    <ul style="display: block;" id="tab1">

      <li class="first"><span><input type="radio" name="ay-indicator" class="cm_age_by_18_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true"/><label class="label1" id="perc">Percentage of women aged 20-24 who got married before age 18 or 15</label></span></li>

      <li class="second"><span><input type="radio" name="ay-indicator" class="cm_perc_wife_think_beating_jusfd_girl_15_24" value="perc_wife_think_beating_jusfd_girl_15_24"/><label>Percentage of females aged 15-24 who think that wife beating is justified under at least one condition</label></span></li>

      <li class="third"><span><input type="radio" name="ay-indicator" class="cm_perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more" value="perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more"/><label>Percentage of females aged 15-24 who have a  husband/cohabiting partner 10 or more years older</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Percentage of women aged 20-24 who got married before age 18 or 15</h2>
    <div class="country-chart-section-left chart-sections">

      <div class="mrgn_btm10 sltindc" style='min-height:90px;display:none'>
        <div class="mrgn_ryt5 flt_lft pad3 clr_blu sel-ind-lab">Select Indicator</div>
        <div class="mrgn_ryt5 flt_lft pad3 clr_blu dsk-lis">
          <select name="slctindi_id" id="slctindi_id" tabindex="1" style='width:350px;'> </select>
        </div>
      </div>

      <div id="chart-buttons-wrapper" class="child-marriage-indicators clearfix">
        <button type="button" class="button map active" id="filter_cm_age_by_18_15">Map</button>
        <button type="button" class="button graph" id="graph_cm_age_by_18_15">Graph</button>
        <button type="button" class="button table graph_table" id="table_cm_age_by_18_15">Table</button>
      </div>

      <div id="filter-options-list">
        <ul class="square-input-element filter_cm_age_by_18_15">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-indicator-filter" id="cm_age_by_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true" ><label>before age 15</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-indicator-filter" id="cm_age_by_18" value="perc_girl_age_20_24_mrd_bfr_18"><label>before age 18</label></span></li>
        </ul>
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

      <div id="action-links" class="action-links-block">
        <ul class="action-link-list dfapi-viz-toolbar">
          <li class="full-view" rel="print"><a class="full-view-link fullscreen" href="javascript:void(0);">Full View</a></li>
          <li class="print" rel="print"><a class="print-link dfapi-viz-toolbar-medium print" href="javascript:void(0);">Print</a></li>
          <li rel="download" class="download">
            <a href="javascript:void(0);" class="download-link">Download</a>
            <div rel="download" class="download-link-options dwnld-opts">
              <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
              <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
              <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
              <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
            </div>
          </li>
        </ul>
      </div>


    </div>

    <div class="country-chart-section-right chart-sections">

      <div id="map_render_child_mrg" class="chart-map-block map-div">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who got married before age 18 or 15</h2>

        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data' style="height:450px;margin-top:-15px"></div>
      </div>
      <div class="chart-map-block columnleft">
        <div class="CO3">
          <h2 style="display: none;">Percentage of women aged 20-24 who got married before age 18/15</h2>



          <div id="p-VO_8">
            <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who got married before age 18 or 15</h2>
            <!-- graph div -->
            <div class="graph flt_lft wid99 graph_cm_age_by_18_15 bar_chart table_cm_age_by_18_15" id="graph_adolescnt_mrg" style="display:none"></div>
          </div>
        </div>

      </div>

      <div class="flt_lft wid31 marg_ryt mrgn_top10 chart-map-block">
        <h2 style="height:70px; display: none;">Percentage of 15-24 year old females who think that wife beating is justified under at least one condition</h2>

        <div id="p-VO_15">
          <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who got married before age 18 or 15</h2>
          <!-- graph div -->
          <div class="graph chart_plc graph_cm_perc_wife_think_beating_jusfd_girl_15_24 bar_chart table_cm_perc_wife_think_beating_jusfd_girl_15_24" id='graph_perc_wife_think_beating_jusfd' style="display: none"></div>
        </div>

      </div>


      <div id="p-VO_14" class="chart-map-block">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who got married before age 18 or 15</h2>
        <!-- graph div -->
        <div class="graph clear chart_plc graph_cm_perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more bar_chart table_cm_perc_15_24_age_diff_btwn_female_and_partnr_girl_10_or_more" id='graph_perc_age_diff_btwn_female_and_partnr' style="display:none"></div>
      </div>
    </div>

  </div>
</div>

<div id="adolescent-pregnancy-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Adolescent pregnancy</span>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Percentage of women aged 20-24 who gave birth before age 18 or 15</h2>
    <div class="country-chart-section-left chart-sections">

      <div id="chart-buttons-wrapper" class="clearfix">
        <button type="button" class="button map active" id="filter_ay_adolescent_age_by_18_15">Map</button>
        <button type="button" class="button graph" id="graph_ay_adolescent_age_by_15">Graph</button>
        <button type="button" class="button table graph_table" id="table_ay_adolescent_age_by_18_15">Table</button>
      </div>

      <div id="filter-options-list">
        <ul class="square-input-element filter_ay_adolescent_age_by_18_15">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-adolescent-indicator-filter" id="ay_adolescent_age_by_15" value="perc_girl_age_20_24_gave_birth_bfr_15" checked="true" ><label>before age 15</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-adolescent-indicator-filter" id="ay_adolescent_age_by_18" value="perc_girl_age_20_24_gave_birth_bfr_18"><label>before age 18</label></span></li>
        </ul>
      </div>



      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Give birth by age 15</li>
          <li class="legend-data data-2">Give birth by age 18</li>
        </ul>
      </div>

      <div id="action-links" class="action-links-block">
        <ul class="action-link-list dfapi-viz-toolbar">
          <li class="full-view" rel="print"><a class="full-view-link fullscreen" href="javascript:void(0);">Full View</a></li>
          <li class="print" rel="print"><a class="print-link dfapi-viz-toolbar-medium print" href="javascript:void(0);">Print</a></li>
          <li rel="download" class="download">
            <a href="javascript:void(0);" class="download-link">Download</a>
            <div rel="download" class="download-link-options dwnld-opts">
              <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
              <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
              <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
              <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="country-chart-section-right chart-sections">
      <div id="map_render" class="map-div">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who gave birth before age 18 or 15</h2>
        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data_adolescent_prg' style="height:450px;margin-top:-15px"></div>
      </div>


      <div id="p-VO_9">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of women aged 20-24 who gave birth before age 18 or 15</h2>
        <!-- graph div -->
        <div class="graph flt_lft wid99 bar_chart graph_ay_adolescent_age_by_15 table_ay_adolescent_age_by_18_15" id="graph_adolescnt_prg" style="display:none"></div>
      </div>

    </div>

  </div>
</div>


<div id="sexual-reproductive-health-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Sexual & Reproductive Health</span>
  </div>
  <div class="section-indicators" id="sexual-reproductive-indicators">
    <ul id="tab1">

      <li class="first"><span><input type="radio" name="sexual-reproductive-indicators" id="" class="sr_have_knwldg_hiv_aids_age_by_18_15" value="perc_girl_age_15_19_have_knwldg_hiv_aids" checked="true"/><label class="label1">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</label></span></li>

      <li class="second"><span><input type="radio" name="sexual-reproductive-indicators" id="" class="sr_ever_had_all_girl_15_19" value="perc_female_ever_had_all_girl_15_19"/><label>Percentage of girls aged 15-19 who ever had sex</label></span></li>

      <li class="third"><span><input type="radio" name="sexual-reproductive-indicators" id="" class="sr_sexuly_active_all_girl_15_19" value="perc_female_sexuly_active_all_girl_15_19"/><label>Percentage of girls aged 15-19 who are sexually active</label></span></li>


      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</h2>
    <div class="country-chart-section-left chart-sections">


      <div id="chart-buttons-wrapper" class="clearfix">
        <button type="button" class="button map active" id="filter_sr_have_knwldg_hiv_aids_age_by_18_15" >Map</button>
        <button type="button" class="button graph" name="graphfiltr" id="graph_sr_have_knwldg_hiv_aids_age_by_18_15">Graph</button>
        <button type="button" class="button table graph_table" id="table_sr_have_knwldg_hiv_aids_age_by_18_15">Table</button>
      </div>


      <div id="filter-options-list">
        <ul class="square-input-element filter_sr_have_knwldg_hiv_aids_age_by_18_15">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-sr-indicator-filter" id="sr_age_by_15_24" value="perc_girl_age_15_19_have_knwldg_hiv_aids" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-sr-indicator-filter" id="sr_age_by_15_24" value="perc_girl_age_20_24_have_knwldg_hiv_aids"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element graphfilter graphfilter_sr_ever_had_all_girl_15_19" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-graph-ever-had-indicator-filter" id="sr_perc_female_sexuly_active" value="all_girl_15_19" checked="true" ><label> Total 15-19 year old girls</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-graph-ever-had-indicator-filter" id="sr_perc_female_sexuly_active" value="never-married_girl_15_19"><label> Never-married 15-19 year old girls</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element graphfilter graphfilter_sr_sexuly_active_all_girl_15_19" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-graph-sexuly-active-indicator-filter" id="sr_perc_female_sexuly_active" value="all_girl_15_19" checked="true" ><label> Total 15-19 year old girls</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-graph-sexuly-active-indicator-filter" id="sr_perc_female_sexuly_active" value="never-married_girl_15_19"><label> Never-married 15-19 year old girls</label></span></li>
        </ul>
      </div>

      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Sexually active</li>
          <li class="legend-data data-2">Ever had sex</li>
        </ul>
      </div>

      <div id="action-links" class="action-links-block">
        <ul class="action-link-list dfapi-viz-toolbar">
          <li class="full-view" rel="print"><a class="full-view-link fullscreen" href="javascript:void(0);">Full View</a></li>
          <li class="print" rel="print"><a class="print-link dfapi-viz-toolbar-medium print" href="javascript:void(0);">Print</a></li>
          <li rel="download" class="download">
            <a href="javascript:void(0);" class="download-link">Download</a>
            <div rel="download" class="download-link-options dwnld-opts">
              <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
              <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
              <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
              <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
            </div>
          </li>
        </ul>
      </div>


    </div>

    <div class="country-chart-section-right chart-sections">
      <div id="map_render_sexual_reprd" class="chart-map-block map-div">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</h2>
        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data_sexual_reprd' style="height:450px;"></div>
      </div>
      <div id="p-VO_17">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</h2>

        <!-- graph div -->
        <div class="graph chart_plc graph_sr_have_knwldg_hiv_aids_age_by_18_15 bar_chart table_sr_have_knwldg_hiv_aids_age_by_18_15"  style="display:none" id='graph_perc_female_have_knwldg_hiv_aids'></div>
      </div>

      <div id="p-VO_13">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</h2>
        <!-- graph download options -->
        <div class="clear dwnld_div box" style="display:none;">
          <div id="icon_bg" class="icns_img1">
            <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
            <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
            <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
            <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
          </div>
        </div>

        <!-- graph div -->
        <div class="graph clear chart_plc graph_sr_ever_had_all_girl_15_19 bar_chart table_sr_ever_had_all_girl_15_19 graph_sr_sexuly_active_all_girl_15_19 table_sr_sexuly_active_all_girl_15_19" id="graph_perc_female_sexuly_active" style="display:none"></div>
      </div>
    </div>

  </div>
</div>


<div id="family-planning-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Family Planning</span>
  </div>
  <div class="section-indicators" id="family-planning-indicators">
    <ul id="tab1">

      <li class="first"><span><input type="radio" name="family-planning-indicators" id="" class="fm_age_15_19_using_contrcptn_mthd" value="perc_mrd_girl_age_15_19_using_contrcptn_mthd" checked="true"/><label class="label1">Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</label></span></li>

      <li class="third"><span><input type="radio" name="family-planning-indicators" id="" class="fm_age_15_19_not_using_contrcptn_mthd" value="perc_mrd_girl_age_15_19_not_using_contrcptn_mthd"/><label>Percentage of currently married/in union females aged 15-24 who are not currently using any contraceptive method</label></span></li>

      <li class="fourth"><span><input type="radio" name="family-planning-indicators" id="" class="fm_age_15_19_unmet_need" value="perc_mrd_girl_age_15_19_hv_unmet_need_fml_pln"/><label>Percentage of currently married/in union females aged 15-24 who have an unmet need for family planning</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</h2>
    <div class="country-chart-section-left chart-sections">


      <div id="chart-buttons-wrapper" class="clearfix">
        <button type="button" class="button map active" id="filter_fm_age_15_19_using_contrcptn_mthd" >Map</button>
        <button type="button" class="button graph" name="graphfilter_fm_age_15_19_using_contrcptn_mthd" id="graph_fm_age_15_19_using_contrcptn_mthd">Graph</button>
        <button type="button" class="button table graph_table" id="table_fm_age_15_19_using_contrcptn_mthd">Table</button>
      </div>


      <div id="filter-options-list">
        <ul class="square-input-element filter_fm_age_15_19_using_contrcptn_mthd">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-fm-using-ctrcpn-indicator-filter" id="fm_using_ctrcpn_age_by_15_24" value="perc_mrd_girl_age_15_19_using_contrcptn_mthd" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-fm-using-ctrcpn-indicator-filter" id="fm_using_ctrcpn_age_by_15_24" value="perc_mrd_girl_age_20_24_using_contrcptn_mthd"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element graphfilter graphfilter_fm_age_15_19_using_contrcptn_mthd graphfilter_fm_age_15_19_using_mdrn_contrcptn_mthd graphfilter_fm_age_15_19_not_using_contrcptn_mthd" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-fm-graph-indicator-filter" id="fm_using_ctrcpn_age_by_15_19" value="girl_15_19" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-fm-graph-indicator-filter" id="fm_using_ctrcpn_age_by_20_24" value="girl_20_24"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element filter_fm_age_15_19_not_using_contrcptn_mthd" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-fm-not-using-ctrcpn-indicator-filter" id="fm_not_using_ctrcpn_age_by_15_19" value="perc_mrd_girl_age_15_19_not_using_contrcptn_mthd" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-fm-not-using-ctrcpn-indicator-filter" id="fm_not_using_ctrcpn_age_by_20_24" value="perc_mrd_girl_age_20_24_not_using_contrcptn_mthd"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element filter_fm_age_15_19_unmet_need" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-fm-unmet-need-indicator-filter" id="fm_unmet_need_age_by_15_24" value="perc_mrd_girl_age_15_19_hv_unmet_need_fml_pln" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-fm-unmet-need-indicator-filter" id="fm_unmet_need_age_by_15_24" value="perc_mrd_girl_age_20_24_hv_unmet_need_fml_pln"><label> age 20-24</label></span></li>
        </ul>
      </div>

      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Sexually active</li>
          <li class="legend-data data-2">Ever had sex</li>
        </ul>
      </div>

      <div id="action-links" class="action-links-block">
        <ul class="action-link-list dfapi-viz-toolbar">
          <li class="full-view" rel="print"><a class="full-view-link fullscreen" href="javascript:void(0);">Full View</a></li>
          <li class="print" rel="print"><a class="print-link dfapi-viz-toolbar-medium print" href="javascript:void(0);">Print</a></li>
          <li rel="download" class="download">
            <a href="javascript:void(0);" class="download-link">Download</a>
            <div rel="download" class="download-link-options dwnld-opts">
              <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
              <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
              <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
              <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
            </div>
          </li>
        </ul>
      </div>


    </div>

    <div class="country-chart-section-right chart-sections">
      <div id="map_render_family_planning" class="chart-map-block map-div">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</h2>
        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data_family_planning' style="height:450px;margin-top:-15px"></div>
      </div>

      <div id="p-VO_10">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</h2>
        <!-- graph div -->
        <div class="graph clear flt_lft wid99 bar_chart graph_fm_age_15_19_using_contrcptn_mthd graph_fm_age_15_19_using_mdrn_contrcptn_mthd graph_fm_age_15_19_not_using_contrcptn_mthd table_fm_age_15_19_using_contrcptn_mthd table_fm_age_15_19_using_mdrn_contrcptn_mthd table_fm_age_15_19_not_using_contrcptn_mthd" id='graph_perc_mrd_female_used_or_not_contrcptn' style="display:none"></div>
      </div>
      <div id="p-VO_11">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Percentage of currently married/in union females aged 15-24 who are currently using any contraceptive method</h2>
        <!-- graph div -->
        <div class="graph clear flt_lft wid99 bar_chart graph_fm_age_15_19_unmet_need table_fm_age_15_19_unmet_need" id='graph_perc_female_contrcptn_dmnd_unmet' style="display:none"></div>
      </div>

    </div>

  </div>
</div>

<div id="gender-equality-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Gender Equality</span>
  </div>
  <div class="section-indicators" id="gender-equality-indicators">
    <ul id="tab1">

      <li class="first"><span><input type="radio" name="gender-equality-indicators" id="" class="ge_age_15_24_take_contrcptn_desc" value="perc_girl_age_15_19_take_contrcptn_desc_byself_or_with_hsbnd" checked="true"/><label class="label1">Proportion of women 15-24 involved in decision making for contraceptive use</label></span></li>

      <li class="second"><span><input type="radio" name="gender-equality-indicators" id="" class="ge_age_15_24_take_own_hlth_desc" value="perc_girl_age_15_19_take_own_hlth_desc_byself_or_with_hsbnd"/><label>Proportion of women 15-24 involved in decision making for own health care</label></span></li>

      <li class="third"><span><input type="radio" name="gender-equality-indicators" id="" class="ge_age_15_24_contrcptn_dmnd_stsfd" value="perc_mrd_girl_age_15_19_contrcptn_dmnd_stsfd"/><label>Percentage of currently married/in union females aged 15-24 who have their contraception demand satisfied</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Proportion of women 15-24 involved in decision making for contraceptive use</h2>
    <div class="country-chart-section-left chart-sections">


      <div id="chart-buttons-wrapper" class="clearfix">
        <button type="button" class="button map active" id="filter_ge_age_15_24_take_contrcptn_desc" >Map</button>
        <button type="button" class="button graph" name="graphfiltr" id="graph_ge_age_15_24_take_contrcptn_desc">Graph</button>
        <button type="button" class="button table graph_table" id="table_ge_age_15_24_take_contrcptn_desc">Table</button>
      </div>


      <div id="filter-options-list">
        <ul class="square-input-element filter_ge_age_15_24_take_contrcptn_desc">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-ge-contrcptn-desc-indicator-filter" id="ge_age_by_15_19_contrcptn_desc" value="perc_girl_age_15_19_take_contrcptn_desc_byself_or_with_hsbnd" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-ge-contrcptn-desc-indicator-filter" id="sr_age_by_15_24_contrcptn_desc" value="perc_girl_age_20_24_take_contrcptn_desc_byself_or_with_hsbnd"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element filter_ge_age_15_24_take_own_hlth_desc" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-ge-own-hlth-descindicator-filter" id="sr_age_by_15_19_own_hlth_desc" value="perc_girl_age_15_19_take_own_hlth_desc_byself_or_with_hsbnd" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-ge-own-hlth-descindicator-filter" id="sr_age_by_15_24_own_hlth_desc" value="perc_girl_age_20_24_take_own_hlth_desc_byself_or_with_hsbnd"><label> age 20-24</label></span></li>
        </ul>
      </div>
      <div id="filter-options-list">
        <ul class="square-input-element filter_ge_age_15_24_contrcptn_dmnd_stsfd" style="display:none;">
          <li class="filter-option"><span><input class="first" type="radio" name="ay-ge-dmnd-stsfd-indicator-filter" id="sr_age_by_15_19_contrcptn_dmnd_stsfd" value="perc_mrd_girl_age_15_19_contrcptn_dmnd_stsfd" checked="true" ><label> age 15-19</label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-ge-dmnd-stsfd-indicator-filter" id="sr_age_by_15_24_contrcptn_dmnd_stsfd" value="perc_mrd_girl_age_20_24_contrcptn_dmnd_stsfd"><label> age 20-24</label></span></li>
        </ul>
      </div>

      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Sexually active</li>
          <li class="legend-data data-2">Ever had sex</li>
        </ul>
      </div>

      <div id="action-links" class="action-links-block">
        <ul class="action-link-list dfapi-viz-toolbar">
          <li class="full-view" rel="print"><a class="full-view-link fullscreen" href="javascript:void(0);">Full View</a></li>
          <li class="print" rel="print"><a class="print-link dfapi-viz-toolbar-medium print" href="javascript:void(0);">Print</a></li>
          <li rel="download" class="download">
            <a href="javascript:void(0);" class="download-link">Download</a>
            <div rel="download" class="download-link-options dwnld-opts">
              <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
              <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
              <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
              <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div class="country-chart-section-right chart-sections">
      <div id="map_render_gender_equality" class="chart-map-block map-div">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Proportion of women 15-24 involved in decision making for contraceptive use</h2>
        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data_gender_equality' style="height:450px;margin-top:-15px"></div>
      </div>
      <div id="p-VO_16">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Proportion of women 15-24 involved in decision making for contraceptive use</h2>
        <!-- graph div -->
        <div class="graph chart_plc bar_chart graph_ge_age_15_24_take_contrcptn_desc graph_ge_age_15_24_take_own_hlth_desc table_ge_age_15_24_take_contrcptn_desc table_ge_age_15_24_take_own_hlth_desc" id='graph_perc_female_take_contrcptn_desc_byself_or_with_hsbnd' style="display: none;"></div>
      </div>
      <div id="p-VO_12">
        <h2 class="dashboard-country-chart-section-title print-title" style="display: none;">Proportion of women 15-24 involved in decision making for contraceptive use</h2>
        <!-- graph div -->
        <div class="graph clear flt_lft wid99 bar_chart graph_ge_age_15_24_contrcptn_dmnd_stsfd table_ge_age_15_24_contrcptn_dmnd_stsfd" id='graph_perc_female_contrcptn_dmnd_met' style="display: none;"></div>
      </div>
    </div>

  </div>
</div>


<div id="dashboard-country-detail-bottom-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">
      Dashboards available for <?php echo $country_name; ?>   </span>
  </div>
  <div class="dashboard-country-detail-section-content clearfix">
    <ul class="clearfix">
      <li class="list-row transparency-portal-list-row">
        <?php $country_name = strtolower($country_name); ?>
        <a href="<?php echo '/transparency-portal/unfpa-' . $country_name ?>">
          <span class="country-dashboard-icons transparency-portal-icon"></span>
          <span class="country-dashboard-portal-title">Transparency Portal</span>
        </a>
      </li>
      <li class="list-row midwifery-dashboard-list-row">
        <a href="<?php echo '/sowmy/' . $country_code; ?>">
          <span class="country-dashboard-icons midwifery-icon"></span>
          <span class="country-dashboard-portal-title">Midwifery Dashboard</span>
        </a>
      </li>
      <li class="list-row adolescent-youth-dashboard-list-row">
        <a href="<?php echo '/data/dashboard/adolescent-youth/' . $country_code; ?>">
          <span class="country-dashboard-icons adolescent-youth-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">Adolescent and Youth Dashboard</span>
        </a>
      </li>
      <li class="list-row family-planning-dashboard-list-row">
        <a href="/data/dashboard/family-planning">
          <span class="country-dashboard-icons family-planning-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">Family Planning Dashboard</span>
        </a>
      </li>
      <li class="list-row population-projection-list-row">
        <a href="/data/dashboard/population-projection">
          <span class="country-dashboard-icons population-projection-icon"></span>
          <span class="country-dashboard-portal-title">Population Projection</span>
        </a>
      </li>
      <li class="list-row world-population-dashboard-list-row">
        <a href="<?php echo '/world-population-dashboard/' . $country_code; ?>">
          <span class="country-dashboard-icons world-population-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">World Population Dashboard</span>
        </a>
      </li>
    </ul>
  </div>
</div>



<div class="graph flt_lft" id="graph_part_resd_household_adolescnt" style="display:none;" ></div>

<div class="graph flt_lft" id='graph_mrtl_status_adolescnt' style="display:none;" ></div>

<div class="graph flt_lft"  id='graph_schl_atnd_adolescnt_female' style="display:none;" ></div>

<div class="graph flt_lft" id='graph_schl_atnd_adolescnt_male' style="display:none;" ></div>

<div class="graph flt_lft" id='graph_mrtl_status_adolescnt1' style="display:none;" ></div>


<svg id="legendContainer" class="highcharts-container"></svg>
