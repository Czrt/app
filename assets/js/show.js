$(function() {
    $('.tiao').mousedown(function() {
        var X = $(this).offset().top;
        var Y = $(this).offset().left;
        console.log($(this).position().top);
        $(document).mousemove(function(e) {
            console.log(e.pageX, e.pageY);
            var XX = e.pageX - X;
            var YY = e.pageY - Y;
            // console.log(YY);
            $('.tiao').css('top', YY - 200);
        })
        $(document).mouseup(function() {
            $(document).unbind('mousemove');
            // console.log(111);
        })
    })

})