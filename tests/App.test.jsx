import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from '../src/App';

describe('App', () => {
  test('render App component', () => {
    render(<App />);
  });
});
