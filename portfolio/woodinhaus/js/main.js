// #top 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const woodin = document.getElementById("woodin");

  /* 0) 초기화 */
  woodin.classList.remove("show-top", "show-text", "show-nav");

  /* 강제 리플로우 */
  void woodin.offsetHeight;

  /* 1) 배경 펼쳐짐 */
  setTimeout(() => {
    woodin.classList.add("show-top");
  }, 50);

  /* 2) 텍스트 등장 */
  setTimeout(() => {
    woodin.classList.add("show-text");
  }, 850);

  /* 3) nav 등장 */
  setTimeout(() => {
    woodin.classList.add("show-nav");
  }, 1350);
});

// ---------------------------------------------------------------------
// meddle1 애니메이션
window.addEventListener("scroll", () => {
  const med1 = document.getElementById("meddle1");
  const rect = med1.getBoundingClientRect();
  const winH = window.innerHeight;
  if (rect.top < winH * 0.6 && rect.bottom > winH * 0.3) {
    med1.classList.add("show-ani");
  } else {
    med1.classList.remove("show-ani");
  }
});

// meddle2 애니메이션
window.addEventListener("scroll", () => {
  const med2 = document.getElementById("meddle2");
  const rect2 = med2.getBoundingClientRect();
  const winH = window.innerHeight;
  if (rect2.top < winH * 0.6 && rect2.bottom > winH * 0.3) {
    med2.classList.add("show-ani");
  } else {
    med2.classList.remove("show-ani");
  }
});

// meddle3 애니메이션
window.addEventListener("scroll", () => {
  const med3 = document.getElementById("meddle3");
  const rect3 = med3.getBoundingClientRect();
  const winH = window.innerHeight;

  if (rect3.top < winH * 0.6 && rect3.bottom > winH * 0.3) {
    med3.classList.add("show-ani");
  } else {
    med3.classList.remove("show-ani");
  }
});

// meddle4 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const sec4 = document.getElementById("meddle4");

  function checkMed4() {
    const rect = sec4.getBoundingClientRect();
    const trigger = window.innerHeight * 0.75;
    if (rect.top < trigger && rect.bottom > 0) {
      sec4.classList.add("show-ani");
    } else {
      sec4.classList.remove("show-ani");
    }
  }

  window.addEventListener("scroll", checkMed4);
  checkMed4();
});

// meddle5 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const sec5 = document.getElementById("meddle5");

  function checkMed5() {
    const rect = sec5.getBoundingClientRect();
    const trigger = window.innerHeight * 0.75;

    if (rect.top < trigger && rect.bottom > 0) {
      sec5.classList.add("show-ani");
    } else {
      sec5.classList.remove("show-ani");
    }
  }

  window.addEventListener("scroll", checkMed5);
  checkMed5();
});

// ---------------------------------------------------------------------
// meddle1 이미지 전환
document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.querySelector(".med1-img1");
  const img2 = document.querySelector(".med1-img2");
  let showFirst = true;

  setInterval(() => {
    if (showFirst) {
      img1.style.opacity = 0;
      img2.style.opacity = 1;
    } else {
      img1.style.opacity = 1;
      img2.style.opacity = 0;
    }
    showFirst = !showFirst;
  }, 2500);
});

// ---------------------------------------------------------------------
// meddle5 영상 및 텍스트
const videos = Array.from(
  document.querySelectorAll(
    "#meddle5 .video .ytub, #meddle5 .video .ytubactive"
  )
);
const mediaDesc = document.getElementById("media-desc");
const changeBtns = Array.from(document.querySelectorAll(".change-btn"));
const progressBar = document.querySelector(".progress-bar");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let currentIndex = 0;
const total = videos.length;

function init() {
  videos.forEach((vid, idx) => {
    vid.style.display = idx === 0 ? "block" : "none";
  });
  mediaDesc.textContent = "공간의 가치를 열다 | 30초";
  progressBar.style.width = "0%";
}

init();

