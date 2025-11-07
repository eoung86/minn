const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');
const keyframes = {
  transform: ['scaleX(1)', 'scaleX(0)'],
};
const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards',
};

window.addEventListener('load', () => {
  // 로딩 중(좌측)
  loadingAreaLeft.animate(keyframes, options);
  
  // 로딩 중(우측)
  loadingAreaRight.animate(keyframes, options);
});