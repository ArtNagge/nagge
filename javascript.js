//Toggle Menu

$('#toggle-menu-btn').click(function () {
	$('#toggle-menu').addClass('toggle-visible');
});
$('#close-toggle').click(function () {
	$('#toggle-menu').removeClass('toggle-visible');
});

//Перенаправление при клике

$("#btn-portfolio").click(function(){
	setTimeout(function () {
		location.href='http://nagge/'
	}, 150);
});

//Function parallax

$(window).scroll(function () {

	var parallaxWindowScroll = $(this).scrollTop();

	//function animated - #about

	if (parallaxWindowScroll > $('#about').offset().top - ($(window).height() / 1.5)) {

		$('#about h4').each(function(i){

			setTimeout(function(){
				$('#about h4').eq(i).addClass('animated fadeInLeft');
			}, 100 * (i+1));

		});

		$('#about .black-line-about').each(function(i){

			setTimeout(function(){
				$('#about .black-line-about').eq(i).addClass('animated fadeInRight');
			}, 150 * (i+1));

		});

	}

	if (parallaxWindowScroll > $('#about').offset().top - ($(window).height() / 1.7)) {

		$('.p-visible').each(function(i){

			setTimeout(function(){
				$('.p-visible').eq(i).addClass('animated fadeInLeft');
			}, 250 * (i+1));

		});

		$('.img-visible').each(function(i){

			setTimeout(function(){
				$('.img-visible').eq(i).addClass('animated fadeInRight');
			}, 250 * (i+1));

		});

	}

	//function animated - #services

	if (parallaxWindowScroll > $('#services').offset().top - ($(window).height() / 1.5)) {

		$('#services h4').each(function(i){

			setTimeout(function(){
				$('#services h4').eq(i).addClass('animated fadeInRight');
			}, 100 * (i+1));

		});

		$('#services .line-services').each(function(i){

			setTimeout(function(){
				$('#services .line-services').eq(i).addClass('animated fadeInUp');
			}, 350 * (i+1));

		});

	}

	if (parallaxWindowScroll > $('#services').offset().top - ($(window).height() / 1.7)) {

		$('.p-services').each(function(i){

			setTimeout(function(){
				$('.p-services').eq(i).addClass('animated fadeInUp');
			}, 250 * (i+1));

		});

		$('.sentence').each(function(i){

			setTimeout(function(){
				$('.sentence').eq(i).addClass('animated fadeInUp');
			}, 650 * (i+1));

		});

	}

	//function animated - #last-gob

	if (parallaxWindowScroll > $('#last-job').offset().top - ($(window).height() / 1.5)) {

		$('#last-job h4').each(function(i){

			setTimeout(function(){

				$('#last-job h4').eq(i).addClass('animated fadeInRight');

			}, 100 * (i+1));

		});

		$('.black-line-last-job').each(function(i) {

			setTimeout(function() {

				$('.black-line-last-job').eq(i).addClass('animated fadeInUp');

			}, 350 * (i+1));

		});

	}

	if (parallaxWindowScroll > $('#last-job').offset().top - ($(window).height() / 1.7)) {

		$('.job').each(function(i) {

			setTimeout(function() {

				$('.job').eq(i).addClass('animated fadeInRight');

			}, 350 * (i+1));

		});

		$('.job-content').each(function(i) {

			setTimeout(function() {

				$('.job-content').eq(i).addClass('animated fadeInUp');

			}, 650 * (i+1));

		});

	}

	if (parallaxWindowScroll > $('#last-job').offset().top - ($(window).height() / 2.5)) {

		$('#btn-portfolio').each(function(i) {

			setTimeout(function() {

				$('#btn-portfolio').eq(i).addClass('animated fadeInLeft');

			}, 350 * (i+1));

		});

	}
});
