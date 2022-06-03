const options = { 
    method: 'GET', 
    headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '1965ab000emsh3a33d23ec75627ep1864f5jsn8bc810fd95ac' } };

let body = document.querySelector("body");
let saturdayGrid = document.querySelector("#saturday");

let sundayGrid = document.querySelector("#sunday");


let titles = ["Conditions", "High", "Low", "Wind Speed", "Wind Gust", "Wind Direction"];

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=-45.8755&lon=170.50286', options)
.then(response => response.json())
.then(response => 
    
    
    response["data"].forEach(data => {


        //saturday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        saturdayGrid.appendChild(div);
    }

    
    // weather conditions, like partly cloudy or patchy rain
    let satConditions = document.createElement("div");
    satConditions.innerHTML = `${data.description}`;
    saturdayGrid.appendChild(satConditions);

    // fetching  and appending the high temperature
    let hightempdiv = document.createElement("div");
    hightempdiv.innerHTML = `${data.max_temp}`  + " °C";
    saturdayGrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowtempdiv.innerHTML = `${data.min_temp}` + " °C";
    saturdayGrid.appendChild(lowtempdiv);


    let speeddiv = document.createElement("div");
    speeddiv.innerHTML = windConverter(`${data.wind_spd}`).toFixed(1) + " kts"; 
    saturdayGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML = windConverter(`${data.wind_gust_spd}`). toFixed(1) + " kts";
    saturdayGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.wind_cdir}`; 
    saturdayGrid.appendChild(windDirection);






    //sunday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        sundayGrid.appendChild(div);
    }

    // weather conditions, like partly cloudy or patchy rain
    let sunConditions = document.createElement("div");
    sunConditions.innerHTML = `${data.description}`;
    sundayGrid.appendChild(sunConditions);

    let sundayHigh = document.createElement("div");
    sundayHigh.innerHTML = `${data.max_temp}`  + " °C";
    sundayGrid.appendChild(sundayHigh);

    let sundayLow = document.createElement("div");
    sundayLow.innerHTML = `${data.min_temp}` + " °C";
    sundayGrid.appendChild(sundayLow);

    let sundayWind = document.createElement("div");
    sundayWind.innerHTML = windConverter(`${data.wind_spd}`).toFixed(1) + " kts";
    sundayGrid.appendChild(sundayWind);

    let sundayGust = document.createElement("div");
    sundayGust.innerHTML = windConverter(`${data.wind_gust_spd}`). toFixed(1) + " kts";
    sundayGrid.appendChild(sundayGust);

    let sundayDir = document.createElement("div");
    sundayDir.innerHTML = `${data.wind_cdir}`;
    sundayGrid.appendChild(sundayDir);


//response["data"].filter() filter out the saturday and sunday dates

response["data"].sort((a,b) =>{
//sorting by day/date saturday then sunday
})
    response["data"].splice(4); // just testing the splice method in case I need it but data isn't filtered or sorted yet
    
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
    //let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(saturday));
    
}
    dt = new Date(); 
    console.log(testSaturday(dt).toString()); 

 

