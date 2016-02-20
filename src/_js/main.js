import $ from 'jquery';

$.fn.slideFadeToggle = (speed, easing, callback) => {
    return this.animate({
        opacity: 'toggle',
        height: 'toggle'
    }, speed, easing, callback);
};

$.fn.slideFadeIn = (speed, easing, callback)  => {
    return this.animate({
        opacity: 'show',
        height: 'show'
    }, speed, easing, callback);
};

$.fn.slideFadeOut = (speed, easing, callback)  => {
    return this.animate({
        opacity: 'hide',
        height: 'hide'
    }, speed, easing, callback);
};

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

    //main menu mobile toggle
    $('.top-hamburger .hamburger-btn').on('click', () => {
        $('.main-menu').toggleClass('main-menu--open');
    });

    //mobile main sub-menu trigger
    $('.main-menu-list__item').on('click', (e) => {
        let $self = $(this);

        if ($self.hasClass('main-menu-list__item--open-sub')) {
            console.log('go to hell');
            return false;
        }

        $('.main-menu-list__item--open-sub').find('.main-menu-list--child').slideFadeToggle(300)
            .end().removeClass('main-menu-list__item--open-sub');

        let $submenu = $self.find('.main-menu-list--child').slideFadeToggle(300);
        if ($submenu.length > 0) {
            $self.toggleClass('main-menu-list__item--open-sub');
        }
        return false;
    });
});