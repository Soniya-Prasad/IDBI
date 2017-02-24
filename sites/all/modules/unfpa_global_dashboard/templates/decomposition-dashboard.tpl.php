
<?php
  global $base_path;  
  $module_path = drupal_get_path('module','unfpa_global_dashboard');
  $path=$base_path.$module_path.'/images';
 // echo $path;
  $area['Area']['Area_Name']="Rwanda";
//echo "<script>";
//echo 'var Area_NId = ' . $areaList['Area']['Area_NId'] . ';';
//echo 'var Area_Parent_NId = ' . $areaList['Area']['Area_NId'] . ';';
//echo 'var Area_ID = "' . $areaList['Area']['Area_ID'] . '";';
//echo 'var Area_Name = "' . $areaList['Area']['Area_Name'] . '";';
//echo 'var Area_GId = "' . $areaList['Area']['Area_GId'] . '";';
//echo 'var Area_Level = ' . $areaList['Area']['Area_Level'] . ';';
//echo "</script>";
echo "<script>";
echo 'var Area_NId =16;';
echo 'var Area_Parent_NId = 16;';
echo 'var Area_ID = "RWA";';
echo 'var Area_Name = "Rwanda";';
echo 'var Area_GId = "RWA";';
echo 'var Area_Level = 4;';
echo "</script>";
//echo 'rev==='.$urlValue;
?>
Hello
<!----------------------- Country tree component ------------------------->
<script>
  var di_diuilib_url = 'http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/diuilib/';
  var di_components = "Area";
  var di_component_version = '1.1';
  var di_theme_css = '';
//	var area_nid = 33;
  var area_nid = window.Area_NId;

