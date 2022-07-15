$(document).ready(function () {
    $('.one-main-four-sub .box-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1000,
        dots: true,
    });

    $('.slide-wrapper .box-content').slick({
        centerMode: true,
        centerPadding: '473px',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    centerMode: true,
                    centerPadding: '470px',
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    centerMode: true,
                    centerPadding: '400px',
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    centerMode: true,
                    centerPadding: '350px',
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    centerMode: true,
                    centerPadding: '320px',
                }
            }
        ]
    });
});

$('.top-header .search-wrapper').click(function () {
    $('.top-header .search-wrapper').addClass('active')
})