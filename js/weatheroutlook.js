const options = { 
    method: 'GET', 
    headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '8eb8056ff8msh4ae675fa5ef2a15p16e335jsnf8784edb56a7' } };

let body = document.querySelector("body");
let saturdayGrid = document.querySelector("#saturday");

let sundayGrid = document.querySelector("#sunday");


let titles = ["Conditions", "High", "Low", "Wind Speed", "Wind Gust", "Wind Direction"];

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=-45.8755&lon=170.50286', options)
.then(response => response.json())
.then(response => console.log(response)) 
.catch(err => console.error(err))
.then(data => { 

    data["data"].forEach(forecast => {

        console.log(forecast);

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
    hightempdiv.innerHTML = `${data.app_max_temp}`  + " °C";
    saturdayGrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowtempdiv.innerHTML = `${data.forecast.forecastday[0].day.mintemp_c}` + " °C";
    saturdayGrid.appendChild(lowtempdiv);


    let speeddiv = document.createElement("div");
    speeddiv.innerHTML = windConverter(`${data.forecast.forecastday[0].day.wind_kph}`).toFixed(1) + " kts";
    saturdayGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML = windConverter(`${data.forecast.forecastday[0].day.gust_kph}`). toFixed(1) + " kts";
    saturdayGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.forecast.forecastday[1].day.wind_dir}`; 
    saturdayGrid.appendChild(windDirection);






    //sunday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        sundayGrid.appendChild(div);
    }

    // weather conditions, like partly cloudy or patchy rain
    let sunConditions = document.createElement("div");
    sunConditions.innerHTML = `${data.conditions}`;
    sundayGrid.appendChild(sunConditions);

    let sundayHigh = document.createElement("div");
    sundayHigh.innerHTML = `${data.maxtemp_c}`  + " °C";
    sundayGrid.appendChild(sundayHigh);

    let sundayLow = document.createElement("div");
    sundayLow.innerHTML = `${data.mintemp_c}`  + " °C";
    sundayGrid.appendChild(sundayLow);

    let sundayWind = document.createElement("div");
    sundayWind.innerHTML = windConverter(`${data.wind_kph}`).toFixed(1) + " kts";
    sundayGrid.appendChild(sundayWind);

    let sundayGust = document.createElement("div");
    sundayGust.innerHTML = windConverter(`${data.gust_kph}`). toFixed(1) + " kts";
    sundayGrid.appendChild(sundayGust);

    let sundayDir = document.createElement("div");
    sundayDir.innerHTML = `${data.wind_dir}`;
    sundayGrid.appendChild(sundayDir);
    })
    

    

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

 

