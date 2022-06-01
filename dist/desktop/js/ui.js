$(document).ready(function () {
    $('.one-main-four-sub .box-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: true,
    });

    $('.slide-wrapper .box-content').slick({
        centerMode: true,
        // centerPadding: '432px',
        centerPadding: '473px',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
    });
});