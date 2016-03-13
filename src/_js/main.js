import wf from 'webfontloader';

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
                $('.main-carousel').owlCarousel({
                    nav: true,
                    items: 1,
                    navText: '',
                    autoplay: true,
                    loop: true
                });
            });
        }

        if ($('.dropkick').length) {

            //load dropkick async-ly
            require.ensure([], () => {
                require('dropkickjs');

                //all dropkick
                $('.dropkick').dropkick({
                    mobile: true
                });
            });
        }
        
    });
})(jQuery);