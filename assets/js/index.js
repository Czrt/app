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


    // ++++++++++++++++++++++++++++
    // 原生JS
    // var li = document.querySelectorAll('.yiru li');
    // var ul = document.querySelectorAll('.xxk ul');
    // for (var i = 0; i < li.length; i++) {
    //     li[i].index = i;
    //     li[i].onmouseover = function() {
    //         console.log(this.index);
    //         ul[this.index].style.display = 'block';
    //     }
    // }
    var index2 = 0;
    $('.yiru li').mouseover(function() {
        $('.xxk ul').css('display', 'none')
        index2 = $(this).index();
        $('.xxk ul').eq(index2).css('display', 'block');
    })

    function lun(cb) {
        $('.lunbo img').eq(index).fadeOut(600);
        $('.lol a').eq(index).removeClass();
        cb()
        $('.lunbo img').eq(index).fadeIn(600);
        $('.lol a').eq(index).addClass('active');
    }
})