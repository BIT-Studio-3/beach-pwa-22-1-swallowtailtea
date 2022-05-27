console.log("hello locations")

// these are the locations requested by the client
let marina = buildLocationObject("Marina", buildLatLong(-45.87161, 170.52805), buildLatLong(-45.87323533,170.52796092));
let vauxhall = buildLocationObject("Vauxhall Yacht Club", buildLatLong(-45.88478, 170.52489), buildLatLong(-45.88640507,170.52480075));
let portChalmers = buildLocationObject("Port Chalmers", buildLatLong(-45.81590, 170.62135), buildLatLong(-45.81752693,170.62126097));
let broadBay = buildLocationObject("Broad Bay Boating", buildLatLong(-45.848117,170.620410), buildLatLong(-45.84974329,170.62032050));
let tairoaHead = buildLocationObject("Tairoa Head", buildLatLong(-45.77281,170.72846), buildLatLong(-45.77443858,170.72837034));

let locations = [marina, vauxhall, portChalmers, broadBay, tairoaHead];

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