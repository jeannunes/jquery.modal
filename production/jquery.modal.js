(function( $ ){

    var methods = {
		settings: null,
        init : function(options) {
			
			var object = $(this).attr("href"),
					defaults = {
						width: $(object).width(),
						height: $(object).height(),
						left: ($(window).width() - $(object).width()) / 2,
						top: ($(window).height() - $(object).height()) / 2,
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
				
			methods.settings = $.extend({}, defaults, options);
				
			$(this).click(function(e){
				$(this).modal("open");
			});
			
        },
        open : function( ) { 
		
			if (methods.settings.background) {
				var background = $("<div></div>");
				$(background).addClass('modal-background').css({
					"background-color": methods.settings.backgroundColor,
					"position": "fixed",
					"top": "0px",
					"left": "0px",
					"right": "0px",
					"bottom": "0px",
					"z-index": 1000
				});
			}
			
			methods.settings.beforeOpen();
			
			var obj = $(this), modal = $(obj).attr("href");
			
			$(modal).show().css({
				position: methods.settings.position,
				top: methods.settings.top + "px",
				left: methods.settings.left + "px",
				width: methods.settings.width,
				height: methods.settings.height,
				"z-index": 2000
			});
			
			if (methods.settings.background) {
				$(modal).before(background);
			}
			
			$(methods.settings.close, modal).click(function(){
				$(obj).modal("close");
			});
			
			$(background).click(function(){
				$(obj).modal("close");
			});
			
			methods.settings.afterOpen();

		},// IS
        close : function() {
			var obj = $(this), modal = $(obj).attr("href");
			
			$(modal).prev(".modal-background").remove();
			$(modal).hide();
			
		},
    };

	// Define the names of the methods
    $.fn.modal = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }    
    };

	$(".modal").hide();
	$("*[data-modal]").each(function(){
		$(this).modal($(this).data("modal"));
	});
	
})( jQuery );
