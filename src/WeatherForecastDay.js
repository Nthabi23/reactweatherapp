import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css"

export default function WeatherForecastDay(props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast, setForecast] =useState(null);

useEffect(()=> {
  setLoaded(false);
},[props.lat, props.lon]);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded) {
 return(
  <div className="WeatherForecastDay">
    <div className="row">
      {forecast.map(function (dailyForecast, index) {
        if (index < 6) {
          return(
            <div className="col-daily-forecast" key={index}>
              <WeatherDay
              icon={dailyForecast.condition.icon_url}
              desc={dailyForecast.condition.descriptio}
              maxTemp={dailyForecast.temperature.maximum}
              minTemp={dailyForecast.temperature.minimum}
              daytime={dailyForecast.time} />
            </div>

          );
        }else return null;
      })}
    </div>
  </div>
 ); 
} else {
  const apiKey ="bd5b44461863eddaa6ced0a67989e0a";
  const latitude = props.lat;
  const longitude = props.lon;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;
}
}