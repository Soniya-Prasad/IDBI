<!--<h1 id="page-title" class="title">Adolescents and Youth Dashboard - Nepal</h1>-->
<div class="dashboard-country-wrapper adolescents-youth-dashboard-country-wrapper clearfix">
  <span class="dashboard-icon adolescents-youth-dashboard"></span>
  <div class="dashboard-country-download-profile-block">
    <span class="download-profile-text">Download the Profile to see full set of data</span>
    <div class="download-button-block">
      <a class="download-icon-text-button" href="#" target="_blank">Download PDF</a>
      <a class="download-content-langauge-button" href="#" target="_blank">English</a>
    </div>
  </div>
</div>

<div id="population-distribution-section" class="dashboard-country-outer-box">
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
        <div class="mrgn_top20" id ='table_ppl_dstrbtn_resd_regn_tabledata'></div>
        <div class="mrgn_top10 clr_blu fnt12" style=" margin-bottom:14px !important;">Source: <span id='ppl_source_nm'>World Population Prospects, 2012 Revision</span></div>
      </div>
    </div>
  </div>
</div>

<div id="child-marriage-section" class="dashboard-country-outer-box">
  <div class="dashboard-section-title">
    <span class="section-title">Child Marriage</span>
  </div>
  <div class="section-indicators child-marriage-indicators">
    <ul style="display: block;" id="tab1">

      <li class="first"><span><input type="radio" name="ay-indicator" class="cm_age_by_18_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true"/><label class="label1">Percentage of women aged 20-24 who got married before age 18 or 15</label></span></li>

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

      <div id="chart-buttons-wrapper">
        <button type="button" class="button map">Map</button>
        <button type="button" class="button graph">Graph</button>
        <button type="button" class="button table">Table</button>
      </div>

      <div id="filter-options-list">
        <ul id="cm_age_by_18_15" class="square-input-element">
          <li class="filter-option"><span><input type="radio" name="ay-indicator-filter" id="cm_age_by_15" value="perc_girl_age_20_24_mrd_bfr_15" checked="true" ><label>before age 15</label></span></li>
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

      <div class="dfapi-viz-toolbar-icons opened chart-sction-tab-wrapper">
        <div class="toolbar-bg">
          <ul rel="MO1" class="dfapi-viz-toolbar" id="dfa_toolbar_MO1">
            <li rel="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print">Print</i></a></li>
            <li rel="MO1" class="dwnld-option-li">
              <a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
              <div rel="download" class="dwnld-opts">
                <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="country-chart-section-right chart-sections">
      <div id="map_render">
        <!-- graph download options -->
        <div class="clear dwnld_div box">
          <div id="icon_bg" class="icns_img1">

            <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
          </div>
        </div>

        <!-- graph div -->
        <div class="map_part" id='map_area_indicator_data' style="height:450px;margin-top:-15px"></div>
      </div>
    </div>

  </div>
</div>

<div id="adolescent-pregnancy-section" class="dashboard-country-outer-box">
  <div class="dashboard-section-title">
    <span class="section-title">Adolescent pregnancy</span>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Percentage of women aged 20-24 who gave birth before age 18 or 15</h2>
    <div class="country-chart-section-left chart-sections">

      <div id="chart-buttons-wrapper">
        <button type="button" class="button map">Map</button>
        <button type="button" class="button graph">Graph</button>
        <button type="button" class="button table">Table</button>
      </div>

      <div id="filter-options-list" style="display:none">
        <ul id="sel_ppl_dstrbtn_resd_regn_radio" class="square-input-element">
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" checked="true" value="<?php echo $data['GIRL_AGE_GRP_10_14']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_10_14_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['GIRL_AGE_GRP_15_19']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_15_19_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['GIRL_AGE_GRP_20_24']; ?>"/><label><?php echo $data['SEX_GIRL'] . ' ' . strtolower($data['AGE_GRP_20_24_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_10_14']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_10_14_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_15_19']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_15_19_DSP_TRM']); ?></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="fm_using_contrcptn_mthd_15_24" value="<?php echo $data['BOY_AGE_GRP_20_24']; ?>"/><label><?php echo $data['SEX_BOY'] . ' ' . strtolower($data['AGE_GRP_20_24_DSP_TRM']); ?></label></span></li>
        </ul>
      </div>

      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Give birth by age 15</li>
          <li class="legend-data data-2">Give birth by age 18</li>
        </ul>
      </div>

      <div class="clear dwnld_div box chart-sction-tab-wrapper">
        <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
          <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
          <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
          <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
        </div>
      </div>

    </div>

    <div class="country-chart-section-right chart-sections">
      <div class="graph flt_lft wid99" id="graph_adolescnt_prg"></div>
    </div>

  </div>
