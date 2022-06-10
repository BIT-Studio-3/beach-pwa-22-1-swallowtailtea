
const submit = document.getElementById("submit");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahr");
const kilometers = document.getElementById("kilometers");
const meters = document.getElementById("meters");


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