import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';

function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [currentNOE, setCurrentNOE] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching events with currentCity:', currentCity, 'and currentNOE:', currentNOE);
      const allEvents = await getEvents();
      const filteredEvents = allEvents.filter(
        (event) =>
          currentCity === 'See all cities' || event.location === currentCity
      );
      console.log('Filtered events:', filteredEvents);
      setEvents(filteredEvents.slice(0, currentNOE));
      console.log('Setting events state with:', filteredEvents.slice(0, currentNOE));
    };
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="App-logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="App-logo" alt="React logo" />
        </a>
        <p>Vite + React</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <CitySearch id="city-search" setCurrentCity={setCurrentCity} />
        <EventList id="event-list" events={events} />
        <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />
      </header>
    </div>
  );
}

export default App;
