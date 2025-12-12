const nav = document.querySelector("#nav");
const tit = document.querySelectorAll(".tit");

tit.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    nav.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    nav.classList.remove("active");
  });
});
