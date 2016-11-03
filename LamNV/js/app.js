jQuery(document).ready(function () {
    jQuery('.dataTables_paginate .pagination li').first().find('a').remove();
    jQuery('.dataTables_paginate .pagination li').first().append('<a href="#"><i class="fa fa-angle-left size-16" aria-hidden="true"></i></a>');
    jQuery('.dataTables_paginate .pagination li').last().find('a').remove();
    jQuery('.dataTables_paginate .pagination li').last().append('<a href="#"><i class=" size-16 fa fa-angle-right" aria-hidden="true"></i></a>');
    setTimeout(function () {
//get max-height block-items
        setTimeout(function () {
        jQuery('.block-items').each(function (index, el) {
            var maxHeight = 0;
            var elementHeights = jQuery(this).find('.item').map(function () {
                return jQuery(this).height();
            }).get();
            maxHeight = Math.max.apply(null, elementHeights);
            if(jQuery(window).width()> 767){
                jQuery(this).find('.item').height(maxHeight);
            }
        });
    }, 500);

    jQuery(window).resize(function () {
        document.body.style.overflow = "hidden";
        var windowWidth = jQuery(window).width();
        document.body.style.overflow = "";
        jQuery('.block-items').each(function (index, el) {
            jQuery(this).find('.item').css("height", 'auto');
        });
        jQuery('.block-items').each(function (index, el) {
            var maxHeight = 0;
            var elementHeights = jQuery(this).find('.item').map(function () {
                return jQuery(this).height();
            }).get();
            maxHeight = Math.max.apply(null, elementHeights);
           if(jQuery(window).width()> 767){
                jQuery(this).find('.item').height(maxHeight);
            }
        });
    });   });

    $( "#edit-name" ).click(function() {
        jQuery(this).parent().find('input').attr("readonly", false);
        jQuery(this).parent().find('a').css('display','none');
    });


    jQuery('.level-risk').click(function(e){
        var posX = $(this).position().left,posY = $(this).position().top;
        jQuery('#level-risk').css('left',e.pageX - posX -20);
        jQuery('#level-risk').css('top',e.pageY - posY + 75);
        
        if(jQuery(window).width() < 991){
            jQuery('#level-risk').css('left',e.pageX - posX -50);
            jQuery('#level-risk').css('top',e.pageY - posY + 75);
        }
        jQuery('#level-risk').toggleClass('active');
        jQuery('#level-country').removeClass('active');
    });

    jQuery('.level-country').click(function(e){
        var posX = $(this).position().left,posY = $(this).position().top;
        var data_id = jQuery(this).attr("data-id");

        jQuery('#level-country').css('left',e.pageX - posX - 20);
        jQuery('#level-country').css('top',e.pageY - posY + 75);;
        if(jQuery(window).width() < 991){
            jQuery('#level-country').css('left',e.pageX - posX -60);
            jQuery('#level-country').css('top',e.pageY - posY + 75);
        }
        if(jQuery(window).width() < 767){
            jQuery('#level-country').css('left',e.pageX - posX -140);
            jQuery('#level-country').css('top',e.pageY - posY + 75);
        }
        jQuery('#level-risk').removeClass('active');
        if(jQuery('#level-country').hasClass(data_id)){
            jQuery('#level-country').toggleClass('active');
        }else{
            jQuery('#level-country').removeClass();
            jQuery('#level-country').addClass(data_id);
            jQuery('#level-country').addClass('active');
        }
    });
});