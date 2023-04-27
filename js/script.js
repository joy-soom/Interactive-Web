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

//글자 애니메이션 splitting 사용하기
$(function () {
  Splitting();
});
