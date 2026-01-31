import React, { useState } from 'react';

const Event = ({ event = {} }) => {
  const {
    summary = 'No Title',
    location = 'No Location',
    description = 'No Description',
    start = {},
    end = {}
  } = event || {};

  const [showDetails, setShowDetails] = useState(false);

  if (!event || typeof event !== 'object') {
    console.error('Invalid event prop:', event);
    return null;
  }

  return (
    <li className="event">
      <h3>{summary}</h3>
      <p><strong>Start:</strong> {start.dateTime || 'No Start Time'}</p>
      <p><strong>Location:</strong> {location}</p>
      {!showDetails && (
        <button onClick={() => setShowDetails(true)}>Show Details</button>
      )}
      {showDetails && (
        <>
          <p>{description}</p>
          <p><strong>End:</strong> {end.dateTime || 'No End Time'}</p>
        </>
      )}
    </li>
  );
}

export default Event;
