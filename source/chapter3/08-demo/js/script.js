const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `컬러 코드：${color.value}`;

// 컬러 피커가 변경되면 colorBg를 실행시킴
color.addEventListener('input', colorBg);