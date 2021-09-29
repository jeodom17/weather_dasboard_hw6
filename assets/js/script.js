

//global vars for current and forecast data:
var currentData;
var forecastArray = [];

var searchHistory = [];

function GetInfo(cityName) {
  const currrentCity= document.getElementById('currentCity');
  currentCity.innerText = cityName;

  //add searched city to history/localStorage
  handleSaveLocalStorage(cityName);


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid=bc2b73a421d210492be3fafaed889abe')
.then(response => response.json())
.then(data =>{
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=bc2b73a421d210492be3fafaed889abe`)
  .then(response2 => response2.json())
  .then(data2 => {
    currentData = data2.current;
    forecastArray = data2.daily;

    //// display current data
    console.log("CURRENT")
  console.log(currentData)
  var todayDate = new Date(currentData.dt * 1000);
  console.log("today:::", todayDate)

  //set temp for current 
  document.getElementById('currentDate').innerText = "Date: " + todayDate.toLocaleDateString();
  document.getElementById("currentTemp").innerText = "Temp: " + currentData.temp;
  document.getElementById("currentWind").innerText = "Wind: " + currentData.wind_speed;
  document.getElementById("currentUv").innerText = "UV Index: " + currentData.uvi;
  
  
  //////////
  //// Display forecast data
  ///// "tomorrow" is index position 1 (0 is today)
  console.log("FORECAST")
  console.log(forecastArray)

  //set day 1 (tomorrow) date and temp
  var card1Date = new Date(forecastArray[1].dt * 1000);
  document.querySelector(".card1Date").innerText = card1Date.toLocaleDateString();
  document.querySelector("#day1Temp").innerText = "Temp: " + forecastArray[1].temp.day;
  document.querySelector("#day1Wind").innerText = "Wind: " + forecastArray[1].temp.day;
  document.querySelector("#day1Humidity").innerText = "Humidity: " + forecastArray[1].temp.day;

  //set day 2 date and temp
  var card2Date = new Date(forecastArray[2].dt * 1000);
  document.querySelector(".card2Date").innerText = card2Date.toLocaleDateString();
  document.querySelector("#day2Temp").innerText = "Temp: " + forecastArray[2].temp.day;
  document.querySelector("#day2Wind").innerText = "Wind: " + forecastArray[2].temp.day;
  document.querySelector("#day2Humidity").innerText = "Humidity: " + forecastArray[2].temp.day;

  //set day 3 date and temp
  var card3Date = new Date(forecastArray[3].dt * 1000);
  document.querySelector(".card3Date").innerText = card3Date.toLocaleDateString();
  document.querySelector("#day3Temp").innerText = "Temp: " + forecastArray[3].temp.day;
  document.querySelector("#day3Wind").innerText = "Wind: " + forecastArray[3].temp.day;
  document.querySelector("#day3Humidity").innerText = "Humidity: " + forecastArray[3].temp.day;

  //set day 4 date and temp
  var card4Date = new Date(forecastArray[4].dt * 1000);
  document.querySelector(".card4Date").innerText = card4Date.toLocaleDateString();
  document.querySelector("#day4Temp").innerText = "Temp: " + forecastArray[4].temp.day;
  document.querySelector("#day4Wind").innerText = "Wind: " + forecastArray[4].temp.day;
  document.querySelector("#day4Humidity").innerText = "Humidity: " + forecastArray[4].temp.day;


  //set day 5 date and temp
  var card5Date = new Date(forecastArray[5].dt * 1000);
  document.querySelector(".card5Date").innerText = card5Date.toLocaleDateString();
  document.querySelector("#day5Temp").innerText = "Temp: " + forecastArray[5].temp.day;
  document.querySelector("#day5Wind").innerText = "Wind: " + forecastArray[5].temp.day;
  document.querySelector("#day5Humidity").innerText = "Humidity: " + forecastArray[5].temp.day;

  })



})



}
function handleLoadLocalStorage() {
  searchHistory = JSON.parse(localStorage.getItem("weather-history"));
  var historyDiv = document.getElementById("search-history-buttons");
  historyDiv.addEventListener('click', handleSearchFromSaved);

  for (let i = 0; i < searchHistory.length; i++ ) {
    let newBtn = document.createElement("button");
    newBtn.innerText = searchHistory[i];
    historyDiv.append(newBtn)
  }
  console.log(searchHistory);
}

function handleSaveLocalStorage(searchedCity) {
  searchHistory.unshift(searchedCity)
  var newHistory = JSON.stringify(searchHistory)
  localStorage.setItem("weather-history", newHistory);
}

function handleSearchFromSaved(event){
  GetInfo(event.target.innerText);
}

function handleSearchFromQuery(){
  const cityName= document.getElementById('search');
  GetInfo(cityName.value)
}


document.getElementById("searchBtn").addEventListener('click', handleSearchFromQuery);


//run on apllication load
handleLoadLocalStorage();
