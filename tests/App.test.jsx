import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../src/App';

describe('Tests for App', () => {
  beforeEach(() => {
    render(<App />);
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

    fireEvent.click(removeShoeSizeBtn[1]);

    // DELETING ONE FROM DOCUMENT
    expect(screen.queryByText('Shoe size / person 2')).not.toBeInTheDocument();
    screen.debug();
  });

  it('Should be possible to navigate between <Booking/> and <Confirmation/>', async () => {
    const navImg = screen.getByTestId('navicon-test');
    const bookingLink = screen.getByRole('link', { name: 'Booking' });
    const confirmationLink = screen.getByRole('link', { name: 'Confirmation' });

    fireEvent.click(navImg);
    fireEvent.click(bookingLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
      expect(screen.getByText(/WHEN, WHAT & WHO/i)).toBeInTheDocument();
    });

    fireEvent.click(navImg);
    fireEvent.click(confirmationLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/confirmation');
      expect(screen.getByText(/See you soon!/i)).toBeInTheDocument();
      expect(screen.getByText(/Inga bokning gjord!/i)).toBeInTheDocument();
    });
  });
});
