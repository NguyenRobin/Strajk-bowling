import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import BookingInfo from '../src/components/BookingInfo/BookingInfo';

const mockUpdateBookingDetails = vi.fn();

describe('Test for BookingInfo component', () => {
  beforeEach(() => {
    render(<BookingInfo updateBookingDetails={mockUpdateBookingDetails} />);
  });

  it('should display Date input field', () => {
    const dateLabel = screen.getByText(/date/i);
    const dateInput = screen.getByLabelText(/date/i);

    expect(dateLabel).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveClass('input__field booking-info__date');
  });

  it('should be able to change input to a specific date', async () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput.value).toBe('');

    fireEvent.change(dateInput, { target: { value: '2023-12-24' } });

    expect(dateInput.value).toBe('2023-12-24');
  });

  it('should be able to enter a specific time', () => {
    const timeInput = screen.getByLabelText(/time/i);
    expect(timeInput.value).toBe('');

    fireEvent.change(timeInput, { target: { value: '12:00' } });

    expect(timeInput.value).toBe('12:00');
  });

  it('should be able to enter a amount of players', async () => {
    const numberOfBowlersInput = screen.getByLabelText(
      /Number of awesome bowlers/i
    );

    fireEvent.change(numberOfBowlersInput, { target: { value: 5 } });

    expect(Number(numberOfBowlersInput.value)).toBe(5);
  });

  it('should be able to enter a amount of lanes', async () => {
    const numberOfBowlersInput = screen.getByLabelText(/Number of lanes/i);

    fireEvent.change(numberOfBowlersInput, { target: { value: 1 } });

    expect(Number(numberOfBowlersInput.value)).toBe(1);
  });
});
