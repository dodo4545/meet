// src/__tests__/App.test.js
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import React from 'react';
import App from '../App';

// Mock window.location.href to simulate localhost
beforeAll(() => {
  delete window.location;
  window.location = { href: 'http://localhost' };
});

// Mock getEvents to log its output
jest.mock('../api', () => {
  const originalModule = jest.requireActual('../api');
  return {
    ...originalModule,
    getEvents: jest.fn(async () => {
      const mockData = originalModule.getEvents();
      console.log('Mocked getEvents called, returning:', mockData);
      return mockData;
    }),
  };
});

describe('<App /> component', () => {
	let AppDOM;

	beforeEach(() => {
		AppDOM = render(<App />).container.firstChild;
	});

	test('renders list of events', () => {
		expect(AppDOM.querySelector('[data-testid="event-list"]')).toBeInTheDocument();
	});

	test('render CitySearch', () => {
		expect(AppDOM.querySelector('[data-testid="city-search"]')).toBeInTheDocument();
	});
});

describe('<App /> integration', () => {
		test('renders the correct number of events when the number of events input is changed', async () => {
			const user = userEvent.setup();
			const mockEvents = [
				{ id: 1, location: 'Berlin, Germany', name: 'Event 1' },
				{ id: 2, location: 'Berlin, Germany', name: 'Event 2' },
				{ id: 3, location: 'Berlin, Germany', name: 'Event 3' },
			];

			jest.spyOn(require('../api'), 'getEvents').mockResolvedValue(mockEvents);

			const AppComponent = render(<App />);
			const AppDOM = AppComponent.container.firstChild;

			const NumberOfEventsInput = AppComponent.getByTestId('number-of-events-input');
			await user.clear(NumberOfEventsInput);
			await user.type(NumberOfEventsInput, '2');

			const EventListDOM = AppComponent.getByTestId('event-list');
			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(2);
			});

			// Assert the events state
			const eventsState = AppComponent.container.querySelectorAll('[data-testid="event-list"] li');
			console.log('Events state:', eventsState);
			expect(eventsState.length).toBe(2);
		});
	test('renders a list of events matching the city selected by the user', async () => {
		const user = userEvent.setup();
		const AppComponent = render(<App />);

		const CitySearchInput = AppComponent.getByTestId('city-search').querySelector('input');
		await user.type(CitySearchInput, 'Berlin');

		const EventListDOM = AppComponent.getByTestId('event-list');
		await waitFor(() => {
			const EventListItems = within(EventListDOM).queryAllByRole('listitem');
			console.log('Filtered EventListItems:', EventListItems);
			expect(EventListItems.length).toBeGreaterThan(0);
		});

		// Assert the filtered events state
		const filteredEventsState = AppComponent.container.querySelectorAll('[data-testid="event-list"] li');
		console.log('Filtered events state:', filteredEventsState);
		expect(filteredEventsState.length).toBeGreaterThan(0);
	});
  test('verifies events state after getEvents mock', async () => {
    const mockEvents = [
      { id: 1, location: 'Berlin, Germany', name: 'Event 1' },
      { id: 2, location: 'Berlin, Germany', name: 'Event 2' },
      { id: 3, location: 'Berlin, Germany', name: 'Event 3' },
    ];

    jest.spyOn(require('../api'), 'getEvents').mockResolvedValue(mockEvents);

    const AppComponent = render(<App />);

    await waitFor(() => {
      const eventsState = AppComponent.container.querySelectorAll('[data-testid="event-list"] li');
      console.log('Events state:', eventsState);
      expect(eventsState.length).toBe(mockEvents.length);
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
