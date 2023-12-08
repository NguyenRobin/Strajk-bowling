import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, vi } from 'vitest';
import Shoes from '../src/components/Shoes/Shoes';

const mockUpdateSize = vi.fn();
const mockAddShoe = vi.fn();
const mockRemoveShoe = vi.fn();
const mockShoes = [
  { id: 'mockid1', size: '42' },
  { id: 'mockid2', size: '43' },
];

describe('Test for Shoes component', () => {
  beforeEach(() => {
    render(
      <Shoes
        updateSize={mockUpdateSize}
        addShoe={mockAddShoe}
        removeShoe={mockRemoveShoe}
        shoes={mockShoes}
      />
    );
  });

  it('should have a h2 title with the text "Shoes"', () => {
    const title = screen.getByText(/shoes/i);
    expect(title).toBeVisible();
  });
  it('should have a h2 title with css class "shoes__heading"', () => {
    const title = screen.getByText(/shoes/i);
    expect(title).toHaveClass('shoes__heading');
  });

  it('should have a button with a "+" symbol', () => {
    const button = screen.getByRole('button', { name: '+' });
    expect(button).toBeVisible();
  });
  it('should be a input field to enter a size for each player', () => {
    const shoeInputs = screen.getAllByRole('textbox');
    expect(shoeInputs.length).toBe(2);
  });

  it('should call the function "addShoe", when button with plus sign i clicked ', () => {
    const button = screen.getByRole('button', { name: '+' });
    fireEvent.click(button);
    expect(mockAddShoe).toHaveBeenCalled();
  });
  it('should be possible to change shoe size on each input', () => {
    const shoeInputs = screen.getAllByRole('textbox');

    fireEvent.change(shoeInputs[0], { target: { value: '50' } });
    expect(mockUpdateSize).toHaveBeenCalled();

    fireEvent.change(shoeInputs[1], { target: { value: '47' } });
    expect(mockUpdateSize).toHaveBeenCalled();
  });

  it('should be a clear button that indicates "delete"', () => {
    const deleteButton = screen.getAllByRole('button', { name: '-' });

    deleteButton.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
  });

  it('should have a visible "-" symbol as text content in "delete" button', () => {
    const deleteButton = screen.getAllByRole('button', { name: '-' });

    deleteButton.forEach((button) => {
      expect(button).toHaveTextContent('-');
    });
  });

  it('should trigger the function "removeShoe" when clicked', () => {
    const deleteButton = screen.getAllByRole('button', { name: '-' });
    fireEvent.click(deleteButton[0]);
    expect(mockRemoveShoe).toHaveBeenCalledOnce();
  });
});
