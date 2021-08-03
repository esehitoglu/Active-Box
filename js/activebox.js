$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('nav').css("background-color", "#2b2e4a");
		} else {
			$('nav').css("background-color", "transparent");
		}
	});

	$(".navbar-toggle").click(function(event) {
		$(".navbar-toggle").toggleClass("glyphicon glyphicon-remove");
		$(".collapse").toggleClass("phonemenu");
		$(".navbar-toggle").css({
			"transform":"rotate(-360deg)",
			"transition":"0.3s"
		});
		$(".nav").css({
			"transition":"0.3s",
		});
		$(".nav li a").css({
			"display":"block",
		});
		$(".glyphicon-remove").css({
			"transform":"rotate(360deg)",
			"transition":"0.3s",
			"color":"red"
		});
		$(".navbar-toggle span").toggleClass("icon-bar");
	});

	$(window).resize(function(){
	if ($(window).width() >= 1024){	
		$(".collapse").removeClass("in");
		$(".collapse").removeClass("phonemenu");
	}
	});



});