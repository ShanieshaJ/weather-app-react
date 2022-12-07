import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDays(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function currentDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return day[dayWeek];
  }
  return (
    <div className="WeatherForecastDays">
      <div className="forecast-time">{currentDay()}</div>
      <WeatherIcons code={props.data.condition.icon} size={38} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
