const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let outlookgrid = document.querySelector("#outlook");
let days = ["Friday", "Saturday", "Sunday", "Monday"];

let titles = ["High Temp", "Low Temp", "Wind Speed", "Wind Gust", "Visibility"];

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dunedin,nz&APPID=a0734a6c8412a878935845b45f197bd6")
.then(res => res.json())
.then(d => { 

    console.log(d);

   

    /*for (let index = 0; index < days.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = days[index];
        outlookgrid.appendChild(div);
    } */
    

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        outlookgrid.appendChild(div);
    }


    

    // fetching  and appending the high temperature
    let hightempdiv = document.createElement("div");
    hightempdiv.innerHTML = temperatureConverter(`${d.main.temp_max}`).toFixed(1)  + " °C";
    outlookgrid.appendChild(hightempdiv);

    // fetching and appending low temperature
    let lowtempdiv = document.createElement("div");
    lowtempdiv.innerHTML = temperatureConverter(`${d.main.temp_min}`).toFixed(1) + " °C"; 
    outlookgrid.appendChild(lowtempdiv);

    //for some reason the max temp and min temp are the same in this api

    let speeddiv = document.createElement("div");
    speeddiv.innerHTML =`${d.wind.speed}` + " m/s";
    outlookgrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML =`${d.wind.gust}` + " m/s";
    outlookgrid.appendChild(gustdiv);

    let visibility = document.createElement("div");
    visibility.innerHTML = `${d.visibility}` + " m";
    outlookgrid.appendChild(visibility);

   console.log(hightempdiv);
   console.log(lowtempdiv);
});


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    valNum = valNum- 273.15 ;
    return valNum;
  } 
