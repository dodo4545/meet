import App from '../App';
describe('<EventList /> integration', () => {
  test('renders event details for each event', async () => {
    const allEvents = await getEvents();
    const { getAllByRole, getByText, getAllByText } = render(<EventList events={allEvents} />);
    allEvents.forEach(event => {
      expect(getByText(event.summary)).toBeInTheDocument();
      // Use getAllByText for locations to avoid multiple match error
      expect(getAllByText(event.location).length).toBeGreaterThan(0);
    });
    expect(getAllByRole('listitem')).toHaveLength(allEvents.length);
  });
});
// src/__tests__/EventList.test.js
import React from 'react';
import { render, within, waitFor } from '@testing-library/react';

import EventList from '../components/EventList';
import { getEvents } from '../api';


describe('<EventList /> component', () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents();
    const EventListComponent = render(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
  
  describe('<EventList /> integration', () => {
    test('renders event details for each event', async () => {
      const allEvents = await getEvents();
      const { getAllByRole, getByText, getAllByText } = render(<EventList events={allEvents} />);
      allEvents.forEach(event => {
        expect(getByText(event.summary)).toBeInTheDocument();
        expect(getAllByText(event.location).length).toBeGreaterThan(0);
      });
      expect(getAllByRole('listitem')).toHaveLength(allEvents.length);
    });

    test('renders a list of 32 events when the app is mounted and rendered', async () => {
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });
});
