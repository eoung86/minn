const getScrollPercent = () => {
  // 스크롤 양
  const scrolled = window.scrollY;
  //console.log(`${scrolled} 스크롤 했습니다`);

  // 페이지 전체 높이
  const pageHeight = document.documentElement.scrollHeight;

  // 표시 영역 높이
  const viewHeight = document.documentElement.clientHeight;
  //console.log(`페이지 높이 : ${pageHeight}, 표시 영역 높이 : ${viewHeight}`)

  // 스크롤한 비율
  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  //console.log(percentage);
  
  // 프로그레스 바의 폭 설정
  document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);