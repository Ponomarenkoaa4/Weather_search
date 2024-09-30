import React from "react";
import "./form.css";

const Form = ({ gettingWeather }) => {
  return (
    <form className="form" onSubmit={gettingWeather}>
      <input type="text" name="city" placeholder="Город" />
      <button>Получить погоду</button>
    </form>
  );
};

export default Form;
