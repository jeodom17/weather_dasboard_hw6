// var searchBar = document.getElementById('search');
// var resultBtn = document.getElementById('results');
// const apiKey = 'bc2b73a421d210492be3fafaed889abe';

// const curDate = document.getElementById('currentDate');
// const curIcon = document.getElementById('currentIcon');
// const curTemp = document.getElementById('currentTemp');
// const curWind = document.getElementById('currentWind');
// const curHum = document.getElementById('currentHumidity');
// const curUvi = document.getElementById('currentUv');
// var cities = [];
// var states = [' ','AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];


// function getApiUrl(){
//     var urlRequest = 'https://api.openweathermap.org/data/2.5/onecall?q=Atlanta,us&appid=apiKey'

//     fetch(urlRequest)
//       .then(function (response) {
//           return response.json();
//       })
//       .then (function (data) {
//         console.log(data)
//       })
 
// }


function GetInfo() {
  const cityName= document.getElementById('search');
  const currrentCity= document.getElementById('currentCity');
  currentCity.innerHTML = cityName;


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityName.value+'&appid=bc2b73a421d210492be3fafaed889abe')
.then(response => response.json())
.then(data =>{
    for(i+0;i<5;i++){
      document.getElementById('day' +(i+1)+'Temp').innerHTML ='Temp:' + Number(data.list[i].main.temp -250.71).toFixed(1)+'';     
    }
    for(i+0;i<5;i++){
      document.getElementById('day' +(i+1)+'Wind').innerHTML ='Wind:' + Number(data.list[i].main.temp).toFixed(1)+'';     
    }
    for(i+0;i<5;i++){
      document.getElementById('day' +(i+1)+'Humidity:').innerHTML ='Humidity:' + Number(data.list[i].main.humidity -10).toFixed(1)+'';
    }

})

.catch(err => alert("Something Went Wrong"))
}
const d =new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day){
  if(day +d.getDay() > 6){
    return day +d.getDay()-7;
}
  else{
  return day +d.getDay();
}
}

for(i=0;i<5;i++){
  document.getElementById('day'+(i)).innerHTML = weekday[CheckDay(i)];
}


searchBar.addEventListener('click', GetFiveDay);