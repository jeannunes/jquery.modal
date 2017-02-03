(function($) {
    var methods = {
        init: function(options) {
            var settings = $.extend({
                width: 640,
                height: 480,
                background: true,
                backgroundClose: true,
                position: "fixed",
                onClose: function() {},
                onOpen: function(object) {},
                beforeOpen: function() {}
            }, options)
              , modalObj = this;
            settings.top = ($(document).height() - settings.height) / 2;
            settings.left = ($(document).width() - settings.width) / 2;
            if (settings.background === true) {
                var bg = $("<div class='modal-background'></div>");
                $(this).before(bg);
                if (settings.backgroundClose === true) {
                    $(bg).click(function() {
                        $(modalObj).modal('close', settings.onClose());
                    });
                }
            }
            settings.beforeOpen(this);
            $(this).css({
                width: settings.width,
                height: settings.height,
                position: settings.position,
                top: settings.top,
                left: settings.left
            }).show();
            settings.onOpen(this);
        },
        close: function(close=function() {}) {
            $(this).hide();
            $(this).prev(".modal-background").remove();
            close();
        }
    };
    $.fn.modal = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    }
    ;
    $(".modal-content").hide();
    $("a[data-modal]").each(function() {
        var obj = $(this)
          , dest = $($(this).attr("href"))
          , settings = $(obj).data("modal");
        $(obj).click(function(e) {
            e.preventDefault();
            $(dest).modal(settings);
        });
    });
    $("a.modal-close").click(function(e) {
        e.preventDefault();
        $($(this).attr("href")).modal('close');
    });
})(jQuery);
