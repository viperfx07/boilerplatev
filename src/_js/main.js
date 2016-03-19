import wf from 'webfontloader';
import $ from 'jquery';
import 'slick-carousel';

wf.load({
    google: {
      families: ['Open Sans:400,600,800:latin', 'Slabo 27px:400:latin']
    }
});

$(() => {

    // Footer carousel
    let $footerCarousel = $('.footer-carousel');
    $footerCarousel.slick({
            slidesToShow:5, 
            slidesToScroll:1,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
        });

    // if ($('.dropkick').length) {

    //     //load dropkick async-ly
    //     require.ensure([], () => {
    //         require('dropkickjs');

    //         //all dropkick
    //         $('.dropkick').dropkick({
    //             mobile: true
    //         });
    //     });
    // }

    // match-height
    if ($('[data-mh], .mh').length) {

        //load match height async-ly
        require.ensure([], () => {
            require('jquery-match-height');
        });
    }
    
    //Flyout menu
    $('.flyout-toggle, .flyout-close-btn').click(() => {
        $('.flyout').toggleClass('js-open');
        $('.flyout-toggle').toggleClass('js-open');    
    });

    //Mobile menu
    $('.mobile-toggle, .mobile-menu-close').click(() => {
        $('.mobile-menu').toggleClass('js-open');
    });
});
