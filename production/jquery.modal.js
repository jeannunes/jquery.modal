(function($) {
	$(".modal").hide();
	$("*[data-modal]").click(function() {
		var m = $(this).attr('href');
		$(m).modal('open', $(this).data('modal'));
	});
	$.fn.modal = function(method, options) {
		var obj = $(this);
		var defaults = {
			width: $(obj).width(),
			height: $(obj).height(),
			left: ($(window).width() - $(obj).width()) / 2,
			top: ($(window).height() - $(obj).height()) / 2,
			position: "fixed",
			background: true,
			backgroundColor: "RGBA(0,0,0,0.8)",
			backgroundClose: true,
			close: ".modal-close",
			beforeOpen: function() {},
			afterOpen: function() {},
			beforeClose: function() {},
			afterClose: function() {}
		};
		
		var settings = $.extend({}, defaults, options);
		
		if (method == "open") {
			
			if (settings.background) {
				var background = $("<div></div>");
				$(background).addClass('modal-background').css({
					"background-color": settings.backgroundColor,
					"position": "fixed",
					"top": "0px",
					"left": "0px",
					"right": "0px",
					"bottom": "0px",
					"z-index": 1000
				});
			}
			
			settings.beforeOpen();
			
			$(this).show().css({
				position: settings.position,
				top: settings.top + "px",
				left: settings.left + "px",
				width: settings.width,
				height: settings.height,
				"z-index": 2000
			});
			
			if (settings.background) {
				$(this).before(background);
			}
			
			settings.afterOpen();

			function close(direct = false) {
				settings.beforeClose();
				if (direct) {
					if ($(obj).prev("modal-background")) {
						$(obj).prev("modal-background").remove();
					}
				} else {
					if (settings.background) {
						$(background).remove();
					}
				}
				$(obj).hide();
				settings.afterOpen();
			}
			$(settings.close, this).click(function() {
				close();
			});
			if (settings.backgroundClose) {
				$(background).click(function() {
					close();
				});
			}
		} // Open
		else if (method == "close") {
			close();
		}
		return this;
	};
}(jQuery));
