const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let saturdayGrid = document.querySelector("#saturday");

//let sundayGrid = document.querySelector("#sunday");


let titles = ["Temperature", "Wind Speed", "Wind Gust", "Visibility"];

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dunedin,nz&APPID=a0734a6c8412a878935845b45f197bd6")
.then(res => res.json())
.then(d => { 

    console.log(d);

   

 
    

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        saturdayGrid.appendChild(div);
    }



    // fetching  and appending the high temperature
    let maxtempdiv = document.createElement("div");
    maxtempdiv.innerHTML = temperatureConverter(`${d.main.temp_max}`).toFixed(1)  + " °C";
    saturdayGrid.appendChild(maxtempdiv);

    //for some reason the max temp and min temp are the same in this api so i just have the max temp

    let speeddiv = document.createElement("div");
    speeddiv.innerHTML = windConverter(`${d.wind.speed}`).toFixed(1) + " kts";
    saturdayGrid.appendChild(speeddiv);

    let gustdiv = document.createElement("div");
    gustdiv.innerHTML = windConverter(`${d.wind.gust}`). toFixed(1) + " kts";
    saturdayGrid.appendChild(gustdiv);

    let visibility = document.createElement("div");
    visibility.innerHTML = convertVis(`${d.visibility}`). toFixed(1) + " km";
    saturdayGrid.appendChild(visibility);


});

//converting temperature from Kelvin to Celsius
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    valNum = valNum- 273.15 ;
    return valNum;
  } 

  //converting wind from metres per second to knots
  function windConverter(mpstoKnots) {
      mpstoKnots = parseFloat(mpstoKnots);
      mpstoKnots = mpstoKnots * 1.94384;
      return mpstoKnots;
  }

  //converting visibility from metres to kilometres
  function convertVis(metresToKilometers) {
    metresToKilometers = parseFloat(metresToKilometers);
    metresToKilometers = metresToKilometers * 0.001;
    return metresToKilometers;
  }

