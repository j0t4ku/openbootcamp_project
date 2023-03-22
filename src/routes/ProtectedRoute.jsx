import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const isLoggedIn = true; // TODO: replace with actual authentication check
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;