import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day":"CLEAR_DAY",
        "clear-sky-night":"CLEAR_NIGHT",
        "few-clouds-day":"PARTLY_CLOUDY_DAY",
        "few-cloud-night":"PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day":"FOG",
        "scattered-clouds-night": "FOG",
        "broken-clouds-day":"CLOUDY",
        "broken-clouds-night":"CLOUDY",
        "rain-day":"RAIN",
        "rain-night":"RAIN",
        "shower-rain-day":"RAIN",
        "shower-rain-day":"RAIN",
        "snow-day":"SNOW",
        "snow-day":"SNOW",
        "mist-day":"wIND",
        "mist-night":"WIND",
        "thunderstorm-day":"RAIN",
        "thunderstorm-night":"RAIN",
    }
    return<ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="blue"
    size={props.size}
    animate={true}
    />
}