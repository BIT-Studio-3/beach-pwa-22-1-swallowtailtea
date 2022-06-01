const WEATHER_URL = "api.weatherapi.com";
const WEATHER_KEY = "09b796692a9a4c1ca1a31122220106";

let body = document.querySelector("body");
let saturdayGrid = document.querySelector("#saturday");

let sundayGrid = document.querySelector("#sunday");


let titles = ["Conditions", "High", "Low", "Wind Speed", "Wind Gust", "Wind Direction"];

fetch("http://api.weatherapi.com/v1/forecast.json?key=09b796692a9a4c1ca1a31122220106&q=Dunedin&days=7&aqi=no&alerts=no")
.then(res => res.json())
.then(d => { 

    console.log(d);

    //saturday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        saturdayGrid.appendChild(div);
    }

    // weather conditions, like partly cloudy or patchy rain
    let satConditions = document.createElement("div");
    satConditions.innerHTML = `${d.conditions}`;
    saturdayGrid.appendChild(satConditions);

    // fetching  and appending the high temperature
    let hightempdiv = document.createElement("div");
    hightempdiv.innerHTML = `${d.maxtemp_c}`  + " °C";
    saturdayGrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowtempdiv.innerHTML = `${d.mintemp_c}` + " °C";
    saturdayGrid.appendChild(lowtempdiv);


    let speeddiv = document.createElement("div");
    speeddiv.innerHTML = windConverter(`${d.wind_kph}`).toFixed(1) + " kts";
    saturdayGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML = windConverter(`${d.gust_kph}`). toFixed(1) + " kts";
    saturdayGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${d.wind_dir}`;
    saturdayGrid.appendChild(windDirection);






    //sunday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        sundayGrid.appendChild(div);
    }

    // weather conditions, like partly cloudy or patchy rain
    let sunConditions = document.createElement("div");
    sunConditions.innerHTML = `${d.conditions}`;
    sundayGrid.appendChild(sunConditions);

    let sundayHigh = document.createElement("div");
    sundayHigh.innerHTML = `${d.maxtemp_c}`  + " °C";
    sundayGrid.appendChild(sundayHigh);

    let sundayLow = document.createElement("div");
    sundayLow.innerHTML = `${d.mintemp_c}`  + " °C";
    sundayGrid.appendChild(sundayLow);

    let sundayWind = document.createElement("div");
    sundayWind.innerHTML = windConverter(`${d.wind_kph}`).toFixed(1) + " kts";
    sundayGrid.appendChild(sundayWind);

    let sundayGust = document.createElement("div");
    sundayGust.innerHTML = windConverter(`${d.gust_kph}`). toFixed(1) + " kts";
    sundayGrid.appendChild(sundayGust);

    let sundayDir = document.createElement("div");
    sundayDir.innerHTML = `${d.wind_dir}`;
    sundayGrid.appendChild(sundayDir);

});



  //converting wind from metres per second to knots
  function windConverter(kphtoKnots) {
      kphtoKnots = parseFloat(kphtoKnots);
      kphtoKnots = kphtoKnots * 0.539957;
      return kphtoKnots;
  }


  //testing out a function that shows the Saturday in console
function testSaturday(date){
    let saturday = date.getDate() - (date.getDay() - 1) + 5;
    //let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(saturday));
    
}
    dt = new Date(); 
    console.log(testSaturday(dt).toString());

 

