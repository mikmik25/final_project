
$(window).scroll(function(){
  var distanceScrolled = $(window).scrollTop();
    if (distanceScrolled >= 30) {
       $('.nav-wrapper').addClass('shadow-header');
    }
    else {
       $('.nav-wrapper').removeClass('shadow-header');
    }
});



$(window).scroll(function () {
    var distanceScrolled = $(window).scrollTop();
    var aboutSection = 530;
    var portfolio = 1300;
    var contact = 2230;
  if( distanceScrolled > aboutSection){
    $('.one').addClass('slide-right');
    $('.two').addClass('slideDown');
    $('.graph').addClass('slide-left');
  }
});

// about page is 545, portfolio is 1395, contact is 2263




var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true,
    });

$('#Typography').on('click', function() {
  $('.typography').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('#MenuProj').on('click', function() {
  $('.MenuProj').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('#HTML').on('click', function() {
  $('.CSS').fadeIn(1000);
  $('.modal-bg').fadeIn(300);
});

$('.close').on('click', function(){
  $('.modal-popup').fadeOut(200);
  $('.modal-bg').fadeOut(1000);
});
