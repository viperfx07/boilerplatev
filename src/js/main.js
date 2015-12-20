(function($) {

	$.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
	};

	$.fn.slideFadeIn  = function(speed, easing, callback) {
	    return this.animate({opacity: 'show', height: 'show'}, speed, easing, callback);
	};

	$.fn.slideFadeOut  = function(speed, easing, callback) {
	    return this.animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
	};


	$(document).ready(function(){
		//main carousel
		$('.main-carousel').owlCarousel({
			nav: true,
			items: 1,
			navText: '',
			autoplay: true,
			loop: true
		});

		//all dropkick
		$('.dropkick').dropkick({ mobile: true });

		//main menu mobile toggle
		$('.top-hamburger .hamburger-btn').on('click', function(){
			$('.main-menu').toggleClass('main-menu--open');
		});

		//mobile main sub-menu trigger
		$('.main-menu-list__item').on('click', function(e){
			var $self = $(this);

			if($self.hasClass('main-menu-list__item--open-sub')){
				console.log('go to hell');
				return false;
			}

			$('.main-menu-list__item--open-sub').find('.main-menu-list--child').slideFadeToggle(300)
				.end().removeClass('main-menu-list__item--open-sub');

			var $submenu = $self.find('.main-menu-list--child').slideFadeToggle(300);
			if($submenu.length>0){
				$self.toggleClass('main-menu-list__item--open-sub');
			}
			return false;
		});
	});

})(jQuery);
