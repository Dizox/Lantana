import $ from 'jquery';

$(document).ready(function () {
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
