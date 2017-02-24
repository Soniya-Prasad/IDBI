
<?php
//echo "<script>";
//        echo 'var Area_NId = '. $area['Area']['Area_NId'].';' ;
//        echo 'var Area_Parent_NId = '.$area['Area']['Area_NId'].';' ;
//        echo 'var Area_ID = "'.$area['Area']['Area_ID'].'";' ;
//        echo 'var Area_Name = "'.$area['Area']['Area_Name'].'";' ;
//        echo 'var Area_GId = "'.$area['Area']['Area_GId'].'";' ;
//        echo 'var Area_Level = '.$area['Area']['Area_Level'].';' ;
//        echo "</script>";
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

<!----------------------- Country tree component ------------------------->
<script>
  var di_diuilib_url = '<?php echo $this->webroot; ?>js/diuilib/';
  var di_components = "Area";
  var di_component_version = '1.1';
  var di_theme_css = '';
//	var area_nid = 33;
  var area_nid = window.Area_NId;

</script>

<script type="text/javascript" src="<?php echo GRAPH_JSON_FILE; ?>"></script>
<script type="text/javascript" src="<?php echo $this->webroot; ?>files/arealist.json"></script>
<script type="text/javascript" src="<?php echo GRAPH_WANTED_FILE; ?>"></script>
<script type="text/javascript" src="<?php echo $this->webroot; ?>js/diuilib/diuilibincludes.js"></script>
<script type="text/javascript" src="<?php echo $this->webroot; ?>js/diuilib/diuilibcommon.js"></script>
<script type="text/javascript">
  var areaObj = '';
  function SelectCountry() {
    /*
     var di_components = "Area";
     var di_component_version = '1.1';
     var di_theme_css = '';
     var STOCK_PATH = "<?php echo STOCK_PATH ?>";
     var dataBaseID = '100';
     var langCode = 'en';
     var SearchTxt ="Search";


     var areaoptions = {
     title: '',												// Title caption
     iconClose: false,										// Show close icon on right of the title box
     width: '100%',											// Width
     height: '170',											// Height
     codelistPath: STOCK_PATH + 'area/',						// Area Codelist Path
     metadataPath: '',										// Metadata folder path
     flagIconPath: '',										// Country Icon URL
     multiple: false,										// Multiselect - true/false
     mode: 'tree',											// Display mode - both, tree, list
     defaultMode: 'tree',									// default display mode tree/list_level
     outputFormat: 'aid_nid_name_level',						// aid, nid, name, nid_name, aid_name, aid_nid_name
     showAreaId: false,										// Show Area ID after area name. true/false
     quickSel: false,										// Provide options for quick selection true/false
     quickSelMode: 'VERT',									// Quick Selection Arrangement Mode - HRZ|VERT
     showFooter: false,										// Show footer with OK|Cancel buttons,
     showViewSel: false,										// Show view selection panel
     callbacks: {
     hotSel: 'clickAreaName()',							// hot selection function if multiple false
     whereDataExist: '',									// function where data exist
     areaMap: ''											// Callback URl for Area Map. (keep null for hiding)
     },														// callback functions
     jsonSelection: '',										// JSON format to persist area selection default
     labels: {												// Static Labels
     selectAll: 'Select All',
     byList: 'List Alphabetically by',
     byTree: '&nbsp;',
     byMap: 'By Map',
     search: SearchTxt,
     viewSel: 'View Selection',
     metadata: 'Metadata',
     dataExist: 'Show where data exist',
     clear: 'Clear',
     close: 'Close',
     first: 'First',
     last: 'Last',
     next: 'Next',
     back: 'Back',
     page: 'Page',
     ok: 'OK',
     cancel: 'Cancel'
     }
     };
     areaObj = new di_drawAreaSelectionList('ddmenu_loc2', areaoptions);
     */

  }
//end function


  function clickAreaName() {
    /*
     var sel_ar_dt = areaObj.getSelectedAreas();

     var area_data = sel_ar_dt.split('_');
     var area_nid = area_data[1];
     window.area_nid = area_data[1];
     var area_aid = area_data[0];


     var area_level_raw  = 	area_data[3];
     var area_level = area_level_raw.split("||");
     var area_name =  area_data[2];
     var area_name1 =  area_data[2];
     area_name1 = (area_name1.length>18) ? (area_name1.substr(0,18)+'..'):area_name1;

     di_jq("#hd_area_id").val(area_nid);
     di_jq("#hd_area_name").val(stripslashes(area_name));
     di_jq("#countrySelected").html(stripslashes(area_name1));
     di_jq("#countrySelected").attr('title',area_name);
     di_jq("#current").html(stripslashes(area_name));


     di_jq(".cntSlct").each(function(){
     $(this).html(stripslashes(area_name));
     });
     di_jq('#ddmenu_loc').hide();
     console.log(area_nid+'--nidin charts ');
     loadAllCharts(area_nid);

     if(area_level[0]==4){
     //var mapObj 			= swfobject.getObjectById("mapdiv");
     //mapObj.setArea(area_aid, area_level[0]);
     }
     */
  }
