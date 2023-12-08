import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../src/App';

describe('Tests for App', () => {
  beforeEach(() => {
    render(<App />);
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
