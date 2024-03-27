$(function () {

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

    // mega menu
    // 第一層 hover 時
    $('.first-level .list-styled-item').hover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        
        // ajax 撈到資料後，處理第二層資料 example:
        let title = $(this).find('.list-styled-link').text();
        let secondExample = `
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}1</a>
            </li>
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}2</a>
            </li>
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}3</a>
            </li>
        `

        $('.second-level .list-styled').empty();
        $('.second-level .list-styled').append(secondExample);

        // 第二層 hover 時 
        $('.second-level .list-styled-item').hover(function() {    
            $(this).addClass('active').siblings().removeClass('active');
            
            // ajax 撈到資料後，處理第三層資料 example
            let title = $(this).find('.list-styled-link').text();

            // 太多的話需要分兩個 col-6
            let example = `
            <div class="col-6">
                <ul class="list-styled mb-5 mb-md-0">
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="">${title} ▶ 5件1000</a>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="list-styled mb-5 px-2 mb-md-0">
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="#">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="">${title} ▶ 5件1000</a>
                    </li>
                    <li class="list-styled-item">
                        <a class="list-styled-link" href="">${title} ▶ 5件1000</a>
                    </li>
                </ul>
            </div>`
            $('.third-level .row').empty();
            $('.third-level .row').append(example);
        });   
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
     
});
