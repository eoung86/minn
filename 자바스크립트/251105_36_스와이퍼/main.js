// <!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>;

// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
  //spaceBetween: 30, ->슬라이드 사이 간격
  centeredSlides: true,
  // centeredSlides ->활성된 슬라이드를 가운데에 배치 / true-> 항상 가운데 정렬

  loop: true,
  //loop: true -> 처음으로 자연스럽게 / 마지막슬라이드 다음이 처음슬라이드

  autoplay: {
    pauseOnMouseEnter: true,
    //autoplay 옵션 안에서 사용하는 설정 / 마우스가 슬라이더 위에 올라가면 일시정지

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