</div>


<div id="sexual-reproductive-health-section" class="dashboard-country-outer-box">
  <div class="dashboard-section-title">
    <span class="section-title">Sexual & Reproductive Health</span>
  </div>
  <div class="section-indicators sexual-reproductive-indicators">
    <ul id="tab1">

      <li class="first"><span><input type="radio" name="sexual-reproductive-indicators" id="" value="" checked="true"/><label class="label1">Sexual activity among 15-19 year old girls(percent)</label></span></li>

      <li class="second"><span><input type="radio" name="sexual-reproductive-indicators" id="" value=""/><label>Age difference women and current husband/cohabiting partner, among female aged 15-24(percent)</label></span></li>

      <li class="third"><span><input type="radio" name="sexual-reproductive-indicators" id="" value=""/><label>Percentage of 15-24 year old females who think that wife beating is justified under at least one condition</label></span></li>

      <li class="third"><span><input type="radio" name="sexual-reproductive-indicators" id="" value=""/><label>Percentage of currently married women age 15-24 who usually make decisions regarding contraceptive use either by themselves or jointly with their husbands</label></span></li>

      <li class="third"><span><input type="radio" name="sexual-reproductive-indicators" id="" value=""/><label>Percentage of females aged 15-24 who have comprehensive knowledge of HIV/AIDS</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <h2 class="dashboard-country-chart-section-title">Sexual activity among 15-19 year old girls(percent)</h2>
    <div class="country-chart-section-left chart-sections">
      <div class="dropdown">
        <div class="mrgn_ryt5 flt_lft pad3 clr_blu" id="mrtl_st"> Marital Status</div>
        <div class="flt_lft dsk-lis">
          <select name="sel_perc_female_sexuly_active" id="sel_perc_female_sexuly_active" tabindex="1" >
            <option value="all_girl_15_19">total 15-19 year old girls</option>
            <option value="never-married_girl_15_19">never-married 15-19 year old girls</option>
          </select>
        </div>
      </div>

      <div id="chart-buttons-wrapper">
        <button type="button" class="button map">Map</button>
        <button type="button" class="button graph">Graph</button>
        <button type="button" class="button table">Table</button>
      </div>

      <div id="filter-options-list" style="display:none">
        <ul id="sel_ppl_dstrbtn_resd_regn_radio" class="square-input-element">
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="" checked="true" value=""/><label></label></span></li>
          <li class="filter-option"><span><input type="radio" name="ay-pie-chart-filter" id="" value=""/><label></label></span></li>
        </ul>
      </div>

      <div id="legend" class="legend-block">
        <span class="filters-title">Legend</span>
        <ul>
          <li class="legend-data data-1">Sexually active</li>
          <li class="legend-data data-2">Ever had sex</li>
        </ul>
      </div>

      <div class="clear dwnld_div box chart-sction-tab-wrapper">
        <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
          <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
          <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
          <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
        </div>
      </div>

    </div>

    <div class="country-chart-section-right chart-sections">
      <div class="graph clear chart_plc " id='graph_perc_female_sexuly_active'></div>
    </div>

  </div>
</div>


