var jsonObj = [];
var category = [];
var chart1 = '';
var reportData = '';
var reportData1 = '';
var lineChartData = '';
var lineChartData1 = '';
var barChartData = '';
var barChartData2 = '';
var table1Data = '';
var table2Data = '';
var table3Data = '';
var table4Data = '';
var trendChartData = '';
var stdData = '';
var lineChart = '';
var lineChart1 = '';
var barChart1 = '';
var barChart2 = '';
var barChartMaxMin = new Array();
var minBar = '';
var maxBar = '';
var flag = 0;



/**
 * Custom Function
 */
(function ($) {
  Drupal.behaviors.cc = {
    attach: function (context, settings) {
      //graph_block = Drupal.settings.graph_figure;
      mainObj = Drupal.settings.mainObj;
      base_url = Drupal.settings.baseUrl;
      //console.log(graph_block);
    }
  };

  $(document).ready(function () {

    var chart;
    var area_name = di_jq("#hd_area_name").val();
//    di_jq("#hd_area_name").val(window.Area_Name);
//
//    var area_nid = di_jq("#hd_area_id").val();
//    var area_name2 = di_jq("#hd_area_name").val();
//
//    //showLoader("map");
//
//
//    di_jq("#countrySelected").html((area_name2.length > 18) ? (area_name2.substr(0, 18) + '..') : area_name2);
//
//    di_jq("#trend_area_name").html(area_name2);
    window.Area_NId = 16;
    loadAllCharts(window.Area_NId);



    // Export hover menu
    di_jq('.hoverMenu').each(function () {
      var caption = $(this).next('.grph_hdn').children('input[type="hidden"]').attr('id');
      $(this).children('a.dwnld_icn').html(getexport_menu($(this).attr('rel'), caption));
    });

    di_jq('#generateReport1').click(function () {

      var chart = $('#Figure').highcharts();
      var svg = chart.getSVG();
      di_jq('#rep1_load').show();
      exportSvgToPng(svg, 'rep1', 'rep1_load');
      generateReport1();
      generatebottom1();
      di_jq('#MetaDataOuterBox1').show();
      $('.overlay').show();
      return false;
    });

    di_jq('#generateReport2').click(function () {
      var svg = lineChart1.getSVG();
      di_jq('#rep2_load').show();
      exportSvgToPng(svg, 'rep2', 'rep2_load');
      generateReport2();
      generatebottom2();
      di_jq('#MetaDataOuterBox2').show();
      $('.overlay').show();
      return false;
    });

    // close metadata pop-up
    di_jq('.close').click(function () {
      di_jq('#MetaDataOuterBox1').hide();
      di_jq('#HelpDataBox1').hide();
      $('.overlay').hide();
    });

    // close metadata pop-up
    di_jq('.close').click(function () {
      di_jq('#MetaDataOuterBox2').hide();
      di_jq('#HelpDataBox2').hide();
    });


    di_jq('#ShowMethology').click(function () {

      di_jq('#ShowMethologyBox').show();
      $('.overlay').show();
      return false;
    });

    // close metadata pop-up
    di_jq('.close').click(function () {
      di_jq('#ShowMethologyBox').hide();

    });


    // on Graph hover show hide graph menu
    /*	di_jq('div.box').mouseover(function(e){

     e.stopPropagation();
     di_jq(this).find('span.hoverMenu').css('visibility','visible');

     }).mouseleave(function(e){

     di_jq(this).find('span.hoverMenu').css('visibility','hidden');
     e.stopPropagation();
     });
     */



    di_jq("#scatterPrint").click(function () {

      PrintElem("#sctr_plot_cntnt", "MDG5B UNFPA");

    });

    //Later $("#tabs").tabs();

    // fix the classes
    $(".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *")
      .removeClass("ui-corner-all ui-corner-top")
      .addClass("ui-corner-bottom");

    // move the nav to the bottom
    //later $(".tabs-bottom .ui-tabs-nav").appendTo(".tabs-bottom");


    $("#tabs").click("tabsactivate", function (event, ui) {


      if (ui.newPanel.selector == "#tabs-2") {

        if (di_jq("#bartable").is(":visible")) {

          di_jq('#bartable').hide('slide', {direction: 'right'});
        }


      } else {


        if (di_jq("#bartable2").is(":visible")) {

          di_jq('#bartable2').hide('slide', {direction: 'right'});
        }

      }

    });

    $('#intro_lnk').click(function () {
      if ($('#intro').css('display') == 'block') {
        $('#intro_lnk').attr('class', 'abt_btn_txt  abt_arw_dwn');
        $('#intro').slideUp();
      } else {
        $('#intro_lnk').attr('class', 'abt_btn_txt  abt_arw_up');
        $('#intro').slideDown();
      }
    });

  });

// end

  $(window).resize(function () {

//alert('window was resized!');

    /*$('#Figure').highcharts().redraw();
     $('#Bar_chart').highcharts().redraw();
     $('#Figure1').highcharts().redraw();
     $('#Bar_chart2').highcharts().redraw();*/

    getLineChart(window.area_nid, mainObj.Figure);
    getBarChart(window.area_nid, mainObj.Bar_chart);
    getLineChart2(window.area_nid, mainObj.Figure1);
    getBarChart2(window.area_nid, mainObj.Bar_chart2);

  });


  function showTab(tab) {
    if (tab == 'high_fert') {
      document.getElementById('wntd_unwntd_fert_cntnt').style.display = 'none';
      document.getElementById('high_fert_cntnt').style.display = 'block';
      //$('#Figure').highcharts().redraw();
      //$('#Bar_chart').highcharts().redraw();
      //console.log(window.area_nid);
      getLineChart(window.area_nid, mainObj.Figure);
      getBarChart(window.area_nid, mainObj.Bar_chart);
      $('#high_fert_bx').attr('class', 'top_rnded_crnrs5 tbd_bx tbd_bx_slctd active');
      $('#wntd_unwntd_fert_bx').attr('class', 'top_rnded_crnrs5 tbd_bx');
    }
    if (tab == 'wntd_unwntd_fert') {
      document.getElementById('high_fert_cntnt').style.display = 'none';
      document.getElementById('wntd_unwntd_fert_cntnt').style.display = 'block';//console.log(window.Area_NId);
      getLineChart2(window.area_nid, mainObj.Figure1);
      getBarChart2(window.area_nid, mainObj.Bar_chart2);
      //$('#Figure1').highcharts().redraw(alert('as'));
      //$('#Bar_chart2').highcharts().redraw();
      $('#wntd_unwntd_fert_bx').attr('class', 'top_rnded_crnrs5 tbd_bx tbd_bx_slctd active');
      $('#high_fert_bx').attr('class', 'top_rnded_crnrs5 tbd_bx');
    }
    return false;
  }


// function to load all graph by using Area NID
  function loadAllCharts(areanid) {
    debugger;
    updateAreanid(areanid);
    //getStandardDatafor1950();
    getLineChart(areanid, mainObj.Figure);
    //getLineChart2(areanid, mainObj.Figure1);
//    getBarChart(areanid, mainObj.Bar_chart);
//
//    if (!isNaN(wantedObj[areanid])) {
//      getBarChart2(areanid, mainObj.Bar_chart2);
//      //di_jq("#Bar_chart").css("height","282px");
//      di_jq("#tab_navigation").show();
//      di_jq("#Bar_chart2").show();
//      di_jq("#generateReport2").show();
//      showSecondTab();
//      di_jq("#bottom_box2").show();
//      //$( "#tabs" ).tabs();
//    } else {
//      //alert(areanid);
//      var minVal = Math.min.apply(Math, barChartMaxMin);
//      var maxVal = Math.max.apply(Math, barChartMaxMin);
//      minBar = minVal;
//      maxBar = maxVal < 0 ? 0 : maxVal;
//
//      // load chart 1 here
//      loadbarChart(barChartData, mainObj.Bar_chart.id, area_nid);
//
//      //di_jq("#Bar_chart").css("height","314px");
//      di_jq("#tab_navigation").hide();
//      di_jq("#Bar_chart2").hide();
//      di_jq("#generateReport2").hide();
//      hideSecondTab();
//      di_jq("#bottom_box2").hide();
//      try
//      {
//        $("#tabs").tabs("destroy");
//      } catch (err)
//      {
//
//      }
//
//    }
//
//    // function to draw top box data
    getTable1Data(areanid, mainObj.Table1);
//    getTable2Data(areanid, mainObj.Table2);
//    getTable3Data(areanid, mainObj.Table3);
//    getTable4Data(areanid, mainObj.Table4);
//    //drawComparisionChart(areanid);
//    // function to draw report data on the top box
//    getReportData(areanid, mainObj.Report);
//
//
//    //   getEstiProjectionData(areanid,mainObj.Projection);
//    getNumberTableData(areanid, mainObj.NumberTable);
//
//    // checkifBarChart(areanid,mainObj.checkbar_chart);
//
//    var area_name2 = di_jq("#hd_area_name").val();
//    di_jq("#trend_area_name").html(area_name2);
//    setAreaName(area_name2);

  }

  function getStandardDatafor1950() {

    var indicator_nid = '1';
    var unit_nid = '1,5';
    var sub_nid = '1';
    var timeperiod = '1,71,88,113';
    var timeperiodtbl = '1,11,21,31,42,54,71,83,93,103,113';

    var postData = 'indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod + '&timeperiodtbl=' + timeperiodtbl + '&area_NID=' + area_nid;

    $.ajax({
      url: base_url + 'home/getStandardDatafor1950',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        debugger;
        stdData = data;
      }
    });
  }


  function getexport_menu(key, caption) {

    var export_menu = '<div class="grapTypesMenu rnded_crnrs smlBox">';
    export_menu += '<a rel="' + key + '" cap="' + caption + '" class="export" type="png" href="#">Download PNG image</a><br>';
    export_menu += '<a rel="' + key + '" cap="' + caption + '" class="export" href="#" type="jpeg" >Download JPEG image</a><br>';
    export_menu += '<a rel="' + key + '" cap="' + caption + '" href="#" class="export" type="pdf">Download PDF document</a></div>';

    return export_menu;
  }

  function setAreaName(area_name2) {


    di_jq('.country_class').each(function () {

      di_jq(this).html(area_name2 + " - ")


    })

  }

  function updateAreanid(areanid) {

    di_jq("#hd_area_id").val(areanid);


  }

  function roundNumber(rnum, rlength) { // Arguments: number to round, number of decimal places
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
//  return parseFloat(newnumber); // Output the result to the form field (change for your purposes)
    return (newnumber == 0) ? "-" : (parseFloat(newnumber) % 1 === 0) ? parseFloat(newnumber) + ".0" : parseFloat(newnumber); // Output the result to the form field (change for your purposes)
  }

  function roundNumber_num(rnum, rlength) { // Arguments: number to round, number of decimal places
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
//  return parseFloat(newnumber); // Output the result to the form field (change for your purposes)
    return (parseFloat(newnumber) % 1 === 0) ? parseFloat(newnumber) + ".0" : parseFloat(newnumber); // Output the result to the form field (change for your purposes)
  }


  function getEstiProjectionData(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader(type)
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;

    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;

    $.ajax({
      url: base_url + 'home/getEstiProjectionData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        trendChartData = data;
        drawEstimationProjectionChart(data, type, area_nid);
        drawComparisionChart(area_nid);
        hideLoader(type);

      }

    });
  }

// function to get chart data using area nid and ius
  function getLineChart(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader(type)
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;
    var timeperiodtbl = chartObj.timeperiodtbl;



    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod + '&timeperiodtbl=' + timeperiodtbl;

    //console.log(postData);
    $.ajax({
      url: Drupal.settings.basePath + 'home/getLineChartData',
      type: "POST",
      datatype: "json",
      data: {'area_NID': area_nid, 'indicator_nid': indicator_nid, 'unit_nid': unit_nid, 'sub_nid': sub_nid, 'timeperiod': timeperiod, 'timeperiodtbl': timeperiodtbl},
      success: function (data) {
        debugger;
        console.log('data');
        console.log(data);
        var data = $.parseJSON(data);
        reportData = '';
        reportData = data['data2'];
        loadLineChart(data['data1'], type, area_nid);
        loadLineReportChart(lineChartData, "report1_figure", area_nid);
        loadLineChartFullscreen(lineChartData, "linefullscreen");
        hideLoader(type);
      }
    });
  }

// function to get chart data using area nid and ius
  function getLineChart2(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader(type)
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;
    var timeperiodtbl = chartObj.timeperiodtbl;

    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod + '&timeperiodtbl=' + timeperiodtbl;

    $.ajax({
      url: base_url + 'home/getLineChartData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        reportData1 = '';
        reportData1 = data['data2'];
        loadLineChart1(data['data1'], type, area_nid);
        loadLineReportChart(lineChartData1, "report2_figure", area_nid);
        loadLineChartFullscreen(lineChartData1, "linefullscreen1");
        hideLoader(type);
      }
    });
  }


// function to get chart data using area nid and ius

  function getBarChart(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader(type)
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;
    barChartMaxMin = new Array();
    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;

    $.ajax({
      url: base_url + 'home/getBarChartData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      async: false,
      success: function (data) {
        var dataar = data.series.data;
        for (var i = 0; i < dataar.length; i++) {
          barChartMaxMin.push(dataar[i]);
        }

        barChartData = data;

        // commented here for loading barchar1
        // this will load after getting data for bar chart 2
        // loadbarChart(data,type,area_nid);
        hideLoader(type);

      }

    });

  }

// This function send and ajax request to get data for bar chart
  function getBarChart2(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader(type)
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;

    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;

    $.ajax({
      url: base_url + 'home/getBarChartData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      async: false,
      success: function (data) {

        var dataar = data.series.data;
        for (var i = 0; i < dataar.length; i++) {
          barChartMaxMin.push(dataar[i]);
        }

        barChartData2 = data;

        var minVal = Math.min.apply(Math, barChartMaxMin);
        var maxVal = Math.max.apply(Math, barChartMaxMin);
        minBar = minVal;
        maxBar = maxVal < 0 ? 0 : maxVal;

        // load chart 1 here
        loadbarChart(barChartData, mainObj.Bar_chart.id, area_nid);

        loadbarChart2(data, type, area_nid);


        hideLoader(type);

      }

    });


  }

// function to get chart data using area nid and ius
  function getTable1Data(area_nid, chartObj) {
    var type = chartObj.id;
    showLoader("table1")
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;

    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;

    $.ajax({
      url: base_url + 'home/getTable1Data',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        table1Data = data;
        loadTable1(data, type, area_nid);
        loadTable1(data, "linefullscreen_tbl", area_nid);
        hideLoader("table1")

      }
    });
  }


// function to get chart data using area nid and ius
  function getTable2Data(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader("table2")
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;



    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;


    $.ajax({
      url: base_url + 'home/getTable2Data',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {

        table2Data = data;
        loadTable2(data, type, area_nid);
        hideLoader("table2")

        generatebottom1();
      }

    });
  }

// function to get chart data using area nid and ius
  function getTable3Data(area_nid, chartObj) {
    var type = chartObj.id;
    showLoader("table3")
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;

    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;

    $.ajax({
      url: base_url + 'home/getTable3Data',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        table3Data = data;
        loadTable3(data, type, area_nid);
        loadTable3(data, "linefullscreen_tbl1", area_nid);
        hideLoader("table3")

      }
    });
  }


