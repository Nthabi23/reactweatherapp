
import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const[unit, setUnit] =useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    
    function fahrenheit () {
        return (props.celsius * 9)/5 +32;
    }
    if (unit==="celsius") {
        return(
            <span className="WeatherTemperature">
                <span className="Temperature">{Math.round(props.celsius)}</span> <span className="unit">&deg; | <a href="/" onCkick={showFahrenheit} className="text-decoration-none">&deg;F</a></span>
            </span>
        );
    } else {
        return(
            <span className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}</span> <span className="unit"> <a href="/" onClick={showCelsius} className="text-decoration-none" >&deg;C</a> | &deg;F</span>
            </span>
        );
    }
}