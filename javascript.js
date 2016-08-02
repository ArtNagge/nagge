//Toggle Menu

$('#id кнопки').click(function () {
	$('#id меню').addClass('class для отображения меню');
});
$('#id кнопки').click(function () {
	$('#id меню').removeClass('class для отображения меню');
});

//Перенаправление при клике

$("#id кнопки").click(function(){
	setTimeout(function () {
		location.href='http://ссылка'
	}, 150);
});

//Function parallax

$(window).scroll(function () {

	var (название переменной) = $(this).scrollTop();

	if ((название переменной) > $('#id блока').offset().top - ($(window).height() / 1.5)) {

		$('(#)(.)элемент анимации').each(function(i){

			setTimeout(function(){
				$('(#)(.)элемент анимации').eq(i).addClass('animated fadeInLeft');  // <-- реализовано с плагином aAnimate css
			}, 100 * (i+1));

		});

	}

});
