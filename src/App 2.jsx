import React from 'react';

import EventList from './components/EventList';
import mockData from './mock-data';
const App = () => {
  return (
    <div className="App">
      <div id="city-search"></div>
      <EventList events={mockData} />
    </div>
  );
}

export default App;
