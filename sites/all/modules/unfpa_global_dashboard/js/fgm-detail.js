var chartSubTitleSettings = [];
chartcontainer = '';
var objLegSettings = {
  'CO1': ['top', '', '30', '5', '500', '70', '0', '10', '1', '0', '', '1', '0', 'dec', '#fff', '#000'], //verticalAlign, alignment, legendXVal, legendYVal, width, itemWidth, floating, pointWidth, showlegend, dataLabels, formatVal, showGridLine, showmarker, tooltipFormat
  'CO2': ['top', '', '110', '30', '500', '70', '0', '10', '1', '0', '%', '0', '0', 'dec', '#fff', '#000'],
  'CO3': ['bottom', '', '5', '0', '500', '229', '0', '10', '1', '0', '', '1', '0', 'dec', '#fff', '#000'],
  'CO4': ['top', 'left', '40', '20', '120', '100', '1', '10', '0', '1', '', '1', '1', 'whole', '#fff', '#000'],
  'CO5': ['top', 'left', '42', '25', '500', '70', '1', '10', '1', '0', '%', '1', '0', 'whole', '#fff', '#000'],
  'CO5_1': ['top', 'left', '42', '2', '500', '70', '1', '10', '1', '0', '%', '1', '0', 'whole', '#fff', '#000'],
  'CO7': ['top', 'left', '50', '20', '50', '50', '1', '20', '0', '1', '', '1', '0', 'whole', '#fff', '#000'],
  'CO8': ['top', 'left', '50', '20', '50', '50', '1', '10', '0', '0', '', '0', '0', 'whole', '#fff', '#000'],
  'CO9': ['bottom', '', '45', '0', '450', '200', '0', '8', '1', '0', '%', '1', '0', 'dec', '#fff', '#000'],
  'CO10': ['bottom', '', '45', '0', '450', '200', '0', '8', '1', '0', '%', '1', '0', 'dec', '#fff', '#000'],
  'CO10_1': ['bottom', '', '45', '0', '983', '230', '0', '8', '1', '0', '%', '1', '0', 'dec', '#fff', '#000'],
  'CO12': ['bottom', '', '45', '0', '460', '230', '0', '24', '0', '1', '', '0', '0', 'whole', '#00527A', '#fff'],
  'CO13': ['bottom', '', '45', '0', '460', '230', '0', '20', '0', '1', '', '0', '0', 'whole', '#00527A', '#fff'],
  'CO14': ['bottom', '', '45', '0', '460', '230', '0', '12', '0', '1', '', '0', '0', 'whole', '#00527A', '#fff'],
  'CO15': ['bottom', '', '45', '0', '460', '230', '0', '8', '0', '1', '', '0', '0', 'whole', '#fff', '#fff'],
  'CO16': ['top', '', '110', '30', '500', '70', '0', '10', '1', '0', '%', '0', '0', 'dec', '#fff', '#000'],
  'CO20': ['top', '', '110', '30', '500', '70', '0', '10', '1', '0', '%', '0', '0', 'dec', '#fff', '#000'],
  'CO21': ['top', '', '110', '30', '500', '70', '0', '10', '1', '0', '%', '0', '0', 'dec', '#fff', '#000'],
  'CO22': ['top', 'left', '42', '25', '500', '70', '1', '10', '1', '0', '%', '1', '0', 'whole', '#fff', '#000'],
  'CO23': ['top', 'left', '42', '25', '500', '70', '1', '10', '1', '0', '%', '1', '0', 'whole', '#fff', '#000'],
  'CO24': ['top', 'left', '42', '25', '500', '70', '1', '10', '1', '0', '%', '1', '0', 'whole', '#fff', '#000'],
  'CO25': ['top', '', '110', '30', '500', '70', '0', '10', '1', '0', '%', '0', '0', 'dec', '#fff', '#000'],
};
var objHeightSettings = {
  'CO1': '429', //Chart 1st - Prevalence of FGMC among  women aged 15-49
  'CO2': '430', //Chart 2nd - Inequalities
  'CO3': '260', //Chart 3rd - Projection 1
  'CO4': '260', //Chart 4th - Projection 2
  'CO5': '388', //Chart 5th - Opposition to FGMC
  'CO5_1': '388', //Chart 5th - Opposition to FGMC
  'CO6': '200', //Chart 6th - Table of key indicators
  'CO7': '300', //Chart 7th - FGMC among girls aged 5-9
  'CO8': '388', //Chart 8th - Age at FGMC
  'CO9': '250', //Chart 9th - Type of FGMC
  'CO10': '250', //Chart 10th - Performer at FGMC
  'CO10_1': '250', //Chart 10th - Performer at FGMC
  'CO16': '430', //Chart 2nd - Inequalities
  'CO20': '430',
  'CO21': '430',
  'CO22': '388',
  'CO23': '388',
  'CO24': '388',
  'CO25': '430'

};
var objTitleSettings = {
  'SEN': 'FGM among Young Girls', //Country 1st
  'BFA': 'FGM among Young Girls', //Country 2nd
  'EGY': 'FGM among Young Girls', //Country 3rd
  'UGA': 'FGM among Young Girls', //Country 4th
  'MRT': 'FGM among Young Girls', //Country 5th
  'GMB': 'FGM among Young Girls', //Country 6th
  'SDN': 'FGM among Young Girls', //Country 7th
  'DJI': 'FGM among Young Girls', //Country 8th
  'ERI': 'FGM among Young Girls', //Country 9th
  'ETH': 'FGM among Young Girls', //Country 10th
  'SOM': 'FGM among Young Girls', //Country 11th
  'GIN': 'FGM among Young Girls', //Country 12th
  'GNB': 'FGM among Young Girls', //Country 13th
  'KEN': 'FGM among Young Girls', //Country 14th
  'MLI': 'FGM among Young Girls'				//Country 15th
};
var chartTopSettings = {
  'CO1': '13', //Chart 1st - Prevalence of FGMC among  women aged 15-49
  'CO2': '13', //Chart 2nd - Inequalities
  'CO3': '7', //Chart 3rd - Projection 1
  'CO4': '7', //Chart 4th - Projection 2
  'CO5': '6', //Chart 5th - Opposition to FGMC
  'CO5_1': '6', //Chart 5th - Opposition to FGMC
  'CO6': '200', //Chart 6th - Table of key indicators
  'CO7': '2', //Chart 7th - FGMC among girls aged 5-9
  'CO8': '26', //Chart 8th - Age at FGMC
  'CO9': '7', //Chart 9th - Type of FGMC
  'CO10': '7', //Chart 10th - Performer at FGMC
  'CO10_1': '7', //Chart 10th - Performer at FGMC
  'CO16': '13', //Chart 2nd - Inequalities
  'CO20': '13',
  'CO21': '13',
  'CO22': '6',
  'CO23': '6',
  'CO24': '6',
  'CO25': '13',
};
var chartWidthSettings = {
  'CO1': '80', //Chart 1st - Prevalence of FGMC among  women aged 15-49
  'CO2': '453', //Chart 2nd - Inequalities
  'CO3': '474', //Chart 3rd - Projection 1
  'CO4': '474', //Chart 4th - Projection 2
  'CO5': '983', //Chart 5th - Opposition to FGMC
  'CO5_1': '983', //Chart 5th - Opposition to FGMC
  'CO6': '200', //Chart 6th - Table of key indicators
  'CO7': '450', //Chart 7th - FGMC among girls aged 5-9
  'CO8': '983', //Chart 8th - Age at FGMC
  'CO9': '983', //Chart 9th - Type of FGMC
  'CO10': '983', //Chart 10th - Performer at FGMC
  'CO10_1': '983', //Chart 10th - Performer at FGMC
  'CO16': '453', //Chart 2nd - Inequalities
  'CO20': '453',
  'CO21': '453',
  'CO22': '983',
  'CO23': '983',
  'CO24': '983',
  'CO25': '453'

};
var chartHeightSettings = {
  'CO1': '413', //Chart 1st - Prevalence of FGMC among  women aged 15-49
  'CO2': '408', //Chart 2nd - Inequalities
  'CO3': '243', //Chart 3rd - Projection 1
  'CO4': '243', //Chart 4th - Projection 2
  'CO5': '370', //Chart 5th - Opposition to FGMC
  'CO5_1': '370', //Chart 5th - Opposition to FGMC
  'CO6': '200', //Chart 6th - Table of key indicators
  'CO7': '281', //Chart 7th - FGMC among girls aged 5-9
  'CO8': '375', //Chart 8th - Age at FGMC
  'CO9': '224', //Chart 9th - Type of FGMC
  'CO10': '224', //Chart 10th - Performer at FGMC
  'CO10_1': '224', //Chart 10th - Performer at FGMC
  'CO16': '408', //Chart 2nd - Inequalities
  'CO20': '408',
  'CO21': '408',
  'CO22': '370',
  'CO23': '370',
  'CO24': '370',
  'CO25': '408',
};
var chartIds = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO5_1', 'CO7', 'CO8', 'CO9', 'CO10', 'CO10_1'];
var subtitleFontStyle = {
  color: '#a2a7ab',
  fontSize: '26px',
  fontWeight: 'normal',
  margin: '50px',
  textAlign: 'center',
  fontFamily: 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
};
var legendFontStyle = {
  color: '#000000',
  fontSize: '9px',
  fontWeight: 'normal',
  textAlign: 'center',
  fontFamily: 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
};
var chartTitleSettings = {
  'CO1': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49', //Chart 1st
  'CO2': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49', //Chart 2nd
  'CO3': 'Projections', //Chart 3rd
  'CO4': 'Projections', //Chart 4th
  'CO5': 'Opposition to FGM', //Chart 5th
  'CO7': 'FGM among Young Girls', //Chart 7th
  'CO8': 'Age at FGM', //Chart 8th
  'CO9': 'Type of FGM', //Chart 9th
  'CO10': 'Performers of FGM', //Chart 10th
  'CO20': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49', //Chart 2nd
  'CO21': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49', //Chart 2nd
  'CO25': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49',
  'CO22': 'Opposition to FGM',
  'CO23': 'Opposition to FGM',
  'CO24': 'Opposition to FGM',
};
filter = "";
(function ($) {


  Drupal.behaviors.unfpa_global_fgm_data = {
    attach: function (context, settings) {

      mapDisplayData = Drupal.settings.data['mapDisplayData'];
      fileMapDataAreaIdJsonStatus = Drupal.settings.data['fileMapDataAreaIdJsonStatus'];
      DEFAULT_AREA_ID = Drupal.settings.data['default_area_id'];
      MAPS_API_URL = Drupal.settings.data['maps_api_url'];
      MAPS_FROM_API = Drupal.settings.data['maps_from_api'];
      SERVER_NAME = Drupal.settings.data['SERVER_NAME'];
      allareaLevel5 = Drupal.settings.data['allareaLevel5'];
      mainObj = Drupal.settings.data['mainObj'];
      country_name = Drupal.settings.country_name;

    }
  };

  function showtable() {
    var visDivID = containerParentDivID = null;
    window[visDivID] = null;
//      visDivID = $(this).parent().parent().attr('id').replace('graph', '');
//      containerParentDivID = $(this).parent("div").parent("div").attr('id');
    visDivID = 'CO7';
    containerParentDivID = 'graphCO7';
    //console.log(visDivID+'  '+containerParentDivID);
    var objType = 'chart';
// get chart object
    var obj = window[visDivID];

    objTblSettings = {title: {enabled: false}};
    calledSec = 'hosting';
    //call function to get object data in tabular format
    tblContent = dfa_tableview.getDataTableContent(objType, obj, containerParentDivID, objTblSettings, calledSec);
    //alert(tblContent);
    //console.log(tblContent);
    $('#' + containerParentDivID).append(tblContent);
    $('#CO7').css('display', 'block');
    $('#' + containerParentDivID).find($('div.dfapi-visTbl-container')).css('display', 'none');
  }
  $(document).ready(function () {


    var exportMenuHtml = '<div class="grapTypesMenu rnded_crnrs smlBox" ><a href="javascript:void(0)" class="export" type="png">PNG</a><br /><a href="javascript:void(0)" class="export" type="jpeg">JPEG</a><br /><a href="javascript:void(0)" class="export" type="pdf">PDF</a></div>';
    $('.parent_div').find('a.icon_four').append(exportMenuHtml);
    $('.accordion div').addClass('opened');
    /// render Map
    if (MAPS_FROM_API == 'yes') {
      renderMapHighchartsAPI();
    } else {
      renderMapHighcharts();
    }

    load_all_charts(DEFAULT_AREA_ID);
// Label click
    $('.dashboard-country-outer-box label').click(function () {
      $(this).siblings().children('.iCheck-helper').attr("checked", true).trigger("click");

    });


    $('.button').click(function () {
      $('.button').removeClass('active');
      $(this).addClass('active');
      $('.overview-map-section div.dfapi-visTbl-container').hide();


      if ($('button.graph').hasClass('active')) {
        $('#graphCO16').css('display', 'block');
        $(this).parents('.dashboard-country-outer-box').find('.download-link').css('display', 'block');

      } else
      {
        $('#graphCO16').css('display', 'none');
      }
      if ($('button.map').hasClass('active')) {
        $('#mapDivId').css('display', 'block');
        $('.mapDivId').css('display', 'block');
        $(this).parents('.dashboard-country-outer-box').find('.download-link').css('display', 'block');
      } else
      {
        $('#mapDivId').css('display', 'none');
        $('.mapDivId').css('display', 'none');
      }

//      containerParentDivID = 'graphCO7';
//      $('.button').removeClass('active');
//      $(this).addClass('active');
//
//
//      $(this).parents('.dashboard-country-outer-box').find('.overview-section').css('display', 'none');
//      a = $(this).prop('className');
//
//      div_class = '.' + $(this).prop('id');
//      $(div_class).css('display', 'block');
//
//
//      showtable();
//
//      if ($('button.table').hasClass('active')) {
//        $('#CO7').css('display', 'none');
//        $('#' + containerParentDivID).find($('div.dfapi-visTbl-container')).css('display', 'block');
//      }


    });

    // Indicator click
    $('.dashboard-country-outer-box .iCheck-helper').click(function () {


      if (($(this).parent().parent().parent('.filter-option').prop('className')) !== 'filter-option')
      {
        $(this).parents('.dashboard-country-outer-box').find('.section-indicators').find('li').removeClass('active');
        $(this).parent().parent().parent().addClass('active');
        $(this).parents('.dashboard-country-outer-box').find('.chart').css('display', 'none');
        div_class = '.' + $(this).siblings('input').prop('id');
        $(div_class).css('display', 'block');
      }
      debugger;

      if ($(this).parent().parent().parent().parent().prop('id') == "filter_inequalities_opposition")
      {
        inequalities_opposition_filter = $(this).siblings().val();
        $('.inequalities_opposition_graph').removeClass('active');
        $('.inequalities_opposition_graph').css('display', 'none');
        $('.' + inequalities_opposition_filter).css('display', 'block');
        $('.' + inequalities_opposition_filter + '_inequalities_graph').addClass('active');
        $('.' + inequalities_opposition_filter + '_opposition_graph').addClass('active');

        //$('#graphCO5 .' + opposition_filter).css('display', 'block');
      }


    });
    //click events of zoom in, zoom out and full extend
    $('.dfapi_hcnav_medium_map_icons .dfapi_hcnav_big').on('click', function () {
      var hc_mapobj = window['mapDivId']; //$('#'+base.el.id).highcharts();
      if ($(this).hasClass('zoomin')) {
        hc_mapobj.mapZoom(0.5); // Zoom In
      } else if ($(this).hasClass('zoomout')) {
        hc_mapobj.mapZoom(2); // Zoom Out
      } else if ($(this).hasClass('fulextend')) {
        hc_mapobj.mapZoom(); // full extend
      }
    });
//    $("#map_render").mouseenter(function () {
//      $(".dfapi-viz-toolbar-icons ").find(".dfapi-viz-toolbar").show();
//    }).mouseleave(function () {
//      $(".dfapi-viz-toolbar-icons ").find(".dfapi-viz-toolbar").hide();
//    });
    //click events of table data
    $('.map_graph_table').on('click', function () {
      debugger;
//
//      if ($(this).hasClass('table')) {

      var visDivID = containerParentDivID = null;
      window[visDivID] = null;
      // get chart parent container div id
      //var containerParentDivID = $(this).parent().next('div').attr('id');
      // get chart container div id
      visDivID = 'mapDivId';
      containerParentDivID = 'map_render';
      // visualization object type
      //var objType = 'chart'; //$(this).closest('div.bigdiv').children().find('div').attr('class');
      if (visDivID == 'mapDivId') {
        objType = 'map';
      } else {
        chartTitle = 'test'; //mainObj[visDivID].chartTitle;
      }

      // get chart object
      var obj = window[visDivID];
      //console.log ("Chart Container: " + visDivID + "\nChart Container Parent: " + containerParentDivID+'  objType-->'+objType);
      debugger;
      if (!$('#map_render').find($('div.dfapi-visTbl-container')).length)
      {
        debugger;
        console.log("table value");
        console.log(obj);
        objTblSettings = {title: {enabled: false}};
        calledSec = 'hosting';
        //call function to get object data in tabular format
        tblContent = dfa_tableview.getDataTableContent(objType, obj, containerParentDivID, objTblSettings, calledSec);
        //alert(tblContent);
        $('#map_render').append(tblContent);
        //$('#mapDivId').hide();
        $('#map_render').find($('div.dfapi-visTbl-container')).hide();
      }
      if ($('#map_render').find($('div.dfapi-visTbl-container')).css('display') == 'none') {
        debugger;
        //$('#mapDivId').slideToggle("slow");
        //$('#map_render div.dfapi-visTbl-container').slideToggle("slow");
        $('#map_render div.dfapi-visTbl-container').show();

        $('.dfapi_hcnav_medium_map_icons').hide();

        $('#mapDivId').css('display', 'none');
        $('#graphCO16').css('display', 'none');
      }
//      else
//      {
//        $('#map_render div.dfapi-visTbl-container').hide();
//        if ($(this).parents('.dashboard-country-outer-box').find('button.map').hasClass('active'))
//          $(this).parents('.dashboard-country-outer-box').find('button.map').click();
//
//        if ($(this).parents('.dashboard-country-outer-box').find('button.graph').hasClass('active'))
//          $(this).parents('.dashboard-country-outer-box').find('button.graph').click();
//
//      }

      // call function to enable sorting of table
      dfa_tableview.enableTableSorting(containerParentDivID);
      // }
    });
    $('.dfapi-viz-toolbar-medium').on('click', function () {
      if ($(this).hasClass('print'))
      {
        print_logo = "<div class='logo-unfpa'>";
        print_title = "<h2 class='print-title'>FGM Dashboard - " + country_name + "</h2>";
        copyright_text = "<div class='copyright_content'>(c) United Nations Population Fund</div>";
        if ($(this).parents('.levels').find('button.map').hasClass('active')) {
          debugger;
          $('.map-print-title,.map-print-subtitle').css('display', 'block');
          $('.map-title').css('display', 'block');
          var containerParentDivID = 'map_render';
          // get chart container div id
          var visDivID = 'mapDivId';
          $('#' + containerParentDivID).find('.print-subtitle').before(print_logo);
          $('#' + containerParentDivID).find('.print-subtitle').before(print_title);
          $('#' + containerParentDivID).append(copyright_text);
          sbtitle = $(this).parents('.chart-sections').find('.get-print-title').text();
          $('#' + containerParentDivID).find('.print-subtitle').html(sbtitle);
          $('#' + containerParentDivID).find('.print-subtitle').css('display', 'block');
        } else if ($(this).parents('.levels').find('button.table').hasClass('active'))
        {
          var containerParentDivID = 'map_render';

          $('#' + containerParentDivID).find('.print-subtitle').before(print_logo);
          $('#' + containerParentDivID).find('.print-subtitle').before(print_title);
          $('#' + containerParentDivID).append(copyright_text);
          $('#' + containerParentDivID).find('.print-subtitle').css('display', 'block');
          sbtitle = $(this).parents('.chart-sections').find('.get-print-title').text();
          $('#' + containerParentDivID).find('.print-subtitle').html(sbtitle);
        } else
        {
          var containerParentDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id');
          $('#' + containerParentDivID).find('.print-subtitle').before(print_logo);
          $('#' + containerParentDivID).find('.print-subtitle').before(print_title);
          sbtitle = $(this).parents('.chart-sections').find('.get-print-title').text();
          $('#' + containerParentDivID).find('.print-subtitle').html(sbtitle);
          $('#' + containerParentDivID).find('.print-subtitle').css('display', 'block');
        }
        // visualization object type
        var objType = 'map';
        dfa_printvisualization.print(objType, containerParentDivID);
        $('.print-title').css('display', 'none');
        $('.print-subtitle').css('display', 'none');
        $('.map-title').css('display', 'none');
        $('.map-print-title,.map-print-subtitle').css('display', 'none');
        $('.logo-unfpa').css('display', 'none');
        $('.copyright_content').css('display', 'none');


      }

    });
    $('.dwnld-opts a').on('click', function () {
      if (!$(this).parents('.dashboard-country-outer-box').find('button.graph').hasClass('active')) {
        // get chart container div id
        var visDivID = 'mapDivId';
        // visualization object type
        var objType = 'map';
        // get visualization object
        var obj = window[visDivID];
        //Chart Title
        var chartTitle = 'FGM Dashboard - ' + country_name;
        var subtitle = $('#div1').text();



        // different file format (png, jpeg, svg and pdf) can be used
        //var fileType = typeVal;
        var fileType = this.type;


        if (fileType == 'csv') {

          var chart = $('#' + visDivID).highcharts();
          mapchartdata = chart.series[0].data;
          mapcategories = [];

          $(mapchartdata).each(function (index) {
            mapcategories.push(mapchartdata[index].properties['NAME1_']);
          });

          chart.axes[0].categories = mapcategories;
          chart.axes[1].categories = mapcategories;
          chart.axes[0].names = mapcategories;
          chart.axes[1].names = mapcategories;
          var chart = $('#' + visDivID).highcharts();
          console.log("graphchart");
          console.log(chart);

          $(this).attr('href', 'data:text/csv;charset=utf-8,' + escape(chart.getCSV()));
          $(this).attr('download', country_name + "-graph.csv");


        } else {

          // name of file to be used while downloading
          var selVisFileName = 'chart';
          // apply visualization additional settings like title, subtile before to download
          objDwnldSettings = {};
          //chartSubtitle = chartSubtitle.replace(/[<br/>]/g, ' ');

          if (objType == 'chart')
          {
            objDwnldSettings = {
              title: {
                text: chartTitle,
                style: {
                  'font-size': '11px',
                  'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
                  'color': '#3C3C3C',
                  'fontWeight': 'bold'
                },
                subtitle: {
                  'text': subtitle,
                  'style': {
                    'font-size': '12px',
                    'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
                    'fill': '#3C3C3C',
                    'color': '#3C3C3C',
                    'fontWeight': 'bold'
                  }
                }}};
          } else if (objType == 'map')
          {
            selVisFileName = 'map';
            objDwnldSettings = {
              'title': {
                'text': chartTitle,
                'style': {
                  'font-size': '12px',
                  'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
                  'fill': '#3C3C3C',
                  'color': '#3C3C3C',
                  'fontWeight': 'bold'
                }
              },
              'subtitle': {
                'text': subtitle,
                'style': {
                  'font-size': '12px',
                  'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
                  'fill': '#3C3C3C',
                  'color': '#3C3C3C',
                  'fontWeight': 'bold'
                }
              }
            };
          }

          dfa_dwnldvisualization.download(objType, obj, selVisFileName, fileType, objDwnldSettings);
        }
      }
    });
    $(document).on('click', '.icon_one', function (e) {
      var visDivID = containerParentDivID = null;
      window[visDivID] = null;
      visDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
      containerParentDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
      if (containerParentDivID == "CO2") {

        //var visDivID = $('.inequalities_graph').css('display', 'block').prop('id');
        containerParentDivID = $("#graphCO2").find('.active').prop("id");
        visDivID = $("#graphCO2").find('.active').prop("id");
      } else if (containerParentDivID == "CO5") {
        debugger;
        //var visDivID = $('.inequalities_graph').css('display', 'block').prop('id');
        containerParentDivID = $("#graphCO5").find('.active').prop("id");
        visDivID = $("#graphCO5").find('.active').prop("id");
      } else
      {
        visDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
        containerParentDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
      }

      //console.log(visDivID+'  '+containerParentDivID);
      var objType = 'chart';
      /*if(visDivID=='mapDivId'){
       objType = 'map';
       } else {
       chartTitle ='test';		//mainObj[visDivID].chartTitle;
       }*/
      // get chart object
      var obj = window[visDivID];
      debugger;
      //console.log(containerParentDivID);
      if (!$('#' + containerParentDivID).find($('div.dfapi-visTbl-container')).length)
      {
        objTblSettings = {title: {enabled: false}};
        calledSec = 'hosting';
        //call function to get object data in tabular format
        tblContent = dfa_tableview.getDataTableContent(objType, obj, containerParentDivID, objTblSettings, calledSec);
        //alert(tblContent);
        //console.log(tblContent);
        $('#' + containerParentDivID).append(tblContent);
        $('#' + containerParentDivID).find($('div.dfapi-visTbl-container')).css('display', 'none');
      }
      if ($('#' + containerParentDivID).find($('div.dfapi-visTbl-container')).css('display') == 'none') {

//        $('#' + visDivID).slideToggle("slow");
//        $('#' + containerParentDivID + ' div.dfapi-visTbl-container').slideToggle("slow");
        //$('#' + visDivID).css('display', 'none');
        $('#' + containerParentDivID + ' div.dfapi-visTbl-container').css('display', 'block');
        $('#' + containerParentDivID + ' div.dfapi-visTbl-container').siblings().css('display', 'none');
        $(this).find('i').html('Graph');
        $(this).addClass('icon-graph');
      } else
      {

        $('#' + containerParentDivID + ' div.dfapi-visTbl-container').css('display', 'none');
        $('#' + containerParentDivID + ' div.dfapi-visTbl-container').siblings().css('display', 'block');
        $(this).find('i').html('Table');
        $(this).removeClass('icon-graph');

      }

      // call function to enable sorting of table
      dfa_tableview.enableTableSorting(containerParentDivID);
      //ChartTable(chartID,'');
      //return false;
    });
// Print Chart
//    $(document).on('click', '.icon_three', function () {
//      var chartID = $(this).parent().parent().parent().parent().parent().attr('id').replace('graph', '');
////      var chartID = "hello";
//      console.log('chartID');
//      console.log(chartID);
//
//      var graphObj = window[chartID];
//      var title = chartTitleSettings[chartID];
//      //$('.highcharts-title').css("display", "block");
//      $('.highcharts-title').css({"font-size": "12px"});
//      $('.highcharts-title').html(title);
////      $('#graph' + chartID + ' h2.box_title').css("display", "block");
////      $('#graph' + chartID + ' h2.box_title').html(title);
//
//      var cheight = graphObj.chartHeight;
//      var cwidth = graphObj.chartWidth;
//      graphObj.optionsMarginTop = 50;
//      //graphObj.setSize($(window).width()-100,$(window).height()-100,true);
//      graphObj.print();
//      graphObj.setSize(cwidth, cheight, false);
//      //$('#graph' + chartID + ' h2.box_title').css("display", "none");
//      $('.highcharts-title').css("display", "none");
//      window.location.reload(true);
//      return false;
//    });

    showChart = function (obj, objSettings) {
      this.containerWidth = '';
      //Set variables to use later for undo of full screen

      //Getting visualization container width
      this.containerWidth = obj.chartWidth;
      //Getting visualization container height
      this.containerHeight = obj.chartHeight;
      //Getting chart title properties
      this.titleProperties = dfa_fullscreen.getChartTitleProperties('title', obj);
      //Getting chart subtitle properties
      this.subTitleProperties = dfa_fullscreen.getChartTitleProperties('subtitle', obj);
      //Getting chart original legend settings used to restore legend
      this.legendOldSettings = obj.legend;
      //Getting chart x-axis and y-axis properties
      var xAxisChartProperties = dfa_fullscreen.getChartAxisproperties(obj, 'xAxis', objSettings.xAxis);
      var yAxisChartProperties = dfa_fullscreen.getChartAxisproperties(obj, 'yAxis', objSettings.yAxis);
      //Getting chart data labels properties
      var dataLabelsProperties = dfa_fullscreen.getChartDataLblProperties(obj);
      console.log("dataLabelsProperties");
      console.log(dataLabelsProperties);

      //Getting chart parent container width and height to use later for undo of full screen
      var containerParentDivWidth = dfa_fullscreen.fullScreenContDivIDObj.width();
      var containerParentDivHeight = dfa_fullscreen.fullScreenContDivIDObj.height();
      var test = containerWidth;
      /*
       * $ Blocking function to masking/unmasking screen when on/off fullscreen
       */
      $.blockUI({
        //Container Parent div object
        message: dfa_fullscreen.fullScreenContDivIDObj,
        //Deafult css to be used for masking
        css: {
          top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
        },
        //When page is blocked to show full screen
        onBlock: function () {
          var chartId = $(this).children().children().attr('id').replace('graph', '');
          var graphObj = window[chartId];
          //Call function to add export options
          dfa_fullscreen.addExportOptions();
          //Call function to save new chart settings
          dfa_fullscreen.saveChartNewSettings();
          //Set chart size as per as full screen
          if (!dfa_fullscreen.viewTblDfltFlg)				//if by default table view is not on
            dfa_fullscreen.obj.setSize(dfa_fullscreen.fullScreenContDivIDObj.width(), dfa_fullscreen.fullScreenContDivIDObj.height(), true);
          //Call function to add share options
          if (dfa_fullscreen.objShareOptions.enabled)
            dfa_fullscreen.addShareOptions();
          //Call function to view chart data in table format
          if (dfa_fullscreen.viewTblDfltFlg)				//if by default table view is on
            dfa_fullscreen.viewTable();
          $('#TblDtVw').css({'margin-top': '0px'});
          $('#visTblDvId').css({'margin-top': '0px'});
          if (chartId == 'CO2' || chartId == 'CO21' || chartId == 'CO20' || chartId == 'CO16')
          {
            $('#CO21').css({'margin': '3px'});
            $('#CO20').css({'margin': '3px'});
            $('#CO2').css({'margin': '3px'});
            $('#CO16').css({'margin': '3px'});
            graphObj.setTitle({
              y: 0
            });
          }

          return false;
        },
        // when page is unblocked to hide full screen
        onUnblock: function () {
          debugger;

          if ($('#dfapi-fs-outer-container').find('.map_div').prop('id') == 'mapDivId') {
            $('#mapDivId').highcharts().setSize(containerWidth, containerHeight);

            // Remove fullscreen outer div
            var cnt = $("#dfapi-fs-outer-container").contents();
            $("#dfapi-fs-outer-container").parent().replaceWith(cnt);
            //$('#mapDivId').parent().siblings('.dfapi-visTbl-container').css('display', 'none');
//            $('#map_render').find($('div.dfapi-visTbl-container')).hide();
//            if ($('button.table').hasClass('active')) {
//              $('button.table').click();
//            }
            if ($('button.map').hasClass('active')) {
              $('button.map').click();
            }
            //Hide chart title
            $('.highcharts-title').css('display', 'none');
          } else if ($('#dfapi-fs-outer-container').find('.bdrcls').prop('id') == 'CO16') {

            $('#CO16').highcharts().setSize(containerWidth, containerHeight);
//            $('#CO16').parent().siblings('.dfapi-visTbl-container').css('display', 'none');
            // Remove fullscreen outer div
            var cnt = $("#dfapi-fs-outer-container").contents();
            $("#dfapi-fs-outer-container").parent().replaceWith(cnt);
            var chart = $('#CO16').highcharts();
            var opt = chart.series[0].options;
            opt.dataLabels.enabled = false;
            chart.series[0].update(opt);
//            if ($('button.table').hasClass('active')) {
//              renderMapHighchartsAPI();
//            }
            //renderMapHighchartsAPI();
            debugger;
            renderMapHighchartsAPI();
            if ($('button.graph').hasClass('active')) {
              $('button.graph').click();
            }
            $('.highcharts-title').css('display', 'none');

          } else
          {
            chartid = $('#dfapi-fs-outer-container').find('.bdrcls').prop('id');
            $('#' + chartid).parent().siblings('.dfapi-visTbl-container').css('display', 'none');

            $('#map_render div.dfapi-visTbl-container').show();
            //    $('#' + chartid).highcharts().setSize(containerWidth, containerHeight);
            var cnt = $("#dfapi-fs-outer-container").contents();
            $("#dfapi-fs-outer-container").parent().replaceWith(cnt);
            $('#' + chartid).parents('.parent_div').siblings('#action-links').find('.icon_one').find('i').html('Table');
            $('#' + chartid).parents('.parent_div').siblings('#action-links').find('.icon_one').removeClass('icon-graph');

            if ($('button.table').hasClass('active')) {
              $('button.table').click();
            }
            //$('#map_render').find('.dfapi-visTbl-container').css('display', 'block');

//
//            var chart = $('#' + chartid).highcharts();
//            var opt = chart.series[0].options;
//            var opt2 = chart.series[1].options;
//            opt.dataLabels.enabled = false;
//            opt2.dataLabels.enabled = false;
//            chart.series[0].update(opt);
//            chart.series[1].update(opt2);

            //renderMapHighchartsAPI();
            $(window).resize();
          }
          if ($('button.table').hasClass('active')) {
            $('button.table').click();
          }
          debugger;
          $('.fullscreen-table-title').html("");
          $('.fls-tbl-title').html("");

          //================
//          console.log("test");
//          console.log(chartcontainer);





          // dfa_fullscreen.restoreChartPreviousSettings(xAxisChartProperties, yAxisChartProperties, dataLabelsProperties);



//          var chart = $('#' + chartcontainer).highcharts();
//          var opt = chart.series[0].options;
//          console.log("dataLabelsProperties");
//          console.log(dataLabelsProperties[0].enabled);
//          console.log("opt");
//          console.log(opt.dataLabels.enabled);
//          opt.dataLabels.enabled = dataLabelsProperties[0].enabled;
//          chart.series[0].update(opt);
//          chart.series[1].update(opt);
//          chart.series[2].update(opt);
//          chart.series[3].update(opt);
//          chart.series[3].update(opt);



//          // Hide data labels
//          var chart = $('#' + chartcontainer).highcharts();
//          var opt = chart.series[0].options;
//          opt.dataLabels.disabled = !opt.dataLabels.enabled;
//          chart.series[0].update(opt);


//          $('#graphCO7').css('display', 'block');
////          $('#graphCO7 .dfapi-visTbl-container').css('display', 'block');
//          if ($('#graphCO7').parents('.dashboard-country-outer-box').find('button.table').hasClass('active')) {
//            $('#graphCO7').parents('.dashboard-country-outer-box').find('button.table').click();
//          }
          //================
//          $('.icon_bg').css('display', 'block');
//          var chart = dfa_fullscreen.containerParentDivIDObj.selector.replace('#graph', '');
//          var graphObj = window[chart];
//          graphObj.setTitle({
//            text: ''
//          });
//          if (chart == 'CO2')
//          {
//            chartID = 'CO2';
//            $('#CO2').css({'margin-top': '90px'});
//            $('#graph' + chartID).find('span:eq(0)').css("left", "365px");
//            $('#graph' + chartID).find('span:eq(1)').css("left", "365px");
//            $('#graph' + chartID).find('span:eq(2)').css("left", "365px");
//            $('#graph' + chartID).find('span:eq(0)').css("top", "15px");
//            $('#graph' + chartID).find('span:eq(1)').css("top", "107px");
//            $('#graph' + chartID).find('span:eq(2)').css("top", "233px");
//          }
//
//          if (typeof dfa_fullscreen.obj.userOptions != 'undefined') {
//            // call function to remove map title and sub title
//            dfa_fullscreen.removeMapTtlSubTtl();
//            //Call function to restore chart previous settings
//          dfa_fullscreen.restoreChartPreviousSettings(xAxisChartProperties, yAxisChartProperties, dataLabelsProperties);
//            //Set container parent div old width and height
//            dfa_fullscreen.fullScreenContDivIDObj.width(containerParentDivWidth).height(containerParentDivHeight);
//            //Set visualization old size
//            dfa_fullscreen.obj.setSize(dfa_fullscreen.containerWidth, dfa_fullscreen.containerHeight, true);
//          } else {
//            $(window).resize();
//          }
//
//          //unwrap newly added full screen container div
//          dfa_fullscreen.fullScreenContDivIDObj.unwrap();
//          dfa_fullscreen.containerParentDivIDObj.unwrap();
//          $('.highcharts-subtitle').css({'display': 'none'});
//          $('#visTblDvId').css({'display': 'none'});
          return false;
        }
      });
    };


    $(window).resize(function () {

      $('#Remove').remove();
      load_all_charts(DEFAULT_AREA_ID);
    });
    /**
     * function to close full screen
     */
    closeFullScreen = function ()
    {
      tableScreenFlg = false;
      //Remove full screen realted divs
      if ($("#visTblDvId").length)
        $("#visTblDvId").remove();
      if ($('div.dfapi-share-box').length)
        $('div.dfapi-share-box').remove();
      if ($('div.dfapi-action-box').length)
        $('div.dfapi-action-box').remove();
      // Call unmasking
      //jQuery.unblockUI();
      $.unblockUI();

    }
// on Chart Full Screen Highchart Zoom click event
    $(document).on('click', '.icon_two', function () {
      debugger;
      var window_height = $(window).height();
      // Hide scroll bar in full screen
      $('html').css('overflow', 'hidden');
//      $('.fullscreen-table-title').html('its coming');
      if ($(this).parents('.levels').find('button.table').hasClass('active')) {

      }
      if ($(this).parents('.levels').find('button.map').hasClass('active')) {
        var containerParentDivID = $('#map_render').find('.map_div').attr('id');
        // get chart container div id
        var visDivID = $('#map_render').find('.map_div').attr('id');
      } else {
        var containerParentDivID = $(this).parent().parent().parent().siblings('.parent_div').attr('id');
        if (containerParentDivID == "graphCO2") {
          //var visDivID = $('.inequalities_graph').css('display', 'block').prop('id');
          var visDivID = $("#graphCO2").find('.active').prop("id");
        } else if (containerParentDivID == "graphCO5") {
          //var visDivID = $('.inequalities_graph').css('display', 'block').prop('id');
          var visDivID = $("#graphCO5").find('.active').prop("id");
        } else {
          // get chart container div id
          var visDivID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
        }
//        var containerParentDivID = $(this).parent().parent().parent().siblings('.parent_div').attr('id');
//        // get chart container div id
//        var visDivID = $(this).parent().parent().parent().siblings('.parent_div').attr('id').replace('graph', '');
      }
      $('#' + containerParentDivID).find($('div.dfapi_chartTbl')).hide();
      // visualization object type
      var objType = 'chart';
      var obj = window[visDivID];
      var subtitle_text = $('#country_name h3').text();
      //alert(subtitle_text);
      var chartTitle = ''; //Chart Title
      if (visDivID == 'map_render') {
        objType = 'map';
        // chartTitle = Ind_Name;
        //chartTitle = $('#Ind_Name').html();
      } else {
        chartTitle = chartSubTitleSettings[visDivID];
        //console.log(chartTitle);
      }
      if (visDivID == 'mapDivId' || containerParentDivID == "graphCO16") {
        chartTitle = $('#div1').text();
      }
      if (containerParentDivID == "graphCO2" || containerParentDivID == "graphCO20" || containerParentDivID == "graphCO21" || containerParentDivID == "graphCO25") {
        chartTitle = "Human rights violations affect females differently. Girls who are the least educated are at the greatest risk of FGM";
      }
      if (containerParentDivID == "graphCO5" || containerParentDivID == "graphCO22" || containerParentDivID == "graphCO23" || containerParentDivID == "graphCO24") {
        chartTitle = "About 66 percent of women believe FGM should be discontinued";
      }
      $('.fullscreen-table-title').html(chartTitle);
      // get chart object
      if (objType == 'chart') {
        // visualization object new/additional settings for full screeen
        var objSettings = {
          'title': {
            'text': chartTitle,
            'align': 'center',
            'style': {
              'color': '#666666',
              'fontWeight': 'bold',
              'font-size': '12px',
              'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
            }
          },
          'subtitle': {
            'enabled': true,
            'text': subtitle_text,
            'align': 'center',
            'style': {
              'color': '#666666',
              'fontWeight': 'bold',
              'font-size': '9px',
              'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
            }

          }
        };
      }

      // visualization object share options
      var objShareOptions = {
        'enabled': false,
        'url': (window.location != window.parent.location) ? document.referrer : document.location.href,
        'iconSize': 'big',
        'callback': '',
        'onmousehover': false,
        'containerParentDivID': containerParentDivID,
        'containerDivId': visDivID,
        'chartType': objType
      };
      // set flag to show table by default
      var tblDefaultOpt = true;
      if (visDivID == 'map') {

        tblDefaultOpt = false;
      }
      chartcontainer = visDivID;
      resetSelVisStatus(containerParentDivID, visDivID);
      //call function to show full screen
      dfa_fullscreen.show(objType, obj, containerParentDivID, objSettings, objShareOptions, tblDefaultOpt);
      $('.icon_bg').css('display', 'none');
      return false;
    });
////Export  Chart PNG,JPEG, PDF
    $(document).on('click', '.export', function () {

      if (!$(this).parents('.levels').find('button.map').hasClass('active')) {

        var parent_class = $(this).parent().parent().parent().parent().attr('class');
        if ($(".dfapi-fs-outer-container")[0]) {
          var chartID = $(this).parents('#action-links').siblings('.parent_div').attr('id');
        } else
        {
          var chartID = $(this).parents('#action-links').siblings('.parent_div').attr('id').replace('graph', '');
        }

        if (chartID == "CO2") {

          chartID = $("#graphCO2").find('.active').prop("id");
        } else if (chartID == "CO5") {

          chartID = $("#graphCO5").find('.active').prop("id");
        }

        var type = $(this).attr('type');
        //var chartID = $(this).parent().attr('id').replace('graph','');
        ChartTable(chartID, 'hide');
        var chartDiv = $('#graph' + chartID);

        if (type == 'csv') {
          var chart = $('#' + chartID).highcharts();
          console.log("graphchart");
          console.log(chart);

          $(this).attr('href', 'data:text/csv;charset=utf-8,' + escape(chart.getCSV()));
          $(this).attr('download', country_name + "-graph.csv");


        } else {



          var graphObj = window[chartID];
          // reverse categories
          var catRev = ($.trim(graphObj.series[0].chart.xAxis[0].reversed)) ? graphObj.series[0].chart.xAxis[0].reversed : false;
          var serType = ($.trim(graphObj.options.chart.defaultSeriesType)) ? graphObj.options.chart.defaultSeriesType : false;
          var stackFlag = $.trim(graphObj.options.plotOptions.column.stacking);
          if (stackFlag == 'true') {
            serType = 'stacked';
          }

          if (graphObj.options.plotOptions.column.scatterLine == true) {
            serType = 'scatterLine';
          }

          var fileType = 'application/pdf';
          if (type == 'jpeg')
            fileType = 'image/jpeg';
          else if (type == 'png')
            fileType = 'image/png';
          else if (type == 'svg')
            fileType = 'image/svg+xml';
          //var fName = $('span.pull-left').text()+'_'+chartDiv.find('h2.box_title').text();
//        var title = chartTitleSettings[chartID];
          debugger;
          var title = "FGM Dashboard - " + country_name;
          var subtitleText = "";
          var subtitleText = chartSubTitleSettings[chartID];
          if (chartID == "CO16") {
            subtitleText = $('#div1').text();
          }
          if (chartID == 'allarea') {
            var titleprop = {verticalAlign: 'top', y: 0, text: title, style: {fontSize: '11px', color: '#3E576F'}, useHTML: true};
          } else {
            // var yvalue
            titleprop = {verticalAlign: 'top', y: 5, text: title, style: {fontSize: '10px', color: '#3E576F'}, useHTML: true};
          }

          graphObj.exportChart({
            type: fileType
            , filename: 'chart', scale: 4 //areaName - chart title(alphabets only).pdf,
          }, {title: titleprop, subtitle: {text: subtitleText, y: 20}, legend: {verticalAlign: 'bottom', y: 10}
          });
          return false;
        }
      }
    });

    //Highcharts title hide
    $('.highcharts-title').css("display", "none");

  });







  /*
   function to export map/chart
   */
  function exportFunc(typeVal, parentId) {

    // get chart container div id
    var visDivID = 'mapDivId';
    // visualization object type
    var objType = 'map';
    // get visualization object
    var obj = window[visDivID];
    //Chart Title
    var chartTitle = '';
    var subtitle = $('#country_name h3').text();
    if (visDivID == 'mapDiv')
    {
      objType = 'map';
      chartTitle = 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49';
    }


    // different file format (png, jpeg, svg and pdf) can be used
    var fileType = typeVal;
    // name of file to be used while downloading
    var selVisFileName = 'chart';
    // apply visualization additional settings like title, subtile before to download
    objDwnldSettings = {};
    //chartSubtitle = chartSubtitle.replace(/[<br/>]/g, ' ');

    if (objType == 'chart')
    {
      objDwnldSettings = {title: {text: chartTitle, style: {'font-size': '11px', 'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif', 'color': '#3C3C3C', 'fontWeight': 'bold'}, subtitle: {enabled: false}}};
    } else if (objType == 'map')
    {
      selVisFileName = 'map';
      objDwnldSettings = {
        'title': {
          'text': 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49',
          'style': {
            'font-size': '12px',
            'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
            'fill': '#3C3C3C',
            'color': '#3C3C3C',
            'fontWeight': 'bold'
          }
        },
        'subtitle': {
          'text': subtitle,
          'style': {
            'font-size': '12px',
            'font-family': 'Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif',
            'fill': '#3C3C3C',
            'color': '#3C3C3C',
            'fontWeight': 'bold'
          }
        }
      };
    }

    dfa_dwnldvisualization.download(objType, obj, selVisFileName, fileType, objDwnldSettings);
  }



  function resetSelVisStatus(containerParentDivID, visDivID) {



    // var containerParentDivID = $('#' + containerParentDivID).parent().attr('id');
    //console.log(containerParentDivID);

    // if selected visualization is already being shown
    if ($('#' + containerParentDivID).find('div.dfapi-visTbl-container').length) {
      visTblContDivID = $('#' + containerParentDivID).find('div.dfapi-visTbl-container').attr('id');
      $('#' + containerParentDivID).find($('#' + visDivID)).show();
      $('#' + containerParentDivID).find($('#' + visTblContDivID)).remove();
      if ((visDivID == 'CO6_1') || (visDivID == 'CO7_1') || (visDivID == 'CO13_1') || ((visDivID == 'CO14_1'))) {
        $("#addText" + visDivID).css('display', 'block');
      }
    }
  }

// Function to show hide chart data in table format
  function ChartTable(chartID, flag) {

    if (flag == 'hide') {
      $('#table' + chartID).remove();
      return false;
    }

    var graphObj = window[chartID];
    if ($('#table' + chartID).is(':visible')) {
      $('#table' + chartID).slideToggle("slow");
      //$('#'+chartID).slideToggle("slow");
      //$('#table'+chartID).remove();
    } else {
      var childDiv = $('#' + chartID).children();
      var tblWidth = $(childDiv).width();
      var tableStr = graphObj.getCSV();
      //console.log(tableStr);
      var top = chartTopSettings[chartID];
      var width = tblWidth; //chartWidthSettings[chartID];
      var height = chartHeightSettings[chartID];
      $('#' + chartID).after('<div id="table' + chartID + '" class="dataTable" style="display:none;overflow-y: auto;  margin-bottom: 68px;  margin-left: 1px;height:' + height + 'px; width:' + width + 'px; top:' + top + 'px">' + tableStr + '</div>');
      $('#table' + chartID).find('tr:eq(0)').addClass('table-hader');
      $('#table' + chartID).slideToggle("slow"); //css('margin-left','290px').show().animate({marginLeft:'0px'});
    }
    //dfa_tableview.enableTableSorting('#'+chartID);
    return false;
  }

  //function to return numberformat datavalue
  function addCommas(nStr)
  {

    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }



  function load_all_charts(area_id) {
    debugger;
    var title = '';
    title = objTitleSettings[area_id];
    $('#spcl_heading').html(title);
    $.each(mainObj, function (key, val) {

      if (val.data_type == 'pie') {
        drawPieChart(val, key, area_id);
      } else if (key == 'CO6') {
        getIndicatorList(key, val, area_id);
      } else if (key == 'CO11') {
        getHeadings(key, val);
      } else if (key == 'CO2') {
        console.log(key + "val");
        console.log(val);

        loadGroupedChart(val, 'CO25', area_id, filter);

        var inequaltites_education_chart = jQuery.extend(true, {}, val);
        var inequality_key2_exist = 1 in val.series;
//        var inequality_key1_exist = inequaltites_education_chart.series.includes(0);
        var inequality_key1_exist = 0 in val.series;
        console.log('hutt');
        console.log(inequality_key1_exist);
        for (i = 0; i < 12; i++) {
          if (i != 6 && i != 7 && i != 8) {
            inequality_key1_exist ? delete inequaltites_education_chart.series[0].data[i] : '';
            inequality_key2_exist ? delete inequaltites_education_chart.series[1].data[i] : '';
            inequality_key3_exist = i in val.categories;
            inequality_key3_exist ? delete inequaltites_education_chart.categories[i] : '';
          }
        }

        for (i = 0, j = 6; i < 3; i++, j++) {
          inequality_key1_exist ? inequaltites_education_chart.series[0].data[i] = inequaltites_education_chart.series[0].data[j] : '';
          inequality_key2_exist ? inequaltites_education_chart.series[1].data[i] = inequaltites_education_chart.series[1].data[j] : '';
          inequaltites_education_chart.categories[i] = inequaltites_education_chart.categories[j];
          inequality_key1_exist ? delete inequaltites_education_chart.series[0].data[j] : '';
          inequality_key2_exist ? delete inequaltites_education_chart.series[1].data[j] : '';
          inequality_key3_exist = j in val.categories;
          inequality_key3_exist ? delete inequaltites_education_chart.categories[j] : '';
        }

        loadGroupedChart(inequaltites_education_chart, 'CO21', area_id, filter);

        var inequaltites_residence_chart = jQuery.extend(true, {}, val);
        for (i = 0; i < 10; i++) {
          inequality_key1_exist ? delete inequaltites_residence_chart.series[0].data[i] : '';
          inequality_key2_exist ? delete inequaltites_residence_chart.series[1].data[i] : '';
          inequality_key3_exist = i in val.categories;
          inequality_key3_exist ? delete inequaltites_residence_chart.categories[i] : '';
        }

        for (i = 0, j = 10; i < 2; i++, j++) {
          inequality_key1_exist ? inequaltites_residence_chart.series[0].data[i] = val.series[0].data[j] : '';
          inequality_key2_exist ? inequaltites_residence_chart.series[1].data[i] = val.series[1].data[j] : '';
          inequaltites_residence_chart.categories[i] = val.categories[j];
          inequality_key1_exist ? delete inequaltites_residence_chart.series[0].data[j] : '';
          inequality_key2_exist ? delete inequaltites_residence_chart.series[1].data[j] : '';
          inequality_key3_exist = j in val.categories;
          inequality_key3_exist ? delete inequaltites_residence_chart.categories[j] : '';
        }


        loadGroupedChart(inequaltites_residence_chart, 'CO2', area_id, filter);

        var inequaltites_wealth_chart = jQuery.extend(true, {}, val);
        for (i = 5; i < 12; i++) {
          // do something with `substr[i]`
          inequality_key1_exist ? delete inequaltites_wealth_chart.series[0].data[i] : '';
          inequality_key2_exist ? delete inequaltites_wealth_chart.series[1].data[i] : '';
          inequality_key3_exist = i in val.categories;
          inequality_key3_exist ? delete inequaltites_wealth_chart.categories[i] : '';
        }
        loadGroupedChart(inequaltites_wealth_chart, 'CO20', area_id, filter);





      } else {

        if (key == 'CO5') {
          console.log("CO5 value");
          console.log(val);
          loadGroupedChart(val, 'CO5', area_id, filter);
          var opposition_key1_exist = 0 in val.series;
          var opposition_key2_exist = 1 in val.series;
          // Opposition residence bar graph
          var opposition_residence_chart = jQuery.extend(true, {}, val);

          // Opposition education bar graph
          var opposition_education_chart = jQuery.extend(true, {}, val);

          // Opposition wealth bar graph
          var opposition_wealth_chart = jQuery.extend(true, {}, val);

          // Opposition residence bar graph
          for (i = 0; i < 14; i++) {
            opposition_key1_exist ? delete opposition_residence_chart.series[0].data[i] : '';
            opposition_key2_exist ? delete opposition_residence_chart.series[1].data[i] : '';
            opposition_key3_exist = i in val.categories;
            opposition_key3_exist ? delete opposition_residence_chart.categories[i] : '';

            opposition_key1_exist ? delete opposition_education_chart.series[0].data[i] : '';
            opposition_key2_exist ? delete opposition_education_chart.series[1].data[i] : '';
            opposition_key3_exist ? delete opposition_education_chart.categories[i] : '';

            opposition_key1_exist ? delete opposition_wealth_chart.series[0].data[i] : '';
            opposition_key2_exist ? delete opposition_wealth_chart.series[1].data[i] : '';
            opposition_key3_exist ? delete opposition_wealth_chart.categories[i] : '';
          }

          // Country data for all charts
          opposition_key1_exist ? opposition_residence_chart.series[0].data[0] = val.series[0].data[0] : '';
          opposition_key2_exist ? opposition_residence_chart.series[1].data[0] = val.series[1].data[0] : '';

          opposition_key1_exist ? opposition_education_chart.series[0].data[0] = val.series[0].data[0] : '';
          opposition_key2_exist ? opposition_education_chart.series[1].data[0] = val.series[1].data[0] : '';

          opposition_key1_exist ? opposition_wealth_chart.series[0].data[0] = val.series[0].data[0] : '';
          opposition_key2_exist ? opposition_wealth_chart.series[1].data[0] = val.series[1].data[0] : '';

          for (i = 1, j = 2; i < 3; i++, j++) {

            opposition_key1_exist ? opposition_residence_chart.series[0].data[i] = val.series[0].data[j] : '';
            opposition_key2_exist ? opposition_residence_chart.series[1].data[i] = val.series[1].data[j] : '';
            opposition_key3_exist = j in val.categories;
            opposition_key3_exist ? opposition_residence_chart.categories[i] = val.categories[j] : '';
          }
          loadGroupedChart(opposition_residence_chart, 'CO22', area_id, filter);


          for (i = 1, j = 5; i < 4; i++, j++) {
            opposition_key1_exist ? opposition_education_chart.series[0].data[i] = val.series[0].data[j] : '';
            opposition_key2_exist ? opposition_education_chart.series[1].data[i] = val.series[1].data[j] : '';
            opposition_key3_exist = i in val.categories;
            opposition_key3_exist ? opposition_education_chart.categories[i] = val.categories[j] : '';

          }

          loadGroupedChart(opposition_education_chart, 'CO23', area_id, filter);


          for (i = 1, j = 9; i < 6; i++, j++) {
            opposition_key1_exist ? opposition_wealth_chart.series[0].data[i] = val.series[0].data[j] : '';
            opposition_key2_exist ? opposition_wealth_chart.series[1].data[i] = val.series[1].data[j] : '';
            opposition_key3_exist = j in val.categories;
            opposition_key3_exist ? opposition_wealth_chart.categories[i] = val.categories[j] : '';
          }

          loadGroupedChart(opposition_wealth_chart, 'CO24', area_id, filter);
        } else {
          loadGroupedChart(val, key, area_id, filter);
        }
        if (key == 'CO10')
          loadGroupedChart(val, 'CO10_1', area_id, filter);
        if (key == 'CO5') {
          loadGroupedChart(val, 'CO5_1', area_id, filter);
        }
      }

// for client requirement, egypt data is to be considered as not available.
      var footnote = '*The indicator adds up together community leaders as well as advocacy networks and lobby groups.';
      if (area_id == 'EGY') {
        if (key == 'CO9') {
          $('#div10').html('');
        }
        //('.footnote').html(footnote);
        $("#footnote").show();
      } else {
        $("#footnote").hide();
      }
// for client requirement, egypt data is to be considered as not available.

    });
  }

  // for key indicators list table  ( Object CO6)
  function getIndicatorList(chartID, data, area_id) {

    var count = 1;
    $(data).each(function (i) {
      var divId = ($.trim(this.divId)) ? $.trim(this.divId) : '-';
      var val = ($.trim(this.val)) ? $.trim(this.val) : '-';
      var src = ($.trim(this.src)) ? $.trim(this.src) : '-';
      if (DEFAULT_AREA_ID == 'DJI') {
        if (divId == 'Ind5') {
          val = '1995, 2009*';
        }
      }
      if (DEFAULT_AREA_ID == 'EGY') {
        if (divId == 'Ind5') {
          val = 'Yes; 2008';
        }
      }
      if (DEFAULT_AREA_ID == 'ETH') {
        if (divId == 'Ind5') {
          val = 'Yes; 2004';
        }
      }
      if (DEFAULT_AREA_ID == 'GIN') {
        if (divId == 'Ind5') {
          val = '1965, 2000*';
        }
      }
      if (DEFAULT_AREA_ID == 'KEN') {
        if (divId == 'Ind5') {
          val = '2001, 2011*';
        }
      }

      if (src.indexOf(area_id) != -1) {
        src = src.substring(4, src.length);
      }
      if (val.indexOf('*') != -1) {
        $("#spcl_text").show();
      } else {
        $("#spcl_text").hide();
      }

      if (val == 0) {
        val = '-';
      } else {
        if (divId == 'Ind1') {
          val = addCommas(val);
        } else if (divId == 'Ind5') {
          if (val.indexOf('Making progress;') != -1) {
            val = val.substring(0, val.indexOf(';'))
          }
          val = val;
        } else {
          val = Math.round(val);
        }
      }
      $('#ind_val' + count).html(val);
      $('#src' + count).html(src);
      count++;
    });
  }

  // for key indicators list table  ( Object CO11)
  function getHeadings(chartID, data, area_id) {

    var count = 1;
    var val = '';
    var subT1 = '';
    var subT2 = '';
    var subT3 = '';
    var subT4 = '';
    var subT5 = '';
    var subT6 = '';
    var subT7 = '';
    var subT8 = '';
    var subT9 = '';
    var subT10 = '';
    var spanLen = $("span#Remove").length;
    for (var i = 0; i < spanLen; i++) {
      $("span#Remove").remove();
    }

    $(data).each(function (i) {
      var divId = ($.trim(this.divId)) ? $.trim(this.divId) : '';
      val = ($.trim(this.val)) ? $.trim(this.val) : '';
      if (val.indexOf("\u00a0") != -1)
      {
        val = val.replace("\u00a0", " ");
      }

      val = val.charAt(0).toUpperCase() + val.slice(1);
      if (divId == 'div1' || divId == 'div2' || divId == 'div3') {
        val = '&nbsp;' + val;
      }

      $('#' + divId).html('-');
      $('#' + divId).html(val);
      if (divId != 'div1' && divId != 'div2' && divId != 'div3') {
        if (val != '') {
          $('#' + divId).before('<span class="leftarrow" id="Remove"></span>');
        }
      }

      count++;
      if (val.indexOf('&nbsp;') != -1) {
        val = val.replace("&nbsp;", "");
      }

      if (divId == 'div1') {
        subT1 = val;
      }
      if (divId == 'div2') {
        subT1 = subT1 + '<br/>' + val;
      }
      if (divId == 'div3') {
        subT2 = val;
      }
      if (divId == 'div4') {
        subT3 = val;
      }
      if (divId == 'div5') {
        subT4 = val;
      }
      if (divId == 'div6') {
        subT5 = val;
      }
      if (divId == 'div7') {
        subT6 = val;
      }
      if (divId == 'div8') {
        subT6 = subT6 + '<br/>' + val;
      }
      if (divId == 'div9') {
        subT8 = val;
      }
      if (divId == 'div10') {
        subT9 = val;
      }
      if (divId == 'div11') {
        subT10 = val;
      }



      if (val == '') {
        $('#' + divId).parent().parent().find('.rightarrow').hide();
        // $('#div7').removeClass();
      } else {
        $('#' + divId).parent().parent().find('.rightarrow').show();
      }

      chartSubTitleSettings = {
        'CO1': subT1, //Chart 1st
        'CO2': subT2, //Chart 2nd
        'CO3': subT3, //Chart 3rd
        'CO4': subT4, //Chart 4th
        'CO5': subT5, //Chart 5th
        'CO7': subT6, //Chart 7th
        'CO8': subT8, //Chart 8th
        'CO9': subT9, //Chart 9th
        'CO10': subT10, //Chart 10th
        'CO20': subT2, //Chart 2nd
        'CO21': subT2
      };
    });
  }

// for all the line, bar, column and stacked charts ( Object CO1, CO2, CO3, CO4, CO5, CO7, CO9, CO10)
  function loadGroupedChart(data, chartID, area_id, filter) {

    var Series;
    var catArr = [];
    var str = [];
    var graphType = data.data_type;
    var xLblRotation = 0;
    var XyValue;
    var height = objHeightSettings[chartID];
    var subtitleText = '';
    var mainTitle = ''
    var ChartMarginTop = 20;
    var legendY = 4;
    var xLblRotation = '';
    var seriesAnimation = ($.trim(seriesAnimation)) ? seriesAnimation : false;
    var legArr = [];
    var valign;
    var legAlign;
    var legXVal;
    var legYVal;
    var legWidth;
    var itemWidth;
    var floatVal;
    var pointWidth;
    var showLegend;
    var dataLabelsVal;
    var yVal;
    var offset;
    var maxVal;
    var formatVAl;
    var showGridLine;
    var showMarker;
    var minVal = '';
    var tooltipFormat = '';
    var backColor = '';
    var labelColor = '';
    var stepVal;
    legArr = objLegSettings[chartID];
    valign = String(legArr[0]);
    legAlign = String(legArr[1]);
    legXVal = parseInt(legArr[2]);
    legYVal = parseInt(legArr[3]);
    legWidth = parseInt(legArr[4]);
    itemWidth = parseInt(legArr[5]);
    floatVal = parseInt(legArr[6]);
    floatVal = Boolean(floatVal);
    pointWidth = parseInt(legArr[7]);
    showLegend = parseInt(legArr[8]);
    showLegend = Boolean(showLegend);
    dataLabelsVal = parseInt(legArr[9]);
    dataLabelsVal = Boolean(dataLabelsVal);
    formatVal = String(legArr[10]);
    showGridLine = parseInt(legArr[11]);
    showGridLine = Boolean(showGridLine);
    showMarker = parseInt(legArr[12]);
    showMarker = Boolean(showMarker);
    tooltipFormat = String(legArr[13]);
    backColor = String(legArr[14]);
    labelColor = String(legArr[15]);
    Series = data.series;
    console.log('series');
    console.log(data);
    if (chartID == 'CO3') {
      stepVal = 5;
    }
    if (chartID == 'CO16') {
      showLegend = false;
    }

    if (chartID == 'CO1') {
      if (area_id == 'UGA') {
        maxVal = 4;
      } else {
        maxVal = 100;
      }
    }

    if (area_id == 'UGA')
      formatVal = ''; // '%' sign will not be used for Uganda country in axis labels

    if (chartID == 'CO21' || chartID == 'CO20' || chartID == 'CO2' || chartID == 'CO25' || chartID == 'CO5' || chartID == 'CO16') {
      if (area_id != 'UGA')					// Maximum range of 100 in labels for CO2 and CO5 chart will not be used for Uganda country
        maxVal = 100;
    } else {
      if (data.minVal)
        minVal = data.minVal;
      if (data.maxVal) {
        if (data.maxVal > 10)
          maxVal = parseInt(data.maxVal) + 17;
        else
          maxVal = parseInt(data.maxVal) + 1;
      }
    }
    // for the overall source of the dashboard
    if (data.src) {
      var src = data.src;
      if (src.indexOf(area_id) != -1) {
        src = src.substring(4, src.length);
      }
      $('#src').html(src);
    }

    // for the last indicator's source of the dashboard
    if (data.source) {
      $('#source').html(data.source);
    } else {
      $('#source').html('---');
      $('#source').html(data.source);
    }

    // for client requirement, egypt data is to be considered as not available.

    if (chartID == 'CO9' && (area_id == 'EGY' || area_id == 'ETH'))
    {
      data.series.length = 0;
    }

    // for client requirement, egypt data is to be considered as not available.
    if (!data.series.length) {
      subtitleText = 'Data not available';
      $('#graph' + chartID).find('div.icon_bg').css('display', 'none');
    } else {
      $('#graph' + chartID).find('div.icon_bg').css('display', 'block');
    }

    if (data.labels == 'vertical')
    {
      xLblRotation = -90;
      XyValue = 48;
      offset = 25;
    }
    if (chartID == 'CO9') {
      offset = 20;
      margin = 20;
    }
    if (chartID == 'CO14') {
      XyValue = 20;
    }

    var categoryReversed = ($.trim(categoryReversed)) ? categoryReversed : false;
    var origType = graphType;
    graphType = $.trim(graphType) ? graphType : 'column';
    var stackFlag = false;
    if (chartID == "CO16")
      graphType = 'bar';
    if (graphType == 'stacked') { // add these terms in config later
      graphType = 'bar';
      stackFlag = 'normal';
      maxVal = 100;
    } else {
      stackFlag = '';
    }


    var columnSettings = {
      stacking: stackFlag,
      pointPadding: 0.2,
      borderWidth: 0,
      shadow: false,
      // pointWidth: pointWidth,
      showInLegend: true,
      scatterLine: false,
      dataLabels: {
        enabled: dataLabelsVal,
        style: {
          fontSize: '10px'
        },
        formatter: function () {

          if (this.point.name == '') {
          } else {
            if (this.y < 0.5)
              return this.y;
            else
              return Math.round(this.y);
          }
        },
        y: yVal
      }
    };
    if (chartID == 'CO1') {
      if (area_id == 'GMB') {
        $.each(data.series, function (i, series) {
          var seriesName = series.name;
          if (seriesName.indexOf("2005") != -1) {
            $.each(series.data, function (i, series1) {
              var innerSerieName = series1.name;
              if (innerSerieName != 'Total 15-19 yr' && innerSerieName != 'Total 45-49 yr' && innerSerieName != 'Gambia') {
                series1.y = 0;
              }
            });
          }
        });
      }
      Series = data.series;
    }



    margin = 10;
    if (seriesAnimation == false)
      columnSettings.animation = seriesAnimation;
    else
      delete columnSettings.animation;

    if (chartID == 'CO5' || chartID == 'CO9' || chartID == 'CO10')
      chartWidth = '960';
    else
      chartWidth = '460';
    //calculating the chart width according to the window's width
    var width = $(window).width();
    if (chartID == 'CO10' || chartID == 'CO9' || chartID == 'CO1') {
      //width = 900;
      if (width > 930) {
        width = 900;
      } else if (width > 640 && width < 900) {
        width = width / 2 - 20;
        legWidth = width;
      } else if (width > 320 && width < 640) {
        width = width - 60;
        legWidth = width;
      } else {
        width = width - 10;
        legWidth = width;
      }
    }

    if (chartID == 'CO21' || chartID == 'CO25' || chartID == 'CO20' || chartID == 'CO16' || chartID == 'CO3' || chartID == 'CO4' || chartID == 'CO5_1' || chartID == 'CO10_1') {

      if (width > 930) {
        width = 450;
      } else if (width > 640 && width < 900) {
        width = width / 2 - 20;
        legWidth = width;
      } else if (width > 320 && width < 640) {
        width = width - 60;
        legWidth = width;
      } else {
        width = width - 10;
        legWidth = width;
      }


      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: height,
        marginRight: 15,
        width: width
      };
    } else {
      if (width > 930) {
        width = 920;
      } else if (width > 640 && width < 900) {
        width = width - 20;
        legWidth = width;
      } else {
        width = width - 10;
        legWidth = width;
      }
      if (chartID == 'CO7')
        //width = '460';
        if (width > 900) {
          width = 460;
        } else if (width > 640 && width < 920) {
          width = width / 2 - 20;
          legWidth = width;
        } else if (width > 300 && width < 640) {
          width = width - 60;
          legWidth = width;
        } else {
          width = width - 10;
          legWidth = width;
        }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: height,
        marginRight: 15,
        width: width
      };
    }

    if (chartID == 'CO2' || chartID == 'CO20' || chartID == 'CO2') {
      if (width > 900) {
        width = 450;
      } else if (width > 640 && width < 900) {
        width = width / 2 - 20;
        legWidth = width;
      } else if (width > 320 && width < 640) {
        width = width - 60;
        legWidth = width;
      } else {
        width = width - 10;
        legWidth = width;
      }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: 300,
        marginRight: 15,
        marginLeft: 125,
        width: width,
      };
    }
    if (chartID == 'CO21') {

      if (width > 930) {
        width = 450;
      } else if (width > 640 && width < 900) {
        width = width / 2 - 20;
        legWidth = width;
      } else if (width > 320 && width < 640) {
        width = width - 60;
        legWidth = width;
      } else {
        width = width - 10;
        legWidth = width;
      }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: 300,
        marginRight: 15,
        width: width,
      };
    }
    if (chartID == 'CO5' || chartID == 'CO22') {
//      if (width > 930) {
//        width = 450;
//      } else if (width > 640 && width < 900) {
//        width = width / 2 - 20;
//        legWidth = width;
//      } else if (width > 320 && width < 640) {
//        width = width - 60;
//        legWidth = width;
//      } else {
//        width = width - 10;
//        legWidth = width;
//      }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: 320,
        marginRight: 15,
        marginTop: 70,
        width: 450,
      };
    }
    if (chartID == 'CO23') {
//      if (width > 930) {
//        width = 450;
//      } else if (width > 640 && width < 900) {
//        width = width / 2 - 20;
//        legWidth = width;
//      } else if (width > 320 && width < 640) {
//        width = width - 60;
//        legWidth = width;
//      } else {
//        width = width - 10;
//        legWidth = width;
//      }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: 370,
        marginRight: 15,
        marginTop: 70,
        width: 450,
      };
    }
    if (chartID == 'CO24') {
//      if (width > 930) {
//        width = 450;
//      } else if (width > 640 && width < 900) {
//        width = width / 2 - 20;
//        legWidth = width;
//      } else if (width > 320 && width < 640) {
//        width = width - 60;
//        legWidth = width;
//      } else {
//        width = width - 10;
//        legWidth = width;
//      }

      chartSettings = {
        renderTo: chartID,
        defaultSeriesType: graphType,
        height: 350,
        marginRight: 15,
        marginTop: 70,
        width: 450,
      };
    }
    var chart = new Highcharts.Chart({
      //new Highcharts.Chart({
      exporting: {
        csv: {
          columnHeaderFormatter: function (series, key) {
            console.log('series');
            console.log(series);
            console.log('key');
            console.log(key);
            // series.axes[0].categories

            return 'value';

          }
        },
        enabled: false,
        chartOptions: {
          chart: {
            events: {
              load: function () {
                //this.renderer.image('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/UNFPA_logo.svg/2000px-UNFPA_logo.svg.png', 100, 100, 120, 30)
                this.renderer.image('http://www.unfpa.org/sites/all/modules/sowp/images/logo.svg', -12, 5, 100, 30)
                  .add();
                this.renderer.text('test text', 10, 250)
                  .attr({
                    rotation: 0
                  })
                  .css({
                    color: '#4572A7',
                    fontSize: '8px',
                    fontStyle: 'italic'
                  })
                  .add();
              }
            }
          }
        },
      },
      chart: chartSettings,
      credits: {
        enabled: false
      },
      xAxis: {
        categories: data.categories,
        //max: maxVal1,
        labels: {
          rotation: xLblRotation,
          step: stepVal,
          style: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: 'black',
            fontSize: '11px'
          },
          formatter: function () {
            var str = this.value;
            if (str != null && str != '' && isNaN(str)) {
              if (data.labels == 'vertical') {
                if (str.length <= 29)
                  return str;
                else
                  return str.substr(0, 25) + '...';
              } else {
                return str;
              }
            }
            if (chartID == 'CO3' || chartID == 'CO4') {
              return this.value;
            }
          }
        },
        reversed: categoryReversed,
        gridLineWidth: 0
      },
      title: {
        text: ''
      },
      subtitle: {
        text: subtitleText,
        style: subtitleFontStyle
      },
      yAxis: {
        allowDecimals: true,
        min: minVal,
        max: maxVal,
        marginRight: 10,
        lineWidth: 1,
        tickWidth: 1,
        labels: {
          style: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            width: 150,
            color: 'black'
          },
          formatter: function () {
            var val = this.value;
            return val + formatVal;
          }
        },
        title: {
          text: ''
        },
        gridLineWidth: showGridLine,
        gridLineDashStyle: 'Dot',
        plotLines: [{
            color: '',
            width: 1,
            value: 0
          }],
      },
      legend: {
        enabled: showLegend,
        align: legAlign,
        verticalAlign: valign,
        floating: floatVal,
        borderColor: '',
        x: legXVal,
        y: legYVal,
        offset: offset,
        padding: 3,
        width: legWidth,
        symbolWidth: 10,
        symbolPadding: 5,
        itemWidth: itemWidth,
        itemStyle: legendFontStyle
          /*{
           lineHeight: '2px',
           fontSize: '10px',
           color: '#000'
           },*/,
        labelFormatter: function () {
          var legendName = this.name;
          if (area_id) {
            var legendName = legendName.replace(area_id + " ", "");
          }
          return legendName;
        }
      },
      tooltip: {
        formatter: function () {
          if (this.point.tooltip != "")
          {
            tooltip_val1 = this.point.tooltip;
            if (tooltipFormat == 'dec') {
              if (chartID == 'CO3') {			// for client's special requirement to show datalabel and year as the estimated year for chart 3
                if (this.point.y < 0.5) {

                  if (this.point.value != 0) {
                    return tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                  } else {
                    return tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                  }
                } else {
                  if (this.point.value != 0) {
                    return tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                  } else {
                    return tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                  }
                }
              } else {
                if (this.point.y < 0.5)
                  return tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                else
                  return  tooltip_val1 + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
              }
            } else {
              if (this.y < 0.5)
                return tooltip_val1 + '<br/>' + Highcharts.numberFormat(this.point.y, 1);
              else
                return  tooltip_val1 + '<br/>' + Highcharts.numberFormat(this.point.y, 0);
            }

          } else
            return false;
        },
      },
      plotOptions: {
        column: columnSettings,
        bar: columnSettings,
        line: columnSettings,
        pointPadding: 0,
        series: {
          stacking: stackFlag,
          groupPadding: 0.01, //when there is a gap before first col and after last col then use it and keep its value as minimum as possible

          // pointWidth: pointWidth,
        },
        line:{
          marker: {enabled: showMarker},
          dataLabels: {
            enabled: dataLabelsVal
          }
        }
      },
      series: data.series
    }, function (chart) { // on complete
      if (chartID == 'CO21' || chartID == 'CO20' || chartID == 'CO2' || chartID == 'CO16' || chartID == 'CO25')
      {
        var width = $(window).width();
        if (width > 930) {
          xVal = 362;
        } else if (width > 640 && width < 900) {
          xVal = 265;
        } else {
          xVal = 193;
        }
        if (chartID == 'CO25')
        {
          chart.renderer.text('Residence', xVal, 65, 201, 105)
            .css({
              fontSize: '11px',
              color: '#808080',
            }).add();
          chart.renderer.text('Education Level', xVal, 147, 201, 105)
            .css({
              fontSize: '11px',
              color: '#808080'
            }).add();
          chart.renderer.text('Wealth quintile', xVal, 265, 201, 105)
            .css({
              fontSize: '11px',
              color: '#808080'
            }).add();
        }

      }


      if (chartID == 'CO3' && subtitleText != 'Data not available')
      {
        chart.renderer.text('* ARR:annual rates of reduction', 35, 152, 201, 105)
          .css({
            color: '#000',
            fontSize: '10px'
          }).add();
      }

      if (chartID == 'CO4')
      {
        chart.renderer.text('(in thousands)', 60, 20, 201, 105)
          .css({
            color: '#000',
            fontSize: '10px'
          }).add();
      }
    }
    );
    window[chartID] = chart;
  }

