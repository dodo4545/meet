// src/__tests__/App.test.js
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import React from 'react';
import App from '../App';

jest.mock('../api');

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
			getEvents.mockClear();
		});
		test('renders the correct number of events when the number of events input is changed', async () => {
			const user = userEvent.setup();
			const AppComponent = render(<App />);
			const AppDOM = AppComponent.container.firstChild;

			const NumberOfEventsInput = screen.getByTestId('number-of-events-input');
			await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

			const EventListDOM = AppDOM.querySelector('#event-list');
			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(10);
			});
		});
	test('renders a list of events matching the city selected by the user', async () => {
		const user = userEvent.setup();
		const AppComponent = render(<App />);
		const AppDOM = AppComponent.container.firstChild;

		const CitySearchDOM = AppDOM.querySelector('#city-search');
		const CitySearchInput = screen.getByPlaceholderText('Search for a city');
		await user.type(CitySearchInput, 'Berlin');
		const berlinSuggestionItem = screen.getByText('Berlin, Germany');
		await user.click(berlinSuggestionItem);

		const EventListDOM = AppDOM.querySelector('#event-list');
		const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

		const allEvents = [
			{ id: 1, location: 'Berlin, Germany', name: 'Event 1' },
			{ id: 2, location: 'Berlin, Germany', name: 'Event 2' },
			{ id: 3, location: 'Munich, Germany', name: 'Event 3' },
		];
		const berlinEvents = allEvents.filter(
			event => event.location === 'Berlin, Germany'
		);

		expect(allRenderedEventItems.length).toBe(berlinEvents.length);

		const EventListItems = screen.getAllByRole('listitem');
		expect(EventListItems.length).toBe(2);
	});
});
