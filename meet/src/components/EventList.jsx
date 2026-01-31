import React from 'react';
import PropTypes from 'prop-types';

const EventList = ({ events = [] }) => (
  <ul data-testid="event-list">
    {events.map((event) => (
      <li key={event.id}>{event.name} - {event.location}</li>
    ))}
  </ul>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};

export default EventList;