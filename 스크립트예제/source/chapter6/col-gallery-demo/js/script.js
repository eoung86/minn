const menu = document.querySelector('#menu');

const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];

for(let i = 0; i < lists.length; i++){
    // HTML에 요소 생성
    const content = `<div class="img-item"><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
    
    // 모든 img-item 클래스 가져오기
    const items = document.querySelectorAll('.img-item');
    
    // 애니메이션 설정
    const keyframes = {
      opacity: [0, 1]
    };
    const options = {
      duration: 600,
      delay: i * 300,
      fill: 'forwards',
    };
    items[i].animate(keyframes, options);
}