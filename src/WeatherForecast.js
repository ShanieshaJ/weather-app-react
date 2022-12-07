import { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDays from "./WeatherForecastDays";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(reponse) {
    setForecast(reponse.data.daily);
    setLoaded(true);
  }

  function handleApiLocation(position) {
    let apiKey = "4bac3c024fa4c6ee606313b5c8da3127";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDays data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    handleApiLocation();
    return null;
  }
}
