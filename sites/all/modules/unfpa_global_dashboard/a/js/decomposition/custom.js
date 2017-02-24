var mainObj ={
		"CO1":{
				"id":"co1",
				"indicatorName":"Population by urban and rural areas",
				"ind_NID":"7",
				"unit_NID":"1",
				"sub_NID":"1,1755,1756",
				"timeperiod":"MRD"
		},
		"CO2":{
				"id":"co2",
				"indicatorName":"Population by sex",
				"ind_NID":"3",
				"unit_NID":"1",
				"sub_NID":"2012,2011",
				"timeperiod":"MRD"
		},
		"CO3":{
				"indicatorName":"Population by age group and sex",
				"ind_NID":"1",
				"unit_NID":"1",
				"sub_NID":"229,228,230,232,233,235,236,237,238,239,240,241,242,243,254,244,255,245,256,246,257,247,258,248,259,249,260,250,261,262,251,263,252#265,264,266,268,269,271,272,273,274,275,276,277,278,279,290,280,291,281,292,282,293,283,294,284,295,285,296,286,297,298,287,299,288",
				"timeperiod":"MRD"
		},
		"CO4":{
				"indicatorName":"Population by marital status",
				"ind_NID":"2",
				"unit_NID":"1",
				"sub_NID":"140,139,137,138#149,148,146,147",
				"timeperiod":"MRD"
		},
		"CO5":{
				"indicatorName":"Population by literacy",
				"ind_NID":"5",
				"unit_NID":"1",
				"sub_NID":"2017,2018,2020#2021,2022,2024",
				"timeperiod":"MRD"
		}
}
/**
* Custom Function
*/
(function($){
	
	
	loadAllCharts(28);
	

})(jQuery);



// function to load all graph by using Area NID
function loadAllCharts(areanid){
   getLineChart(areanid,mainObj.CO1);
   getBarChart(areanid,mainObj.CO2);
   getTable1Data(areanid,mainObj.CO2);
   getTable2Data(areanid,mainObj.CO2);
}

// function to get chart data using area nid and ius
function getLineChart(area_nid,chartObj){
		
		var type = chartObj.id;
		showLoader(type)
		var indicator_nid = chartObj.ind_NID;
		var unit_nid = chartObj.unit_NID;
		var sub_nid = chartObj.sub_NID;
		var timeperiod = chartObj.timeperiod;
		
		
		
		 var postData = 'area_NID='+area_nid+'&indicator_nid='+indicator_nid+'&unit_nid='+unit_nid+'&sub_nid='+sub_nid+'&timeperiod='+timeperiod;
	
		
		$.ajax({
	    url:base_url+'home/getLineChartData',
			type:'POST',
			dataType:'json',
			data:postData,
			success:function(data){
			
			  
			  loadLineChart(data,type,area_nid);
			  hideLoader(type);
			  
			}
			
		});
		
		
}
// function to get chart data using area nid and ius
function getBarChart(area_nid,chartObj){
		
		var type = chartObj.id;
		showLoader(type)
		var indicator_nid = chartObj.ind_NID;
		var unit_nid = chartObj.unit_NID;
		var sub_nid = chartObj.sub_NID;
		var timeperiod = chartObj.timeperiod;
		
		
		
		 var postData = 'area_NID='+area_nid+'&indicator_nid='+indicator_nid+'&unit_nid='+unit_nid+'&sub_nid='+sub_nid+'&timeperiod='+timeperiod;
	
		
		$.ajax({
	        url:base_url+'home/getBarChartData',
			type:'POST',
			dataType:'json',
			data:postData,
			success:function(data){
			
			  
			  
			  loadbarChart(data,type,area_nid);
			  hideLoader(type);
			  
			}
			
		});
		
		
}

// function to get chart data using area nid and ius
function getTable1Data(area_nid,chartObj){
		
		var type = chartObj.id;
		showLoader("table1")
		var indicator_nid = chartObj.ind_NID;
		var unit_nid = chartObj.unit_NID;
		var sub_nid = chartObj.sub_NID;
		var timeperiod = chartObj.timeperiod;
		
		
		
		 var postData = 'area_NID='+area_nid+'&indicator_nid='+indicator_nid+'&unit_nid='+unit_nid+'&sub_nid='+sub_nid+'&timeperiod='+timeperiod;
	
		
		$.ajax({
	        url:base_url+'home/getTable1Data',
			type:'POST',
			dataType:'json',
			data:postData,
			success:function(data){
			
			  
			  
			  loadTable1(data,type,area_nid);
			  hideLoader("table1")
			  
			}
			
		});
		
		
}
// function to get chart data using area nid and ius
function getTable2Data(area_nid,chartObj){
		
		var type = chartObj.id;
		showLoader("table2")
		var indicator_nid = chartObj.ind_NID;
		var unit_nid = chartObj.unit_NID;
		var sub_nid = chartObj.sub_NID;
		var timeperiod = chartObj.timeperiod;
		
		
		
		 var postData = 'area_NID='+area_nid+'&indicator_nid='+indicator_nid+'&unit_nid='+unit_nid+'&sub_nid='+sub_nid+'&timeperiod='+timeperiod;
	
		
		$.ajax({
	        url:base_url+'home/getTable2Data',
			type:'POST',
			dataType:'json',
			data:postData,
			success:function(data){
			
			  
			  
			  loadTable2(data,type,area_nid);
			  hideLoader("table2")
			  
			}
			
		});
		
		
}

