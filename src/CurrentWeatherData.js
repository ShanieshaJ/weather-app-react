import React from "react";
import "./CurrentWeatherData.css";

export default function CurrentWeatherData(props) {
  return (
    <div className="CurrentWeatherData">
      <div className="row current-weather-container">
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-weather-temperature">
              <img
                src={props.data.iconURL}
                alt={props.data.description}
                className="float-left"
              />{" "}
              <strong>{props.data.temperature}</strong>
              <span className="units">
                <a href="/" id="celsius">
                  °C
                </a>{" "}
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">
                Description: {props.data.description}
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
