import React from "react";
import "./WeatherForecastDays.css";

export default function WeatherForecastDays(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function currentDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayWeek[day];
  }
  return (
    <div className="WeatherForecastDays">
      <div className="forecast-time">{currentDay()}</div>
      <div className="forecastIcon">
        <img src={props.data.condition.icon_url} alt={props.data.icon} />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>{" "}
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
