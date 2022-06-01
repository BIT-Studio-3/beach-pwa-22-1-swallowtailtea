//New Javascript trial for getting weather and wind for the website. Fetched and displayed wind which will come in handy to use

const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let grid4 = document.querySelector("#grid4");
let titles = ["Weather", "Feels like", "Wind Speed", "Wind Gust"];




fetch(http://api.weatherapi.com/v1/forecast.json?key=09b796692a9a4c1ca1a31122220106&q=Dunedin&days=7&aqi=no&alerts=no")
.then(res => res.json())
.then(d => { 
    
    console.log(d);
    
    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        grid4.appendChild(div);
    }

    let tempdiv = document.createElement("div");
    tempdiv.innerHTML = temperatureConverter(`${d.main.temp}`)  + " °C";
    grid4.appendChild(tempdiv);

    let feeldiv = document.createElement("div");
    feeldiv.innerHTML = temperatureConverter(`${d.main.feels_like}`) + " °C"; 
    grid4.appendChild(feeldiv);

    let speeddiv = document.createElement("div");
    speeddiv.innerHTML =`${d.wind.speed}` + " m/s";
    grid4.appendChild(speeddiv);
   
    let gustdiv = document.createElement("div");
    gustdiv.innerHTML =`${d.wind.gust}` + " m/s";
    grid4.appendChild(gustdiv);
   
   console.log(tempdiv);
});


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    valNum = valNum- 273.15.toFixed(2); ;
    return valNum;
  }