// end function

// Sample implementation of the hover over hot selection
  function hot_selection_func(val) {
    alert('Hot selection function is working fine.' + val + ' : Selected Area: ' + di_get_selected_areas());
  }
// end function

  function get_area_where_data_exists(input) {
    //return 'false';
    return '6105,6112';
  }

  $(function () {

    //SelectCountry();

    // function to show Area Component
    showAreaComp = function () {
      $('#ddmenu_loc').show();
    }
    // function to hide Area Component
    hideAreaComp = function () {
      $('#ddmenu_loc').hide();
    }

    //$('#countryLink').click(function(){
    //if($('#ddmenu_loc').is(":visible"))
    //hideAreaComp();
    //else
    //showAreaComp();

    //return false;
    //});

  });
  $(function () {




    //	alert('hua');


    /**
     * Script for Area Dropdown START - 2013_03_21
     **/
    var drawAreaList = function (page) {

      // create area dropdown ui
      createAreaDropdown();

      //Showing the first ul
      $(".area_container").children().css("display", "block");
      $(".area_container").children().children().eq(0).children().eq(0).removeClass("ul_close").addClass("ul_open");
      $(".area_container").children().children().css("display", "block");

      //Making default area_ID selection
      //$("#li_"+def_area_ID).children(".item").addClass("area_selected");
      //$(".selected_area").html($("#li_"+def_area_ID).children(".item").html());

      $(".drop_icon").on("click", function () {
        var parent_li_id = $(this).parent().attr("id").split('_');
        var present_classes = $(this).attr('class');
        //alert(present_classes);
        if (present_classes.indexOf("ul_close") != -1) {		//Check if close class exist
          $(this).removeClass("ul_close").addClass("ul_open");
          $("#ul_" + parent_li_id[1]).slideDown();
        } else {
          $(this).removeClass("ul_open").addClass("ul_close");
          $("#ul_" + parent_li_id[1]).slideUp();
          //alert(parent_li_id[1]);
        }
      });
      /*
       $(".drop_icon").on("click", function() {
       var parent_li_id = $(this).parent().attr("id").split('_');
       var present_classes = $(this).attr('class');
       if(present_classes.indexOf("ul_close") != -1) {		//Check if close class exist
       //First collapse all then expand the one which clicked
       $(".areaLvl2 li span").removeClass("ul_open").addClass("ul_close");
       $(".areaLvl3").slideUp();
       console.log('slideiup');
       $(this).removeClass("ul_close").removeClass("ul_close").addClass("ul_open");
       $("#ul_"+parent_li_id[1]).slideDown();
       } else {
       $(this).removeClass("ul_open").addClass("ul_close");
       $("#ul_"+parent_li_id[1]).slideUp();
       }
       })
       */
      $(".area_container").hide();
      $("#countryLink").on("click", function () {


        $(".area_container").slideToggle("slow");
        $('area_container').css({"margin-left": "20%", "margin-top": "-10.5%"});
      })

      $(".item").on("click", function () {
        //		alert('hua');
        var area_ID = $(this).parent().attr("id").split('_');
        //console.log(area_ID);

        window.Area_NId = window.area_nid = area_nidVal = area_ID[1];
        //console.log(area_nidVal);
        //$(".area_container").fadeOut("slow");
        //Now add selected class


        $("#hd_area_id").val(area_nidVal);
        var area_name = area_ID[2];
        var area_name1 = area_ID[2];
        $(".item").removeClass("area_selected");
        $(this).addClass("area_selected");
        //$(".item").removeClass("area_selected");
        //alert('#li_'+area_nidVal+'_'+area_name);
        //$('#li_'+area_nidVal+'_'+area_name+' div').addClass("area_selected");
        /*var area_level_raw  = 	area_data[3];
         var area_level = area_level_raw.split("||");


         */
        area_name1 = (area_name1.length > 18) ? (area_name1.substr(0, 18) + '..') : area_name1;

        $("#hd_area_name").val(stripslashes(area_name));
        $("#countrySelected").html(stripslashes(area_name1));
        $("#countrySelected").attr('title', area_name);
        $("#current").html(stripslashes(area_name));

        $(".cntSlct").each(function () {
          $(this).html(stripslashes(area_name));
        });
        /*  */


        loadAllCharts(area_nidVal);
        $('.area_container').hide();
        //alert(area_ID[1]);
        //	alert(page);
        //alert(area_ID[1]);
        //if(filename == "dashboard."+filename_ext) {
        //mapObj.selectAreaMap(area_ID[1]);
        //}
        //clickAreaAction(area_ID[1], $(this).html(), page);
      });
    };
    /* function to create area dropdown ui*/
    var createAreaDropdown = function () {
      var i = 0;
      var name;
      var html = '';
      var area_rel = masterlist.ar_r;
      var ind_name = masterlist.ar;
      /*Looping for LEVEL 2*/
      for (var key in area_rel) {
        if (i == 0) {
          html += '<ul class="areaLvl1" id="">';
          html += '<li id="li_' + key + '_' + ind_name[key] + '"><span class="drop_icon ul_open">&nbsp;</span><div class="item">' + ind_name[key] + '</div></li><div class="clear"></div>';

          /*Looping for LEVEL 3*/
          area_rel_l3 = area_rel[key];
          //console.log(area_rel_l3+'--area_rel_l3');
          html += '<ul id="ul_' + key + '" class="areaLvl2">';
          for (var key2 in area_rel_l3) {

            var area_rel_l4 = '';
            //area_rel_l4 = area_rel[area_rel_l3[key2]];
            //console.log(area_rel[area_rel_l3[key2]]+'--area_rel_l4');
            //console.log(area_rel_l3[key2]+'--area_rel_l4--key2');
            if (area_rel[area_rel_l3[key2]] === undefined) {
              html += '<li id="li_' + area_rel_l3[key2] + '_' + ind_name[area_rel_l3[key2]] + '"><div class="item">' + ind_name[area_rel_l3[key2]] + '</div></li><div class="clear"></div>';
              // console.log("do something");
            } else {
              html += '<li id="li_' + area_rel_l3[key2] + '_' + ind_name[area_rel_l3[key2]] + '"><span class="drop_icon ul_close">&nbsp;</span><div class="item">' + ind_name[area_rel_l3[key2]] + '</div></li><div class="clear"></div>';


              htmldata = '';
              var childlength = area_rel[area_rel_l3[key2]].length;
              var childdata = area_rel[area_rel_l3[key2]];
              //console.log(childlength+"===childlength");
              if (childlength > 0) {
                var htmldata = appendAreaHtml(childdata, area_rel_l3[key2], 3);
              }
            }
            //console.log(area_rel_l4.length+'--area_rel_l4length');


            html += htmldata;
            /*html += '<ul id="ul_'+area_rel_l3[key2]+'" class="areaLvl3">';
             for(var key3 in area_rel_l4) {
             html += '<li id="li_'+area_rel_l4[key3]+'"><div class="item">'+ind_name[area_rel_l4[key3]]+'</div></li>';
             }
             html += '</ul>';*/
          }
          html += '</ul>';
          html += '</ul>';
        }
        i++;
      }
      $(".area_container").html(html);
    }



    function appendAreaHtml(data, ulKey, levelcnt) {
      var ind_namenew = masterlist.ar;
      var area_relNew = masterlist.ar_r;
      //var childlength = area_rel[area_rel_l3[key2]].length;
      //var childdata = area_rel[area_rel_l3[key2]];
      //area_rel_l3[key2]

      html = '';
      html += '<ul id="ul_' + ulKey + '" class="areaLvl' + levelcnt + '">';
      for (var keyval in data) {
        var newlevel = '';
        if (area_relNew[data[keyval]] === undefined) {
          html += '<li id="li_' + data[keyval] + '_' + ind_namenew[data[keyval]] + '"><div class="item">' + ind_namenew[data[keyval]] + '</div></li>';

          // console.log("do something");
        } else {
          //console.log(area_relNew[data[keyval]]+" hain sab ismein do something");
          html += '';
          html += '<li id="li_' + data[keyval] + '_' + ind_namenew[data[keyval]] + '"><span class="drop_icon ul_close">&nbsp;</span><div class="item">' + ind_namenew[data[keyval]] + '</div></li>';
          var newlevel = levelcnt + 1;
          //var childlengthInner = area_relNew[data[keyval]].length;
          var childdataInner = area_relNew[data[keyval]];
          //htmldata ='';
          html += appendAreaHtml(childdataInner, data[keyval], newlevel);
          //html +=	htmldata;
          /*console.log(ind_namenew[data[keyval]]);
           console.log(data[keyval]);
           console.log(html);
           //console.log(htmldata);*/
        }

        //html += '<li id="li_'+data[keyval]+'"><div class="item">'+ind_namenew[data[keyval]]+'</div></li>';

      }
      html += '</ul>';
      return html;
    }
    drawAreaList('dashboard');

  });


