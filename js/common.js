jQuery(document).ready(function () {

  

  if ($(window).width() <= 768) {


    jQuery('.work-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: false
    });
    jQuery('.features-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: false
    });

    $('.mob-toggle').on('click', function() {
      $(this).toggleClass('toggle-active');
      $('.header-bottom').slideToggle(500);
      $('.header-top').slideToggle(500);

    });

  } else if ($(window).width() <= 992) {
    jQuery('.work-wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: false
    });
  } else {
    jQuery('.work-wrap').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: false
    });
  }
  
});