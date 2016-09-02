// JavaScript Document
$(function() {
			// Smooth Scroll
			$('.smooth-scroll a[href^="#"]').click(function() {
			var target = $(this.hash);
				if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
				if (target.length == 0) target = $('html');
				$('html, body').animate({ scrollTop: target.offset().top }, 750);
			 });
			 // Active Link
			$('.bar a').click(function () {
				$('.bar a').removeClass('active');
				$(this).addClass('active');
 			});
			// Active Link
			$('.jump-link a').click(function () {
				$('.jump-link a').removeClass('hidden');
				$(this).addClass('hidden');
 			});
});