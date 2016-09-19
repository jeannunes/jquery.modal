(function($) {

// Modal

$.fn.modal = function(method, options) {

	var obj = $(this);
	
	var defaults = {
			width : 380,
			height : 240,
			top : ($(window).width() - $(obj).width()) / 2,
			left : ($(window).height() - $(obj).height()) / 2,
			position: "fixed",
			background: true,
			backgroundColor: "RGA(0,0,0,0.8)",
			backgroundClose: true
		};

	var settings = $.extend( {}, defaults, options ),
		background = $("<div></div>");

	$(background).css({
		"background-color": settings.backgroundColor,
		"position": "fixed",
		"top": "0px",
		"left": "0px",
		"right": "0px",
		"bottom": "0px",
	});

	$(this)
		.show()
		.css({
			position: settings.position,
			top: settings.top,
			left: settings.left,
			width: settings.width,
			height: settings.height,
		})
		.draggable();
		
		if (settings.background) {$(this).before(background);}
	
		$(".close-modal", this).click(function(){
			if (settings.background) {$(background).remove();}
			$(obj).hide();
		});
		
		if (settings.backgroundClose) {
			$(background).click(function(){
				if (settings.background) {$(background).remove();}
				$(obj).hide();
			});
		}

	return this;
};