import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let allEvents;
  let event;
  beforeAll(async () => {
    allEvents = await getEvents();
    event = allEvents[0];
  });

  beforeEach(() => {
    event = {
      summary: 'Sample Event',
      created: '2023-01-01',
      location: 'Sample Location',
      description: 'This is a sample event description.',
    };
  });

  test('renders event title, start time, and location', () => {
    const { queryByText } = render(<Event event={event} />);
    expect(queryByText(event.summary)).toBeInTheDocument();
    expect(queryByText(event.created)).toBeInTheDocument();
    expect(queryByText(event.location)).toBeInTheDocument();
  });

  test('renders show details button', () => {
    const { queryByText } = render(<Event event={event} />);
    expect(queryByText(/show details/i)).toBeInTheDocument();
  });

  test('shows details section and hide details button when show details is clicked', async () => {
    const user = userEvent.setup();
    const { queryByText, findByText } = render(<Event event={event} />);
    const showDetailsBtn = queryByText(/show details/i);
    await user.click(showDetailsBtn);
    expect(queryByText(/hide details/i)).toBeInTheDocument();
    // Wait for the description to appear
    // Use a function matcher to handle multiline/whitespace
    expect(
      await findByText((content, element) => {
        const hasText = (node) =>
          node.textContent && node.textContent.replace(/\s+/g, ' ').trim() === event.description.replace(/\s+/g, ' ').trim();
        return hasText(element);
      })
    ).toBeInTheDocument();
  });

  test('hides details section and shows show details button when hide details is clicked', async () => {
    const user = userEvent.setup();
    const { queryByText } = render(<Event event={event} />);
    const showDetailsBtn = queryByText(/show details/i);
    await user.click(showDetailsBtn);
    const hideDetailsBtn = queryByText(/hide details/i);
    await user.click(hideDetailsBtn);
    expect(queryByText(/show details/i)).toBeInTheDocument();
    expect(queryByText(event.description)).not.toBeInTheDocument();
  });
});
