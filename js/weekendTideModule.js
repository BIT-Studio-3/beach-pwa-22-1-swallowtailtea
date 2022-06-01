
// build simple HTML elements to display a tidechart
function buildChartDiv(locationObject, URL)
{
    let body = document.querySelector("body");
    let chartDiv = document.createElement("div");
    chartDiv.classList.add("chartDiv");

    let locationHeading = document.createElement("h2")
    locationHeading.classList.add("locationHeading");
    locationHeading.innerText = locationObject.name;

    let chartImage = document.createElement("img");
    chartImage.src = URL;

    chartDiv.append(locationHeading, chartImage);
    body.append(chartDiv);
}

// display the tide chart for every location
locations.forEach(location => buildChartDiv(location, buildNIWA_URL(NIWA_PATHS.chart_png, location, 7)));
