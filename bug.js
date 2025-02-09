In React Router Dom v6, attempting to access the `useLocation` hook outside of a component that is rendered within a `<Router>` provider will throw an error.  This is because `useLocation` relies on the routing context provided by the `BrowserRouter`, `HashRouter`, or `MemoryRouter` components.  The error might manifest as a `Cannot read properties of undefined (reading 'location')` or a similar error indicating that the routing context is unavailable.

Example of incorrect usage:
```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation(); // Error: useLocation hook cannot be used outside a Router context
  // ...
}
```