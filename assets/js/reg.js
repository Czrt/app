$(function() {
    $('.haoma input').focus(function() {
        $(this).next().css('font-size', '14px')
    }).blur(function() {
        // $(this).next().css('font-size', '0')

    })
})