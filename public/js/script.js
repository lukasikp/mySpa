$(document).ready(function() {


/*funkcja wysuwajaca menu*/

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


/*funkcja zmieniajaca strony*/

	$(".icon_downup .up").on('click', function(){
		var visibleid = $('.visible').attr('id')
		if (visibleid=="container1"){
			$("#container1").removeClass('visible').addClass('disable');
			$("#container5").removeClass('disable').addClass('visible');
		}
		$('.visible').removeClass('visible').addClass('disable').prev().removeClass('disable').addClass('visible');
		
	});

	$(".icon_downup .down").on('click', function(){
		$('.visible').removeClass('visible').addClass('disable').next().removeClass('disable').addClass('visible');
		var visibleid = $('.visible').attr('id')
		if (visibleid=="container5"){
			$("#container5").removeClass('visible').addClass('disable');
			$("#container1").removeClass('disable').addClass('visible');
		}
	});



});
