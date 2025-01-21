import { render, screen } from '@testing-library/react';
import { ProductDetail } from './ProductDetail';
import { mockProduct } from '@utils/mocks';

describe('ProductDetail', () => {
  it('renders product title', () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it('renders product brand', () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('renders product stock', () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText(`${mockProduct.stock} left in stock`)).toBeInTheDocument();
  });

  it('renders product images in carousel', () => {
    render(<ProductDetail product={mockProduct} />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', 'https://example.com/images/wireless-mouse-2.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://example.com/images/wireless-mouse-1.jpg');
  });

  it('renders Add to cart button', () => {
    render(<ProductDetail product={mockProduct} />);
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });
});
