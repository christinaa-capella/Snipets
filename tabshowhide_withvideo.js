//JQUERY Tab show/hide with video player
//Video player does not function on stock fadein/fadeout
//this function animates opacity and moves the position off screen

$(nav).on('click', 'ul li a', function(e){
		e.preventDefault();
		// pauseAllMedia(); XXUncoment for live
		var mycontent = $(this).attr('href');
		//Hides all tabcontent using opacity and moving off screen 
		//(due to video player error cannot show/hide/fadein/fadeout)
		tabContent.css({'position':'absolute', 'left' : '-999em', 'opacity' : '0'});
		nav.find('.activetab').removeClass('activetab');
		$(this).addClass('activetab');
		//Shows mycontent by using opacity and bringing onscreen 
		//(due to video player error cannot show/hide/fadein/fadeout)
		$(mycontent).css({ 'position' : 'relative', 'left': '0px'}).animate({'opacity' : 1}, 100);
	});

	$(nav).find('ul li:first-child a').trigger("click");