// function to get chart data using area nid and ius
  function getTable4Data(area_nid, chartObj) {

    var type = chartObj.id;
    showLoader("table4")
    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;



    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;


    $.ajax({
      url: base_url + 'home/getTable4Data',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {

        table4Data = data;

        loadTable4(data, type, area_nid);
        hideLoader("table4")
        generatebottom2();
      }

    });


  }

  function getReportData(area_nid, chartObj) {

    showLoader("topBoxDiv");

    var type = chartObj.id;

    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;



    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;


    $.ajax({
      url: base_url + 'home/getReportData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        di_jq("#hd_report_growth").val(data);
        hideLoader("topBoxDiv");
      }

    });


  }

  function getAreaNid(area_id, aname) {

    var postData = 'areaid=' + area_id;

    $.ajax({
      url: base_url + 'home/getAreaNid',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {

        loadAllCharts(data);
        // generateReport();
        //hideLoader("#MetaDataOuterBox");

      }

    });

  }

  function getNumberTableData(area_nid, chartObj) {

    var type = chartObj.id;

    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;



    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;


    $.ajax({
      url: base_url + 'home/getNumberTableData',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        drawNumberTable(data);
        equalHeight($(".column"));

      }

    });

  }

  function checkifBarChart(area_nid, chartObj) {

    var type = chartObj.id;

    var indicator_nid = chartObj.ind_NID;
    var unit_nid = chartObj.unit_NID;
    var sub_nid = chartObj.sub_NID;
    var timeperiod = chartObj.timeperiod;
    var postData = 'area_NID=' + area_nid + '&indicator_nid=' + indicator_nid + '&unit_nid=' + unit_nid + '&sub_nid=' + sub_nid + '&timeperiod=' + timeperiod;


    $.ajax({
      url: base_url + 'home/checkifBarChart',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {

        //  drawNumberTable(data);

      }

    });


  }

  function getTrendData() {



  }
  function stripslashes(str) {
    str = str.replace(/\\'/g, '\'');
    str = str.replace(/\\"/g, '"');
    str = str.replace(/\\0/g, '\0');
    str = str.replace(/\\\\/g, '\\');
    return str;
  }

  function loadLineChart1(data, type, area_nid) {


    var data1 = data;
    if (data1.series.length == 5) {
      //if()
      try {

        di_jq.each(data.series, function (i, item) {
          di_jq.each(item, function (j, item1) {
            if (j == 'data') {
              var k = 0;
              di_jq.each(item1, function (tp, val) {
                item1[tp] = 0;
                tp = k;
                item1[tp] = val;
                k++;
              });
              var numeric_array = new Array();

              for (var items in item1) {
                if (item1[items] != 0)
                  numeric_array.push(item1[items]);
                else
                  delete item1[items];
              }
              item[j] = numeric_array;
              j++;
            }
          });

        });

        data.series[0].lineColor = '#C41220';
        data.series[0].color = '#C41220';
        data.series[1].lineColor = '#0E0D09';
        data.series[1].color = '#0E0D09';
        data.series[1].dashStyle = "LongDashDot";
        data.series[2].lineColor = '#5FC190';
        data.series[2].color = '#5FC190';
        data.series[3].lineColor = '#000000';
        data.series[3].color = '#000000';
        data.series[3].dashStyle = "Dash";
        data.series[4].lineColor = '#000000';
        data.series[4].color = '#000000';

        for (var j = 2; j < data.series[4].data.length; j++) {
          data.series[4].data[j] = data.series[4].data[1];
        }

        for (var i = 0; i <= 4; i++) {
          data.series[i].showInLegend = false;
          data.series[i].marker = new Object();
          data.series[i].marker.enabled = false;
          data.series[i].marker.radius = 1;
          data.series[i].marker.fillColor = data.series[i].lineColor;
          data.series[i].marker.lineColor = data.series[i].lineColor;
        }

        data.series[5] = new Object();
        data.series[5].name = 'Unwanted fertility';
        //data.series[5].dashStyle = 'longdash';
        data.series[5].lineWidth = 1;
        data.series[5].lineColor = 'blue';
        data.series[5].shadow = false;
        data.series[5].color = 'blue';
        data.series[5].enableMouseTracking = false;
        //data.series[5].showInLegend = false;
        data.series[5].marker = new Object();
        if (data.series[0].data[5] > data.series[1].data[5])
          data.series[5].marker.symbol = 'triangle';
        else
          data.series[5].marker.symbol = 'triangle-down';
        //data.series[5].marker.enabled = false;
        //data.series[5].data = new Array([3,data.series[0].data[3]],[3,data.series[1].data[3]]);
        var $scnd_point = data.series[1].data[5];
        data.series[5].data = new Array([5, data.series[0].data[5]], $scnd_point);

        data.series[5].data[1] = new Object();
        data.series[5].data[1].x = 5;
        data.series[5].data[1].marker = new Object();
        data.series[5].data[1].marker.radius = 0;
        data.series[5].data[1].y = $scnd_point;


        data.series[6] = new Object();
        data.series[6].name = 'Wanted fertility';
        //data.series[6].dashStyle = 'longdash';
        data.series[6].lineWidth = 1;
        data.series[6].lineColor = '#7F7E7F';
        data.series[6].shadow = false;
        data.series[6].color = '#7F7E7F';
        data.series[6].enableMouseTracking = false;
        //data.series[6].showInLegend = false;
        data.series[6].marker = new Object();
        if (data.series[1].data[5] > data.series[2].data[5])
          data.series[6].marker.symbol = 'triangle';
        else
          data.series[6].marker.symbol = 'triangle-down';
        //data.series[6].marker.enabled = false;
        //data.series[6].data = new Array([3,data.series[1].data[3]],[3,data.series[2].data[3]]);
        var $scnd_point = data.series[2].data[5];
        data.series[6].data = new Array([5, data.series[1].data[5]], $scnd_point);

        data.series[6].data[1] = new Object();
        data.series[6].data[1].x = 5;
        data.series[6].data[1].marker = new Object();
        data.series[6].data[1].marker.radius = 0;
        data.series[6].data[1].y = $scnd_point;



        data.series[7] = new Object();
        data.series[7].name = 'Mortality and migration';
        //data.series[7].dashStyle = 'longdash';
        data.series[7].lineWidth = 1;
        data.series[7].lineColor = '#FF59F4';
        data.series[7].shadow = false;
        data.series[7].color = '#FF59F4';
        data.series[7].enableMouseTracking = false;
        //data.series[7].showInLegend = false;
        data.series[7].marker = new Object();
        if (data.series[2].data[5] > data.series[3].data[5])
          data.series[7].marker.symbol = 'triangle';
        else
          data.series[7].marker.symbol = 'triangle-down';

        //data.series[7].marker.enabled = false;
        //data.series[7].data = new Array([3,data.series[2].data[3]],[3,data.series[3].data[3]]);
        var $scnd_point = data.series[3].data[5];
        data.series[7].data = new Array([5, data.series[2].data[5]], $scnd_point);

        data.series[7].data[1] = new Object();
        data.series[7].data[1].x = 5;
        data.series[7].data[1].marker = new Object();
        data.series[7].data[1].marker.radius = 0;
        data.series[7].data[1].y = $scnd_point;



        data.series[8] = new Object();
        data.series[8].name = 'Young age structure';
        data.series[8].dashStyle = 'Dot';
        data.series[8].lineWidth = 1;
        data.series[8].lineColor = '#421745';
        data.series[8].shadow = false;
        data.series[8].color = '#421745';
        data.series[8].enableMouseTracking = false;
        //data.series[8].showInLegend = false;
        data.series[8].marker = new Object();
        if (data.series[3].data[5] > data.series[4].data[5])
          data.series[8].marker.symbol = 'triangle';
        else
          data.series[8].marker.symbol = 'triangle-down';

        //data.series[8].marker.enabled = false;
        //data.series[8].data = new Array([3,data.series[3].data[3]],[3,data.series[4].data[3]]);
        var $scnd_point = data.series[4].data[5];
        data.series[8].data = new Array([5, data.series[3].data[5]], $scnd_point);

        data.series[8].data[1] = new Object();
        data.series[8].data[1].x = 5;
        data.series[8].data[1].marker = new Object();
        data.series[8].data[1].marker.radius = 0;
        data.series[8].data[1].y = $scnd_point;

        var chartWidth = di_jq('#' + type).parent().width();
        //	console.log(chartWidth);


        lineChartData1 = data;
        var area_name = di_jq("#hd_area_name").val();


        options = {
          chart: {
            renderTo: type,
            events: {
              load: function (event) {

                //var svg = this.getSVG();
                // exportSvgToPng(this);

              }
            },
            //marginRight: 120,
            type: 'spline',
            //marginTop: 30
          },
          exporting: {
            buttons: {
              exportButton: {
                enabled: false
              },
              printButton: {
                enabled: false
              },
              contextButton: {
                enabled: false
              }
            }
          },
          credits: {
            enabled: false
          },
          title: {
            text: '',
            x: -20, //center
            y: 0, //center
            style: {
              fontSize: '12px'
            }
          },
          xAxis: {
            categories: data.categories,
            plotLines: [{
                value: 1,
                color: '#A1A1A1',
                dashStyle: 'shortdash',
                width: 2,
              }]
          },
          yAxis: {
            title: {
              text: 'Population size (million)'
            },
            gridLineDashStyle: 'dot',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
              }]
          },
          tooltip: {
            formatter: function () {
              return '<b>' + area_name + '</b>, <b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + roundNumber(this.y, 1) + ' Millions';
            }
          },
          plotOptions: {
            series: {
              events: {
                mouseOver: function () {
                  var eleId = this.name;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_lnrow1').css({'font-weight': 'bold', 'background': '#C6DEFF'});

                  $('#' + this.name + '_projection1').css('font-weight', 'bold');
                },
                mouseOut: function () {
                  var eleId = this.name;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_lnrow1').css({'font-weight': 'normal', 'background': 'none'});

                  $('#' + this.name + '_projection1').css('font-weight', 'normal');
                }
              }
            }
          },
          legend: {
            //enabled: false
            /*layout: 'vertical',
             verticalAlign: 'middle',
             align: 'right',
             y: -10,*/
            borderWidth: 0,
            itemMarginTop: 5,
            itemMarginBottom: 5,
            useHTML: true,
            title: {
              style: {
                marginRight: '10px',
                fontSize: '10px',
                fontWeight: 'Normal',
                color: '#4D759E'
              },
              //text: 'Population effect of<br/><span id="lnchrt1msg" style="color:blue;font-weight:normal; height:100px" >click to see effect</span>'
              text: 'Population effect of'
            },
            itemStyle: {
              fontSize: '10px',
            },
            labelFormatter: function () {
              var words = this.name.split(/[\s]+/);
              var numWordsPerLine = 2;
              var str = [];

              for (var word in words) {
                if (word > 0 && word % numWordsPerLine == 0)
                  str.push('<br>');

                str.push(words[word]);
              }
              return '<span title="click to see effect">' + str.join(' ') + ' </span>';
            }
          },
          series: data.series,
          seriestbl: data.seriestbl,
        }
        //	chart = new Highcharts.Chart(options,  function(chart){ drawCustomLegend(chart, type); });
        chart = new Highcharts.Chart(options);
        lineChart1 = chart;
        di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
          di_jq(this).unbind('click');
        });
      } catch (err) {
        //Handle errors here
        di_jq("#" + type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
        di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
          di_jq(this).bind('click', function () {
            return false;
          });
        });
      }
    } else {
      lineChartData1 = data;
      flag = 1;
      //di_jq("#"+type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
      options = {
        chart: {
          renderTo: type,
          marginRight: 120,
          type: 'spline',
          marginTop: 30
        },
        exporting: {
          buttons: {
            exportButton: {
              enabled: false
            },
            printButton: {
              enabled: false
            },
            contextButton: {
              enabled: false
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'No Data Found',
          x: 0, //center
          y: 50, //center
          style: {
            fontSize: '13px',
            color: '#000'
          }
        },
        xAxis: {},
        yAxis: {},
        tooltip: {},
        plotOptions: {},
        legend: {},
        series: [],
        seriestbl: []
      }
      //	chart = new Highcharts.Chart(options,  function(chart){ drawCustomLegend(chart, type); });
      chart = new Highcharts.Chart(options);
      lineChart1 = chart;
      di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
        di_jq(this).bind('click', function () {
          return false;
        });
      });

    }
  }

  function loadLineChart(data, type, area_nid) {
    //console.log(data);
    //console.log('data');
    var data1 = data;
    if (data1.series.length == 4) {
      try {
        di_jq.each(data.series, function (i, item) {
          di_jq.each(item, function (j, item1) {
            if (j == 'data') {
              var k = 0;
              di_jq.each(item1, function (tp, val) {
                item1[tp] = 0;
                tp = k;
                item1[tp] = val;
                k++;
              });
              var numeric_array = new Array();

              for (var items in item1) {
                if (item1[items] != 0)
                  numeric_array.push(item1[items]);
                else
                  delete item1[items];
              }
              item[j] = numeric_array;
              j++;
            }
          });

        });
        //console.log(data.series[0].data[0]);
        if (data.series[0]) {
          data.series[0].lineColor = '#C41220';
          data.series[0].color = '#C41220';
        }

        if (data.series[1]) {
          data.series[1].lineColor = '#5FC190';
          data.series[1].color = '#5FC190';
        }

        if (data.series[2]) {
          data.series[2].lineColor = '#0E0D09';
          data.series[2].color = '#0E0D09';
          data.series[2].dashStyle = "Dash";
        }

        if (data.series[3]) {
          data.series[3].lineColor = '#000000';
          data.series[3].color = '#000000';

          for (var j = 2; j < 6; j++) {
            data.series[3].data[j] = data.series[3].data[1];
          }
        }

        for (var i = 0; i <= 3; i++) {
          if (data.series[i]) {
            data.series[i].showInLegend = false;
            data.series[i].marker = new Object();
            data.series[i].marker.enabled = false;
            data.series[i].marker.radius = 1;
            data.series[i].marker.fillColor = data.series[i].lineColor;
            data.series[i].marker.lineColor = data.series[i].lineColor;
          }
        }


        data.series[4] = new Object();
        data.series[4].name = 'High fertility (above replacement)';

        //data.series[4].dashStyle = 'longdash';
        data.series[4].lineWidth = 1;
        data.series[4].lineColor = '#0D06B6';
        data.series[4].shadow = false;
        data.series[4].color = '#0D06B6';
        data.series[4].enableMouseTracking = false;
        //data.series[4].showInLegend = false;
        data.series[4].marker = new Object();
        if (data.series[0].data[5] > data.series[1].data[5])
          data.series[4].marker.symbol = 'triangle';
        else
          data.series[4].marker.symbol = 'triangle-down';
        //data.series[4].marker.enabled = false;
        var $scnd_point = data.series[1].data[5];
        data.series[4].data = new Array([5, data.series[0].data[5]], $scnd_point);

        data.series[4].data[1] = new Object();
        data.series[4].data[1].x = 5;
        data.series[4].data[1].marker = new Object();
        data.series[4].data[1].marker.radius = 0;
        data.series[4].data[1].y = $scnd_point;

        data.series[5] = new Object();
        data.series[5].name = 'Mortality and migration';
        //data.series[5].dashStyle = 'longdash';
        data.series[5].lineWidth = 1;
        data.series[5].lineColor = '#FF59F4';
        data.series[5].shadow = false;
        data.series[5].color = '#FF59F4';
        data.series[5].enableMouseTracking = false;
        //data.series[5].showInLegend = false;
        data.series[5].marker = new Object();
        if (data.series[1].data[5] > data.series[2].data[5])
          data.series[5].marker.symbol = 'triangle';
        else
          data.series[5].marker.symbol = 'triangle-down';

        var $scnd_point = data.series[2].data[5];
        data.series[5].data = new Array([5, data.series[1].data[5]], $scnd_point);

        data.series[5].data[1] = new Object();
        data.series[5].data[1].x = 5;
        data.series[5].data[1].marker = new Object();
        data.series[5].data[1].marker.radius = 0;
        data.series[5].data[1].y = $scnd_point;

        data.series[6] = new Object();
        data.series[6].name = 'Young age structure';
        data.series[6].dashStyle = 'Dot';
        data.series[6].lineWidth = 1;
        data.series[6].lineColor = '#421745';
        data.series[6].shadow = false;
        data.series[6].color = '#421745';
        data.series[6].enableMouseTracking = false;
        //data.series[6].showInLegend = false;
        data.series[6].marker = new Object();
        if (data.series[2].data[5] > data.series[3].data[5])
          data.series[6].marker.symbol = 'triangle';
        else
          data.series[6].marker.symbol = 'triangle-down';

        //data.series[6].marker.enabled = false;

        $scnd_point = data.series[3].data[5];
        data.series[6].data = new Array([5, data.series[2].data[5]], $scnd_point);

        data.series[6].data[1] = new Object();
        data.series[6].data[1].x = 5;
        data.series[6].data[1].marker = new Object();
        data.series[6].data[1].marker.radius = 0;
        data.series[6].data[1].y = $scnd_point;

        lineChartData = data;
        //console.log('lineChartData');
        //console.log(lineChartData);
        var area_name = di_jq("#hd_area_name").val();

        options = {
          chart: {
            renderTo: type,
            events: {
              load: function (event) {

                //var svg = this.getSVG();
                // exportSvgToPng(this);

              },
            },
            //marginRight: 120,
            //	height: 500,
            type: 'spline',
            //marginTop: 30
          },
          exporting: {
            buttons: {
              exportButton: {
                enabled: false
              },
              printButton: {
                enabled: false
              },
              contextButton: {
                enabled: false
              }
            }
          },
          credits: {
            enabled: false
          },
          title: {
            text: '',
            x: -20, //center
            y: 0, //center
            style: {
              fontSize: '12px'
            }
          },
          xAxis: {
            categories: data.categories,
            plotLines: [{
                value: 1,
                color: '#A1A1A1',
                dashStyle: 'shortdash',
                width: 2
              }],
          },
          yAxis: {
            title: {
              text: 'Population size (million)'
            },
            gridLineDashStyle: 'dot',
            plotLines: [{
                value: 0,
                // color: '#808080',
                width: 1

              }]
          },
          tooltip: {
            formatter: function () {
              return '<b>' + area_name + '</b>, <b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + roundNumber(this.y, 2) + ' Millions';
            }
          },
          plotOptions: {
            series: {
              events: {
                mouseOver: function () {
                  var eleId = this.name;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_lnrow').css({'font-weight': 'bold', 'background': '#C6DEFF'});

                  $('#' + this.name + '_projection').css('font-weight', 'bold');
                },
                mouseOut: function () {
                  var eleId = this.name;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_lnrow').css({'font-weight': 'normal', 'background': 'none'});

                  $('#' + this.name + '_projection').css('font-weight', 'normal');
                }
              }
            }
          },
          legend: {
            //enabled: false
            /*layout: 'horizontal',
             verticalAlign: 'bottom',
             align: 'left',*/
            //y: -10,
            borderWidth: 0,
            itemMarginTop: 5,
            itemMarginBottom: 5,
            useHTML: true,
            title: {
              style: {
                marginRight: '10px',
                fontSize: '10px',
                fontWeight: 'Normal',
                color: '#4D759E'
              },
              //text: 'Population effect of<br/><span id="lnchrt1msg" style="color:blue;font-weight:normal; height:100px" >click to see effect</span>'
              text: 'Population effect of'
            },
            itemStyle: {
              fontSize: '10px'
            },
            labelFormatter: function () {
              var words = this.name.split(/[\s]+/);
              var numWordsPerLine = 2;
              var str = [];

              for (var word in words) {
                if (word > 0 && word % numWordsPerLine == 0)
                  str.push('<br>');

                str.push(words[word]);
              }

              return '<span title="click to see effect">' + str.join(' ') + ' </span>';
            }
          },
          series: data.series,
          seriestbl: data.seriestbl
        }
        //	chart = new Highcharts.Chart(options,  function(chart){ drawCustomLegend(chart, type); });
        chart = new Highcharts.Chart(options);
        lineChart = chart;
        //		alert( window.lineChart.getSVG());
        di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
          di_jq(this).unbind('click');
        });
      } catch (err) {
        //
        //Handle errors here
        di_jq("#" + type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
        di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
          di_jq(this).bind('click', function () {
            return false;
          });
        });
        // lineChartData = {};
      }
    } else {
      lineChartData = data;
      flag = 1;
      //di_jq("#"+type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
      options = {
        chart: {
          renderTo: type,
          marginRight: 120,
          type: 'spline',
          marginTop: 30
        },
        exporting: {
          buttons: {
            exportButton: {
              enabled: false
            },
            printButton: {
              enabled: false
            },
            contextButton: {
              enabled: false
            }
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: 'No Data Found',
          x: 0, //center
          y: 50, //center
          style: {
            fontSize: '13px',
            color: '#000'
          }
        },
        xAxis: {},
        yAxis: {},
        tooltip: {},
        plotOptions: {},
        legend: {},
        series: [],
        seriestbl: []
      }
      //	chart = new Highcharts.Chart(options,  function(chart){ drawCustomLegend(chart, type); });
      chart = new Highcharts.Chart(options);
      lineChart = chart;
      di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
        di_jq(this).bind('click', function () {
          return false;
        });
      });

    }
  }


