const open = document.querySelector('#open');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');
const showKeyframes = {
  opacity: [0, 1],
  visibility: 'visible',
};
const hideKeyframes = {
  opacity: [1, 0],
  visibility: 'hidden',
};
const options = {
  duration: 800,
  easing: 'ease',
  fill: 'forwards',
};

// 모달창 열기
open.addEventListener('click', () => {
  modal.animate(showKeyframes, options);
  mask.animate(showKeyframes, options);
});

// 모달창 닫기
close.addEventListener('click', () => {
  modal.animate(hideKeyframes, options);
  mask.animate(hideKeyframes, options);
});

// 마스크를 클릭하면 모달창 닫기
mask.addEventListener('click', () => {
  close.click();
});