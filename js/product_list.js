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
	
    // side package
    let offsetTop;
	let footerTop = $('footer').offset().top;
	
    if($('.category-section').length) {
        offsetTop = $('.header').height() + $('.banner-section').height();
    } else {
        offsetTop = $('body').height() / 4;
    }

    $(window).on('scroll', function () {
        if (window.screen.width > 769) {
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < footerTop) {
                $('#side-package').addClass('show');
            } else {
                $('#side-package').removeClass('show'); 
            } 
        }
    })

	// Ad
    if (window.screen.width > 769) { 
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
	let alreadyTab = ['tab-sort-content-1'];
    $('#sortTab').on('show.bs.tab', function(event) {
		let id = event.target.getAttribute('data-bs-target').replace('#', '');
		if(!alreadyTab.includes(id)) {
			productList(id);
			alreadyTab.push(id);
	   	}
    })

	productList();

	function productList(id='tab-sort-content-1') {
		let options = {
			valueNames: [{name: 'type', attr:'data-type'}],
            page: 2,
            pagination: true
		};
		
		let productList = new List(id, options);
		console.log(productList)

		let type = [];

		$('.filter-tag-btn').on('click', function () {
			if(!type.includes($(this).attr('data-type'))) {
				type.push($(this).attr('data-type'));
			}
			
			if ($(this).hasClass('active')) {
				// productList.filter();
				// $(this).removeClass('active');
			} else {
				// $('.filter-tag-btn').removeClass('active');
				if(type == 'all') {
					productList.filter();
				} else {
					productList.filter(function (item) {
						console.log(item.values().type)
						return (item.values().type.includes(type));
					});
				}
				$(this).addClass('active');
			}			
		});
	}
	
})