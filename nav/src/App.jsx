import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { StoreProvider } from "store/store";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: nav</div>
  </div>
);
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
