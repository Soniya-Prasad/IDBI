<script src="https://code.jquery.com/jquery-3.0.0.js"></script>
<script src="https://code.jquery.com/jquery-migrate-3.0.0.js"></script>
<!--<h1 class="left">Female Genital Mutilation Dashboard</h1>-->
<h1 id="page-title" class="title custom-page-title">FGM Dashboard - <?php echo $country_name; ?></h1>
<div class="dashboard-country-wrapper fgm-dashboard-country-wrapper clearfix">
  <span class="dashboard-icon fgm-dashboard-icon"></span>
  <div class="dashboard-country-download-profile-block">
    <span class="download-profile-text">Download the Profile to see full set of data</span>
    <div class="download-button-block">
      <a class="download-icon-text-button" href="#" target="_blank">Download PDF</a>
      <a class="download-content-langauge-button" href="#" target="_blank">English</a>
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
          <?php foreach ($areaList['areaIDNameArr'] as $fgm_country_code => $fgm_country_name): ?>
            <li><a href="/data/fgm/<?php print $fgm_country_code; ?>"> <?php print $fgm_country_name; ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
  <span class="info"><?php print t('Click on a country or territory or select from drop down list') ?></span>
</div>

<div id="fgm-overview-section" class="dashboard-country-outer-box fgm-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Overview</span>
  </div>
  <div class="section-indicators" id="fgm-overview-indicators">
    <ul style="display: block;" id="tab1">

      <li class="first active"><span><input type="radio" name="fgm-overview-indicator" class="" id="levels" value="" checked="true"/><label class="label1">Levels</label></span></li>

      <li class="second"><span><input type="radio" name="fgm-overview-indicator" class="" id="age" value=""/><label>Age</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section levels chart clearfix">
    <div id="chart-buttons-wrapper" class="clearfix">
      <button type="button" class="button map active" id="overview-map-section" >Map</button>
      <button type="button" class="button graph" id="overview-chart-section">Graph</button>
      <button type="button" class="button table graph_table" id="overview-chart-section">Table</button>
    </div>
    <div class="overview-map-section overview-section">
      <h2 class="dashboard-country-chart-section-title"><span class="title-bold-text fgm-dashboard-color">27%</span> of women aged 15-49 in Nigeria have undergone some form of FGM</h2>
      <!--      <div class="three-column-wrapper clearfix">-->
      <div class="two-column-wrapper clearfix">
        <!--        <div class="country-chart-left-section first-column chart-sections">
                            <div id="legend" class="legend-block">
                              <span class="filters-title">Legend</span>
                              <ul>
                                <li class="legend-data data-1">24.7 - 36.0</li>
                                <li class="legend-data data-2">36.1 - 47.2</li>
                                <li class="legend-data data-3">47.3 - 58.5</li>
                                <li class="legend-data data-4">58.6 and More</li>
                              </ul>
                            </div>
                </div>-->

        <!--        <div class="country-chart-middle-section middle-column chart-sections">-->
        <div class="country-chart-left-section first-column chart-sections">
          <div class="conteudo">
            <div class="clearfix">
              <!--              <div class="dfapi_hcnav_medium_map_icons" style="display:none;">

                              <div class="dfapi_hcnav_big zoomin">
                                <i class="map-sprite icon-zoom-in">Zoom in</i>
                              </div>
                              <div class="dfapi_hcnav_big zoomout">
                                <i class="map-sprite icon-zoom-out">Zoom out</i>
                              </div>
                              <div class="dfapi_hcnav_big fulextend">
                                <i class="map-sprite icon-full">Original</i></i>
                              </div>
                            </div>-->
              <div id ="map_render" class="columnleft">
                <span class="map-print-title" style="display: none;">FGM Dashboard - <?php echo $country_name; ?></span>
                <span class="map-print-subtitle" style="display: none;">27% of women aged 15-49 in Nigeria have undergone some form of FGM</span>
                <div class="columnleft map_div" id="mapDivId" style="height: 324px;">
                </div>
                      <!--                <span class="map-title" style="display:none;">27% of women aged 15-49 in Nigeria have undergone some form of FGM</span>-->
                <!--map icons-->
                <!--                <div id="action-links" class="action-links-block dfapi-viz-toolbar-icons mapDivId">
                                  <ul rel="MO1" class="action-link-list dfapi-viz-toolbar" id="dfa_toolbar_MO1">
                                    <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                                    <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                                    <li rel="print" class="print"><a href="javascript:void(0);" title="Print"><i class="dfapi-viz-toolbar-medium print">Print</i></a></li>
                                    <li rel="MO1" class="download dwnld-option-li">
                                      <a class="download-link" href="javascript:void(0);" title="Download"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                                      <div rel="download" class="download-link-options dwnld-opts">
                                        <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                                        <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                                        <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                                        <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>-->
              </div>
              <div id="graphCO16" class="parent_div" style="position:relative;display:none;">
                <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                               <a href="#" class="icon_tbl_fs" title="Table"></a>
                              <a href="#" class="icon_three" title="Print"></a>
                              <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                               <a href="#" class="icon_close" title="Close"></a>
                              <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
                     </div>-->
                <div class="bdrcls" id="CO16"></div>

                <!-- <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-10px;right:2px;">
                   <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                   <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                   <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                   <a href="javascript:void(0)" class="icon_four"></a>
                 </div>-->
              </div>
              <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
                <ul rel="MO1" class="action-link-list" id="">
                  <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
