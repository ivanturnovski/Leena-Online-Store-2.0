// Sort By Filer On Collections START
var select = document.querySelector('#sort_by');
select.addEventListener('change', function (e) {
	var url = new URL(window.location.href);
	url.searchParams.set('sort_by', e.currentTarget.value);
	window.location = url.href;
});
// Sort By Filer On Collections END
