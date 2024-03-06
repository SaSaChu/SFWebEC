$(function () {
   
    // Banner
    const swiperBanner = new Swiper(".banner-swiper", {
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        spaceBetween: 0,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
    });

    // Category 
    function addCategoryArrow() {
        
        let itemLength = $('.category-item').length;
        let activeItem = $('.category-item').find('.active');
        let activeIndex = activeItem.parent().index() + 1;
        let activePrev =  (activeIndex - 1) == 0 ? itemLength : activeIndex - 1;
        let activeNext =  (activeIndex + 1) > itemLength ? 1 : activeIndex + 1; 
        activeItem.before("<i class='fa-solid fa-arrow-left category-prev' data-action='prev' data-prev='"+activePrev+"'></i>")
        activeItem.after("<i class='fa-solid fa-arrow-right category-next' data-action='next' data-next='"+activeNext+"'></i>")

        $(".category-prev, .category-next").click(function(){
            let action = $(this).attr('data-action');
            $('.nav-link').removeClass('active');
            $('.category-prev, .category-next').remove();
            let categoryAction = $(this).attr('data-'+action);
            $("#nav-category-tab-"+categoryAction).css("dsiplay:flex;");
            $("#nav-category-tab-"+categoryAction).click();
            addCategoryArrow(); 
        })
    }

    function removeCategoryArrow () {
        $('.category-prev').remove();
        $('.category-next').remove();
    }

    if($(window).width() <= 768) {
        addCategoryArrow();
    } else {
        removeCategoryArrow(); 
    }

    $(window).resize(function(){
        if($(window).width() <= 768) {
            addCategoryArrow();
        } else {
            removeCategoryArrow()
        }
     })     
    

    // Introduction
    const swiperIntroduction = new Swiper(".introduction-swiper", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".intorduction-button-next",
            prevEl: ".intorduction-button-prev",
        },
    });

    // New 
    var swiperNew = new Swiper(".new-swiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.newMobile-button-next',
            prevEl: '.newMobile-button-prev',
        },
        

        breakpoints: {

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                navigation: {
                    nextEl: '.newWeb-button-next',
                    prevEl: '.newWeb-button-prev',
                },
            },

            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                navigation: {
                    nextEl: '.newWeb-button-next',
                    prevEl: '.newWeb-button-prev',
                },
            },
        },
    });

    // Store Img
    var swiperStoreImg = new Swiper(".storeImg-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            769: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
        },
        
    });

    // Store Info 
    var swiperStoreInfo = new Swiper(".storeInfo-swiper", {
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        thumbs: {
            swiper: swiperStoreImg,
        },
    });
      

    // IG
    var swiperIg = new Swiper(".instagram-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,        
        centeredSlides: true,
        watchSlidesProgress: false,
        loop: true,
        navigation: {
            nextEl: '.igMobile-button-next',
            prevEl: '.igMobile-button-prev',
        },
        breakpoints: {
            
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              watchSlidesProgress: true,
              centeredSlides: false,
            },

            1025: {
                slidesPerView: 7,
                spaceBetween: 20,
                centeredSlides: false,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: '.igWeb-button-next',
                    prevEl: '.igWeb-button-prev',
                },
            }
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
     
});
