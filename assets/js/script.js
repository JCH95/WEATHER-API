// Starter Code
// Current Date/Time
var today = new Date();
document.getElementById("currentDay").innerHTML = today;

let weather = {
    apiKey: "a6bb17714f8b0f6f4691c682d40d5996", 
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { lat } = data.coord.lat;
        const { lon } = data.coord.lon;
        console.log(name, temp, humidity, speed);
        document.getElementById("city-name").innerText = name;
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerText = "Wind Speed: " + speed + " MPH";
        document.getElementById("temp").innerText = "Temp: " + temp + "°F";
        document.getElementById("description").innerText = "Description: " + description;
    },


};

var cityInput = document.getElementById("city-input");
var searchBtn = document.getElementById("city-button");
var cityList = document.getElementById("city-list");

// Stores each city when the search button is clicked
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var city = document.getElementById("city-input").value;
    localStorage.setItem("city-input", JSON.stringify(city));
    listBuilder();
    weather.fetchWeather(city);
    weather.displayWeather(city);
});

// Pulls city from locl storage and makes a new li element
function listBuilder() {
    var getCity = JSON.parse(localStorage.getItem("city-input"));
    var list = document.createElement("button");
    list.textContent = getCity;
    cityList.appendChild(list);
};