// function to draw pie charts
  function drawPieChart(data, divId, chartID) {
//    var exportSettings = {'enabled': false};
    var mainObj = data;
    var pieData;
    var length = mainObj.series.length;
    var chart = '';
//calculating chrat width as per the window's width
    var width = $(window).width();
    if (width > 930)
      width = 450;
    else if (width > 640 && width < 900)
      width = width / 2 - 20;
    else
      width = width - 50;
    if (length == '3')
    {
      pieData = [{
          type: 'pie',
          name: 'Women 15-49',
          showInLegend: false,
          data: mainObj.series[0].data,
          size: '56%', //'150%',
          center: ['50%', '35%'],
          shadow: false,
          dataLabels: {enabled: false}
        },
        {
          type: 'pie',
          name: 'Women 15-19',
          showInLegend: false,
          data: mainObj.series[1].data,
          size: '38%', //'150%',
          center: ['25%', '80%'],
          shadow: false,
          dataLabels: {enabled: false}
        },
        {
          type: 'pie',
          name: 'Women 45-49',
          showInLegend: true,
          data: mainObj.series[2].data,
          size: '38%',
          align: 'right',
          center: ['75%', '80%'],
          shadow: false,
          dataLabels: {enabled: false}
        }];
    } else if (length < 3 && length > 0) {
      pieData = [{
          type: 'pie',
          name: 'Female',
          showInLegend: true,
          data: mainObj.series[0].data,
          size: '60%', //'150%',
          center: ['50%', '35%'],
          shadow: false,
          dataLabels: {enabled: false}
        }];
    } else {
    }

    var maxBar = new Array();
    var minBar = new Array();
    if (!mainObj.series[0])
    {
      $('#graph' + divId).find('div.icon_bg').css('display', 'none');
      $('#' + divId).html('<div style="text-align: center; margin: 50px; font-size: 26px; font-weight: normal; color: #a7a2ab;">Data not available</div>');
    } else
    {
      $('#graph' + divId).find('div.icon_bg').css('display', 'block');
      var height = objHeightSettings[divId];
      chartpieloadtype = 'update';
      chart = new Highcharts.Chart({
        exporting: {
          enabled: false,
          chartOptions: {
            chart: {
              events: {
                load: function () {
                  //this.renderer.image('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/UNFPA_logo.svg/2000px-UNFPA_logo.svg.png', 100, 100, 120, 30)
                  this.renderer.image('http://www.unfpa.org/sites/all/modules/sowp/images/logo.svg', -12, 5, 100, 30)
                    .add();
                  this.renderer.text('test text', 10, 250)
                    .attr({
                      rotation: 0
                    })
                    .css({
                      color: '#4572A7',
                      fontSize: '8px',
                      fontStyle: 'italic'
                    })
                    .add();
                }
              }
            }
          },
        },
        chart: {
          height: height,
          width: width,
          borderWidth: 0,
          animation: {duration: 800},
          renderTo: divId,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        credits: {
          enabled: false
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: mainObj.categories,
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return  this.point.name;
          }
        },
        labels: {
          enabled: true,
          formatter: function () {
            return  this.value;
          }
        },
        legend: {
          borderWidth: 0.5,
          borderColor: '#000',
          itemStyle: legendFontStyle
        },
        tooltip: {
          formatter: function () {
            return Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%' + ' - ' + this.point.name;
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            height: 700,
            backgroundColor: '#d9d9d9',
            dataLabels: {
              distance: -30,
              color: 'black',
              style: {
                fontSize: '11px'
              },
              formatter: function () {

                if (this.point.name == 'Total 0-4 yr') {
                  return '<p style="color:#fff">' + this.point.name + '</p><br/><p style="color:#fff">' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%</p>';
                } else {
                  return this.point.name + '<br/>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%';
                }
              },
            },
            point: {
              events: {
                legendItemClick: function (event) {
                  synchronizePieSeries(event, this, chart);
                }
              }
            },
            //	showInLegend: true
          }
        },
        series: pieData
      }, function (chart) { // on complete

        var width = $(window).width();
        if (width > 930) {
          xVal = 139;
          xVal1 = 332;
          xVal2 = 248;
        } else if (width > 640 && width < 900) {
          xVal = 264;
          xVal1 = 111;
          xVal2 = 201;
        } else {
          xVal = 193;
          xVal1 = 87;
          xVal2 = 145;
        }


        if (chartID == 'KEN' || chartID == 'EGY') {
          chart.renderer.text('women <br/> 15-49', xVal2, 99, 201, 105)
            .css({
              color: '#000'
            }).add();
          if (length == 3)
          {
            chart.renderer.text('women <br/> 15-19', xVal, 225, 201, 105)
              .css({
                color: '#000'
              }).add();
            chart.renderer.text('women <br/> 45-49', xVal1, 225, 201, 105)
              .css({
                color: '#000'
              }).add();
          }
        } else {
          chart.renderer.text('women <br/> 15-49', xVal2, 99, 201, 105)
            .css({
              color: '#D1D0CE'
            }).add();
          if (length == 3)
          {
            chart.renderer.text('women <br/> 15-19', xVal, 225, 201, 105)
              .css({
                color: '#D1D0CE'
              }).add();
            chart.renderer.text('women <br/> 45-49', xVal1, 225, 201, 105)
              .css({
                color: '#D1D0CE'
              }).add();
          }
        }
      });
    }
    window[divId] = chart;
  }

  var convArrToObj = function (array) {
    var thisEleObj = new Object();
    if (typeof array == "object") {
      for (var i in array) {
        var thisEle = convArrToObj(array[i]);
        thisEleObj[i] = thisEle;
      }
    } else {
      thisEleObj = array;
    }
    return thisEleObj;
  };
  var convObjToArr = function (Obj) {
    var returArr = [];
    for (var i in Obj) {
      returArr[i] = Obj[i];
    }
    return returArr;
  };
  var mpdataCnt = 0;
  var renderMapHighchartsAPI = function () {

    var mapData = '';
    var fileexistsStatus = fileMapDataAreaIdJsonStatus; //map data file not found
    console.log('fileexistsStatus');
    console.log(fileexistsStatus);
    console.log('succ');
    console.log(DEFAULT_AREA_ID);
    var calltype = "json";
    var n = MAPS_API_URL.indexOf(SERVER_NAME);
    if (n == -1)
      calltype = "jsonp";
    /*
     var layers1 = WEBSITE_DATA_URL+"d3_data/data/"+DEFAULT_AREA_ID+".json"; // geo JSON file
     // check below whether map data file already exists or not
     $.get(layers1).done(function(succesData) {
     fileexistsStatus=true;
     mapData=succesData;         // map data from file

     })  .fail(function() {
     //console.log( "error in layer1" );
     })
     .always(function() {*/
    // execute code after complete process
    var getChildren = 'no';
    if (DEFAULT_AREA_ID == 'YEM') {
      getChildren = 'no';
    }
    //console.log(DEFAULT_AREA_ID);
    //ius=PRVLNC_FGMC_AMNG_WMN_15-49_YR_MAP,PER,TOT&data=true
    if (fileexistsStatus == true) {
      // file  found case call for only map api
      var mapApiUrlFinal = MAPS_API_URL + allareaLevel5 + '&ius=PRVLNC_FGMC_AMNG_WMN_15-49_YR_MAP,PER,TOT&data=false&tp=mrd&getChildren=' + getChildren;
      mapData = JSON.parse(mapDisplayData);
    } else {
      // file not  found case call for  map api and data also
      var mapApiUrlFinal = MAPS_API_URL + allareaLevel5 + '&ius=PRVLNC_FGMC_AMNG_WMN_15-49_YR_MAP,PER,TOT&data=true&tp=mrd&getChildren=' + getChildren;
    }

    //console.log(mapApiUrlFinal);
    $.ajax({
      type: "GET",
      url: mapApiUrlFinal,
      async: false,
      data: {},
      dataType: calltype,
      beforeSend: function () {
        //showLoader();
      },
      success: function (data) {

        //data= JSON.parse(data);
        if ($.trim(data.map) != '') {
          mapGeojson = data.map; //    map will always come from api
          if (fileexistsStatus == false) // file not found case
            mapData = data.data; // data from api
          console.log("data");
          console.log(mapData);
          console.log(mapGeojson.features);

          var mapbardata = [];
          var series = [];
          var mapbarchart = [];
          var categories = [];

          $.each(mapData, function (key, val) {
            console.log("mapdata key");
            console.log(key);
            console.log("mapdata val");
            console.log(val);

            name = mapGeojson.features[key].properties.NAME1_;

            $.each(mapData, function (key2, val2) {
              if (mapGeojson.features[key].properties.ID_ == val2.id)
                y = parseInt(val2.value);
            });

            categories.push(name);
            mapbardata.push({'y': y, 'tooltip': name});

          });
          console.log("created");
          console.log(categories);
          series.push({'data': mapbardata});
          mapbarchart.push({'series': series, 'categories': categories});
//          mapbarchart['series'] = series;
          console.log("created series");
          console.log(mapbarchart[0]);
          area_id = DEFAULT_AREA_ID;
          loadGroupedChart(mapbarchart[0], 'CO16', area_id, filter);

          if (fileexistsStatus == true) // file  found case
            loadHCMapData(mapGeojson, mapData); // get map data  from file  and map display from  api

          if (fileexistsStatus == false) {
            // if file not found prepare data and pass to function loadHCMapData and create file
            var finalMapData = [];
            for (var mdInd in mapData) {

              var mpdataSecInd = mapData[mdInd];
              var mpdataInnerCnt = 0;
              for (var mdInnerInd in mpdataSecInd) {


                for (var mdSecondInnerInd in mpdataSecInd[mdInnerInd]) {
                  finalMapData[mpdataCnt] = [];
                  finalMapData[mpdataCnt]['code'] = mdSecondInnerInd;
                  finalMapData[mpdataCnt]['id'] = mdSecondInnerInd;
                  finalMapData[mpdataCnt]['value'] = Math.round(mpdataSecInd[mdInnerInd][mdSecondInnerInd][0]);
                  mpdataCnt++;
                }
                mpdataCnt = mpdataCnt + mpdataInnerCnt;
              }
            }
            var mpJsonObj = convArrToObj(finalMapData);
            var mpJsonObjtoArr = convObjToArr(mpJsonObj);
            loadHCMapData(mapGeojson, mpJsonObjtoArr); //display map and map data

            $.ajax({
              type: "POST",
              url: WEBSITE_BASE_URL + "createmapDataFile.php", //call to create file
              async: false,
              //data: {'mapdataVal':mpJsonObj,'areaId':DEFAULT_AREA_ID,'innerMap':true}, // for inner map only
              data: {'api_url': mapApiUrlFinal, 'areaId': DEFAULT_AREA_ID, 'innerMap': true}, // for inner map only
              dataType: "json",
              beforeSend: function () {
                //showLoader();
              },
              success: function (sucData) {
                //console.log('File created succesfully');
                //loadHCMapData(mapGeojson,sucData);
              },
              cache: true
            });
          }
          /**/
        } else {
          console.log('Map is empty');
        }

      },
      error: function (result) {
        console.log("ERROR");
      },
      cache: true
    });
    //});
  }

