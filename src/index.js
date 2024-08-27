import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");

const Root = () => {
  React.useEffect(() => {
    const hardRefresh = localStorage.getItem("hardRefresh");

    if (hardRefresh === "true") {
      localStorage.setItem("hardRefresh", "false");
      window.location.reload(true);
    }
  }, []);

  return <App />;
};

const root = createRoot(container);
root.render(<Root />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
