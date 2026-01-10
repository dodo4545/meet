// src/mock-data.js

const mockData = [
  // 32 mock events for testing
  ...Array.from({ length: 32 }, (_, i) => ({
    kind: "calendar#event",
    etag: `\"etag${i}\"`,
    id: `event${i}`,
    status: "confirmed",
    htmlLink: `https://www.google.com/calendar/event?eid=event${i}`,
    created: `2020-05-19T19:${10 + i}:30.000Z`,
    updated: `2020-05-27T11:45:37.792Z`,
    summary: `Event ${i + 1}`,
    description: `Description for event ${i + 1}`,
    location: ["Berlin, Germany", "London, UK", "New York, USA"][i % 3],
    creator: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true
    },
    organizer: {
      email: "fullstackwebdev@careerfoundry.com",
      self: true
    },
    start: {
      dateTime: `2020-05-20T${String(10 + i).padStart(2, '0')}:00:00+02:00`,
      timeZone: "Europe/Berlin"
    },
    end: {
      dateTime: `2020-05-20T${String(11 + i).padStart(2, '0')}:00:00+02:00`,
      timeZone: "Europe/Berlin"
    },
    recurringEventId: `event${i}`,
    originalStartTime: {
      dateTime: `2020-05-20T${String(10 + i).padStart(2, '0')}:00:00+02:00`,
      timeZone: "Europe/Berlin"
    },
    iCalUID: `event${i}@google.com`,
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: "default"
  }))
];

export default mockData;
