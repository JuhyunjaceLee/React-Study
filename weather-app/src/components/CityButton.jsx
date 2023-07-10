import React from "react";

export default function CityButton({ cities, handleCityChange, select }) {
  return (
    <div className="btn_wrap">
      <button
        onClick={() => handleCityChange("current")}
        className={`${select === "current" ? "select" : ""}`}
      >
        CURRENT LOCATION
      </button>
      {cities.map((city, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleCityChange(city)}
            className={`${select === city ? "select" : ""}`}
          >
            {city.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
