$(function() {
	// sideMenu 
	$('.closeSideBtn').click(function() {
		$(this).hide();
		
		$('.sideLeftMenu').addClass('hide');
		$('.openSideBtn').show();
		$(this).parent().addClass('openBtn');
		$('#product-lists').addClass('col-lg-10');
	});

	$('.openSideBtn').click(function() {
		$(this).hide();
		$('.sideLeftMenu').removeClass('hide');
		$('.closeSideBtn').show();
		$(this).parent().removeClass('openBtn');
		$('#product-lists').removeClass('col-lg-10');
	});
	
	// Ad
	var swiperAd = new Swiper(".ad-swiper", {
        slidesPerView: 1,
        watchSlidesProgress: true,
        loop: true,
		autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
		pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

	$('.color-item').on('mouseenter', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.card-body').prev().find("img").attr("src", $(this).attr('data-img'));
        $(this).parent().next().find('p').text($(this).find('span').attr('data-colorName'));
    });

	$('.item-action-cart').on('click', function() {
        if (window.screen.width < 500) {
            console.log("mobile");
        } else {
            let target = $(this).parent().find('.sub-card');
            $('.sub-card').not(target).remove();
            
            let cartItem =`
            <div class="sub-card">
                <div class="card border-0">
                    <div class="card-body">
                        <div class="color-wrapper">
                            <div class="color-name">
                                <p class="text-start">顏色：</p>
                                <span>灰色</span>
                            </div>
                            <div class="color-items d-flex">
                                <p class="color-item active"><span style="background-color: #818a9f;" data-color="灰色"></span></p>
                                <p class="color-item"><span style="background-color: #253766;" data-color="灰藍色"></span></p>
                                <p class="color-item"><span style="background-color: #c41232;" data-color="灰紅色"></span></p>
                            </div>
                        </div>	
                        <div class="size-wrapper">
                            <div class="size">
                                <p class="text-start">尺寸</p>
                            </div>	
                            <ul class="size-items">
                                <li class="size-item" data-size="xs">xs</li>
                                <li class="size-item" data-size="s">s</li>
                                <li class="size-item" data-size="m">m</li>
                                <li class="size-item active" data-size="l">l</li>
                            </ul>
                        </div>
                        <div class="action-wrapper">
                            <div class="row g-0">
                                <div class="col px-0">
                                    <button class="btn btn-lg add-checkout">立即結帳</button>
                                </div>
                                <div class="col px-0">
                                    <button class="btn btn-lg add-cart">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            if(!target.length) {
                $(this).after(cartItem);
                $('.sub-card .color-item').on('click', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).parent().prev().find('span').text($(this).find('span').attr('data-color')); 
                    // $(this).addClass('active').siblings().removeClass('active');
                    $(this).parents('.card-body').prev().find("img").attr("src", $(this).attr('data-img'));
                    $(this).parents('.card-body').next().find('p').text($(this).find('span').attr('data-colorName'));
                });
    
                $('.sub-card .size-item').on('click', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                });

                $('.sub-card').on('mouseleave', function() {
                    console.log('out');
                    $(this).remove();
                })
    
                // TODO Ajax
            } else {
                target.remove();
            }
        }
       
       
	});

	$('.sort-item').on('shown.bs.tab', function(event) {
		// event.target // newly activated tab
		// event.relatedTarget // previous active tab
		// console.log($(event.target).attr('data-bs-target'));
		// console.log($($(event.target).attr('data-bs-target')).find('.row').attr('class'));
		// $($(event.target).attr('data-bs-target')).find('.row').addClass('list');
		// $($(event.relatedTarget).attr('data-bs-target')).find('.row').removeClass('list');	
		// productList();
		// console.log(event, event.target, event.relatedTarget);	
	});

	// console.log($('.sort-item').eq(2));
	$('.sort-item').eq(2).click();

	// var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
	// tabEl.addEventListener('shown.bs.tab', function (event) {
		
	// 	event.target // newly activated tab
	// 	event.relatedTarget // previous active tab
	// 	console.log(event.target, event.relatedTarget);
	// })

	productList();

	function productList() {
		let options = {
			valueNames: [{name: 'type', attr:'data-type'}]
		};
	
		let productList = new List('tab-sort-contnet-2', options);
		
		$('.filter-tag-btn').on('click', function () {
			let type = $(this).attr('data-type');
			
			if ($(this).hasClass('active')) {
				productList.filter();
				$(this).removeClass('active');
			} else {
				$('.filter-tag-btn').removeClass('active');
				if(type == 'all') {
					productList.filter();
				} else {
					productList.filter(function (item) {
						console.log(item.values())
						return (item.values().type.includes(type));
					});
				}
				$(this).addClass('active');
			}			
		});
	}
	
})