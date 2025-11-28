document.addEventListener("DOMContentLoaded", () => {
  const top = document.getElementById("top");

  // 초기화 (로드 때 항상 다시 애니메이션 시작)
  top.classList.remove("show-p", "show-h1");
  void top.offsetWidth; // 리플로우 → 애니메이션 재실행

  // p 먼저
  setTimeout(() => {
    top.classList.add("show-p");
  }, 200);

  // h1 나중
  setTimeout(() => {
    top.classList.add("show-h1");
  }, 900);
});
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#meddle ul");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2, // 20% 보이면 애니메이션 실행
    }
  );

  items.forEach((item) => observer.observe(item));
});
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const arr = document.querySelector("#btn .arr");
  const clickBox = document.querySelector("#btn .arr .click");

  // 1) arr 클릭 → 메뉴 열림
  arr.addEventListener("click", (e) => {
    e.stopPropagation();
    clickBox.classList.add("show");
  });

  // 2) arr 밖으로 벗어나면 닫힘
  arr.addEventListener("mouseleave", () => {
    clickBox.classList.remove("show");
  });

  // 3) clickBox 안에서 움직이는 건 ok
  //    clickBox 밖으로 나가면 닫힘
  clickBox.addEventListener("mouseleave", () => {
    clickBox.classList.remove("show");
  });
});
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // 브라우저가 이전 스크롤 위치 기억하지 않도록 설정
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // 항상 nav 위치로 스크롤 이동
  const nav = document.getElementById("nav");
  if (nav) {
    const navTop = nav.offsetTop;
    setTimeout(() => {
      window.scrollTo({
        top: navTop,
        behavior: "instant", // or "auto"
      });
    }, 10);
  }
});
// -------------------------------------------------------------
// TOP 버튼 → #nav로 이동
document.getElementById("top-btn").addEventListener("click", () => {
  const navTop = document.getElementById("nav").offsetTop;
  window.scrollTo({ top: navTop, behavior: "smooth" });
});
