function imgClick() {
    // media query event handler
    if (window.matchMedia("(min-width: 768px)").matches) {
        if ($('.description').css('display') == 'none') {
            $('img.swiper-lazy-loaded').hide();
            $('.caption').hide();
            $(".description").slideToggle('slow');
        }
        else {
            $(".description").hide();
            $('.caption').show();
        }
   
    } else if (window.matchMedia("(max-width:767px)").matches) {
        if ($('.description').css('display') == 'none') {
            $('img.swiper-lazy-loaded').hide();
            $('.caption').hide();
            $(".description").slideToggle('slow');
        }
        else {
            $(".description").hide();
            $('.caption').show();
        }
    } else {
        if ($('.description').css('display') == 'none') {
            $(".description").show();
        }
        else {
            $(".description").hide();
        }

    }
};
function descriptionClick() {
    if ($('img.swiper-lazy-loaded').css('display') == 'none') {
        $('.description').hide();
        $('.caption').show();
        $("img.swiper-lazy-loaded").show();
    }
    else {
        $(".description").show();
        $('.caption').hide();
    }
};


$(document).ready(function () {
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        onSlideChangeEnd: function () {
            $(".description").hide();
            $('img.swiper-lazy-loaded').show();
            $('.caption').show();
        }
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

});