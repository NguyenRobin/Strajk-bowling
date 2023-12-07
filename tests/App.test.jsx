import { render, screen } from '@testing-library/react';
import { describe, it, expect, test } from 'vitest';
import App from '../src/App';

describe('App', () => {
  test('render App component', () => {
    render(<App />);
  });
});
