import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
return(
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.date.data.date} /></li>
            <li className="text-capitalize">{props.date.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon} size={52} />
                    <span className="float-left"><WeatherTemperature celsuis={props.data.temperature} /></span>
                </div>
            </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)} Km/h</li>
            </ul>
        </div>
        </div>
    </div>
);
}