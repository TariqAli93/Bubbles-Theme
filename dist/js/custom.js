(function($){
	'use strict';
	$(window).on('scroll' , function(e) {
		let st = $(this).scrollTop();
		let _this = $(this);

		$('.jumbotron .header_inner').css({
			'top': (st/2) + 'px'
		});

		$('.jumbotron .parallax img').css({
			'transform': 'translateY('+ (st/4) +'px)'
		});

		if(_this.scrollTop() > $('.jumbotron').height() - 74) {
			$('.navbar').addClass('scrolled');
		} else {
			$('.navbar').removeClass('scrolled');
		}
	});

	$('.navbar .navbar-toggle').on('click' , function(e) {
		e.stopPropagation();
		$('.navbar .mob_menu').toggleClass('open');
	});

	$('html,body').on('click' , function(e) {
		if(!$('.navbar .mob_menu').is(e.target) && $('.navbar .mob_menu').hasClass('open')) {
			$('.navbar .mob_menu').removeClass('open');
		}
	});


	$('.navbar .mob_menu .navbar-nav > li > a').on('click' , function(e) {
		let id = $(this).attr('href');

		e.preventDefault();
		$(this).parent('li').addClass('active').siblings('li').removeClass('active');
		$('html,body').animate({
			scrollTop: $(id).offset().top - 67
		},
		{
			duration: 1000, 
			easing: 'easeInOutCirc', 
		}
		)
	});


	$('.download .app_screen_download').on('mousemove' , function(e) {
		let x = e.pageX;
		let y = e.pageY;
		$('.download .app_screen_download img').css({
			'transform': 'rotateX('+ (y / 120) +'deg) rotateY('+ (x / 120) +'deg)'
		});
	});

	$.material.init();
}(jQuery));

// animation
function easeOutElastic(t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}