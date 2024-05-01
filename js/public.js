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
        $(this).addClass('active').siblings().removeClass('active');
        
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
            
            // 給你 分類編號 id，帶入上層分類 parent_category_id 找出上層分類為 x 的子分類，
            // 吐出 分類編號 id 、分類自訂代號 custom_id、分類名稱 name

            // ajax 撈到資料後，處理第三層資料 example
            let title = $(this).find('.list-styled-link').text();
            

            // 太多的話需要分兩個 col-6
            let example = `
            
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
               `
            $('.third-level .list-styled').empty();
            $('.third-level .list-styled').append(example);
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

    // account-006.html
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // 測試用 start
    // test ajax
    // $.ajax({
    //     type: 'POST',
    //     url: megaMenuUrl,
    //     data: {
    //         roomType : 'male',
    //     },
    //     success: function(res) {
    //         if(res.success) {
    //             console.log(res);
    //         }
            
    //     },
    //     error: function() {}

    //  });

    // 0430 mega menu
    // 線上購物、男館、女館 由後端先吐出 roomtype 裡的所有分類及分類圖片，及 預設資料：category_level = 1 的排序第一個的所有子分類的分類編號 id 、分類名稱 name、category_level = 2 的排序第一個的所有產品的網址、名稱

    // 第ㄧ層 hover 時
        // 給你 分類編號 id，到 category，找 parent_category_id 是 分類編號 id 的所有子分類的分類編號 id 、分類名稱 name 及 預設資料：parent_category0_id = 分類編號 id 的排序第一個的所有產品的網址、名稱
        // 給我 分類編號 id 、分類名稱 name、圖片、預設資料
    
    // 第二層
        // 給你 分類編號 id，到 product_category 取得類別內所有商品
        // 吐出 該類別內所有商品網址、商品名稱
        // 取得類別內商品
        // public function getCategoryProduct($id)
        // {
        //     $datalist = DB::table('product_category')
        //                 ->leftJoin('product', function ($join) {
        //                     $join->on('product.id', '=', 'product_category.product_id');
        //                 })
        //                 ->leftJoin('file_t', function ($join) {
        //                     $join->on('file_t.file_no', '=', 'product.picture');
        //                 })
        //                 ->select(
        //                     'product_category.product_id',
        //                     'product_category.category_id',
        //                     'product_category.disp_order',
        //                     'product.product_name',
        //                     'product.sale_price',
        //                     'file_t.file_path'
        //                 )
        //                 ->where('category_id', '=', $id)
        //                 ->where('product.deleted_at', null)
        //                 ->orderBy('product_category.disp_order', 'asc')
        //                 ->get();
        //     return $datalist;
        // }

    // 第三層
    // 顯示網址到產品詳細頁 ex: https://sunflower.chiliman.com.tw/products/male/underpants/3

    // 線上購物
    // $('.mega-menu').on('click', function() {
    //     let roomType = $(this).attr('data-room-type');
    //     $.ajax({
    //         type: 'GET',
    //         url: megaMenuUrl,
    //         // dataType: 'json',
    //         data: {
    //             roomType : roomType,
    //         },
    //         success: function(res) {
    //             if(res.success) {
    //                 // console.log(res.data.length);
    //                 // 第一層 
    //                 let firstExample = `
    //                     <li class="list-styled-item">
    //                         <a class="list-styled-link" href="#" data-category-id=${id} >${title}1</a>
    //                     </li>
    //                     <li class="list-styled-item">
    //                         <a class="list-styled-link" href="#" data-category-id=${id}>${title}2</a>
    //                     </li>
    //                     <li class="list-styled-item">
    //                         <a class="list-styled-link" href="#" data-category-id=${id}>${title}3</a>
    //                     </li>
    //                 `
                    
    //                 $('.first-level .list-styled').empty();
    //                 $('.first-level .list-styled').append(secondExample);

    //                 // secondExample

    //                 // 第一層 hover 時 
    //                 $('.first-level .list-styled-item').hover(function() {
    //                     $(this).addClass('active').siblings().removeClass('active');
    //                     let levelFirstCategoryId = $(this).attr('data-category-id');
    //                     $.ajax({
    //                         type: 'GET',
    //                         url: megaMenuUrl,
    //                         data: {
    //                             categoryId : levelFirstCategoryId,
    //                         },
    //                         success: function(res) {
    //                             if(res.success) {
    //                                 // for loop do 
    //                                 let secondExample = `
    //                                     <li class="list-styled-item">
    //                                         <a class="list-styled-link" href="#" data-category-id=${id}>${title}1</a>
    //                                     </li>
    //                                     <li class="list-styled-item">
    //                                         <a class="list-styled-link" href="#" data-category-id=${id}>${title}2</a>
    //                                     </li>
    //                                     <li class="list-styled-item">
    //                                         <a class="list-styled-link" href="#" data-category-id=${id}>${title}3</a>
    //                                     </li>
    //                                 `
    //                                 $('.second-level .list-styled').empty();
    //                                 $('.second-level .list-styled').append(secondExample);

    //                                 // 第二層 hover 時 
    //                                 $('.second-level .list-styled-item').hover(function() {
    //                                     let levelSecondCategoryId = $(this).attr('data-category-id'); 
    //                                     $(this).addClass('active').siblings().removeClass('active');
    //                                     $.ajax({
    //                                         type: 'POST',
    //                                         url: megaMenuUrl,
    //                                         data: {
    //                                             categoryId : levelSecondCategoryId,
    //                                         },
    //                                         success: function(res) {
    //                                             if(res.success) {
    //                                                 // for loop do 
    //                                                 let thirdExample = `
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                     <li class="list-styled-item">
    //                                                         <a class="list-styled-link" href="${href}">${title} ▶ 5件1000</a>
    //                                                     </li>
    //                                                 `
    //                                                 $('.third-level .row').empty();
    //                                                 $('.third-level .row').append(thirdExample);
    //                                             }
                                                
                                               
    //                                         },
    //                                         error: function() {}

    //                                         }); 
    //                                     // 給你 分類編號 id，帶入上層分類 parent_category_id 找出上層分類為 x 的子分類，
    //                                     // 吐出 分類編號 id 、分類自訂代號 custom_id、分類名稱 name

    //                                     // ajax 撈到資料後，處理第三層資料 example
    //                                     let title = $(this).find('.list-styled-link').text();
                                        

    //                                     // 太多的話需要分兩個 col-6
                                        
    //                                 }); 
    //                             }
                                
    //                         },
    //                         error: function() {}
    //                     });

                        
    //                 });

    //                 // 第二層

    //                 // 第三層
    //             }
    //         },
    //         error: function(res) {
    //             console.log(roomType)
    //             console.log(res);
    //         }
    
    //      });
    // });


    
    // 測試用 end
});
