import React, { useState } from "react";
import axios from "axios";
import "./WeatherForm.css";
import CurrentData from "./CurrentData";
import CurrentWeatherData from "./CurrentWeatherData";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconURL: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function searchCity() {
    let apiKey = "34c07bt895o4bb1e093cad279ab94f19";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherForm">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9 search-form">
              <input
                type="search"
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                id="inlineFormInputName"
                placeholder="Search for a city"
                onChange={handleUpdateCity}
              />
            </div>
            <div className="col-3 search-location-area">
              <button type="search" className="btn btn-primary pull-right">
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
              </button>
              <button
                type="button"
                className="btn btn-primary pull-right"
                id="current-location"
              >
                <FontAwesomeIcon icon={faLocationCrosshairs} />
              </button>
            </div>
          </div>
        </form>
        <CurrentData data={weatherData} />
        <CurrentWeatherData data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return (
      <section className="LoadingIcon">
        <p>Loading, please wait...</p>
      </section>
    );
  }
}
