/*
 * @Fullscreen javascript plugin librray file.
 * @Created by DFA
 * @Date 16/04/2014
 */

/*
 * Class function to full screen
 */
function dfa_fullscreen() {

  // initialize class variables
  this.objType = '';
  this.fullScreenContDivID = 'dfapi-fs-outer-container';
  this.actBoxContDivCls = 'dfapi-action-box';
  this.shareBoxContDivCls = 'dfapi-share-box';
  this.chartType = 'chart';
  this.mapType = 'map';
  this.visTblDvId = 'visTblDvId';
  this.obj = '';
  this.mapD3Obj = '';
  this.containerParentDivIDObj = '';
  this.fullScreenContDivIDObj = '';
  this.objSettings = '';
  this.categories = '';
  tableScreenFlg = false;
  this.containerWidth = '';
  this.containerHeight = '';
  this.titleProperties = {};
  this.subTitleProperties = {};
  this.legendOldSettings = {};
  this.legendProperties = {};
  this.objShareOptions = {'enabled': false, 'url': ''};
  this.viewTblDfltFlg = false;


  /**
   * this function is used to show full screen of selected visulization
   *
   * @param {String} objType The string to indicate the type of visualization object
   * @param {Object} obj The object of the visualization
   * @param {Object} containerParentDiv The DOM element id that contain element id of parent elem of visualization div
   * @param {Object} objSettings New/additional setting of the object to be applied
   * @param {Object} objShareOptions The share option of the object
   */
  this.show = function (objType, obj, containerParentDivID, objSettings, objShareOptions, viewTblDfltFlg) {

    var chartID = containerParentDivID.replace('graph', '');

    if (chartID == 'CO2') {
      jQuery('#graph' + chartID).find('span:eq(0)').css("left", "1065px");
      jQuery('#graph' + chartID).find('span:eq(1)').css("left", "1065px");
      jQuery('#graph' + chartID).find('span:eq(2)').css("left", "1065px");
      jQuery('#graph' + chartID).find('span:eq(1)').css("top", "169px");
      jQuery('#graph' + chartID).find('span:eq(2)').css("top", "334px");
    }

    // add new full screen div around passed visulization container parent div
    clearfixclass = "clearfix";
    jQuery('#' + containerParentDivID).wrap("<div id='" + this.fullScreenContDivID + "' class='" + this.fullScreenContDivID + ' ' + clearfixclass + "'></div>");
    jQuery('.' + this.fullScreenContDivID).wrap("<div></div>");
    this.fullScreenContDivIDObj = jQuery('#' + this.fullScreenContDivID);
    this.containerParentDivIDObj = jQuery('#' + containerParentDivID);
    this.objType = objType;
    this.obj = obj;
    this.objSettings = objSettings;
    this.objShareOptions = objShareOptions;

    // if default view of table is on
    if (viewTblDfltFlg)
      this.viewTblDfltFlg = viewTblDfltFlg;

    //if selected object type is chart
    if (this.objType == this.chartType)
    {
      //call function to show chart in full screen
      showChart(obj, objSettings);
      //this.showChart();
    }
    //if selected object type is map
    else if (this.objType == this.mapType)
    {
      //call function to show chart in full screen
      this.showMap();
    }
  };

  /**
   * function to show chart in full screen
   */
  this.showMap = function () {


    //Set variables to use later for undo of full screen
    mapContDvID = this.obj.renderTo['id'];
    var mapContDvIdObj = jQuery('#' + mapContDvID);
    this.mapD3Obj = this.obj.renderTo['id'];

    //Getting visualization container width
    this.containerWidth = mapContDvIdObj.width();

    //Getting visualization container height
    this.containerHeight = mapContDvIdObj.height();

    //Getting chart title properties
    if (this.objSettings.title)
      this.titleProperties = this.objSettings.title;

    //Getting chart subtitle properties

    if (this.objSettings.subtitle)
      this.subTitleProperties = this.objSettings.subtitle;

    //Getting chart parent container width and height to use later for undo of full screen
    var containerParentDivWidth = this.fullScreenContDivIDObj.width();
    var containerParentDivHeight = this.fullScreenContDivIDObj.height();

    /*
     * jQuery Blocking function to masking/unmasking screen when on/off fullscreen
     */
    jQuery.blockUI({
      //Container Parent div object
      message: dfa_fullscreen.fullScreenContDivIDObj,
      //Deafult css to be used for masking
      css: {
        top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      //When page is blocked to show full screen
      onBlock: function () {


        // call function to add map title and sub title
        dfa_fullscreen.addMapTtlSubTtl();

        //Call function to add export options
        dfa_fullscreen.addExportOptions();

        // adjust map object width and height
        if (!dfa_fullscreen.viewTblDfltFlg)				//if by default table view is not on
          jQuery('#' + dfa_fullscreen.obj.getMapContainerDivId() + ' svg').animate({'width': dfa_fullscreen.fullScreenContDivIDObj.width(), 'height': dfa_fullscreen.fullScreenContDivIDObj.height()});

        //Call function to add share options
        if (dfa_fullscreen.objShareOptions.enabled)
          dfa_fullscreen.addShareOptions();

        //Call function to view chart data in table format
        if (dfa_fullscreen.viewTblDfltFlg)					//if by default table view is on
          dfa_fullscreen.viewTable();

        return false;

      },
      // when page is unblocked to hide full screen
      onUnblock: function () {
        debugger;

        console.log(dfa_fullscreen.obj);
        //Set container parent div old width and height
        dfa_fullscreen.fullScreenContDivIDObj.width(containerParentDivWidth).height(containerParentDivHeight);

        //Set visualization old size
        dfa_fullscreen.obj.setSize(dfa_fullscreen.containerWidth, dfa_fullscreen.containerHeight, true);

        // call function to remove map title and sub title
        dfa_fullscreen.removeMapTtlSubTtl();

        //unwrap newly added full screen container div
        dfa_fullscreen.fullScreenContDivIDObj.unwrap();
        dfa_fullscreen.containerParentDivIDObj.unwrap();

        return false;
      }
    });
  }


  /**
   * function to add map title and sub titlein FS HTML
   */
  this.addMapTtlSubTtl = function ()
  {
    mapTtlStr = mapSubTtlStr = '';

    // if map title found then show with map
    if (this.titleProperties.text)
    {
      var ttlstl = '';
      // if map subtitle style found
      if (this.titleProperties.style)
      {
        jQuery.each(this.titleProperties.style, function (stlKey, stlVal) {
          ttlstl += stlKey + ':' + stlVal + ';';
        });
      }
      // if map subtitle style not found
      else {
        ttlstl = 'font-size:18px;font-family:Verdana;fill:gray;color:gray;';
      }

      mapTtlStr = '<div style="' + ttlstl + '">' + dfa_fullscreen.titleProperties.text + '</div>'
    }

    // if map subtitle found then show with map
    /*if(this.subTitleProperties.text)
     {
     var sbstl = '';
     // if map subtitle style found
     if(this.subTitleProperties.style)
     {
     jQuery.each(this.subTitleProperties.style, function( stlKey, stlVal ) {
     sbstl = sbstl+stlKey+':'+stlVal+';';
     });
     }
     // if map subtitle style not found
     else{
     sbstl = 'font-size:9px;font-family:Verdana;fill:gray;color:gray;';
     }
     mapSubTtlStr = '<div style="'+sbstl+'">'+dfa_fullscreen.subTitleProperties.text+'</div>';
     }*/

    // if map title or subtitle found
    if (mapTtlStr != '' || mapSubTtlStr != '')
    {
      this.fullScreenContDivIDObj.prepend('<div id="dfaos-fs-map-ttl-sbttl" class="dfaos-fs-map-ttl-sbttl">' + mapTtlStr + mapSubTtlStr + '</div>');
    }
  }


  /**
   * function to remove map title and sub title in FS HTML
   */
  this.removeMapTtlSubTtl = function ()
  {

    if (jQuery('#dfaos-fs-map-ttl-sbttl').length)
    {
      jQuery('#dfaos-fs-map-ttl-sbttl').remove();
    }
  }



  /**
   * function to show chart in full screen
   */
  this.showChart = function () {

    //Set variables to use later for undo of full screen

    //Getting visualization container width
    this.containerWidth = this.obj.chartWidth;
    //Getting visualization container height
    this.containerHeight = this.obj.chartHeight;
    //Getting chart title properties
    this.titleProperties = this.getChartTitleProperties('title', this.obj);
    //Getting chart subtitle properties
    this.subTitleProperties = this.getChartTitleProperties('subtitle', this.obj);

    //Getting chart original legend settings used to restore legend
    this.legendOldSettings = this.obj.legend;

    //Getting chart x-axis and y-axis properties
    var xAxisChartProperties = this.getChartAxisproperties(this.obj, 'xAxis', this.objSettings.xAxis);
    var yAxisChartProperties = this.getChartAxisproperties(this.obj, 'yAxis', this.objSettings.yAxis);

    //Getting chart data labels properties
    var dataLabelsProperties = this.getChartDataLblProperties(this.obj);

    //Getting chart parent container width and height to use later for undo of full screen
    var containerParentDivWidth = this.fullScreenContDivIDObj.width();
    var containerParentDivHeight = this.fullScreenContDivIDObj.height();

    /*
     * jQuery Blocking function to masking/unmasking screen when on/off fullscreen
     */
    jQuery.blockUI({
      //Container Parent div object
      message: dfa_fullscreen.fullScreenContDivIDObj,
      //Deafult css to be used for masking
      css: {
        top: '0%', left: '', right: '0px', width: '100%', height: '100%', cursor: 'auto'
      },
      //When page is blocked to show full screen
      onBlock: function () {
        var chartId = jQuery(this).children().children().attr('id').replace('graph', '');
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

        jQuery('#TblDtVw').css({'margin-top': '0px'});
        jQuery('#visTblDvId').css({'margin-top': '0px'});
        if (chartId == 'CO2')
        {
          jQuery('#CO2').css({'margin': '3px'});
          graphObj.setTitle({
            y: 0
          });
        }
        return false;

      },
      // when page is unblocked to hide full screen
      onUnblock: function () {
        jQuery('.icon_bg').css('display', 'block');
        var chart = dfa_fullscreen.containerParentDivIDObj.selector.replace('#graph', '');
        var graphObj = window[chart];
        graphObj.setTitle({
          text: ''
        });

        if (chart == 'CO2')
        {
          chartID = 'CO2';
          jQuery('#CO2').css({'margin-top': '90px'});
          jQuery('#graph' + chartID).find('span:eq(0)').css("left", "365px");
          jQuery('#graph' + chartID).find('span:eq(1)').css("left", "365px");
          jQuery('#graph' + chartID).find('span:eq(2)').css("left", "365px");
          jQuery('#graph' + chartID).find('span:eq(0)').css("top", "15px");
          jQuery('#graph' + chartID).find('span:eq(1)').css("top", "107px");
          jQuery('#graph' + chartID).find('span:eq(2)').css("top", "233px");

        }
        //console.log(chart);
        //var chart = jQuery("#"+chartID).highcharts();
        /*if(chartID=='CO1'||chartID=='CO2'||chartID=='CO5'){
         chart.legend.options.verticalAlign= 'top';
         chart.legend.render();
         }

         jQuery('#'+chartID).addClass('bdrcls');
         if(chartID=='CO2'){
         jQuery('#graph'+chartID).find('span:eq(0)').css("left","365px");
         jQuery('#graph'+chartID).find('span:eq(1)').css("left","365px");
         jQuery('#graph'+chartID).find('span:eq(2)').css("left","365px");
         jQuery('#graph'+chartID).find('span:eq(0)').css("top","15px");
         jQuery('#graph'+chartID).find('span:eq(1)').css("top","107px");
         jQuery('#graph'+chartID).find('span:eq(2)').css("top","233px");
         }
         if(chartID=='CO4'){
         jQuery('#graph'+chartID).find('span').css("left","52px");
         }
         if(chartID=='CO3'){
         jQuery('#graph'+chartID).find('span').css("left","35px");
         jQuery('#graph'+chartID).find('span').css("top","141px");
         }
         if(chartID=='CO8'){
         jQuery('#graph'+chartID).find('span:eq(0)').css("left","264px");
         jQuery('#graph'+chartID).find('span:eq(1)').css("left","138px");
         jQuery('#graph'+chartID).find('span:eq(2)').css("left","350px");
         jQuery('#graph'+chartID).find('span:eq(1)').css("top","86px");
         jQuery('#graph'+chartID).find('span:eq(1)').css("top","212px");
         jQuery('#graph'+chartID).find('span:eq(2)').css("top","212px");
         }
         chartDiv.find('div.BoxClose').hide();
         chartDiv.find('div.top_rnded_crnrs3').show();

         graphObj.setSize(cwidth,cheight,false);
         return false;*/

        if (typeof dfa_fullscreen.obj.userOptions != 'undefined') {
          // call function to remove map title and sub title
          dfa_fullscreen.removeMapTtlSubTtl();

          //Call function to restore chart previous settings
          dfa_fullscreen.restoreChartPreviousSettings(xAxisChartProperties, yAxisChartProperties, dataLabelsProperties);

          //Set container parent div old width and height
          dfa_fullscreen.fullScreenContDivIDObj.width(containerParentDivWidth).height(containerParentDivHeight);

          //Set visualization old size
          dfa_fullscreen.obj.setSize(dfa_fullscreen.containerWidth, dfa_fullscreen.containerHeight, true);
        } else {
          jQuery(window).resize();
        }

        //unwrap newly added full screen container div
        dfa_fullscreen.fullScreenContDivIDObj.unwrap();
        dfa_fullscreen.containerParentDivIDObj.unwrap();
        jQuery('.highcharts-subtitle').css({'display': 'none'});
        jQuery('#visTblDvId').css({'display': 'none'});
        return false;
      }
    });
  }

  /**
   * function to save new chart settings
   */
  this.saveChartNewSettings = function () {

    // function to set chart legend properties
    if (this.objSettings.legend)
      dfa_fullscreen.setChartLegendProperties(this.objSettings.legend, 'new_settings');

    //Set chart new title and subtitle passed in object objSettings
    if (this.objSettings.title || this.objSettings.subtitle)
      this.obj.setTitle(this.objSettings.title, this.objSettings.subtitle);

    //Set new x axis settings passed in object objSettings
    if (this.objSettings.xAxis != undefined)
    {
      // Start loop through each x axis of chart object
      for (xAxCnt = 0; xAxCnt < this.obj.options.xAxis.length; xAxCnt++)
      {
        // if selected index axis properties found in setting object
        if (this.objSettings.xAxis[xAxCnt] !== false)
          this.obj.xAxis[xAxCnt].update(this.objSettings.xAxis[xAxCnt]);
      }
    }

    //Set new y axis settings passed in object objSettings
    if (this.objSettings.yAxis != undefined)
    {
      // Start loop through each y axis of chart object
      for (yAxCnt = 0; yAxCnt < this.obj.options.yAxis.length; yAxCnt++)
      {
        // if selected index axis properties found in setting object
        if (this.objSettings.yAxis[yAxCnt] !== false)
          this.obj.yAxis[yAxCnt].update(this.objSettings.yAxis[yAxCnt]);
      }
    }

    //Set new data labels of chart series
    var series = dfa_fullscreen.obj.series;
    //Loop through each series of chart
    for (var i = 0; i < series.length; i++) {
      var opt = series[i].options;
      if (!opt.dataLabels.enabled)
      {
        opt.dataLabels = {
          enabled: true,
          useHTML: true,
          formatter: function () {
            return '<div class="dfapi-dt-lables">' + this.y + '</div>';
          }
        }
        //Call function to update series option
        dfa_fullscreen.obj.series[i].update(opt);
      }
    }
  }

  /**
   * function to restore chart previous settings
   */
  this.restoreChartPreviousSettings = function (xAxisChartProperties, yAxisChartProperties, dataLabelsProperties) {

    // function to restore chart legend old settings
    if (this.legendProperties)
      dfa_fullscreen.setChartLegendProperties(this.legendProperties, 'restore_old_settings');

    //Set visualization old title and subtitle
    //console.log(this);
    //this.titleProperties.style.fontWeight = 'normal';
    //this.subTitleProperties.style.fontWeight = 'normal';
    if (this.objSettings.subtitle || this.objSettings.subtitle)
      this.obj.setTitle(this.titleProperties, this.subTitleProperties);

    //Set old x axis settings
    if (this.objSettings.xAxis != undefined)
    {
      // Start loop through each x axis of chart object
      for (xAxCnt = 0; xAxCnt < this.obj.options.xAxis.length; xAxCnt++)
      {
        // if selected index axis properties found then reset its propertie back
        if (this.objSettings.xAxis[xAxCnt])
          this.obj.xAxis[xAxCnt].update(xAxisChartProperties[xAxCnt]);
      }
    }

    //Set old y axis settings
    if (this.objSettings.yAxis != undefined)
    {
      // Start loop through each y axis of chart object
      for (yAxCnt = 0; yAxCnt < this.obj.options.yAxis.length; yAxCnt++)
      {
        // if selected index axis properties found then reset its propertie back
        if (this.objSettings.yAxis[yAxCnt])
          this.obj.yAxis[yAxCnt].update(yAxisChartProperties[yAxCnt]);
      }
    }

    // Restore previous data label of chart series
    var series = dfa_fullscreen.obj.series;
    //Loop through each series of chart
    for (var i = 0; i < series.length; i++) {
      var opt = series[i].options;
      opt.dataLabels = dataLabelsProperties[i];
      //Call function to update series option
      dfa_fullscreen.obj.series[i].update(opt);
    }
  }

  /**
   * function to get chart title properties
   *
   * @param {String} titleType The title/subtitle of chart
   */
  this.getChartTitleProperties = function (titleType, obj) {
    var titlearray = [];

    if (obj[titleType])
    {
      jQuery.each(obj[titleType].alignOptions, function (key, value) {
        if (jQuery.trim(obj[titleType]) != '')
          titlearray[key] = obj[titleType].alignOptions[key];
        else
          titlearray[key] = '';
      });
    }
    return titlearray;
  };

  /**
   * function to set chart legend settings
   *
   * @param {Object} objLgndSettings The new legend setting of chart
   * @param {String} objLgndSetFlg The new/restore legend setting flag of chart
   */
  this.setChartLegendProperties = function (objLgndSettings, objLgndSetFlg)
  {
    var newLgndSeeting = {};
    newLgndSeeting = dfa_fullscreen.legendOldSettings.options;

    //loop for legend setting properties
    jQuery.each(objLgndSettings, function (key, value) {

      if (newLgndSeeting[key] !== undefined && jQuery.trim(newLgndSeeting[key]) != '' && objLgndSettings[key])
      {
        if (objLgndSetFlg == 'new_settings')
          dfa_fullscreen.legendProperties[key] = newLgndSeeting[key];
        newLgndSeeting[key] = objLgndSettings[key];
      } else {
        newLgndSeeting[key] = '';
      }
    });
    if (typeof dfa_fullscreen.obj.legend != 'undefined')
      dfa_fullscreen.obj.legend.options = newLgndSeeting;

    return false;
  };

  /**
   * function to get chart axis properties
   *
   * @param {Object} obj The object of chart
   * @param {String} settingType The x/y axis of chart
   * @param {Object} settingsAxis The x/y axis settting of chart
   */
  this.getChartAxisproperties = function (obj, settingType, settingsAxis) {
    var axisPrptArr = {};

    // Start loop through each axis of chart object
    for (axCnt = 0; axCnt < obj.options[settingType].length; axCnt++)
    {
      axisPrptArr[axCnt] = {};
      jQuery.each(obj[settingType][axCnt].options, function (key, value) {
        if (jQuery.trim(obj[settingType][axCnt].options) != '')
          axisPrptArr[axCnt][key] = obj[settingType][axCnt].options[key];
        else
          axisPrptArr[axCnt][key] = '';
      });
    }
    return axisPrptArr;
  };

  /**
   * function to get chart data labels properties
   *
   * @param {Object} obj The object of chart
   */
  this.getChartDataLblProperties = function (obj) {
    var labelsPrptArr = [];
    /*if(obj.options.plotOptions && obj.options.plotOptions.series && obj.options.plotOptions.series.dataLabels) {
     labelsPrptObj = obj.options.plotOptions.series.dataLabels;
     }*/
    var series = obj.series;
    //Loop through each series of chart
    for (var i = 0; i < series.length; i++) {
      var opt = series[i].options.dataLabels;
      labelsPrptArr[i] = opt;
    }
    return labelsPrptArr;
  };

  /**
   * function to get chart table height
   */
  this.getDtTblHeight = function () {
    //Return table height as 30% of full screen container div height
    return parseInt(this.fullScreenContDivIDObj.height() * 30 / 100);
  };

  /**
   * Function to append table with chart
   */
  this.viewTable = function ()
  {
    // if table view object exits to create table
    if (dfa_tableview !== undefined && dfa_tableview != '')
    {
      //If table screen flag already not set then show the table with chart
      //if (!this.tableScreenFlg)
      if (!tableScreenFlg)
      {
        //Get data table height
        winTblHght = this.getDtTblHeight();

        //Set table screen flag to true
        //this.tableScreenFlg = true;
        tableScreenFlg = true;
        //Call function to get chart data in tabular format
        calledSec = 'fullscreen';
        objTblSettings = {};
        chartTable = dfa_tableview.getDataTableContent(this.objType, this.obj, this.fullScreenContDivID, objTblSettings, calledSec);

        //if selected object type is chart
        if (this.objType == this.chartType || this.objType == this.mapType)
        {
          //Set size of chart to adjust its visualization accordingly
          this.obj.setSize(this.fullScreenContDivIDObj.width(), this.fullScreenContDivIDObj.height() - winTblHght, true);
        }
        //if selected object type is map
        /*else if(this.objType==this.mapType)
         {
         newContHgh = parseInt(this.fullScreenContDivIDObj.height()-winTblHght);
         jQuery('#'+this.obj.getMapContainerDivId()+' svg').animate({'width': this.fullScreenContDivIDObj.width(),'height': newContHgh});
         }*/

        //Append chart data table with chart container parent div
        this.fullScreenContDivIDObj.append(chartTable);

        // call function to enable sorting of table
        dfa_tableview.enableTableSorting(this.fullScreenContDivID);

        //Show chart table container div
        jQuery('#' + this.visTblDvId).height(winTblHght - 10).slideDown('slow');
      } else { //If table screen already set then hide existing

        //Set table screen flag to false
        //this.tableScreenFlg = false;
        tableScreenFlg = false;
        //Get chart table container div id
        chartTblHght = jQuery('#' + this.visTblDvId).height();
        //Chart container parent div height
        chartContHght = this.fullScreenContDivIDObj.height();

        //Hide and remove chart table container div
        jQuery('#' + this.visTblDvId).slideUp('slow').hide().remove();

        //if selected object type is chart
        if (this.objType == this.chartType || this.objType == this.mapType)
        {
          //Set size of chart to adjust its visualization accordingly
          this.obj.setSize(this.fullScreenContDivIDObj.width(), this.fullScreenContDivIDObj.height(), true);
        }
        //if selected object type is map
        /*else if(this.objType==this.mapType)
         {
         jQuery('#'+this.obj.getMapContainerDivId()+' svg').animate({'width': this.fullScreenContDivIDObj.width(), 'height': this.fullScreenContDivIDObj.height()});
         }*/
      }
    }
  };

  /**
   * function to add export options
   */
  this.addExportOptions = function () {

    //If export options not exists then append same with full screen container div
    if (this.fullScreenContDivIDObj.find('div.' + this.actBoxContDivCls).length == 0) {

      //if selected object type is chart
      if (this.objType == this.chartType)
      {
        dtLbl = '<a class="dfapi-icn-datalbl" href="javascript:void(\'0\');" title="Data Labels"></a>';
      }
      //if selected object type is map
      else if (this.objType == this.mapType)
      {
        dtLbl = '<a class="dfapi-icn-datalbl" href="javascript:void(\'0\');" title="Data Labels"></a>';
      }

      this.fullScreenContDivIDObj.prepend('<div class="' + this.actBoxContDivCls + '">' + dtLbl + '<a class="dfapi-icn-tbl" href="javascript:void(\'0\');" title="Table"></a><a class="dfapi-icn-dwnld" href="javascript:void(\'0\');"></a><a class="dfapi-icn-prnt" title="Print" href="javascript:void(\'0\');"></a><a class="dfapi-icn-cls" title="Close" href="javascript:void(\'0\');">Close</a></div>');

      var export_menu = '<div class="dfapi_contnr-dwnld dfapi-txt-algn-lft">\
			<a class="export" href="javascript:void(\'0\');" type="png">PNG </a><br>\
			<a class="export" href="javascript:void(\'0\');" type="jpeg">JPEG </a><br>\
			<a class="export" href="javascript:void(\'0\');" type="svg">SVG </a><br>\
			<a href="javascript:void(\'0\');" class="export" type="pdf">PDF </a></div>';

      this.fullScreenContDivIDObj.find('div.' + this.actBoxContDivCls).find('a.dfapi-icn-dwnld').append(export_menu);
    }
    //If export options already exists then just show them
    else {
      this.fullScreenContDivIDObj.find('div.' + this.actBoxContDivCls).show();
    }
  };

  /**
   * function to add share options
   */
  this.addShareOptions = function (divId) {
    if (this.fullScreenContDivIDObj.find('div.' + this.shareBoxContDivCls).length == 0) {
      this.fullScreenContDivIDObj.append('<div id="' + this.shareBoxContDivCls + '" class="' + this.shareBoxContDivCls + '"></div>');

      var shareDivID = this.shareBoxContDivCls;
      dfa_share.show(shareDivID, this.objShareOptions);
    } else {
      this.fullScreenContDivIDObj.find('div.' + this.shareBoxContDivCls).show();
    }
  };

//  /**
//   * function to close full screen
//   */
  this.closeFullScreen = function ()
  {
    debugger;
    this.tableScreenFlg = false;
    //Remove full screen realted divs
    if (jQuery("#") + this.visTblDvId.length)
      jQuery("#" + this.visTblDvId).remove();
    if (jQuery('div.' + this.shareBoxContDivCls).length)
      jQuery('div.' + this.shareBoxContDivCls).remove();
    if (jQuery('div.' + this.actBoxContDivCls).length)
      jQuery('div.' + this.actBoxContDivCls).remove();
    debugger;
    // Call unmasking
    //jQuery.unblockUI();
    jQuery.blockUI();

  }

}

var dfa_fullscreen = new dfa_fullscreen();	// create object of full screen
//
//jQuery(document).on('click', 'div.dfapi_hcnav_big', function () {
//
//  var hcmapobj = jQuery('#mapDiv').highcharts();
//
//  if (jQuery(this).hasClass('zoomin')) {
//    hcmapobj.mapZoom(0.5); // Zoom In
//  } else if (jQuery(this).hasClass('zoomout')) {
//    hcmapobj.mapZoom(2); // Zoom Out
//  } else if (jQuery(this).hasClass('fulextend')) {
//    hcmapobj.mapZoom(); // full extend
//  }
//});




/**
 * chart table view on full screen
 */
jQuery(document).on('click', 'a.dfapi-icn-tbl', function () {
  dfa_fullscreen.viewTable();
  return false;
});

/**
 * function to close full screen view when close icon pressed
 */
jQuery(document).on('click', 'a.dfapi-icn-cls', function () {
  debugger;
  // Hide scroll bar in full screen
  jQuery('html').css('overflow', 'auto');
  //Call function to close full screen
  //dfa_fullscreen.closeFullScreen();
  closeFullScreen();
//  debugger;
//
//  //jQuery('.dfapi_shareIconsContainer').css('visibility', 'visible');
  //window.location.reload();
  return false;
});

/**
 * function to execute when print button clicked on chart
 */
jQuery(document).on('click', 'a.dfapi-icn-prnt', function () {
  // if print visualization object exits to print
  if (dfa_printvisualization !== undefined && dfa_printvisualization != '')
  {
    var originalHeightOfTable = jQuery('#visTblDvId').height();
    jQuery('#visTblDvId').height('100%');
    // Call function to print visualization
    dfa_printvisualization.print(dfa_fullscreen.objType, dfa_fullscreen.fullScreenContDivID);
    jQuery('#visTblDvId').height(originalHeightOfTable);
  }
});

/**
 * function to execute when user mouse over and out on download downloan icon to show options for same
 */
jQuery(document).on('mouseover', 'a.dfapi-icn-dwnld', function (e) {
  e.stopPropagation();
  jQuery(this).find('div.dfapi_contnr-dwnld').show();
});
jQuery(document).on('mouseleave', 'a.dfapi-icn-dwnld', function (e) {
  jQuery(this).find('div.dfapi_contnr-dwnld').hide();
  e.stopPropagation();
});

/**
 * event when clicked on data label icon. This will show/hide data label on the visualization
 */
jQuery(document).on('click', 'a.dfapi-icn-datalbl', function () {
  /*if(jQuery('.dfapi-dt-lables').css('display')!='none') jQuery('.dfapi-dt-lables').hide();
   else jQuery('.dfapi-dt-lables').show();*/

  //toggle with highchart data label
  if (jQuery('.highcharts-data-labels').css('display') != 'none')
    jQuery('.highcharts-data-labels').hide();
  else
    jQuery('.highcharts-data-labels').show();
});

/**
 * function to execute when esc key prssed
 */
jQuery(document).keyup(function (e) {
  //Key trapping
  //Esc - 27
  if (e.keyCode == 27) {
    //Call function to close full screen
    dfa_fullscreen.closeFullScreen();
  }
  //...... may be inhanced for more key binding later
});

/**
 * function to execute when export option png, jpeg, pdf, svg select
 */
jQuery(document).on('click', 'a.dfapi-icn-dwnld a.export', function () {

  // if download visualization object exits to download
  if (dfa_dwnldvisualization !== undefined && dfa_dwnldvisualization != '')
  {
    //get file type
    var fileType = jQuery(this).attr('type');


    //if selected object type is chart
    if (dfa_fullscreen.objType == dfa_fullscreen.chartType)
    {
      //Set file name as chart title
      if (this.objSettings && dfa_fullscreen.objSettings.title && dfa_fullscreen.objSettings.title.text)
        var visFileName = dfa_fullscreen.objSettings.title.text;
      else
        var visFileName = dfa_fullscreen.getChartTitleProperties('title', dfa_fullscreen.obj); //get old chart title name

      objDwnldSettings = {title: {text: dfa_fullscreen.objSettings.title.text, style: {'font-size': '16px', 'font-family': 'Verdana, Arial, Helvetica, sans-serif', 'color': '#3C3C3C', 'fontWeight': 'bold'}, subtitle: {enabled: false}}};
    }
    //if selected object type is map
    else if (dfa_fullscreen.objType == dfa_fullscreen.mapType)
    {
      var visFileName = 'map';
      chartSubtitle = dfa_fullscreen.objSettings.subtitle.text;
      chartSubtitle = chartSubtitle.replace(/[<br/>]/g, ' ');
      objDwnldSettings = {
        'title': {
          'text': dfa_fullscreen.objSettings.title.text,
          'style': {
            'font-size': '16px',
            'font-family': 'Verdana, Arial, Helvetica, sans-serif',
            'fill': '#3C3C3C',
            'color': '#3C3C3C',
            'fontWeight': 'bold'
          }
        },
        'subtitle': {
          'text': chartSubtitle,
          'style': {
            'font-size': '9px',
            'font-family': 'Verdana, Arial, Helvetica, sans-serif',
            'fill': '#70A7FF',
            'color': '#70A7FF',
            'fontWeight': 'bold'
          }
        }
      };

    }


    //Call function to download visualization
    dfa_dwnldvisualization.download(dfa_fullscreen.objType, dfa_fullscreen.obj, visFileName, fileType, objDwnldSettings);
  }
});
