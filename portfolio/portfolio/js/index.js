const container = document.getElementById("portfolio");
let isScrolling = false;

// -----------------------------------------
// PC 전용 스냅 스크롤 (1048px 초과에만 실행)
// -----------------------------------------
if (window.innerWidth > 1048) {
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
      }, 800);
    },
    { passive: false }
  );
}

// -----------------------------------------
// main 애니메이션
// -----------------------------------------
const main = document.querySelector(".main");

function runMainIntro() {
  main.classList.remove("main-show", "main-h1-reveal");

  const oldMask = document.querySelector(".main-h1-mask");
  if (oldMask) oldMask.remove();

  const mask = document.createElement("div");
  mask.classList.add("main-h1-mask");
  main.appendChild(mask);

  setTimeout(() => main.classList.add("main-show"), 400);
  setTimeout(() => main.classList.add("main-h1-reveal"), 700);
  setTimeout(() => mask.classList.add("reveal"), 900);
}

window.addEventListener("load", runMainIntro);

const mainObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) runMainIntro();
    });
  },
  { threshold: 0.6 }
);

mainObserver.observe(main);

// -----------------------------------------
// about 애니메이션
// -----------------------------------------
const about = document.querySelector(".about");

if (about) {
  const order = [
    about.querySelector(".poto"),
    about.querySelector(".sb-txt1"),
    about.querySelector(".sb-txt2"),
    about.querySelector(".sb-icon"),
  ].filter(Boolean);

  order.forEach((el) => el.classList.add("about-drop"));

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          order.forEach((el, i) =>
            setTimeout(() => el.classList.add("about-drop-show"), i * 200)
          );
          aboutObserver.unobserve(about);
        }
      });
    },
    { threshold: 0.3 }
  );

  aboutObserver.observe(about);
}

// -----------------------------------------
// porjt
// -----------------------------------------
const porjt = document.querySelector("#porjt");

function porjtScrollEvent() {
  if (!porjt) return;

  const rect = porjt.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) porjt.classList.add("on");
}

container.addEventListener("scroll", porjtScrollEvent);
window.addEventListener("load", porjtScrollEvent);

// -----------------------------------------
// chai797
// -----------------------------------------
const chai797 = document.querySelector("#chai797");

function chai797Event() {
  if (!chai797) return;

  const rect = chai797.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) chai797.classList.add("show");
}

container.addEventListener("scroll", chai797Event);
window.addEventListener("load", chai797Event);

// -----------------------------------------
// woodin
// -----------------------------------------
const woodin = document.querySelector("#woodin");

function woodinEvent() {
  if (!woodin) return;

  const rect = woodin.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) woodin.classList.add("show");
}

container.addEventListener("scroll", woodinEvent);
window.addEventListener("load", woodinEvent);
