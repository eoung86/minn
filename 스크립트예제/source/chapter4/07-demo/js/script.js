const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;
  
  // 100자가 넘어가면
  if (text.value.length > 100) {
    // alert 클래스를 추가
    count.classList.add('alert');
    // 그렇지 않으면 (100자 이내라면)
  } else {
    // alert 클래스 제거
    count.classList.remove('alert');
  }
});