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

test('Проверка метода totalPrice()', () => {
  expect(cart.totalPrice()).toBe(250);
});

test('Проверка метода totalPriceWithDiscount()', () => {
  expect(cart.totalPriceWithDiscount(10)).toBe(225);
});

test.each([
  ['0', 2, [item1, item2]],
  [1, 1, [item2]],
])(
  ('Проверка метода removeProduct() при id = %d'),
  (id, res, items) => {
    cart.removeProduct(id);
    expect(cart.items.length).toBe(res);
    expect(cart.items).toEqual(items);
  },
);