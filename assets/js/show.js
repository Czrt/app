$(function() {
    $('.tiao').mousedown(function(e) {
        var Y = e.offsetY;
        var Z = $(this).offset().top;
        var X = Y + Z;
        var Q = -($('.wenben2-zhu-zi').height() - $('.wenben2-zhu').height());
        $(document).mousemove(function(e) {
            var YY = e.pageY;
            var b = -Q / 100;
            $('.tiao').css('top', YY - X);
            $('.wenben2-zhu').css('top', -b * (YY - X));
            if (YY - X <= 0) {
                $('.tiao').css('top', 0);
                $('.wenben2-zhu').css('top', 0)
            }
            if (YY - X >= 100) {
                $('.tiao').css('top', 100);
                $('.wenben2-zhu').css('top', Q)
            }
        })
        $(document).mouseup(function() {
            $(document).unbind('mousemove');
        })
    })

    $('.quanxuan').click(function() {
        $('.danxuan').prop('checked', $(this).prop('checked'));
    })
    $('.danxuan').click(function() {
        console.log($('.danxuan').length);
        if ($('.danxuan:checked').length == $('.danxuan').length) {
            $('.quanxuan').prop('checked', true);
        } else {
            $('.quanxuan').prop('checked', false);

        }
    })

})