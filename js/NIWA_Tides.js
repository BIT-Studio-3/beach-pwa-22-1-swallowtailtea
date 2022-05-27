// Query parameters: lat + long + numberOfDays (default 7) + startdate (default: today) + datum (default lowest astronomical tide) + NIWA key
const NIWA_URL = "https://api.niwa.co.nz/tides/"
const NIWA_KEY = "&apikey=F8g5zg4vEey0dOJriP6XxU5o1RVbgeW3";
const NIWA_PATHS = {
    chart_png: "chart.png?",
    chart_svg: "chart.svg?",
    data: "data?",
    data_csv: "data.csv?"
};

// these are the locations requested by the client
let marina = buildLocationObject("Marina", buildLatLong(-45.87161, 170.52805), buildLatLong(-45.87323533,170.52796092));
let vauxhall = buildLocationObject("Vauxhall Yacht Club", buildLatLong(-45.88478, 170.52489), buildLatLong(-45.88640507,170.52480075));
let portChalmers = buildLocationObject("Port Chalmers", buildLatLong(-45.81590, 170.62135), buildLatLong(-45.81752693,170.62126097));
let broadBay = buildLocationObject("Broad Bay Boating", buildLatLong(-45.848117,170.620410), buildLatLong(-45.84974329,170.62032050));
let tairoaHead = buildLocationObject("Tairoa Head", buildLatLong(-45.77281,170.72846), buildLatLong(-45.77443858,170.72837034));

let locations = [marina, vauxhall, portChalmers, broadBay, tairoaHead];

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

// return an object containing latitude and longitude
function buildLatLong(lat, long)
{
    return {latitude: lat, longitude: long};
}

// return an object representing a place with both WGS84 and NZGD1949 coordinates
function buildLocationObject(locationName, latLong_WGS84, latLong_NZGD1949)
{
    let locationObject = {
        name: locationName,
        NZGD1949: latLong_NZGD1949,
        WGS84: latLong_WGS84
    };
    return locationObject;
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

