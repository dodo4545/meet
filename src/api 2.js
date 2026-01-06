import mockData from './mock-data';

/**
 * Extracts unique locations from an array of events.
 * @param {*} events - Array of event objects
 * @returns {string[]} Array of unique locations
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

/**
 * Returns the mock events data (simulating an API call)
 * @returns {Promise<Array>} Promise resolving to mockData
 */
export const getEvents = async () => {
  return mockData;
};
