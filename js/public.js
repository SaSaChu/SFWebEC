$(function () {
   
    $(".marquee-btn-close").click(function () {
        $(this).siblings().remove();
        $(this).remove();
        $('.sideMenu').css('top','98px');
        $('.package-wrapper').css('top', '207px');
    });

    $(".search-btn").click(function() {
        $(this).parent().toggleClass('active');
    })

    $('.goTop').on('click', function() {
        $("html, body").scrollTop(0);
        return false;
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
