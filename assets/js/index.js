
$(document).ready(function(e){

AOS.init();

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:['<img src="assets/images/sliders/angle-left-dark.png" style="height: 40px;">','<img src="assets/images/sliders/angle-right-dark.png" style="height: 40px;">'],
    items:1,
    animateOut: 'fadeOut',
});
$('.slide-container').slick({
    arrows: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    swipeToSlide:true,
    slidesToScroll: 3,
    dots:true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      dots:false,
    }
  }
]
});
});