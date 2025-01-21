import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const mockOnChange = vi.fn();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  it('renders the dropdown with label and default option', () => {
    render(<Dropdown label="Sort by" defaultString="Select an option" options={options} onChange={mockOnChange} />);

    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders the correct number of options', () => {
    render(<Dropdown label="Sort by" defaultString="Select an option" options={options} onChange={mockOnChange} />);

    expect(screen.getAllByRole('option').length).toBe(3); // including default option
  });

  it('calls onChange with the correct value when an option is selected', () => {
    render(<Dropdown label="Sort by" defaultString="Select an option" options={options} onChange={mockOnChange} />);

    fireEvent.change(screen.getByLabelText('Sort by'), { target: { value: 'option1' } });
    expect(mockOnChange).toHaveBeenCalledWith('option1');
  });
});