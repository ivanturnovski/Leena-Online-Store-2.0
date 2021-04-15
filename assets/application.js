// Sort By Filter On Collections START
if (document.getElementById('sort_by') != null) {
	var select = document.querySelector('#sort_by');
	select.addEventListener('change', function (e) {
		var url = new URL(window.location.href);
		url.searchParams.set('sort_by', e.currentTarget.value);
		window.location = url.href;
	});
}
// Sort By Filter On Collections END

// Slick Slider START
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
// Slick Slider END

// Mobile Menu START
$(document).ready(function () {
	var vw = $(window).width();
	var viewportWidth = vw + 17;

	if (viewportWidth < 992) {
		var element = $('.has-dropdown');
		element.click(function (event) {
			event.preventDefault();
		});

		$('.nav-link').click(function () {
			var $content = $(this).next('.dropdown-menu');
			$content.slideToggle();
			$(this).toggleClass('active');
		});
	}
});
// Mobile Menu END

// Address Page Fetch Province START
var selectCountry = document.getElementById('AddressCountryNew');

if (selectCountry != null) {
	selectCountry.addEventListener('change', function (e) {
		var provinces = this.options[this.selectedIndex].getAttribute(
			'data-provinces'
		);
		var provinceSelector = document.getElementById('AddressProvinceNew');
		var provinceArray = JSON.parse(provinces);
		// console.log(provinceArray);

		if (provinceArray.length < 1) {
			provinceSelector.setAttribute('disabled', 'disabled');
		} else {
			provinceSelector.removeAttribute('disabled');
		}

		provinceSelector.innerHTML = '';
		var options = '';
		for (var i = 0; i < provinceArray.length; i++) {
			options += `<option value="${provinceArray[i][0]}">${provinceArray[i][0]}</option>`;
		}
		provinceSelector.innerHTML = options;
	});
}
// Address Page Fetch Province END
