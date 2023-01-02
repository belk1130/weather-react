import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lynnville",
    temperature: 19,
    date: "Thursday 12:45",
    humidity: 50,
    wind: 14,
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  };
  return (
    <div className="weather-app-wrapper">
      <div className="Weather">
        <form className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: <span>{weatherData.date}</span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt="{weatherData.description}"
                className="float-left"
              />
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/belk1130/weather-app-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Belkis Barrios</span>
      </small>
    </div>
  );
}
