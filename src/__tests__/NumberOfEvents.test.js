import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders input with default value', () => {
    const { getByLabelText } = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />
    );
    const input = getByLabelText(/number of events/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('32');
  });

  test('calls setCurrentNOE when input value changes', async () => {
    const mockSetCurrentNOE = jest.fn();
    const { getByLabelText } = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={mockSetCurrentNOE} />
    );
    const input = getByLabelText(/number of events/i);
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    // Should be called with 1, then 10
    expect(mockSetCurrentNOE).toHaveBeenNthCalledWith(1, 0);
    expect(mockSetCurrentNOE).toHaveBeenNthCalledWith(2, 321);
    expect(mockSetCurrentNOE).toHaveBeenNthCalledWith(3, 320);
  });
});
