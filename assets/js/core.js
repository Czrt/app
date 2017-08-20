$(function() {
    $('.xiezai a').mouseover(function() {
        $(this).next().css('display', 'block');
    })
    $('.xiezai div').click(function() {
        $(this).css('display', 'none');
    })

    $('.lianxi input').focus(function() {
        $(this).val('');
    }).blur(function() {
        $(this).val('输入联系QQ')
    })


    $('.click1').click(function() {
        $('.content').css('display', 'block');
        $('.content2').css('display', 'none');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    })
    $('.click2').click(function() {
        $('.content2').css('display', 'block');
        $('.content').css('display', 'none');
        $(this).siblings().removeClass('active');

        $(this).addClass('active');
    })

    $('.click3').click(function() {
        $('.shadow').css('display', 'flex');
        $('.click6').prop('checked', false);
    })
    $('.click5').click(function() {
        $('.shadow').css('display', 'none')
    })
    $('.click6').click(function() {
        $('.click3').prop('checked', false);
    })



    $('.click4').focus(function() {
        $(this).val('');
    }).blur(function() {
        $(this).val('用户名/手机/邮箱');
    })
})