<!--                  <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>-->
                  <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                  <li rel="MO1" class="download dwnld-option-li">
                    <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
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

          </div>
        </div>

        <!--        <div class="country-chart-right-section last-column chart-sections">-->
        <div class="country-chart-right-section last-column chart-sections">
          <!--        <div class="columnright">-->
          <table class="table">
            <thead>
              <tr>
                <th colspan="3" class="" align="left">Key Indicators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Population size, female age 15-49 (in thousands), 2012</td>
                <td id="ind_val1">19,920</td>
                <td id="src1">World Population Prospects 2012</td>
              </tr>
              <tr>
                <td>Prevalence of FGM among women 15-49 (%)</td>
                <td id="ind_val2">74</td>
                <td id="src2">DHS 2005</td>
              </tr>
              <tr>
                <td>Prevalence of FGM among girls 15-19 (%) </td>
                <td id="ind_val3">74</td>
                <td id="src3">DHS 2005</td>
              </tr>
              <tr>
                <td>Ethnic group with the highest prevalence in the country (%)</td>
                <td id="ind_val4">74</td>
                <td id="src4">DHS 2005</td>
              </tr>
              <tr>
                <td>Existence of national policies and laws banning FGM; Year passed</td>
                <td id="ind_val5">74</td>
                <td id="src5">DHS 2005</td>
              </tr>
            </tbody>
          </table>
          <div id="spcl_text" style="font-size:11px;color: #808080;">*Later dates reflect amendments to the original law or new laws</div>
          <!--        </div>-->
        </div>

      </div>
    </div>



  </div>
  <div class="dashboard-section-content dashboard-country-chart-section age chart clearfix" style="display: none;">
    <div class="two-column-wrapper clearfix">
      <div class="country-chart-left-section first-column chart-sections">
        <div class="conteudo">
          <div class="repitem half-box">
            <p style="min-height:80px;"><span id="div9" class="txt_hgt" style="width:90%; min-height:110px;font-size: 12px;"></span></p>
            <div id="graphCO8" class="parent_div"  style="position:relative;">
              <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                     <a href="#" class="icon_tbl_fs" title="Table"></a>
                     <a href="#" class="icon_three" title="Print"></a>
                     <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                     <a href="#" class="icon_close" title="Close"></a>
                     <img src="<?php //echo IMG_PATH;                                                                                             ?>close.gif" alt="close" title="close"/>
            </div>-->
              <div class="bdrcls" id="CO8"></div>
              <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
                <ul class="action-link-list" id="">
                  <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                  <li rel="table" class="table"><a href="javascript:void(0);" class="icon_one" title="Table">Table</a></li>
                  <li rel="print" class="print"><a href="javascript:void(0);" class="icon_three" title="Print">Print</a></li>
                  <li class="download dwnld-option-li">
                    <a class="download-link" href="javascript:void(0);" title="Download">Download</a>
                    <div rel="download" class="download-link-options grapTypesMenu rnded_crnrs smlBox">
                      <a id="png" type="png" href="javascript:void(0);" class="export export_icons">PNG </a>
                      <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export export_icons">JPEG </a>
                      <a id="svg" type="svg" href="javascript:void(0);" class="export export_icons">SVG </a>
                      <a id="pdf" type="pdf" href="javascript:void(0);" class="export export_icons">PDF </a>
                    </div>
                  </li>
                </ul>
              </div>
              <!--<div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
                                    <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                                    <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                                    <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                                    <a href="javascript:void(0)" class="icon_four"></a>
                                  </div>-->
            </div>
          </div>



        </div>
      </div>
      <div class="country-chart-right-section last-column chart-sections">
        <div class="overview-chart-section overview-section conteudo">
          <div class="repitem">
            <h2 class="dashboard-country-chart-section-title">FGM among Young Girls</h2>
            <p><span id="div7" class="txt_hgt" style=" width:95%; min-height:auto; font-size: 12px;"></span><br/>
              <span id="div8" class="txt_hgt" style=" width:90%; height:auto;font-size: 12px;"></span></p>
            <div id="graphCO7" class="parent_div"  style="position:relative;">
              <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                      <a href="#" class="icon_tbl_fs" title="Table"></a>
                      <a href="#" class="icon_three" title="Print"></a>
                      <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                      <a href="#" class="icon_close" title="Close"></a>
                      <img src="<?php //echo IMG_PATH;                                                                                             ?>close.gif" alt="close" title="close"/>

             </div>-->
              <div class="bdrcls" id="CO7"></div>
              <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
                <ul rel="MO1" class="action-link-list" id="">
                  <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                  <li rel="table" class="table"><a href="javascript:void(0);" class="icon_one" title="Table">Table</a></li>
                  <li rel="print" class="print"><a href="javascript:void(0);" class="icon_three" title="Print">Print</a></li>
                  <li rel="MO1" class="download dwnld-option-li">
                    <a class="download-link" href="javascript:void(0);" title="Download">Download</a>
                    <div rel="download" class="download-link-options grapTypesMenu rnded_crnrs smlBox">
                      <a id="png" type="png" href="javascript:void(0);" class="export export_icons">PNG </a>
                      <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export export_icons">JPEG </a>
                      <a id="svg" type="svg" href="javascript:void(0);" class="export export_icons">SVG </a>
                      <a id="pdf" type="pdf" href="javascript:void(0);" class="export export_icons">PDF </a>
                    </div>
                  </li>
                </ul>
              </div>
              <!--              <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-19px;right:0px;">
                              <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                              <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                              <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                              <a href="javascript:void(0)" class="icon_four"></a>
                            </div>-->
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

