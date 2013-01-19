$(document).ready(function(){
	
	//tabs starts
	
	function changeSlide(slideClassName){

			var slideClassName = slideClassName.replace("#",".");

			$(".b-bg-images_img").hide();

			$(slideClassName).fadeIn(1000);
			/*alert (slideClassName);*/
		}

	$('.b-tabs__tab').hide();
	$('.b-tabs__tab:first').show();

	$('.b-tabs__menu_item:first').addClass('active');

	$('.b-tabs__menu_item a').click(function(){ 
		var currentTab = $(this).attr('href'),
		wWidth = $(window).width()
		queryPoint = 768,
		tabHeight= 670; 
	
	if(wWidth > queryPoint){	
			$('.b-tabs__tab').stop().hide();
				$('.b-tabs__menu_item').removeClass('active');
				$(this).parent().addClass('active');

			changeSlide(currentTab);

			$('.b-tabs').stop().animate({
				width:270	
			},500,function(){

				$('.b-tabs').stop().animate({
					width:900
				},500,function(){
					$(currentTab).show();
				});	

				return false;
			
			});
		}else{
			$('.b-tabs__tab').stop().hide();
				$('.b-tabs__menu_item').removeClass('active');
				$(this).parent().addClass('active');

			changeSlide(currentTab);

			$('.b-tabs').stop().animate({
				height:116	
			},500,function(){

				$('.b-tabs').stop().animate({
					height: tabHeight
				},500,function(){
					$(currentTab).show();
				});	

				return false;
			
			});
		}
	});
	//tabs end 
	
	/*=======================
	 * 	resize images
	 * ===================== */


   function resizeImg(sSelector){
      var windowWidth = $(window).width(),
	  windowHeight = $(window).height();

	 $(sSelector).each(function(){
	    var iw = $(this).width(),
		ih = $(this).height();

        if ($(window).width() >= $(window).height()) {
            //console.log(iw, ih);
            if (iw > ih) {
                var imageRatio = iw/ih;
                $(this).css("width", $(window).width() + "px");
                $(this).css("height", Math.round($(window).width() * (1/imageRatio)));

                var newIh = Math.round($(window).width() * (1/imageRatio));

                if(newIh < $(window).height()) {
                    var imageRatio = ih/iw;
                    $(this).css("height", $(window).height());
                    $(this).css("width", Math.round($(window).height() * (1/imageRatio)));
                }
            } else {
                var imageRatio = ih/iw;
                $(this).css("height", $(window).height());
                $(this).css("width", Math.round($(window).height() * (1/imageRatio)));
            }
        } else {
            var imageRatio = ih/iw;
            $(this).css("height", $(window).height());
            $(this).css("width", Math.round($(window).height() * (1/imageRatio)));
        }

	$(this).css({
		left: Math.round(( windowWidth - $(this).width() )/2),
		top: Math.round(( windowHeight - $(this).height() )/2)
	});

	});

   };

	$(window).load(function(){
	   resizeImg('.js-resizable-img');
	});
	$(window).resize(function(){
		 resizeImg('.js-resizable-img');
	});

});

