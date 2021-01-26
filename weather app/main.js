let city = "Bucharest"
const searchBut = document.getElementById("search");
//const APIURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ab2d4d7bd8c1d510a1d9addc78aa05d1`;

function getWeather(link) {
    fetch(link)
        .then((res) => res.json())
        .then((date) => {
            console.log(date);
            const {main , id, description} = date.weather[0];
            const {temp , pressure,humidity} = date.main;
            const {speed} = date.wind;
            const {country , sunrise, sunset} = date.sys;
            const {all} = date.clouds;

            let actualDate = new Date(date.dt * 1000);
            let year = actualDate.getFullYear();
            let month = actualDate.getMonth()+1;
            let day = actualDate.getDate();
            let time = `${day}:${month}:${year}`;
            let todaySunrise = new Date(sunrise* 1000);
            let todaySunset = new Date(sunset * 1000);
            let hoursRise = todaySunrise.getHours();
            let minutesRise = todaySunrise.getMinutes();
            let hoursSet = todaySunset.getHours();
            let minutesSet = todaySunset.getMinutes();

            document.getElementById('temperature').textContent = `Actual Temperature ${(Math.round((temp-273) *100)/100).toFixed(2)} °`;
            document.getElementById("cityName").textContent = `City : ${date.name} / ${country}`;
            document.getElementById("weatherDes").textContent = description;
            document.getElementById("clock").textContent = `Date: ${time}`;
            document.getElementById("clouds").textContent = `Clouds: ${all}%`
            //document.getElementById("windSpeed").textContent= `Wind Speed: ${speed}`;
            document.getElementById("humidity").textContent = `Humidity: ${humidity}`;
            document.getElementById("sunrise").innerHTML = `<i class="fas fa-sun" id="sunIcon"></i><br> Sun Rise: ${hoursRise}:${minutesRise}`;
            document.getElementById("sunset").innerHTML = `<i class="fas fa-moon" id="moonIcon"></i><br> Sun Set: ${hoursSet}:${minutesSet}`;
            document.getElementById("timePerspectiv").innerHTML = `<i class="fas fa-clock" id="time"></i> Time from your perspectiv:`
        })
}
//getWeather(APIURL)

searchBut.addEventListener("click",()=>{
    const input = document.getElementById("cityInput").value.trim();
    city = input;
    console.log(input)
    let APIURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ab2d4d7bd8c1d510a1d9addc78aa05d1`
    getWeather(APIURL);
})