<div id="fgm-projections-trends-section" class="dashboard-country-outer-box fgm-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Projections and trends</span>
  </div>
  <div class="section-indicators" id="fgm-projection-trends-indicators">
    <ul style="display: block;" id="tab1">

      <li class="first active"><span><input type="radio" name="fgm-projection-trends-indicator" class="" id="projections" value="" checked="true"/><label class="label1">Projections</label></span></li>

      <li class="second"><span><input type="radio" name="fgm-projection-trends-indicator" class="" id="trends" value=""/><label>Trends</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section projections chart clearfix">
    <div class="two-column-wrapper clearfix">
      <div class="country-chart-left-section first-column chart-sections">
        <div class="item ">

          <div class="conteudo">
            <div class="clearfix">
              <div class="columnleft">
                <div class="repitem"> <span class=""></span>
                  <p><div id="div4"  class="dashboard-country-chart-section-sub-title txt_hgt" style=" width:90%; min-height:65px">To meet the target of reducing FGM rate by half, more resources are needed</div></p>
                </div>

                <div id="graphCO3" class="parent_div"  style="position:relative;">
                  <h2 class="box_title"></h2>
                  <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                          <a href="#" class="icon_tbl_fs" title="Table"></a>
                          <a href="#" class="icon_three" title="Print"></a>
                          <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                          <a href="#" class="icon_close" title="Close"></a>
                          <img src="<?php //echo IMG_PATH;                                                                                             ?>close.gif" alt="close" title="close"/>
                 </div>-->
                  <div class=" mrgn_top10 bdrcls" id="CO3"></div>
                  <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
                    <ul rel="MO1" class="action-link-list" id="">
                      <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                      <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                      <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                      <li rel="MO1" class="download dwnld-option-li">
                        <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                        <div rel="download" class="download-link-options dwnld-opts">
                          <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                          <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                          <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                          <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--                  <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-19px;right:0px;">
                                      <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                                      <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                                      <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                                      <a href="javascript:void(0)" class="icon_four"></a>
                                    </div>-->
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="country-chart-right-section last-column chart-sections">
        <div class="columnright">
          <div class="repitem">
            <p></span><div id="div5" class="dashboard-country-chart-section-sub-title txt_hgt" style=" width:90%; min-height:65px;">If present trends continue, 285,000 girls born between 2010-2015 will experience FGM by 2030 </div></p>
          </div>


          <div id="graphCO4" class="parent_div"  style="position:relative;">

            <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
           <a href="#" class="icon_tbl_fs" title="Table"></a>
           <a href="#" class="icon_three" title="Print"></a>
           <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
            <a href="#" class="icon_close" title="Close"></a>
            <img src="<?php //echo IMG_PATH;                                                                                             ?>close.gif" alt="close" title="close"/>
    </div>-->
            <div class=" mrgn_top10 bdrcls" id="CO4"></div>
            <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
              <ul rel="MO1" class="action-link-list" id="">
                <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                <li rel="MO1" class="download dwnld-option-li">
                  <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                  <div rel="download" class="download-link-options dwnld-opts">
                    <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                    <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                    <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                    <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                  </div>
                </li>
              </ul>
            </div>
            <!--            <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-19px;right:0px;">
                          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                          <a href="javascript:void(0)" class="icon_four"></a>
                        </div>-->
          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="dashboard-section-content dashboard-country-chart-section trends chart clearfix" style="display: none;">
    <div class="columnleft">
      <div class="repitem">
        <h2 class="dashboard-country-chart-section-title leftarrow" id="dntRemv">Trends</h2>
        <p><div id="div2" class="dashboard-country-chart-section-sub-title">Prevalence of FGM has increased by 5% between 2006 and 2010; FGM is less common among girls 15-19 than women 45-49</div></p>
      </div>

      <div id="graphCO1" class="parent_div" style="position:relative;">
        <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                <a href="#" class="icon_tbl_fs" title="Table"></a>
                <a href="#" class="icon_three" title="Print"></a>
                <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                <a href="#" class="icon_close" title="Close"></a>
               <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
       </div>-->
        <div class="bdrcls" id="CO1" style="height:431px;" ></div>
        <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
          <ul rel="MO1" class="action-link-list" id="">
            <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
            <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
            <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
            <li rel="MO1" class="download dwnld-option-li">
              <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
              <div rel="download" class="download-link-options dwnld-opts">
                <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
              </div>
            </li>
          </ul>
        </div>
        <!--        <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-10px;right:0px;">
                  <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                  <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                  <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                  <a href="javascript:void(0)" class="icon_four"></a>
                </div>-->
      </div>

    </div>

  </div>
