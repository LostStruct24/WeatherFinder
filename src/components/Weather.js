import React from 'react';

const Weather = (props) => {
    return (
        <div className="infoWeather">
            { props.city && 
                <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp} °C</p>
                </div> 
            }
            <p>{props.error}</p>
        </div>
    );
}

export default Weather;