function loadLineChart(data,type,area_nid){


 

 chart = new Highcharts.Chart({
            chart: {
                renderTo: 'co1',
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Alternative Polulation Projections 2005-2050',
                x: -20 //center
            },
            subtitle: {
                text: 'And Component of Polulation growth',
                x: -20
            },
            xAxis: {
                categories: data.categories
            },
            yAxis: {
                title: {
                    text: 'Population size (millions)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y +'�C';
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series:data.series
          
        });
   


}

function loadbarChart(data,type,area_nid){

	chart = new Highcharts.Chart({
            chart: {
                renderTo: 'co2',
                type: 'bar'
            },
            title: {
                text: 'Decline in population in 2050 resulting from <br/> removal of components of population growth'
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
                formatter: function() {
                    return ''+
                        this.series.name +': '+ this.y +'';
                }
            },
             legend: {
            enabled: false
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

function loadTable1(data,type,area_nid){

	var html_Heading_str = '<tr class="fnt_bld odd">';
	 html_Heading_str += '								<td class="emty">&nbsp;</td>';
	 html_Heading_str += '								<td  class="rd_fst_clm">Population Projections</td>';
	 html_Heading_str += '	<td  class="tb_est_proj">2010</td>';
	 html_Heading_str += '								<td class="tb_est_proj">2025</td>';
	 html_Heading_str += '	<td class="tb_est_proj">2050</td>';
	 html_Heading_str += '								<td>%growth</td>';
	 html_Heading_str += '							</tr>';
	 var html_content_str ='';
	 
	 di_jq.each(data.series, function(i, item) {
		
		if(i%2!=0){
			
			 html_content_str +=  '<tr class="odd">';
		}else{
		 	html_content_str +=  '<tr>';	
			
		}
		
	     html_content_str +=     '<td class="emty">&nbsp;</td>';
	     html_content_str +=     '<td  class="rd_fst_clm">'+item.name+'</td>';
	     
	 di_jq.each(item.data, function(j, value) {	     

	    if(j==0){
	     	html_content_str +=     '<td  class="tb_est_proj">'+value+'</td>';
	     }else{
			 html_content_str +=     '<td>'+value+'</td>';	    
		     
	     }
	     

	     
	  });
	  
	  	 html_content_str +=     '<td>'+data.growth_series[i].data+'</td>';	
	     html_content_str +=    '</tr>';
		 
		 
	});
	 
                  
     
                            
      var html_str =  html_Heading_str+html_content_str;
      
	di_jq("#table1").html(html_str);
	
}

function loadTable2(data,type,area_nid){

	var html_Heading_str = '<tr class="fnt_bld odd">';
        html_Heading_str +=    '<td class="emty">&nbsp;</td>';
        html_Heading_str +=     '<td>Decomposition1</td>';
        html_Heading_str +=     '<td>Multiplier 2050/2010</td>';
        html_Heading_str +=     '<td>% effect of addition</td>';
        html_Heading_str +=     '<td>% effect of removal</td>';
        html_Heading_str += '</tr>';
        
	 var html_content_str ='';
	  
                                
                                
	 di_jq.each(data.series, function(i, item) {
		
		if(i%2!=0){
			
			 html_content_str +=  '<tr class="odd">';
		}else{
		 	html_content_str +=  '<tr>';	
			
		}
		
	     html_content_str +=     '<td class="emty">&nbsp;</td>';
	     html_content_str +=     '<td >'+item.name+'</td>';
	     
	 di_jq.each(item.data, function(j, value) {	     

	    if(j==0){
	     	html_content_str +=     '<td  class="pddn_lft_twtyfv">'+value+'</td>';
	     }else{
			 html_content_str +=     '<td class="pddn_lft_twtyfv">'+value+'</td>';	    
		     
	     }
	     

	     
	  });
	  
	     html_content_str +=    '</tr>';
		 
		 
	});
	 
                  
     
                            
      var html_str =  html_Heading_str+html_content_str;
      
	di_jq("#table2").html(html_str);
	
}


// function to show loader gif
 function showLoader(id){
    $('#'+id).mask('&nbsp;');
 }
 
 // function to remove loader gif
 function hideLoader(id){
    $('#'+id).unmask();
 }
 

// loop through mainObj and print graphs
$(function(){

	alert("load");
	// on Chart Full Screen Highchart Zoom click event
	$('a.ful_view_icn').click(function(){alert("ok");	});
});