</div>

<div id="fgm-inequalities-opposition-section" class="dashboard-country-outer-box fgm-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Inequalities and opposition</span>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section clearfix">
    <!--    <div id="content-inside-top-wrapper" class="content-inside-top-filter-holder clearfix">


                <div id="legend" class="legend-block neighbour-blocks">
                  <span class="filters-title">Legend</span>
                  <ul>
                    <li class="legend-data data-1">DHS 2008</li>
                    <li class="legend-data data-2">MICS 2011</li>
                  </ul>
                </div>
        </div>-->
    <div class="two-column-wrapper clearfix">
      <div class="country-chart-left-section first-column chart-sections">
        <div class="country-inside-top-filter-section">
          <div id="filter-options-list" class="neighbour-blocks">
            <span class="filters-title">Filter</span>
            <ul class="square-input-element" id="filter_inequalities_opposition">
              <li class="filter-option"><span><input class="first" type="radio" name="fgm-inequality-op-indicator-filter" id="" value="residence" checked="true" ><label> Residence</label></span></li>
              <li class="filter-option"><span><input type="radio" name="fgm-inequality-op-indicator-filter" id="" value="education"><label> Education Level</label></span></li>
              <li class="filter-option"><span><input type="radio" name="fgm-inequality-op-indicator-filter" id="" value="wealth"><label> Wealth quintile</label></span></li>
            </ul>
          </div>
        </div>
        <h2 class="dashboard-country-chart-section-title">Inequalities</h2>
        <div class="dashboard-country-chart-section-sub-title">Human rights violations affect females differently. Girls who are the least educated are at the greatest risk of FGM</div>
        <div class="columnright">


          <div id="graphCO2" class="parent_div" style="position:relative;">
            <div class="residence inequalities_opposition_graph">Residence</div>
            <div class="education inequalities_opposition_graph" style="display: none;">Education Level</div>
            <div class="wealth inequalities_opposition_graph" style="display: none;">Wealth Quintile</div>
            <div class="repitem"></div>
            <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                           <a href="#" class="icon_tbl_fs" title="Table"></a>
                          <a href="#" class="icon_three" title="Print"></a>
                          <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                           <a href="#" class="icon_close" title="Close"></a>
                          <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
                 </div>-->
            <div class="bdrcls residence inequalities_opposition_graph" id="CO2"></div>
            <div class="bdrcls wealth inequalities_opposition_graph" id="CO20" style="display:none;"></div>
            <div class="bdrcls education inequalities_opposition_graph" id="CO21" style="display:none;"></div>
            <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
              <ul rel="MO1" class="action-link-list" id="">
                <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                <li rel="MO1" class="download dwnld-option-li">
                  <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                  <div rel="download" class="download-link-options dwnld-opts">
                    <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                    <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                    <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                    <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                  </div>
                </li>
              </ul>
            </div>
            <!--            <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:-10px;right:2px;">
                          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                          <a href="javascript:void(0)" class="icon_four"></a>
                        </div>-->
          </div>


        </div>
      </div>
      <div class="country-chart-right-section last-column chart-sections">
        <div class="country-inside-top-filter-section" style="visibility: hidden">
          <div id="filter-options-list" class="neighbour-blocks">
            <span class="filters-title">Filter</span>
            <ul class="square-input-element" id="filter_opposition">
              <li class="filter-option"><span><input class="first" type="radio" name="fgm-opposition-op-indicator-filter" id="" value="country-name" checked="true" ><label> <?php echo $country_name; ?></label></span></li>
              <li class="filter-option"><span><input type="radio" name="fgm-opposition-op-indicator-filter" id="" value="residence"><label> Residence</label></span></li>
              <li class="filter-option"><span><input type="radio" name="fgm-opposition-op-indicator-filter" id="" value="education"><label> Education Level</label></span></li>
              <li class="filter-option"><span><input type="radio" name="fgm-opposition-op-indicator-filter" id="" value="wealth"><label> Wealth quintile</label></span></li>
            </ul>
          </div>
        </div>
        <h2 class="dashboard-country-chart-section-title">Opposition</h2>
        <div class="dashboard-country-chart-section-sub-title">About <span class="title-bold-text fgm-dashboard-color">66 percent</span> of women believe FGM should be discontinued</div>
        <div class="repitem half-box right-box">
