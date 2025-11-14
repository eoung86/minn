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

document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    document.querySelector("#top"),
    document.querySelector("#meddle"),
    document.querySelector("#footer"),
  ].filter(Boolean);
  const dots = Array.from(document.querySelectorAll(".dot"));

  if (sections.length === 0) {
    console.warn(
      "스크롤 섹션이 없습니다. #top, #middle, #footer 아이디를 확인하세요."
    );
    return;
  }
  if (dots.length !== sections.length) {
    console.warn(
      "dot 수와 섹션 수가 다릅니다. dot 개수를 섹션 수와 맞춰주세요."
    );
  }

  let current = 0;
  let scrolling = false;
  const SCROLL_LOCK_MS = 900;

  function clampIndex(i) {
    if (i < 0) return 0;
    if (i > sections.length - 1) return sections.length - 1;
    return i;
  }

  function activateDot(idx) {
    dots.forEach((d) => d.classList.remove("active"));
    if (dots[idx]) dots[idx].classList.add("active");
  }

  function revealImagesForSection(idx) {
    document
      .querySelectorAll(".med-img, .foot-img, #mainTxt")
      .forEach((el) => el.classList.remove("show-img"));
    const sec = sections[idx];
    if (!sec) return;
    const mid = sec.querySelector(".med-img");
    const foot = sec.querySelector(".foot-img");
    const main = sec.querySelector("#mainTxt");
    if (mid) mid.classList.add("show-img");
    if (foot) foot.classList.add("show-img");
    if (main) main.classList.add("show-img");
  }

  function showSection(index) {
    index = clampIndex(index);
    if (scrolling || index === current) return;
    scrolling = true;
    current = index;

    const top = sections[index].offsetTop;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    activateDot(index);
    revealImagesForSection(index);

    setTimeout(() => {
      scrolling = false;
    }, SCROLL_LOCK_MS);
  }

  function init() {
    const y = window.scrollY || window.pageYOffset;
    let nearest = 0;
    let minDiff = Infinity;
    sections.forEach((sec, i) => {
      const d = Math.abs(sec.offsetTop - y);
      if (d < minDiff) {
        minDiff = d;
        nearest = i;
      }
    });
    current = nearest;
    window.scrollTo({ top: sections[current].offsetTop });
    activateDot(current);
    revealImagesForSection(current);
  }

  init();
  window.addEventListener(
    "wheel",
    function (e) {
      if (scrolling) {
        e.preventDefault();
        return;
      }
      const delta = e.deltaY;
      if (Math.abs(delta) < 20) return;
      if (delta > 0 && current < sections.length - 1) {
        showSection(current + 1);
      } else if (delta < 0 && current > 0) {
        showSection(current - 1);
      }
    },
    { passive: false }
  );
  let touchStartY = null;
  window.addEventListener(
    "touchstart",
    (e) => {
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );
  window.addEventListener(
    "touchend",
    (e) => {
      if (touchStartY === null) return;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dy) < 50) {
        touchStartY = null;
        return;
      }
      if (dy < 0 && current < sections.length - 1) {
        showSection(current + 1);
      } else if (dy > 0 && current > 0) {
        showSection(current - 1);
      }
      touchStartY = null;
    },
    { passive: true }
  );

  window.addEventListener("keydown", (e) => {
    if (scrolling) return;
    if (e.key === "ArrowDown") {
      showSection(current + 1);
    } else if (e.key === "ArrowUp") {
      showSection(current - 1);
    }
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSection(i));
  });

  window.addEventListener("resize", () => {
    setTimeout(() => {
      window.scrollTo({ top: sections[current].offsetTop });
    }, 120);
  });
});
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});
