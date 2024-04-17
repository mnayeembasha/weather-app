import { useState } from "react";
import InfoBox  from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 26.35,
        humidity: 76,
        temp: 25.74,
        tempMax: 25.74,
        tempMin: 25.74,
        weather: "clear sky",
    });
    const updateInfo = (newWeatherInfo) => {
        setWeatherInfo(newWeatherInfo);
    }
    return (
        <>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </>
    )
}