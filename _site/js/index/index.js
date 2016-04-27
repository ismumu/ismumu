$(function(){
	$('a.blog-button').click(function (e) {
		var fullscreenImg = $('.fullscreenImg'),
			fullscreenMask = $('.fullscreenMask'),
			panelCover = $('.panel-cover'),
			wrapper = $('.content-wrapper');

		if (panelCover.hasClass('panel-cover--collapsed')){
			panelCover.removeClass('panel-cover--collapsed');
			panelCover.css('max-width', '100%').animate({'width': '100%'}, 4000);
			wrapper.animate({'left': '100%'}, 400);
			return false;
		}

		panelCover.addClass('panel-cover--collapsed');
		currentWidth = $(window).width();

		if (currentWidth < 960) {
			panelCover.addClass('panel-cover--collapsed');
		} else if (currentWidth >= 960 && currentWidth <= 1300) {
			panelCover.css('max-width', currentWidth);
			panelCover.animate({'max-width': '530px', 'width': '40%'}, 400);
			wrapper.animate({ 'width': '60%', 'left': '40%'}, 400);
		} else {
			panelCover.css('max-width', currentWidth);
			panelCover.animate({'max-width': '530px', 'width': '40%'}, 400);
			wrapper.animate({'left': 530}, 400);
		}

		return false;
	});
});