$(function(){
  'use strict';

  //Плавный переход по ссылкам меню. Сначала нужно подключить библиотеку jq
  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      },
      800
    );
  });

  //slider-slick
  $('.slider-slick').slick({
    slidesToShow: 1,   /*Показывает по 3 картинки*/
    slidesToScroll: 1,   //прокручивает по 1 картинке
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false
  });


// Фильтр MixItUp 3. Сначала нужно подключить библиотеку jq и скрипт MixItUp

$(function(){
    $('#portfolio').mixitup({
        targetSelector: '.item',
        transitionSpeed: 350
    });
});



});
