$(function () {
   
    // cart
    // 加到最愛
    $('.action-love').on('click', function() {
        // 如果沒有要記錄顏色的話，抓 id 丟後端
        let productId = $(this).attr('data-product-id');
        // Do Ajax
        // 0412 成功的話跳訊息並添加 active
        $(this).addClass('active');
        console.log(productId);
    })

    // 網頁版 顏色
    $('.product-card').find('.color-item').on('mouseenter click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.product-card').find(".card-img img").first().attr("src", $(this).attr('data-img'));
        $(this).parents('.product-card').find(".card-img img").last().attr("src", $(this).attr('data-img-hover'));
        $(this).parent().next().find('p').text($(this).attr('data-color-name'));  
    });

    // 網頁版 購物車
    $('.action-cart').on('click', function() {
        
        if (window.screen.width >= 992) {
            // 確認哪個產品要顯示 product-sub-card，將不是目標的其他產品 product-sub-card 刪除
            let target = $(this).parent().find('.product-sub-card');
            $('.product-sub-card').not(target).remove();

            // 抓產品 ID
            let productId = $(this).attr('data-product-id');
            
            // 複製該產品的顏色選項
            let colors = $(this).parents('.card-content').find('.color-items').html();
			let activeColor =$(this).parents('.card-content').find('.color-item.active').attr('data-color-id');
            console.log(activeColor)

            // 0426 未選擇時顏色預設
            let activeColorText =$(this).parents('.card-content').find('.color-item.active').attr('data-color-name');
            console.log(activeColorText) 
            
            // 0412 取得產品的尺寸及賣光的尺寸
            let sizes = $(this).data('sizes');
            let soldOut = $(this).attr('data-sizes-sold-out');
            let soldOutItems = JSON.parse(soldOut);
            console.log(soldOutItems[activeColor])
            // 0412 尺寸 改為先列出所有尺寸，後續再根據何種顏色判斷該顏色是否已售完
            let sizeItems = ``;
            sizes.forEach(function(e, i) {
                sizeItems += `<div class="size-item mt-2 me-2" data-size="${e}"><span>${e}</span></div>`
            })

            // 0426 未選擇時顏色預設
            let cartItem =`
            <div class="product-sub-card">
                <div class="card border-0">
                    <div class="card-body">
                        <div class="sub-color-wrapper">
                            <div class="sub-color-name">
                                <p class="text-start">顏色：</p>
                                <span>${activeColorText}</span>
                            </div>
                            <div class="sub-color-items d-flex">
                                ${colors}
                            </div>
                        </div>	
                        <div class="sub-size-wrapper">
                            <div class="sub-size">
                                <p class="text-start">尺寸</p>
                            </div>	
                            <ul class="sub-size-items">
                                ${sizeItems}
                            </ul>
                        </div>
                        <div class="sub-action-wrapper">
                            <div class="row g-0">
                                <div class="col px-0">
                                    <button class="btn btn-lg sub-action-buy">立即結帳</button>
                                </div>
                                <div class="col px-0">
                                    <button class="btn btn-lg sub-action-add">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            if(!target.length) {
                $(this).after(cartItem);
                
                // 取得 activeColor 的顏色，該顏色已售完尺寸加上 sold_out
                let porductCardBox = $(this).parents('.product-card');
                if(soldOutItems.hasOwnProperty(activeColor)) {
                    
                    soldOutItems[activeColor].forEach(function(i){
                        porductCardBox.find(`.sub-size-items .size-item[data-size="${i}"]`).addClass('sold_out'); 
                    });
                };

                // 如果該尺寸已售完，選澤未售完尺寸的第一個作為預設
                $(this).parent().find('.size-item:not(.sold_out)').first().addClass('active');

				// 變更 input 值
				$('input[name="product-id"]').val(productId);	
				$('input[name="product-color"]').val(activeColor);
				$('input[name="product-size"]').val($(this).parent().find('.size-item.active').attr('data-size'));
                
				// product-sub-card 顏色點擊時
                $('.product-sub-card .color-item').on('click', function() {
                    let parents = $(this).parents('.card');
                    let colorId = $(this).attr('data-color-id') 
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).parents('.card-content').find('.color-items .color-item').eq($(this).index()).click();
                    $(this).parent().prev().find('span').text($(this).attr('data-color-name'));
					$('input[name="product-color"]').val(colorId);
                    
                    // 0412 點擊顏色時，設定該顏色已售完尺寸
                    parents.find('.sub-size-items .size-item').removeClass('sold_out');
                    if(soldOutItems.hasOwnProperty(colorId)) {
                        soldOutItems[colorId].forEach(function(i){
                            parents.find(`.sub-size-items .size-item[data-size="${i}"]`).addClass('sold_out'); 
                        });
                    }; 
                });
    
				// product-sub-card 尺寸點擊時
                $('.product-sub-card .size-item').on('click', function() {
                    if(!$(this).hasClass('sold_out')) {
                        $(this).addClass('active').siblings().removeClass('active');
						$('input[name="product-size"]').val($(this).attr('data-size'));
                    }
                });

                $('.product-sub-card').on('mouseleave', function() {
                    $(this).remove();
                })
                
                $('.sub-action-buy').on('click', function() {
                    // 參數帶入網址後到購物車頁面或 Ajax 後跳到購物車頁面
                    let productId = $('input[name="product-id"]').val();
					let quantity = $('input[name="product-quantity"]').val(1).val();
					let color = $('input[name="product-color"]').val(); 
					let size = $('input[name="product-size"]').val();
					console.log('產品 ID:'+productId, '顏色：'+color, '尺寸：'+ size, '數量：'+quantity);
                })
                $('.sub-action-add').on('click', function() {
                    // TODO Ajax 
					let productId = $('input[name="product-id"]').val();
					let quantity = $('input[name="product-quantity"]').val(1).val();
					let color = $('input[name="product-color"]').val(); 
					let size = $('input[name="product-size"]').val();
					console.log('產品 ID:'+productId, '顏色：'+color, '尺寸：'+ size, '數量：'+quantity);
                    // 0412 成功的話跳訊息並添加 active、更改購物車數量
                    $(this).parents('.action-wrapper').find('.action-cart').addClass('active')
                    let count = parseInt($('.cart-items-count').attr('data-cart-items'));
                    $('.cart-items-count').attr('data-cart-items', ++count);
                })
                
            } else {
                target.remove();
            }
        }
	});

	// 手機版 cart offcanvas 開啟
    $('#offcanvasCartBottom').on('show.bs.offcanvas', function(event) {
        let productId = $(event.relatedTarget).attr('data-product-id') ;
        let content = $(event.relatedTarget).parents('.card-content') ;
        let pictures = content.prevAll('.card-img').html();
        let original = content.find('.card-price').attr('data-origin');
        let special = content.find('.card-price').text();
        let colors = content.find('.color-items').html(); 
        let activeColor = content.find('.color-item.active').attr('data-color-id');

        // 0412 取得產品的尺寸及賣光的尺寸
        let sizes = $(event.relatedTarget).data('sizes');
        let soldOut = $(event.relatedTarget).attr('data-sizes-sold-out');
        let soldOutItems = JSON.parse(soldOut);

        // offcanvas 帶入資料
        // 圖片
        $('<div>').append(pictures).appendTo($('.offcanvas_picture'));
        // 原價
        $('.offcanvas_price').find('.original').text(original);
        // 優惠價
        $('.offcanvas_price').find('.special').text(special); 
        // 顏色
        
        $('<div/>').addClass('color-items').append(colors).appendTo($('.offcanvas_colors'));
		
		$('input[name="product-color"]').val($(this).attr('data-color-id'));
        
        // 尺寸
        // 0412 尺寸 改為先列出所有尺寸，後續再根據何種顏色判斷該顏色是否已售完
        let sizeItems = ``;
        sizes.forEach(function(e, i) {
            sizeItems += `<div class="size-item mt-2 me-2" data-size="${e}"><span>${e}</span></div>`
        })
        // let sizeItems = ``;
        // sizes.forEach(function(e, i) {
        //     let sold_out='';

        //     if(soldOut.includes(e)) {
        //         sold_out = 'sold_out';
        //     }
            
        //     sizeItems += `<div class="size-item mt-2 me-2 ${sold_out}" data-size="${e}"><span>${e}</span></div>`
        // })
		
        $('<div/>').addClass('size-items').append(sizeItems).appendTo($('.offcanvas_sizes'));

        // 取得 selected 的顏色，該顏色已售完尺寸加上 sold_out
        
        if(soldOutItems.hasOwnProperty(activeColor)) {
            console.log(activeColor);
            soldOutItems[activeColor].forEach(function(i){
                $('.cart-offcanvas').find(`.size-items .size-item[data-size="${i}"]`).addClass('sold_out'); 
            });
        };

        $(this).find('.size-item:not(.sold_out)').first().addClass('active');
		
		// 變更 input 值
		$('input[name="product-id"]').val(productId);	
		$('input[name="product-color"]').val(activeColor);
		$('input[name="product-size"]').val($(this).find('.size-item.active').attr('data-size'));
        
        // offcanvas 開啟時點擊顏色
        $('.cart-offcanvas').find('.color-item').on('click', function() {
            // 連動 product-card 的顏色及圖片
            content.find('.color-item').eq($(this).index()).click();

            // offcanvas 點擊顏色時也要切換圖片
            $(this).parents('.cart-offcanvas').find(".offcanvas_picture img").first().attr("src", $(this).attr('data-img'));
            $(this).parents('.cart-offcanvas').find(".offcanvas_picture img").last().attr("src", $(this).attr('data-img-hover'));

            // 選擇的顏色加上 active 並刪除之前的選擇
            $(this).addClass('active').siblings().removeClass('active'); 

            // input hidden product-color 變更值 
			$('input[name="product-color"]').val($(this).attr('data-color-id'));

            // 0412 點擊顏色時，設定該顏色已售完尺寸
            let colorId = $(this).attr('data-color-id') 
            $('.cart-offcanvas').find('.size-items .size-item').removeClass('sold_out');
            if(soldOutItems.hasOwnProperty(colorId)) {
                soldOutItems[colorId].forEach(function(i){
                    $('.cart-offcanvas').find(`.size-items .size-item[data-size="${i}"]`).addClass('sold_out'); 
                });
            }; 
        })

        // offcanvas 開啟時點擊尺寸
        $('.cart-offcanvas').find('.size-item').on('click', function() {            
            // 選擇的顏色加上 active 並刪除之前的選擇，sold out 的尺寸點擊無效果
            if(!$(this).hasClass('sold_out')) {
                $(this).addClass('active').siblings().removeClass('active'); 
				
				// input hidden product-size 變更值 
				$('input[name="product-size"]').val($(this).attr('data-size'));
            }
        })
    })

    // 手機版 cart offcanvas 關閉
    $('#offcanvasCartBottom').on('hidden.bs.offcanvas', function(event) {
        $(this).find('picture').remove();
        $(this).find('.color-items').remove();
        $(this).find('.size-items').remove();
    })

    // 手機版 加入購物車按鈕
    $('.mobile_action_add').on('click', function() {		
		let productId = $('input[name="product-id"]').val();
        let quantity = $('input[name="product-quantity"]').val($('input[name="offcanvas-quantity"]').val()).val();
        let color = $('input[name="product-color"]').val(); 
        let size = $('input[name="product-size"]').val();
        
        console.log('產品 ID:'+productId, '顏色：'+color, '尺寸：'+ size, '數量：'+quantity);
        // Do Ajax
        // 0412 成功的話跳訊息並添加 active、更改購物車數量
        $(`.action-cart[data-product-id="${productId}"]`).addClass('active');
        let count = parseInt($('.cart-items-count').attr('data-cart-items'));
        $('.cart-items-count').attr('data-cart-items', ++count);

    })
});
