$(document).ready(function () {  

var height=$(window).height()-70;
$('.sidebar-block').height(height);
var page_val=$("input[name='details[page_num]']").val();
//alert(page_val);
//alert('HI0000');
if(page_val<3){
  $(".link-button").hide();
}
});

