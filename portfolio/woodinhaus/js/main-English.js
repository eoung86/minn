/* #########################################################
   #1. TOP 섹션 오프닝 애니메이션
   - 배경 펼쳐짐 → 텍스트 등장 → 네비게이션 등장 순서
######################################################### */
document.addEventListener("DOMContentLoaded", function () {
  const woodin = document.getElementById("woodin");

  // 최초 상태 초기화
  woodin.classList.remove("show-top", "show-text", "show-nav");
  void woodin.offsetHeight; // 강제 리플로우로 애니메이션 초기화

  // 배경 펼침
  setTimeout(() => woodin.classList.add("show-top"), 50);

  // 텍스트 등장
  setTimeout(() => woodin.classList.add("show-text"), 850);

  // 네비게이션 등장
  setTimeout(() => woodin.classList.add("show-nav"), 1350);
});

/* #########################################################
   #2. 스크롤 시 각 섹션(meddle1~5) 애니메이션 실행
######################################################### */

// 해당 섹션이 화면 안에 들어왔는지 체크하는 함수
function sectionInView(element, ratioTop = 0.6, ratioBottom = 0.3) {
  const rect = element.getBoundingClientRect();
  const winH = window.innerHeight;
  return rect.top < winH * ratioTop && rect.bottom > winH * ratioBottom;
}

// meddle1 텍스트 애니메이션
window.addEventListener("scroll", () => {
  const sec = document.getElementById("meddle1");
  sec.classList.toggle("show-ani", sectionInView(sec));
});

// meddle2 텍스트 애니메이션
window.addEventListener("scroll", () => {
  const sec = document.getElementById("meddle2");
  sec.classList.toggle("show-ani", sectionInView(sec));
});

// meddle3 텍스트 & 이미지 애니메이션
window.addEventListener("scroll", () => {
  const sec = document.getElementById("meddle3");
  sec.classList.toggle("show-ani", sectionInView(sec));
});

// meddle4(전시 슬라이드 느낌) 애니메이션
function checkMed4() {
  const sec = document.getElementById("meddle4");
  const rect = sec.getBoundingClientRect();
  const trigger = window.innerHeight * 0.75;

  sec.classList.toggle("show-ani", rect.top < trigger && rect.bottom > 0);
}
window.addEventListener("scroll", checkMed4);
checkMed4();

// meddle5(영상 영역) 애니메이션
function checkMed5() {
  const sec = document.getElementById("meddle5");
  const rect = sec.getBoundingClientRect();
  const trigger = window.innerHeight * 0.75;

  sec.classList.toggle("show-ani", rect.top < trigger && rect.bottom > 0);
}
window.addEventListener("scroll", checkMed5);
checkMed5();

/* #########################################################
   #3. meddle1 이미지 자동 전환 (2.5초 간격)
######################################################### */
document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.querySelector(".med1-img1");
  const img2 = document.querySelector(".med1-img2");
  let showFirst = true;

  // 이미지 번갈아 변경
  setInterval(() => {
    img1.style.opacity = showFirst ? 0 : 1;
    img2.style.opacity = showFirst ? 1 : 0;
    showFirst = !showFirst;
  }, 2500);
});

/* #########################################################
   #4. 영상 슬라이더 + 진행바 + 텍스트 변경
######################################################### */
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

// ⭐ 첫 로드시 영상/텍스트/진행바 초기화
function initVideo() {
  videos.forEach((vid, idx) => {
    vid.style.display = idx === 0 ? "block" : "none";
  });

  // 영어 문구로 기본 설정
  mediaDesc.textContent = "Opening the Value of Space | 30 sec";
  progressBar.style.width = "0%";
}
initVideo();

// 특정 영상 보여주는 함수
function showSlide(index) {
  videos.forEach((vid, idx) => {
    vid.style.display = idx === index ? "block" : "none";
  });

  // 문구 변경 (1번 영상은 고정)
  if (index === 0) {
    mediaDesc.textContent = "Opening the Value of Space | 30 sec";
  } else {
    mediaDesc.textContent = changeBtns[index - 1].dataset.text || "";
  }

  // progress bar 업데이트
  let percent = 0;
  if (index === 0) percent = 0;
  else if (index === total - 1) percent = 100;
  else percent = (index / (total - 1)) * 100;

  progressBar.style.width = percent + "%";
}

// 오른쪽 화살표 클릭 시 다음 영상으로
rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  showSlide(currentIndex);
});

// 왼쪽 화살표 클릭 시 이전 영상으로
leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  showSlide(currentIndex);
});

/* #########################################################
   #5. 전체 페이지 풀스크롤 + 네비 색상 반전 + 인디케이터
######################################################### */
document.addEventListener("DOMContentLoaded", function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  // 섹션 목록
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

  // 네비 관련 요소
  const nav = document.getElementById("nav");
  const logoImg = nav.querySelector(".logo img");
  const navTexts = nav.querySelectorAll(".menu span");
  const navIconImgs = nav.querySelectorAll(".nav-icon img");

  // 인디케이터 표시 업데이트
  function updateIndicator(index) {
    indicatorItems.forEach((el, i) =>
      el.classList.toggle("active", i === index)
    );
  }

  // footer 영역에서는 nav 숨김
  function applyNavVisibility() {
    if (currentSection === 6) nav.classList.add("hide-nav");
    else nav.classList.remove("hide-nav");
  }

  // meddle3에서는 nav 색 반전(흰색)
  function applyNavColor() {
    const rect3 = sections[3].getBoundingClientRect();
    const mid = window.innerHeight / 2;
    const active = rect3.top < mid && rect3.bottom > mid;

    logoImg.style.filter = active ? "brightness(0) invert(1)" : "";
    navTexts.forEach((t) => (t.style.color = active ? "#fff" : ""));
    navIconImgs.forEach(
      (img) => (img.style.filter = active ? "brightness(0) invert(1)" : "")
    );
  }

  /* ⭐ 수정된 부분: #1(상단 인디케이터) 클릭하면 #nav 위치로 스크롤 */
  function scrollToSection(index) {
    if (isScrolling || index < 0 || index >= sections.length) return;
    isScrolling = true;

    let target;

    // index === 0일 때 nav 위치로 이동
    if (index === 0) {
      target = document.getElementById("nav").offsetTop;
    } else {
      target = window.scrollY + sections[index].getBoundingClientRect().top;
    }

    window.scrollTo({ top: target, behavior: "smooth" });

    currentSection = index;
    updateIndicator(index);
    applyNavVisibility();
    applyNavColor();

    setTimeout(() => (isScrolling = false), 800);
  }

  // 마우스 휠로 섹션 이동
  window.addEventListener(
    "wheel",
    (e) => {
      if (isScrolling) return;
      if (e.deltaY > 0) scrollToSection(currentSection + 1);
      else scrollToSection(currentSection - 1);
    },
    { passive: false }
  );

  // 인디케이터 클릭 이동
  indicatorItems.forEach((el, i) =>
    el.addEventListener("click", () => scrollToSection(i))
  );

  // 우측 하단 TOP 버튼 → nav로 이동
  document.getElementById("top-btn").addEventListener("click", () => {
    const navTop = document.getElementById("nav").offsetTop;
    window.scrollTo({ top: navTop, behavior: "smooth" });
  });

  // 스크롤 중 현재 섹션 체크
  window.addEventListener("scroll", () => {
    const pos = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec, i) => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        currentSection = i;
        updateIndicator(i);
        applyNavVisibility();
        applyNavColor();
      }
    });
  });

  applyNavVisibility();
  applyNavColor();
});
