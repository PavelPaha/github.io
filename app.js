$(function(){
	// fixed header

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight()-70;
	let scrollPos = $(window).scrollTop();
	
	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function(){
		introH = intro.innerHeight()-70;
		scrollPos = $(this).scrollTop();

		
		checkScroll(scrollPos, introH);

	});

	function checkScroll(scrollPos, introH){
		if (scrollPos > introH){
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
	}



	// smooth scroll
	$("[data-scroll]").on("click", function(event){

		event.preventDefault();
		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		console.log(elementOffset);
		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 50

		}, 700);




	});
	

	// Nav Toggle
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	$("#navToggle").on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");

	});



	// clients
	let slider = $("#clientsSlider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
		

});