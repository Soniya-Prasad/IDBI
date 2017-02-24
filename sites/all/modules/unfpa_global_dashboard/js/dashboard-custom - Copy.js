(function ($) {

  $(document).ready(function () {
    var biggestHeight = $('#data-dashboard-tabs > ul > li.active-tab > ul').height();
    $('#data-dashboard-tabs > ul > li').parent().height(biggestHeight + 60);
    $('#view-country-indicators .dash-outer-box').css('border-top', '0px none');

    $("#data-dashboard-tabs > ul > li").on('mouseenter', function () {
      $('#data-dashboard-tabs > ul > li.active-tab').removeClass('active-tab');
      $('#data-dashboard-tabs > ul > li > ul').css('display', 'none');
      $(this).addClass('active-tab');
      $('#data-dashboard-tabs > ul > li.active-tab > ul').css('display', 'block');
      var biggestHeight = $('#data-dashboard-tabs > ul > li.active-tab > ul').height();
      $(this).parent().height(biggestHeight + 60);

      $('#data-dashboard-tabs > ul > li.active-tab > ul > li.last > span').click(function () {
        $('#data-dashboard-tabs > ul > li.active-tab').removeClass('active-tab');
        $('#data-dashboard-tabs > ul > li > ul').css('display', 'none');
        $('#view-country-indicators .dash-outer-box').css('border-top', '1px solid #cccccc');
        $('#data-dashboard-tabs > ul > li').parent().css('height', 'auto');
      });
    });

    //JavaScript to your HTML to launch iCheck plugin
    $('input').iCheck({
      checkboxClass: 'icheckbox_polaris',
      radioClass: 'iradio_polaris',
      increaseArea: '-10%' // optional
    });

    $('.filter-option input').iCheck({
      checkboxClass: 'icheckbox_futurico',
      radioClass: 'iradio_futurico',
      increaseArea: '20%' // optional
    });

//    $("#data-dashboard-tabs > ul > li a").bind("click", function () {
//      $("#data-dashboard-tabs .loader-img").addClass('active');
//    });


//    if ('#data-dashboard-tabs ul li ul li #cm_age_by_18_15').
//      if($('#data-dashboard-tabs ul li ul li .iradio_polaris').hasClass('checked')) {
//        alert('123');
//        $('#filters').css('display', 'none');
//      }


  });


})(jQuery);
