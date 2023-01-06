import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by Belkis Barrios and is{" "}
          <a href="https://github.com/belk1130/weather-react" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
