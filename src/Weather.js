import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { RotatingLines } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const[weatherData, setWeatherData] =useState ({ready: false});
    const[city, setCity] =useState (props.defaultCity);

    function handleResponse (response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            description: response.data.condition.description,
            city:response.data.city,
            date: new Date (response.data.time * 1000),
            icon:response.data.condition.iccon,
        });
    }

    function search () {
        const apiKey ="8o5b4td0d0ca4ab0a3ad8fa66336f0ff";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity (event.target.value);
    }

    if (weatherData.ready) {
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <br />
                <WeatherForecast city={weatherData.city} />
            </div>
        );
    } else {
        search();
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />;
    }
}