import wf from 'webfontloader';
import 'slick-carousel';
wf.load({
    google: {
      families: ['Open Sans:400,600:latin', 'Slabo 27px:400:latin']
    }
});

(()=>{
    $(document).ready(() => {
        if ($('.owl-carousel').length) {
            //load owl-carousel async-ly
            require.ensure([], () => {
                require('owl-carousel-2/owl.carousel.js');
                //main carousel
                $('.footer-carousel').owlCarousel({
                    nav: true,
                    items: 5,
                    loop: true,
                    center: true,
                    margin: 30,
                });
            });
        }

        if ($('[data-slick]').length) {
            //load slick async-ly
            require.ensure([], () => {
                // require('slick-carousel');
                $('[data-slick]').slick();
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
        
        $('.flyout-toggle').click(function(){
            $('.flyout').toggleClass('js-open');
            $(this).toggleClass('js-open');
        });
    });
})(jQuery);