$(function () {
   
    $(".marquee-btn-close").click(function () {
        $(this).siblings().remove();
        $(this).remove();
    });

    $(".search-btn").click(function() {
        $(this).parent().toggleClass('active');
    })

    // goTop
    let offsetTop;

    if($('.category-section').length) {
        offsetTop = $('.header').height() + $('.banner-section').height();
    } else {
        offsetTop = $('body').height() / 3;
    }

    $(window).on('scroll', function () {
        if($(window).scrollTop() > offsetTop) {
            $('.goTop').addClass('show');
        } else {
            $('.goTop').removeClass('show'); 
        } 
    })
     
});
