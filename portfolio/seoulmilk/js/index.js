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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
