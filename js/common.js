$(document).ready(function() {


// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}


// popup
	if ($('.popup').exists()){
		var win = $(window);
		var content = $('body');
		var popup = $('.popup');
		var w = win.height();
		var p = popup.height();
		var c = content.height();

		$(window).resize(function(){
			w = win.height();
			if (w >= p + 97){
				popup.addClass('popup_center').removeClass('popup_bottom').removeClass('popup_top');
				popup.css('marginTop', (-1) * p /2 + 21);
			}
			else{
				popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_bottom').removeClass('popup_center');
				win.scroll(function(){
				var wst = win.scrollTop();
					if (c < p + 97){content.css('minHeight', p +97);}
					if(wst + w >= p+27){ 
						popup.addClass('popup_bottom').removeClass('popup_top');
					}
					else{
						popup.addClass('popup_top').removeClass('popup_bottom');
					}
					
				});
			}
		});

		if (w >= p + 97){
			popup.addClass('popup_center').removeClass('popup_bottom').removeClass('popup_top');
			popup.css('marginTop', (-1) * p /2 + 21);
		}
		else{
			popup.addClass('popup_top').css('marginTop', 0).removeClass('popup_bottom').removeClass('popup_center');
			win.scroll(function(){
			var wst = win.scrollTop();
				if (c < p + 97){content.css('minHeight', p +97);}
				if(wst + w >= p+27){ 
					popup.addClass('popup_bottom').removeClass('popup_top');
				}
				else{
					popup.addClass('popup_top').removeClass('popup_bottom');
				}
				
			});
		}
	};

	$('.popup__close').click(function(){
		$(this).parents('.popup').fadeOut('fast');
		$('.popup-wrap-tr').hide();
		$('.popup-wrap').fadeOut('fast');
	});

//popup-users
	$('.post__likes-more').click(function(){
		$('.popup_users').fadeIn('fast');
	});

//checkbox
	$('input.check').css('opacity', '0').wrap("<div class='checkbox'></div>")
		.delegate($(this), 'change', function(){ $(this).attr('checked') ? $(this).parent().parent().addClass('checked') : $(this).parent().parent().removeClass('checked')});
	$('input.check:checked').parent().parent().addClass('checked');


//tabs
	$('.tabs-nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.popup').find('.tabs-info').eq($(this).index()).fadeIn(300).siblings('.tabs-info').hide();
	});


//social
	$('.post__togglesocial').click(function(){
		$(this).parent().next('.post__socials').slideToggle();
	});


//search-form
	var plh = $('.search-form__input').attr('placeholder');
	$('.search-form__input').focus(function(){
		$(this).attr('placeholder','');
	});
	$('.search-form__input').blur(function(){
		$(this).attr('placeholder',plh);
	});


//post
	$('.hide-post').click(function(){
		$(this).parents('.post').slideUp();
		$(this).parents('.post').next('.post-mini').slideDown();
		return false;
	});
		$('.post-mini__expand').click(function(){
		$(this).parent().prev('.post').slideDown();
		$(this).parent().slideUp();
		return false;
	});


//notification
	$('.icon_comments').click(function(){
		var notif = $('.notif')
		if ($(this).hasClass('icon_active')){
			notif.fadeOut('fast');
			notif.find('.mess__author').removeClass('new_animation');
			notif.find('.mess-list__arr').removeClass('new_animation');
			$(this).removeClass('icon_active');
			/*$('body').css('minHeight', 'auto');*/
			$('.popup-wrap-tr').hide();
		}
		else{
			notif.fadeIn('fast');
			notif.find('.mess__author').addClass('new_animation');
			notif.find('.mess-list__arr').addClass('new_animation');
			$(this).addClass('icon_active');
			$('.popup-wrap-tr').show();
			/*var bh = notif.children('.mess-list').height();
			$('body').css('minHeight', bh + 83);*/
		}
	});

	$('.popup-wrap-tr').click(function(){
		if ($('.notif').is(':visible')){
			$('.notif').fadeOut('fast');
			$('.icon_comments').removeClass('icon_active');
		}
		$(this).hide();
	});


