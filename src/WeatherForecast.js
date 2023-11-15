import React, {useEffect, useState} from "react";
import "./WeatherForecast";
import axios from "axios";
import WeatherForecastDay from "./WeatherforecastDay";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] =useState(false);
    let[forecast, setForecast]=useState(null);

    useEffect(() => {
        setLoaded(false);
    },[props.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load () {
        let apiKey ="8o5b4td0d0ca4ab0a3ad8fa66336f0ff";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return(
                                <div className="col" key={index}><WeatherForecastDay day={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    } )}
                </div>
            </div>
        );
    } else {
        load();
        return null;
    }
}