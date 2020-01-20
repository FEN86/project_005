$(function () {

    $('#heroSlider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var slider1 = $('#tabSlider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var slider2 = $('#tabSlider2').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
