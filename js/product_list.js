$(function() {
	// sideMenu 
	$('.closeSideBtn').click(function() {
		$(this).hide();
		$('.sideMenu').addClass('hide');
		$('.openSideBtn').show();
		$(this).parent().addClass('openBtn');
        $('#side-menu').addClass('col-lg-1');
		$('#product-lists').addClass('col-lg-11');
	});

	$('.openSideBtn').click(function() {
		$(this).hide();
		$('.sideMenu').removeClass('hide');
		$('.closeSideBtn').show();
		$(this).parent().removeClass('openBtn');
        $('#side-menu').remove('col-lg-1');
		$('#product-lists').removeClass('col-lg-11');
	});
	
	// sideMenu mobile menu widget
	$('.mobile-main-menu .dropdown-item').on('click', function() {
		$('.mobile-sub-menu').empty();
		$('#dropdownMobileMainMenuButton').text($(this).text());
		$('#dropdownMobileSubMenuButton').text('請選擇');

		let targetId = `#collapse${$(this).index() + 1}`
		let children = $(targetId).find('.ul_li_links').children();
		
		children.map(function() {
			let targetA = $(this).find('a'); 
			let item = `<li><a class="dropdown-item" href="${targetA.attr('href')}">${targetA.text().trim()}</a></li>`
			$('.mobile-sub-menu').append(item);	
		})
	})

	// 0502 篩選樣式功能
	$('.filter-cancel').on('click', function(e) {
		$(this).parents('.filter-list-item').removeClass('active')
		e.stopPropagation();
	})

	$('.filter-list-item a').on('click', function(){
		$(this).parent().addClass('active');
	})

	$('.filter-item-title').on('click', function() {
		$(this).find('.icon').toggleClass('active')
		$(this).next().toggleClass('show');
	})
	
	
    // side package 出現時機
    let offsetTop;
	let footerTop = $('footer').offset().top;
	
    if($('.category-section').length) {
        offsetTop = $('.header').height() + $('.banner-section').height();
    } else {
        offsetTop = $('body').height() / 4;
    }

    $(window).on('scroll', function () {
        if (window.screen.width >= 992 ) {
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < footerTop) {
                $('#side-package').addClass('show');
            } else {
                $('#side-package').removeClass('show'); 
            } 
        }
    })

	// Ad swiper
    if (window.screen.width >= 992) { 
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
    }

    $('#sortTab').on('show.bs.tab', function(event) {
		// 0412 排序改由 js 控制 col-lg
		let relatedTargetCol = event.relatedTarget.getAttribute('data-bs-target');
		let targetCol = event.target.getAttribute('data-bs-target');
		$('#tab-sort-content').find('.row > .col-12').removeClass(relatedTargetCol).addClass(targetCol);
    })
	
	// package-wrapper
	// data-img 放圖片連結 select oncahnge 時 透過 js 變更 figure-img src 內容
	$('.package-wrapper').find('.form-select').on('change', function(){
		
		let img = $(this).find('option:selected').attr('data-img');
		if (img) {
			$(this).parents('.card').find('.card-img .figure-img').attr('src', img);
		}
	})
})