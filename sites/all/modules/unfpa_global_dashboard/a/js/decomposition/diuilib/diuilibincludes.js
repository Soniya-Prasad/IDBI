/*
    * diuilibcommon_.js
	* Common function to draw component UI
	*
*/

/* --- */
/* TO BE DECLARED IN THE HOSTING APPLICATION 
var di_diuilib_url = 'http://dgps/di7poc/diuilib/';
*/

var di_is_search_files_added = false;

/* creating version and service url */
var di_version_url = di_diuilib_url + di_component_version + '/';

document.write("<script type='text/javascript' src='"+di_version_url+"js/di.jquery-1.4.4.js'></script>");
document.write("<script type='text/javascript' src='"+di_version_url+"js/di.jquery-ui-1.8.12.custom.min.js'></script>");
document.write("<script type='text/javascript' src='"+di_version_url+"js/di.jquery.transform.js'></script>");
document.write("<script type='text/javascript' src='"+di_version_url+"js/di.ui.tree.js'></script>");


// add file for indicator
if(di_components.indexOf("Indicator") > -1) {	
	if(!di_is_search_files_added)
	{
		// add file for search control
		document.write("<link href='"+di_version_url+"/css/search/di.search.css' rel='stylesheet' type='text/css' />");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/search/di.search.js'></script>");
		di_is_search_files_added = true;
	}

	document.write("<script type='text/javascript' src='"+di_version_url+"js/ind/di.indicator.js'></script>");
	//document.write("<script type='text/javascript' src='"+di_version_url+"js/sg/di.subgroup.js'></script>");
}
// add file for area
if(di_components.indexOf("Area") > -1) {
	if(!di_is_search_files_added)
	{
		// add file for search control
		document.write("<link href='"+di_version_url+"/css/search/di.search.css' rel='stylesheet' type='text/css' />");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/search/di.search.js'></script>");
		di_is_search_files_added = true;
	}

	document.write("<script type='text/javascript' src='"+di_version_url+"js/area/di.area.js'></script>");
	document.write("<script type='text/javascript' src='"+di_version_url+"js/area/di.areabymap.js'></script>");
}
// add file for Search
if(di_components.indexOf("Search") > -1) {
	document.write("<link href='"+di_version_url+"/css/search/di.search.css' rel='stylesheet' type='text/css' />");
	document.write("<script type='text/javascript' src='"+di_version_url+"js/search/di.search.js'></script>");
}
// add file for qds
if(di_components.indexOf("Qds") > -1) {
	document.write("<script type='text/javascript' src='"+di_version_url+"js/qds/di.qds.js'></script>");
}
// add file for database
if(di_components.indexOf("Database") > -1) {	
	document.write("<script type='text/javascript' src='"+di_version_url+"js/dbs/di.dbs.js'></script>");
}
// add file for language control
if(di_components.indexOf("Language") > -1) {
	document.write("<script type='text/javascript' src='"+di_version_url+"js/lsc/di.lsc.js'></script>");
}
// add file for DIVC di Visualizations Component
if(di_components.indexOf("DIVC") > -1) {
	// file for highcharts
	document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.highcharts.js'></script>");
	document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.exporting.js'></script>");
	document.write("<script type='text/javascript' src='"+di_version_url+"js/jqcp/di.jq.colorpicker.js'></script>");
	document.write("<script type='text/javascript' src='"+di_version_url+"js/jqcp/di.jq.eye.js'></script>");
	document.write("<link href='"+di_version_url+"css/jqcp/di.jq.colorpicker.css' rel='stylesheet' type='text/css' />");
	document.write("<link href='"+di_version_url+"css/divc/di.divc.css' rel='stylesheet' type='text/css' />");

	var inc_cbl = false;
	if(di_vctype.indexOf("Map") > -1) { // file for map chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.map.js'></script>");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/di.easyTooltip.js'></script>");
		inc_cbl = false;
	}
	if(di_vctype.indexOf("Column") > -1) { // file for column chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.column.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Bar") > -1) { // file for bar chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.bar.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Line") > -1) { // file for line chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.line.js'></script>");
		inc_cbl = true;
	}	
	if(di_vctype.indexOf("Area") > -1) { // file for area chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.area.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Pie") > -1) { // file for pie chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.pie.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Donut") > -1) { // file for Donut chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.donut.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Scatter") > -1) { // file for Scatter chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.scatter.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Pyramid") > -1) { // file for Pyramid chart
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.pyramid.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Treemap") > -1) { // file for treemap chart
		document.write("<link href='"+di_version_url+"/css/divc/di.base.css' rel='stylesheet' type='text/css' />");
		document.write("<link href='"+di_version_url+"/css/divc/di.treemap.css' rel='stylesheet' type='text/css' />");				
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.jit.js'></script>");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.treemap.js'></script>");
		inc_cbl = true;
	}
	if(di_vctype.indexOf("Radar") > -1) { // file for radar chart		
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.swfobject.js'></script>");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.radar.js'></script>");
		inc_cbl = true;
	}
	if(inc_cbl==true) {
		document.write("<script type='text/javascript' src='"+di_version_url+"js/divc/di.cbl.js'></script>");
		document.write("<script type='text/javascript' src='"+di_version_url+"js/di.jquery.form.js'></script>");
		//document.write("<script type='text/javascript' src='"+di_version_url+"js/swfobject.js'></script>");
	}
}
