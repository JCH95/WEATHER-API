// Starter Code
// Current Date/Time
var today = new Date();
document.getElementById("currentDay").innerHTML = today;

let weather = {
    apiKey: "a6bb17714f8b0f6f4691c682d40d5996", 
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },


    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, temp, humidity, speed);
        document.getElementById("city-name").innerText = name;
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerText = "Wind Speed: " + speed + " MPH";
        document.getElementById("temp").innerText = "Temp: " + temp + "°F";
        document.getElementById("description").innerText = "Description: " + description;
    }
};
// weather.fetchWeather();

var cityInput = document.getElementById("city-input");
var searchBtn = document.getElementById("city-button");
var cityList = document.getElementById("city-list");

// Stores each city when the search button is clicked
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var city = cityInput.value;
    localStorage.setItem("city-input", JSON.stringify(city));
    listBuilder();
    weather.fetchWeather();
    weather.displayWeather();
});

// Pulls city from locl storage and makes a new li element
function listBuilder() {
    var getCity = JSON.parse(localStorage.getItem("city-input"));
    var list = document.createElement("button");
    list.textContent = getCity;
    cityList.appendChild(list);
};




// API CALL TO RUN onClick OF THE SEARCH BUTTON
// PASS USER INPUT INTO URL OF API CALL APPROPRIATELY
// DISPLAY CITY INFO ON DASHBOARD
// CHANGE LI ELEMENTS TO BUTTONS THAT BRING UP PREVIOUSLY SEARCHED CITIES
// REMEMBER ICON FOR WEATHER STATUS
// WHEN DISPLAY CITY UV INDEX, DISPLAY IN COLOR THAT MATCHES NUMBER (FAVORABLE = GREEN, MODERATE = YELLOW, SEVERE = RED) GOOGLE RANGES OF UV INDEX
// WHEN USER CLICKS CITY IN SAVE AREA, PASS CITY INTO API CALL AND DISPLAY INFO FROM THAT CITY AGAIN

// HINT
// ABSTRACT API CALL TO A FUNCTION WITH A CITY AS THE PARAMETER TO BE PASSED INTO THE URL
// Make callback function into named function and use it when re-searching the city