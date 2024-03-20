$(function() {

	// step 1
	if($('.point-swiper').length) {
		var swiperPoint = new Swiper(".point-swiper", {
			slidesPerView: 1,
			slidesPerGroup: 1,
			// spaceBetween: 18,
			loop: true,
			navigation: {
				nextEl: '.pointWeb-button-next',
				prevEl: '.pointWeb-button-prev',
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
	}
	
	if($('.like-swiper').length) {
		var swiperLike = new Swiper(".like-swiper", {
			slidesPerView: 1,
			slidesPerGroup: 1,
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
	}

	$('.count_btn').on('click', function (){
		let countInput = $(this).parent().find('.count_value') 
		let countValue = parseInt(countInput.val());
		
		if($(this).hasClass('increase-count')) {
			countInput.val(++countValue);
			
		} else {
			if(countValue - 1) {
				countInput.val(--countValue);
			}
		}
	})

	$('#changeModal').on('show.bs.modal', function(event) {
		let cartListItem = $(event.relatedTarget).parents('.cart-list-item');
		let thisId = cartListItem.find('input[name="pids[]"]').val();
		let thisColor = cartListItem.find('input[name="pcolors[]"]').val(); 
		let thisSize = cartListItem.find('input[name="psizes[]"]').val();  
		
		// 切換尺寸顏色 modal 
		$('.cart-color-item').on('click', function() {
			$(this).addClass('active').siblings().removeClass('active');

			thisColor.val()
		});

		$('.cart-size-item').on('click', function() {
			if(!$(this).hasClass('sold_out')) {
				$(this).addClass('active').siblings().removeClass('active');	
			}
		})
	})	

	// 點擊也許你也喜歡顏色
	$('.like-item .color-item').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.product-card').find(".card-img img").first().attr("src", $(this).attr('data-img'));
        $(this).parents('.product-card').find(".card-img img").last().attr("src", $(this).attr('data-img-hover'));
        $(this).parent().next().find('p').text($(this).attr('data-color-name'));  
	})	

	$('#check-all-cart').on('change', function() {
		if ($(this).is(":checked")) 
		{
			console.log(1)
		} else {
			console.log(2);
		}	
	})

	$('#mobile-check-all-cart').on('change', function() {
		if ($(this).is(":checked")) 
		{
			console.log(1)
		} else {
			console.log(2);
		}	
	})

	function deliveryType(type) {
		console.log(type);
		let allType = $('.delivery-type');
		let activeType = $('.delivery-'+type);
		allType.hide();
		allType.find('input, select').attr('disabled', 'disabled');
		activeType.find('input, select').removeAttr('disabled');
		activeType.show();
	}

	function invoiceType(type) {
		console.log(type);	
		let allType = $('.invoice-type');
		let activeType = $('.invoice-'+type);
		allType.hide();
		allType.find('input, select').attr('disabled', 'disabled');
		activeType.find('input, select').removeAttr('disabled');
		activeType.show();
	}

	//step 2 
	let delivery = $('input[name="delivery_type"]'); 
	if(delivery.length) {
		delivery.on('change', function() {
			deliveryType($(this).val())
			
		})
	}

	// 選擇常用門市
	
	let storeModal = $('#storeModal');
	storeModal.on('show.bs.modal', function() {
		// Ajax 抓資料
		console.log('storeModal Ajax')
	});
	
	// 發票資料
	let invoice =  $('select[name="invoice_type"]'); 
	invoice.on('change', function() {
		invoiceType($(this).val());
	})

	$('.sync-name').on('click', function() {
		$(this).addClass('active').parents('.col').siblings().find('.radio_label').removeClass('active');
		
		$('input[name="invoice_name"]').val($('input[name="'+$(this).attr("data-target")+'"]').val())
	})
	
	// 提交完成訂單
	let chekcOrder = $('.check-order') 
	if(chekcOrder.length) {
		chekcOrder.on('click', function() {
			console.log($('#step-second-form').serializeArray());
		})
	}
	// 選擇常用門市
	$('.select-store').on('click', function() {
		// 抓 input 或者 點擊的 btn 放 data-xxx 直接抓 data; 
		let storeName = $(this).parents('.row').find('.select-store-name').text();
		let storeAddress = $(this).parents('.row').find('.select-store-address').text();
			console.log(storeName);
		$('.store-name').text(storeName);
		$('.store-address').text(storeAddress);
	});
	
	// 選擇常用收件人
	// step-2 & step-3 可共用
	$('.select-recipient').on('click', function() {
		// 抓 input 或者 點擊的 btn 放 data-xxx 直接抓 data; 
		// recipient_city recipient_area 可放 data ，或分解 address;
		let selectName = $(this).parents('.row').find('.select-name').text();
		let selectPhone = $(this).parents('.row').find('.select-phone').text();
		let selectAddress = $(this).parents('.row').find('.select-address').text();
			
		$('input[name="recipient_name"]').val(selectName);
		$('input[name="recipient_phone"]').val(selectPhone);
		$('input[name="recipient_address"').val(selectAddress);
	});

	$('.select-company').on('click', function() {
		// 抓 input 或者 點擊的 btn 放 data-xxx 直接抓 data; 
		let companyNumber = $(this).parents('.row').find('.select-company-number').text();
		let companyName = $(this).parents('.row').find('.select-company-name').text();
		
		$('input[name="company_number"]').val(companyNumber);
		$('input[name="company_name"]').val(companyName);
	});

	// step3 

	$('.change-recipient').on('click', function() {
		// ajax 後 資料帶回頁面，要補上 city 跟 area
		let recipientName = $('input[name="recipient_name"]').val();
		let recipientPhone = $('input[name="recipient_phone"]').val();
		let recipientAddress = $('input[name="recipient_phone"]').val();
		
		if(recipientName && recipientPhone && recipientAddress) {
			$('.order-recipient-name').text($('input[name="recipient_name"]').val());
			$('.order-recipient-phone').text($('input[name="recipient_phone"]').val());
			$('.order-recipient-address').text($('input[name="recipient_address"]').val());
			$(this).prev().click();
		}
	})
})


