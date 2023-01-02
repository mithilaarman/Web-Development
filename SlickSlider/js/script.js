$('.slick_slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    speed:500,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-angle-left left_arrow"></i>',
    nextArrow:'<i class="fa-sharp fa-solid fa-angle-right right_arrow"></i>',
    responsive: [
      {
        breakpoint: 1600,
      settings: {
        slidesToShow: 3
      }
      },
      {
        breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });