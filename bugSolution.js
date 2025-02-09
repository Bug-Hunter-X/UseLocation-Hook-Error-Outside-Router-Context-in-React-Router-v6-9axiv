To fix this, ensure that the component using `useLocation` is nested within the router provider.

Correct usage:
```javascript
import { BrowserRouter, useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation(); // Now this works correctly!
  // ...
}

function App() {
  return (
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  );
}
```
Alternatively, if you need access to location information outside of the main routing context (for example, in a utility function), you can pass the location object as a prop to that function:

```javascript
import { BrowserRouter, useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  return <MyOtherComponent location={location}/>
}

function MyOtherComponent({location}){
  console.log(location);
}

function App() {
  return (
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  );
}
```