$(function () {

	var height_window = $(window).height();  
    $(".block-header").height(height_window);

    $(window).trigger('resize');
});



$(window).resize(function(event) {
	
});