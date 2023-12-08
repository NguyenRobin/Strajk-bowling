import { beforeEach, describe, expect } from 'vitest';
import Booking from '../src/views/Booking';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Confirmation from '../src/views/Confirmation';

describe('tests for Booking component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Booking />
        <Confirmation />
      </BrowserRouter>
    );
  });

  it('should have a button that indicates "create booking"', () => {
    const createBookingBtn = screen.getByRole('button', {
      name: /strIIIIIike!/i,
    });
    expect(createBookingBtn).toBeInTheDocument();
    expect(createBookingBtn).toBeVisible();
  });
  it('should be possible to delete a shoe size field', async () => {
    const addShoeSizeBtn = screen.getByRole('button', { name: '+' });

    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);

    const totalArrayOfShoeSizes = screen.getAllByTestId('shoes-data');
    const removeShoeSizeBtn = screen.getAllByRole('button', { name: '-' });

    expect(screen.getByText('Shoe size / person 1')).toBeInTheDocument();
    expect(screen.getByText('Shoe size / person 2')).toBeInTheDocument();
    expect(totalArrayOfShoeSizes.length).toBe(2);

    // DELETING ONE FROM DOCUMENT
    fireEvent.click(removeShoeSizeBtn[1]);
    expect(screen.queryByText('Shoe size / person 2')).not.toBeInTheDocument();
  });

  it('should be able to send a booking request, then be navigated to /confirmation and receive information like booking number and total cost', async () => {
    // ADDING DATE,TIME,AMOUNT PLAYERS,AMOUNT LANES
    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const playersInput = screen.getByLabelText('Number of awesome bowlers');
    const lanesInput = screen.getByLabelText('Number of lanes');

    fireEvent.change(dateInput, { target: { value: '2023-12-24' } });
    fireEvent.change(timeInput, { target: { value: '09:00' } });
    fireEvent.change(playersInput, { target: { value: 3 } });
    fireEvent.change(lanesInput, { target: { value: 1 } });

    expect(dateInput).toHaveValue('2023-12-24');
    expect(timeInput).toHaveValue('09:00');
    expect(playersInput).toHaveValue(3);
    expect(lanesInput).toHaveValue(1);

    // BUTTON TO ADD NEW SHOE
    const addShoeSizeBtn = screen.getByRole('button', { name: '+' });

    // ADDING SHOE SIZE
    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);

    const playerOneSizeInput = screen.getByLabelText(/Shoe size \/ person 1/i);
    const playerTwoSizeInput = screen.getByLabelText(/Shoe size \/ person 2/i);
    const playerThreeSizeInput = screen.getByLabelText(
      /Shoe size \/ person 3/i
    );

    fireEvent.change(playerOneSizeInput, { target: { value: '41' } });
    fireEvent.change(playerTwoSizeInput, { target: { value: '42' } });
    fireEvent.change(playerThreeSizeInput, { target: { value: '43' } });

    expect(playerOneSizeInput).toHaveValue('41');
    expect(playerTwoSizeInput).toHaveValue('42');
    expect(playerThreeSizeInput).toHaveValue('43');

    // AMOUNT OF SHOES IS EQUAL TO AMOUNT OF PLAYERS
    const arrOfShoes = screen.getAllByTestId('shoes-data');
    expect(arrOfShoes).toHaveLength(playersInput.value);

    // CREATE BOOKING BUTTON (send request to with mock)
    const createBookingBtn = screen.getByRole('button', {
      name: /strIIIIIike!/i,
    });
    fireEvent.click(createBookingBtn);

    // NAVIGATE TO /confirmation
    await waitFor(() => {
      const title = screen.getByText(/see you soon!/i);
      const date = screen.getByLabelText('When');
      const playersAmount = screen.getByLabelText('Who');
      const lanesAmount = screen.getByLabelText('Lanes');
      const bookingNumber = screen.getByLabelText('Booking number');
      const totalSum = screen.getByText('460 sek');

      expect(
        title,
        date,
        playersAmount,
        lanesAmount,
        bookingNumber,
        totalSum
      ).toBeInTheDocument();

      expect(bookingNumber).toHaveValue('FakeIdTestWithMock1234567');
      expect(totalSum).toHaveTextContent('460 sek');
    });
  });

  it('should display error message if all fields is not filled', async () => {
    const createBookingBtn = screen.getByRole('button', {
      name: /strIIIIIike!/i,
    });

    fireEvent.click(createBookingBtn);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Fill out all the fields and make sure that people and shoes is the same number./i
        )
      ).toBeInTheDocument();
    });
  });

  it('should show error message if amount of shoes sizes is not equal to amount of players', async () => {
    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');
    const playersInput = screen.getByLabelText('Number of awesome bowlers');
    const lanesInput = screen.getByLabelText('Number of lanes');

    fireEvent.change(dateInput, { target: { value: '2023-12-24' } });
    fireEvent.change(timeInput, { target: { value: '09:00' } });
    fireEvent.change(playersInput, { target: { value: 3 } });
    fireEvent.change(lanesInput, { target: { value: 1 } });

    const addShoeSizeBtn = screen.getByRole('button', { name: '+' });

    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);
    fireEvent.click(addShoeSizeBtn);

    const createBookingBtn = screen.getByRole('button', {
      name: /strIIIIIike!/i,
    });

    fireEvent.click(createBookingBtn);

    const arrOfShoes = screen.getAllByTestId('shoes-data');
    expect(arrOfShoes).toHaveLength(5);
    expect(playersInput).toHaveValue(3);
    expect(
      screen.getByText(
        /Fill out all the fields and make sure that people and shoes is the same number./i
      )
    ).toBeInTheDocument();
  });
});
