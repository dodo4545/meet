import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';


describe('<CitySearch /> component', () => {
    test('shows only "See all cities" when user types a city not in allLocations', async () => {
      const user = userEvent.setup();
      const mockLocations = ['Berlin, Germany', 'London, UK', 'New York, USA'];
      CitySearchComponent.rerender(
        <CitySearch allLocations={mockLocations} setCurrentCity={() => { }} />
      );
      const cityTextBox = CitySearchComponent.queryByRole('textbox');
      await user.type(cityTextBox, "Paris, France");
      const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
      expect(suggestionListItems.length).toBe(1);
      expect(suggestionListItems[0].textContent).toBe('See all cities');
    });
  let CitySearchComponent;
  const dummySetCurrentCity = jest.fn();
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch allLocations={[]} setCurrentCity={dummySetCurrentCity} />);
  });

  test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
    const user = userEvent.setup();
    const mockLocations = ['Berlin, Germany', 'London, UK', 'New York, USA'];
    CitySearchComponent.rerender(
      <CitySearch allLocations={mockLocations} setCurrentCity={() => { }} />
    );

    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, "Berlin");

    // the suggestion's textContent look like this: "Berlin, Germany"
    const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
    await user.click(BerlinGermanySuggestion);
    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });

  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });
});

describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    await waitFor(() => {
      const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems.length).toBe(allLocations.length + 1);
    });
  });
});
  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.click(cityTextBox);
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });
});
