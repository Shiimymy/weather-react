import React from "react";
import axios from 'axios';

export default function Weather(props) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=597c40c39084687093b091cd48b366f8&&units=metric`;

    function handleResponse (response) {
        alert(`The Weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`)
    }
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
        <h2>*</h2>
    )
}