import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.debug();

    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('2'));
    waitFor(() => {
      expect(screen.getByText('1+2')).toBeInTheDocument();
      expect(screen.getByRole('cal_total')).toContain('1');
    });

    screen.debug();
  });

  test('pressing equal renders the right result', () => {
    render(<App />);

    screen.debug();

    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    waitFor(() => {
      expect(screen.getByRole('cal_formula')).toContain('3');
      expect(screen.getByRole('cal_total')).toContain('3');
    });

    screen.debug();
  });
});
