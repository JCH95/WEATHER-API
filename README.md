# WEATHER-API

# Pseudocode
API call for UV index
API call for One day index (long lat of city being searched)
  call uv index api function, pass long lat from city
API call 5 day forecast
  api call function, return weather evry 3 hours
  loop through objects in array, return objects matching time, return 5 days of data
Create html thru js
  Main div for 1 day forecast
  Main div for 5 day forecast
  Main div for holding saved cities
  create vairable set to datat = api response (ie temp, wind, ect)
  text.content = string of temp: concat temp data from api call
  append to parent div (appendChild)
Input box value (city) pass to var api call
Create img html el, pass url in api response containing icon status


LocalStorage
  -Push city into local storage, use for loop to create li elements for ul with cities in it
  -Click event handler for when a city is clicked for extracting text
    -Pass into functions searching for city data
    
Hard code html div containers holding 1 day, 5 day, search, buttons.
