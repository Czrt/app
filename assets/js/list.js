$(function() {
    var index = 0;
    var timer = 0;
    var len = $('.container-left ul li').length;

    function run() {

        timer = setInterval(function() {
            $('.container-left ol li').removeClass('active');
            index++;
            $('.container-left ol li').eq(index).addClass('active');
            if (index == len - 1) {
                $('.container-left ol li').eq(0).addClass('active');

            }
            $('.container-left ul').animate({ left: index * -663 }, 500, function() {
                if (index >= len - 1) {
                    $(this).css({ left: 0 });
                    index = 0;
                }
            });
        }, 3000)
    }
    run();
    $('.container ol li').mouseover(function() {
        $('.container-left ol li').removeClass('active');
        clearInterval(timer);
        index = $(this).index();
        $(this).addClass('active');
        $('.container-left ul').stop().animate({ left: index * -663 }, 500, )
    }).mouseout(function() {
        run();
    })

    // ###############3
})