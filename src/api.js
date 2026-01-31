import mockData from './mock-data';

/**
 * Checks the validity of an access token
 * @param {string} accessToken
 * @returns {Promise<Object>} Token info or error
 */
const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

/**
 * Removes query parameters from the URL
 */
const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

/**
 * Gets the access token for API requests
 * @returns {Promise<string>} The access token
 */
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const response = await fetch(
        "YOUR_SERVERLESS_GET_AUTH_URL_ENDPOINT"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);

    const response = await fetch(`https://***************/api/token/${encodeCode}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    console.error(error);
  }
};

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
  if (window.location.href.startsWith("http://localhost")) {
    if (!Array.isArray(mockData)) {
      console.error("Mock data is not an array:", mockData);
      return [];
    }
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `YOUR_GET_EVENTS_API_ENDPOINT/${token}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result && Array.isArray(result.events)) {
        return result.events;
      } else {
        console.error("API did not return a valid events array:", result);
        return [];
      }
    } catch (error) {
      console.error("Error fetching events from API:", error);
      return [];
    }
  }

  return [];
};

const API_URL = process.env.VITE_REACT_APP_API_URL || 'https://default-api-url.com';

export { API_URL };
