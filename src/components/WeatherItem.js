import React from "react";

const WeatherItem = props => {
  const weather_item = props.weatherData.list.map(el => {
    let imgSrc =
      "http://openweathermap.org/img/w/" + el.weather[0].icon + ".png";
    const epochTime = new Date(0);
    const dt = epochTime.setUTCSeconds(el.dt);
    return (
      <div>
        <p>{dt}</p>
        <p>{el.main.temp}</p>
        <img src={imgSrc} alt="" />
      </div>
    );
  });
  return <div>{weather_item}</div>;
};

export default WeatherItem;
