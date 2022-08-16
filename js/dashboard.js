// // const options = { 
// //     method: 'GET', 
// //     headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '1965ab000emsh3a33d23ec75627ep1864f5jsn8bc810fd95ac' } };

// let body = document.querySelector("body");
let arrowGrid = document.querySelector("#arrowgrid");
 let highTideObjects = [];
 let lowTideObjects = [];
 let windSpeedsObjects = [];
 let winddirObjects = [];

let heads = ["Tide High", "Tide Low", "Wind Speed", "Wind Dir"]

for (let index = 0; index < heads.length; index++) {
    let div = document.createElement("div");
    div.innerHTML = heads[index];
    arrowGrid.appendChild(div);
}

fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-45.874&lon=170.503&key=2f9b7e299e6e464c990c58f364cf96f9')
.then(response => response.json())
.then(response =>         
    response["data"].filter(day => day.datetime == formatDate(testSaturday(new Date())) || day.datetime == formatDate(testSunday(new Date())) || day.datetime == getToday())
    .forEach((data, i) => {


    let speeddiv = document.createElement("div");
    windSpeedObjects.push(buildWindObject(data.wind_spd));
    speeddiv.innerHTML = getWindString(windSpeedObjects[i])
    speeddiv.classList.add("wind_speed");
    arrowGrid.appendChild(speeddiv);


    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.wind_cdir}`; 
    arrowGrid.appendChild(windDirection);
    

    }));


 //testing out a function that shows the Saturday and Saturday in console
 function testSaturday(date){
    let saturday = date.getDate() - (date.getDay() - 1) + 5;
    return new Date(date.setDate(saturday));
    
}
function testSunday(date){
    let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(sunday));
}
    dt = new Date(); 
    //console.log(testSaturday(dt).toDateString().substring(0,11)); //outputs Sat Jun 18 
    //console.log(testSunday(dt).toDateString().substring(0,11));  //outputs Sun Jun 19

function getToday() {
    const today = new Date();
    today.setDate(today.getDate() ); 
    num = today.getDate();
    if (num < 10) num = "0" + num;
    return `${today.getFullYear()}-0${today.getMonth() + 1}-${num}`;
}



    function reformatDate(weatherBitDate) // ie "2022-06-14"
    {
        let day = weatherBitDate.substring(8,10);
        let month = weatherBitDate.substring(5,7) - 1; // added the -1 since without its output was July
        let year = weatherBitDate.substring(0,4);
        date = new Date(year, month, day);
        return date.toDateString().substring(0,10);
    }
   

    
  //converting wind from metres per second to knots
  function windConverter(mpstoKnots) {
    mpstoKnots = parseFloat(mpstoKnots);
    mpstoKnots = mpstoKnots * 1.94384;
      return mpstoKnots;
  }


// return a formmatted string for temperature based on the currentTempUnit
function getTemperatureString(temperatureObject)
{
    return (currentTempUnit == "celsius") ? `${roundToOrLess(temperatureObject.celsius, 2)}  °C` : `${roundToOrLess(temperatureObject.fahrenheit, 2)} °F`;
}

// return a formmatted string for temperature based on the currentWindUnit
function getWindString(windObject)
{
    let windString;

    switch(currentWindUnit)
    {
        case "mps":
            windString = `${roundToOrLess(windObject.mps, 2)} mps`;
            break;
        case "kmph":
            windString = `${roundToOrLess(windObject.kmph, 2)} kmph`;
            break;
        case "knot":
            windString = `${roundToOrLess(windObject.knot, 2)} knots`;
            break;
    }   

    return windString;
}

// Update the values in a class with the current unit
function changeToCurrentUnit(className, weatherArray, stringFunction)
{
    document.querySelectorAll(className).forEach((temp,i) => 
    {
        if(temp != null)
        {
            temp.innerHTML = stringFunction(weatherArray[i]);
        }
    });
}
    
