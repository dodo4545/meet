// src/__tests__/App.test.js
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import React from 'react';
import App from '../App';

jest.mock('../api');

// Added Jest globals for testing
global.jest = jest;
global.describe = describe;
global.test = test;
global.expect = expect;
global.beforeEach = beforeEach;

describe('<App /> component', () => {
	let AppDOM;

	beforeEach(() => {
		AppDOM = render(<App />).container.firstChild;
	});

	test('renders list of events', () => {
		expect(screen.getByTestId('event-list')).toBeInTheDocument();
	});

	test('render CitySearch', () => {
		expect(screen.getByTestId('city-search')).toBeInTheDocument();
	});
});

describe('<App /> integration', () => {
		beforeEach(() => {
			getEvents.mockResolvedValue([
				{ id: 1, location: 'Berlin, Germany', name: 'Event 1' },
				{ id: 2, location: 'Berlin, Germany', name: 'Event 2' },
				{ id: 3, location: 'Munich, Germany', name: 'Event 3' },
				{ id: 4, location: 'Berlin, Germany', name: 'Event 4' },
				{ id: 5, location: 'Berlin, Germany', name: 'Event 5' },
				{ id: 6, location: 'Berlin, Germany', name: 'Event 6' },
				{ id: 7, location: 'Berlin, Germany', name: 'Event 7' },
				{ id: 8, location: 'Berlin, Germany', name: 'Event 8' },
				{ id: 9, location: 'Berlin, Germany', name: 'Event 9' },
				{ id: 10, location: 'Berlin, Germany', name: 'Event 10' },
			]);
		});
		test('renders the correct number of events when the number of events input is changed', async () => {
			const user = userEvent.setup();
			const AppComponent = render(<App />);

			const NumberOfEventsInput = screen.getByTestId('number-of-events-input');
			await user.clear(NumberOfEventsInput);
			await user.type(NumberOfEventsInput, '10');

			await waitFor(() => {
				const EventListDOM = screen.getByTestId('event-list');
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(10);
			});
		});
	test('renders a list of events matching the city selected by the user', async () => {
		const user = userEvent.setup();
		const AppComponent = render(<App />);

		const NumberOfEventsInput = screen.getByTestId('number-of-events-input');
		await user.clear(NumberOfEventsInput);
		await user.type(NumberOfEventsInput, '10');

		const CitySearchInput = screen.getByPlaceholderText('Search for a city');
		await user.type(CitySearchInput, 'Berlin');
		const berlinSuggestionItem = await screen.findByText('Berlin, Germany');
		await user.click(berlinSuggestionItem);

		await waitFor(() => {
			const EventListDOM = screen.getByTestId('event-list');
			const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

			const allEvents = [
				{ id: 1, location: 'Berlin, Germany', name: 'Event 1' },
				{ id: 2, location: 'Berlin, Germany', name: 'Event 2' },
				{ id: 3, location: 'Munich, Germany', name: 'Event 3' },
			];
			const berlinEvents = allEvents.filter(
				event => event.location === 'Berlin, Germany'
			);

			expect(allRenderedEventItems.length).toBe(Math.min(10, berlinEvents.length));
		});
	});
});
