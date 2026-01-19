import React from 'react';
import Event from "./Event";

const EventList = ({ events }) => {
  console.log('EventList received events:', events); // Log events prop
  return (
    <ul id="event-list" data-testid="event-list">
      {events ?
        events.map(event => <Event key={event.id} event={event} />) :
        null}
    </ul>
  );
}

export default EventList;
