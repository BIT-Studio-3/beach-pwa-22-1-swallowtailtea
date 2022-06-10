const options = { 
    method: 'GET', 
    headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '1965ab000emsh3a33d23ec75627ep1864f5jsn8bc810fd95ac' } };

let body = document.querySelector("body");
let weekendGrid = document.querySelector("#weekendgrid");
let highTemperatureObjects = [];
let lowTemperatureObjects = [];
let windSpeedObjects = [];
let windGustObjects = [];

let titles = ["Date", "Conditions", "Chance of rain", "High", "Low", "Wind Speed", "Wind Gust", "Wind Direction"];

fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-45.874&lon=170.503&key=491ee8537838453b8c0ce3c794e7c455')
.then(response => response.json())
.then(response => 
    
    
    response["data"].filter(day => day.datetime == formatDate(testSaturday(new Date())) || day.datetime == formatDate(testSunday(new Date())))
    .forEach((data, i) => {

        //console.log(data);
        //saturday grid

        

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        weekendGrid.appendChild(div);
    }

    //date that needs to be formatted to say the day

    let datetime = document.createElement("div");
    datetime.innerHTML = `${data.datetime}`;
    weekendGrid.appendChild(datetime);
    
    // weather conditions, like partly cloudy or patchy rain
    let conditions = document.createElement("div");
    conditions.innerHTML = `${data.weather.description}`;
    weekendGrid.appendChild(conditions);

    //chance of precipitation
    let chanceofRain = document.createElement("div");
    chanceofRain.innerHTML = `${data.pop}` + " %";
    weekendGrid.appendChild(chanceofRain);

    // fetching  and appending the high temperature
    let hightempdiv = document.createElement("div");
    highTemperatureObjects.push(buildTemperatureObject(data.max_temp));
    hightempdiv.innerHTML = getTemperatureString(highTemperatureObjects[i]);
    hightempdiv.classList.add("high_temperature");
    weekendGrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowTemperatureObjects.push(buildTemperatureObject(data.min_temp));
    lowtempdiv.innerHTML = getTemperatureString(lowTemperatureObjects[i]);
    lowtempdiv.classList.add("low_temperature");
    weekendGrid.appendChild(lowtempdiv);


    let speeddiv = document.createElement("div");
    windSpeedObjects.push(buildWindObject(data.wind_spd));
    speeddiv.innerHTML = getWindString(windSpeedObjects[i])
    speeddiv.classList.add("wind_speed");
    weekendGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    windGustObjects.push(buildWindObject(data.wind_gust_spd));
    gustdiv.innerHTML = getWindString(windGustObjects[i])
    gustdiv.classList.add("wind_gust");
    weekendGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.wind_cdir}`; 
    weekendGrid.appendChild(windDirection);

    }));




  //converting wind from metres per second to knots
  function windConverter(mpstoKnots) {
    mpstoKnots = parseFloat(mpstoKnots);
    mpstoKnots = mpstoKnots * 1.94384;
      return mpstoKnots;
  }


  //testing out a function that shows the Saturday in console
function testSaturday(date){
    let saturday = date.getDate() - (date.getDay() - 1) + 5;
    return new Date(date.setDate(saturday));
    
}
function testSunday(date){
    let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(sunday));
}

dt = new Date(); 
console.log(testSaturday(dt).toString());
console.log(testSunday(dt).toString());  
function getTemperatureString(temperatureObject)
{
    return (currentTempUnit == "celsius") ? `${roundToOrLess(temperatureObject.celsius, 2)}  °C` : `${roundToOrLess(temperatureObject.fahrenheit, 2)} °F`;
}
function getWindString(windObject)
{
    let windString;
    switch(currentWindUnit)
    {
        case "mps":
            windString = `${roundToOrLess(windObject.mps, 2)} mps`;
            break;
        case "kmph":
            windString = `${roundToOrLess(windObject.kmph, 2)} kmph`;
            break;
        case "knot":
            windString = `${roundToOrLess(windObject.knot, 2)} knots`;
            break;
    }
    return windString;
}
function changeToCurrentUnit(className, weatherArray, stringFunction)
{
    document.querySelectorAll(className).forEach((temp,i) => 
    {
        if(temp != null)
        {
            temp.innerHTML = stringFunction(weatherArray[i]);
        }
    });
}
    
