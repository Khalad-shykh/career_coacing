$(document).ready(function(e){


	$(window).on("scroll", function () {
		if(matchMedia("only screen and (min-width: 1200px)").matches && $(window).scrollTop() >= ($(".header-top").outerHeight(true)+120))
		{
			$(".header-top").hide().fadeOut(300);
			$("#header .navbar").addClass("fixed-navigation").animate();
			
		}
		else if(matchMedia("only screen and (min-width: 1200px)").matches)
		{
			$(".header-top").show().fadeIn(300);
			$("#header .navbar").removeClass("fixed-navigation").animate();
		}
		else if(!matchMedia("only screen and (min-width: 1200px)").matches && $(window).scrollTop() >= ($("#header .navbar").outerHeight(true)+120))
		{
			$("#header .navbar").addClass("fixed-navigation").animate();
		}
		else if(!matchMedia("only screen and (min-width: 1200px)").matches)
		{
			$("#header .navbar").removeClass("fixed-navigation").animate();
		}
	});

          
          
});