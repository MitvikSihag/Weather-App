import React, {useState} from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";
import Header from "./Header.jsx";


function App()
{
 
     const [weather, setWeather] = useState({
         temp: "",
         location: "",
         humidity: "",
         wind: "",
         description: "",
         Img: "",
         Country: ""
     });

     const [showCard, setCard] = useState(false);
 
     async function getData(temp)
     {
        try
        {
        // let cityName = "Bangalore";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${temp}&appid=c10c113731160902f4693d363fe10b51`;
        let response = await fetch(URL);
        if(!response.ok)
        {
            setCard(false);
            throw new Error('Invalid city entered');
        }

        else
        {
            setCard(true);
            let data = await response.json();

            console.log(data);

            setWeather({
                temp: data.main.temp,
                location: data.name,
                humidity: data.main.humidity + "%",
                wind: data.wind.speed + " km/h",
                description: data.weather[0].description,
                Img: data.weather[0].icon,
                Country: ", "+ data.sys.country
         })
        }
        } catch (error)
        {
            console.error('Error fetching data: ', error);
        }

     }

    return (
        <div>
            <Header />
            <div class="container">
                <Input onclick = {getData}/>
                {showCard && 
                (<WeatherCard
                temp = {weather.temp}
                location = {weather.location}
                humidity = {weather.humidity}
                wind = {weather.wind}
                description = {weather.description}
                Img = {weather.Img}
                Country = {weather.Country}
                />)}
            </div>
        </div>
    );

}

export default App;