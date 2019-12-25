import React from "react";
import moment from "moment";
import { WiDayThunderstorm } from "react-icons/wi";
import { FiCloudDrizzle } from "react-icons/fi";
import { WiRain } from "react-icons/wi";
import { IoIosSnow } from "react-icons/io";
import { WiDust } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { FaCloudSun } from "react-icons/fa";

// changing the icon depends on the range of id to avoid using ugly icons from API
function getIcon(id) {
  let iconName = "";
  switch (true) {
    case id >= 200 && id <= 232:
      iconName = (
        <WiDayThunderstorm style={{ fontSize: "50px", color: "#222423" }} />
      );
      break;
    case id >= 300 && id <= 321:
      iconName = (
        <FiCloudDrizzle style={{ fontSize: "50px", color: "#222423" }} />
      );
      break;
    case id >= 500 && id <= 531:
      iconName = <WiRain style={{ fontSize: "50px", color: "#222423" }} />;
      break;
    case id >= 600 && id <= 622:
      iconName = <IoIosSnow style={{ fontSize: "50px", color: "#222423" }} />;
      break;
    case id >= 701 && id <= 781:
      iconName = <WiDust style={{ fontSize: "50px", color: "#222423" }} />;
      break;
    case id === 800:
      iconName = (
        <WiNightClear style={{ fontSize: "50px", color: "#222423" }} />
      );
      break;
    case id >= 801 && id <= 804:
      iconName = <FaCloudSun style={{ fontSize: "50px", color: "#222423" }} />;
      break;
    default:
      iconName = (
        <WiNightClear style={{ fontSize: "50px", color: "#222423" }} />
      );
  }
  return iconName;
}

const WeatherDashboard = props => {
  return (
    <div>
      <h2 className="ui center aligned icon header">
        <i className=" icon">
          <img className="city-img" src={props.cityImg} alt="" />
        </i>
        {props.city}
        <p className="day-heading">
          {moment().format("dddd")}, {props.time}
        </p>
        <small>({props.description})</small>
        <div className="weather-display">
          {getIcon(props.id)}
          <p>{props.temp.toFixed(1)}°C</p>
        </div>
      </h2>
    </div>
  );
};

export default WeatherDashboard;
