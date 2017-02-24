/*
 * @Download visualization javascript plugin libray file.
 * @Created by DFA
 * @Date 29/04/2014
 */

/*
 * Class function to download visualization
 */
function dfa_dwnldvisualization() {

  // initialize class variables
  this.userAgent = navigator.userAgent,
          this.isOpera = window.opera,
          this.isIE = /msie/i.test(this.userAgent) && !this.isOpera,
          this.docMode8 = document.documentMode === 8,
          this.isWebKit = /AppleWebKit/.test(this.userAgent),
          this.isFirefox = /Firefox/.test(this.userAgent),
          this.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(this.userAgent),
          this.chartType = 'chart';
  this.mapType = 'map';

  /**
   * function to export chart depending on selected option
   *
   * @param {String} selObjType Type of visualization
   * @param {Object} selVisObj The object of visualization
   * @param {String} selVisName Selected file name to be used while downloading file
   * @param {String} selFlType Selected type of file to export
   * @param {Object} objDwnldSettings The object of visualization setting that may need to apply before downloading
   */
  this.download = function (selObjType, selVisObj, selVisFileName, selFlType, objDwnldSettings, mapfilename) {


    //Set default file type
    var fileType = 'application/pdf';

    //Set file type as per selected type
    if (selFlType == 'jpeg')
      fileType = 'image/jpeg';
    else if (selFlType == 'png')
      fileType = 'image/png';
    else if (selFlType == 'svg')
      fileType = 'image/svg+xml';

    //if selected object type is chart
    if (selObjType == this.chartType)
    {

      selVisFileName = 'chart';
      //Set chart title if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.title)
      {
        console.log('title');
        oldVisTitle = selVisObj.options.title;

        selVisObj.setTitle(objDwnldSettings.title);
      }
      //Set chart subtitle if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.subtitle)
      {
        console.log('subtitle');
        oldVisSubTitle = selVisObj.options.subtitle;
        selVisObj.setTitle(null, objDwnldSettings.subtitle);
      }

      //Call function to export chart
      this.exportPost('http://export.highcharts.com', {type: fileType, filename: selVisFileName, svg: selVisObj.getSVG(), scale: 4, width: 0});

      // Reset chart title back if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.title)
        selVisObj.setTitle(oldVisTitle);

      // Reset chart subtitle back if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.subtitle)
        selVisObj.setTitle(null, oldVisSubTitle);
    }
    //if selected object type is map
    else if (selObjType == this.mapType)
    {
      selVisFileName = 'Prevalence of Female Genital Mutilation (FGM) among Women Aged 15-49';
      //selVisFileName = 'map';
      selVisScale = 2;

      //Set chart title if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.title)
      {
        oldVisTitle = selVisObj.options.title;
        selVisObj.setTitle(objDwnldSettings.title);
      }
      //Set chart subtitle if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.subtitle)
      {
        oldVisSubTitle = selVisObj.options.subtitle;
        selVisObj.setTitle(null, objDwnldSettings.subtitle);
      }

      //get file name as chart title name
      /*if(typeof selVisObj.title != 'undefined' && typeof selVisObj.title.textStr != 'undefined' && selVisObj.title.textStr && selVisObj.title.textStr !='') {
       selVisFileName = selVisObj.title.textStr;
       selVisFileName = selVisFileName.split(" ").join("_");
       selVisFileName = selVisFileName.replace(",", "_");
       }*/

      //Call function to export chart
      //Highcharts.post('http://export.highcharts.com', {type: fileType, filename: selVisFileName, svg: selVisObj.getSVG(), width:  0, scale:  1});
      debugger;
      selVisObj.exportChart({type: fileType, filename: mapfilename, scale: selVisScale});

      // Reset chart title back if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.title)
        selVisObj.setTitle(oldVisTitle);

      // Reset chart subtitle back if passed in object objDwnldSettings
      if (objDwnldSettings && objDwnldSettings.subtitle)
        selVisObj.setTitle(null, oldVisSubTitle);
    }
    return false;
  };

  /**
   * function to add map title and subtitle if passed
   *
   * @param {visObj} Object The object of map
   * @param {visSettingObj} Object The seeting object of map
   */
  this.addMapTitleSubtitle = function (visObj, visSettingObj)
  {
    mapD3Obj = visObj.getSVG();

    //mapTtlSbTtlGrp = mapD3Obj.append('g').attr('id','dfapi-map-ttl-sbttl');
    // if map title found then show with map
    /*if(objDwnldSettings && visSettingObj.title.text)
     {
     mpTtlTxt = mapTtlSbTtlGrp.insert("text").attr("x","50%").attr("y","3%").attr("text-anchor", "middle").attr("alignment-baseline", "middle");
     mpTtlTxt.text(visSettingObj.title.text);

     //if map title style not set then use defult map title style
     if(!visSettingObj.title.style) visSettingObj.title.style = {
     'font-size':'14px','font-family':'Verdana','fill':'gray','color':'gray'
     };
     mpTtlTxt.style(visSettingObj.title.style);
     }

     // if map subtitle found then show with map
     if(visSettingObj && visSettingObj.subtitle.text)
     {
     mpSubTtlTxt = mapTtlSbTtlGrp.insert("text").attr("x","50%").attr("y","7%").attr("text-anchor", "middle").attr("alignment-baseline", "middle");
     mpSubTtlTxt.text(visSettingObj.subtitle.text);
     //if map subtitle style not set then use defult map subtitle style
     if(!visSettingObj.subtitle.style) visSettingObj.subtitle.style = {
     'font-size':'9px','font-family':'Verdana','fill':'gray','color':'gray'
     };
     mpSubTtlTxt.style(visSettingObj.subtitle.style);
     }*/

    //transform map container to have top margin
    allGNode = mapD3Obj.selectAll("g");
    d3.select(allGNode[0][0]).attr("transform", "translate(0,35) scale(1)");
  }

  /**
   * function to remove map title and subtitle if found
   *
   * @param {visObj} Object The object of map
   */
  this.removeMapTitleSubtitle = function (visObj)
  {
    mapD3Obj = visObj.getMapSVGObject();
    allGNode = mapD3Obj.selectAll("g");
    //remove map title and subtitle
    d3.select('#dfapi-map-ttl-sbttl').remove();
    d3.select(allGNode[0][0]).attr("transform", "translate(0,0) scale(1)");
  }

  /**
   * Add the Highcharts.post utility to use for map export options
   */
  this.exportPost = function (url, data) {
    var name,
            form;

    // create the form
    form = this.createElement('form', {
      method: 'post',
      action: url,
      enctype: 'multipart/form-data'
    }, {
      display: 'none'
    }, document.body);

    // add the data
    for (name in data) {
      this.createElement('input', {
        type: 'hidden',
        name: name,
        value: data[name]
      }, null, form);
    }
    // submit
    form.submit();
    // clean up
    this.discardElement(form);
  };

  /**
   * Utility function to create element with attributes and styles
   * @param {Object} tag
   * @param {Object} attribs
   * @param {Object} styles
   * @param {Object} parent
   * @param {Object} nopad
   */
  this.createElement = function (tag, attribs, styles, parent, nopad) {
    var el = document.createElement(tag);
    if (attribs) {
      this.extend(el, attribs);
    }
    if (nopad) {
      this.css(el, {padding: 0, border: 'none', margin: 0});
    }
    if (styles) {
      this.css(el, styles);
    }
    if (parent) {
      parent.appendChild(el);
    }
    return el;
  }

  /**
   * Extend an object with the members of another
   * @param {Object} a The object to be extended
   * @param {Object} b The object to add to the first one
   */
  this.extend = function (a, b) {
    var n;
    if (!a) {
      a = {};
    }
    for (n in b) {
      a[n] = b[n];
    }
    return a;
  }

  /**
   * Set CSS on a given element
   * @param {Object} el
   * @param {Object} styles Style object with camel case property names
   */
  this.css = function (el, styles) {
    if (this.isIE) {
      if (styles && styles.opacity !== undefined) {
        styles.filter = 'alpha(opacity=' + (styles.opacity * 100) + ')';
      }
    }
    this.extend(el.style, styles);
  }

  /**
   * Discard an element by moving it to the bin and delete
   * @param {Object} The HTML node to discard
   */
  this.discardElement = function (element) {
    garbageBin = '';
    // create a garbage bin element, not part of the DOM
    if (!garbageBin) {
      garbageBin = this.createElement('div');
    }

    // move the node and empty bin
    if (element) {
      garbageBin.appendChild(element);
    }
    garbageBin.innerHTML = '';
  }
}
var dfa_dwnldvisualization = new dfa_dwnldvisualization();	// create object of full screen
