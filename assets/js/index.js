$(function() {
    var index = 0;
    var len = $('.lunbo li img').length;
    setInterval(function() {
        lun(function() {
            index = ++index >= len ? 0 : index;
        })
    }, 5000)
    $('.lol a').mouseover(function() {
        lun(() => {
            index = $(this).text();
        })
    })
    $('.lunbo-left').click(function() {
        lun(function() {
            index = --index < 0 ? len - 1 : index;
        })
    })
    $('.lunbo-right').click(function() {
        lun(function() {
            index = ++index > len - 1 ? 0 : index;
        });
    })

    function lun(cb) {
        $('.lunbo img').eq(index).fadeOut(600);
        $('.lol a').eq(index).removeClass();
        cb()
        $('.lunbo img').eq(index).fadeIn(600);
        $('.lol a').eq(index).addClass('active');
    }
})