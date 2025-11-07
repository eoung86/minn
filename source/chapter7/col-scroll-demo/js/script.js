// 관찰 대상이 범위 안에 들어오면 실행하는 동작
const animateScroll = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: [0, '100%',],
        },
        {
          duration: 2000,
          pseudoElement: '::before',
          easing: 'ease',
          fill: 'forwards',
        }
      );
      
      // 한 번 표시되었다면 관찰 중지
      obs.unobserve(entry.target);
    }
  });
};

// 관찰 설정
const scrollObserver = new IntersectionObserver(animateScroll);

// 관찰 지시
const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((scrollElement) => {
  scrollObserver.observe(scrollElement);
});