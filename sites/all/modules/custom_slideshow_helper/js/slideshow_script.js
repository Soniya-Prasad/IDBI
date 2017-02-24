(function ($) {

    $(document).ready(function () {

        $('#slideshow-detail-page #slideshow-main .flexslider').flexslider({
            smoothHeight: true,
            slideshow: false,
            controlNav: false,
            prevText: "",
            nextText: ""
        });

        $('#slideshow-main .flexslider').flexslider({
            slideshow: false,
            controlNav: false,
            prevText: "",
            nextText: ""
        });

        if ($('.slideshow-image').length > 0) {
            $('.slideshow-image').prepend('<span class="slideshow-image-overlay"></span>');
            $('body').append('<div id="slideshow-main"><div id="image-slideshow"></div></div>');
            $('body').append('<div class="slideshow-close"></div>');
        }

        $('.slideshow-image').click(function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var formData = {"n_url": href};
            $.ajax({
                type: 'POST',
                url: '/slideshow/ajax',
                data: formData,
                dataType: 'html',
                beforeSend: function () {
                    $('#image-slideshow').addClass('slideshow-open');
                    $('.slideshow-close').show();
                },
                success: function (data) {
                    $('#image-slideshow').html(data);
                    responsiveSlideshow();



                    $('#image-slideshow .flexslider').flexslider({
                        slideshow: false,
                        controlNav: false,
                        prevText: "",
                        nextText: ""

                    });
                }
            });
        });

        $('.slideshow-close').click(function (e) {
            $(this).hide();
            $('#image-slideshow').html('');
            $('#image-slideshow').removeClass('slideshow-open');
        });

        $(window).resize(function () {
            responsiveSlideshow();
        });
    });


    /*function responsiveSlideshow() {
     var ht = $('#image-slideshow .views-field-title').outerHeight(true);
     var hd = $('#image-slideshow .views-field-field-date').length > 0 ? $('#image-slideshow .views-field-field-date').outerHeight(true) : 0;
     var hs = $('#image-slideshow').height() - (2 * ht) - hd;
     var ws = $('#image-slideshow').width();
     $('#image-slideshow .flexslider .slides li').each(function () {
     var $img = $(this).find('img');
     var hi = $img.attr('height');
     var wi = $img.attr('width');
     var rs = ws / hs;
     var ri = wi / hi;
     if (rs > ri) {
     var nwi = wi * hs / hi;
     var nhi = hs;
     } else {
     var nwi = ws;
     var nhi = hi * ws / wi;
     }
     $img.height(nhi);
     $img.width(nwi);

     var $caption = $(this).children('.views-field-field-slide-caption');
     var hc = $caption.outerHeight();
     var nhc = hs - nhi + ht;
     if (hc > nhc) {
     $caption.css({bottom: -nhc})
     } else {
     $caption.css({bottom: -hc});
     }
     });
     }*/

    function responsiveSlideshow() {

        var ht = $('#image-slideshow .views-field-title').outerHeight(true);
        var hs = $('#image-slideshow').height() - (ht * 2);
        var ws = $('#image-slideshow').width();

        $('#image-slideshow .flexslider .slides li').each(function () {
            var $caption = $('#image-slideshow .flexslider .slides li').children('.views-field-field-slide-caption');
            //console.log($caption);
            var hc = $caption.height();
            //var hi = 596; //default height for slideshow for intial load of slideshow.
            var $img = $(this).find('img');
            var hi = $img.attr('height');
            var wi = $img.attr('width');
            var rs = ws / hs;
            var ri = wi / hi;

            if (rs > ri) {
                var nwi = wi * hs / hi;
                var nhi = hs;
            } else {
                var nwi = ws;
                var nhi = hi * ws / wi;
            }

            console.log(hc);
            if ($(window).width() >= 980) {
                var hs = $('#image-slideshow').height() - (ht + 10);
                $img.css({"width": "auto", "height": hs});
                $("#slideshow-main .views-field-field-slide-caption").css({"padding": "15px 8%", "width": "84%"});

            }
            else {
                $img.height(nhi);
                $img.width(nwi);
            }
//            $img.height(nhi);
//            $img.width(nwi);

            var $caption = $(this).children('.views-field-field-slide-caption');
            var hc = $caption.outerHeight();

            //var $field = $(this).children('.views-field-field-slide-caption .field-content');
            //var mt = $field.outerHeight();
            //console.log(mt);
            //$caption.css({bottom: 0});
            if ($(window).width() >= 980) {
                $caption.css({bottom: 0});
            }
            else {
                $caption.css({bottom: -hc});
                if (hc > (hs - nhi + ht)) {

                    $caption.css({bottom: -(hs - nhi + ht)});
                } else {

                    $caption.css({bottom: -hc});
                }
            }


        });
    }

})(jQuery);