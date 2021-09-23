// when user logged in. redirect to browser page
// or sign in & sign up page

// protect browser page

import React from "react";
import { Route, Redirect } from "react-router";

// children is a component page for sign in
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

// children is a component page for enjoying contents
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "login",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
