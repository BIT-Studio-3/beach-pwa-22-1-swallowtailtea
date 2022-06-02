//New Javascript trial for getting weather and wind for the website. Fetched and displayed wind which will come in handy to use

const OPEN_URL = "http://api.weatherapi.com/v1/forecast.json?key=";
const OPEN_KEY = "09b796692a9a4c1ca1a31122220106&q=Dunedin&days=7&aqi=no&alerts=no";

let body = document.querySelector("body");
let grid4 = document.querySelector("#grid4");
let titles = ["Weather", "Feels like", "Wind Speed", "Wind Gust", "Wind Direction"];




fetch("http://api.weatherapi.com/v1/forecast.json?key=09b796692a9a4c1ca1a31122220106&q=Dunedin&days=7&aqi=no&alerts=no")
.then(res => res.json())
.then(d => { 
    
    console.log(d);
    console.log(d.current.temp_c);
    
    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        grid4.appendChild(div);
    }

    let tempdiv = document.createElement("div");
    tempdiv.innerHTML = `${d.current.temp_c}` + " °C";
    grid4.appendChild(tempdiv);
    
    let feeldiv = document.createElement("div");
    feeldiv.innerHTML = `${d.current.feelslike_c}` + " °C"; 
    grid4.appendChild(feeldiv);

    let speeddiv = document.createElement("div");
    speeddiv.innerHTML =`${d.current.wind_kph}` + " kph";
    grid4.appendChild(speeddiv);
   
    let gustdiv = document.createElement("div");
    gustdiv.innerHTML =`${d.current.gust_kph}` + " kph";
    grid4.appendChild(gustdiv);

    let winddir = document.createElement("div");
    winddir.innerHTML =`${d.current.wind_dir}`;
    grid4.appendChild(winddir);
   
   console.log(tempdiv);
   
});






function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    valNum = valNum- 273.15.toFixed(2); ;
    return valNum;
  }