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
$('.box-tips .box-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
});