//Draw a Custom Legend for passing graph
  function drawCustomLegend(chart, containerDiv) {
//	console.log(chart);
    /**
     * What happens when the user clicks the legend item
     */
    function clickItem(series, $legendItem, $line) {
      series.setVisible();
      $legendItem.css(
        options[series.visible ? 'itemStyle' : 'itemHiddenStyle']
        );
      if (series.visible)
        $legendItem.css({color: '#777777'});
    }
    // Create the legend box
    var $legend = $('<div>')
      .css({
        width: 100,
        maxHeight: 200,
        margin: 10,
        position: 'absolute',
        overflowX: 'hidden',
        overflowY: 'auto',
        right: 10,
        top: 115,
        color: '#777777',
      })
      .appendTo(chart.container);
    var lgnd = ["Standard", "Wanted", "Replacement", "Momentum", "Constant"];
    $.each(chart.series, function (i, series) {
      if (lgnd.indexOf(series.name) == -1) {
        // crete the legend item
        var cid = 'Figure1';
        var $legendItem = $('<div>')
          .css({
            position: 'relative',
            float: 'left',
            //display: 'inline',
            marginLeft: 20,
            marginTop: 1,
            marginRight: 10
          })
          .css({color: '#777777'})
          .html('<span style="margin-left:-7px; cursor:pointer; font-size:9px;float:left">' + series.name + '</span>')
          .hover(function () {
            if ($legendItem.css('color') == 'rgb(119, 119, 119)') {
              $legendItem.css({color: '#000'});
            } else {
              $legendItem.css({color: '#777'});
            }
          })
          .appendTo($legend);

        // create the line with each series color
        var $line = $('<div>')
          .css({
            width: 9,
            height: 8,
            position: 'absolute',
            left: -20,
            top: 6,
            backgroundColor: series.color,
          })
          .appendTo($legendItem);
        // click handler
        $legendItem.click(function () {
          clickItem(series, $legendItem, $line);
        });
      }
    });

  }


  function loadLineReportChart(data, type, area_nid) {

    if (flag == '1') {
      di_jq("#" + type).html('<div style="text-align: center;   margin-bottom: 18%; margin-top: 11%;font-weight: bold;">No Data found.</div>');
      flag = 0;
      return false;
    } else {
      try {
        var area_name = di_jq("#hd_area_name").val();
        chart = new Highcharts.Chart({
          chart: {
            renderTo: type,
            type: 'spline',
            marginRight: 130,
            /*                 marginBottom: 25, */
            marginTop: 20
          },
          exporting: {
            buttons: {
              exportButton: {
                enabled: false,
                symbol: 'url(' + site_url + 'img/export.png)',
                y: 5,
                symbolSize: 10,
                width: 14,
                height: 15,
                symbolX: 0,
                symbolY: 0
              },
              printButton: {
                enabled: false,
                symbol: 'url(' + site_url + 'img/print.png)',
                symbolSize: 10,
                y: 5,
                width: 14,
                height: 15,
                symbolX: 0,
                symbolY: 0
              },
              contextButton: {
                enabled: false
              }
            }
          },
          credits: {
            enabled: false
          },
          title: {
            text: '',
            x: -20, //center
            y: 0, //center
            style: {
              fontSize: '12px'
            }
          },
          xAxis: {
            categories: data.categories,
            plotLines: [{
                value: 1,
                color: '#A1A1A1',
                dashStyle: 'shortdash',
                width: 2,
              }],
          },
          yAxis: {
            title: {
              text: 'Population size (million)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
              }]
          },
          tooltip: {
            formatter: function () {
              return '<b>' + area_name + '</b>, <b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + roundNumber(this.y, 1) + ' Millions';
            }
          },
          legend: {
            //enabled: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 100,
            borderWidth: 0,
            itemMarginTop: 5,
            itemMarginBottom: 5,
            labelFormatter: function () {
              var words = this.name.split(/[\s]+/);
              var numWordsPerLine = 2;
              var str = [];

              for (var word in words) {
                if (word > 0 && word % numWordsPerLine == 0)
                  str.push('<br>');

                str.push(words[word]);
              }

              return str.join(' ');
            }
          },
          series: data.series
        });
      } catch (err) {
        //Handle errors here
        di_jq("#" + type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
      }
    }
  }


  function loadLineChartFullscreen(data, type) {

    var area_name = di_jq("#hd_area_name").val();

    options = {
      chart: {
        renderTo: type,
        type: 'spline',
        marginRight: 130,
        marginBottom: 25,
        marginTop: 50
      },
      exporting: {
        buttons: {
          exportButton: {
            enabled: false,
            symbol: 'url(' + site_url + 'img/export.png)',
            symbolSize: 10,
            width: 14,
            height: 15,
            symbolX: 0,
            symbolY: 0
          },
          printButton: {
            enabled: false
          },
          contextButton: {
            enabled: false
          },
          printButtonCustom: {
            _titleKey: 'printButtonTitle',
            symbol: 'url(' + site_url + 'img/print.png)',
            symbolSize: 14,
            width: 14,
            height: 14,
            symbolX: 0,
            symbolY: 0,
            x: -30,
            onclick: function () {
              printLineFullscreen();
            }
          },
          fullscreenBtn: {
            symbol: 'square',
            _titleKey: 'ExitFullScreenTitle',
            x: -60,
            symbol:  'url(' + site_url + 'img/fullscreen.png)',
              symbolY: 0,
            symbolX: 0,
            symbolSize: 14,
            width: 14,
            height: 14,
            onclick: function () {
              closeLineFullscreen();
            }
          }



        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: '<b>' + area_name + '</b> - Alternative Population Projections 2005-2050 and Component of Population growth',
        x: -20, //center
        y: 0, //center
        style: {
          fontSize: '12px'
        }
      },
      xAxis: {
        categories: data.categories,
        plotLines: [{
            value: 1,
            color: '#A1A1A1',
            dashStyle: 'shortdash',
            width: 2,
          }]
      },
      yAxis: {
        title: {
          text: 'Population size (million)'
        },
        gridLineDashStyle: 'dot',
        plotLines: [{
            value: 0,
            width: 1,
            // color: '#808080'
          }]
      },
      tooltip: {
        formatter: function () {
          return '<b>' + area_name + '</b>, <b>' + this.series.name + '</b><br/>' +
            this.x + ': ' + roundNumber(this.y, 1) + ' Millions';
        }
      },
      legend: {
        //enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 100,
        borderWidth: 0,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        labelFormatter: function () {
          var words = this.name.split(/[\s]+/);
          var numWordsPerLine = 2;
          var str = [];

          for (var word in words) {
            if (word > 0 && word % numWordsPerLine == 0)
              str.push('<br>');

            str.push(words[word]);
          }

          return str.join(' ');
        }
      },
      series: data.series

    }
    //chart = new Highcharts.Chart(options,  function(chart){ drawCustomLegend(chart, type); });
    chart = new Highcharts.Chart(options);
    //hide markers at the begning points of graph
    //	var p = chart.series[4].points[1]; p.update({ marker: {radius: 0}});
    //	var p = chart.series[5].points[1]; p.update({ marker: {radius: 0}});
    //	var p = chart.series[6].points[1]; p.update({ marker: {radius: 0}});

  }

  function loadbarChart(data, type, area_nid) {
    try {
      //console.log(data);
      //alert(barChartMaxMin);
      for (var i = 0; i < data.series.data.length; i++) {
        var j = data.series.data[i];
        data.series.data[i] = new Object();
        data.series.data[i].color = "#1690C7";
        data.series.data[i].y = j;
      }
      var abc = {title: {
          text: '',
          //align: 'center'
        },
        gridLineDashStyle: 'dot'
      };
      if (minBar != '' && maxBar != '') {
        abc = {title: {
            text: '',
            //align: 'center'
          },
          gridLineDashStyle: 'dot',
          min: minBar,
          max: maxBar
        };
      }

      //calculating chrat width as per the window's width
      var width = $(window).width();
      if (width > 930)
        width = 550;
      else if (width > 640 && width < 900)
        width = width - 40;
      else
        width = width - 10;



      var area_name = di_jq("#hd_area_name").val();

      barChart1 = new Highcharts.Chart({
        chart: {
          renderTo: type,
          type: 'bar',
          marginTop: 20,
          width: width
            /*
             marginRight: 130,
             marginBottom: 25,
             marginTop: 20
             */
        }, exporting: {
          buttons: {
            exportButton: {
              enabled: false
            },
            printButton: {
              enabled: false
            },
            contextButton: {
              enabled: false
            }
          }
        },
        title: {
          text: '',
          y: 0,
          style: {
            fontSize: '12px'
          }
        },
        xAxis: {
          categories: data.categories
        },
        yAxis: abc,
        tooltip: {
          formatter: function () {
            return '<b>' + area_name + '<b><br>' +
              this.point.category + ': ' + roundNumber(this.y, 1) + ' %';
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          bar: {
            borderWidth: 0,
            shadow: false,
            point: {
              events: {
                mouseOver: function () {
                  var eleId = this.category;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_row').css({'font-weight': 'bold', 'background': '#C6DEFF'});
                },
                mouseOut: function () {
                  var eleId = this.category;
                  eleId = eleId.replace(/ /g, "_");
                  eleId = eleId.toLowerCase();
                  $('#' + eleId + '_row').css({'font-weight': 'normal', 'background': 'none'});
                }
              }
            }
          }
        },
        series: [{
            name: 'Percent',
            data: data.series.data
          }]
      });
      di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
        di_jq(this).unbind('click');
      });
    } catch (err) {
      //Handle errors here
      di_jq("#" + type).html('<div style="text-align: center; margin-top: 30%;font-weight: bold;">No Data found.</div>');
      di_jq("#" + type).parent().find('span.hoverMenu a').each(function () {
        di_jq(this).bind('click', function () {
          return false;
        });
      });
    }
  }

  function loadBarChartFullScreen(data, type) {

    var area_name = di_jq("#hd_area_name").val();

    chart = new Highcharts.Chart({
      chart: {
        renderTo: type,
        type: 'bar',
        marginTop: 30
      }, exporting: {
        buttons: {
          exportButton: {
            enabled: false,
            symbol: 'url(' + site_url + 'img/export.png)',
            symbolSize: 12,
            width: 14,
            height: 15,
            symbolX: 0,
            symbolY: 0
          },
          printButton: {
            enabled: false,
            symbol: 'url(' + site_url + 'img/print.png)',
            symbolSize: 12,
            width: 17,
            height: 15,
            symbolX: 1,
            symbolY: 0

          },
          contextButton: {
            enabled: false
          },
          printButtonCustom: {
            _titleKey: 'printButtonTitle',
            symbol: 'url(' + site_url + 'img/print.png)',
            symbolSize: 12,
            width: 14,
            height: 14,
            symbolX: 0,
            symbolY: 0,
            x: -30,
            onclick: function () {
              printBarFullscreen();
            }
          },
          fullscreenBtn: {
            symbol: 'square',
            _titleKey: 'ExitFullScreenTitle',
            x: -60,
            symbol:  'url(' + site_url + 'img/fullscreen.png)',
              symbolY: 0,
            symbolX: 0,
            symbolSize: 12,
            width: 14,
            height: 14,
            onclick: function () {
              closeBarFullscreen();
            }
          }



        }
      },
      title: {
        text: '<b>' + area_name + '</b> - Components of Population Growth',
        y: 0,
        style: {
          fontSize: '12px'
        }
      },
      xAxis: {
        categories: data.categories
      },
      yAxis: {
        title: {
          text: 'Percentage'
            //align: 'center'
        }

      },
      tooltip: {
        formatter: function () {
          return '<b>' + area_name + '</b><br>' +
            this.point.category + ': ' + roundNumber(this.y, 1) + ' %';
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        bar: {
          borderWidth: 0,
          shadow: false
        }
      },
      credits: {
        enabled: false
      },
      series: [{
          name: 'Percent',
          data: data.series.data
        }]
    });


  }

  function loadbarChart2(data, type, area_nid) {
    //alert(barChartMaxMin);
    for (var i = 0; i < data.series.data.length; i++) {
      var j = data.series.data[i];
      data.series.data[i] = new Object();
      data.series.data[i].color = "#1690C7";
      data.series.data[i].y = j;
    }

    /*	var minVal = Math.min.apply( Math, barChartMaxMin );
     var maxVal = Math.max.apply( Math, barChartMaxMin );
     minBar = minVal;
     maxBar = maxVal;*/

    //calculating chrat width as per the window's width
    var width = $(window).width();
    if (width > 930)
      width = 550;
    else if (width > 640 && width < 900)
      width = width - 40;
    else
      width = width - 10;

    var area_name = di_jq("#hd_area_name").val();

    barChart2 = new Highcharts.Chart({
      chart: {
        renderTo: type,
        type: 'bar',
        marginTop: 20,
        width: width
          /*
           marginRight: 130,
           marginBottom: 25,
           marginTop: 20
           */
      }, exporting: {
        buttons: {
          exportButton: {
            enabled: false
          },
          printButton: {
            enabled: false
          },
          contextButton: {
            enabled: false
          }
        }
      },
      title: {
        text: '',
        y: 0,
        style: {
          fontSize: '12px'
        }
      },
      xAxis: {
        categories: data.categories
      },
      yAxis: {
        title: {
          text: ''
            //align: 'center'
        },
        gridLineDashStyle: 'dot',
//			max: maxVal,
//			min: minVal
        max: maxBar,
        min: minBar


      },
      tooltip: {
        formatter: function () {
          return '<b>' + area_name + '<b><br>' +
            this.point.category + ': ' + roundNumber(this.y, 1) + ' %';
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        bar: {
          borderWidth: 0,
          shadow: false,
          point: {
            events: {
              mouseOver: function () {
                var eleId = this.category;
                eleId = eleId.replace(/ /g, "_");
                eleId = eleId.toLowerCase();
                $('#' + eleId + '_row1').css({'font-weight': 'bold', 'background': '#C6DEFF'});
              },
              mouseOut: function () {
                var eleId = this.category;
                eleId = eleId.replace(/ /g, "_");
                eleId = eleId.toLowerCase();
                $('#' + eleId + '_row1').css({'font-weight': 'normal', 'background': 'none'});
              }
            }
          }
        }
      },
      series: [{
          name: 'Percent',
          data: data.series.data
        }]
    });

  }

  function loadBar2ChartFullScreen(data, type) {

    var area_name = di_jq("#hd_area_name").val();

    chart = new Highcharts.Chart({
      chart: {
        renderTo: type,
        type: 'bar',
        marginTop: 30
      }, exporting: {
        buttons: {
          exportButton: {
            enabled: false,
            symbol: 'url(' + site_url + 'img/export.png)',
            symbolSize: 12,
            width: 14,
            height: 15,
            symbolX: 0,
            symbolY: 0
          },
          printButton: {
            enabled: false,
            symbol: 'url(' + site_url + 'img/print.png)',
            symbolSize: 12,
            width: 17,
            height: 15,
            symbolX: 1,
            symbolY: 0

          },
          contextButton: {
            enabled: false
          },
          printButtonCustom: {
            _titleKey: 'printButtonTitle',
            symbol: 'url(' + site_url + 'img/print.png)',
            symbolSize: 12,
            width: 14,
            height: 14,
            symbolX: 0,
            symbolY: 0,
            x: -30,
            onclick: function () {
              printBar2Fullscreen();
            }
          },
          fullscreenBtn: {
            symbol: 'square',
            _titleKey: 'ExitFullScreenTitle',
            x: -60,
            symbol:  'url(' + site_url + 'img/fullscreen.png)',
              symbolY: 0,
            symbolX: 0,
            symbolSize: 12,
            width: 14,
            height: 14,
            onclick: function () {
              closeBar2Fullscreen();
            }
          }



        }
      },
      title: {
        text: '<b>' + area_name + '</b> - Components of Population Growth',
        y: 0,
        style: {
          fontSize: '12px'
        }
      },
      xAxis: {
        categories: data.categories
      },
      yAxis: {
        title: {
          text: 'Percentage'
            //align: 'center'
        }

      },
      tooltip: {
        formatter: function () {
          return '<b>' + area_name + '</b><br>' +
            this.point.category + ': ' + roundNumber(this.y, 1) + ' %';
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        bar: {
          borderWidth: 0,
          shadow: false
        }
      },
      series: [{
          name: 'Percent',
          data: data.series.data
        }]
    });


  }

  function loadTable1(data, type, area_nid) {

    var html_Heading_str = '<tr><td><span>POPULATION PROJECTIONS (million)</span></td>';
    html_Heading_str += '<td><span>2010</span></td><td><span>2025</span></td><td><span>2050</span></td><td><span>%<br>growth</span></td>        </tr>';
    var html_content_str = '';

    di_jq.each(data.series, function (i, item) {

      var eleId = item.name;
      eleId = eleId.replace(/ /g, "_");
      eleId = eleId.toLowerCase();


      html_content_str += '<tr id="' + eleId + '_lnrow">';

      //html_content_str +=     '<td class="emty tblText ">&nbsp;</td>';

      html_content_str += '<td  class="tblr_tbrdr_fst">' + item.name + '</td>';

      di_jq.each(item.data, function (j, value) {

        if (j == 0) {
          html_content_str += '<td  class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';
        } else {
          html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';

        }

      });
      var val = item.name;
      val = val.substr(0, 1).toLowerCase() + val.substr(1);
      if (val == 'constant')
      {

        html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + data.growth_series[val] + '</td>';
      } else {
        html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + roundNumber(data.growth_series[val], 1) + '</td>';
      }

      // console.log(data.growth_series[item.name]);
      // html_content_str +=     '<td class="tblr_tbrdr padd_lft_tn">'+roundNumber(data.growth_series[val],1)+'</td>';
      html_content_str += '</tr>';


    });

    var html_str = html_Heading_str + html_content_str;
    di_jq("#table1").html(html_str);
    di_jq("#linefullscreen_tbl").html(html_str);


  }

  function loadTable2(data, type, area_nid) {

    var html_Heading_str = '<tr><td><span>Decomposition</span></td>';
    html_Heading_str += '<td><span>Multiplier 2050/2010</span></td><td><span>% effect of addition</span></td><td><span>% effect of removal</span></td></tr>';
    var html_content_str = '';



    di_jq.each(data.series, function (i, item) {
      var eleId = item.name;
      eleId = eleId.replace(/ /g, "_");
      eleId = eleId.toLowerCase();

      //alert(eleId);
      html_content_str += '<tr id="' + eleId + '_row">';

      item.name = item.name.replace("Component of decomposition", "Total");

      html_content_str += '<td class="tblr_tbrdr_fst">' + item.name + '</td>';

      di_jq.each(item.data, function (j, value) {

        if (j == 1 || j == 2)
        {
          html_content_str += '<td  class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';
        } else {

          html_content_str += '<td  class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 2) + '</td>';
        }



      });

      html_content_str += '</tr>';


    });




    var html_str = html_Heading_str + html_content_str;

    di_jq("#table2").html(html_str);
    di_jq("#barfullscreen_tbl").html(html_str);

  }

  function loadTable3(data, type, area_nid) {

    var html_Heading_str = '<tr><td><span>POPULATION PROJECTIONS (million)</span></td>';
    html_Heading_str += '<td><span>2010</span></td><td><span>2025</span></td><td><span>2050</span></td><td><span>%<br>growth</span></td>        </tr>';

    var html_content_str = '';

    di_jq.each(data.series, function (i, item) {

      var eleId = item.name;
      eleId = eleId.replace(/ /g, "_");
      eleId = eleId.toLowerCase();


      html_content_str += '<tr id="' + eleId + '_lnrow1">';

      //html_content_str +=     '<td class="emty tblText ">&nbsp;</td>';

      html_content_str += '<td  class="tblr_tbrdr_fst">' + item.name + '</td>';

      di_jq.each(item.data, function (j, value) {

        if (j == 0) {
          html_content_str += '<td  class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';
        } else {
          html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';

        }

      });
      var val = item.name;
      val = val.substr(0, 1).toLowerCase() + val.substr(1);
      html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + roundNumber(data.growth_series[val], 1) + '</td>';
      html_content_str += '</tr>';


    });

    var html_str = html_Heading_str + html_content_str;
    di_jq("#table3").html(html_str);
    di_jq("#linefullscreen_tbl1").html(html_str);


  }


  function loadTable4(data, type, area_nid) {

    var html_Heading_str = '<tr class="fnt_bld">';
    // html_Heading_str +=    '<td class="emty tblHeading">&nbsp;</td>';
    html_Heading_str += '<td class="txt_upr wdth_40">Decomposition</td>';
    html_Heading_str += '<td class="">Multiplier 2050/2010</td>';
    html_Heading_str += '<td class="">% effect of addition</td>';
    html_Heading_str += '<td class="">% effect of removal</td>';
    html_Heading_str += '</tr>';

    var html_content_str = '';



    di_jq.each(data.series, function (i, item) {

      var eleId = item.name;
      eleId = eleId.replace(/ /g, "_");
      eleId = eleId.toLowerCase();


      html_content_str += '<tr id="' + eleId + '_row1">';

      item.name = item.name.replace("Component of decomposition", "Total");
      // html_content_str +=     '<td class="emty tblText">&nbsp;</td>';
      html_content_str += '<td class="tblr_tbrdr_fst">' + item.name + '</td>';

      di_jq.each(item.data, function (j, value) {

        if (j == 1 || j == 2) {
          html_content_str += '<td  class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 1) + '</td>';
        } else {


          html_content_str += '<td class="tblr_tbrdr padd_lft_tn">' + roundNumber(value, 2) + '</td>';

        }



      });

      html_content_str += '</tr>';


    });




    var html_str = html_Heading_str + html_content_str;

    di_jq("#table4").html(html_str);
    di_jq("#bar2fullscreen_tbl").html(html_str);

  }

  function generatebottom1() {
    var area_name = di_jq("#hd_area_name").val();

    di_jq('.bottom_country').each(function () {
      di_jq(this).html(area_name)
    });

    var standared = new Object();
    var constant = new Object();
    var momentum = new Object();
    var replacement = new Object();
    var Wanted = new Object();
    var declining_mortality = 0;
    var yound_age_struct = 0;
    var report_total = '';

    di_jq.each(stdData.series, function (i, item) {

      standared["1950"] = item.data["1950"];
    });

    di_jq.each(reportData.series, function (i, item) {

      if (item != 'undefined') {
        if (item.name == "Standard") {

          //standared["1950"] = item.data["1950"];
          standared["2010"] = item.data["2010"];
          standared["2025"] = item.data["2025"];
          standared["2050"] = item.data["2050"];
        }
        if (item.name == "Constant") {

          constant["1950"] = item.data["1950"];
          constant["2010"] = item.data["2010"];
          constant["2025"] = item.data["2025"];
          constant["2050"] = item.data["2050"];

        }
        if (item.name == "Momentum") {

          momentum["1950"] = item.data["1950"];
          momentum["2010"] = item.data["2010"];
          momentum["2025"] = item.data["2025"];
          momentum["2050"] = item.data["2050"];

        }
        if (item.name == "Wanted") {

          Wanted["1950"] = item.data["1950"];
          Wanted["2010"] = item.data["2010"];
          Wanted["2025"] = item.data["2025"];
          Wanted["2050"] = item.data["2050"];

        }
        if (item.name == "Replacement") {

          replacement["1950"] = item.data["1950"];
          replacement["2010"] = item.data["2010"];
          replacement["2025"] = item.data["2025"];
          replacement["2050"] = item.data["2050"];

        }
      }
    });

    var bottom1_high_fertility1 = 0;
    var bottom1_high_fertility2 = 0;
    var bottom1_declining_mortality1 = 0;
    var bottom1_declining_mortality2 = 0;
    var bottom1_yound_age_struct1 = 0;
    var bottom1_yound_age_struct2 = 0;
    var bottom1_total1 = 0;
    var bottom1_total2 = 0;

    di_jq.each(table2Data.series, function (i, item) {
      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        bottom1_declining_mortality1 = item.data[1];
        bottom1_declining_mortality2 = item.data[2];
      }
      if (item.name == "Young age structure") {
        bottom1_yound_age_struct1 = item.data[1];
        bottom1_yound_age_struct2 = item.data[2];
      }
      if (item.name == "High fertility") {
        bottom1_high_fertility1 = item.data[1];
        bottom1_high_fertility2 = item.data[2];
      }
      if (item.name == "Component of decomposition") {
        bottom1_total1 = item.data[1];
        bottom1_total2 = item.data[2];
      }
    })


    var wanted_growth_rate = (((Wanted["2050"] / Wanted["2010"]) - 1) * 100);
    Wanted["growth"] = wanted_growth_rate.toFixed(2);

    var report_unwanted_fertility = (((Wanted["2050"] / standared["2050"]) * 100) - 100);
    report_unwanted_fertility = report_unwanted_fertility.toFixed(2);
    var report_wanted_fertility = (((replacement["2050"] / Wanted["2050"]) * 100) - 100);
    report_wanted_fertility = report_wanted_fertility.toFixed(2);

    /* di_jq("#bottom_high_fertility3").html(roundNumber_num(bottom1_high_fertility1,1));
     di_jq("#bottom_high_fertility4").html(roundNumber_num(bottom1_high_fertility2,1));
     di_jq("#bottom_declining_mortality3").html(roundNumber_num(bottom1_declining_mortality1,1));
     di_jq("#bottom_yound_age_struct3").html(roundNumber_num(bottom1_yound_age_struct1,1));*/

    high_fertility = roundNumber_num(bottom1_high_fertility1, 1);
    mortality_and_migration = roundNumber_num(bottom1_declining_mortality1, 1);
    young_age_structure = roundNumber_num(bottom1_yound_age_struct1, 1);

    setSummarypane1(bottom1_high_fertility1, bottom1_declining_mortality1, bottom1_yound_age_struct1, bottom1_high_fertility2);
  }

  function setSummarypane1(high_fertility, mortality_and_migration, young_age_structure, wanted_fertility) {
    var area_name = di_jq("#hd_area_name").val();
    if (high_fertility > 0 && mortality_and_migration > 0 && young_age_structure > 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%,  to future population growth, and together with the effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of declining mortality and migration effect is just <span id=\"bottom_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility < 0 && mortality_and_migration < 0 && young_age_structure < 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%, to future population decline, and together with the effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future decline. The combined effect of declining mortality and migration effect is just <span id=\"bottom_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility < 0 && mortality_and_migration > 0 && young_age_structure < 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%, to future population decline, and together with the effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future decline. </p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility < 0 && mortality_and_migration > 0 && young_age_structure > 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%, to future population growth. It accounts for nearly all future growth. The combined effect of declining mortality and migration effect is just <span id=\"bottom_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility < 0 && mortality_and_migration < 0 && young_age_structure > 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%, to future population growth. It accounts for nearly all future growth.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility > 0 && mortality_and_migration < 0 && young_age_structure > 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"bottom_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>%, to future population growth, and together with the effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future growth.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility > 0 && mortality_and_migration > 0 && young_age_structure < 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, accounts for nearly all future growth. The combined effect of declining mortality and migration effect is just <span id=\"bottom_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    } else if (high_fertility > 0 && mortality_and_migration < 0 && young_age_structure < 0) {
      di_jq("#summary_pane1").html(' <div class="legend"><p class=\"fnt_twlpx\">The effect of high fertility, <span id=\"bottom_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, accounts for nearly all future growth.</p><p>The last column in Decomposition Table gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"bottom_country\">' + area_name + '</span> in 2050 by <span id=\"bottom_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p></div>');
    }
  }

  function generatebottom2() {
    var area_name = di_jq("#hd_area_name").val();
    //console.log(reportData1);
    var standared = new Object();
    var constant = new Object();
    var momentum = new Object();
    var replacement = new Object();
    var Wanted = new Object();
    var declining_mortality = 0;
    var yound_age_struct = 0;
    var report_total = '';

    di_jq.each(stdData.series, function (i, item) {

      standared["1950"] = item.data["1950"];
    });

    di_jq.each(reportData1.series, function (i, item) {

      if (item.name == "Standard") {

        //standared["1950"] = item.data["1950"];
        standared["2010"] = item.data["2010"];
        standared["2025"] = item.data["2025"];
        standared["2050"] = item.data["2050"];
      }
      if (item.name == "Constant") {

        constant["1950"] = item.data["1950"];
        constant["2010"] = item.data["2010"];
        constant["2025"] = item.data["2025"];
        constant["2050"] = item.data["2050"];

      }
      if (item.name == "Momentum") {

        momentum["1950"] = item.data["1950"];
        momentum["2010"] = item.data["2010"];
        momentum["2025"] = item.data["2025"];
        momentum["2050"] = item.data["2050"];

      }
      if (item.name == "Wanted") {

        Wanted["1950"] = item.data["1950"];
        Wanted["2010"] = item.data["2010"];
        Wanted["2025"] = item.data["2025"];
        Wanted["2050"] = item.data["2050"];

      }
      if (item.name == "Replacement") {

        replacement["1950"] = item.data["1950"];
        replacement["2010"] = item.data["2010"];
        replacement["2025"] = item.data["2025"];
        replacement["2050"] = item.data["2050"];

      }

    });
//	console.log(table4Data);
//    di_jq.each(table2Data.series,function(i,item){
    di_jq.each(table4Data.series, function (i, item) {
      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        declining_mortality = item.data[2];
      }
      if (item.name == "Young age structure") {
        yound_age_struct = item.data[2];
      }
    });


    /*  var report_unwanted_fertility = (((Wanted["2050"]/standared["2050"])*100)-100);
     report_unwanted_fertility     = report_unwanted_fertility.toFixed(2);
     var report_wanted_fertility   =	(((replacement["2050"]/Wanted["2050"])*100)-100);
     report_wanted_fertility= report_wanted_fertility.toFixed(2);*/
//		{name:"constant", data:[null, 6908.69, 6908.69, 6908.69]})


    var report_unwanted_fertility;
    var report_wanted_fertility;
    var cond_wanted_fertility;
    var cond_yound_age_struct;
    var cond_declining_mortality;
    di_jq.each(table4Data.series, function (i, item) {
      if (item.name == "Unwanted fertility") {
        report_unwanted_fertility = item.data[2];
      }
      if (item.name == "Wanted fertility") {
        cond_wanted_fertility = item.data[1];
        report_wanted_fertility = item.data[2];
      }
      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        cond_declining_mortality = item.data[1];
      }
      if (item.name == "Young age structure") {
        cond_yound_age_struct = item.data[1];
      }
    });

    di_jq("#bottom2_unwanted_fertility2").html(roundNumber_num(report_unwanted_fertility, 1));

    di_jq("#bottom2_wanted_fertility2").html(roundNumber_num(report_wanted_fertility, 1));
    di_jq("#bottom2_declining_mortality2").html(roundNumber_num(declining_mortality, 1));

    di_jq("#bottom2_yound_age_struct2").html(roundNumber_num(yound_age_struct, 1));

    setSummarypane2(cond_wanted_fertility, cond_declining_mortality, cond_yound_age_struct, yound_age_struct, report_wanted_fertility, report_unwanted_fertility, declining_mortality);
  }

  function setSummarypane2(cond_wanted_fertility, cond_declining_mortality, cond_yound_age_struct, young_age_structure, report_wanted_fertility, report_unwanted_fertility, declining_mortality) {
    var area_name = di_jq("#hd_area_name").val();
    //alert(cond_wanted_fertility); alert(cond_declining_mortality); alert(cond_yound_age_struct);
    if (cond_wanted_fertility > 0 && cond_declining_mortality > 0 && cond_yound_age_struct > 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id=\"bottom2_unwanted_fertility2\">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>% they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"bottom2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality < 0 && cond_yound_age_struct < 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population decline <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>%, they account for nearly all future decline. The combined effect of removing changing mortality and migration is just <span id=\"bottom2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality > 0 && cond_yound_age_struct < 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population decline <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>%, they account for nearly all future decline.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality > 0 && cond_yound_age_struct > 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of unwanted fertility, <span id="bottom2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"bottom2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality < 0 && cond_yound_age_struct > 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of unwanted fertility, <span id="bottom2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth.</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality < 0 && cond_yound_age_struct > 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"bottom2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="bottom2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>% they account for nearly all future growth.</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality > 0 && cond_yound_age_struct < 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="bottom2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"bottom2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality < 0 && cond_yound_age_struct < 0) {
      di_jq("#summary_pane2").html('<p class=\"fnt_twlpx\">The removal of the effect of high wanted fertility, <span id=\"bottom2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="bottom2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth.</p>');
    }
  }

  function generateReport1() {

    // alert(barChartData.series.data[0].toSource());
    var area_name = di_jq("#hd_area_name").val();

    di_jq("#report1_areaname1").html(area_name);
    di_jq("#report1_areaname2").html(area_name);

    di_jq('.report_country').each(function () {

      di_jq(this).html(area_name)

    })

    di_jq('.bottom_country').each(function () {

      di_jq(this).html(area_name)

    })
    di_jq("#report_areaname2").html(area_name);

    var standared = new Object();
    var constant = new Object();
    var momentum = new Object();
    var replacement = new Object();
    var Wanted = new Object();
    var declining_mortality = 0;
    var yound_age_struct = 0;
    var report_total = '';
    standared["1950"] = '';
    standared["2010"] = '';
    standared["2025"] = '';
    standared["2050"] = '';
    constant["1950"] = '';
    constant["2010"] = '';
    constant["2025"] = '';
    constant["2050"] = '';
    momentum["1950"] = '';
    momentum["2010"] = '';
    momentum["2025"] = '';
    momentum["2050"] = '';
    Wanted["1950"] = '';
    Wanted["2010"] = '';
    Wanted["2025"] = '';
    Wanted["2050"] = '';
    replacement["1950"] = '';
    replacement["2010"] = '';
    replacement["2025"] = '';
    replacement["2050"] = '';

    di_jq.each(stdData.series, function (i, item) {

      standared["1950"] = roundNumber_num(item.data["1950"], 1);
    });


    di_jq.each(reportData.series, function (i, item) {

      if (item.name == "Standard") {

        //standared["1950"] = roundNumber_num(item.data["1950"],1);
        standared["2010"] = roundNumber_num(item.data["2010"], 1);
        standared["2025"] = roundNumber_num(item.data["2025"], 1);
        standared["2050"] = roundNumber_num(item.data["2050"], 1);

      }

      if (item.name == "Constant") {

        constant["1950"] = roundNumber_num(item.data["1950"], 1);
        constant["2010"] = roundNumber_num(item.data["2010"], 1);
        constant["2025"] = roundNumber_num(item.data["2025"], 1);
        constant["2050"] = roundNumber_num(item.data["2050"], 1);

      }
      if (item.name == "Momentum") {

        momentum["1950"] = roundNumber_num(item.data["1950"], 1);
        momentum["2010"] = roundNumber_num(item.data["2010"], 1);
        momentum["2025"] = roundNumber_num(item.data["2025"], 1);
        momentum["2050"] = roundNumber_num(item.data["2050"], 1);

      }
      if (item.name == "Wanted") {

        Wanted["1950"] = roundNumber_num(item.data["1950"], 1);
        Wanted["2010"] = roundNumber_num(item.data["2010"], 1);
        Wanted["2025"] = roundNumber_num(item.data["2025"], 1);
        Wanted["2050"] = roundNumber_num(item.data["2050"], 1);

      }

      if (item.name == "Replacement") {

        replacement["1950"] = roundNumber_num(item.data["1950"], 1);
        replacement["2010"] = roundNumber_num(item.data["2010"], 1);
        replacement["2025"] = roundNumber_num(item.data["2025"], 1);
        replacement["2050"] = roundNumber_num(item.data["2050"], 1);

      }




    })
    di_jq.each(table1Data.growth_series, function (i, item) {

      standared["growth"] = roundNumber_num(table1Data.growth_series['standard'], 1);
      replacement["growth"] = roundNumber_num(table1Data.growth_series['replacement'], 1);
      momentum["growth"] = roundNumber_num(table1Data.growth_series['momentum'], 1);
      constant["growth"] = roundNumber_num(table1Data.growth_series['constant'], 1);

      /*if(item.name=="standard"){
       standared["growth"] = roundNumber_num(item.data[0],1);
       }
       if(item.name=="constant"){
       constant["growth"] = roundNumber_num(item.data[0],1);
       }
       if(item.name=="momentum"){
       momentum["growth"] = roundNumber_num(item.data[0],1);
       }
       if(item.name=="replacement"){
       replacement["growth"] = roundNumber_num(item.data[0],1);

       }*/
    })


    var report1_high_fertility1 = 0;
    var report1_high_fertility2 = 0;
    var report1_yound_age_struct1 = 0;
    var report1_yound_age_struct2 = 0;
    var report1_declining_mortality1 = 0;
    var report1_declining_mortality2 = 0;
    var report1_total1 = 0;
    var report1_total2 = 0;
    //console.log(table2Data);
    di_jq.each(table2Data.series, function (i, item) {

      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        report1_declining_mortality1 = roundNumber_num(item.data[1], 1);
        report1_declining_mortality2 = roundNumber_num(item.data[2], 1);
      }
      if (item.name == "Young age structure") {
        report1_yound_age_struct1 = roundNumber_num(item.data[1], 1);
        report1_yound_age_struct2 = roundNumber_num(item.data[2], 1);

      }
      if (item.name == "High fertility") {
        report1_high_fertility1 = roundNumber_num(item.data[1], 1);
        report1_high_fertility2 = roundNumber_num(item.data[2], 1);
      }
      //if(item.name=="Component of decomposition"){
      if (item.name == "Total") {
        report1_total1 = roundNumber_num(item.data[1], 1);
        report1_total2 = roundNumber_num(item.data[2], 1);
      }
    });

    var wanted_growth_rate = (((Wanted["2050"] / Wanted["2010"]) - 1) * 100);
    Wanted["growth"] = wanted_growth_rate.toFixed(2);


    /*	var report_unwanted_fertility = (((Wanted["2050"]/standared["2050"])*100)-100);
     report_unwanted_fertility = report_unwanted_fertility.toFixed(2);
     var report_wanted_fertility  =	(((replacement["2050"]/Wanted["2050"])*100)-100);
     report_wanted_fertility= report_wanted_fertility.toFixed(2);*/

    var report_unwanted_fertility;
    var report_wanted_fertility;
    di_jq.each(table4Data.series, function (i, item) {
      if (item.name == "Unwanted fertility") {
        report_unwanted_fertility = item.data[2];
      }
      if (item.name == "Wanted fertility") {
        report_wanted_fertility = item.data[2];
      }
    });


    //console.log(replacement["2010"]);
    di_jq("#report1_popu_std_1950").html(standared["1950"]);
    di_jq("#report1_popu_std_2010").html(standared["2010"]);
    di_jq("#report1_popu_std_2050").html(standared["2050"]);

    di_jq("#report1_popu_cont_2010").html(constant["2010"]);
    di_jq("#report1_popu_std_2050_2").html(standared["2050"]);
    di_jq("#report1_popu_wnt_2050_2").html(Wanted["2050"]);
    di_jq("#report1_popu_rpls_2050_2").html(replacement["2050"]);
    di_jq("#report1_popu_moment_2050_2").html(momentum["2050"]);

    di_jq("#report1_popu_std_2010_3").html(standared["2010"]);
    di_jq("#report1_popu_wnt_2010_3").html(Wanted["2010"]);
    di_jq("#report1_popu_rpls_2010_3").html(replacement["2010"]);
    di_jq("#report1_popu_moment_2010_3").html(momentum["2010"]);

    di_jq("#report1_popu_std_2050_3").html(standared["2050"]);
    di_jq("#report1_popu_wnt_2050_3").html(Wanted["2050"]);
    di_jq("#report1_popu_rpls_2050_3").html(replacement["2050"]);
    di_jq("#report1_popu_moment_2050_3").html(momentum["2050"]);

    di_jq("#report1_std_growth_3").html(standared["growth"]);
    di_jq("#report1_wtd_growth_3").html(Wanted["growth"]);
    di_jq("#report1_rpls_growth_3").html(replacement["growth"]);
    di_jq("#report1_moment_growth_3").html(momentum["growth"]);

    di_jq("#report1_unwanted_fertility").html(roundNumber_num(report_unwanted_fertility, 1));
    di_jq("#report1_unwanted_fertility2").html(roundNumber_num(report_unwanted_fertility, 1));

    di_jq("#report1_high_fertility1").html(roundNumber_num(report1_high_fertility1, 1));
    di_jq("#report1_high_fertility2").html(roundNumber_num(report1_high_fertility2, 1));
    di_jq("#report1_high_fertility3").html(roundNumber_num(report1_high_fertility1, 1));
    di_jq("#report1_high_fertility4").html(roundNumber_num(report1_high_fertility2, 1));
