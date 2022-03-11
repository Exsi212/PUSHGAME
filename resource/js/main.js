function preloader() {
  $(() => {

    setTimeout(() => {

      let p = $('.preloader');

      p.css('opacity', 0);

      setTimeout(
        () => p.remove(),
        parseInt(p.css('--duration')) * 1000
      );

    }, 1000);

  });
}

setTimeout(() => preloader(), 3000);
// popup

$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();

	}
});

// открыть по таймеру
$(window).on('load', function () {
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {

			$(".js-overlay-campaign").fadeIn();
		}
	}, 5000);
});
