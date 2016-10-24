var offsetHeight = 60;

$('body').scrollspy({
  target: '#myNavbar',
  offset: offsetHeight
});

$("#myNavbar .scrollspy a").on('click', function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 50
    }, 800, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash - 50;
    });
  } // End if
});


$('.search_option .carousel').carousel({
  interval: false,
  // wrap: false
});

$('#searchCarousel').carousel('pause');
$('#searchCarousel').find('.carousel-control.left').hide(); // hide initial left control
var slideCount = $('#searchCarousel').find('.carousel-indicators li').length; // get number of slides
$('#searchCarousel').on('slid.bs.carousel', function () {
  var index = $(this).find('.carousel-indicators .active').data('slide-to'); // get the index of the slide we are NOW on
  if (index == 0) { // is first slide
    $(this).find('.carousel-control.right').show(); // add this in here in case only 2 slides
    $(this).find('.carousel-control.left').hide();
  } else if (index == slideCount - 1) { // is last slide
    $(this).find('.carousel-control.left').show(); // add this in here in case only 2 slides
    $(this).find('.carousel-control.right').hide();
  } else { // is not first or last slide
    $(this).find('.carousel-control').show();
  }
});


$('.books .responsive').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});