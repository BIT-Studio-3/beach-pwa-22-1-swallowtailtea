const options = { 
    method: 'GET', 
    headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '1965ab000emsh3a33d23ec75627ep1864f5jsn8bc810fd95ac' } };

let body = document.querySelector("body");
let weekendGrid = document.querySelector("#weekendgrid");



let titles = ["Date", "Conditions", "Chance of rain", "High", "Low", "Wind Speed", "Wind Gust", "Wind Direction"];

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=-45.8755&lon=170.50286', options)
.then(response => response.json())
.then(response => 
    
    
    response["data"].forEach(data => {

        console.log(data);
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
    hightempdiv.innerHTML = `${data.max_temp}`  + " °C";
    weekendGrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowtempdiv.innerHTML = `${data.min_temp}` + " °C";
    weekendGrid.appendChild(lowtempdiv);


    let speeddiv = document.createElement("div");
    speeddiv.innerHTML = windConverter(`${data.wind_spd}`).toFixed(1) + " kts"; 
    weekendGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML = windConverter(`${data.wind_gust_spd}`). toFixed(1) + " kts";
    weekendGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.wind_cdir}`; 
    weekendGrid.appendChild(windDirection);




    response["data"].filter(day => day.datetime == formatDate(testSaturday(new Date())) || day.datetime == formatDate(testSunday(new Date())))
    //filtering out only the upcoming weekend dates


    }).console.log(response)).catch(err => console.error(err))




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