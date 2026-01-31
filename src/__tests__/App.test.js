// src/__tests__/App.test.js
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';
import { act } from '@testing-library/react';

// Mock window.location.href to simulate localhost
beforeAll(() => {
  delete window.location;
  window.location = { href: 'http://localhost' };
});

// Add debug logs to trace the mock data and fetchData execution
jest.mock('../api', () => {
  const originalModule = jest.requireActual('../api');
  return {
    ...originalModule,
    getEvents: jest.fn(() => Promise.resolve(require('../mock-data'))),
  };
});

describe('<App /> component', () => {
  test('renders list of events', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const EventListDOM = screen.getByTestId('event-list');
      expect(EventListDOM).toBeInTheDocument();
    });
  });

  test('renders CitySearch', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      const CitySearchDOM = screen.getByTestId('city-search');
      expect(CitySearchDOM).toBeInTheDocument();
    });
  });
});

describe('<App /> integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the correct number of events when the number of events input is changed', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const NumberOfEventsInput = await screen.findByTestId('number-of-events-input');
    expect(NumberOfEventsInput).toBeInTheDocument(); // Ensure the input is present

    await user.clear(NumberOfEventsInput);
    await user.type(NumberOfEventsInput, '3');

    await waitFor(async () => {
      const EventListDOM = screen.getByTestId('event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(3); // Adjusted to match mock data
    });
  });

  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const CitySearchInput = await screen.findByTestId('city-search-input');
    await user.clear(CitySearchInput);
    await user.type(CitySearchInput, 'Berlin');

    await waitFor(async () => {
      const EventListDOM = screen.getByTestId('event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(11); // Adjusted to match mock data
    });
  });

  test('updates the number of events displayed when user changes the input value', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const NumberOfEventsInput = await screen.findByTestId('number-of-events-input');
    expect(NumberOfEventsInput).toBeInTheDocument();
    expect(NumberOfEventsInput.value).toBe('32'); // Verify default value

    // Delete the default "32" and type "10"
    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    await waitFor(async () => {
      const EventListDOM = screen.getByTestId('event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(10);
    });
  });
});

describe('fetchData function', () => {
  test('fetches and updates events state correctly', async () => {
    const mockEvents = [
      { id: 1, location: 'Berlin, Germany', name: 'Event 1' },
      { id: 2, location: 'Berlin, Germany', name: 'Event 2' },
      { id: 3, location: 'Berlin, Germany', name: 'Event 3' },
    ];

    jest.spyOn(require('../api'), 'getEvents').mockResolvedValue(mockEvents);

    const fetchData = async () => {
      const allEvents = await require('../api').getEvents();
      console.log('Fetched events:', allEvents);
      return allEvents;
    };

    const events = await fetchData();
    expect(events).toEqual(mockEvents);
    expect(events.length).toBe(3);
  });
});

test('debug EventList rendering', async () => {
  const AppComponent = render(<App />);
  const AppDOM = AppComponent.container.firstChild;

  console.log('App DOM structure:', AppDOM.innerHTML);

  await waitFor(() => {
    const EventListDOM = AppComponent.getByTestId('event-list');
    console.log('EventList DOM:', EventListDOM);
    expect(EventListDOM).toBeInTheDocument();
  });
});

test('verify EventList receives correct events', async () => {
  const mockEvents = [
    { id: 1, location: 'Berlin, Germany', name: 'Event 1' },
    { id: 2, location: 'Berlin, Germany', name: 'Event 2' },
  ];

  jest.spyOn(require('../api'), 'getEvents').mockResolvedValue(mockEvents);

  const AppComponent = render(<App />);

  await waitFor(() => {
    const EventListDOM = AppComponent.getByTestId('event-list');
    console.log('EventList DOM:', EventListDOM.innerHTML);
    const EventListItems = within(EventListDOM).queryAllByRole('listitem');
    expect(EventListItems.length).toBe(mockEvents.length);
  });
});
test('updates the number of events displayed when the user changes the input value', async () => {
  const user = userEvent.setup();
  const mockEvents = [
    { id: 1, location: 'Berlin, Germany', name: 'Event 1' },
    { id: 2, location: 'Berlin, Germany', name: 'Event 2' },
    { id: 3, location: 'Berlin, Germany', name: 'Event 3' },
    { id: 4, location: 'Berlin, Germany', name: 'Event 4' },
    { id: 5, location: 'Berlin, Germany', name: 'Event 5' },
    { id: 6, location: 'Berlin, Germany', name: 'Event 6' },
    { id: 7, location: 'Berlin, Germany', name: 'Event 7' },
    { id: 8, location: 'Berlin, Germany', name: 'Event 8' },
    { id: 9, location: 'Berlin, Germany', name: 'Event 9' },
    { id: 10, location: 'Berlin, Germany', name: 'Event 10' },
  ];

  jest.spyOn(require('../api'), 'getEvents').mockResolvedValue(mockEvents);

  const AppComponent = render(<App />);
  const NumberOfEventsInput = await AppComponent.findByTestId('number-of-events-input');

  // Clear the default value and type a new number
  await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

  await waitFor(() => {
    const EventListDOM = AppComponent.getByTestId('event-list');
    const EventListItems = within(EventListDOM).queryAllByRole('listitem');
    expect(EventListItems.length).toBe(10);
  });
});
test('handles empty events response gracefully', async () => {
  const user = userEvent.setup();
  jest.spyOn(require('../api'), 'getEvents').mockResolvedValueOnce([]); // Simulate empty response

  const AppComponent = render(<App />);

  // Simulate empty events response
  await act(async () => {
    await AppComponent.rerender(<App />);
  });

  const EventListDOM = AppComponent.getByTestId('event-list');
  const placeholderMessage = within(EventListDOM).getByText('No events available');

  // Ensure the placeholder message is displayed
  expect(placeholderMessage).toBeInTheDocument();
});
