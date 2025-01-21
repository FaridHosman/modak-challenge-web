import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { vi } from 'vitest';

describe('Header Component', () => {
  const mockSetFilterBy = vi.fn();
  const mockSetSortBy = vi.fn();

  it('renders header title', () => {
    render(<Header setFilterBy={mockSetFilterBy} setSortBy={mockSetSortBy} />);
    const headerTitle = screen.getByText(/Dummy Store/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it('renders filter dropdown', () => {
    render(<Header setFilterBy={mockSetFilterBy} setSortBy={mockSetSortBy} />);
    const filterDropdown = screen.getByLabelText(/Filter by category/i);
    expect(filterDropdown).toBeInTheDocument();
  });

  it('renders sort dropdown', () => {
    render(<Header setFilterBy={mockSetFilterBy} setSortBy={mockSetSortBy} />);
    const sortDropdown = screen.getByLabelText(/Sort by/i);
    expect(sortDropdown).toBeInTheDocument();
  });
});