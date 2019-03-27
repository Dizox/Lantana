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

    $(".owl-carousel").owlCarousel({
        items: 5,
        nav: true, //nav arrows
        dots: false,
        touchDrag: true,
        mouseDrag: true,
        loop: true, //cycle
        responsiveClass:true, //turn adaptive
        responsive:{ //adaptive
            0:{
                items:1
            },
            420:{
                items:2
            },
            650:{
                items:3
            },
            1000:{
                items:4
            },
            1400:{
                items:5
            }
        }
    });
});

$(document).scroll(function () {
    let s_top = $(this).scrollTop();
    if(s_top > 1) {
        $(".header__logo").addClass("header__logo_sticky");
        console.log("success");
    } else {
        $(".header__logo").removeClass("header__logo_sticky");
        console.log("fail");
    }
});
