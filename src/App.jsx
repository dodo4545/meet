import React, { useEffect, useState } from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allEvents = (await getEvents()) || [];
        if (!Array.isArray(allEvents)) {
          console.error('getEvents did not return an array:', allEvents);
          return;
        }

        console.log('Fetching events with currentCity:', currentCity, 'and currentNOE:', currentNOE);

        const filteredEvents = allEvents.filter(
          (event) =>
            currentCity === 'See all cities' || event.location === currentCity
        );

        console.log('Filtered events:', filteredEvents);
        console.log('Setting events state with:', filteredEvents.slice(0, currentNOE));
        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));

        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API latency
      } catch (error) {
        console.error('Error in fetchData:', error);
      }
    };

    fetchData();
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
