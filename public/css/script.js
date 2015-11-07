$(document).ready(function(){
	$('.menu-icon').hover(function(){
		$('#show-menu').animate({left:"0px"});
	},
	function(){
		$('#show-menu').animate({left:"-100%"});

	});
});