//user-inf_popup
	$('.user-more-arr').click(function(){
		$(this).siblings('.user-inf_popup').fadeToggle('fast');
	});
	$('.user-inf_popup').hover(
		function () {},
		function () {
			$(this).delay('300').fadeOut();
		}
	);


//control-nav
	$('.icon_user').click(function(){
		$(this).children('.control-nav').fadeToggle('fast');
	});
	$('.control-nav__arr').click(function(){
		$(this).next('.control-nav').fadeToggle('fast');
	});
	$('.control-nav').hover(
		function () {},
		function () {
			$(this).delay('300').fadeOut();
		}
	);
	

//discover
	if ($('.discover').exists()){
		$('.discover .l').masonry({
			itemSelector: '.post_small',
			isAnimated: true
		});
	};
	// add new posts
	$('#append').click(function(){
		var $box = $('.append-post .post').clone().css({'top':'auto','left':'-3000px'});
		$('.discover .l').append( $box ).masonry( 'appended', $box );

	});


//textarea
	if ($('.mess__visual textarea').exists()){
		$(document).ready(function(){
			$('.mess__visual textarea').autosize();  
		});
	};
	if ($('.compose__textarea').exists()){
		$(document).ready(function(){
			$('.compose__textarea').autosize();  
		});
	};
	if ($('.mess_add-closed').exists()){
		$(document).ready(function(){
			$('.mess_add-closed textarea').height(23);
		});
	};
	$('.mess_add-closed textarea').click(function(){
		$(this).parents('.mess_add-closed').removeClass('mess_add-closed');
		$(this).height('125');
	});


//start reading | reading
	$('.button_read').click(function(){
		if ($(this).hasClass('button_active')){
			$(this).removeClass('button_active').html('Start reading');
		}
		else{
			$(this).addClass('button_active').html('Reading');
		}
	});


//gender
	$('.gender li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});


//wyswyg
	$('.wyswyg__photo').click(function(){
		$('.wyswyg__drop').fadeOut('fast');
		$(this).children('.wyswyg__drop').fadeToggle('fast');
	});
	$('.wyswyg__video, .wyswyg__link').click(function(){
		$('.wyswyg__drop').fadeOut('fast');
		$(this).children('.wyswyg__drop').fadeIn('fast');
	});
	$('.wyswyg__drop').hover(
		function () {},
		function () {
			$(this).delay('300').fadeOut();
		}
	);


//top__switcher
	$('.top__switchercompose').click(function(){
		if ($(this).parent().hasClass('top__switcher_2')) {
			$(this).parent().addClass('top__switcher_1').removeClass('top__switcher_2');
		};	
	});
	$('.top__switcherpreview').click(function(){
		if ($(this).parent().hasClass('top__switcher_1')) {
			$(this).parent().addClass('top__switcher_2').removeClass('top__switcher_1');
		};
	});


// slider
	$('.slider').each(function(){
		show = $(this);
		prev = show.children('.slider__prev');
		next = show.children('.slider__next');
		slider = show.children('.slider__slides');
		slidecount = false;
		if(show.children('.slider__info').length>0){
			slidecount = show.children('.slider__info');
		}
		slider.cycle({
			fx:	 'scrollHorz',
			speed:  'fast',
			timeout: 0,
			next: show.children('.slider__next'),
			prev: show.children('.slider__prev'),
			after: function (curr,next,opts) {
					go = $(curr).closest('.slider').children('.slider__info');
					go.html((opts.currSlide + 1) + " / " + opts.slideCount + "");
					var index = opts.currSlide;
					var $ht = $(this).height();
					//set the container's height to that of the current slide
					$(this).parent().css("height", $ht);
			}
		});
		function onAfter(curr,next,opts) {	  
		}
	})


});