//        di_jq("#bottom_high_fertility3").html(roundNumber_num(report1_high_fertility1,1));
//        di_jq("#bottom_high_fertility4").html(roundNumber_num(report1_high_fertility2,1));

    di_jq("#report1_wanted_fertility").html(roundNumber_num(report_wanted_fertility, 1));
    di_jq("#report1_wanted_fertility2").html(roundNumber_num(report_wanted_fertility, 1));

    di_jq("#report1_declining_mortality1").html(roundNumber_num(report1_declining_mortality1, 1));
    di_jq("#report1_declining_mortality2").html(roundNumber_num(report1_declining_mortality2, 1));
    di_jq("#report1_declining_mortality3").html(roundNumber_num(report1_declining_mortality1, 1));
    //      di_jq("#bottom_declining_mortality3").html(roundNumber_num(report1_declining_mortality1,1));

    di_jq("#report1_yound_age_struct1").html(roundNumber_num(report1_yound_age_struct1, 1));
    di_jq("#report1_yound_age_struct2").html(roundNumber_num(report1_yound_age_struct2, 1));
    di_jq("#report1_yound_age_struct3").html(roundNumber_num(report1_yound_age_struct1, 1));
    //    di_jq("#bottom_yound_age_struct3").html(roundNumber_num(report1_yound_age_struct1,1));


    di_jq("#report1_total1").html(roundNumber_num(report1_total1, 1));
    di_jq("#report1_total2").html(roundNumber_num(report1_total2, 1));


    setReportSummarypane1(report1_high_fertility1, report1_declining_mortality1, report1_yound_age_struct1, report1_high_fertility2);
  }

  function setReportSummarypane1(high_fertility, mortality_and_migration, young_age_structure, wanted_fertility) {
    var area_name = di_jq("#hd_area_name").val();
    if (high_fertility > 0 && mortality_and_migration > 0 && young_age_structure > 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population growth, and together with the effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of declining mortality and migration is just <span id=\"report1_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p>');
    } else if (high_fertility < 0 && mortality_and_migration < 0 && young_age_structure < 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population decline, and together with the effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future decline. The combined effect of declining mortality and migration is just <span id=\"report1_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.');
    } else if (high_fertility < 0 && mortality_and_migration > 0 && young_age_structure < 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population decline, and together with the effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future decline. </p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.');
    } else if (high_fertility < 0 && mortality_and_migration > 0 && young_age_structure > 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population growth. It accounts for nearly all future growth. The combined effect of declining mortality and migration is just <span id=\"report1_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.');
    } else if (high_fertility < 0 && mortality_and_migration < 0 && young_age_structure > 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population growth. It accounts for nearly all future growth.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would increase the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p>');
    } else if (high_fertility > 0 && mortality_and_migration < 0 && young_age_structure > 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The momentum from a young age structure contributes <span id=\"report1_yound_age_struct3\">' + roundNumber_num(young_age_structure, 1) + '</span>% to future population growth, and together with the effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, they account for nearly all future growth.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p>');
    } else if (high_fertility > 0 && mortality_and_migration > 0 && young_age_structure < 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, accounts for nearly all future growth. The combined effect of declining mortality and migration is just <span id=\"report1_declining_mortality3\">' + roundNumber_num(mortality_and_migration, 1) + '</span>%.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p>');
    } else if (high_fertility > 0 && mortality_and_migration < 0 && young_age_structure < 0) {
      di_jq("#rep_summary_pane1").html('<p class=\"fnt_twlpx\">The effect of high fertility, <span id=\"report1_high_fertility3\">' + roundNumber_num(high_fertility, 1) + '</span>%, accounts for nearly all future growth.</p><p class="fnt_twlpx">The last column in Table 3 gives the effect of removing a component. For example setting fertility to replacement from 2010 onwards would reduce the population size of <span class=\"report1_country\">' + area_name + '</span> in 2050 by <span id=\"report1_high_fertility4\">' + roundNumber_num(wanted_fertility, 1) + '</span>%.</p>');
    }
  }


  function generateReport2() {


    var area_name = di_jq("#hd_area_name").val();

    di_jq("#report_areaname1").html(area_name);
    di_jq("#report_areaname2").html(area_name);

    di_jq('.report_country').each(function () {

      di_jq(this).html(area_name)

    })
    //di_jq("#report_areaname2").html(area_name);

    var standared = new Object();
    var constant = new Object();
    var momentum = new Object();
    var replacement = new Object();
    var Wanted = new Object();
    var declining_mortality = 0;
    var yound_age_struct = 0;
    var report_total = '';
    standared["1950"] = '';
    standared["2010"] = '';
    standared["2025"] = '';
    standared["2050"] = '';
    constant["1950"] = '';
    constant["2010"] = '';
    constant["2025"] = '';
    constant["2050"] = '';
    momentum["1950"] = '';
    momentum["2010"] = '';
    momentum["2025"] = '';
    momentum["2050"] = '';
    Wanted["1950"] = '';
    Wanted["2010"] = '';
    Wanted["2025"] = '';
    Wanted["2050"] = '';
    replacement["1950"] = '';
    replacement["2010"] = '';
    replacement["2025"] = '';
    replacement["2050"] = '';

    di_jq.each(stdData.series, function (i, item) {

      standared["1950"] = item.data["1950"];
    });


    di_jq.each(reportData1.series, function (i, item) {
      if (item.name == "Standard") {
        //standared["1950"] = item.data["1950"];
        standared["2010"] = item.data["2010"];
        standared["2025"] = item.data["2025"];
        standared["2050"] = item.data["2050"];
      }
      if (item.name == "Constant") {

        constant["1950"] = item.data["1950"];
        constant["2010"] = item.data["2010"];
        constant["2025"] = item.data["2025"];
        constant["2050"] = item.data["2050"];
      }
      if (item.name == "Momentum") {

        momentum["1950"] = item.data["1950"];
        momentum["2010"] = item.data["2010"];
        momentum["2025"] = item.data["2025"];
        momentum["2050"] = item.data["2050"];

      }
      if (item.name == "Wanted") {

        Wanted["1950"] = item.data["1950"];
        Wanted["2010"] = item.data["2010"];
        Wanted["2025"] = item.data["2025"];
        Wanted["2050"] = item.data["2050"];

      }
      if (item.name == "Replacement") {

        replacement["1950"] = item.data["1950"];
        replacement["2010"] = item.data["2010"];
        replacement["2025"] = item.data["2025"];
        replacement["2050"] = item.data["2050"];

      }
    });


    di_jq.each(table1Data.growth_series, function (i, item) {

      standared["growth"] = table1Data.growth_series['standard'];
      replacement["growth"] = table1Data.growth_series['replacement'];
      momentum["growth"] = table1Data.growth_series['momentum'];
      constant["growth"] = table1Data.growth_series['constant'];

      /* if(item.name=="standard"){
       standared["growth"] = item.data[0];
       }
       if(item.name=="constant"){
       constant["growth"] = item.data[0];
       }
       if(item.name=="momentum"){
       momentum["growth"] = item.data[0];
       }
       if(item.name=="replacement"){
       replacement["growth"] = item.data[0];
       }*/
    });

    /* di_jq.each(table2Data.series,function(i,item){
     if(item.name=="Declining mortality and migration"){
     declining_mortality  = roundNumber_num(item.data[2],1);
     }
     if(item.name=="Young age structure"){
     yound_age_struct  = roundNumber_num(item.data[2],1);
     }
     } );*/

    di_jq.each(table4Data.series, function (i, item) {
      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        declining_mortality = item.data[2];
      }
      if (item.name == "Young age structure") {
        yound_age_struct = item.data[2];
      }
    });



    var wanted_growth_rate = (((Wanted["2050"] / Wanted["2010"]) - 1) * 100);
    Wanted["growth"] = wanted_growth_rate.toFixed(2);


    /*   var report_unwanted_fertility = (((Wanted["2050"]/standared["2050"])*100)-100);
     report_unwanted_fertility     = report_unwanted_fertility.toFixed(2);
     var report_wanted_fertility   =	(((replacement["2050"]/Wanted["2050"])*100)-100);
     report_wanted_fertility= report_wanted_fertility.toFixed(2);*/
