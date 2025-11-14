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

document.addEventListener("DOMContentLoaded", () => {
  // mdl3, mdl5 안의 .sv 요소 선택
  const scrollSvItems = document.querySelectorAll(
    "#middle .mdl3 .sv, #middle .mdl5 .sv"
  );

  // 좌/우 번갈아 초기 클래스 추가
  scrollSvItems.forEach((item, index) => {
    if (index % 2 === 0) {
      item.classList.add("scroll-left");
    } else {
      item.classList.add("scroll-right");
    }
  });

  function scrollAnimation() {
    const triggerBottom = window.innerHeight * 0.85;

    scrollSvItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;

      // 화면에 일부라도 들어오면 active
      if (itemTop < window.innerHeight && itemBottom > 0) {
        item.classList.add("active");
      } else {
        // 화면 밖으로 나가면 active 제거 → 다시 스크롤 시 재생
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", scrollAnimation);

  // 페이지 로드 시 이미 화면 안에 있는 경우 처리
  scrollAnimation();
});
