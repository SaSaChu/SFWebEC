$(function() {
	if (window.screen.width > 769) { 
		var thumnanilSwiper = new Swiper(".thumnanil-swiper", {
			spaceBetween: 10,
			slidesPerView: 5,
			autoHeight: true,
			direction: 'vertical',
			freeMode: true,
			watchSlidesProgress: true,
		});
	}

	var productImgSwiper = new Swiper(".product-img-swiper", {
		spaceBetween: 10,
		navigation: {
			// nextEl: ".swiper-button-next",
			// prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: thumnanilSwiper,
		},
	});

	var swiperLike = new Swiper(".like-swiper", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.likeWeb-button-next',
			prevEl: '.likeWeb-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},

			1024: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
		},
	});

	var swiperRecent = new Swiper(".recent-swiper", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.recentWeb-button-next',
			prevEl: '.recentWeb-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},

			1024: {
				slidesPerView: 5,
				slidesPerGroup: 5,
				
			},
		},
	});

	// 點擊也許你也喜歡顏色
	$('.like-item .color-item').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.product-card').find(".card-img img").first().attr("src", $(this).attr('data-img'));
        $(this).parents('.product-card').find(".card-img img").last().attr("src", $(this).attr('data-img-hover'));
        $(this).parent().next().find('p').text($(this).attr('data-color-name'));  
	})	

	$('.recent-item .color-item').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.product-card').find(".card-img img").first().attr("src", $(this).attr('data-img'));
        $(this).parents('.product-card').find(".card-img img").last().attr("src", $(this).attr('data-img-hover'));
        $(this).parent().next().find('p').text($(this).attr('data-color-name'));  
	})

	// 產品圖放大
	$('.blowup-img').map(function() {
		$(this).blowup({
			scale: 2,
		});
	})

	// 點擊網頁版顏色
	$('.detail_colors .color-item').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.card-body').find('.color-name p').text($(this).find('span').attr('data-color-name'));
		$('input[name="product-color"]').val($(this).attr('data-color-id'));
	})
	
	// 點擊網頁版尺寸
	$('.detail_sizes .size-item').click(function() {
		if(!$(this).hasClass('sold_out')) {
			$(this).addClass('active').siblings().removeClass('active');
			$('input[name="product-size"]').val($(this).attr('data-size'));
		}
	})

	// 點擊網頁版數量
	$('select[name="detail_quantity"]').on('change', function() {
		$('input[name="product-quantity"]').val($(this).val());
	})

	// 立即購買
	$('.action-buy').on('click', function() {
		let color = $('.detail_colors').find('.color-item.active').attr('data-color-id');
		let size = $('.detail_sizes').find('.size-item.active').attr('data-size');
		let quantity = $('select[name="detail_quantity"]').val();
		console.log(color, size, quantity);
		// 參數帶入網址後到購物車頁面或 Ajax 後跳到購物車頁面
	});

	// 加入購物車
	$('.action-cart').on('click', function() {
		let color = $('.detail_colors').find('.color-item.active').attr('data-color-id');
		let size = $('.detail_sizes').find('.size-item.active').attr('data-size');
		let quantity = $('select[name="detail_quantity"]').val();
		console.log(color, size, quantity);
		// Do Ajax
		// 成功的話跳訊息
	});

	// 手機版 cart offcanvas 開啟
    $('#offcanvasDetailBottom').on('show.bs.offcanvas', function(event) {
        let content = $(event.relatedTarget).parents('.detail_content');
        let activeColor = content.find('.color-item.active');
		let activeSize = content.find('.size-item.active'); 
		console.log(activeColor.index())
    
		// 變更 offcanvas 顏色跟尺寸的 active
		$('.detail-offcanvas').find('.color-item').eq(activeColor.index()).addClass('active');
		$('input[name="product-color"]').val(activeColor.attr('data-color-id'));
		$('.detail-offcanvas').find('.size-item').eq(activeSize.index()).addClass('active');
		$('input[name="product-size"]').val(activeSize.attr('data-size'));
        
        // offcanvas 開啟時點擊顏色
        $('.detail-offcanvas').find('.color-item').on('click', function() {
            // 連動 product-card 的顏色
			console.log($(this).index());
            content.find('.color-item').eq($(this).index()).click();

            // 選擇的顏色加上 active 並刪除之前的選擇
            $(this).addClass('active').siblings().removeClass('active'); 
        })

        // offcanvas 開啟時點擊尺寸
        $('.detail-offcanvas').find('.size-item').on('click', function() {            
            // 選擇的顏色加上 active 並刪除之前的選擇，sold out 的尺寸點擊無效果
            if(!$(this).hasClass('sold_out')) {
                $(this).addClass('active').siblings().removeClass('active'); 
				content.find('.size-item').eq($(this).index()).click();
            }
        })
    })

    // 手機版 cart offcanvas 關閉
    $('#offcanvasDetailBottom').on('hidden.bs.offcanvas', function(event) {
		$('.detail-offcanvas').find('.color-item').removeClass('active');
		$('.detail-offcanvas').find('.size-item').removeClass('active');
    })

    // 手機版 加入購物車按鈕
    $('.mobile_action_add').on('click', function() {		
        let quantity = $('input[name="product-quantity"]').val($('input[name="offcanvas-quantity"]').val()).val();
        let color = $('input[name="product-color"]').val(); 
        let size = $('input[name="product-size"]').val();
        console.log('產品 ID:productId', '顏色：'+color, '尺寸：'+ size, '數量：'+quantity);
        // Do Ajax
        // 成功的話跳訊息
    })
});