//		{name:"constant", data:[null, 6908.69, 6908.69, 6908.69]})


    //console.log(table4Data);
    var report_unwanted_fertility;
    var report_wanted_fertility;
    var cond_wanted_fertility;
    var cond_yound_age_struct;
    var cond_declining_mortality;
    di_jq.each(table4Data.series, function (i, item) {
      if (item.name == "Unwanted fertility") {
        report_unwanted_fertility = item.data[2];
      }
      if (item.name == "Wanted fertility") {
        cond_wanted_fertility = item.data[1];
        report_wanted_fertility = item.data[2];
      }
      //if(item.name=="Declining mortality and migration"){
      if (item.name == "Declining mortality") {
        cond_declining_mortality = item.data[1];
      }
      if (item.name == "Young age structure") {
        cond_yound_age_struct = item.data[1];
      }
    });


    di_jq("#report2_popu_std_1950").html(roundNumber_num(standared["1950"], 1));
    di_jq("#report2_popu_std_2010").html(roundNumber_num(standared["2010"], 1));
    di_jq("#report2_popu_std_2050").html(roundNumber_num(standared["2050"], 1));


    di_jq("#report1_popu_std_1950").html(roundNumber_num(standared["1950"], 1));
    di_jq("#report1_popu_std_2010").html(roundNumber_num(standared["2010"], 1));
    di_jq("#report1_popu_std_2050").html(roundNumber_num(standared["2050"], 1));


    di_jq("#report2_popu_cont_2010").html(roundNumber_num(constant["2010"], 1));
    di_jq("#report2_popu_std_2050_2").html(roundNumber_num(standared["2050"], 1));
    di_jq("#report2_popu_wnt_2050_2").html(roundNumber_num(Wanted["2050"], 1));
    di_jq("#report2_popu_rpls_2050_2").html(roundNumber_num(replacement["2050"], 1));
    di_jq("#report2_popu_moment_2050_2").html(roundNumber_num(momentum["2050"], 1));

    di_jq("#report1_popu_cont_2010").html(roundNumber_num(constant["2010"], 1));
    di_jq("#report1_popu_std_2050_2").html(roundNumber_num(standared["2050"], 1));
    di_jq("#report1_popu_wnt_2050_2").html(roundNumber_num(Wanted["2050"], 1));
    di_jq("#report1_popu_rpls_2050_2").html(roundNumber_num(replacement["2050"], 1));
    di_jq("#report1_popu_moment_2050_2").html(roundNumber_num(momentum["2050"], 1));


    di_jq("#report2_popu_std_2010_3").html(roundNumber_num(standared["2010"], 1));
    di_jq("#report2_popu_wnt_2010_3").html(roundNumber_num(Wanted["2010"], 1));
    di_jq("#report2_popu_rpls_2010_3").html(roundNumber_num(replacement["2010"], 1));
    di_jq("#report2_popu_moment_2010_3").html(roundNumber_num(momentum["2010"], 1));


    di_jq("#report1_popu_std_2010_3").html(roundNumber_num(standared["2010"], 1));
    di_jq("#report1_popu_wnt_2010_3").html(roundNumber_num(Wanted["2010"], 1));
    di_jq("#report1_popu_rpls_2010_3").html(roundNumber_num(replacement["2010"], 1));
    di_jq("#report1_popu_moment_2010_3").html(roundNumber_num(momentum["2010"], 1));

    di_jq("#report2_popu_std_2050_3").html(roundNumber_num(standared["2050"], 1));
    di_jq("#report2_popu_wnt_2050_3").html(roundNumber_num(Wanted["2050"], 1));
    di_jq("#report2_popu_rpls_2050_3").html(roundNumber_num(replacement["2050"], 1));
    di_jq("#report2_popu_moment_2050_3").html(roundNumber_num(momentum["2050"], 1));



    di_jq("#report1_popu_std_2050_3").html(roundNumber_num(standared["2050"], 1));
    di_jq("#report1_popu_wnt_2050_3").html(roundNumber_num(Wanted["2050"], 1));
    di_jq("#report1_popu_rpls_2050_3").html(roundNumber_num(replacement["2050"], 1));
    di_jq("#report1_popu_moment_2050_3").html(roundNumber_num(momentum["2050"], 1));

    di_jq("#report2_std_growth_3").html(roundNumber_num(standared["growth"], 1));
    di_jq("#report2_wtd_growth_3").html(roundNumber_num(Wanted["growth"], 1));
    di_jq("#report2_rpls_growth_3").html(roundNumber_num(replacement["growth"], 1));
    di_jq("#report2_moment_growth_3").html(roundNumber_num(momentum["growth"], 1));


    di_jq("#report1_std_growth_3").html(roundNumber_num(standared["growth"], 1));
    di_jq("#report1_wtd_growth_3").html(roundNumber_num(Wanted["growth"], 1));
    di_jq("#report1_rpls_growth_3").html(roundNumber_num(replacement["growth"], 1));
    di_jq("#report1_moment_growth_3").html(roundNumber_num(momentum["growth"], 1));

    di_jq("#report2_unwanted_fertility").html(roundNumber_num(report_unwanted_fertility, 1));
    di_jq("#report2_unwanted_fertility2").html(roundNumber_num(report_unwanted_fertility, 1));
    //  di_jq("#bottom2_unwanted_fertility2").html(roundNumber_num(report_unwanted_fertility,1));

    di_jq("#report1_unwanted_fertility").html(roundNumber_num(report_unwanted_fertility, 1));
    di_jq("#report1_unwanted_fertility2").html(roundNumber_num(report_unwanted_fertility, 1));


    di_jq("#report2_wanted_fertility").html(roundNumber_num(report_wanted_fertility, 1));
    di_jq("#report2_wanted_fertility2").html(roundNumber_num(report_wanted_fertility, 1));
    //  di_jq("#bottom2_wanted_fertility2").html(roundNumber_num(report_wanted_fertility,1));

    di_jq("#report1_wanted_fertility").html(roundNumber_num(report_wanted_fertility, 1));
    di_jq("#report1_wanted_fertility2").html(roundNumber_num(report_wanted_fertility, 1));

    di_jq("#report2_declining_mortality").html(roundNumber_num(declining_mortality, 1));
    di_jq("#report2_declining_mortality2").html(roundNumber_num(declining_mortality, 1));
    // di_jq("#bottom2_declining_mortality2").html(roundNumber_num(declining_mortality,1));

    di_jq("#report1_declining_mortality").html(roundNumber_num(declining_mortality, 1));
    di_jq("#report1_declining_mortality2").html(roundNumber_num(declining_mortality, 1));

    di_jq("#report2_yound_age_struct").html(roundNumber_num(yound_age_struct, 1));
    di_jq("#report2_yound_age_struct2").html(roundNumber_num(yound_age_struct, 1));
    // di_jq("#bottom2_yound_age_struct2").html(roundNumber_num(yound_age_struct,1));


    di_jq("#report1_yound_age_struct").html(roundNumber_num(yound_age_struct, 1));
    di_jq("#report1_yound_age_struct2").html(roundNumber_num(yound_age_struct, 1));

    //di_jq("#report2_total").html(roundNumber_num(report_total,1));


    di_jq("#report2_total").html(roundNumber_num(di_jq("#hd_report_growth").val(), 1));

    di_jq("#report1_total").html(roundNumber_num(di_jq("#hd_report_growth").val(), 1));

    setReportSummarypane2(cond_wanted_fertility, cond_declining_mortality, cond_yound_age_struct, yound_age_struct, report_wanted_fertility, report_unwanted_fertility, declining_mortality);
  }

  function setReportSummarypane2(cond_wanted_fertility, cond_declining_mortality, cond_yound_age_struct, young_age_structure, report_wanted_fertility, report_unwanted_fertility, declining_mortality) {
    var area_name = di_jq("#hd_area_name").val();
    //alert(cond_wanted_fertility); alert(cond_declining_mortality); alert(cond_yound_age_struct);
    if (cond_wanted_fertility > 0 && cond_declining_mortality > 0 && cond_yound_age_struct > 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id=\"report2_unwanted_fertility2\">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>% they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"report2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality < 0 && cond_yound_age_struct < 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population decline <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>%, they account for nearly all future decline. The combined effect of removing changing mortality and migration is just <span id=\"report2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality > 0 && cond_yound_age_struct < 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population decline <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>%, they account for nearly all future decline.</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality > 0 && cond_yound_age_struct > 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of unwanted fertility, <span id="report2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"report2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%</p>');
    } else if (cond_wanted_fertility < 0 && cond_declining_mortality < 0 && cond_yound_age_struct > 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of unwanted fertility, <span id="report2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth.</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality < 0 && cond_yound_age_struct > 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of momentum from a young age structure has a large effect on future population growth <span id=\"report2_yound_age_struct2\">' + roundNumber_num(young_age_structure, 1) + '</span>%, and together with the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="report2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>% they account for nearly all future growth.</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality > 0 && cond_yound_age_struct < 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="report2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth. The combined effect of removing changing mortality and migration is just <span id=\"report2_declining_mortality2\">' + roundNumber_num(declining_mortality, 1) + '</span>%</p>');
    } else if (cond_wanted_fertility > 0 && cond_declining_mortality < 0 && cond_yound_age_struct < 0) {
      di_jq("#rep_summary_pane2").html('<p class=\"fnt_twlpx\">The removal of the effect of high wanted fertility, <span id=\"report2_wanted_fertility2\">' + roundNumber_num(report_wanted_fertility, 1) + '</span>% and unwanted fertility, <span id="report2_unwanted_fertility2">' + roundNumber_num(report_unwanted_fertility, 1) + '</span>%, they account for nearly all future growth.</p>');
    }
  }




  function drawComparisionChart(areanid) {

    var area_name = di_jq("#hd_area_name").val();

    category = [];
    jsonObj = [];

    if (typeof (trendChartData) != "undefined") {

      di_jq.each(trendChartData, function (year, value) {

        category.push(value.TmPeriod.TimePeriod);

        jsonObj.push(parseFloat(value.Data.Data_Value));


      })
// !animation set for comparision chart
      chart1 = new Highcharts.Chart({
        chart: {
          animation: {duration: 500, easing: 'linear'},
          renderTo: 'comp_chrt_cntnt',
          type: 'column'
        },
        exporting: {
          buttons: {
            exportButton: {
              symbol: 'url(' + site_url + 'img/export.png)',
              symbolSize: 10,
              width: 14,
              height: 15,
              symbolX: 0,
              symbolY: 0
            },
            printButton: {
              symbol: 'url(' + site_url + 'img/print.png)',
              symbolSize: 10,
              width: 14,
              height: 15,
              symbolX: 0,
              symbolY: 0

            },
            contextButton: {
              enabled: false
            },
            fullscreenBtn: {
              symbol: 'square',
              _titleKey: 'FullScreenButtonTitle',
              x: -60,
              symbol:  'url(' + site_url + 'img/fullscreen.png)',
                symbolY: 0,
              symbolX: 0,
              symbolSize: 10,
              width: 14,
              height: 14,
              onclick: function () {
                TrendFullscreen();
              }
            },
            tableBtn: {
              symbol: 'square',
              _titleKey: 'ShowTableTitle',
              x: -85,
              symbol:  'url(' + site_url + 'img/table.png)',
                symbolY: 0,
              symbolX: 0,
              symbolSize: 10,
              width: 14,
              height: 14,
              onclick: function () {
                showTrendTable();
              }
            },
            sortBtn: {
              symbol: 'square',
              _titleKey: 'SortingTitle',
              x: -110,
              symbol:  'url(' + site_url + 'img/sort.png)',
                symbolY: 0,
              symbolX: 0,
              symbolSize: 10,
              width: 14,
              height: 14,
              onclick: function () {
                PerformSorting();
              }
            }


          }
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: category,
          gridLineWidth: 0,
          //gridLineColor:'#ffffff',
          //minorGridLineWidth:0,
          tickWidth: 1,
          tickInterval: 10,
          labels: {
            enabled: true
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population size - standard (Millions)'
          }
        },
        legend: {
          enabled: false,
          layout: 'vertical',
          backgroundColor: '#FFFFFF',
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
          shadow: true
        },
        tooltip: {
          formatter: function () {
            return '<b>' + area_name + '</b><br>' +
              this.x + ': ' + Highcharts.numberFormat(this.y, 2) + ' millions';
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            shadow: false
          }
        },
        series: [{
            name: window.Area_Name,
            data: jsonObj

          }]
      });
    }

  }

  function drawComparisionChartFullscreen() {

    var areanid = di_jq("#hd_area_id").val();
    var area_name = di_jq("#hd_area_name").val();

    category = [];
    jsonObj = [];
    if (typeof (trendChartData) != "undefined") {

      di_jq.each(trendChartData, function (year, value) {

        category.push(value.TmPeriod.TimePeriod);

        jsonObj.push(parseFloat(value.Data.Data_Value));


      })
// !animation set for comparision chart
      chart1 = new Highcharts.Chart({
        chart: {
          animation: {duration: 500, easing: 'linear'},
          renderTo: 'comp_chrt_cntnt_fullscreen',
          type: 'column',
          marginTop: 30
        },
        exporting: {
          buttons: {
            exportButton: {
              enabled: false,
              symbol: 'url(' + site_url + 'img/export.png)',
              symbolSize: 12,
              width: 17,
              height: 15,
              symbolX: 1,
              symbolY: 0
            },
            printButton: {
              enabled: false,
              symbol: 'url(' + site_url + 'img/print.png)',
              symbolSize: 12,
              width: 17,
              height: 15,
              symbolX: 1,
              symbolY: 0

            },
            contextButton: {
              enabled: false
            },
            printButtonCustom: {
              _titleKey: 'printButtonTitle',
              symbol: 'url(' + site_url + 'img/print.png)',
              symbolSize: 12,
              width: 14,
              height: 14,
              symbolX: 0,
              symbolY: 0,
              x: -30,
              onclick: function () {
                printTrendFullscreen();
              }
            },
            fullscreenBtn: {
              symbol: 'square',
              _titleKey: 'ExitFullScreenTitle',
              x: -60,
              symbol:  'url(' + site_url + 'img/fullscreen.png)',
                symbolY: 0,
              symbolX: 0,
              symbolSize: 12,
              width: 14,
              height: 14,
              onclick: function () {
                closeTrendFullscreen()
              }
            }



          }
        },
        title: {
          text: '<b>' + area_name + '</b> - Population Projection Trend',
          x: -20, //center
          y: 0, //center
          style: {
            fontSize: '12px'
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: category,
          gridLineWidth: 0,
          //gridLineColor:'#ffffff',
          //minorGridLineWidth:0,
          tickWidth: 0,
          labels: {
            enabled: false
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population size - standard (Millions)'
          }
        },
        legend: {
          enabled: false,
          layout: 'vertical',
          backgroundColor: '#FFFFFF',
          align: 'left',
          verticalAlign: 'top',
          x: 100,
          y: 70,
          floating: true,
          shadow: true
        },
        tooltip: {
          formatter: function () {
            return '<b>' + area_name + '</b><br>' +
              this.x + ': ' + Highcharts.numberFormat(this.y, 2) + ' millions';
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
            name: window.Area_Name,
            data: jsonObj

          }]
      });
    }

  }

  function drawEstimationProjectionChart(data_array, type, area_nid) {


    var html_string = '';

    var html_Heading_str = '<tr class="fnt_bld odd">';
    html_Heading_str += '<td class="emty tblHeading">&nbsp;</td>';
    html_Heading_str += '<td  class="rd_fst_clm tblHeading">Year</td>';
    html_Heading_str += '<td  class="tb_est_proj tblHeading" style="text-align:left">Value</td>';
    html_Heading_str += '</tr>';
    html_string += html_Heading_str;
    di_jq.each(data_array, function (i, value) {

      var cssClass = "";

      if (i % 2 != 0) {
        cssClass = "odd";
      }





      html_string += '<tr class="' + cssClass + '">';
      html_string += '<td class="tblText">&nbsp;</td>';
      html_string += '<td class="tb_est_proj tblText" style="width:54%;text-align:left;height:30px">' + value.TmPeriod.TimePeriod + ' </td>';
      html_string += '<td style="width:45%" class="tblText">' + value.Data.Data_Value;
      +'</td>';
      html_string += '</tr>';



    })


    di_jq("#" + type).html(html_string);
    di_jq("#trendChart_tbl").html(html_string);

  }

  function drawNumberTable(linedata3) {
//console.log(linedata3+'linear-data');
    /*
     var html_string = '';
     if(typeof(linedata3.year)!="undefined"){

     html_string += '<div class="boxFirst box box0">';
     html_string += '<div class="boxValue">'+linedata3.year+'</div>';
     html_string += '<div class="boxInd">Year</div>';
     html_string += '</div>';

     }else{
     html_string += '<div class="boxFirst box box0">';
     html_string += '<div class="boxValue">-</div>';
     html_string += '<div class="boxInd">Year</div>';
     html_string += '</div>';


     }

     if(typeof(linedata3.series)!="undefined"){

     var counter=1;
     di_jq.each(linedata3.series, function(i, value) {





     html_string += '<div class="boxFirst box box'+counter+'">';
     html_string += ' <div class="boxValue">'+value+'</div>';
     html_string += '<div class="boxInd">'+i+'</div>';
     html_string += '</div>';
     counter++;
     })
     }else{

     html_string += '<div class="boxFirst box box1">';
     html_string += '<div class="boxValue">-</div>';
     html_string += '<div class="boxInd">Total fertility rate</div>';
     html_string += '</div>';

     html_string += '<div class="boxFirst box box2">';
     html_string += '<div class="boxValue">-</div>';
     html_string += '<div class="boxInd">Wanted total fertility rate</div>';
     html_string += '</div>';




     }

     html_string += '<div class="boxFirst box" style="width:8.1%">';
     html_string += '<div class="middle_border"> </div>';
     html_string += ' </div>';

     di_jq.each(lineChartData.series, function(i, value) {

     if(value.name=="Standard"){





     html_string += '<div class="boxFirst box box3">';
     html_string += '<div class="boxValue">'+value.data[0]+' </div>';
     html_string += '<div class="boxInd">1950</div>';
     html_string += '</div>';

     html_string += '<div class="boxFirst box box4">';
     html_string += ' <div class="boxValue">'+value.data[1]+' </div>';
     html_string += '<div class="boxInd">2010</div>';
     html_string += '</div>';

     html_string += '<div class="boxFirst box box5">';
     html_string += ' <div class="boxValue">'+value.data[3]+' </div>';
     html_string += '  <div class="boxInd">2050</div>';
     html_string += '</div>';

     html_string += '<div class="boxFirst box box6">';
     html_string += ' <div class="boxValue">'+value.data[4]+' </div>';
     html_string += '  <div class="boxInd">2100</div>';
     html_string += '</div>';

     }

     })


     html_string += '<div class="flt_lft topBoxDiv_title">DHS Estimates (births per woman)</div>';


     html_string += '<div class="flt_lft topBoxDiv_title" style="color:#777777">UN Estimates and Projections (millions)</div>';
     html_string += '  <div class="clear"></div>';
     */
    //console.log(linedata3);
    var DHSYear = linedata3.year;
    if (typeof (DHSYear) == "undefined")
      DHSYear = '-';
    var serval = [];
    if (typeof (linedata3.series) != "undefined") { // if value exists
      di_jq.each(linedata3.series, function (i, value) {
        serval[i] = roundNumber(value, 1);
      });
    } else {
      serval['Total fertility rate (TFR)'] = serval['Total wanted fertility rate'] = '-';
    }
    //console.log(serval+'--serval');
    var html_string = '';
    // var servalTotalwantedfertilityrate=	(serval['Total wanted fertility rate']=='undefined')?serval['Total wanted fertility rate']:'';
    // var servalTotalfertilityrate=	(serval['Total fertility rate (TFR)']=='undefined')?serval['Total fertility rate (TFR)']:'';

    html_string += '<div class="table-left-outer"><table cellpadding="0" cellspacing="0" border="0" class="table left">\
	<thead><tr><th colspan="2" class=""  align="left">DHS Estimates</th></tr><tr><tbody><tr><td><span>Survey year</span> <br>' + DHSYear + '</td><td><span>Total Fertility Rate</span> <br>' + serval['Total fertility rate (TFR)'] + '</td></tr><tr><td><span>Survey year</span> <br>' + DHSYear + '</td><td><span>Wanted Total Fertility Rate</span> <br>' + serval['Total wanted fertility rate'] + '</td></tr></tbody>';

    html_string += '</table></div>';


    html_string += '<div class="table-right-outer"><table class="table right" cellpadding="0" cellspacing="0" ><thead><tr><th colspan="11" class=""   align="left">United Nations Estimates and Projections, Medium-fertility Variant, 1950-2050</th></thead><tbody>';
    //console.log(lineChartData.seriestbl+'---------lineChartData.seriestbl');
    di_jq.each(lineChartData.seriestbl, function (i, value) {
      if (value.name == "Standard") {
        html_string += '<tr>';
        html_string += '<td colspan="11" align="center"><span>Population(million)</span></td>';
        html_string += '</tr>';
        html_string += '<tr><td><span>1950</span> <br>' + roundNumber(value.data["1950"], 1) + '</td><td><span>1960</span> <br>' + roundNumber(value.data["1960"], 1) + '</td><td><span>1970</span> <br>' + roundNumber(value.data["1970"], 1) + '</td><td><span>1980</span> <br>' + roundNumber(value.data["1980"], 1) + '</td><td><span>1990</span> <br>' + roundNumber(value.data["1990"], 1) + '</td><td><span>2000</span> <br>' + roundNumber(value.data["2000"], 1) + '</td><td><span>2010</span> <br>' + roundNumber(value.data["2010"], 1) + '</td><td><span>2020</span> <br>' + roundNumber(value.data["2020"], 1) + '</td><td><span>2030</span> <br>' + roundNumber(value.data["2030"], 1) + '</td><td><span>2040</span><br>' + roundNumber(value.data["2040"], 1) + '</td><td><span>2050</span> <br>' + roundNumber(value.data["2050"], 1) + '</td></tr>';
      }
    });



    html_string += '<tr><td colspan="11" align="center"><span>Total Fertility (children per woman)</span></td></tr>';

    di_jq.each(lineChartData.seriestbl, function (i, value) {
      //console.log(value.name+'---name-bba-');
      if (value.name == "Total fertility rate (standard") {

        html_string += '<tr><td><span>1950-<br>1955</span> <br>' + roundNumber(value.data['1950-1955'], 1) + '</td><td><span>1960-<br>1965</span> <br>' + roundNumber(value.data['1960-1965'], 1) + '</td><td><span>1970-<br>1975</span> <br>' + roundNumber(value.data['1970-1975'], 1) + '</td><td><span>1980-<br>1985</span> <br>' + roundNumber(value.data['1980-1985'], 1) + '</td><td><span>1990-<br>1995</span> <br>' + roundNumber(value.data['1990-1995'], 1) + '</td><td><span>2000-<br>2005</span> <br>' + roundNumber(value.data['2000-2005'], 1) + '</td><td><span>2010-<br>2015</span> <br>' + roundNumber(value.data['2010-2015'], 1) + '</td><td><span>2020-<br>2025</span> <br>' + roundNumber(value.data['2020-2025'], 1) + '</td><td><span>2030-<br>2035</span> <br>' + roundNumber(value.data['2030-2035'], 1) + '</td><td><span>2040-<br>2045</span> <br>' + roundNumber(value.data['2040-2045'], 1) + '</td><td>-</td></tr>';

        html_string += '<tr><td><span>1955-<br>1960</span> <br>' + roundNumber(value.data['1955-1960'], 1) + '</td><td><span>1965-<br>1970</span> <br>' + roundNumber(value.data['1965-1970'], 1) + '</td><td><span>1975-<br>1980</span> <br>' + roundNumber(value.data['1975-1980'], 1) + '</td><td><span>1985-<br>1990</span> <br>' + roundNumber(value.data['1985-1990'], 1) + '</td><td><span>1995-<br>2000</span> <br>' + roundNumber(value.data['1995-2000'], 1) + '</td><td><span>2005-<br>2010</span> <br>' + roundNumber(value.data['2005-2010'], 1) + '</td><td><span>2015-<br>2020</span> <br>' + roundNumber(value.data['2015-2020'], 1) + '</td><td><span>2025-<br>2030</span> <br>' + roundNumber(value.data['2025-2030'], 1) + '</td><td><span>2035-<br>2040</span> <br>' + roundNumber(value.data['2035-2040'], 1) + '</td><td><span>2045-<br>2050</span> <br>' + roundNumber(value.data['2035-2040'], 1) + '</td><td>-</td></tr>';
      }

    });
    html_string += '</table></div>';//</td></tr> Remove it from here unnesseary
    //html_string += '</div>';

    di_jq("#topBoxDiv").html(html_string);

  }

  function lineFullScreen() {
//console.log(lineChartData);
    di_jq('body').css({overflow: 'hidden'});
//	loadLineChartFullscreen(lineChartData,"linefullscreen");
    $.blockUI({
      message: di_jq('#linefullscreen_container'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      onblock: function () {
        di_jq('#linefullscreen_container').show();
      },
      onUnblock: function () {
        di_jq('#linefullscreen_container').hide();
      }
    });

    //di_jq('.blockOverlay').attr('title','Click to unblock').click(di_jq.unblockUI);


  }

  function line2FullScreen() {

    di_jq('body').css({overflow: 'hidden'});
    //loadLineChartFullscreen(lineChartData1,"linefullscreen1");
    $.blockUI({
      message: di_jq('#linefullscreen_container1'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      onblock: function () {
        di_jq('#linefullscreen_container1').show();
        di_jq('body').css({overflow: hidden});
      },
      onUnblock: function () {
        di_jq('#linefullscreen_container1').hide();
      }
    });
  }


  function closeLineFullscreen() {

    di_jq('#linefullscreen_container').hide();
    //di_jq('#linefullscreen').hide();
    di_jq('body').css({overflow: 'auto'});
    $.unblockUI();
  }

  function barFullScreen() {

    loadBarChartFullScreen(barChartData, "barfullscreen");
    di_jq('body').css({overflow: 'hidden'});
    $.blockUI({
      message: di_jq('#barfullscreen_container'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'},
      onblock: function () {
        di_jq('#barfullscreen_container').show()
        di_jq('body').css({overflow: hidden});
      },
      onUnblock: function () {
        di_jq('#barfullscreen_container').hide();
      }
    });
  }

  function closeBarFullscreen() {
    di_jq('#barfullscreen_container').hide();
    di_jq('body').css({overflow: 'auto'});
    $.unblockUI();

  }


  function bar2FullScreen() {

    loadBar2ChartFullScreen(barChartData2, "bar2fullscreen");
    di_jq('body').css({overflow: 'hidden'});
    $.blockUI({
      message: di_jq('#bar2fullscreen_container'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'},
      onblock: function () {
        di_jq('#bar2fullscreen_container').show()
      },
      onUnblock: function () {
        di_jq('#bar2fullscreen_container').hide();
      }
    });
  }

  function closeBar2Fullscreen() {
    di_jq('#bar2fullscreen_container').hide();
    di_jq('body').css({overflow: 'auto'});
    $.unblockUI();

  }

  function TrendFullscreen() {

    drawComparisionChartFullscreen();
    $.blockUI({
      message: di_jq('#comp_chrt_cntnt_fullscreen_container'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      onblock: function () {
        di_jq('#comp_chrt_cntnt_fullscreen_container').show();
      },
      onUnblock: function () {
        di_jq('#comp_chrt_cntnt_fullscreen_container').hide();
      }
    });

  }

  function closeTrendFullscreen() {

    di_jq('#comp_chrt_cntnt_fullscreen_container').hide();
    $.unblockUI();

  }

  function ScatterPlotFullscreen() {

    $.blockUI({
      message: di_jq('#sctr_plot_cntnt_fullscreen_container'),
      css: {top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      onblock: function () {
        di_jq('#sctr_plot_cntnt_fullscreen_container').show();
      },
      onUnblock: function () {
        di_jq('#sctr_plot_cntnt_fullscreen_container').hide();
      }
    });

  }

  function CloseScatterPlotFullscreen() {

    di_jq('#sctr_plot_cntnt_fullscreen_container').hide();
    $.unblockUI();
  }

  function showLineTable() {

    var paneheight = di_jq("#Figure").height();
    paneheight = paneheight - 28;

    di_jq('#linetable').css('height', paneheight + 'px');
    di_jq('#table1').css('height', paneheight + 'px');

    if (di_jq("#linetable").is(":visible")) {

      di_jq('#linetable').hide('slide', {direction: 'right'});
    } else {

      di_jq('#linetable').show("slide", {direction: "right"}, 500);
    }


  }

  function showTrendTable() {
    var paneheight = di_jq("#comp_chrt_cntnt").height();
    paneheight = paneheight - 30;

    di_jq('#comp_chrt_cntnt_tbl').css('height', paneheight + 'px');
    di_jq('#comp_chrt_cntnt_tbl').css('width', '100%');

    if (di_jq("#comp_chrt_cntnt_tbl").is(":visible")) {

      di_jq('#comp_chrt_cntnt_tbl').hide('slide', {direction: 'right'});
    } else {

      di_jq('#comp_chrt_cntnt_tbl').show("slide", {direction: "right"}, 500);
    }


  }

  function showBarTable() {

    var paneheight = di_jq("#Bar_chart").height();
    var panelWidth = di_jq('#Bar_chart').width();
    paneheight = paneheight - 32;
    panelWidth = panelWidth - 10;

    di_jq('#bartable').css('height', paneheight + 'px');
    di_jq('#table2').css('height', paneheight + 'px');

    di_jq('#bartable').css('width', panelWidth + 'px');
    di_jq('#table2').css('width', panelWidth + 'px');



    //di_jq('#table2').css('width', panelWidth+'px');

    if (di_jq("#bartable").is(":visible")) {

      di_jq('#bartable').hide('slide', {direction: 'right'});
    } else {

      di_jq('#bartable').show("slide", {direction: "right"}, 500);
    }


  }

  function showBar2Table() {

    var paneheight = di_jq("#Bar_chart2").height();
    var panelWidth = di_jq('#Bar_chart2').width();
    paneheight = paneheight - 32;
    panelWidth = panelWidth - 10;

    di_jq('#bartable2').css('height', paneheight + 'px');
    di_jq('#table3').css('height', paneheight + 'px');

    di_jq('#bartable2').css('width', panelWidth + 'px');
    di_jq('#table3').css('width', panelWidth + 'px');



    //di_jq('#table2').css('width', panelWidth+'px');

    if (di_jq("#bartable2").is(":visible")) {

      di_jq('#bartable2').hide('slide', {direction: 'right'});
    } else {

      di_jq('#bartable2').show("slide", {direction: "right"}, 500);
    }


  }

// !sorting

  function PerformSorting() {

    category = category.reverse();
    jsonObj = jsonObj.reverse();


    chart1.xAxis[0].setCategories(category);

    chart1.series[0].setData(jsonObj);
  }

// function to show loader gif
  function showLoader(id) {
    //  $('#'+id).mask('&nbsp;');
  }

// function to remove loader gif
  function hideLoader(id) {
    //   $('#'+id).unmask();
  }

  /* print section */
  function PrintElem(elem, title)
  {
    var divWidth = di_jq(elem).width();
    var divHeight = di_jq(elem).height();
    // Popup(di_jq(elem).text());
    Popup(di_jq(elem).html(), divWidth, divHeight, title);
  }

// pop up print window with the desire div content
// adding css and width height of data.
  function Popup(data, width, height, title)
  {
    var mywindow = window.open('', 'print_chart_div', 'height=' + parseInt(height + 50) + ',width=' + parseInt(width + 50) + '');
    mywindow.document.write('<html><head><title>' + title + '</title>');
    /*optional stylesheet*/
    mywindow.document.write('<link href="' + site_url + '/app/webroot/css/main.css" media="print" type="text/css" rel="stylesheet">');
    mywindow.document.write('<style>body {width:95%;margin:0 auto; padding:0; background:#ffffff;font:10px "Lucida Sans Unicode","Lucida Grande",Arial; display:block;} .print_icon{display:none !important} .print_block{display:block !important} .headn {    color: #010101 !important;    font-size: 24px;    font-weight: bold;} .txt_align_rt{	text-align:right;} .txt_align_cen{ text-align:center;} .tblNumber{padding-right: 5px;	text-align: right;	font-weight: normal;	background-color:#FFFFFF;font-size:12px}.tblText{	padding-left: 5px;	text-align: left;	font-weight:normal;background-color:#FFFFFF;font-size:12px} .tblHeading { background-color: #FFFFFF;color: #000000;font-size: 11px;font-weight: bold;padding-left: 5px;text-align: left;    word-wrap: break-word;    background-color: #7F7F7F;    color: #FFFFFF;    height: 30px;    vertical-align: middle !important;    font-size: 11px; padding-right: 5px;} .comp_chrt_cntnt_fullscreen_container2 {height:4000px !important} </style>');
    mywindow.document.write('</head><body><div style="width:' + width + 'px;height:' + height + 'px">');
    mywindow.document.write(data);
    mywindow.document.write('</div></body></html>');

    // show print window and close the window after print
    mywindow.print();
    mywindow.close();

    return true;

  }

  function printLineFullscreen() {

    PrintElem("#linefullscreen_container", "MDG5B UNFPA");

  }

  function printBarFullscreen() {

    PrintElem("#barfullscreen_container", "MDG5B UNFPA");

  }

  function printBar2Fullscreen() {

    PrintElem("#bar2fullscreen_container", "MDG5B UNFPA");

  }

  function printTrendFullscreen() {

    PrintElem("#comp_chrt_cntnt_fullscreen_container", "MDG5B UNFPA");

  }


  function exportSvgToPng(svg, forrep, eleid) {

    var postData = 'svgString=' + svg + '&areanid=' + window.area_nid + '&forrep=' + forrep;

    $.ajax({
      url: base_url + 'home/exportSvgToPng',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function (data) {
        $('#' + eleid).hide();

      }

    });



  }

  $(function () {

    // on Chart Full Screen Highchart Zoom click event
    $('a.ful_view_icn').live('click', function () {
      if ($(this).attr('id') == "Figure_ful_view")
        lineFullScreen();
      if ($(this).attr('id') == "Bar_chart_ful_view")
        barFullScreen();
      if ($(this).attr('id') == "Figure1_ful_view")
        line2FullScreen();
      if ($(this).attr('id') == "Bar_chart2_ful_view")
        bar2FullScreen();
      return false;
    });

    // Print a line chart on
    $('a#Figure_prnt_icn').live('click', function () {
      lineChart.setTitle({text: $("#countrySelected").attr('title') + "<br/>" + $('#Figure_caption').val(), style: {fontSize: '10px'}, useHTML: true});
      //lineChart.plotOptions.legend.title = '';
      lineChart.print();
      lineChart.setTitle({text: ''});
      return false;
    });

    // Print a bar chart 1 on
    $('a#Bar_chart_prnt_icn').live('click', function () {
      barChart1.setTitle({text: $("#countrySelected").attr('title') + "<br/>" + $('#Bar_chart_caption').val(), style: {fontSize: '10px'}, useHTML: true});
      barChart1.print();
      barChart1.setTitle({text: ''});
      return false;
    });

    // Print a line chart on
    $('a#Figure1_prnt_icn').live('click', function () {
      lineChart1.setTitle({text: $("#countrySelected").attr('title') + "<br/>" + $('#Figure1_caption').val(), style: {fontSize: '10px'}, useHTML: true});
      lineChart1.print();
      lineChart1.setTitle({text: ''});
      return false;
    });

    // Print a bar chart 2 on
    $('a#Bar_chart2_prnt_icn').live('click', function () {
      barChart2.setTitle({text: $("#countrySelected").attr('title') + "<br/>" + $('#Bar_chart2_caption').val(), style: {fontSize: '10px'}, useHTML: true});
      barChart2.print();
      barChart2.setTitle({text: ''});
      return false;
    });

    // Exoport Graph Link
    di_jq('a.dwnld_icn').bind('mouseover', function (e) {
      e.stopPropagation();
      di_jq(this).find('div.smlBox').show();

    }).live('mouseleave', function (e) {

      di_jq(this).find('div.smlBox').hide();
      e.stopPropagation();
    })


    // Export PDF
    di_jq('a.dwnld_icn').live('click', function () {
      //alert("outer");
      return false;
    });

    //Export  Chart PNG,JPEG, PDF
    di_jq('a.dwnld_icn').find('a.export').live('click', function () {
      //alert("inner");
      var type = di_jq(this).attr('type');
      var grph = di_jq(this).attr('rel');
      var caption = di_jq(this).attr('cap');
      caption = di_jq("#" + caption).val();
      var fName = di_jq("#countrySelected").html() + "_" + caption.replace('', '_');
      var title = di_jq("#countrySelected").attr('title') + "<br/>" + caption;

      var graphObj = window[grph];

      var fileType = 'application/pdf';

      if (type == 'jpeg')
        fileType = 'image/jpeg';
      else if (type == 'png')
        fileType = 'image/png';


      //graphObj.exportChart();
//		graphObj.marginTop = '100px';
      graphObj.exportChart({type: fileType, filename: fName}, {title: {margin: 150, text: title, style: {fontSize: '10px'}, useHTML: true}, subtitle: {text: ''}, legend: {title: ''}});
      return false;
    });


    $(document).ready(function () {
      equalHeight($(".column"));
    });
  });

// Set up Equal Height of Columns
  function equalHeight(group) {
    tallest = 0;
    group.each(function () {
      thisHeight = $(this).height();
      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  }
})(jQuery);
