$(function () {

    let megaMenuUrl = 'test.php';
    // 跑馬燈
    $(".marquee-btn-close").click(function () {
        $(this).siblings().remove();
        $(this).remove();
        $('.sideMenu').css('top','96px');
        $('.package-wrapper').css('top', '207px');
    });

    $(".search-btn").click(function() {
        $(this).parent().toggleClass('active');
    }) 

    // 第一層 hover 時
    $('.first-level .list-styled-item').hover(function() {
        let index = $(this).index(); 
        let length = $(this).parent().children().length;
        let categoryId = $('.second-level').eq(index).find('li:first').attr('data-category-id');
        let parent = $(this).parents('.dropdown-menu');
        $(this).addClass('active').siblings().removeClass('active');
        parent.find($('.second-level')).eq(index).addClass('show').siblings().removeClass('show');
        parent.find($('.second-level')).eq(index).find('li:first').addClass('active').siblings().removeClass('active');
        parent.find($(`.third-level[data-category-id="${categoryId}"`)).addClass('show').siblings().removeClass('show');;
    });

    // 第二層 hover 時 
    $('.second-level .list-styled-item').hover(function() {    
        let categoryId = $(this).attr('data-category-id');
        $(this).addClass('active').siblings().removeClass('active');
        $(`.third-level[data-category-id="${categoryId}"`).addClass('show').siblings().removeClass('show');;
    });   
    
    // goTop 點擊效果
    $('.goTop').on('click', function() {
        $("html, body").scrollTop(0);
        return false;
    })

    // goTop 出現時機
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

    // account-006.html
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })    
});
