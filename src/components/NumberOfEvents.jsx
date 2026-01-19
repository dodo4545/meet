import React from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(Number(value));
  };

  return (
    <div className="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        type="number"
        className="number-of-events-input"
        value={currentNOE}
        onChange={handleInputChanged}
        min={1}
        data-testid="number-of-events-input"
      />
    </div>
  );
};

export default NumberOfEvents;
