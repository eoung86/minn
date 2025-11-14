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

// ======================
// Full Page Scroll + Dot Navigation
// ======================
const sections = document.querySelectorAll("#top, #middle, #footer");
const dotNav = document.querySelector(".dot-nav");

// 점 자동 생성
dotNav.innerHTML = ""; // 기존 점 제거
sections.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotNav.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
let current = 0;
let scrolling = false;

// 섹션 이동 함수
function showSection(index) {
  if (scrolling) return;
  scrolling = true;
  current = index;

  sections[index].scrollIntoView({ behavior: "smooth" });

  // 점 활성화
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // 이미지 애니메이션 초기화
  document
    .querySelectorAll(".mid-img, .foot-img")
    .forEach((el) => el.classList.remove("show-img"));

  // 섹션별 이미지 활성화
  if (sections[index].querySelector(".mid-img"))
    sections[index].querySelector(".mid-img").classList.add("show-img");
  if (sections[index].querySelector(".foot-img"))
    sections[index].querySelector(".foot-img").classList.add("show-img");

  setTimeout(() => (scrolling = false), 1000); // 1초 동안 스크롤 막기
}

// 휠 이벤트
window.addEventListener("wheel", (e) => {
  if (scrolling) return;
  if (e.deltaY > 0 && current < sections.length - 1) {
    showSection(current + 1);
  } else if (e.deltaY < 0 && current > 0) {
    showSection(current - 1);
  }
});

// 점 클릭 이동
dots.forEach((dot, i) => dot.addEventListener("click", () => showSection(i)));

// 초기 상태
showSection(0);

// 스크롤바 숨기기
document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";
