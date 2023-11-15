import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.day.temperature.maximum)
        return `${temperature}`
    }

    function minTemperature(){
        let temperature = Math.round(props.day.temperature.maximum)
        return `${temperature}`
    }

    function day() {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let date = new Date(props.day.time * 1000);
        let day = days[date.getDay()];

        return day;
    }

    return(
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day mb-2">{day()}</div>
                <WeatherIcon code={props.day.condition} size={36} />
                <div className="WeatherForecast-temperature mt-2">
                    <span className="WeatherForecast-temperature-max">{maxTemperature()}&deg;</span>
                    <span className="WeatherForecast-temperature-min">{minTemperature()}&deg;</span>
                </div>
        </div>
    );
}