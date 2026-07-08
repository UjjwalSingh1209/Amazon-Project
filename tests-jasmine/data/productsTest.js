import { Product, Clothing, Appliance } from '../../data/products.js';

describe('test suite: Product', () => {
  it('creates a Product object correctly', () => {

    const product = new Product({
      id: 'test-id',
      image: 'images/test.jpg',
      name: 'Test Product',
      rating: {
        stars: 4.5,
        count: 100
      },
      pricePaisa: 2500
    });

    expect(product.id).toEqual('test-id');
    expect(product.name).toEqual('Test Product');
    expect(product.getStarsUrl())
      .toEqual('images/ratings/rating-45.png');
    expect(product.getPrice())
      .toEqual('₹2359.00');
    expect(product.extraInfoHTML())
      .toEqual('');
  });
});

describe('test suite: Clothing', () => {
  it('creates a Clothing object correctly', () => {

    const clothing = new Clothing({
      id: 'test-id',
      image: 'images/test.jpg',
      name: 'T-Shirt',
      rating: {
        stars: 4,
        count: 20
      },
      pricePaisa: 1999,
      sizeChartLink: 'images/clothing-size-chart.png'
    });

    expect(clothing.sizeChartLink)
      .toEqual('images/clothing-size-chart.png');

    expect(clothing.extraInfoHTML())
      .toContain('Size chart');
  });
});

describe('test suite: Appliance', () => {
  it('creates an Appliance object correctly', () => {

    const appliance = new Appliance({
      id: 'test-id',
      image: 'images/test.jpg',
      name: 'Toaster',
      rating: {
        stars: 5,
        count: 50
      },
      pricePaisa: 1899,
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    });

    expect(appliance.instructionsLink)
      .toEqual('images/appliance-instructions.png');

    expect(appliance.warrantyLink)
      .toEqual('images/appliance-warranty.png');

    expect(appliance.extraInfoHTML())
      .toContain('Instructions');

    expect(appliance.extraInfoHTML())
      .toContain('Warranty');
  });
});