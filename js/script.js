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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
  });
  $(".slide2 #slick-slide-control10").text("서울 마곡지구 업무용지");
  $(".slide2 #slick-slide-control11").text("서울 마곡지구 대방디엠시티2차");
  $(".slide2 #slick-slide-control12").text("화성동탄1차 대방디엠시티 더 센텀");
  $(".slide2 #slick-slide-control13").text("광주 수완 대방노블랜드6차");
});

// scrolla
$(function () {
  $(".animate").scrolla({
    mobile: true, //모바일 활성화
    once: false,
  });
});

//scroll down
$(function () {
  $(".scroll").on("click", function () {
    var scrollBtn = $("#scroll").offset().top;
    $("html,body").animate({ scrollTop: scrollBtn }, 400);
  });
});
