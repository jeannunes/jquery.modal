(function($) {

$(".modal").hide();

$("*[data-modal]").click(function(){
	var m = $(this).data('modal');
	$(m).modal('open');
});

$.fn.modal = function(method, options) {

	var obj = $(this);
	
	var defaults = {
			width : 380,
			height : 240,
			top : ($(window).width() - $(obj).width()) / 2,
			left : ($(window).height() - $(obj).height()) / 2,
			position: "fixed",
			background: true,
			backgroundColor: "RGBA(0,0,0,0.8)",
			backgroundClose: true
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

	$(this)
		.show()
		.css({
			position: settings.position,
			top: settings.top,
			left: settings.left,
			width: settings.width,
			height: settings.height,
      "z-index": 2000
		});
		
		if (settings.background) {$(this).before(background);}
	
		$(".modal-close", this).click(function(){
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

}( jQuery ));
