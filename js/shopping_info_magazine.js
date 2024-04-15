$(function(){
	const otherMaSwiper = new Swiper('.otherMa-swiper', {
		slidesPerView: 1,
		spaceBetween: 50,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		},

		navigation: {
			nextEl: '.otherMa-button-next',
			prevEl: '.otherMa-button-prev',
		},

	});

	// 光箱開啟前，撈取資料寫入光箱並初始化 swiper
	let maModalSwiper;
	
	$('#magazineModal').on('show.bs.modal', function(){
		// ajax 取得該雜誌得 data;
		// example 
		let data = ['https://fakeimg.pl/1000x750?text=1000x750-11','https://fakeimg.pl/1000x750?text=1000x750-2','https://fakeimg.pl/1000x750?text=1000x750-3','https://fakeimg.pl/1000x750?text=1000x750-4','https://fakeimg.pl/1000x750?text=1000x750-5'];
		
		let example = '';
		for (let i in data) {
			example +=  `<div class="swiper-slide">
				<img src="${data[i]}" class="ratio" alt="magazine page">
				</div>`;
		}

		$('.maModal-swiper .swiper-wrapper').append(example);

		maModalSwiper = new Swiper('.maModal-swiper', {
			slidesPerView: 1,
			spaceBetween: 50,
			pagination: {
				el: ".maModal-pagination",
				clickable: true,
			},

			breakpoints: {
				992: {
					navigation: {
						nextEl: '.maModal-button-next',
						prevEl: '.maModal-button-prev',
					},
					
					pagination: {
						el: ".maModal-pagination",
						type: "fraction",
						renderFraction: function (currentClass, totalClass) {
						return '<span>第 </span> <span class="' + currentClass + '"></span>' +
								'<span> 頁 / 共 </span>' +
								'<span class="' + totalClass + '"></span> <span> 頁</span>';
						}
					},
				},
			},
		});
	});

	// 光箱關閉後，銷毀 swiper 釋放瀏覽器記憶體、清空光箱內容
	$('#magazineModal').on('hide.bs.modal', function(){
		maModalSwiper.destroy()	;
		$('.maModal-swiper .swiper-wrapper').empty() ;
	});

});