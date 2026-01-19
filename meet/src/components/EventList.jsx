import React from 'react';

const EventList = ({ events = ['Event 1', 'Event 2', 'Event 3'] }) => (
  <ul data-testid="event-list">
    {events.map((event, index) => (
      <li key={index}>{event}</li>
    ))}
  </ul>
);

export default EventList;