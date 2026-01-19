import React from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => (
  <div>
    <label htmlFor="number-of-events">Number of events:</label>
    <input
      id="number-of-events"
      data-testid="number-of-events-input"
      type="number"
      value={currentNOE}
      onChange={(e) => setCurrentNOE(Number(e.target.value))}
    />
  </div>
);

export default NumberOfEvents;