import React from "react";

export default function DashBoard({ weatherInfo }) {
  return (
    <div className="dashboard">
      <h1 className="city_name">{weatherInfo?.name.toUpperCase()}</h1>
      <h4 className="weather_des">{weatherInfo?.weather[0].description}</h4>
      <div className="circle">
        <h3>습도 : {weatherInfo?.main.humidity}%</h3>
        <p>최고기온 : {Math.floor(weatherInfo?.main.temp_max)}°C</p>
        <p>최저기온 : {Math.floor(weatherInfo?.main.temp_min)}°C</p>
      </div>
      <h3 className="temp">{Math.floor(weatherInfo?.main.temp)}°C</h3>
    </div>
  );
}
