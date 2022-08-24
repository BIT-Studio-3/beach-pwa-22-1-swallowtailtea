// // const options = { 
// //     method: 'GET', 
// //     headers: { 'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com', 'X-RapidAPI-Key': '1965ab000emsh3a33d23ec75627ep1864f5jsn8bc810fd95ac' } };

// let body = document.querySelector("body");
let arrowGrid = document.querySelector("#arrowgrid");
 let highTideObjects = [];
 let lowTideObjects = [];
 let windSpeedObjects = [];
 let windGustObjects = [];
 let winddirObjects = [];
 let saturday = [];
 let sunday = [];
 let today = [];
 let alldays = [];

let heads = ["Date","Speed", "Gust", "Direction"]
let theads = ["Date", "High", "Low", "Change"]

let hdiv = document.createElement("div");
hdiv.innerHTML = "Wind";
hdiv.classList.add("arrow1");
arrowGrid.append(hdiv);

let tdiv = document.createElement("div");
tdiv.innerHTML = "Tide";
tdiv.classList.add("arrow1");
tidegrid.append(tdiv);


for (let index = 0; index < heads.length; index++) {
    let div = document.createElement("div");
    div.classList.add("arrowgh2");
    div.innerHTML = heads[index];
    arrowGrid.appendChild(div);
}

for (let index = 0; index < theads.length; index++) {
    let div = document.createElement("div");
    div.classList.add("arrowgh2");
    div.innerHTML = theads[index];
    tidegrid.appendChild(div);
}

fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-45.874&lon=170.503&key=c824463538944250bbf1cbe97119b604')
.then(response => response.json())
.then(response =>         
    response["data"].filter(day => day.datetime == formatDate(testSaturday(new Date())) || day.datetime == formatDate(testSunday(new Date())) || day.datetime == getToday())
    .forEach((data, i) => {

    //date that needs to be formatted to say the day

    let datetime = document.createElement("div");
    datetime.innerHTML = reformatDate(data.datetime);
    arrowGrid.appendChild(datetime);


    let speeddiv = document.createElement("div");
    windSpeedObjects.push(buildWindObject(data.wind_spd));
    speeddiv.innerHTML = getWindString(windSpeedObjects[i])
    speeddiv.classList.add("wind_speed");
    arrowGrid.appendChild(speeddiv);

    
    let gustdiv = document.createElement("div");
    windGustObjects.push(buildWindObject(data.wind_gust_spd));
    gustdiv.innerHTML = getWindString(windGustObjects[i]);
    arrowGrid.appendChild(gustdiv);

    let windDirection = document.createElement("div");
    windDirection.innerHTML = `${data.wind_cdir}`; 
    arrowGrid.appendChild(windDirection);

    })
);




fetch(buildNIWA_URL(NIWA_PATHS.data, currentLocation, 31)).then(response => response.json()).then(data =>
    {
        

        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);
        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

        //sorting the daylight hours into each day
        while(tideInfo.length > 1)
        {
            if (tideInfo[index] != null && tideInfo[0].time.substring(0,10) == tideInfo[index].time.substring(0,10))
            {
            index++;
            }
            else
            {
            days.push(tideInfo.splice(0, index));
            index = 0;
            }
        }

        if(tideInfo.length > 0)
        {
            days = days.concat([[tideInfo[0]]]);
        }
        //outputting the data to the webpage
        days.forEach(day =>
        {
            for (let i = 0; i < day.length; i++) {
                if (day[i].time.substring(0,10) == getToday()) {
                    alldays.push(reformatDate(day[i].time.substring(0,10)));

                    today.push(day[i].value)
                }
                if (day[i].time.substring(0,10) == formatDate(testSaturday(new Date())))
                {
                    alldays.push(reformatDate(day[i].time.substring(0,10)));
                    saturday.push(day[i].value)
                }
                if (day[i].time.substring(0,10) == formatDate(testSunday(new Date())))
                {
                    alldays.push(reformatDate(day[i].time.substring(0,10)));
                    sunday.push(day[i].value)
                }      
            }

        });


        let uniquedays = [...new Set(alldays)];

        //todays div
        let tidediv = document.createElement("div");
        tidediv.innerHTML = uniquedays[0];
        tidegrid.appendChild(tidediv); 
        
        let div = document.createElement("div");
        let max = today.max()
        div.innerHTML = max +"m";
        console.log(div)
        tidegrid.appendChild(div);

        let tmindiv = document.createElement("div");
        let min = today.min()
        tmindiv.innerHTML = min +"m";
        tidegrid.appendChild(tmindiv);

        let tcdiv = document.createElement("div");
        let tchange = max - min
        tcdiv.innerHTML = tchange.toFixed(2) +"m";
        tcdiv.classList.add("green");
        tidegrid.appendChild(tcdiv);

        //saturday div
        let satdiv = document.createElement("div");
        satdiv.innerHTML = uniquedays[1];
        tidegrid.appendChild(satdiv); 

        let sdiv = document.createElement("div");
        let smax = saturday.max()
        sdiv.innerHTML = smax +"m";
        tidegrid.appendChild(sdiv);

        let smindiv = document.createElement("div");
        let smin = saturday.min()
        smindiv.innerHTML = smin +"m";
        tidegrid.appendChild(smindiv);

        let satcdiv = document.createElement("div");
        let satchange = smax - smin
        satcdiv.innerHTML = satchange.toFixed(2) +"m";
        satcdiv.classList.add("green");
        tidegrid.appendChild(satcdiv);

        //sunday tide append
        let sundiv = document.createElement("div");
        sundiv.innerHTML = uniquedays[2];
        tidegrid.appendChild(sundiv); 

        let sunmdiv = document.createElement("div");
        let sunmax = sunday.max()
        sunmdiv.innerHTML = sunmax +"m";
        tidegrid.appendChild(sunmdiv);

        let sunmin = document.createElement("div");
        let sumin = sunday.min()
        sunmin.innerHTML = sumin +"m";
        tidegrid.appendChild(sunmin);

        let suchange = document.createElement("div");
        let sundaychange = sunmax - sumin
        suchange.innerHTML = sundaychange.toFixed(2) +"m";
        suchange.classList.add("green");

        tidegrid.appendChild(suchange);

       
    });
    




 //testing out a function that shows the Saturday and Saturday in console
 function testSaturday(date){
    let saturday = date.getDate() - (date.getDay() - 1) + 5;
    return new Date(date.setDate(saturday));
    
}
function testSunday(date){
    let sunday = date.getDate() - (date.getDay() -1) + 6;
    return new Date(date.setDate(sunday));
}

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

Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
    