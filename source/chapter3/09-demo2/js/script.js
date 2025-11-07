const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// 컬러 피커가 변경되면 컬러 코드를 표시
color.addEventListener('input', () => {
  text.textContent = `컬러 코드：${color.value}`;
});