import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([]);

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
        <CitySearch id="city-search" />
        <EventList id="event-list" events={["Event 1", "Event 2", "Event 3"]} />
        <NumberOfEvents currentNOE={10} setCurrentNOE={() => {}} />
      </header>
    </div>
  );
}

export default App;
