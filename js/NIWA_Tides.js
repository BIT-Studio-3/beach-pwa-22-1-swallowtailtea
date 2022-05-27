// Query parameters: path + lat + long + numberOfDays (default: 7) + startdate (default: today, format: yyy-mm-dd) + datum (default: LAT) + NIWA key
// Note: NIWA key will not work for serving locally with 11ty. Omit NIWA key from queries if serving locally.
// Please see locations.js for the available locations 

const NIWA_URL = "https://api.niwa.co.nz/tides/"
const NIWA_KEY = "&apikey=F8g5zg4vEey0dOJriP6XxU5o1RVbgeW3";
const NIWA_PATHS = {
    chart_png: "chart.png?",
    chart_svg: "chart.svg?",
    data: "data?",
    data_csv: "data.csv?"
};

// format a date for the NIWA Tides API
function formatDate(myDate)
{
    let month = (myDate.getMonth() + 1).toString();
    if (month.length <= 1)
    {
        month = "0" + month;
    }
    let formattedDate = `${myDate.getFullYear()}-${month}-${myDate.getDate()}`
    return formattedDate;
}

// interpolate the desired path and necessary parameters into a string
function buildURL(path = NIWA_PATHS.data, locationObject = locations[0], days = 1, startdate = formatDate(new Date(Date.now())), datum = "LAT", interval = null)
{
    let lat = locationObject.NZGD1949.latitude;
    let long = locationObject.NZGD1949.longitude;
    let urlQuery = `${NIWA_URL}${path}lat=${lat}&long=${long}&numberOfDays=${days}&startDate=${startdate}&datum=${datum}`;
    if (interval != null && (path === NIWA_PATHS.data || path === NIWA_PATHS.data_csv))
    {
        urlQuery += `&interval=${interval}`;
    }
    console.log(urlQuery);
    return urlQuery;
}

// example query 
fetch(buildURL(NIWA_PATHS.data, portChalmers, 6)).then(response => response.json()).then(data =>
    {
        console.log(data.metadata.height);
    });

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
locations.forEach(location => buildChartDiv(location, buildURL(NIWA_PATHS.chart_png, location, 7)));

