import React from 'react';
import { render } from '@testing-library/react';
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

  test('calls setCurrentNOE when input value changes', () => {
    const mockSetCurrentNOE = jest.fn();
    const { getByLabelText } = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={mockSetCurrentNOE} />
    );
    const input = getByLabelText(/number of events/i);
    input.value = '10';
    input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(mockSetCurrentNOE).toHaveBeenCalledWith(10);
  });
});
