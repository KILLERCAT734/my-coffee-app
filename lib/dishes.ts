export interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'coffee' | 'drinks' | 'desserts';
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: 'Эспрессо',
    price: 150,
    description: 'Классический итальянский эспрессо из свежеобжаренных зёрен',
    image: '/dishes/espresso.jpg',
    category: 'coffee',
  },
  {
    id: 2,
    name: 'Капучино',
    price: 220,
    description: 'Эспрессо с нежной молочной пенкой и лёгкой корицей',
    image: '/dishes/cappuccino.jpg',
    category: 'coffee',
  },
  {
    id: 3,
    name: 'Латте',
    price: 250,
    description: 'Мягкий кофейный напиток с большим количеством молока',
    image: '/dishes/latte.jpg',
    category: 'coffee',
  },
  {
    id: 4,
    name: 'Флэт Уайт',
    price: 240,
    description: 'Двойной эспрессо с тонким слоем молочной пены',
    image: '/dishes/flat-white.jpg',
    category: 'coffee',
  },
  {
    id: 5,
    name: 'Раф',
    price: 280,
    description: 'Нежный кофейный напиток со сливками и ванилью',
    image: '/dishes/raf.jpg',
    category: 'coffee',
  },
  {
    id: 6,
    name: 'Американо',
    price: 180,
    description: 'Эспрессо с горячей водой, чистый кофейный вкус',
    image: '/dishes/americano.jpg',
    category: 'coffee',
  },
  {
    id: 7,
    name: 'Чай зелёный',
    price: 150,
    description: 'Свежезаваренный зелёный чай с жасмином',
    image: '/dishes/green-tea.jpg',
    category: 'drinks',
  },
  {
    id: 8,
    name: 'Какао',
    price: 200,
    description: 'Тёплый какао с молоком и маршмеллоу',
    image: '/dishes/cocoa.jpg',
    category: 'drinks',
  },
  {
    id: 9,
    name: 'Чизкейк',
    price: 320,
    description: 'Классический нью-йоркский чизкейк с ягодным соусом',
    image: '/dishes/cheesecake.jpg',
    category: 'desserts',
  },
  {
    id: 10,
    name: 'Круассан',
    price: 180,
    description: 'Свежий слоёный круассан с маслом',
    image: '/dishes/croissant.jpg',
    category: 'desserts',
  },
  {
    id: 11,
    name: 'Тирамису',
    price: 350,
    description: 'Итальянский десерт с маскарпоне и кофе',
    image: '/dishes/tiramisu.jpg',
    category: 'desserts',
  },
  {
    id: 12,
    name: 'Брауни',
    price: 250,
    description: 'Шоколадный брауни с грецкими орехами',
    image: '/dishes/brownie.jpg',
    category: 'desserts',
  },
];

export const getDishById = (id: number) => dishes.find((d) => d.id === id);