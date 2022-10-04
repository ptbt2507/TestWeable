// w-nav
( function ( $ ) {
  $(".w-nav .nav .nav-link").each(function (index, elem) {
  $(elem).click(function (e) {
      console.log("abcd")
      $(".w-nav .nav .nav-link.show ").removeClass("show");
      $(elem).addClass("show");
});
});
}( jQuery ) );
// w-describe
( function ( $ ) {
  $(".w-describe .nav .nav-link").each(function (index, elem) {
  $(elem).click(function (e) {
      console.log("abcd")
      $(".w-describe .nav .nav-link.show ").removeClass("show");
      $(elem).addClass("show");
});
});
}( jQuery ) );
//w-product Slider
$('.w-product .autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, //hiện button
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="bx bx-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="bx bx-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,//k hiện button
      }
    },
  ]
});
//menu-mobile
$(document).ready(function () {
  $('#toggleOpen').on('click', function () {
      $('.w-nav .nav-mobile .menu .menu-list').addClass('show');
      $(this).addClass('d-none');
      $('#toggleClose').removeClass('d-none');

  })
  $('#toggleClose').on('click', function () {
      $(this).addClass('d-none');
      $('#toggleOpen').removeClass('d-none');
      $('.w-nav .nav-mobile .menu .menu-list').removeClass('show');
  })
});

