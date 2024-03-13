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
});
