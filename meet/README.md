# Meet App

A serverless, progressive web application (PWA) built with React using test-driven development (TDD) techniques. The application uses the Google Calendar API to fetch and display upcoming events, allowing users to search for events in different cities, view event details, and visualize event data through charts.

## Project Description

The Meet App is designed to help users discover events happening in cities around the world. Built with a focus on test-driven development, the app provides a seamless user experience both online and offline, with data visualization features to help users understand event patterns and distributions.

## Key Features & User Stories

### Feature 1: Filter Events By City

**User Story:**
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city

**Scenarios:**

**Scenario 1:** When user hasn't searched for a city, show upcoming events from all cities
```gherkin
Given user hasn't searched for any city
When the user opens the app
Then the user should see a list of upcoming events from all cities
```

**Scenario 2:** User should see a list of suggestions when they search for a city
```gherkin
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of suggestions
```

**Scenario 3:** User can select a city from the suggested list
```gherkin
Given user was typing "Berlin" in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., "Berlin, Germany") from the list
Then their city should be changed to that city (i.e., "Berlin, Germany") and the user should receive a list of upcoming events in that city
```

### Feature 2: Show/Hide Event Details

**User Story:**
As a user,
I should be able to show or hide event details
So that I can see more or less information about an event as needed

**Scenarios:**

**Scenario 1:** An event element is collapsed by default
```gherkin
Given the user is viewing the list of events
When the events are displayed
Then each event element should be collapsed by default
```

**Scenario 2:** User can expand an event to see details
```gherkin
Given the user is viewing a list of collapsed events
When the user clicks on an event
Then the event details should expand to show more information
```

**Scenario 3:** User can collapse an event to hide details
```gherkin
Given an event's details are expanded
When the user clicks on the collapse button or the event again
Then the event details should collapse and hide the additional information
```

### Feature 3: Specify Number of Events

**User Story:**
As a user,
I should be able to specify the number of events displayed
So that I can see more or fewer events at once based on my preference

**Scenarios:**

**Scenario 1:** When user hasn't specified a number, 32 events are shown by default
```gherkin
Given the user hasn't specified the number of events to display
When the user views the events list
Then 32 events should be shown by default
```

**Scenario 2:** User can change the number of events displayed
```gherkin
Given the user is viewing the events list
When the user changes the number in the "Number of Events" input field
Then the displayed number of events should match the number specified by the user
```

### Feature 4: Use the App When Offline

**User Story:**
As a user,
I should be able to use the app when offline
So that I can view events even without an internet connection

**Scenarios:**

**Scenario 1:** Show cached data when there's no internet connection
```gherkin
Given the user has previously loaded events while online
When the user opens the app without an internet connection
Then the app should display the cached event data
```

**Scenario 2:** Show error when user changes search settings (city, number of events) while offline
```gherkin
Given the user is using the app offline
When the user tries to change search settings (city or number of events)
Then the app should display an error message indicating that the action requires an internet connection
```

### Feature 5: Add an App Shortcut to the Home Screen

**User Story:**
As a user,
I should be able to add the app shortcut to my device's home screen
So that I can quickly access the app without opening a browser

**Scenarios:**

**Scenario 1:** User can install the meet app as a shortcut on their device home screen
```gherkin
Given the user is using a compatible device and browser
When the user selects the option to install or add to home screen
Then a shortcut to the meet app should be added to the device's home screen
```

### Feature 6: Display Charts Visualizing Event Details

**User Story:**
As a user,
I should be able to view charts that visualize event details
So that I can quickly understand the distribution and number of events by city

**Scenarios:**

**Scenario 1:** Show a chart with the number of upcoming events in each city
```gherkin
Given the user is viewing the main page with events loaded
When the user navigates to or views the charts section
Then a chart should display showing the number of upcoming events in each city
```

## Technologies

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Google Calendar API** - Event data source
- **AWS Lambda** - Serverless backend functions
- **OAuth2** - Authentication
- **Recharts** - Data visualization library
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Puppeteer** - End-to-end testing
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Calendar API credentials
- AWS account

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Testing

Run all tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

### Build

```bash
npm run build
```

## Deployment

This project is deployed on Vercel. Any push to the main branch will automatically trigger a new deployment.

## Project Structure

```
meet/
├── public/
├── src/
│   ├── components/
│   ├── tests/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## License

This project is part of the CareerFoundry Full-Stack Web Development course.

## Author

Created as part of Achievement 4 - CareerFoundry Full-Stack Web Development Program
