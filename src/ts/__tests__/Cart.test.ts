import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const cart = new Cart();
const item1 = {
  id: 1,
  name: 'name',
  price: 100
};

test('new card should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('Проверка метода add()', () => {
  cart.add(item1);
  expect(cart.items.length).toBe(1);
});

const item2 = new Movie(
  2,
  'Мстители',
  150,
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137,
  'ссылка на картинку',
)

test('Проверка добавления класса Movie', () => {
  cart.add(item2);
  expect(cart.items.length).toBe(2);
});
