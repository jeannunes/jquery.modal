(function($) {

$(".modal").hide();

$("*[data-modal]").click(function(){
	var m = $(this).data('modal');
	$(m).modal('open',$(m).data());
});

$.fn.modal = function(method, options = null) {

	var obj = $(this);
	
	var defaults = {
			width : $(obj).width(),
			height : $(obj).height(),
			top : ($(window).width() - $(obj).width()) / 2,
			left : ($(window).height() - $(obj).height()) / 2,
			position: "fixed",
			background: true,
			backgroundColor: "RGBA(0,0,0,0.8)",
			backgroundClose: true,
			close: ".modal-close",
			beforeOpen: function(){},
			afterOpen: function(){},
			beforeClose: function(){},
			afterClose: function(){}
		};

	var settings = $.extend( {}, defaults, options?options:$(this).data() ),
		background = $("<div></div>");

	$(background)
  .addClass('modal-background')
  .css({
		"background-color": settings.backgroundColor,
		"position": "fixed",
		"top": "0px",
		"left": "0px",
		"right": "0px",
		"bottom": "0px",
    "z-index": 1000
	});

	settings.beforeOpen();

	$(this)
		.show()
		.css({
			position: settings.position,
			top: settings.top,
			left: settings.left,
			width: settings.width,
			height: settings.height,
      "z-index": 2000
		})
		.draggable({
			handle: ".modal-title",
			cursor: "crosshair"
		});
		
		if (settings.background) {$(this).before(background);}
	
	settings.afterOpen();
	
		$(settings.close, this).click(function(){
			settings.beforeClose();
			if (settings.background) {$(background).remove();}
			$(obj).hide();
			settings.afterOpen();
		});
		
		if (settings.backgroundClose) {
			$(background).click(function(){
				settings.beforeClose();
				if (settings.background) {$(background).remove();}
				$(obj).hide();
				settings.afterClose();
			});
		}

	return this;
};

}( jQuery ));
