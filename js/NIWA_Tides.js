// Query parameters: lat + long + numberOfDays (default 7) + startdate (default: today) + datum (default lowest astronomical tide) + NIWA key
const NIWA_URL = "https://api.niwa.co.nz/tides/chart.png?"
const NIWA_KEY = "&apikey=F8g5zg4vEey0dOJriP6XxU5o1RVbgeW3";
const DAYS = 3;
const STARTDATE = "2022-05-27";

let body = document.querySelector("body");
// all coordinates have been converted from WSD84 to NZGD1949
let locations = Array(
    // buildLocationObject("Carey's Bay", -45.809, 170.628),
    // buildLocationObject("Waikouaiti", -45.624, 170.668),
    // buildLocationObject("White Island", -45.935, 170.499),
    // buildLocationObject("Wickliffe Bay", -45.834, 170.740),
    // buildLocationObject("The Cove", -45.882, 170.550), // testing another location on the Peninsula, this returns roughly the same spot but further out in the harbour
    // buildLocationObject("Macandrew Bay", -45.871, 170.598), // testing another location on the Peninsula
    // buildLocationObject("Mt. Cargill", -45.803, 170.577), // testing dry land, this returns tides for Sawyer's bay
    // buildLocationObject("Purakaunui Inlet", -45.759, 170.620), // testing an inlet, this returns Purakaunui Bay
    // buildLocationObject("Port of Lyttelton", -43.606, 172.720), // testing another harbour, all good
    buildLocationObject("City Wharf", -45.882, 170.508), // testing how far into the harbour is accepted, this is valid
    buildLocationObject("Port Chalmers", -45.818, 170.621) 
);

function buildLocationObject(locationName, lat, long)
{
    let locationObject = {name: locationName, latLong: `lat=${lat}&long=${long}`};
    console.log(`name:${locationObject.name} lat-long:${locationObject.latLong}`);
    return locationObject;
}

//interpolate the url, coordinates, number of days, and key into a string
function buildURL(latLong, startdate = STARTDATE, days = DAYS)
{
    let urlQuery = `${NIWA_URL}${latLong}&numberOfDays=${days}&startDate=${startdate}${NIWA_KEY}`;
    console.log(urlQuery);
    return urlQuery;
}

// build simple HTML elements to display the API results
function buildChartDiv(locationName, URL)
{
    let chartDiv = document.createElement("div");

    let locationHeading = document.createElement("h2")
    locationHeading.innerText = locationName;

    let chartImage = document.createElement("img");
    chartImage.src = URL;

    chartDiv.append(locationHeading, chartImage);
    body.append(chartDiv);
}

locations.forEach(location => buildChartDiv(location.name, buildURL(location.latLong)));
