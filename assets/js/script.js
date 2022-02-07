// Starter Code
let weather = {
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=washington+dc&units=imperial&appid=c369f155016b5438a2e3977424bf7b67")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },


    displayWeather: function(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " MPH";
    document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
    document.querySelector(".description").innerText = "Description: " + description;
}
}
weather.fetchWeather();