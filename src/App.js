import React, { useState } from "react";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const API_KEY = "key";

const App = () => {
  const [state, setState] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  });

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      const temp = data.main.temp;
      const temp_date = Math.round(temp);

      const date = new Date();
      const sunset = data.sys.sunset;
      date.setTime(sunset);
      const sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      setState({
        temp: temp_date,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
      });
    } else {
      setState({
        error: "Ошибка: Введите название города",
      });
    }
  };

  return (
    <div className="wrapper">
      <Info />
      <Form gettingWeather={gettingWeather} />
      <Weather
        temp={state.temp}
        city={state.city}
        country={state.country}
        pressure={state.pressure}
        sunset={state.sunset}
        error={state.error}
      />
    </div>
  );
};

export default App;
