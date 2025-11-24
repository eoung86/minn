// 스크롤

const container = document.getElementById("portfolio");
let isScrolling = false;

container.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    const delta = e.deltaY;
    const sections = [...container.children];
    const currentScroll = container.scrollTop;
    const viewHeight = window.innerHeight;

    let now = Math.round(currentScroll / viewHeight);

    if (delta > 0) {
      now = Math.min(now + 1, sections.length - 1);
    } else {
      now = Math.max(now - 1, 0);
    }

    container.scrollTo({
      top: now * viewHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 850);
  },
  { passive: false }
);

// main 애니메이션

const main = document.querySelector(".main");

function runMainIntro() {
  main.classList.remove("main-show");
  main.classList.remove("main-h1-reveal");

  // 기존 마스크 제거
  const oldMask = document.querySelector(".main-h1-mask");
  if (oldMask) oldMask.remove();

  // 새 마스크 생성 (중앙 작은 원)
  const mask = document.createElement("div");
  mask.classList.add("main-h1-mask");
  main.appendChild(mask);

  // p, span 등장
  setTimeout(() => {
    main.classList.add("main-show");
  }, 500);

  // h1 blur → clear, scale → 1
  setTimeout(() => {
    main.classList.add("main-h1-reveal");
  }, 800);

  // 마스크 확산 (안쪽 → 바깥)
  setTimeout(() => {
    mask.classList.add("reveal");
  }, 1000);
}

// 첫 로딩 실행
window.addEventListener("load", runMainIntro);

const mainObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) runMainIntro();
    });
  },
  { threshold: 0.6 }
);

mainObserver.observe(main);

// about
const about = document.querySelector(".about");

if (about) {
  const order = [
    about.querySelector(".poto"),
    about.querySelector(".sb-txt1"),
    about.querySelector(".sb-txt2"),
    about.querySelector(".sb-icon"),
  ].filter(Boolean);

  // 초기 상태 클래스 삽입
  order.forEach((el) => el.classList.add("about-drop"));

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 순차 drop-in
          order.forEach((el, i) => {
            setTimeout(() => el.classList.add("about-drop-show"), i * 200);
          });

          // 단 한 번만 실행
          aboutObserver.unobserve(about);
        }
      });
    },
    { threshold: 0.3 }
  );

  aboutObserver.observe(about);
}

// porjt
const porjt = document.querySelector("#porjt");

function porjtScrollEvent() {
  if (!porjt) return;

  const rect = porjt.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    porjt.classList.add("on");
  }
}

container.addEventListener("scroll", porjtScrollEvent);
window.addEventListener("load", porjtScrollEvent);

// ----------------- chai797 애니메이션 -----------------
const chai797 = document.querySelector("#chai797");

function chai797Event() {
  if (!chai797) return;

  const rect = chai797.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    chai797.classList.add("show");
  }
}

container.addEventListener("scroll", chai797Event);
window.addEventListener("load", chai797Event);

// ----------------- woodin 애니메이션 -----------------
const woodin = document.querySelector("#woodin");

function woodinEvent() {
  if (!woodin) return;

  const rect = woodin.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.8;

  if (rect.top < triggerPoint) {
    woodin.classList.add("show");
  }
}
container.addEventListener("scroll", woodinEvent);
window.addEventListener("load", woodinEvent);
