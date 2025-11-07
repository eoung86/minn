const menu = document.querySelector('#menu');

// const strawberry = {
//     name: '딸기',
//     img: 'strawberry.jpg',
//     price: 4500,
// };
// console.log(strawberry.name);
// console.log(strawberry['img']);

// const key = 'name';
// console.log(strawberry.key);
// console.log(strawberry[key]);

// const lists = [
//     'strawberry.jpg',
//     'lime.jpg',
//     'mango.jpg',
//     'lemon.jpg',
//     'fig.jpg',
//     'apple.jpg',
// ];

const lists = [
    {
      name: '딸기',
      img: 'strawberry.jpg',
      price: 4500,
    },
    {
      name: '라임',
      img: 'lime.jpg',
      price: 4000,
    },
    {
      name: '망고',
      img: 'mango.jpg',
      price: 5000,
    },
    {
      name: '레몬',
      img: 'lemon.jpg',
      price: 4000,
    },
    {
      name: '무화과',
      img: 'fig.jpg',
      price: 5000,
    },
    {
      name: '사과',
      img: 'apple.jpg',
      price: 4000,
    },
];
console.log(lists[0].name);

for(let i = 0; i < lists.length; i++){
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}