const menu = document.querySelector('#menu');

const strawberry = {
    name: '딸기',
    img: 'strawberry.jpg',
    price: 4500,
};
console.log(strawberry);

const lists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];

for(let i = 0; i < lists.length; i++){
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}