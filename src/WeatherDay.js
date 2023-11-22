import Reaxt from "react";

export default function WeatherDay(props) {
    function maxT() {
        let temperature = Math.round(props.maxTemp);
        return `${temperature}`;
    }
    function minTemp() {
        let temperature = Math.round(props.minTemp);
        return`${temperature}`;
    }

    function day() {
        let date = new Date(props.daytime * 1000);
        let light = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[light];
    }
    return(
        <div className="WeatherDay">
            <div className="forecastDay">{day()}</div>
            <div className="forecastIcon">
                <img
                src={props.icon}
                alt={props.desc}
                className="center"
                height={70}
                width={70} />
            </div>
            <div className="forecastTemperature">
                <span className="maxTemperature">{maxT()}</span>
                <span className="minTemperature">{minTemp()}</span>
            </div>
        </div>
    );
}