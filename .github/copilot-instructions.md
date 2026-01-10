# Copilot Instructions for myFlix Client

## Project Overview
- **myFlix Client** is a React/Redux SPA for browsing movies, user authentication, and managing favorites.
- The project is split into a frontend (this repo) and a backend (see [myFlix API](https://github.com/dodo4545/movie_api)).
- There is also an `auth-server` subproject using AWS Lambda (Serverless) for calendar event integration.

## Key Architecture
- **Frontend:**
  - Located in `src/`.
  - Uses React (v19+), Redux, React Router, and SASS.
  - State managed via Redux (`src/actions/`, `src/reducers/`, `src/store/store.js`).
  - Major UI components in `src/components/` (see `main-view/`, `movie-card/`, etc.).
  - API calls abstracted in `src/api.js`.
- **Backend Integration:**
  - Main API URL is set in `INSTRUCTOR_TEST_CREDENTIALS.md`.
  - Auth endpoints and calendar events handled by `auth-server/` (see `auth-server/handler.js`).

## Developer Workflows
- **Start Dev Server:** `npm start` (Parcel, opens on port 1234)
- **Vite Dev:** `npm run dev` (alternative, port 5173)
- **Build:** `npm run build` (outputs to `dist/`)
- **Test:** `npm test` (Jest, see `src/__tests__/`)
- **Lint:** `npm run lint`
- **Deploy:**
  - Netlify auto-deploys from `main` branch.
  - For GitHub Pages: `npm run deploy` (uses `gh-pages`)

## Project-Specific Conventions
- **Redux:**
  - Actions, reducers, and store setup follow `REDUX_ARCHITECTURE.md`.
  - Use action creators from `src/actions/actions.js`.
  - State shape: `{ movies, user, favorites, ui }`.
- **Component Patterns:**
  - Container/presentational split in some components.
  - Use PropTypes for all component props.
  - Styles: Prefer SASS (`.scss`), colocated with components.
- **Testing:**
  - Use React Testing Library and Jest.
  - Test files in `src/__tests__/`, named `*.test.js`.
- **API:**
  - All API calls go through `src/api.js`.
  - Use mock data from `src/mock-data.js` for local dev/testing.

## Integration Points
- **auth-server/**: AWS Lambda functions for calendar events (see `auth-server/serverless.yml`).
- **Backend API**: URL in `INSTRUCTOR_TEST_CREDENTIALS.md`.
- **Netlify**: Deploy config in `netlify.toml` (if present).

## References
- See `REDUX_ARCHITECTURE.md` for Redux details.
- See `README.md` for scripts, structure, and deployment.
- See `INSTRUCTOR_TEST_CREDENTIALS.md` for test credentials and backend URL.
- See `auth-server/` for serverless integration.

---
For new patterns or changes, update this file to keep AI agents productive.
