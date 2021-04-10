// Sort By Filer On Collections START

if (document.getElementById('sort_by') != null) {
	var select = document.querySelector('#sort_by');
	select.addEventListener('change', function (e) {
		var url = new URL(window.location.href);
		url.searchParams.set('sort_by', e.currentTarget.value);
		window.location = url.href;
	});
}

// Sort By Filer On Collections END

// Slick Slider Start
$(document).ready(function () {
	$('.product-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-slider-nav',
	});
	$('.product-slider-nav').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
	});
});
// Slick Slider End

$(document).ready(function () {
	console.log(viewportWidth);

	$('body').click(function (event) {
		console.log(event.target);
	});

	var vw = $(window).width();
	var viewportWidth = vw + 17;

	console.log(viewportWidth);

	if (viewportWidth < 992) {
		var element = $('.has-dropdown');
		element.click(function (event) {
			event.preventDefault();
			console.log('prev def');
		});

		$('.nav-link').click(function () {
			var $content = $(this).next('.dropdown-menu');
			$content.slideToggle();
			$(this).toggleClass('active');
		});
	}
});
