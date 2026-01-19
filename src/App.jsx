import React, { useEffect, useState } from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const fetchData = async () => {
    console.log('fetchData called'); // Log when fetchData is called
    const allEvents = await getEvents();
    console.log('Fetched events in fetchData:', allEvents); // Log fetched events
    const filteredEvents = currentCity === "See all cities"
      ? allEvents
      : allEvents.filter(event => event.location === currentCity);
    console.log('Filtered events:', filteredEvents); // Log filtered events
    setEvents(filteredEvents.slice(0, currentNOE));
    console.log('Updated events state:', filteredEvents.slice(0, currentNOE)); // Log updated events state
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    console.log('useEffect triggered with:', { currentCity, currentNOE }); // Log useEffect dependencies
    fetchData().then(() => {
      console.log('fetchData completed'); // Log when fetchData completes
    }).catch((error) => {
      console.error('fetchData error:', error); // Log any errors in fetchData
    });
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
}

export default App;
