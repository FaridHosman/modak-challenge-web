import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { mockProduct } from '@utils/mocks';

describe('Product Card Component', () => {
  it('renders product card with correct details', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`★ ${mockProduct.rating} / 5`)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.discountPercentage} % Off!`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.stock} Left in Stock`)).toBeInTheDocument();
  });

  it('navigates to product detail page on title click', () => {
    const { container } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const titleElement = container.querySelector('h1');
    if (titleElement) {
      fireEvent.click(titleElement);
    }

    expect(window.location.pathname).toBe(`/product/${mockProduct.id}`);
  });
});


