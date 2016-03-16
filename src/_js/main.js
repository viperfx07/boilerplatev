import wf from 'webfontloader';
import $ from 'jquery';
wf.load({
    google: {
      families: ['Open Sans:400,600:latin', 'Slabo 27px:400:latin']
    }
});

(()=>{
    $(document).ready(() => {
        // if ($('.owl-carousel').length) {
        //     //load owl-carousel async-ly
        //     require.ensure([], () => {
        //         require('owl-carousel-2/owl.carousel.js');
        //         //main carousel
        //         $('.footer-carousel').owlCarousel({
        //             nav: true,
        //             items: 5,
        //             loop: true,
        //             center: true,
        //             margin: 30,
        //         });
        //     });
        // }

        if ($('[data-slick], .slick-carousel').length) {
            //load slick async-ly
            require.ensure([], () => {
                require('slick-carousel');
                $('.footer-carousel').slick({
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
            });
        }

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

        if ($('[data-mh]').length) {

            //load dropkick async-ly
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
})(jQuery);