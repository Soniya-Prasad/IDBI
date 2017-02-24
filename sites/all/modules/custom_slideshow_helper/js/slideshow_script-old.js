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
            $('body').append('<div id="image-slideshow"></div>');
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
                    $('#image-slideshow .flexslider').flexslider({
                        slideshow: false,
                        controlNav: false,
                        prevText: "",
                        nextText: ""
                    });

                    $('#image-slideshow .flexslider .slides img').load(function () {
                        responsiveSlideshow();
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

    function responsiveSlideshow() {
        var ht = $('#image-slideshow .views-field-title').outerHeight(true);
        var hs = $('#image-slideshow').height() - (2 * ht);
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
            if (hc > (hs - nhi + ht)) {
                $caption.css({bottom: -(hs - nhi + ht)});
            } else {
                $caption.css({bottom: -hc});
            }
        });
    }

})(jQuery);