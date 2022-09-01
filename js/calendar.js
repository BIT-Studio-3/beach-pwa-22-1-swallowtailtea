/*
document.querySelector("#calendarHeading").innerText += ` ${currentLocation.name}`;

//tide calander method
function tide_Calendar()
{

    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, currentLocation, 31)).then(response => response.json()).then(data =>
    {

        console.log(data);
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
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            console.log(dayHeading);'[-p0i98'
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";
                    console.log(timeHeading);
                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}


tide_Calendar(currentLocation); */

//new calendar


let calendar = document.querySelector(".calendar");

let month = document.createElement("div");

let today = new Date();
const month_name = today.toLocaleDateString('default', { month: 'long'});
month.innerHTML = month_name;
month.classList.add("div_month");

let inner_grid = document.createElement("div");
inner_grid.classList.add("inner_grid");

let todayDate = document.createElement("div");
const day = today.getDate();
todayDate.innerHTML = day;
todayDate.classList.add("today_date");

calendar.append(month,inner_grid);

fetch(buildNIWA_URL(NIWA_PATHS.data, currentLocation, 31))
.then(response => response.json())
.then(data => {
    let lowtidedata = document.createElement("div");
    let hightidedata = document.createElement("div");
    lowtidedata.classList.add("lowtidedata");

    let wantedData = data.values
    wantedData.splice(0,2)
    wantedData.splice(116)
    let lowHigh = wantedData.filter(x =>{
        let wTime = new Date(x.time).getUTCHours()
        return wTime >= 6 && wTime <= 18
    })
    console.log(lowHigh)
    console.log(data.values);
    for(let i = 1; i <= 31; i++)
    {
        let square2 = document.createElement("div");
        let square = document.createElement("div");
        let tidedata1 = document.createElement("div");
        let tidedata2 = document.createElement("div");
        let tidedata1Full = document.createElement("div");
        let tidedata2Full = document.createElement("div");
        let monthNum = document.createElement("div");
        tidedata1.classList.add("tidedata");
        tidedata2.classList.add("tidedata");
        tidedata1Full.classList.add("tidedata1Full");
        tidedata2Full.classList.add("tidedata2Full");
        square2.classList.add("square2");
        square.classList.add("square");
        monthNum.classList.add("monthNum");
        monthNum.innerHTML = `${i}`;
        //square.innerHTML = `${i}`;
        square.innerHTML += `<span></span>
        <span></span>
        <span></span>
        <span></span>`
    lowHigh.forEach(d =>{
    let wDate = new Date(d.time).getUTCDate();
    let wHour = new Date(d.time).getUTCHours();
    wHour = ("0" + wHour).slice(-2);
    let wMintue = new Date(d.time).getUTCMinutes();
    wMintue = ("0" + wHour).slice(-2);
    if(wDate == i+1)
        {
            if(tidedata1.innerHTML == "")
            {
                
                tidedata1.innerHTML = `${wHour}:${wMintue} - ${d.value}m`
                tidedata1Full.innerHTML = `${wHour}:${wMintue}am - ${d.value}m`
            }
            else
            {
                tidedata2.innerHTML = `${wHour}:${wMintue} - ${d.value}m`
                tidedata2Full.innerHTML = `${wHour}:${wMintue}pm - ${d.value}m`
            }
        }
    })

    if(i < day)
    {
        square.classList.add("disabled");
    }
    square2.append(tidedata1Full, tidedata2Full)
    square.append(monthNum,tidedata1,tidedata2, square2);
    inner_grid.append(square);
    }

})
calendar.append(month,inner_grid);