import React from 'react';
import Event from "./Event";

const EventList = ({ events = [] }) => {
  console.log('EventList received events:', events); // Log events prop

  if (!Array.isArray(events)) {
    console.error('Invalid events prop, expected an array:', events);
    return <ul id="event-list" data-testid="event-list"><li>No events available</li></ul>;
  }

  return (
    <ul id="event-list" data-testid="event-list">
      {events.length > 0 ?
        events.map(event => {
          if (!event || !event.id) {
            console.error('Invalid event object:', event);
            return null;
          }
          return <Event key={event.id} event={event} />;
        }) :
        <li>No events available</li>}
    </ul>
  );
}

export default EventList;
