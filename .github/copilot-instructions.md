# Copilot Instructions for myFlix Client

## Project Overview
- **myFlix Client** is a React 19/Redux 5 SPA for browsing movies, user authentication, and managing favorites
- Backend: https://myflix-app-711-52fc8f24a6d2.herokuapp.com (separate repo: [movie_api](https://github.com/dodo4545/movie_api))
- Deployed: https://myflix-james.netlify.app/ (auto-deploys from `main`)
- **Important:** `meet/` is a separate Google Calendar events app—do NOT mix with myFlix movie app logic

## Architecture

### Redux State Structure
```javascript
{
  movies: { list: [] },              // All movies from API
  user: { user: {}, token: "" },     // Current user + JWT token
  favorites: [],                      // Array of favorite movie IDs
  ui: { isLoading, authError, searchQuery }  // UI state
}
```
- **Store:** `src/store/store.js` (Redux DevTools enabled)
- **Actions:** `src/actions/actions.js` + `actionTypes.js`
- **Reducers:** `src/reducers/` (combined in `index.js`)
- Entry point: `src/main.jsx` wraps app in `<Provider store={store}>`

### Routing & Components
- Router: React Router v6 in `src/components/main-view/main-view.jsx`
- Routes: `/` (movie grid), `/login`, `/signup`, `/profile`, `/movies/:movieId`
- All components use Redux hooks (`useSelector`, `useDispatch`) instead of prop drilling
- Example: `<MovieCard>` dispatches `addFavorite()` action directly

### API Integration
- **API URL:** Hardcoded in `main-view.jsx` as `https://myflix-app-711-52fc8f24a6d2.herokuapp.com`
- **Environment:** Use `import.meta.env.VITE_REACT_APP_API_URL` (Vite convention)
- **Fallback:** On API error, app loads mock data from `src/mock-data.js` (see `main-view.jsx` line ~50)
- **Auth:** JWT token stored in Redux state (`user.token`), passed as `Authorization: Bearer ${token}` header
- **Note:** `localStorage.clear()` runs on mount—tokens are NOT persisted across sessions

## Developer Workflows

### Build & Dev Servers
- **Primary dev:** `npm start` → Parcel bundler on port 4500
- **Alternative:** `npm run dev` → Vite on port 5175
- **Build:** `npm run build` → outputs to `dist/`
- **Deploy:** `npm run deploy` → GitHub Pages (via `gh-pages`)

### Testing
- **Run tests:** `npm test` (Jest + React Testing Library)
- **Config:** `jest.config.cjs` (jsdom environment, Babel transforms JSX)
- **Test location:** `src/__tests__/*.test.js`
- **Setup:** `setupTests.js` imports `@testing-library/jest-dom`
- **Mocks:** CSS → `identity-obj-proxy`, SVG → `__mocks__/fileMock.js`
- Tests use `render()`, `screen`, `waitFor()`, `userEvent` from RTL

### Environment Variables
- Use `.env` file with `VITE_` prefix for Vite: `VITE_REACT_APP_API_URL`
- Access via `import.meta.env.VITE_*` (NOT `process.env.*`)
- Parcel uses `process.env.*` but Vite requires `import.meta.env.*`

## Project-Specific Conventions

### Component Patterns
- **PropTypes:** ALL components must define PropTypes (see `movie-card.jsx`, `movie-view.jsx`)
- **Styles:** Use SASS (`.scss`), colocated with components (e.g., `movie-card.scss`)
- **Global styles:** `src/index.scss` imports Bootstrap
- **Error handling:** `<BackendErrorMessage>` component displays API errors

### Redux Patterns
- **Actions:** Use action creators from `src/actions/actions.js`
  - `setMovies(movies)`, `setUser(user, token)`, `addFavorite(movieId)`, etc.
- **Selectors:** Access state via `useSelector((state) => state.movies.list)`
- **Dispatching:** `const dispatch = useDispatch(); dispatch(setMovies(data));`
- **No middleware:** Plain Redux store without thunk/saga (side effects in components)

### Key Files
- `src/main.jsx`: Entry point (renders `<App>` with Redux Provider)
- `src/components/main-view/main-view.jsx`: Core routing + API fetch logic
- `src/api.js`: Google Calendar OAuth (for `meet/` app, NOT myFlix)
- `src/mock-data.js`: Movie mock data fallback
- `auth-server/`: Separate AWS Lambda functions for Google Calendar events (see `auth-server/serverless.yml`)

## Authentication Flow

### Overview
The app uses JWT-based authentication for user login and signup. Tokens are stored in the Redux state and passed as `Authorization: Bearer <token>` headers for API requests. Tokens are **not persisted** across sessions (cleared on mount).

### Key Files
- `src/components/login-view/login-view.jsx`: Handles user login.
- `src/components/signup-view/signup-view.jsx`: Handles user registration.
- `src/actions/actions.js`: Contains `setUser(user, token)` and `logoutUser()` action creators.
- `src/reducers/user.js`: Manages user and token state.
- `src/components/main-view/main-view.jsx`: Clears tokens on mount and fetches movies with the token.

### Login Process
1. User submits credentials via `login-view.jsx`.
2. API call to `/login` endpoint returns a JWT token.
3. Token is stored in Redux state (`user.token`) using `setUser()` action.
4. Token is included in `Authorization` headers for subsequent API requests.

### Signup Process
1. User submits registration details via `signup-view.jsx`.
2. API call to `/users` endpoint creates a new user.
3. User is redirected to the login page.

### Logout Process
1. `logoutUser()` action clears user and token from Redux state.
2. LocalStorage is cleared on app mount to ensure no stale tokens remain.

### Common Issues
- **Token Expiry:** Tokens are not refreshed automatically. Users must log in again if the token expires.
- **API Errors:** Use `<BackendErrorMessage>` to display errors from the API.
- **LocalStorage Clearing:** Ensure no critical data is stored in LocalStorage, as it is cleared on mount.

## Common Pitfalls
- **Don't confuse projects:** `meet/` is a separate app—myFlix movie logic lives in `src/components/`
- **API URL:** Env var should be `VITE_REACT_APP_API_URL` for Vite, but fallback is hardcoded in `main-view.jsx`
- **Token persistence:** Tokens are cleared on mount—don't assume localStorage
- **Build tools:** Project has BOTH Parcel and Vite configs—default scripts use Parcel

---
**Live URLs:**
- Production: https://myflix-james.netlify.app/
- API: https://myflix-app-711-52fc8f24a6d2.herokuapp.com
- GitHub: https://github.com/dodo4545/myFlix-client
