//New Javascript trial for getting weather and wind for the website. Fetched and displayed wind which will come in handy to use
const radios = document.querySelectorAll('input');
const OPEN_URL = "http://api.weatherapi.com/v1/forecast.json?key=";
const OPEN_KEY = "0b5fdfe1f70b42f6946232056220106";
let current = "";
let feelslike= "";


let body = document.querySelector("body");
let grid4 = document.querySelector("#grid4");
let titles = ["Weather", "Feels like", "Wind Speed", "Wind Gust", "Wind Direction"];




fetch("http://api.weatherapi.com/v1/forecast.json?key=0b5fdfe1f70b42f6946232056220106&q=Dunedin&days=7&aqi=no&alerts=no")
.then(res => res.json())
.then(d => { 

    //console.log(d);
    //console.log(d.current.temp_c);

    current = `${d.current.temp_c}`;
    feelslike= `${d.current.feelslike_c}`;

    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        grid4.appendChild(div);
    }

    let tempdiv = document.createElement("div");
    tempdiv.innerHTML = `${d.current.temp_c}` + " °C";
    tempdiv.classList.add("test");
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
   tempdiv.innerHTML = celsiusToFah(current);

});

const weathdiv = document.getElementsByClassName('test');

// Function used to change the values of the temperatures in the grid

let submit = document.getElementById("submit");

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahr");

console.log(celsius);




submit.addEventListener('click', event => {
    if (celsius.checked) {
        console.log("Celsius");
        }
    if (fahrenheit.checked) {
        console.log("Fahrenheit")
    }

    
    console.log("hellow!");
    
  });





//Function to convert celsius to fahrenheit
function celsiusToFah(celsius) 
{
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit.toFixed(2);
}


//Function to convert fahrenheit to celsius

function FtoC(fahrenheit){
    let celsius = fahrenheit*5/9 -32;
    return celsius.toFixed(2);
}

//Function to convert kelvin to Celsius

function kelvinToCelsius(valNum) {
    valNum = parseFloat(valNum);
    valNum = valNum- 273.15.toFixed(2); ;
    return valNum;
}

//Function to convert Meters per second wind speed to Kilometers
function mStoKms(meters){
    return meters*3.6.toFixed(2);
}


//Function to convert Kilometers wind speed to meters per second
function mStoKms(kilometers){
    return kilometers*.36.toFixed(2);
}

//Function to convert Kilometers to knots wind speed
function kilometerToKnots(kilometers){
    return kilometers*.5399.toFixed(2);
}
