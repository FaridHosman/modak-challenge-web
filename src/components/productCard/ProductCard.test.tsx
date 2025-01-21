import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { ProductType } from '@utils/types';

const product: Partial<ProductType> = {
  id: 1,
  title: 'Test Product',
  thumbnail: 'test-thumbnail.jpg',
  rating: 4.5,
  price: 100,
  discountPercentage: 10,
  stock: 20,
};

describe('Product Card Component', () => {
  it('renders product card with correct details', () => {
    render(
      <BrowserRouter>
        <ProductCard product={product as ProductType} />
      </BrowserRouter>
    );

    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('★ 4.5 / 5')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('10 % Off!')).toBeInTheDocument();
    expect(screen.getByText('20 Left in Stock')).toBeInTheDocument();
  });

  it('navigates to product detail page on title click', () => {
    const { container } = render(
      <BrowserRouter>
        <ProductCard product={product as ProductType} />
      </BrowserRouter>
    );

    const titleElement = container.querySelector('h1');
    if (titleElement) {
      fireEvent.click(titleElement);
    }

    expect(window.location.pathname).toBe(`/product/${product.id}`);
  });
});