<!--          <p style="min-height:80px;">
            <span id="div6" class="txt_hgt" style="width:90%; min-height:110px;font-size: 12px;display:none;"></span></p>-->
          <div id="graphCO5" class="parent_div"  style="position:relative;">
            <div class="country-name inequalities_opposition_graph"><?php echo $country_name; ?></div>
            <div class="residence inequalities_opposition_graph" style="display: none;">Residence</div>
            <div class="education inequalities_opposition_graph" style="display: none;">Education Level</div>
            <div class="wealth inequalities_opposition_graph" style="display: none;">Wealth Quintile</div>
            <div class="repitem"></div>
            <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                     <a href="#" class="icon_tbl_fs" title="Table"></a>
                     <a href="#" class="icon_three" title="Print"></a>
                     <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                      <a href="#" class="icon_close" title="Close"></a>
                     <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
            </div>-->
            <!--            <div class="bdrcls country-name inequalities_opposition_graph" id="CO5"></div>-->
            <div class="bdrcls residence inequalities_opposition_graph" id="CO22"></div>
            <div class="bdrcls education inequalities_opposition_graph" id="CO23" style="display:none;"></div>
            <div class="bdrcls wealth inequalities_opposition_graph" id="CO24" style="display:none;"></div>
            <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
              <ul rel="MO1" class="action-link-list" id="">
                <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                <li rel="MO1" class="download dwnld-option-li">
                  <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                  <div rel="download" class="download-link-options dwnld-opts">
                    <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                    <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                    <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                    <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                  </div>
                </li>
              </ul>
            </div>
            <!--            <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
                          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                          <a href="javascript:void(0)" class="icon_four"></a>
                        </div>-->
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<div id="fgm-performers-section" class="dashboard-country-outer-box fgm-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">Types of FGM and Performers</span>
  </div>
  <div class="section-indicators" id="fgm-performers-indicators">
    <ul style="display: block;" id="tab1">

      <li class="first active"><span><input type="radio" name="fgm-performers-indicator" class="" id="performers-of-fgm" value="" checked="true"/><label class="label1">Performers of FGM</label></span></li>

      <li class="second"><span><input type="radio" name="fgm-performers-indicator" class="" id="type-of-fgm" value=""/><label>Type of FGM</label></span></li>

      <li class="last"><span class="close-arrow">Close</span></li>

    </ul>
  </div>
  <div class="dashboard-section-content dashboard-country-chart-section performers-of-fgm chart clearfix">
    <h2 class="dashboard-country-chart-section-title">Performers of FGM</h2>
    <div class="dashboard-country-chart-section-sub-title">FGM is essentially performed by other traditional (more than <span class="title-bold-text fgm-dashboard-color">65%</span>). FGM is practised more and more by medical professionals</div>
    <div class="two-column-wrapper uneven-width clearfix">
      <div class="country-chart-left-section first-column chart-sections">
        <!--        <div id="legend" class="legend-block">
                  <span class="filters-title">Legend</span>
                  <ul>
                    <li class="legend-data data-1">Doctor</li>
                    <li class="legend-data data-2">Traditional excisors</li>
                    <li class="legend-data data-3">other</li>
                    <li class="legend-data data-4">Nurse/Midwife/Other health worker</li>
                    <li class="legend-data data-5">Other traditional</li>
                    <li class="legend-data data-6">Don't know/missing</li>
                  </ul>
                </div>-->
      </div>
      <div class="country-chart-right-section last-column chart-sections">
        <div class="repitem half-box right-box">
          <p>
            <span id="div11" class="txt_hgt" style="width:90%; min-height:66px;font-size: 12px;display:none;"></span></p>
          <div id="graphCO10" class="parent_div"  style="position:relative;">
            <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                    <a href="#" class="icon_tbl_fs" title="Table"></a>
                    <a href="#" class="icon_three" title="Print"></a>
                    <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                    <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
           </div>-->
            <div class="padd_fiv bdrcls"  id="CO10" style="width:75%"></div>
            <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
              <ul rel="MO1" class="action-link-list" id="">
                <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                <li rel="print" class="print"><a href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                <li rel="MO1" class="download dwnld-option-li">
                  <a class="download-link" href="javascript:void(0);"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                  <div rel="download" class="download-link-options dwnld-opts">
                    <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                    <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                    <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                    <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                  </div>
                </li>
              </ul>
            </div>
            <!--            <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
                          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                          <a href="javascript:void(0)" class="icon_four"></a>
                        </div>-->
          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="dashboard-section-content dashboard-country-chart-section type-of-fgm chart clearfix" style="display:none;">
    <h2 class="dashboard-country-chart-section-title">Type of FGM</h2>
    <div class="dashboard-country-chart-section-sub-title">Almost half of girls and women who undergone FGM have had their genitalia cut, with some flesh removed</div>
    <div class="two-column-wrapper uneven-width clearfix">
      <div class="country-chart-left-section first-column chart-sections">
        <!--        <div id="legend" class="legend-block">
                  <span class="filters-title">Legend</span>
                  <ul>
                    <li class="legend-data data-1">Doctor</li>
                    <li class="legend-data data-2">Traditional excisors</li>
                    <li class="legend-data data-3">other</li>
                    <li class="legend-data data-4">Nurse/Midwife/Other health worker</li>
                    <li class="legend-data data-5">Other traditional</li>
                    <li class="legend-data data-6">Don't know/missing</li>
                  </ul>
                </div>-->
      </div>
      <div class="country-chart-right-section last-column chart-sections">
        <div class="repitem half-box right-box">
          <p>
            <span id="div10" class="txt_hgt" style="width:90%; min-height:66px;font-size: 12px;"></span></p>
          <div id="graphCO9" class="parent_div"  style="position:relative;width:100%">
            <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                   <a href="#" class="icon_tbl_fs" title="Table"></a>
                   <a href="#" class="icon_three" title="Print"></a>
                   <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                    <a href="#" class="icon_close" title="Close"></a>
                   <img src="<?php //echo IMG_PATH;                                                                                        ?>close.gif" alt="close" title="close"/>
          </div>-->
            <div class="padd_fiv bdrcls" id="CO9" style="width:75%"></div>
            <div id="action-links" class="action-links-block _mrgn_top20 top_rnded_crnrs3 hoverMenu">
              <ul rel="MO1" class="action-link-list" id="">
                <li rel="fullScreen" class="full-view"><a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a></li>
                <li rel="table" class="table"><a href="javascript:void(0);" title="Table"><i class="dfapi-viz-toolbar-medium tbl">Table</i></a></li>
                <li rel="print" class="print"><a href="javascript:void(0);" title="Print"><i class="dfapi-viz-toolbar-medium print icon_three">Print</i></a></li>
                <li rel="MO1" class="download dwnld-option-li">
                  <a class="download-link" href="javascript:void(0);" title="Download"><i class="dfapi-viz-toolbar-medium dwnld">Download</i></a>
                  <div rel="download" class="download-link-options dwnld-opts">
                    <a id="png" type="png" href="javascript:void(0);" class="export_icons">PNG </a>
                    <a id="jpeg" type="jpeg" href="javascript:void(0);" class="export_icons">JPEG </a>
                    <a id="svg" type="svg" href="javascript:void(0);" class="export_icons">SVG </a>
                    <a id="pdf" type="pdf" href="javascript:void(0);" class="export_icons">PDF </a>
                  </div>
                </li>
              </ul>
            </div>
            <!--            <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
                          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
                          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
                          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
                          <a href="javascript:void(0)" class="icon_four"></a>
                        </div>-->
          </div>
        </div>
      </div>







    </div>

  </div>
