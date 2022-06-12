// header-page

$('.page-header .hamburger').click(function () {
    $('.search-wrapper').css('display', 'none');
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.page-header .wrap-search').click(function () {
    $('.navigation').css('display', 'none');
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.navigation .mask').click(function () {
    $('.navigation').slideToggle();
    $('body').toggleClass('no-scroll');
})
$('.search-wrapper .mask').click(function () {
    $('.search-wrapper').slideToggle();
    $('body').toggleClass('no-scroll');
})

// slick
$(document).ready(function () {
    $('.box-tips .box-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true,
    });
    $('.magazine .box-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: true,
        centerPadding: '70px',
        centerMode: true,
    });
    $('.podcasts .box-content').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        dots: false,
        centerPadding: '55px',
        centerMode: true,
    });
    $('.breadcrumb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipeToSlide: true,
        infinite: false,
        variableWidth: true,
        dots: false,
        prevArrow: false,
    });
    $('.breadcrumb').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        mainSlider = slick;
        if ((slick.slideCount - 1) == currentSlide) {
            setTimeout(function () {
                mainSlider.goTo(0);
            }, 100);
        }
    });
})
