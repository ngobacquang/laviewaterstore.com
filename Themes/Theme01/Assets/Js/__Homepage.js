//#region Khi scroll thì navigation thay đổi
$(document).ready(function () {
	var object = $("#nb-navigation-type-03");
	var offsetTop = object.offset().top;
	var ITFix = $("#nbFixTablert");

	if (offsetTop > 10) {
		object.addClass("nb-nav-fix");
	} else {
		object.removeClass("nb-nav-fix");
	}

	$(window).scroll(function () {
		// nếu scroll 10px thì thêm class 'nb-nav-fix'
		if ($(this).scrollTop() >= 5) {
			object.addClass("nb-nav-fix");
		}
		else {
			object.removeClass("nb-nav-fix");
		}
	});
});
//#endregion

//#region Scroll to ID width smart scroll
(function ($) {
	"use strict";
	var outerWindow = $(window).outerWidth();
	
	if (outerWindow > 1025) {
		smartScroll.init({
			speed: 800,
			addActive: true,
			activeClass: "active",
			offset: 80
		}, function () {
			console.log("callback");
		});
	}
	else if (outerWindow <= 1024) {
		smartScroll.init({
			speed: 800,
			addActive: true,
			activeClass: "active",
			offset: 60
		}, function () {
			console.log("callback");
		});
	}

})(jQuery);
//#endregion

//#region Scroll to top
$(document).ready(function () {
	var obJect = $('#nb-scrollTop');
	var windownScroll = $(window).scrollTop();

	// Kiểm tra nếu hiện tại scroll ở vị trí nào
	if (windownScroll > 100) {
		obJect.addClass('show');
	}
	else {
		obJect.removeClass('show');
	}
	// Nếu cuộn chuột
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			obJect.addClass('show');
		} else {
			obJect.removeClass('show');
		}
	});
	//Click event to scroll to top
	obJect.click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
//#endregion

//#region popup
jQuery(document).ready(function ($) {
	//open popup
	$('.cd-popup-trigger').on('click', function (event) {
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');

		if ($(this).hasClass('orderNow')) {

			$('.cd-popup-container .blogForm').css('display', 'block');
			$('.cd-popup-container .blogImg').css('display', 'none');
		}
		else {
			$('.cd-popup-container .blogForm').css('display', 'none');
			$('.cd-popup-container .blogImg').css('display', 'block');

			var imgUrl = $(this).find('img').attr('src');
			$('.cd-popup-container .blogImg').children('.imgZoom').attr('src', imgUrl);
		}
	});

	//close popup
	$('.cd-popup').on('click', function (event) {
		if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function (event) {
		if (event.which == '27') {
			$('.cd-popup').removeClass('is-visible');
		}
	});
});
//#endregion

//#region Click open submenu
$(document).ready(function () {
	var ob = $('#nb-navigation-type-03');
	var tg = ob.find('.togelle');
	var listMenu = ob.find('.blogMenu');
	tg.on('click', function (event) {
		event.preventDefault();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			listMenu.removeClass('open');
			$('body').removeClass('tablert');
			ob.removeClass('op_menu');
		}
		else {
			$(this).addClass('active');
			listMenu.addClass('open');
			$('body').addClass('tablert');
			ob.addClass('op_menu');
		}
		event.stopPropagation();
	});
	$(document).click(function () {
		var windowWidth = $(window).outerWidth();

		if (windowWidth < 1025) {
			tg.removeClass('active');
			listMenu.removeClass('open');
			$('body').removeClass('tablert');
			ob.removeClass('op_menu');
		}
	});
});
//#endregion

//#region Fix Action
$(document).ready(function () {
	var outWindown = $(window).outerWidth();
	var ob = $('#nb-navigation-type-03');
	if (outWindown <= 992) {
		var heightMXH = $('.foot_main .blogMXH').outerHeight();
		var heightOrder = $('.foot_main .orderBlog').outerHeight();

		$('.foot_main').css('padding-top', heightMXH + heightOrder);
		$('.foot_main .blogMXH').css('top', heightOrder);
	}
});
//#endregion