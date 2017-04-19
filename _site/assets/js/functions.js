/*$( document ).ready(function() {

  //

});*/

$(function() {
	smoothScroll(500);
	workBelt();
	workLoad();

	hideWork();
	$("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });

	//$(".biglink").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
});

function hideWork() {

	$('#work-all').click(function() {
		$('.thumb-unit[data-folder="proj-8"], [data-folder="proj-1"], [data-folder="proj-2"], [data-folder="proj-3"],[data-folder="proj-4"], [data-folder="proj-7"], [data-folder="proj-6"]').show();

		if($('.work-container').is(':visible')) {
			$('.work-belt').css('left', '0%');
			$('.work-container').hide(800);
		}
	});

	$('#work-tangible').click(function() {
		$('.thumb-unit[data-folder="proj-8"], [data-folder="proj-2"], [data-folder="proj-3"], [data-folder="proj-4"],[data-folder="proj-6"]').hide();
		$('.thumb-unit[data-folder="proj-1"], [data-folder="proj-7"]').show();

		if($('.work-container').is(':visible')) {
			$('.work-belt').css('left', '0%');
			$('.work-container').hide(800);
		}
	});

	$('#work-digital').click(function() {
		$('.thumb-unit[data-folder="proj-1"], [data-folder="proj-7"]').hide();
		$('.thumb-unit[data-folder="proj-8"], [data-folder="proj-2"], [data-folder="proj-3"], [data-folder="proj-4"], [data-folder="proj-6"]').show();

		if($('.work-container').is(':visible')) {
			$('.work-belt').css('left', '0%');
			$('.work-container').hide(800);
		}
	});
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {

	$('.thumb-unit').click(function() {
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	});

	$('.work-return, .work-return-footer').click(function() {
		$('.work-belt').css('left', '0%');
		$('.work-container').hide(800);
	});
}

function workLoad() {

	//Cache content
	$.ajaxSetup({ cache: true});

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = 'work/' + newFolder + '.html';

		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});

}

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );