import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  // console.log(user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          path={ROUTES.SIGN_UP}
          loggedInPath={ROUTES.BROWSE}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          path={ROUTES.HOME}
          loggedInPath={ROUTES.BROWSE}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

// how can i protect the browser page?
// how do i only allow people who signed up see that page?
