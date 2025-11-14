// ----------------footer family site toggle----------------
let bool = true;
const family = document.querySelector("#family");
const familyHvr = family.querySelector(".hvr");

family.addEventListener("click", (e) => {
  e.preventDefault();
  if (bool) {
    familyHvr.style.height = "250px";
  } else {
    familyHvr.style.height = "0";
  }
  bool = !bool;
});

// ----------------top icon hover language----------------
const hoverItem = document.querySelector(".hover");
const sv = hoverItem.querySelector(".sv");

hoverItem.addEventListener("mouseenter", () => {
  sv.style.display = "block";
});
hoverItem.addEventListener("mouseleave", () => {
  sv.style.display = "none";
});

// ----------------search dropdown----------------
const searchItems = document.querySelectorAll("#meddle .mdl .search");

searchItems.forEach((search) => {
  const header = search.querySelector("h4");
  const ul = search.querySelector("ul");

  // ul이 없으면 이 search는 건너뜀
  if (!ul) return;

  const liItems = ul.querySelectorAll("li");

  // 헤더 클릭 시 ul 토글
  header.addEventListener("click", () => {
    ul.classList.toggle("active");
  });

  // 마우스 떠날 때 ul 닫기
  search.addEventListener("mouseleave", () => {
    ul.classList.remove("active");
  });

  // li 클릭 시 헤더에 내용 표시 후 ul 닫기
  liItems.forEach((li) => {
    li.addEventListener("click", () => {
      header.textContent = li.textContent.trim();
      ul.classList.remove("active");
    });
  });
});

// ----------------scroll animation for plc----------------
document.addEventListener("DOMContentLoaded", () => {
  const plcs = document.querySelectorAll("#meddle .place .plc");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          console.log("보임:", entry.target.querySelector("h4").textContent);
        } else {
          // 화면에서 나가면 show 제거 → 다시 스크롤 올리면 애니 실행
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 } // 30% 보이면 실행
  );

  plcs.forEach((plc) => observer.observe(plc));
});
