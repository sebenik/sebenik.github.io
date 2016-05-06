$(window).ready(function(){

	$('.flexslider').fitVids().flexslider({
		animation: 'slide',
		slideshow: false,
		smoothHeight: true,
		controlNav: true,
		directionNav: true,
		prevText: "",
		nextText: "",
		video: true,
		useCSS: false,
		touch: true,
		before: function(slider){
				var sliderID = slider.attr("id");
				if($("#" + sliderID + " #youtubevideo").get(0) !== undefined) {
					var iframe = $("#" + sliderID + " #youtubevideo").get(0).contentWindow;
					var func = 'pauseVideo';
					iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
				}
		      }
	});

});
