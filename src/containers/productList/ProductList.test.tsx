import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';
import { ProductType } from '@utils/types';
import { BrowserRouter } from 'react-router-dom';

const mockProducts: Partial<ProductType>[] = [
  { id: 1, title: 'Product 1', price: 100, rating: 4.5, discountPercentage: 10, stock: 20 },
  { id: 2, title: 'Product 2', price: 200, rating: 4.5, discountPercentage: 10, stock: 20 },
];

describe('Product List Container', () => {
  it('renders correct number of products', () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProducts as ProductType[]} />
      </BrowserRouter>

    );
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(mockProducts.length);
  });
});