</script>
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
<!-- About Section ...starts-->
<?php
if (isset($_COOKIE["introCookie"])) {
  $dspl = 'none';
  $styl = 'abt_arw_dwn';
} else {
  $dspl = 'block';
  $styl = 'abt_arw_up';
  setcookie("introCookie", 'yes', time() + 60 * 60 * 24 * 14);  /* expire in 14 hour */
}
?>
<!-- <div class="abt_main container">
        <div id="intro" class="abt_main_spc" style="display:<?php echo $dspl ?>" >
                <p>The main objective of the decomposition tool is to provide evidence and analysis that countries can use to develop policies and programmes aimed to find a balance between demographic change and social, economic and environmental goals.</p>
                <p>This program calculates the contributions of different demographic factors (wanted and un-wanted fertility, mortality, migration, and age structure) to population growth. It is based on the medium variant population projection of the United Nations from 2010 to 2050 for all countries and main regions.</p>
                <p>Select a country or region from the window below to view the results of the decomposition tool. Move mouse over the figures to explore the interactive data content. Then read and download a report summarizing the results, methods, and policy implications.</p>
        </div>
</div>

<div class="container pos_rel">
    <div id="abt_expcol">
        <div class="abt_btn_l"></div>
        <div class="abt_btn_m"><span id="intro_lnk" class="abt_btn_txt <?php echo $styl ?>">About</span></div>
        <div class="abt_btn_r"></div>
    </div>
