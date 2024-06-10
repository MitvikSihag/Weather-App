import React from "react";

function WeatherCard(props)
{
    let d = new Date();
    let d1 = d.getDate() + " " + d.toLocaleString('default', { month: 'long' }) + ", " + d.getFullYear();

    console.log(props.temp);

    let temp1 = parseInt(props.temp, 10);
    console.log(temp1)
    temp1 -= 273;
    console.log(temp1)
    temp1 = temp1.toString();
    temp1 += "°C";

    return(
        <div class="Card">

            <div class="Location"><h1>{props.location}{props.Country}</h1></div>
            <div><h2>{d1}</h2></div>
            <div class="Img">
                <div ><img src={`https://openweathermap.org/img/wn/${props.Img}@2x.png`} alt={props.description} /></div>
                <div><p>{temp1}</p></div>
            </div>
            <p>{props.description}</p>
            <div class="additionals">
                <div class="wind">
                    <p>{props.wind}</p>
                    <p>Wind Speed</p>
                </div>
                <div class="humidity">
                    <p>{props.humidity}</p>
                    <p>Humidity</p>
                </div>
            </div>

        </div>
        );
}

export default WeatherCard;