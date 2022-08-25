const lat = -45.874;
const lon=170.503

fetch("http://api.weatherapi.com/v1/forecast.json?key=0b5fdfe1f70b42f6946232056220106&q=Dunedin&days=7&aqi=no&alerts=yes")
.then(res => res.json())
.then(data => { 
    console.log(data.current);
    console.log("wind gust is " + data.current.gust_kph + " kph");
    console.log("The current temp is " + data.current.temp_c + "C");
    console.log("It feels like " + data.current.feelslike_c + "C");
    console.log("You have a line of site of " + data.current.vis_km + "km");
    console.log("The wind is coming in at a " + data.current.wind_degree + " degree angle")
    console.log("The wind direction is " + data.current.wind_dir)
    console.log("The wind speed is " + data.current.wind_kph + " kph")
    console.log("The cloud coverage is " + data.current.cloud + "%")

})