</div>


<div id="dashboard-country-detail-bottom-section" class="dashboard-country-outer-box adolescents-youth-dashboard">
  <div class="dashboard-section-title">
    <span class="section-title">
      Dashboards available for  <?php echo $country_name; ?>    </span>
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
        <a href="<?php echo '/data/adolescent-youth/' . $country_code; ?>">
          <span class="country-dashboard-icons adolescent-youth-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">Adolescent and Youth Dashboard</span>
        </a>
      </li>
      <li class="list-row family-planning-dashboard-list-row">
        <a href="<?php echo '/data/family-planning/' . $country_code; ?>">
          <span class="country-dashboard-icons family-planning-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">Family Planning Dashboard</span>
        </a>
      </li>
      <li class="list-row population-projection-list-row">
        <a href="<?php echo '/data/population-projection/' . $country_code; ?>">
          <span class="country-dashboard-icons population-projection-icon"></span>
          <span class="country-dashboard-portal-title">Population Projection</span>
        </a>
      </li>
      <li class="list-row world-population-dashboard-list-row">
        <a href="<?php echo '/world-population-dashboard#' . $country_code; ?>">
          <span class="country-dashboard-icons world-population-dashboard-icon"></span>
          <span class="country-dashboard-portal-title">World Population Dashboard</span>
        </a>
      </li>
    </ul>
  </div>
