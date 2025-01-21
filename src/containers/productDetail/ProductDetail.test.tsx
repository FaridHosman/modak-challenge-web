import { render, screen } from '@testing-library/react';
import { ProductDetail } from './ProductDetail';
import { ProductType } from '@utils/types';

const mockProduct: Partial<ProductType> = {
  id: 1,
  title: 'Test Product',
  brand: 'Test Brand',
  description: 'This is a test product',
  stock: 10,
  images: ['image1.jpg', 'image2.jpg']
};

describe('ProductDetail', () => {
  it('renders product title', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product brand', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
  });

  it('renders product stock', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    expect(screen.getByText('10 left in stock')).toBeInTheDocument();
  });

  it('renders product images in carousel', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', 'image2.jpg');
    expect(images[1]).toHaveAttribute('src', 'image1.jpg');
  });

  it('renders Add to cart button', () => {
    render(<ProductDetail product={mockProduct as ProductType} />);
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });
});
