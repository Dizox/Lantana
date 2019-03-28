import $ from 'jquery';

$(document).ready(function () {
    if (document.documentMode || /Edge/.test(navigator.userAgent)){ //find EDGE-users
        $(".call").css("margin-left", "65px");
    }

    $('.js-hamburger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });

    $(".slider__container").owlCarousel( {
        items: 5,
        nav: true, //nav arrows
        dots: false,
        touchDrag: true,
        mouseDrag: false,
        margin: 20,
        loop: true, //cycle
        responsiveClass: true, //turn adaptive
        responsive: { //adaptive
            0: {
                items:1
            },
            440: {
                items:2
            },
            768: {
                items:3
            },
            1000: {
                items:4
            },
            1400: {
                items:5
            }
        },
    });
});

$(document).scroll(function () {
    let s_top = $(this).scrollTop();
    if(s_top > 1) {
        $(".header__logo").addClass("header__logo_sticky");
    } else {
        $(".header__logo").removeClass("header__logo_sticky");
    }
});

