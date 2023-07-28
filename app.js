const apiKey = "a3d7dbc20ead1501ca7e10ecbe7c90a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const image = document.querySelector(".weather-icon")


async function checkWeather(city){

    const res = await fetch(`${apiUrl}${city}&appid=${apiKey}`)

        if(res.status == 404){
            console.clear()
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{

        const data = await res.json()
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +     "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    
             if(data.weather[0].main == "Clouds"){
                 image.src = "./images/clouds.png"
             }
             else if(data.weather[0].main == "Rain"){
                 image.src = "./images/rain.png"
             }
             else if(data.weather[0].main == "Clear"){
                 image.src = "./images/clear.png"
             }
             else if(data.weather[0].main == "Drizzle"){
                 image.src = "./images/drizzle.png"
             }
             else if(data.weather[0].main == "Mist"){
                 image.src = "./images/mist.png"
             }
    
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block"
    
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})



