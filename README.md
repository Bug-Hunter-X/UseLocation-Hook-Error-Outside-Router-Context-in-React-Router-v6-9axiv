# React Router v6 useLocation Hook Error

This repository demonstrates a common error encountered when using the `useLocation` hook in React Router v6: attempting to use the hook outside a routing context (i.e., outside a component rendered within a `<BrowserRouter>`, `<HashRouter>`, or `<MemoryRouter>`).  The solution shows how to correctly use the hook within the provided routing context.

## Bug
The bug occurs when `useLocation` is called in a component or function that's not a direct descendant of a router provider.  This results in an error because `useLocation` relies on the context provided by the router.

## Solution
The solution involves ensuring that the component using `useLocation` is rendered within the `<Router>` provider's component tree. 