<!--Bar chart 1-->
<!--Second  section ...starts-->
<div class="item opened">
  <span class="prSpan">Parental Residence in Household among Adolescents aged 10-14</span>
  <div class="conteudo">
    <div class="CO1 half-box">

      <!-- graph select option -->
      <div class="dropdown">
        <div class="mrgn_ryt5 flt_lft pad3 clr_blu"> Sex</div>
        <div class="flt_lft dsk-lis">
          <select name="sel_part_resd_household_adolescnt" id="sel_part_resd_household_adolescnt" tabindex="1" >
            <option value="<?php echo $data['GIRL_AGE_GRP_10_14']; ?>"><?php echo $data['SEX_GIRL']; ?></option>
            <option value="<?php echo $data['BOY_AGE_GRP_10_14']; ?>"><?php echo $data['SEX_BOY']; ?></option>
          </select>
        </div>


      </div>

      <!-- Fullscreen menu buttons(close and print) -->
      <div class="BoxClose">


        <!-- graph download options -->
        <div id="p-VO_2">

          <!-- normal menu buttons(export, print, table) -->
          <div class="clear dwnld_div box" style="margin-top:3px ">
            <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
              <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
              <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
              <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
              <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
            </div>
          </div>
          <!-- graph div -->
          <div class="graph flt_lft" id="graph_part_resd_household_adolescnt" ></div>
        </div>
      </div>
      <span class="mrSpan">Marital Status among Adolescent Girls aged 15-24</span>
      <!--MARITAL STATUS-->
      <div class="CO1 half-box right-box">

        <!-- graph select option -->
        <div class="dropdown">
          <div class="mrgn_ryt5 flt_lft pad3 clr_blu">Age Group</div>
          <div class="flt_lft dsk-lis">
            <select name="sel_mrtl_status_adolescnt" id="sel_mrtl_status_adolescnt" tabindex="1" >
              <option value="<?php echo $data['GIRL_AGE_GRP_15_19']; ?>"><?php echo $data['AGE_GRP_15_19_DSP_TRM']; ?></option>
              <option value="<?php echo $data['GIRL_AGE_GRP_20_24']; ?>"><?php echo $data['AGE_GRP_20_24_DSP_TRM']; ?></option>
            </select>
          </div>


        </div>



        <div id="p-VO_3">
          <!-- graph download options -->
          <div class=" clear dwnld_div box">

          </div>
          <!-- normal menu buttons(export, print, table) -->
          <div class="clear dwnld_div box" style="margin-top:3px ">
            <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
              <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
              <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
              <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
              <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
            </div>
          </div>
          <!-- graph div -->
          <div class="graph flt_lft" id='graph_mrtl_status_adolescnt' ></div>

        </div>
      </div>
    </div>
  </div>
  <!--second  section ...ends-->

  <!--Bar chart 2 start-->
  <div class="item opened ">
    School Attendance among Adolescents aged 10-19
    <div class="clearfix">
      <div class="columnleft">
        <div class="CO2">
          <div class="dropdown">
            <div class="mrgn_ryt5 flt_lft pad3 clr_blu">Girls</div>
            <div class="flt_lft dsk-lis">
              <select name="sel_schl_atnd_adolescnt_female" id="sel_schl_atnd_adolescnt_female" id='sel_schl_atnd_adolescnt_female' tabindex="1" >
                <option value="<?php echo $data['GIRL_AGE_GRP_10_14']; ?>"><?php echo $data['AGE_GRP_10_14_DSP_TRM']; ?></option>
                <option value="<?php echo $data['GIRL_AGE_GRP_15_19']; ?>"><?php echo $data['AGE_GRP_15_19_DSP_TRM']; ?></option>
              </select>
            </div>


          </div>



          <div id="p-VO_5">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph flt_lft"  id='graph_schl_atnd_adolescnt_female'></div>
          </div>
        </div>
      </div>

      <div class="columnright">
        <div class="CO2">
          <div class="dropdown">
            <div class="mrgn_ryt5 flt_lft pad3 clr_blu">Boys</div>
            <div class="flt_lft dsk-lis">
              <select name="sel_schl_atnd_adolescnt_male" id="sel_schl_atnd_adolescnt_male" tabindex="1" >
                <option value="<?php echo $data['BOY_AGE_GRP_10_14']; ?>"><?php echo $data['AGE_GRP_10_14_DSP_TRM']; ?></option>
                <option value="<?php echo $data['BOY_AGE_GRP_15_19']; ?>"><?php echo $data['AGE_GRP_15_19_DSP_TRM']; ?></option>
              </select>
            </div>


          </div>



          <div id="p-VO_7">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph flt_lft" id='graph_schl_atnd_adolescnt_male'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--bar chart 2 end-->
<!--bar chart 3 start-->
<div class="item opened ">
  Adolescent Marriage and Adolescent Pregnancy
  <div class="conteudo">
    <div class="clearfix">
      <div class="columnleft">
        <div class="CO3">
          <h2>Percentage of women aged 20-24 who got married before age 18/15</h2>



          <div id="p-VO_8">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph flt_lft wid99" id="graph_adolescnt_mrg"></div>
          </div>
        </div>

      </div>


    </div>
  </div>
