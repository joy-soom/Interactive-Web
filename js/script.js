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

// fixheader
// var scrollFix = 0;
// scrollFix = $(document).scrollTop();
// fixHeader();
// // 윈도우창 조절시 이벤트
// $(window).on("scroll resize", function () {
//   scrollFix = $(document).scrollTop();
//   fixHeader();
// });

// // 고정헤더함수=> fixHeader();
// function fixHeader() {
//     if(scrollFix > 150) {
//         $('header').addClass('on')
//     }
//     else {
//         $('header').removeClass('on')
//     }
// }
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });
});
