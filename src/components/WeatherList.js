import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = props => {
  return (
    <div>
      <WeatherItem weatherData={props.weatherData} />
    </div>
  );
};

export default WeatherList;
