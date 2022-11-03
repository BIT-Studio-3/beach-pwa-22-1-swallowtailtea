// const rotate = [22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247, 270, 292.5, 315, 337.5 ]
// const compassarr = ["NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"] 


// const compRotate = (compass) => {
//     for (let i = 0; i < compass.length; i++) {
//         if (compassarr[i] == compass) {
//             document.querySelector("#weatherarrow").style.transform = `"rotate(${rotate[i]}360deg)"`;
//         }       
//     }
// }

let arrowGrid = document.querySelector("#arrowgrid");
 let highTideObjects = [];
 let lowTideObjects = [];
 let windSpeedsObjects = [];
 let winddirObjects = [];

let heads = ["Tide High", "Tide Low", "Wind Speed", "Direction"]

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
    
