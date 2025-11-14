let bool = true;
document.querySelector("#family").onclick = function (e) {
  e.preventDefault();
  if (bool) {
    document.querySelector(".hvr").style.height = "250px";
  } else {
    document.querySelector(".hvr").style.height = "0";
  }
  bool = !bool;
};
document.querySelector(".hover").onmouseenter = function () {
  document.querySelector(".sv").style.display = "block";
};
document.querySelector(".icon").onmouseleave = function () {
  document.querySelector(".sv").style.display = "none";
};
document.querySelector(".sv").onmouseleave = function () {
  document.querySelector(".sv").style.display = "none";
};

$(function () {
  // 섹션들
  const sections = ["#top", "#meddle", "#footer"];

  // 점(nav)
  const dots = $(".dot");

  // --------------------------
  // ① dot 클릭 시 해당 섹션으로 이동
  // --------------------------
  dots.each(function (index) {
    $(this).click(function () {
      $("html, body").animate(
        {
          scrollTop: $(sections[index]).offset().top,
        },
        600
      );
    });
  });

  // --------------------------
  // ② 스크롤 감지
  // --------------------------
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let winH = $(window).height();

    sections.forEach((id, idx) => {
      let secTop = $(id).offset().top;

      // 섹션 활성화( dot 색 변경 )
      if (scrollTop >= secTop - winH / 2) {
        dots.removeClass("active");
        dots.eq(idx).addClass("active");
      }

      // --------------------------
      // ③ 이미지 등장 애니메이션 (재생 가능)
      // --------------------------
      // main
      if (id === "#top") {
        if (scrollTop >= secTop - winH * 0.8) {
          $("#mainTxt img").addClass("show-img");
        } else {
          $("#mainTxt img").removeClass("show-img");
        }
      }

      // meddle
      if (id === "#meddle") {
        if (scrollTop >= secTop - winH * 0.7) {
          $("#meddle .med-img").addClass("show-img");
        } else {
          $("#meddle .med-img").removeClass("show-img");
        }
      }

      // footer
      if (id === "#footer") {
        if (scrollTop >= secTop - winH * 0.7) {
          $("#footer .foot-img").addClass("show-img");
        } else {
          $("#footer .foot-img").removeClass("show-img");
        }
      }
    });
  });
});
