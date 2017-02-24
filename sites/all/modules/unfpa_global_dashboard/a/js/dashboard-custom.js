(function ($) {

  $(document).ready(function () {
    $('.highcharts-legend').appendTo( "#legend svg" );
    
    var biggestHeight = $('.open-data-dashboard-tabs > ul > li.active-tab > ul').height();
    $('.open-data-dashboard-tabs > ul > li').parent().height(biggestHeight + 60);
    $('#view-country-indicators .dashboard-outer-box').css('border-top', '0px none');

    $(".open-data-dashboard-tabs > ul > li").on('mouseenter', function () {
      $('.open-data-dashboard-tabs > ul > li.active-tab').removeClass('active-tab');
      $('.open-data-dashboard-tabs > ul > li > ul').css('display', 'none');
      $(this).addClass('active-tab');
      $('.open-data-dashboard-tabs > ul > li.active-tab > ul').css('display', 'block');
      var biggestHeight = $('.open-data-dashboard-tabs > ul > li.active-tab > ul').height();
      $(this).parent().height(biggestHeight + 60);

      $('.open-data-dashboard-tabs > ul > li.active-tab > ul > li.last > span').click(function () {
        $('.open-data-dashboard-tabs > ul > li.active-tab').removeClass('active-tab');
        $('.open-data-dashboard-tabs > ul > li > ul').css('display', 'none');
        $('#view-country-indicators .dashboard-outer-box').css('border-top', '1px solid #cccccc');
        $('.open-data-dashboard-tabs > ul > li').parent().css('height', 'auto');
      });
      
    });
    
    $('.dashboard-country-outer-box .section-indicators ul li.last span').click(function () {
      $(this).parent('li').parent('ul').hide();
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
    
    $('.square-input-element input').iCheck({
      checkboxClass: 'icheckbox_futurico',
      radioClass: 'iradio_futurico',
      increaseArea: '20%' // optional
    });

  });


})(jQuery);
