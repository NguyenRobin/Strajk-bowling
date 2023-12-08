import { beforeEach, describe, expect, it } from 'vitest';
import Navigation from '../src/components/Navigation/Navigation';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for Navigation components', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  });

  it('Should see a clear indication symbol of a navbar', () => {
    const imgSrcAttribute = '/src/assets/navicon.svg';
    const navImg = screen.getByRole('img');
    expect(navImg).toHaveAttribute('src', imgSrcAttribute);
  });

  it('Should be two links in the navbar: Booking and Confirmation', () => {
    const bookingLink = screen.getByText('Booking');
    const confirmationLink = screen.getByText('Confirmation');

    expect(bookingLink, confirmationLink).toBeInTheDocument();
    expect(bookingLink).toHaveTextContent('Booking');
    expect(confirmationLink).toHaveTextContent('Confirmation');
    expect(bookingLink, confirmationLink).toHaveAttribute('href', '#');
  });
  it('should add css class "show-menu" to modal when active', () => {
    const navElement = screen.getByTestId('modal-test');
    const navImg = screen.getByTestId('navicon-test');

    fireEvent.click(navImg);

    expect(navElement).toHaveClass('show-menu');
  });

  it('should remove css class "show-menu" from modal when not active', () => {
    const navElement = screen.getByTestId('modal-test');
    const navImg = screen.getByTestId('navicon-test');

    fireEvent.click(navImg);
    expect(navElement).toHaveClass('show-menu');

    fireEvent.click(navImg);
    expect(navElement).not.toHaveClass('show-menu');
  });
  it('should navigate to correct url. "/" and "/confirmation"', () => {
    const navImg = screen.getByTestId('navicon-test');
    const bookingLink = screen.getByText('Booking');
    const confirmationLink = screen.getByText('Confirmation');

    fireEvent.click(navImg);
    fireEvent.click(bookingLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(navImg);
    fireEvent.click(confirmationLink);
    expect(window.location.pathname).toBe('/confirmation');
  });
});
