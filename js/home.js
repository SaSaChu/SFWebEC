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

    // Category & Top Mobile Swiper Arrow
    function addMobileArrow(tabName) {
        
        let itemLength = $('.nav-'+tabName+'-item').length;
        let activeItem = $('.nav-'+tabName+'-item').find('.active');
        let activeIndex = activeItem.parent().index() + 1; 
        let activePrev =  (activeIndex - 1) == 0 ? itemLength : activeIndex - 1;
        let activeNext =  (activeIndex + 1) > itemLength ? 1 : activeIndex + 1; 

        activeItem.before("<img src='images/btn/btn-up.svg' class='nav-tab-prev' data-action='prev' data-prev='"+activePrev+"'>")
        activeItem.after("<img src='images/btn/btn-up.svg' class='nav-tab-next' data-action='next' data-next='"+activeNext+"'>") 

        $(".nav-tab-prev, .nav-tab-next").click(function(){
            let action = $(this).attr('data-action');
            $(this).parents('.nav-tabs').find('.nav-link').removeClass('active');
            $(this).parents('.nav-tabs').find('.nav-tab-prev, .nav-tab-next').remove();
            let tab = $(this).attr('data-'+action);
            $("#nav-"+tabName+"-tab-"+tab).click().css("dsiplay:flex;");
            addMobileArrow(tabName); 
        })
            
    }

    function removeMobileArrow () {
        $('.nav-tab-prev').remove();
        $('.nav-tab-next').remove();
    } 

    if($(window).width() <= 768) {
        addMobileArrow('category');
        addMobileArrow('top');
        
    } else {
        removeMobileArrow();
    }

    $(window).resize(function(){
        if($(window).width() <= 768) {
            addMobileArrow('category');
            addMobileArrow('top');
        } else {
            removeMobileArrow();
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
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.new-button-next',
            prevEl: '.new-button-prev',
        },
        

        breakpoints: {

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },

            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.storeMobile-button-next',
            prevEl: '.storeMobile-button-prev',
        },

        breakpoints: {
            769: {
              navigation: {
                nextEl: '.storeWeb-button-next',
                prevEl: '.storeWeb-button-prev',
                },
            },
        },
        
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

    // cart
    // 網頁版 顏色
    $('.product-card').find('.color-item').on('mouseenter, click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.card').find(".card-img img").first().attr("src", $(this).attr('data-img'));
        $(this).parents('.card').find(".card-img img").last().attr("src", $(this).attr('data-img-hover'));
        $(this).parent().next().find('p').text($(this).attr('data-colorName'));  
    });

    // 手機版 cart offcanvas 開啟
    $('#offcanvasBottom').on('show.bs.offcanvas', function(event) {
        let content = $(event.relatedTarget).parents('.card-content') 
        let pictures = content.prevAll('.card-img').html();
        let original = content.find('.card-price').attr('data-origin');
        let discount = content.find('.card-price').text();
        let colors = content.find('.color-items').html();   
        $('<div>').append(pictures).appendTo($('.offcanvas_picture'));
        $('<div>').addClass('color-items').append(colors).appendTo($('.offcanvas_colors'));

        $('.cart-offcanvas').find('.color-item').on('click', function() {
            content.find('.color-item').eq($(this).index()).click();
            $(this).parents('.cart-offcanvas').find(".offcanvas_picture img").first().attr("src", $(this).attr('data-img'));
            $(this).parents('.cart-offcanvas').find(".offcanvas_picture img").last().attr("src", $(this).attr('data-img-hover'));
            $(this).addClass('active').siblings().removeClass('active'); 
            $(this).parents('.offcanvas_colors').find('input[name="color"]').val($(this).attr('data-colorId'));
        })
    })

    // 手機版 cart offcanvas 關閉
    $('#offcanvasBottom').on('hidden.bs.offcanvas', function(event) {
        $(this).find('picture').remove();
        $(this).find('.color-items').remove();
    })

    $('.mobile_add_cart').on('click', () => {
        let quantity = $('input[name="quantity"]').val();
        let color = $('input[name="color"]').val(); 
        let size = $('input[name="size"]').val();
        console.log(quantity, color, size);
        // DO ajax
        // 成功的話跳 swal()
    })
    console.log($('.item-action-cart').length)
    $('.item-action-cart').on('click', function() {
        // console.log($(this), this);
        if (window.screen.width < 500) {
            // cartOpen($(this));
        } else {
            let target = $(this).parent().find('.product-sub-card');
            $('.product-sub-card').not(target).remove();
            let colors = $(this).parents('.card-content').find('.color-items').html();
            let cartItem =`
            <div class="product-sub-card">
                <div class="card border-0">
                    <div class="card-body">
                        <div class="color-wrapper">
                            <div class="sub-color-name">
                                <p class="text-start">顏色：</p>
                                <span>灰色</span>
                            </div>
                            <div class="sub-color-items d-flex">
                                ${colors}
                            </div>
                        </div>	
                        <div class="size-wrapper">
                            <div class="sub-size">
                                <p class="text-start">尺寸</p>
                            </div>	
                            <ul class="sub-size-items">
                                <li class="size-item active" data-size="xs">xs</li>
                                <li class="size-item" data-size="s">s</li>
                                <li class="size-item" data-size="m">m</li>
                                <li class="size-item sell_out" data-size="l">l</li>
                            </ul>
                        </div>
                        <div class="action-wrapper">
                            <div class="row g-0">
                                <div class="col px-0">
                                    <button class="btn btn-lg sub-add-checkout">立即結帳</button>
                                </div>
                                <div class="col px-0">
                                    <button class="btn btn-lg sub-add-cart">加入購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            if(!target.length) {
                $(this).after(cartItem);
                $('.product-sub-card .color-item').on('click', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).parents('.card-content').find('.color-items .color-item').eq($(this).index()).click()
                    $(this).parent().prev().find('span').text($(this).attr('data-colorName'));
                    
                });
    
                $('.product-sub-card .size-item').on('click', function() {
                    $(this).addClass('active').siblings().removeClass('active');

                });

                $('.product-sub-card').on('mouseleave', function() {
                    // $(this).remove();
                })
    
                // TODO Ajax
            } else {
                target.remove();
            }
        }
	});

});
