/*
 * @Printvisualization javascript plugin librray file.
 * @Created by DFA
 * @Date 29/04/2014
 */

/*
 * Class function to create table view of selected object
 */
function dfa_printvisualization() {

  // initialize class variables
  this.chartType = 'chart';
  this.mapType = 'map';

  /**
   * Print the visualization
   *
   * @param {String} selObjType Type of visualization
   * @param {String} containerParentDivID The visualization parent containe div id
   */
  this.print = function (selObjType, containerParentDivID) {

    // if selected visualization map/chart and its container parent div found
    if ((selObjType == this.chartType || selObjType == this.mapType) && jQuery('#' + containerParentDivID).length)
    {
      var container = jQuery('#' + containerParentDivID).html();
      var origDisplay = [];
      var origParent = container.parentNode;
      var body = document.body;
      var childNodes = body.childNodes;
      var contWdth = jQuery('#' + containerParentDivID).width();
      var contHght = jQuery('#' + containerParentDivID).height();

      var isPrinting = true;

      for (i = 0; i < childNodes.length; i++)
      {
        if (childNodes[i].nodeType === 1) {
          //console.log(i+'   dis   '+jQuery(childNodes[i]).css('display'));
          origDisplay[i] = jQuery(childNodes[i]).css('display');
          jQuery(childNodes[i]).css('display', 'none')
        }
      }

      // pull out the chart
      jQuery(body).append('<div id="printVisDv">' + container + '</div>');
      if (jQuery('#printVisDv').find(jQuery('#' + this.visTblDvId)).length)
        jQuery('#printVisDv').find(jQuery('#' + this.visTblDvId)).height('100%');


      // print
      window.focus(); // focus window
      window.print(); // print on window

      // allow the browser to prepare before reverting
      setTimeout(function () {
        jQuery('#printVisDv').remove();

        // put the chart back in
        jQuery(origParent).append(container);

        // if selected visulization is map then reset size of map svg
        if (selObjType == dfa_printvisualization.mapType)
          jQuery('#' + containerParentDivID).find('svg').attr('width', contWdth).attr('height', contHght);

        for (i = 0; i < childNodes.length; i++)
        {
          if (childNodes[i].nodeType === 1) {
            //childNodes[i].style.display = origDisplay[i];
            jQuery(childNodes[i]).css('display', origDisplay[i])
          }
        }
        isPrinting = false;

      }, 1000);
    }
  };
}
var dfa_printvisualization = new dfa_printvisualization();	// create object of full screen

