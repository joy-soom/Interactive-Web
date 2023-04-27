// gnb
$(function () {
  $(".gnb > li > a").on("mouseenter focus", function () {
    var gnbindex = $(".gnb > li > a").index($(this));
    $(".gnb .inner").removeClass("on");
    $(".gnb .inner:eq(" + gnbindex + ")").addClass("on");
  });
  $("header").on("mouseleave", function () {
    $(".gnb .inner").removeClass("on");
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });
});

//글자 애니메이션 splitting
$(function () {
  Splitting();
});

// slick slider
$(function () {
  $(".visual .slide").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  $(".slick-prev").text("prev");
  // information slide
  $(".slide2").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slideToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
  });
});
