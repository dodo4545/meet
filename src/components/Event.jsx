import React, { useState } from 'react';



const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p><strong>Start:</strong> {event.created}</p>
      <p><strong>Location:</strong> {event.location}</p>
      {!showDetails && (
        <button onClick={() => setShowDetails(true)}>Show Details</button>
      )}
      {showDetails && (
        <>
          <p>{event.description}</p>
          <p><strong>End:</strong> {event.end?.dateTime}</p>
          <button onClick={() => setShowDetails(false)}>Hide Details</button>
        </>
      )}
    </li>
  );
}

export default Event;
