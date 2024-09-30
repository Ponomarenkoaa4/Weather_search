import React from "react";
import "./weather.css";

const Weather = ({ temp, city, country, pressure, sunset, error }) => {
  return (
    <div className="weather">
      {city && (
        <div className="text">
          <p>
            Местоположение: {city}, {country}
          </p>
          <p>Температура: {temp} </p>
          <p>Давление: {pressure} </p>
          <p>Заход солнца: {sunset} </p>
        </div>
      )}
      <p className="error">{error}</p>
    </div>
  );
};

export default Weather;
