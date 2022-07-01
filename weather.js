// api keys: feb9919c60b85fc8b23743ffe478e515
const icon = document.querySelector(".weather-icon");
const tempVal = document.querySelector(".temperature-value p");
const tempDes = document.querySelector(".temperature-description p");
const locationP = document.querySelector(".location p");

async function changeWeatherUI(){
    //Pick API
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=ho chi minh city&appid=feb9919c60b85fc8b23743ffe478e515";

    
    let data = await fetch(apiURL).then(res=>res.json());

    let iconID = data.weather[0].icon;
    icon.innerHTML = `<img src = "./icons/white/${iconID}.svg" alt = "${iconID}">`;
    tempVal.innerText = Math.round(data.main.temp - 273.15) + "°C";
    tempDes.innerText = data.weather[0].main;
    if (data.sys.country === 'VN')
    {
        data.sys.country = 'Vietnam';
        locationP.innerText = data.name + ", " + data.sys.country;
    }

    //Weather background
    const weatherBackground = document.querySelector(".weather");
    if(data.weather[0].main === "Rain")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/rain.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else if (data.weather[0].main === "Clouds")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/clouds.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else if (data.weather[0].main === "Thunderstorm")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/thunderstorm.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else if (data.weather[0].main === "Drizzle")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/drizzle.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else if (data.weather[0].main === "Snow")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/snow.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else if (data.weather[0].main === "Atmosphere")
    {
        weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/atmosphere.jpg')`;
        weatherBackground.style.backgroundSize = "100% 100%";
    }
    else
    {
        if(iconID === '01d')
        {
            weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/sunny.jpg')`;
            weatherBackground.style.backgroundSize = "100% 100%";
        }
        else if(iconID === '01n')
        {
            weatherBackground.style.background = `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.7)), url('./img/weather/night.jpg')`;
            weatherBackground.style.backgroundSize = "100% 100%";
        }
    }
}

changeWeatherUI();

