import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import IcoMoon from 'react-icomoon';
import './styles.css';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constans/Weathers';

const icons = {
    [CLOUD] : "cloud",
    [CLOUDY] : "cloudy",
    [SUN] : "day-sunny",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [WINDY] : "windy"
}
const GetWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    if(icon)
    {
        return <WeatherIcons name={icon} size="2x"/>
    }else{
        return <WeatherIcons name={"day-sunny"} size="2x"/>
    }
   
}

const WeatherTemperature = ({temperature,weatherState}) => (
    <div className="weatherTemperatureCont">
        {GetWeatherIcon(weatherState)}
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState : PropTypes.string,
};
export default WeatherTemperature;