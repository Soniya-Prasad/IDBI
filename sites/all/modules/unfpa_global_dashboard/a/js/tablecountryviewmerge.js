/*
 * @Tableview javascript plugin librray file.
 * @Created by DFA
 * @Date 29/04/2014
 */

/*
 * Class function to create table view of selected object
 */
function dfa_tableview() {

  // initialize class variables
  this.objType = '';
  this.chartType = 'chart';
  this.mapType = 'map';
  this.visTblDvId = 'visTblDvId';
  this.visTblId = 'TblDtVw';
  this.calledSecFS = 'fullscreen';
  this.calledSecHost = 'hosting';
  this.obj = '';
  this.objTblSettings = {};

  /**
   * function to get visualization data in tabular format
   *
   * @param {String} selObjType Ttpe of visualization
   * @param {Object} visObj The object of visualization
   * @param {String} visContPrntDivID The container div of visualization
   */
  this.getDataTableContent = function (selObjType, visObj, visContPrntDivID, objTblSettings, calledSec) {

    this.objType = selObjType;
    this.obj = visObj;
    this.objTblSettings = objTblSettings;

    // if called section specified, it means that it get called from hosting application
    if (calledSec === undefined || calledSec == '')
    {
      calledSec = this.calledSecHost;
    }

    // if selected parent container already contain visualization table content
    if (jQuery('#' + visContPrntDivID).find(jQuery('div.dfapi-visTbl-container')).length)
    {
      jQuery('#' + visContPrntDivID).find(jQuery('div.dfapi-visTbl-container')).remove();
    }

    //if visualization parent container found the use its height and width to set in table div
    if (calledSec == this.calledSecHost && visContPrntDivID && jQuery('#' + visContPrntDivID).length)
    {
      //console.log(visContPrntDivID);
      printHght = jQuery('#' + visContPrntDivID).height();
      var printwidth = jQuery('#' + visContPrntDivID).width();
      var prntHght = printHght - 22;
      //Make chart data table and store in string
      chartTable = '<div id="' + this.visTblDvId + '" class="dfapi-visTbl-container" style="height:' + prntHght + 'px; width: ' + printwidth + 'px;">';
    } else {
      //Make chart data table and store in string
      chartTable = '<div id="' + this.visTblDvId + '" class="dfapi-visTbl-container">';

    }

    //if selected object type is chart
    if (this.objType == this.chartType || this.objType == this.mapType)
    {
      //Calling function to get chart data in table
      var tableStr = this.obj.getData();


    }
    //if selected object type is map
    /*else if(this.objType==this.mapType)
     {
     //Calling function to get map data in table
     var tableStr = this.getD3MapData();

     }*/
    // if table title setting passed
    if (this.objTblSettings.title)
    {
      tblTitleRow = this.setTableTitleRow();
      chartTable += tblTitleRow;
    }
    chartTable += tableStr;
    chartTable += '</div>';

    return chartTable;
  };

  /**
   * Function to set table title style
   */
  this.setTableTitleRow = function ()
  {
    var tblTtlStr = '', tblTitleStyle = '';
    if (this.objTblSettings.title && this.objTblSettings.title.text)
    {
      if (this.objTblSettings.title.style)
      {
        // start loop through title style
        jQuery.each(this.objTblSettings.title.style, function (stlAttr, stlAttrVal) {
          tblTitleStyle += stlAttr + ':' + stlAttrVal;
        });
      }
      tblTtlStr = '<div class="tblTitle" style="' + tblTitleStyle + '">' + this.objTblSettings.title.text + '</div>';
    }
    return tblTtlStr;
  }

  /**
   * Function to get d3 map data
   */
  this.getD3MapData = function ()
  {
    //Call function to get map data
    mapData = this.obj.getMapData();
    var tblStr = '<table cellpadding="0" cellspacing="0" width="100%" id="' + this.visTblId + '"><thead><tr><th></th><th>Time Period</th><th>Data Value</th></tr></thead>\n';
    tblStr += '<tbody>';
    for (var row in mapData)
    {
      //console.log('dd-->'+row+'   --> '+mapData[row]+typeof mapData[row]);
      tblStr += '<tr>';
      tblStr += '<td>' + mapData[row][3] + '</td>';		//get area name into td
      tblStr += '<td class="dfapi-txt-aln-rgt-imp">' + mapData[row][0] + '</td>';		//get timeperiod into td
      tblStr += '<td class="dfapi-txt-aln-rgt-imp">' + mapData[row][1] + '</td>';		//get data val into td
      tblStr += '</tr>\n';
    }
    tblStr += '</tbody></table>\n';
    //console.log(tblStr);
    return tblStr;
  }

  /**
   * function to get data for table from highchart object
   */
  this.initHighChartTableData = function () {
    //Highcharts is a global variable
    var each = Highcharts.each;
    Highcharts.Chart.prototype.getData = function () {

      var trHd = '<thead><tr> <th>&nbsp; </th> </tr></thead>\n';
      var trData = '<tr><td class="">&nbsp;</td></tr>';
      var isPie = false;
      console.log("series");
      console.log(this.series[0].data);
      if (jQuery.trim(this.series[0]) != '' && jQuery.trim(this.series[0].type) != '') {
        if (this.series[0].type == 'pie')
          isPie = true;
      }
      //if selected object is map
      if (this.userOptions.chart.type == 'map')
      {

        trHd = '<thead><tr>\n <th> Area Name</th> <th> Data Value</th></tr></thead>\n';
        trData = '';
        jQuery.each(this.series[0].data, function (dtIndx, dtValArr) {
          //console.log(dtValArr.properties.NAME1_);
          //	console.log(dtValArr.series); //dtValArr.properties.NAME1_
          try {
            //if(dtValArr.value!=null && typeof dtValArr.series.mapData[dtIndx].properties.NAME1_ != 'undefined'){
            if (dtValArr.value != null && dtValArr.properties.NAME1_ !== 'undefined') {
              trData += '<tr>';
              tdData = '';
              //tdData += '<td class="'+dfa_tableview.dataValTdCls(dtValArr.series.mapData[dtIndx].properties.NAME1_)+'">' +dtValArr.series.mapData[dtIndx].properties.NAME1_ + '</td>';
              tdData += '<td class="' + dfa_tableview.dataValTdCls(dtValArr.properties.NAME1_) + '">' + dtValArr.properties.NAME1_ + '</td>';
              tdData += '<td class="' + dfa_tableview.dataValTdCls(dtValArr.value) + '">' + dtValArr.value + '</td>';
              trData += tdData + '</tr>\n';
            }
          } catch (err)
          {

          }
        });
      }
      //if selected object is chart
      else {

        var xAxis = this.xAxis[0],
                columns = [],
                line,
                csv = "",
                row,
                col, trData = '', tdData = '';

        // get initial chart properties
        chartCatg = xAxis.options.categories;
        chartType = this.options.chart.type;
        isPolarChart = this.options.chart.polar;

        // initialize vars
        var srNameArr = [], srValArr = {}, chartTblCatg = {}, rowHd = 0, srCnt = 0;

        // start table header row
        trHd = '<thead><tr>\n <th> &nbsp;</th>';

        // start loop through chart series
        jQuery.each(this.series, function (srInd, srVal) {
          srType = srVal.type;
          srName = srVal.name;

          if (srType == 'pie')
          {
            chartCatg = '';
          }
          trHd += '<th>' + jQuery.trim(srName) + '</th>';			// add table header row column
          srNameArr[srCnt] = jQuery.trim(srName);
          rowHd = 0;

          // start loop through selected series data points
          jQuery.each(srVal.points, function (dtPntInd, dtPntVal) {

            // if selected series value array not set earlier
            if (!srValArr[srCnt])
              srValArr[srCnt] = [];

            //if select series data point name found
            if (dtPntVal.name !== undefined)
            {
              if (srType == 'pie') {

                if (!chartTblCatg[srCnt])
                  chartTblCatg[srCnt] = [];
                chartTblCatg[srCnt][rowHd] = jQuery.trim(dtPntVal.name);
              } else {

                chartTblCatg[rowHd] = jQuery.trim(dtPntVal.name);
              }
              srValArr[srCnt].push(jQuery.trim(parseFloat(dtPntVal.y)));

            }//if select series data point x found
            else if (dtPntVal.x !== undefined)
            {
              if (dtPntVal.y !== undefined && dtPntVal.y !== '')
              {
                // initialize data array if not set already
                if (!chartTblCatg[dtPntVal.x])
                  chartTblCatg[dtPntVal.x] = {};
                if (!chartTblCatg[dtPntVal.x][rowHd])
                  chartTblCatg[dtPntVal.x][rowHd] = [];
                if (!chartTblCatg[dtPntVal.x][rowHd][srCnt])
                  chartTblCatg[dtPntVal.x][rowHd][srCnt] = [];

                chartTblCatg[dtPntVal.x][rowHd][srCnt].push(jQuery.trim(parseFloat(dtPntVal.y)));

                //old code changed on 25 july as x of different series may b different
                //srValArr[srCnt].push(jQuery.trim(parseFloat(dtPntVal.y)));

                if (!srValArr[dtPntVal.category])
                  srValArr[dtPntVal.category] = {};
                if (!srValArr[dtPntVal.category][srCnt])
                  srValArr[dtPntVal.category][srCnt] = [];

                if (chartType == 'pyramid' && dtPntVal.y < 0) {
                  srValArr[dtPntVal.category][srCnt].push(jQuery.trim(parseFloat(dtPntVal.y * -1)));
                } else {
                  srValArr[dtPntVal.category][srCnt].push(jQuery.trim(parseFloat(dtPntVal.y)));
                  var tdv = jQuery.trim(parseFloat(dtPntVal.y));
                  if (jQuery.trim(dtPntVal.ry) != '') {
                    tdv = jQuery.trim(parseFloat(dtPntVal.ry));
                  }
                  srValArr[dtPntVal.category][srCnt].push(tdv);
                }
              }
            }
            //if select series data point name/x not found
            else {
              chartTblCatg[rowHd] = '';
              srValArr[srCnt].push(jQuery.trim(parseFloat(dtPntVal.y)));
            }
            rowHd++;						// increment select series data counter

          });
          // end of loop of series data points
          srCnt++;								// increment select series counter
        });
        // end of loop of chart series

        // end table header row
        trHd += '</tr>\n</thead>';

        // if selected series is scatter
        if (chartType == 'scatter')
        {
          //get all keys of category
          chartCatgKeys = Object.keys(chartTblCatg);
          len = chartCatgKeys.length;
          chartCatgKeys.sort();		//sort category
          for (var i = 0; i < len; i++)
          {
            k = chartCatgKeys[i];
            trData += '<tr>';
            tdData = '';

            // add first td from chart table category
            tdData += '<td class="' + dfa_tableview.dataValTdCls(k) + '">' + jQuery.trim(k) + '</td>';

            // start loop through chart table category data to make series data td
            jQuery.each(chartTblCatg[k], function (srInd3, srVal3) {

              //console.log('  srInd3-->'+srInd3+'  srVal3-->'+srVal3);
              for (var i2 = 0; i2 < srNameArr.length; i2++)
              {
                if (srVal3[i2])
                  tdData += '<td class="' + dfa_tableview.dataValTdCls(srVal3[i2]) + '">' + jQuery.trim(srVal3[i2]) + '</td>';
                else
                  tdData += '<td> - </td>';
              }
            });
            trData += tdData + '</tr>\n';
          }
        }
        // if selected series is not scatter and its category data found
        else if (chartTblCatg)
        {
          // if chart type is pie
          if (chartType == 'pie') {
            trHd = '<thead><th>Area</th><th>Value</th></tr>\n</thead>';
            for (var srIndx = 0; srIndx < srNameArr.length; srIndx++) {

              for (var catgIndx = 0; catgIndx < chartTblCatg[srIndx].length; catgIndx++) {
                //console.log(chartTblCatg[srIndx][catgIndx]);
                catgName = jQuery.trim(chartTblCatg[srIndx][catgIndx]);
                trData += '<tr>';
                trData += '<td class="' + dfa_tableview.dataValTdCls(catgName) + '">' + catgName + '</td>';

                dtVal = jQuery.trim(srValArr[srIndx][catgIndx]);
                // format numeric data value
                if (dtVal != '' && !isNaN(parseFloat(dtVal))) {
                  dtVal = Highcharts.numberFormat(dtVal, 1, '.');
                }
                trData += '<td class="' + dfa_tableview.dataValTdCls(dtVal) + '">' + dtVal + '</td>';
                trData += '</tr>';
              }
              ;
            }
          }
          // if chart type is not pie
          else {
            // if chart table category data found
            if (chartTblCatg && chartTblCatg !== undefined)
            {
              jQuery.each(chartTblCatg, function (catgIndx, catgName) {
                trData += '<tr>';
                tdData = '';

                // add first td from chart table category
                if (chartCatg && chartCatg[catgIndx] && isPie == false)
                  tdData += '<td class="' + dfa_tableview.dataValTdCls(chartCatg[catgIndx]) + '">' + jQuery.trim(chartCatg[catgIndx]) + '</td>';
                else
                {
                  if (jQuery.trim(catgName) == '[object Object]')
                  {
                    catgName = '';
                  }
                  tdData += '<td class="' + dfa_tableview.dataValTdCls(catgName) + '">' + jQuery.trim(catgName) + '</td>';

                }
                // start loop through chart table category data to make series data td
                if (srValArr && srValArr !== undefined)
                {
                  for (var srIndx = 0; srIndx < srNameArr.length; srIndx++)
                  {
                    //if series data setting based on category name and series index
                    if (typeof srValArr[chartCatg[catgIndx]] != "undefined" && typeof srValArr[chartCatg[catgIndx]][srIndx] != "undefined" && srValArr[chartCatg[catgIndx]][srIndx] != "" && srValArr[chartCatg[catgIndx]][srIndx])
                    {
                      dtVal = jQuery.trim(srValArr[chartCatg[catgIndx]][srIndx]);

                      if (jQuery.trim(dtVal) == 'NaN,NaN' || jQuery.trim(dtVal) == 'NaN,NaN,NaN' || jQuery.trim(dtVal) == '0,0,0')
                      {
                        dtVal = '';
                      }
                      // format numeric data value
                      if (dtVal != '' && !isNaN(parseFloat(dtVal))) {
                        dtVal = Highcharts.numberFormat(dtVal, 1, '.');
                      }
                      tdData += '<td class="' + dfa_tableview.dataValTdCls(dtVal) + '">' + dtVal + '</td>';

                    }
                    //if series data setting based on series index and category index
                    else if (typeof srValArr[srIndx] != "undefined" && typeof srValArr[srIndx][catgIndx] != "undefined" && srValArr[srIndx][catgIndx]) {

                      dtVal = jQuery.trim(srValArr[srIndx][catgIndx]);
                      if (dtVal == 'NaN' || dtVal == '0')
                      {
                        dtVal = '-';
                      }

                      tdData += '<td class="' + dfa_tableview.dataValTdCls(dtVal) + '">' + dtVal + '</td>';
                    } else {
                      tdData += '<td class="">-</td>';
                    }
                  }
                }
                trData += tdData + '</tr>\n';
              });
            }

          }
        }
        // if chart category is undefined
        else if (chartTblCatg === undefined)
        {

          // start loop through series data
          jQuery.each(srValArr, function (srInd, srVal) {
            trData += '<tr>';
            tdData = '';
            tdData += '<td class="' + dfa_tableview.dataValTdCls(srInd) + '">' + jQuery.trim(srInd) + '</td>';
            tdData += '<td class="' + dfa_tableview.dataValTdCls(srVal) + '">' + jQuery.trim(parseFloat(srVal)) + '</td>';
            trData += tdData + '</tr>\n';
          });
        }
      }
      //console.log(dfa_tableview.visTblId);
      csv = '<table cellpadding="0" cellspacing="0" width="430px" style="margin-top:26px;" id="' + dfa_tableview.visTblId + '">' + trHd + ' <tbody>' + trData + '</tbody></table>';

      return csv;

    };
  };

  /**
   * function to check numeric data value and return its respected class on td
   *
   * @param {String} dataVal data point value to which class eed to be returned
   */
  this.dataValTdCls = function (dataVal)
  {

    clsName = '';
    dataVal = jQuery.trim(dataVal);
    if (dataVal !== undefined && dataVal != '' && !isNaN(dataVal))
    {
      clsName = 'dfapi-txt-aln-rgt-imp';
    }

    return clsName;
  };

  /**
   * function to enable table sorting functionality
   **/
  this.enableTableSorting = function (visContPrntDivID)
  {
    // if conatiner parent div exists
    if (visContPrntDivID !== undefined || visContPrntDivID != '')
    {
      // enable sorting of table
      jQuery('#' + visContPrntDivID).children(jQuery('div#' + this.visTblDvId)).children(jQuery('table#' + this.visTblId)).tablesorter();
    }
  };

  //Call function to initialize table data function
  this.initHighChartTableData();

  /**
   * function to load table sort js script
   **/
  this.loadTableSortJsFile = function ()
  {
    (function (jQuery) {
      jQuery.extend({tablesorter: new
                function () {
                  var parsers = [], widgets = [];
                  this.defaults = {cssHeader: "header", cssAsc: "headerSortUp", cssDesc: "headerSortDown", cssChildRow: "expand-child", sortInitialOrder: "asc", sortMultiSortKey: "shiftKey", sortForce: null, sortAppend: null, sortLocaleCompare: true, textExtraction: "simple", parsers: {}, widgets: [], widgetZebra: {css: ["even", "odd"]}, headers: {}, widthFixed: false, cancelSelection: true, sortList: [], headerList: [], dateFormat: "us", decimal: '/\.|\,/g', onRenderHeader: null, selectorHeaders: 'thead th', debug: false};
                  function benchmark(s, d) {
                    log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
                  }
                  this.benchmark = benchmark;
                  function log(s) {
                    if (typeof console != "undefined" && typeof console.debug != "undefined") {
                      console.log(s);
                    } else {
                      alert(s);
                    }
                  }
                  function buildParserCache(table, jQueryheaders) {
                    if (table.config.debug) {
                      var parsersDebug = "";
                    }
                    if (table.tBodies.length == 0)
                      return;
                    var rows = table.tBodies[0].rows;
                    if (rows[0]) {
                      var list = [], cells = rows[0].cells, l = cells.length;
                      for (var i = 0; i < l; i++) {
                        var p = false;
                        if (jQuery.metadata && (jQuery(jQueryheaders[i]).metadata() && jQuery(jQueryheaders[i]).metadata().sorter)) {
                          p = getParserById(jQuery(jQueryheaders[i]).metadata().sorter);
                        } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {
                          p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {
                          p = detectParserForColumn(table, rows, -1, i);
                        }
                        if (table.config.debug) {
                          parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }
                        list.push(p);
                      }
                    }
                    if (table.config.debug) {
                      log(parsersDebug);
                    }
                    return list;
                  }
                  ;
                  function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                    var l = parsers.length, node = false, nodeValue = false, keepLooking = true;
                    while (nodeValue == '' && keepLooking) {
                      rowIndex++;
                      if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                          log('Checking if value was empty on row:' + rowIndex);
                        }
                      } else {
                        keepLooking = false;
                      }
                    }
                    for (var i = 1; i < l; i++) {
                      if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                      }
                    }
                    return parsers[0];
                  }
                  function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                    return rows[rowIndex].cells[cellIndex];
                  }
                  function trimAndGetNodeText(config, node) {
                    return jQuery.trim(getElementText(config, node));
                  }
                  function getParserById(name) {
                    var l = parsers.length;
                    for (var i = 0; i < l; i++) {
                      if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                      }
                    }
                    return false;
                  }
                  function buildCache(table) {
                    if (table.config.debug) {
                      var cacheTime = new Date();
                    }
                    var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0, totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0, parsers = table.config.parsers, cache = {row: [], normalized: []};
                    for (var i = 0; i < totalRows; ++i) {
                      var c = jQuery(table.tBodies[0].rows[i]), cols = [];
                      if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        continue;
                      }
                      cache.row.push(c);
                      for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                      }
                      cols.push(cache.normalized.length);
                      cache.normalized.push(cols);
                      cols = null;
                    }
                    ;
                    if (table.config.debug) {
                      benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                    }
                    return cache;
                  }
                  ;
                  function getElementText(config, node) {
                    var text = "";
                    if (!node)
                      return"";
                    if (!config.supportsTextContent)
                      config.supportsTextContent = node.textContent || false;
                    if (config.textExtraction == "simple") {
                      if (config.supportsTextContent) {
                        text = node.textContent;
                      } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                          text = node.childNodes[0].innerHTML;
                        } else {
                          text = node.innerHTML;
                        }
                      }
                    } else {
                      if (typeof (config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                      } else {
                        text = jQuery(node).text();
                      }
                    }
                    return text;
                  }
                  function appendToTable(table, cache) {
                    if (table.config.debug) {
                      var appendTime = new Date()
                    }
                    var c = cache, r = c.row, n = c.normalized, totalRows = n.length, checkCell = (n[0].length - 1), tableBody = jQuery(table.tBodies[0]), rows = [];
                    for (var i = 0; i < totalRows; i++) {
                      var pos = n[i][checkCell];
                      rows.push(r[pos]);
                      if (!table.config.appender) {
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                          tableBody[0].appendChild(r[pos][j]);
                        }
                      }
                    }
                    if (table.config.appender) {
                      table.config.appender(table, rows);
                    }
                    rows = null;
                    if (table.config.debug) {
                      benchmark("Rebuilt table:", appendTime);
                    }
                    applyWidget(table);
                    setTimeout(function () {
                      jQuery(table).trigger("sortEnd");
                    }, 0);
                  }
                  ;
                  function buildHeaders(table) {
                    if (table.config.debug) {
                      var time = new Date();
                    }
                    var meta = (jQuery.metadata) ? true : false;
                    var header_index = computeTableHeaderCellIndexes(table);
                    jQuerytableHeaders = jQuery(table.config.selectorHeaders, table).each(function (index) {
                      this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                      this.order = formatSortingOrder(table.config.sortInitialOrder);
                      this.count = this.order;
                      if (checkHeaderMetadata(this) || checkHeaderOptions(table, index))
                        this.sortDisabled = true;
                      if (checkHeaderOptionsSortingLocked(table, index))
                        this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                      if (!this.sortDisabled) {
                        var jQueryth = jQuery(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader)
                          table.config.onRenderHeader.apply(jQueryth);
                      }
                      table.config.headerList[index] = this;
                    });
                    if (table.config.debug) {
                      benchmark("Built headers:", time);
                      log(jQuerytableHeaders);
                    }
                    return jQuerytableHeaders;
                  }
                  ;
                  function computeTableHeaderCellIndexes(t) {
                    var matrix = [];
                    var lookup = {};
                    var thead = t.getElementsByTagName('THEAD')[0];
                    var trs = thead.getElementsByTagName('TR');
                    for (var i = 0; i < trs.length; i++) {
                      var cells = trs[i].cells;
                      for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];
                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof (matrix[rowIndex]) == "undefined") {
                          matrix[rowIndex] = [];
                        }
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                          if (typeof (matrix[rowIndex][k]) == "undefined") {
                            firstAvailCol = k;
                            break;
                          }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                          if (typeof (matrix[k]) == "undefined") {
                            matrix[k] = [];
                          }
                          var matrixrow = matrix[k];
                          for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                            matrixrow[l] = "x";
                          }
                        }
                      }
                    }
                    return lookup;
                  }
                  function checkCellColSpan(table, rows, row) {
                    var arr = [], r = table.tHead.rows, c = r[row].cells;
                    for (var i = 0; i < c.length; i++) {
                      var cell = c[i];
                      if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                      } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                          arr.push(cell);
                        }
                      }
                    }
                    return arr;
                  }
                  ;
                  function checkHeaderMetadata(cell) {
                    if ((jQuery.metadata) && (jQuery(cell).metadata().sorter === false)) {
                      return true;
                    }
                    ;
                    return false;
                  }
                  function checkHeaderOptions(table, i) {
                    if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                      return true;
                    }
                    ;
                    return false;
                  }
                  function checkHeaderOptionsSortingLocked(table, i) {
                    if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder))
                      return table.config.headers[i].lockedOrder;
                    return false;
                  }
                  function applyWidget(table) {
                    var c = table.config.widgets;
                    var l = c.length;
                    for (var i = 0; i < l; i++) {
                      getWidgetById(c[i]).format(table);
                    }
                  }
                  function getWidgetById(name) {
                    var l = widgets.length;
                    for (var i = 0; i < l; i++) {
                      if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                      }
                    }
                  }
                  ;
                  function formatSortingOrder(v) {
                    if (typeof (v) != "Number") {
                      return(v.toLowerCase() == "desc") ? 1 : 0;
                    } else {
                      return(v == 1) ? 1 : 0;
                    }
                  }
                  function isValueInArray(v, a) {
                    var l = a.length;
                    for (var i = 0; i < l; i++) {
                      if (a[i][0] == v) {
                        return true;
                      }
                    }
                    return false;
                  }
                  function setHeadersCss(table, jQueryheaders, list, css) {
                    jQueryheaders.removeClass(css[0]).removeClass(css[1]);
                    var h = [];
                    jQueryheaders.each(function (offset) {
                      if (!this.sortDisabled) {
                        h[this.column] = jQuery(this);
                      }
                    });
                    var l = list.length;
                    for (var i = 0; i < l; i++) {
                      h[list[i][0]].addClass(css[list[i][1]]);
                    }
                  }
                  function fixColumnWidth(table, jQueryheaders) {
                    var c = table.config;
                    if (c.widthFixed) {
                      var colgroup = jQuery('<colgroup>');
                      jQuery("tr:first td", table.tBodies[0]).each(function () {
                        colgroup.append(jQuery('<col>').css('width', jQuery(this).width()));
                      });
                      jQuery(table).prepend(colgroup);
                    }
                    ;
                  }
                  function updateHeaderSortCount(table, sortList) {
                    var c = table.config, l = sortList.length;
                    for (var i = 0; i < l; i++) {
                      var s = sortList[i], o = c.headerList[s[0]];
                      o.count = s[1];
                      o.count++;
                    }
                  }
                  function multisort(table, sortList, cache) {
                    if (table.config.debug) {
                      var sortTime = new Date();
                    }
                    var dynamicExp = "var sortWrapper = function(a,b) {", l = sortList.length;
                    for (var i = 0; i < l; i++) {
                      var c = sortList[i][0];
                      var order = sortList[i][1];
                      var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                      var e = "e" + i;
                      dynamicExp += "var " + e + " = " + s;
                      dynamicExp += "if(" + e + ") { return " + e + "; } ";
                      dynamicExp += "else { ";
                    }
                    var orgOrderCol = cache.normalized[0].length - 1;
                    dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                    for (var i = 0; i < l; i++) {
                      dynamicExp += "}; ";
                    }
                    dynamicExp += "return 0; ";
                    dynamicExp += "}; ";
                    if (table.config.debug) {
                      benchmark("Evaling expression:" + dynamicExp, new Date());
                    }
                    eval(dynamicExp);
                    cache.normalized.sort(sortWrapper);
                    if (table.config.debug) {
                      benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                    }
                    return cache;
                  }
                  ;
                  function makeSortFunction(type, direction, index) {
                    var a = "a[" + index + "]", b = "b[" + index + "]";
                    if (type == 'text' && direction == 'asc') {
                      return"(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                    } else if (type == 'text' && direction == 'desc') {
                      return"(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                    } else if (type == 'numeric' && direction == 'asc') {
                      return"(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                    } else if (type == 'numeric' && direction == 'desc') {
                      return"(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                    }
                  }
                  ;
                  function makeSortText(i) {
                    return"((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
                  }
                  ;
                  function makeSortTextDesc(i) {
                    return"((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
                  }
                  ;
                  function makeSortNumeric(i) {
                    return"a[" + i + "]-b[" + i + "];";
                  }
                  ;
                  function makeSortNumericDesc(i) {
                    return"b[" + i + "]-a[" + i + "];";
                  }
                  ;
                  function sortText(a, b) {
                    if (table.config.sortLocaleCompare)
                      return a.localeCompare(b);
                    return((a < b) ? -1 : ((a > b) ? 1 : 0));
                  }
                  ;
                  function sortTextDesc(a, b) {
                    if (table.config.sortLocaleCompare)
                      return b.localeCompare(a);
                    return((b < a) ? -1 : ((b > a) ? 1 : 0));
                  }
                  ;
                  function sortNumeric(a, b) {
                    return a - b;
                  }
                  ;
                  function sortNumericDesc(a, b) {
                    return b - a;
                  }
                  ;
                  function getCachedSortType(parsers, i) {
                    return parsers[i].type;
                  }
                  ;
                  this.construct = function (settings) {
                    return this.each(function () {
                      if (!this.tHead || !this.tBodies)
                        return;
                      var jQuerythis, jQuerydocument, jQueryheaders, cache, config, shiftDown = 0, sortOrder;
                      this.config = {};
                      config = jQuery.extend(this.config, jQuery.tablesorter.defaults, settings);
                      jQuerythis = jQuery(this);
                      jQuery.data(this, "tablesorter", config);
                      jQueryheaders = buildHeaders(this);
                      this.config.parsers = buildParserCache(this, jQueryheaders);
                      cache = buildCache(this);
                      var sortCSS = [config.cssDesc, config.cssAsc];
                      fixColumnWidth(this);
                      jQueryheaders.click(function (e) {
                        var totalRows = (jQuerythis[0].tBodies[0] && jQuerythis[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                          jQuerythis.trigger("sortStart");
                          var jQuerycell = jQuery(this);
                          var i = this.column;
                          this.order = this.count++ % 2;
                          if (this.lockedOrder)
                            this.order = this.lockedOrder;
                          if (!e[config.sortMultiSortKey]) {
                            config.sortList = [];
                            if (config.sortForce != null) {
                              var a = config.sortForce;
                              for (var j = 0; j < a.length; j++) {
                                if (a[j][0] != i) {
                                  config.sortList.push(a[j]);
                                }
                              }
                            }
                            config.sortList.push([i, this.order]);
                          } else {
                            if (isValueInArray(i, config.sortList)) {
                              for (var j = 0; j < config.sortList.length; j++) {
                                var s = config.sortList[j], o = config.headerList[s[0]];
                                if (s[0] == i) {
                                  o.count = s[1];
                                  o.count++;
                                  s[1] = o.count % 2;
                                }
                              }
                            } else {
                              config.sortList.push([i, this.order]);
                            }
                          }
                          ;
                          setTimeout(function () {
                            setHeadersCss(jQuerythis[0], jQueryheaders, config.sortList, sortCSS);
                            appendToTable(jQuerythis[0], multisort(jQuerythis[0], config.sortList, cache));
                          }, 1);
                          return false;
                        }
                      }).mousedown(function () {
                        if (config.cancelSelection) {
                          this.onselectstart = function () {
                            return false
                          };
                          return false;
                        }
                      });
                      jQuerythis.bind("update", function () {
                        var me = this;
                        setTimeout(function () {
                          me.config.parsers = buildParserCache(me, jQueryheaders);
                          cache = buildCache(me);
                        }, 1);
                      }).bind("updateCell", function (e, cell) {
                        var config = this.config;
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
                      }).bind("sorton", function (e, list) {
                        jQuery(this).trigger("sortStart");
                        config.sortList = list;
                        var sortList = config.sortList;
                        updateHeaderSortCount(this, sortList);
                        setHeadersCss(this, jQueryheaders, sortList, sortCSS);
                        appendToTable(this, multisort(this, sortList, cache));
                      }).bind("appendCache", function () {
                        appendToTable(this, cache);
                      }).bind("applyWidgetId", function (e, id) {
                        getWidgetById(id).format(this);
                      }).bind("applyWidgets", function () {
                        applyWidget(this);
                      });
                      if (jQuery.metadata && (jQuery(this).metadata() && jQuery(this).metadata().sortlist)) {
                        config.sortList = jQuery(this).metadata().sortlist;
                      }
                      if (config.sortList.length > 0) {
                        jQuerythis.trigger("sorton", [config.sortList]);
                      }
                      applyWidget(this);
                    });
                  };
                  this.addParser = function (parser) {
                    var l = parsers.length, a = true;
                    for (var i = 0; i < l; i++) {
                      if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                      }
                    }
                    if (a) {
                      parsers.push(parser);
                    }
                    ;
                  };
                  this.addWidget = function (widget) {
                    widgets.push(widget);
                  };
                  this.formatFloat = function (s) {
                    var i = parseFloat(s);
                    return(isNaN(i)) ? 0 : i;
                  };
                  this.formatInt = function (s) {
                    var i = parseInt(s);
                    return(isNaN(i)) ? 0 : i;
                  };
                  this.isDigit = function (s, config) {
                    return/^[-+]?\d*jQuery/.test(jQuery.trim(s.replace(/[,.']/g, '')));
                  };
                  this.clearTableBody = function (table) {
                    if (jQuery.browser.msie) {
                      function empty() {
                        while (this.firstChild)
                          this.removeChild(this.firstChild);
                      }
                      empty.apply(table.tBodies[0]);
                    } else {
                      table.tBodies[0].innerHTML = "";
                    }
                  };
                }});
      jQuery.fn.extend({tablesorter: jQuery.tablesorter.construct});
      var ts = jQuery.tablesorter;
      ts.addParser({id: "text", is: function (s) {
          return true;
        }, format: function (s) {
          return jQuery.trim(s.toLocaleLowerCase());
        }, type: "text"});
      ts.addParser({id: "digit", is: function (s, table) {
          var c = table.config;
          return jQuery.tablesorter.isDigit(s, c);
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat(s);
        }, type: "numeric"});
      ts.addParser({id: "currency", is: function (s) {
          return/^[£jQuery€?.]/.test(s);
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat(s.replace(new RegExp(/[£jQuery€]/g), ""));
        }, type: "numeric"});
      ts.addParser({id: "ipAddress", is: function (s) {
          return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}jQuery/.test(s);
        }, format: function (s) {
          var a = s.split("."), r = "", l = a.length;
          for (var i = 0; i < l; i++) {
            var item = a[i];
            if (item.length == 2) {
              r += "0" + item;
            } else {
              r += item;
            }
          }
          return jQuery.tablesorter.formatFloat(r);
        }, type: "numeric"});
      ts.addParser({id: "url", is: function (s) {
          return/^(https?|ftp|file):\/\/jQuery/.test(s);
        }, format: function (s) {
          return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        }, type: "text"});
      ts.addParser({id: "isoDate", is: function (s) {
          return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}jQuery/.test(s);
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
        }, type: "numeric"});
      ts.addParser({id: "percent", is: function (s) {
          return/\%jQuery/.test(jQuery.trim(s));
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        }, type: "numeric"});
      ts.addParser({id: "usLongDate", is: function (s) {
          return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))jQuery/));
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"});
      ts.addParser({id: "shortDate", is: function (s) {
          return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        }, format: function (s, table) {
          var c = table.config;
          s = s.replace(/\-/g, "/");
          if (c.dateFormat == "us") {
            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "jQuery3/jQuery1/jQuery2");
          } else if (c.dateFormat == "uk") {
            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "jQuery3/jQuery2/jQuery1");
          } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "jQuery1/jQuery2/jQuery3");
          }
          return jQuery.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"});
      ts.addParser({id: "time", is: function (s) {
          return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))jQuery/.test(s);
        }, format: function (s) {
          return jQuery.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
        }, type: "numeric"});
      ts.addParser({id: "metadata", is: function (s) {
          return false;
        }, format: function (s, table, cell) {
          var c = table.config, p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
          return jQuery(cell).metadata()[p];
        }, type: "numeric"});
      ts.addWidget({id: "zebra", format: function (table) {
          if (table.config.debug) {
            var time = new Date();
          }
          var jQuerytr, row = -1, odd;
          jQuery("tr:visible", table.tBodies[0]).each(function (i) {
            jQuerytr = jQuery(this);
            if (!jQuerytr.hasClass(table.config.cssChildRow))
              row++;
            odd = (row % 2 == 0);
            jQuerytr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
          });
          if (table.config.debug) {
            jQuery.tablesorter.benchmark("Applying Zebra widget", time);
          }
        }});
    })(jQuery);
  };

  //Call function to load table sort js file
  this.loadTableSortJsFile();
}
var dfa_tableview = new dfa_tableview();	// create object of full screen

function eliminateDuplicates(arr) {
  var i,
          len = arr.length,
          out = [],
          obj = {};

  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