</div>

<div id="dashboard-page-bottom-container"><p>Source: Demographic and Health Surveys 2013 - unless indicated otherwise</p></div>
















<div class="item forMobVer" style="display:none;">
  <a href="javascript:;" class="btn" id="spcl_heading">Opposition to FGM</a>
  <div class="conteudo">
    <div class="repitem">
      <p>
        <span id="div6" class="txt_hgt" style="width:90%; min-height:110px;font-size: 12px;"></span></p>
      <div id="graphCO5" class="parent_div"  style="position:relative;">
        <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                 <a href="#" class="icon_tbl_fs" title="Table"></a>
                 <a href="#" class="icon_three" title="Print"></a>
                 <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                 <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
        </div>-->
        <div class="_mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
          <a href="javascript:void(0)" class="icon_four"></a>
        </div>
        <div class="bdrcls" id="CO5_1"></div>
      </div>
    </div>

  </div>
</div>




<div class="item forMobVer">
  <a href="javascript:;" class="btn" id="spcl_heading"></a>
  <div class="conteudo">
    <div class="repitem">
      <p>
        <span id="div11" class="txt_hgt" style="width:90%; min-height:66px;font-size: 12px;"></span></p>
      <div id="graphCO10" class="parent_div"  style="position:relative;display:none;">
        <!--<div class="BoxClose" style="float:right;cursor:pointer;display:none;margin:10px;">
                <a href="#" class="icon_tbl_fs" title="Table"></a>
                <a href="#" class="icon_three" title="Print"></a>
                <a href="javascript:void(0)" class="icon_four" id="Fullscreen"></a>
                <img src="<?php //echo IMG_PATH;                                                                                                                                                                                                                                           ?>close.gif" alt="close" title="close"/>
       </div>-->
        <div class="icon_bg _mrgn_top20 top_rnded_crnrs3 hoverMenu" style="top:0px;right:0px;">
          <a href="javascript:void(0)" class="icon_one" title="Table">Table</a>
          <a href="javascript:void(0)" class="icon_two" title="FullScreen">FullScreen</a>
          <a href="javascript:void(0)" class="icon_three" title="Print">Print</a>
          <a href="javascript:void(0)" class="icon_four">Download</a>
        </div>
        <div class="padd_fiv bdrcls"  id="CO10_1" style="width:75%"></div>
      </div>
    </div>
  </div>
</div>

