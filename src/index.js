import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { authService, dbService } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ authService, dbService }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
