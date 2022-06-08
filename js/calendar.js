//tide calander method
portChalmersCalendar()
marinaCalendar()
vauxhallCalendar()
broadBayCalendar()
tairoaHeadCalendar()

function portChalmersCalendar()
{

    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 31)).then(response => response.json()).then(data =>
    {


        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);

        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

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

        days.forEach(day =>
        {
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";

                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}


function marinaCalendar()
{
    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, marina, 31)).then(response => response.json()).then(data =>
    {


        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);

        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

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

        days.forEach(day =>
        {
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";

                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}

function vauxhallCalendar()
{
    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, vauxhall, 31)).then(response => response.json()).then(data =>
    {
        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);

        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

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

        days.forEach(day =>
        {
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";

                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}

function broadBayCalendar()
{
    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 31)).then(response => response.json()).then(data =>
    {
        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);

        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

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

        days.forEach(day =>
        {
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";

                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}

function tairoaHeadCalendar()
{
    let ul = document.createElement("ul");
    ul.classList.add("calendar_parent");
    document.querySelector("body").append(ul);

    fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 31)).then(response => response.json()).then(data =>
    {
        let tideInfo = data.values;

        // filter out times not in sunlight hours
        tideInfo = tideInfo.filter(t => t.time.substring(11,13) >= 6 && t.time.substring(11,13) <= 18);

        // create new array of objects containing tide info for one day
        let days = [];
        let index = 1;

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

        days.forEach(day =>
        {
            let dayLi = document.createElement("li");
            ul.classList.add("calendar_child");

            let dayHeading = document.createElement("h3");
            dayHeading.innerText = day[0].time.substring(0,10);
            dayLi.append(dayHeading);
            day.forEach(time =>
                {
                    let timeHeading = document.createElement("div");
                    let tide = time.value;
                    timeHeading.classList.add("tide_listing");
                    timeHeading.innerText = "Time " + time.time.substring(11,16) + " || " + "Tide height " + tide + "M";

                    dayLi.append(timeHeading);
                });
            ul.append(dayLi);
        });
    });
}




