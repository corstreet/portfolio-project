$(document).ready(function(){
	smoothScroll.init({
		speed: 1500,
		easing: 'easeInOutCubic',
		offset: 86
	});

	fixedNav();

	$(window).scroll(function(){
		fixedNav();	
	});
	function fixedNav () {
		var scroll = $(window).scrollTop();
		var navHeight = $('.navbar').outerHeight();
		if (scroll >= 25){
			$('.navbar').addClass('fixed');

		} else {
			$('.navbar').removeClass('fixed');		
		}
		if ( ( scroll + navHeight ) >= ($('#about').offset().top) ){
			$('a[href="#about"]').addClass('active');
		} else {
			$('a[href="#about"]').removeClass('active');
		}	
		if ( ( scroll + navHeight ) >= ($('#work').offset().top) ){
			$('li a').removeClass('active');
			$('a[href="#work"]').addClass('active');
		} else {
			$('a[href="#work"]').removeClass('active');
		}	
		if( scroll + 200 + $(window).height() >= $(document).height() ) {
       		$('li a').removeClass('active');
			$('a[href="#contact"]').addClass('active');
		} else {
			$('a[href="#contact"]').removeClass('active');
		}
	}

});