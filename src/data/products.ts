import { nanoid } from 'nanoid';

const products = [
  {
    name: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
    img: '/img/toothbrush.jpg',
    price: 5660,
    id: nanoid(),
    categoryId: 1,
    colors: ['#222', '#8BE000'],
  }, {
    name: 'Смартфон Xiaomi Mi Mix 3 6/128GB',
    img: '/img/phone.jpg',
    price: 5660,
    id: nanoid(),
    categoryId: 1,
    colors: ['#222', '#8BE000'],
  }, {
    name: 'Электроскейт Razor Cruiser',
    img: '/img/board.jpg',
    price: 24690,
    id: nanoid(),
    categoryId: 2,
    colors: ['#222', '#73B6EA'],
  }, {
    name: 'Смартфон Xiaomi Mi A3 4/64GB Android One',
    img: '/img/phone-2.jpg',
    price: 14960,
    id: nanoid(),
    categoryId: 3,
    colors: ['#222', '#000'],
  },
];
export default products;
