/* const lat = -45.874;
const lon = 170.503; */

var x = document.getElementById("lat and long");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;

  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city = data.city;
      country = data.countryName;

      location = country +" "+ city
      document.getElementById("Location").innerHTML = location ;

      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=0b5fdfe1f70b42f6946232056220106&q=${city}&days=7&aqi=no&alerts=yes`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.current);
          Gust = "Wind gust is " + data.current.gust_kph + " kph";
          Current_Temp = "The current temp is " + data.current.temp_c + "C";
          Feels_Like = "It feels like " + data.current.feelslike_c + "C";
          Line_Of_Site =
            "You have a line of site of " + data.current.vis_km + "km";
          Wind_Angle =
            "The wind is coming in at a " +
            data.current.wind_degree +
            " degree angle";
          Wind_Direction = "The wind direction is " + data.current.wind_dir;
          Wind_Speed = "The wind speed is " + data.current.wind_kph + " kph";
          Cloud_Coverage = "The cloud coverage is " + data.current.cloud + "%";

          document.getElementById("Gust").innerHTML = Gust;
          document.getElementById("Current Temp").innerHTML = Current_Temp;
          document.getElementById("Feels Like").innerHTML = Feels_Like;
          document.getElementById("Line Of Site").innerHTML = Line_Of_Site;
          document.getElementById("Wind Angle").innerHTML = Wind_Angle;
          document.getElementById("Wind Direction").innerHTML = Wind_Direction;
          document.getElementById("Wind Speed").innerHTML = Wind_Speed;
          document.getElementById("Cloud Coverage").innerHTML = Cloud_Coverage;
          
        });
    });
}
