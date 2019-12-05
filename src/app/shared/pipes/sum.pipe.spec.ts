  // it('transforms "abc" to "Abc"', () => {
  //   expect(pipe.transform('abc')).toBe('Abc');
  // });

  // it('transforms "abc def" to "Abc Def"', () => {
  //   expect(pipe.transform('abc def')).toBe('Abc Def');
  // });
import { SumPipe } from './sum.pipe';
import { CartModel } from 'src/app/cart/models';
import { ProductModel } from 'src/app/products/models/product.model';

describe('SumPipe', () => {

  const pipe = new SumPipe();
  let carts: Array<Partial<ProductModel>>;
  let orders: Array<Partial<CartModel>>;

  beforeEach(() => {
    carts = [
      {
        price: 10
      },
      {
        price: 20
      },
      {
        price: 30
      }
    ];

    orders = [
      {
        count: 2
      },
      {
        count: 2
      },
      {
        count: 3
      }
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sum values of properties with the name price', () => {
    expect(pipe.transform(carts, 'price')).toBe(60);
  });

  it('should sum values of properties with the name count', () => {
    expect(pipe.transform(orders, 'count')).toBe(7);
  });
});
