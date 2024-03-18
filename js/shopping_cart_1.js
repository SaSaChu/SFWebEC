$(function() {
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

	var swiperLike = new Swiper(".like-swiper", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		// spaceBetween: 30,
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

	// $('.check_label').click(function(){
	// 	if ($('#check-all-cart').is(":checked")) 
	// 	{
	// 		console.log(1)
	// 	} else {
	// 		console.log(2);
	// 	}

	// 	console.log($('#check-all-cart').val());
	// })

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
	
})