function showSlide(index) {
  videos.forEach((vid, idx) => {
    vid.style.display = idx === index ? "block" : "none";
  });

  if (index === 0) {
    mediaDesc.textContent = "Opening the Value of Space | 30 sec";
  } else {
    const textIndex = index - 1;
    mediaDesc.textContent = changeBtns[textIndex].dataset.text || "";
  }

  let progressPercent = 0;
  if (index === 0) {
    progressPercent = 0;
  } else if (index === total - 1) {
    progressPercent = 100;
  } else {
    progressPercent = (index / (total - 1)) * 100;
  }

  progressBar.style.width = progressPercent + "%";
}

rightBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= total) currentIndex = 0;
  showSlide(currentIndex);
});

leftBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = total - 1;
  showSlide(currentIndex);
});

// ---------------------------------------------------------------------
// 스크롤 이벤트 + 1번(#top)이 아니라 #nav로 이동하도록 수정된 핵심 부분

document.addEventListener("DOMContentLoaded", function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  const sections = [
    document.getElementById("top"),
    document.getElementById("meddle1"),
    document.getElementById("meddle2"),
    document.getElementById("meddle3"),
    document.getElementById("meddle4"),
    document.getElementById("meddle5"),
    document.getElementById("footer"),
  ];

  const indicatorItems = document.querySelectorAll("#section-indicator div");
  let currentSection = 0;
  let isScrolling = false;

  const nav = document.getElementById("nav");
  const logoImg = nav.querySelector(".logo img");
  const navTexts = nav.querySelectorAll(".menu span");
  const navIconImgs = nav.querySelectorAll(".nav-icon img");

  function updateIndicator(index) {
    indicatorItems.forEach((el, i) =>
      el.classList.toggle("active", i === index)
    );
  }

  function applyNavVisibility() {
    if (currentSection === 6) {
      nav.classList.add("hide-nav");
    } else {
      nav.classList.remove("hide-nav");
    }
  }

  function applyNavColor() {
    const rect3 = sections[3].getBoundingClientRect();
    const mid = window.innerHeight / 2;

    if (rect3.top < mid && rect3.bottom > mid) {
      logoImg.style.filter = "brightness(0) invert(1)";
      navTexts.forEach((t) => (t.style.color = "#fff"));
      navIconImgs.forEach(
        (img) => (img.style.filter = "brightness(0) invert(1)")
      );
    } else {
      logoImg.style.filter = "";
      navTexts.forEach((t) => (t.style.color = ""));
      navIconImgs.forEach((img) => (img.style.filter = ""));
    }
  }

  // ⭐ 수정된 scrollToSection — index 0은 #nav로 이동
  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    if (isScrolling) return;

    isScrolling = true;

    let scrollTarget;

    if (index === 0) {
      scrollTarget = document.getElementById("nav").offsetTop;
    } else {
      const section = sections[index];
      scrollTarget = window.scrollY + section.getBoundingClientRect().top;
    }

    window.scrollTo({ top: scrollTarget, behavior: "smooth" });

    currentSection = index;
    updateIndicator(currentSection);
    applyNavVisibility();
    applyNavColor();

    setTimeout(() => (isScrolling = false), 800);
  }

  // 휠 스크롤
  window.addEventListener(
    "wheel",
    (e) => {
      if (isScrolling) return;
      if (e.deltaY > 0) scrollToSection(currentSection + 1);
      else if (e.deltaY < 0) scrollToSection(currentSection - 1);
    },
    { passive: false }
  );

  // 인디케이터 클릭
  indicatorItems.forEach((el, i) =>
    el.addEventListener("click", () => scrollToSection(i))
  );

  // TOP 버튼 → #nav로 이동
  document.getElementById("top-btn").addEventListener("click", () => {
    const navTop = document.getElementById("nav").offsetTop;
    window.scrollTo({ top: navTop, behavior: "smooth" });
  });

  // 현재 위치 감지
  window.addEventListener("scroll", () => {
    const pos = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec, i) => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        currentSection = i;
        updateIndicator(currentSection);
        applyNavVisibility();
        applyNavColor();
      }
    });
  });

  applyNavVisibility();
  applyNavColor();
});
