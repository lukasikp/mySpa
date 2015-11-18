$(document).ready(function() {
	// $("#menu-icon").on('click', function() {
	// 	$("#show-menu").toggle({left: "0px"});
	// });


$("#menu-icon").on('click', function(e){
	e.preventDefault();
    if ( $(this).hasClass("hide") ) {
		$("#show-menu").stop().animate({left:"-100%"}, 800);	    					
    } else {
        $("#show-menu").stop().animate({left:"0px"}, 800);
    }
    $(this).toggleClass("hide");
	return false;
});

});