</div> -->
<!-- About Section ...ends-->

<!-- Main Container ...starts-->
<!-- <div class="container padd_tb19"> -->


<!-- Tabbed Section ...starts-->
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
                <?php echo $area['Area']['Area_Name'] ?></span>: Alternative Population Projections 2000-2050 and Components of Population Growth</h2>
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
            1. The Standard <span><img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/red.png"></span> projection includes the contributions of all demographic factors. This is the medium variant projection of the United Nations. It includes the effects of high fertility, mortality and migration as well as momentum.
          </p>
          <p>
            2. The Replacement <span><img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/green.png"></span> projection is identical to the standard projection but fertility is set to the replacement level from 2010 onward.
          </p>
          <p>
            3. The Momentum <span><img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/dashed.png"></span> projection sets fertility to replacement and holds mortality constant and has no migration. it is only affected by the young age structure.
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


          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo $area['Area']['Area_Name'] ?></span>: Decline in Population in 2050 Resulting from Removal of Components of Population Growth</h2>
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


          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo $area['Area']['Area_Name'] ?></span>: Alternative Population Projections 2000-2050 and Components of Population Growth</h2>
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
          <p id="Standard_projection1" class="fnt_twlpx">1. The <span class="fnt_itlc">Standard</span>&nbsp;<img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/red.png"/>&nbsp;<span class="fnt_itlc">projection</span> includes the contributions of all demographic factors. This is the medium variant projection of the United Nations. It includes the effects of high fertility, mortality and migration as well as momentum.</p>
          <p id="Wanted_projection1" class="fnt_twlpx">2. The <span class="fnt_itlc">Wanted</span>&nbsp;<img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/doteddash.png"/>&nbsp;<span class="fnt_itlc">projection</span> is identical to the standard projection but unwanted fertility is removed from 2010 onward.</p>
          <p id="Replacement_projection1" class="fnt_twlpx">3. The <span class="fnt_itlc">Replacement</span>&nbsp;<img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/green.png"/>&nbsp;<span class="fnt_itlc">projection</span> is identical to the standard projection but fertility is set to the replacement level from 2010 onward.</p>
          <p id="Momentum_projection1" class="fnt_twlpx">4. The <span class="fnt_itlc">Momentum</span>&nbsp;<img src="<?php echo WEBSITE_WEBROOT_PATH ?>img/dashed.png"/>&nbsp;<span class="fnt_itlc">projection</span> sets fertility to replacement and holds mortality constant and has no migration. it is only affected by the young age structure.</p>

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

          <div class="grph_hdn top_rnded_crnrs10"><h2><span class="cntSlct"><?php echo $area['Area']['Area_Name'] ?></span>:  Decline in Population in 2050 Resulting from Removal of Components of Population Growth</h2>
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
<!-- Main Container ...ends-->