</script>
<input type="hidden" name="hd_area_name" id="hd_area_name" value="Rwanda">
<!--<script type="text/javascript" src="http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/graph_settings.json"></script>
<script type="text/javascript" src="http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/arealist.json"></script>
<script type="text/javascript" src="http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/wanted.json"></script>-->
<script type="text/javascript" src="http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/diuilib/diuilibcommon.js"></script>
<script type="text/javascript" src="http://localhost/unfpa-global-old/sites/all/modules/custom/unfpa_global_dashboard/js/decomposition/diuilib/diuilibincludes.js"></script>
<style>
  /*-----Area Dropdown CSS START-----*/

  .area_container {
    background: #ffffff none repeat scroll 0 0;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    box-shadow: 0 0 13px #d3d3d3;
    display: none;
    padding: 8px;
    position: absolute;
    width: 315px;
    z-index: 1;
    margin-left: 20%;
    margin-top: -10.5%;
  }
  .showAreaSelector {cursor:pointer}
  .area_container li{list-style: none;cursor:pointer;padding-top:2px;font-family:Century Gothic,arial,sans-serif;}
  .area_container ul{display: none;}
  .drop_icon{cursor: pointer;float:left;width:20px;}
  .ul_open{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAAEY9KHRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM4QzRCMDFCMEQ3MTFFMzgzRTY4Mzk1OEZCNzhERkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM4QzRCMDJCMEQ3MTFFMzgzRTY4Mzk1OEZCNzhERkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQzhDNEFGRkIwRDcxMUUzODNFNjgzOTU4RkI3OERGQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzhDNEIwMEIwRDcxMUUzODNFNjgzOTU4RkI3OERGQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktsWCcAAACCSURBVHjaYty1ew8DAwMTAxgABBDDxIkTQUyAAGIE0rsuibnpvQIIIBALKMAC5IEooAiQAgggkLJfv39DEJDNAhR7+eIFAwwABBBUE5QDVAPnsHz+9DGubDeQtajLlfHx48cImXXr1sE5AAHGhGwBMoK6DxcAOQRoA065b9++Y5UDAK48ST8+u8IWAAAAAElFTkSuQmCC") no-repeat;
    background-position:25% 37%;
  }
  .ul_close{
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAAEY9KHRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTg1RDU5MTFCMEQ3MTFFMzkyMUZDQkYyRkZGMDM4ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTg1RDU5MTJCMEQ3MTFFMzkyMUZDQkYyRkZGMDM4ODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODVENTkwRkIwRDcxMUUzOTIxRkNCRjJGRkYwMzg4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFODVENTkxMEIwRDcxMUUzOTIxRkNCRjJGRkYwMzg4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Poda2hUAAACTSURBVHjaYty1ew8DAwMTAxgABBDDxIkTQUyAAGIE0rsuibnpvQIIIBALKMAC5IEooAiQAgggkLI/f/5oOhUBSaiW58+fw0mAAIJqggBGoBo4h+nf///+6auBCMhgfPz4MVyGZd26dXAOQIBBLcAEUMuAmiFI160MzgYZAsSfP32EG4PMBsl9+/Ydwtm1sBDOBgIAbD1nOfRQAdgAAAAASUVORK5CYII=") no-repeat;
    background-position:25% 37%;
  }
  .areaLvl1{font-size:17px;padding-left:12px;}
  .areaLvl2{font-size:13px;padding-left:20px}
  .areaLvl3{font-size:11px;padding-left:24px}
  .areaLvl4{font-size:11px;padding-left:24px}
  .areaLvl1 .li{font-weight:bold;}
  .item{text-align:left;margin-left:10px;}
  .item:hover{color:#C30000;}
  .area_selected{color:#C30000;}
  .clear{clear:both}
  /*-----Area Dropdown CSS END-----*/
</style>
    <div id="wrap">
      <section id="main">
        <input type="hidden" name="hd_area_id" id="hd_area_id" value="88">
          <input type="hidden" name="hd_area_name" id="hd_area_name" value="India">
            <input type="hidden" name="hd_report_growth" id="hd_report_growth" value="0">

              <div id="content" class="no-background mdg">
                <div class="max_wrapper">
                  <div class="top-logo"> <img src="<?php echo $path; ?>/unfpa_logo.png"> </div>

                  <h1 class="">Decomposition of Future Population Growth</h1>WEB_BASE_URL
                  <div class="social">
                    <span class="social-icons st_twitter_custom" via="UNFPAEECARO">
                      <span class='st_twitter_vcount' displayText='Tweet'></span>
                    </span>
                    <span class="social-icons st_facebook_custom">
                      <span class='st_facebook_vcount' displayText='Facebook'></span>
                    </span>
                    <span class="social-icons st_googleplus_custom">
                      <span class='st_googleplus_vcount' displayText='Google +'></span>
                    </span>
                    <span class="social-icons st_email_custom">
                      <span class='st_email_vcount' displayText='Email'></span>
                    </span>
                    <div class="clearfix"></div>
                  </div>

                  <div class="abt_dwnld">
                    <div class="dwnld-pp-link">
                      <a href="javascript:void(0);" id="generateReport1">Report <span>Basic</span></a>
                      <a href="javascript:void(0);" id="generateReport2">Report <span>Advanced</span></a>
                      <a href="javascript:void(0);" id="ShowMethology">Methodology</a>
                    </div>

                    <div class="ad-tp">
                      <div class="abt_link">
                        <a class="abt-trig" href="javascript:void(0);">About</a>
                      </div>

                    </div>
                    <div class="about-text" style="display:none;">
                      <p>The main objective of the decomposition tool is to provide evidence and analysis that countries can use to develop policies and programmes aimed to find a balance between demographic change and social, economic and environmental goals.</p>
                      <p>This program calculates the contributions of different demographic factors (wanted and un-wanted fertility, mortality, migration, and age structure) to population growth. It is based on the medium variant population projection of the United Nations from 2010 to 2050 for all countries and main regions.</p>
                      <p>Select a country or region from the window below to view the results of the decomposition tool. Move mouse over the figures to explore the interactive data content. Then read and download a report summarizing the results, methods, and policy implications.</p>
                    </div>
                  </div>

                  <div class="breadcrumb">
                    <a href="http://www.unfpa.org/">Home</a>
                    <a href="javascript:void(0);">Data</a>
                    <a href= <?php echo $base_path; ?>>Decomposition of Future Population Growth</a>
                    <span id="current" class="current"><?php echo $area['Area']['Area_Name']?></span>

                  </div>

                  <div class="clearfix"></div><br><br>
                      <div class="country5">
                        <div class="top">
                          <!-- <h3>Rwanda</h3> -->

                          <h3>
                            <span id="countrySelected" title="<?php echo $area['Area']['Area_Name']?>" class="cntry_name"><?php echo strlen($area['Area']['Area_Name'])>18 ? substr($area['Area']['Area_Name'],0,18).'..': $area['Area']['Area_Name']?>
                            </span>
                          </h3>
                          <div class="popover">
                            <!--<a  href="#" class="chnge_cntry">Change Country</a>-->
                            <a id="countryLink" class="btn pencil" href="javascript:void(0);">Select Country</a>
                            <div class="popupoverblock">
                              <div id="ddmenu_loc" class="ddmenudiv1" style="position: absolute; display: block; z-index: 1;display:none;width:100%;">
                                <b class="notch2" style="top=-7px"></b>
                                <div id="ddmenu_loc2" class="dd_outer"></div>
                              </div>
                              <div class="area_container" style="margin-left:20%;margin-top:-8%;height:260px;overflow:auto;"></div>
                            </div>
                          </div>
                          <!--Area Div Starts-->



                          <!--Area Div Ends-->
                        </div>
                        <div class="pos_rel">

  <!-- Tabbed Boxes ...starts-->

  <nav>
    <div class="mb_heading">Decomposition Analysis:</div>
    <ul class="tabmenu clearfix">
      <li><a href="#"  class="active" id="high_fert_bx" onclick="return showTab('high_fert')"><span>Decomposition Analysis:</span> Basic version</a></li>
      <li><a href="#" id="wntd_unwntd_fert_bx" onclick="return  showTab('wntd_unwntd_fert')"><span>Decomposition Analysis:</span> Advanced version</a></li>
    </ul>
  </nav>

  <!-- Tabbed Boxes ...ends-->

  <!-- Tabbed Content Section ...starts-->
  <div class="tbd_cntnt_ac rnded_crnr_3s">

    <!-- Tab 1 ...starts-->
    <div id="high_fert_cntnt" style="width:100%">
      <div class="columnleft">
        <!-- Block ...starts-->

        <!-- Graph Section ...starts-->
        <div id="box" class="box flt_lft" style="display: block;width:100%">

          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct">
                <?php echo 'Area_Name' ?></span>: Alternative Population Projections 2000-2050 and Components of Population Growth</h2>
            <input type="hidden" id="Figure_caption" value="Alternative Population Projections 2000-2050 and Components of Population Growth"/>
          </div>
          <!-- Icon Bar ...starts-->
          <span class="hoverMenu icn_bar" rel="lineChart">
            <a href="#" title="FullScreen" class="ful_view_icn" id="Figure_ful_view"></a>
            <a href="#" title="Print" class="prnt_icn" id="Figure_prnt_icn"></a>
            <a href="#" title="Download" class="dwnld_icn" id="Figure_dwnld_icn"></a>
          </span>
          <!-- Icon Bar ...ends-->
          <div id="Figure" class="grph_cntnt rnded_crnr_3s"  style="width:100%"></div><!-- height:440px; -->
        </div>
        <!-- Graph Section ...ends-->
      </div>

      <div class="columnright">

        <!-- Tabular Section ...starts-->
        <div id="linetable" class="flt_lft grp_tblr_ar mrgn_top20">
          <table cellpadding="0" cellspacing="0" border="0" id="table1" class="table wdth_ful fnt_twlv"></table>
        </div>
        <!-- Tabular Section ...ends-->
        <div class="legend">
          <p>
            1. The Standard <span>red</span> projection includes the contributions of all demographic factors. This is the medium variant projection of the United Nations. It includes the effects of high fertility, mortality and migration as well as momentum.
          </p>
          <p>
            2. The Replacement <span>green</span> projection is identical to the standard projection but fertility is set to the replacement level from 2010 onward.
          </p>
          <p>
            3. The Momentum <span>dash</span> projection sets fertility to replacement and holds mortality constant and has no migration. it is only affected by the young age structure.
          </p>
        </div>
      </div>
      <div class="clearfix"></div>
      <hr />
      <!-- Block ...ends-->

      <!-- Block ...starts-->

      <div class="columnleft">
        <!-- Graph Section ...starts-->
        <div id="box1" class="box flt_lft" style="display: block;width:100%">
          <!-- Icon Bar ...starts-->
          <span class="hoverMenu icn_bar" rel="barChart1">
            <a href="#" title="FullScreen" class="ful_view_icn" id="Bar_chart_ful_view"></a>
            <a href="#" title="Print" class="prnt_icn" id="Bar_chart_prnt_icn"></a>
            <a href="#" title="Download" class="dwnld_icn" id="Bar_chart_dwnld_icn"></a>
          </span>

          <!-- Icon Bar ...ends-->


          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo 'Area_Name' ?></span>: Decline in Population in 2050 Resulting from Removal of Components of Population Growth</h2>
            <input type="hidden" id="Bar_chart_caption" value="Decline in population in 2050 (by removal of population growth components)"/>
          </div>
          <div id="Bar_chart" class="grph_cntnt rnded_crnr_3s" style="width:100%"></div><!-- height:500px; -->
        </div>
        <!-- Graph Section ...ends-->
      </div>

      <div class="columnright">
        <!-- Tabular Section ...starts-->
        <div class="flt_lft grp_tblr_ar mrgn_top20">
          <table id="table2" cellpadding="0" cellspacing="0" border="0" class="table wdth_ful fnt_twlv"></table>
        </div>
        <!-- Tabular Section ...ends-->

        <div  id="summary_pane1" class="flt_lft grp_tblr_ar">
        </div>
      </div>

      <div class="clear"></div>
      <!-- Block ...ends-->


    </div>
    <!-- Tab 1 ...ends-->



    <!-- TAB 2 ...STARTS-->
    <div id="wntd_unwntd_fert_cntnt" style="display:none;width:100%">

      <div class="columnleft">

        <!-- Block ...starts-->
        <!-- Graph Section ...starts-->
        <div id="box3" class="box flt_lft" style="display: block;width:100%">
          <!-- Icon Bar ...starts-->
          <span class="hoverMenu icn_bar" rel="lineChart1">
            <a href="#" title="FullScreen" class="ful_view_icn" id="Figure1_ful_view"></a>
            <a href="#" title="Print" class="prnt_icn" id="Figure1_prnt_icn"></a>
            <a href="#" title="Download" class="dwnld_icn" id="Figure1_dwnld_icn"></a>
          </span>
          <!-- Icon Bar ...ends-->


          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo 'Area_Name' ?></span>: Alternative Population Projections 2000-2050 and Components of Population Growth</h2>
            <input type="hidden" id="Figure1_caption" value="Alternative Population Projections 2000-2050 and Components of Population Growth"/>
          </div>
          <div id="Figure1" class="grph_cntnt rnded_crnr_3s"  style=""></div><!-- height:440px; -->
        </div>
        <!-- Graph Section ...ends-->
      </div>

      <!-- Tabular Section ...starts-->
      <div class="columnright">
        <div id="linetable1" class="flt_lft grp_tblr_ar mrgn_top20">
          <table cellpadding="0" cellspacing="0" border="0" id="table3" class="table wdth_ful fnt_twlv"></table>
        </div>
        <!-- Tabular Section ...ends-->


        <div  class="flt_lft grp_tblr_ar mrgn_top20 legend">
          <p id="Standard_projection1" class="fnt_twlpx">1. The <span class="fnt_itlc">Standard</span>&nbsp;&nbsp;<span class="fnt_itlc">projection</span> includes the contributions of all demographic factors. This is the medium variant projection of the United Nations. It includes the effects of high fertility, mortality and migration as well as momentum.</p>
          <p id="Wanted_projection1" class="fnt_twlpx">2. The <span class="fnt_itlc">Wanted</span>&nbsp;<span class="fnt_itlc">projection</span> is identical to the standard projection but unwanted fertility is removed from 2010 onward.</p>
          <p id="Replacement_projection1" class="fnt_twlpx">3. The <span class="fnt_itlc">Replacement</span>&nbsp;<span class="fnt_itlc">projection</span> is identical to the standard projection but fertility is set to the replacement level from 2010 onward.</p>
          <p id="Momentum_projection1" class="fnt_twlpx">4. The <span class="fnt_itlc">Momentum</span>&nbsp;<span class="fnt_itlc">projection</span> sets fertility to replacement and holds mortality constant and has no migration. it is only affected by the young age structure.</p>

        </div>
      </div>
      <div class="clear"></div>
      <!-- Block ...ends-->

      <hr />
      <!-- Block ...starts-->
      <div class="columnleft">
        <!-- Graph Section ...starts-->
        <div id="box4" class="box flt_lft" style="display: block;width:100%">
          <!-- Icon Bar ...starts-->
          <span class="hoverMenu icn_bar" rel="barChart2">
            <a href="#" title="FullScreen" class="ful_view_icn" id="Bar_chart2_ful_view"></a>
            <a href="#" title="Print" class="prnt_icn" id="Bar_chart2_prnt_icn"></a>
            <a href="#" title="Download" class="dwnld_icn" id="Bar_chart2_dwnld_icn"></a>
          </span>
          <!-- Icon Bar ...ends-->

          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo 'Area_Name' ?></span>:  Decline in Population in 2050 Resulting from Removal of Components of Population Growth</h2>
            <input type="hidden" id="Bar_chart2_caption" value="Decline in population in 2050 (by removal of population growth components)"/>
          </div>
          <div id="Bar_chart2" class="grph_cntnt rnded_crnr_3s" style=""></div><!-- height:340px; -->
        </div>
      </div>
      <!-- Graph Section ...ends-->
      <div class="columnright ">
        <!-- Tabular Section ...starts-->
        <div class="flt_lft grp_tblr_ar mrgn_top20">
          <table id="table4" cellpadding="0" cellspacing="0" border="0" class="table wdth_ful fnt_twlv"></table>
        </div>
        <!-- Tabular Section ...ends-->
        <div  id="summary_pane2" class="flt_lft grp_tblr_ar mrgn_top20"></div>
      </div>


      <div class="clear"></div>
      <!-- Block ...ends-->
    </div>
    <!-- Tab 2 ...ends-->


  </div>
  <!-- Tabbed Content Section ...ends-->
  <div class="clear_spcr mrgn_top30"></div>
  <!-- </div> -->
  <!-- Tabbed Section ...ends-->
  <div id="topBoxDiv" class="tableBox"></div>

</div>
                      </div>
                </div>
              </div>
      </section>
    </div>
