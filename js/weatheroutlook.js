const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let saturdayGrid = document.querySelector("#saturday");

let sundayGrid = document.querySelector("#sunday");


let titles = ["Temperature", "Wind Speed", "Wind Gust", "Visibility"];

fetch("https://api.openweathermap.org/data/2.5/weather?q=Dunedin,nz&APPID=a0734a6c8412a878935845b45f197bd6")
.then(res => res.json())
.then(d => { 

    console.log(d);

    //saturday grid

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
    //if visibility is less than 10km the text goes red as a warning sign
    if(visibility < 10000){
        visibility.innerHTML = convertVis(`${d.visibility}`). toFixed(1) + " km";
        visibility.style.color = "red";
    }
    else{
        visibility.innerHTML = convertVis(`${d.visibility}`). toFixed(1) + " km";
        
    }
    saturdayGrid.appendChild(visibility);

    //sunday grid

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        sundayGrid.appendChild(div);
    }

    let sundayTemp = document.createElement("div");
    sundayTemp.innerHTML = temperatureConverter(`${d.main.temp_max}`).toFixed(1)  + " °C";
    sundayGrid.appendChild(sundayTemp);

    let sundayWind = document.createElement("div");
    sundayWind.innerHTML = windConverter(`${d.wind.speed}`).toFixed(1) + " kts";
    sundayGrid.appendChild(sundayWind);

    let sundayGust = document.createElement("div");
    sundayGust.innerHTML = windConverter(`${d.wind.gust}`). toFixed(1) + " kts";
    sundayGrid.appendChild(sundayGust);

    let sundayVis = document.createElement("div");
    if(visibility < 10000){
        sundayVis.innerHTML = convertVis(`${d.visibility}`). toFixed(1) + " km";
        //sundayVis.style.color = "red";
    }
    else{
        sundayVis.innerHTML = convertVis(`${d.visibility}`). toFixed(1) + " km";
        sundayVis.style.color = "red"; //commented the if statement one to test that this works
    }
    sundayGrid.appendChild(sundayVis);


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

  //testing out a function that shows the Saturday in console
function testSaturday(date){
    let saturday = date.getDate() - (date.getDay() - 1) + 5;
    //let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(saturday));
    
}
    dt = new Date(); 
    console.log(testSaturday(dt).toString());

 

