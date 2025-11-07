const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// 컬러 피커를 조작할 때 일련의 동작
const colorBg = () => {
  // 컬러 코드를 표시
  text.textContent = `컬러 코드：${color.value}`;
}

// 컬러 피커가 변경되면 colorBg를 실행시킴
color.addEventListener('input', colorBg);