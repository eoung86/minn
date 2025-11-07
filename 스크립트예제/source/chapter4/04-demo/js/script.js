const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // 혹시 버튼의 텍스트가 '다크 모드로 만들기'로 되어 있을 경우
  if(btn.textContent === '다크 모드로 만들기'){
    // 클릭하면 '라이트 모드로 만들기'로 변경
    btn.textContent = '라이트 모드로 만들기';
  
  // 그렇지 않은 경우 ('라이트 모드로 만들기'로 되어 있으면)
  } else {
    // 클릭하면 '다크 모드로 만들기'로 돌아가기
    btn.textContent = '다크 모드로 만들기';
  }
});