import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import WeatherSearch from "./WeatherSearch";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  </React.StrictMode>
);

reportWebVitals();
<a href="https://app.netlify.com/sites/nimble-nasturtium-d98fc8">Netlify</a>;