// - Load highcharts map data
  loadHCMapData = function (mapGeojson, mapData) {

    var subtitleFlag = true;
    var dataFlag = false;
    var realData = '';
    var minData = 0;
    var maxData = 100;
    var realCode = '';
    var realTmp = '';
    var legendName = '';
    var realData = new Array();
    var widthVal = $('#mapDivId').width();
    if (typeof widthVal != 'undefined' && widthVal != 0)
      mapWidth = widthVal;
    var vzoomtype = 'none';
    if (mapWidth < 400)
      vzoomtype = 'xy';
    var dataClassesArr =
      {
        'BFA': [{from: 0, to: 49, color: '#6599FF', name: 'Less than 50'}, {from: 50, to: 64, color: '#BBCDE5', name: '50 - 64'}, {from: 65, to: 79, color: '#FE9900', name: '65 - 79'}, {from: 80, to: 100, color: '#FF3400', name: '80 and more'}],
        'ETH': [{from: 0, to: 39, name: "Less than 40", color: "#6599FF"}, {from: 40, to: 59, name: "40 - 59", color: "#BBCDE5"}, {from: 60, to: 79, name: "60 - 79", color: "#FE9900"}, {from: 80, to: 100, name: "80 and more", color: "#FF3400"}], // Ethiopia
        'GIN': [{from: 0, to: 49, name: "Less than 50", color: "#6599FF"}, {from: 50, to: 69, name: "50 - 69", color: "#BBCDE5"}, {from: 70, to: 89, name: "70 - 89", color: "#FE9900"}, {from: 90, to: 100, name: "90 and more", color: "#FF3400"}], // Guinea
        'GMB': [{from: 0, to: 39, name: "Less than 40", color: "#6599FF"}, {from: 40, to: 59, name: "40 - 59", color: "#BBCDE5"}, {from: 60, to: 79, name: "60 - 79", color: "#FE9900"}, {from: 80, to: 100, name: "80 and more", color: "#FF3400"}], // Gambia
        'KEN': [{from: 0, to: 19, name: "Less than 20", color: "#6599FF"}, {from: 20, to: 39, name: "20 - 39", color: "#BBCDE5"}, {from: 40, to: 59, name: "40 - 59", color: "#FE9900"}, {from: 60, to: 100, name: "60 and more", color: "#FF3400"}], // Kenya
        'MLI': [{from: 0, to: 14, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 34, name: "15 - 34", color: "#BBCDE5"}, {from: 35, to: 54, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Mali
        'SEN': [{from: 0, to: 14, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 34, name: "15 - 34", color: "#BBCDE5"}, {from: 35, to: 54, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Senegal
        'UGA': [{from: 0, to: 0.9, name: "Less than 1", color: "#6599FF"}, {from: 1, to: 4, name: "1 - 4", color: "#BBCDE5"}, {from: 4.1, to: 9, name: "5 - 9", color: "#FE9900"}, {from: 10, to: 100, name: "10 and more", color: "#FF3400"}], // Uganda
        'DJI': [{from: 0, to: 14, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 34, name: "15 - 34", color: "#BBCDE5"}, {from: 35, to: 54, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Djibouti
        'EGY': [{from: 0, to: 49.9, name: "Less than 50", color: "#6599FF"}, {from: 50, to: 68.9, name: "50 - 69", color: "#BBCDE5"}, {from: 70, to: 88.9, name: "70 - 89", color: "#FE9900"}, {from: 89, to: 100, name: "90 and more", color: "#FF3400"}], // Egypt
        'ERI': [{from: 0, to: 49, name: "Less than 50", color: "#6599FF"}, {from: 50, to: 69, name: "50 - 69", color: "#BBCDE5"}, {from: 70, to: 89, name: "70 - 89", color: "#FE9900"}, {from: 90, to: 100, name: "90 and more", color: "#FF3400"}], // Eritrea
        'GNB': [{from: 0, to: 19, name: "Less than 20", color: "#6599FF"}, {from: 20, to: 49, name: "20 - 49", color: "#BBCDE5"}, {from: 50, to: 79, name: "50 - 79", color: "#FE9900"}, {from: 80, to: 100, name: "80 and more", color: "#FF3400"}], // Guinea-Bissau
        'MRT': [{from: 0, to: 14, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 34, name: "15 - 34", color: "#BBCDE5"}, {from: 35, to: 54, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Mauritania
        'SDN': [{from: 0, to: 14, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 34, name: "15 - 34", color: "#BBCDE5"}, {from: 35, to: 54, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Sudan
        'SOM': [{from: 0, to: 49, name: "Less than 50", color: "#6599FF"}, {from: 50, to: 69, name: "50 - 69", color: "#BBCDE5"}, {from: 70, to: 89, name: "70 - 89", color: "#FE9900"}, {from: 90, to: 100, name: "90 and more", color: "#FF3400"}], // Somalia
        'NGA': [{from: 0, to: 14.9, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 33.9, name: "15 - 34", color: "#BBCDE5"}, {from: 34, to: 54.9, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}], // Nigeria
        'YEM': [{from: 0, to: 14.9, name: "Less than 15", color: "#6599FF"}, {from: 15, to: 33.9, name: "15 - 34", color: "#BBCDE5"}, {from: 34, to: 54.9, name: "35 - 54", color: "#FE9900"}, {from: 55, to: 100, name: "55 and more", color: "#FF3400"}]  // Yemen
      }

    // Initiate the chart
    window['mapDivId'] = new Highcharts.Map({
      chart: {
        renderTo: 'mapDivId',
        borderWidth: 0,
        backgroundColor: '#fff',
        zoomType: vzoomtype,
        width: 454,
        height: 324,
        style: {
          fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif'
        },
      },
      title: {
        text: ' ',
        style: {
          color: '#000',
          font: 'bold 14px "Helvetica Neue",Helvetica,Arial,sans-serif'
        }
      },
      subtitle: {
        useHTML: true,
        text: ' ',
        style: {
          color: '#70A7FF',
          font: 'bold 11px "Helvetica Neue",Helvetica,Arial,sans-serif'
        }
      },
      mapNavigation: {
        enabled: false,
        enableMouseWheelZoom: false,
        enableDoubleClickZoom: false,
        enableDoubleClickZoomTo: false
      },
      colorAxis: {dataClasses: dataClassesArr[DEFAULT_AREA_ID]},
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        floating: false,
        title: {
          text: ' '
        },
        itemStyle: {
          fontWeight: '0',
          fontStyle: '"Helvetica Neue",Helvetica,Arial,sans-serif',
          color: '#7B7B7B',
          textDecoration: 'none'
        }
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          point: {
            events: {}
          }
        }
      },
      tooltip: {
        useHTML: true,
        formatter: function () {
          return this.point.properties.NAME1_ + ': ' + this.point.value;
        }
      },
      exporting: {
        csv: {
          columnHeaderFormatter: function (series, key) {

            // series.axes[0].categories
            return 'value';

          }
        },
        enabled: false,
        chartOptions: {
          chart: {
            events: {
              load: function () {
                //this.renderer.image('https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/UNFPA_logo.svg/2000px-UNFPA_logo.svg.png', 100, 100, 120, 30)
                this.renderer.image('http://www.unfpa.org/sites/all/modules/sowp/images/logo.svg', -12, 5, 100, 30)
                  .add();
                this.renderer.text('test text', 10, 250)
                  .attr({
                    rotation: 0
                  })
                  .css({
                    color: '#4572A7',
                    fontSize: '8px',
                    fontStyle: 'italic'
                  })
                  .add();
              }
            }
          }
        },
      },
      credits: {enabled: false},
      series: [{
          data: mapData,
          mapData: mapGeojson,
          name: legendName,
          allAreas: true,
          states: {
            hover: {
              color: '#BADA55',
            }
          },
          joinBy: ['ID_', 'code'],
          dataLabels: {
            enabled: true,
            formatter: function () {

              //console.log(this);
            },
          }
        }]

    }, function (obj) {
      setTimeout(function () {
      }, 100);
    });
  };
  // - Render highcharts map data
  renderMapHighcharts = function () {

    var layers = [WEBSITE_DATA_URL + "d3_data/" + DEFAULT_AREA_ID + ".json"]; // geo JSON file

    $.ajax({
      type: "GET",
      url: layers,
      async: false,
      data: {},
      dataType: "json",
      beforeSend: function () {
        //showLoader();
      },
      success: function (data) {
        mapGeojson = data;
        var layers1 = [WEBSITE_DATA_URL + "d3_data/data/" + DEFAULT_AREA_ID + ".json"]; // geo JSON file

        $.ajax({
          type: "GET",
          url: layers1,
          async: false,
          data: {},
          dataType: "json",
          beforeSend: function () {
            //showLoader();
          },
          success: function (mapData) {
            mapData = mapData;
            loadHCMapData(mapGeojson, mapData);
          },
          error: function (result) {
            console.log("ERROR");
          },
          cache: true
        });
      },
      error: function (result) {
        console.log("ERROR");
      },
      cache: true
    });
  };
})(jQuery);
