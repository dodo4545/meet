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

    // Assert that setCurrentNOE is called with the correct values
    expect(mockSetCurrentNOE).toHaveBeenCalledTimes(2);
    expect(mockSetCurrentNOE).toHaveBeenCalledWith(1);
    expect(mockSetCurrentNOE).toHaveBeenCalledWith(10);
  });
});
