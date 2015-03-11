$(window).ready(function(){
		/*
	var player = document.getElementById('player_1');
	  $f(player).addEvent('ready', ready);
	   
	    function addEvent(element, eventName, callback) {
		    if (element.addEventListener) {
			      element.addEventListener(eventName, callback, false)
			    } else {
				      element.attachEvent(eventName, callback, false);
				    }
		  }
		 
		  function ready(player_id) {
		      var froogaloop = $f(player_id);
		      froogaloop.addEvent('play', function(data) {
			        $('.flexslider').flexslider("pause");
			      });
		      froogaloop.addEvent('pause', function(data) {
			        $('.flexslider').flexslider("play");
			      });
		    }
			*/

	$('.flexslider').fitVids().flexslider({
		animation: 'slide',
		useCSS: false,
		smoothHeight: true,
		controlNav: true,
		directionNav: true,
		prevText: "",
		nextText: "",
		slideshow: false,
		video: true,
		before: function(slider){
				var sliderID = slider.attr("id");
		        //$f(player).api('pause');
				if($("#" + sliderID + " #youtubevideo").get(0) !== undefined) {
					var iframe = $("#" + sliderID + " #youtubevideo").get(0).contentWindow;
					var func = 'pauseVideo';
					iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
				}
		      }
	});
});
