const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//const body = document.querySelector("body");

// build simple HTML elements to display a tidechart
function buildTideModule(location, requestedDays)
{
    
    let tideModule = document.createElement("div");
    tideModule.classList.add("tide_module");
    

    let locationHeading = document.createElement("h1");
    let locationSpan = document.createElement("span");
    locationHeading.innerText = "Tide Charts -";
    locationSpan.innerText = location.name;
    locationHeading.append(locationSpan);

    tideModule.append(locationHeading);

    let chartContainer = document.createElement("div");
    chartContainer.classList.add("chart_container");

    requestedDays.forEach(day => 
    {
        let dayHeading = document.createElement("h2");
        dayHeading.innerText = dayNames[day];
        let chartDiv = buildChartDiv(buildNIWA_URL(NIWA_PATHS.chart_png, location, 1, formatDate(nextDay(day))));
        chartDiv.prepend(dayHeading);
        chartContainer.append(chartDiv);
    });

    tideModule.append(chartContainer);
    body.append(tideModule);
}

function nextDay(x){
    var now = new Date();    
    now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
    return now;
}

function buildChartDiv(URL)
{
    let chartDiv = document.createElement("div");
    chartDiv.classList.add("chart_div");

    let chartImage = document.createElement("img");
    chartImage.src = URL;

    chartDiv.append(chartImage);

    return chartDiv;
}

let weekendDays = [6, 0];
buildTideModule(currentLocation, weekendDays);

