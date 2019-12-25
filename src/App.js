import React from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/de";
import "./App.css";
import unsplash from "./components/Unsplash";
import SearchBar from "./components/SearchBar";
import WeatherDashboard from "./components/WeatherDashboard";

//Extends:
// 1. add time zone API to change the time depends on location of city
// 2. add weather of the next five days

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: "",
      cityImg: "",
      time: moment().format("hh:mm")
    };
  }

  // to show a city before the user to use the search bar (by default city)
  componentDidMount = () => {
    this.onSubmitHandler("duisburg");
  };

  // fetching the data fro weather API  and unsplash API when the user click on Enter
  onSubmitHandler = term => {
    // fetching weather data from open weather map API
    const city = "Duisburg";
    const KEY = "665f4d379bf913ec516041ef0a5f0c24";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${KEY}`,
        {
          params: {
            key: "665f4d379bf913ec516041ef0a5f0c24",
            q: term
          }
        }
      )
      .then(response => {
        this.setState({ weatherData: response.data });
      });

    // fetching data from Unsplash API
    unsplash
      .get("/search/photos", {
        params: {
          query: term
        }
      })
      .then(
        response => {
          this.setState({ cityImg: response.data.results[0].urls.regular });
        },
        err => {
          this.setState({ message: err.message });
        }
      );

    // to fetch the time each minute (updating time)
    setInterval(() => {
      this.setState({ time: moment().format("hh:mm") });
    }, 60000);
  };

  render() {
    // if there is data from API then render the information if not reneder just search bar
    if (this.state.weatherData) {
      return (
        <div className="App">
          <SearchBar onSubmit={this.onSubmitHandler} />
          <WeatherDashboard
            icon={this.state.weatherData.weather[0].icon}
            cityImg={this.state.cityImg}
            time={this.state.time}
            temp={this.state.weatherData.main.temp}
            city={this.state.weatherData.name}
            id={this.state.weatherData.weather[0].id}
            description={this.state.weatherData.weather[0].description}
          />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar onSubmit={this.onSubmitHandler} />
        </div>
      );
    }
  }
}

export default App;
