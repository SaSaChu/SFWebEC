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

    // 第一層 hover 時
    $('.first-level .list-styled-item').hover(function() {
        // 處理第二層資料
        $('.second-level').empty();
        // ajax 撈到資料後 example
        let title = $(this).find('.list-styled-link').text();
        let example = `
        <div class="mb-3 fw-bold heading">${title}</div>
        <ul class="list-styled mb-5 px-2 mb-md-0">
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}1</a>
            </li>
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}2</a>
            </li>
            <li class="list-styled-item">
                <a class="list-styled-link" href="#">${title}3</a>
            </li>
        </ul>`
        $('.second-level').append(example);

        // 第二層 hover 時 
        $('.second-level .list-styled-item').hover(function() {
            // 處理第三層資料
            $('.third-level .row').empty();
            // ajax 撈到資料後 example
            let title = $(this).find('.list-styled-link').text();
            // 太多的話需要分兩個 col-6
            let example = `
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
            $('.third-level .row').append(example);
        },function() {
            
        });
        
    },function() {
        
    });
    
    

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
