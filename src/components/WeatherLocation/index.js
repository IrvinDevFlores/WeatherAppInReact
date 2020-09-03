import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import transformWeather from "../../services/transformWeather";

import { api_weather } from "./../../constans/api_url";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);

    const { city } = props;

    this.state = {
      city,
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount = () => console.log("did mount");

  componentWillMount() {
    console.log("will mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        console.log("resultado handleClick:");
        const newWeather = transformWeather(data);
        this.setState({
          data: newWeather,
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : "No hay data aùn o esta desconectao de internet."}

        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}
export default WeatherLocation;
