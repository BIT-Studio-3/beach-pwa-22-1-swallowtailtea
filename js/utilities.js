
const submit = document.getElementById("submit");
const celsius = document.getElementById("celsius");
//const fahrenheit = document.getElementById("fahr");
const kilometers = document.getElementById("kilometers");
const meters = document.getElementById("meters");
let currentTempUnit = (localStorage.currentTempUnit == null) ? "celsius" : localStorage.currentTempUnit;
let currentWindUnit = (localStorage.currentWindUnit == null) ? "mps" : localStorage.currentWindUnit;
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
function kmStoMs(kilometers){
    return kilometers*.36.toFixed(2);
}

//Function to convert Kilometers to knots wind speed
function kilometerToKnots(kilometers){
    return kilometers*.5399.toFixed(2);
}

function mpsToKnots(mps) {
    mps = parseFloat(mps);
    mps = mps * 1.94384;
    return mps;
  }

function buildTemperatureObject(celsiusTemp)
{
    let temperatureObject = 
    {
        celsius: celsiusTemp,
        fahrenheit: celsiusToFah(celsiusTemp)
    };
    return temperatureObject;
}

function buildWindObject(windMps)
{
    let windObject = 
    {
        mps: windMps,
        kmph: windMps * 3.6,
        knot: mpsToKnots(windMps)
    };
    console.log(windObject.knot);
    return windObject;
}

function setCurrentUnit(storageKey, desiredUnit)
{
    localStorage.setItem(storageKey, desiredUnit);
    currentTempUnit = localStorage.currentTempUnit;
    currentWindUnit = localStorage.currentWindUnit;
    changeToCurrentUnit(".high_temperature", highTemperatureObjects, getTemperatureString);
    changeToCurrentUnit(".low_temperature", lowTemperatureObjects, getTemperatureString);
    changeToCurrentUnit(".wind_speed", windSpeedObjects, getWindString);
    changeToCurrentUnit(".wind_gust", windGustObjects, getWindString);
}

function roundToOrLess(myNumber, roundTo)  
{
  return parseFloat(myNumber.toFixed(roundTo));
}