</div>
<!--bar chart 3 end-->
<div class="graph clear flt_lft" id='graph_mrtl_status_adolescnt1'></div>
Family planning
<div class="flt_lft dsk-lis">
  <select name="sel_perc_mrd_female_used_or_not_contrcptn" id='sel_perc_mrd_female_used_or_not_contrcptn' tabindex="1">
    <option value="<?php echo $data['GIRL_AGE_GRP_15_19']; ?>"><?php echo $data['AGE_GRP_15_19_DSP_TRM']; ?></option>
    <option value="<?php echo $data['GIRL_AGE_GRP_20_24']; ?>"><?php echo $data['AGE_GRP_20_24_DSP_TRM']; ?></option>
  </select>
</div>
Percentage of currently married/in union females who currently using/not currently using contraception
<div id="p-VO_10">
  <!-- graph download options -->
  <div class="clear dwnld_div box">
    <div id="icon_bg" class="icns_img1">
      <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
      <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
      <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
      <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
    </div>
  </div>

  <!-- graph div -->
  <div class="graph clear flt_lft wid99" id='graph_perc_mrd_female_used_or_not_contrcptn'></div>
</div>
Percentage of currently married/in union females aged 15-24 who have an unmet need for family planning
<div id="p-VO_11">
  <!-- graph download options -->
  <div class="clear dwnld_div box">
    <div id="icon_bg" class="icns_img1">
      <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
      <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
      <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
      <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
    </div>
  </div>

  <!-- graph div -->
  <div class="graph clear flt_lft wid99" id='graph_perc_female_contrcptn_dmnd_unmet'></div>
</div>
Percentage of currently married/in union females aged 15-24 who have their contraception demand satisfied
<div id="p-VO_12">
  <!-- graph download options -->
  <div class="clear dwnld_div box">
    <div id="icon_bg" class="icns_img1">
      <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
      <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
      <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
      <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
    </div>
  </div>

  <!-- graph div -->
  <div class="graph clear flt_lft wid99" id='graph_perc_female_contrcptn_dmnd_met'></div>
</div>



Age difference between women and current husband/cohabiting partner, among female aged 15-24 (percent)
<div id="p-VO_14">
  <!-- graph download options -->
  <div class="clear dwnld_div box">
    <div id="icon_bg" class="icns_img1">
      <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
      <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
      <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
      <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
    </div>
  </div>

  <!-- graph div -->
  <div class="graph clear chart_plc" id='graph_perc_age_diff_btwn_female_and_partnr'></div>
</div>

<!--last bar -->
<div class="item opened ">
  Women's Empowerment and HIV/AIDS Knowledge
  <div class="conteudo">
    <div class="clearfix">

      <div class="CO6">
        <div class="flt_lft wid31 marg_ryt mrgn_top10">
          <h2 style="height:70px"> Percentage of 15-24 year old females who think that wife beating is justified under at least one condition</h2>



          <div id="p-VO_15">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph chart_plc" id='graph_perc_wife_think_beating_jusfd'></div>
          </div>
        </div>

        <div class="flt_lft wid31 marg_ryt mrgn_top10">
          <h2 style="height:70px">Percentage of currently married women age 15-24 who usually make decisions regarding contraceptive use either by themselves or jointly with their husbands</h2>



          <div id="p-VO_16">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph chart_plc" id='graph_perc_female_take_contrcptn_desc_byself_or_with_hsbnd'></div>
          </div>
        </div>

        <div class="flt_lft wid31 marg_ryt mrgn_top10">
          <h2 style="height:70px;">Percentage of females aged 15-24 who have comprehensive Knowledge of HIV/AIDS</h2>


          <div id="p-VO_17">

            <!-- normal menu buttons(export, print, table) -->
            <div class="clear dwnld_div box" style="margin-top:3px ">
              <div id="icon_bg" class="icns_img1" style="margin-right:60px;">
                <a href="javascript:void('0');" class="icon_three" title="Table" alt="Table">Table</a>
                <a href="javascript:void('0');" class="icon_four" title="Fullscreen" alt="Fullscreen">Fullscreen</a>
                <a href="javascript:void('0');" class="icon_one" title="Print" alt="Print">Print</a>
                <a href="javascript:void('0');" class="icon_two" title="Download" alt="Download">Download</a>
              </div>
            </div>
            <!-- graph div -->
            <div class="graph chart_plc" id='graph_perc_female_have_knwldg_hiv_aids'></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
