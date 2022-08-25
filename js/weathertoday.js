const lat = -45.874;
const lon=170.503

fetch("http://api.weatherapi.com/v1/forecast.json?key=0b5fdfe1f70b42f6946232056220106&q=Dunedin&days=7&aqi=no&alerts=yes")
.then(res => res.json())
.then(data => { 
    console.log(data.current);
    Gust = ("Wind gust is " + data.current.gust_kph + " kph");
    Current_Temp = ("The current temp is " + data.current.temp_c + "C");
    Feels_Like = ("It feels like " + data.current.feelslike_c + "C");
    Line_Of_Site =("You have a line of site of " + data.current.vis_km + "km");
    Wind_Angle = ("The wind is coming in at a " + data.current.wind_degree + " degree angle")
    Wind_Direction = ("The wind direction is " + data.current.wind_dir)
    Wind_Speed = ("The wind speed is " + data.current.wind_kph + " kph")
    Cloud_Coverage = ("The cloud coverage is " + data.current.cloud + "%")



document.getElementById("Gust").innerHTML = Gust;
document.getElementById("Current Temp").innerHTML = Current_Temp;
document.getElementById("Feels Like").innerHTML = Feels_Like;
document.getElementById("Line Of Site").innerHTML = Line_Of_Site;
document.getElementById("Wind Angle").innerHTML = Wind_Angle;
document.getElementById("Wind Direction").innerHTML = Wind_Direction;
document.getElementById("Wind Speed").innerHTML = Wind_Speed;
document.getElementById("Cloud Coverage").innerHTML = Cloud_Coverage;
})



fetch("https://api.weatherbit.io/v2.0/history/hourly?lat=-45.874&lon=170.503&start_date=2022-08-25&end_date=2022-08-25&tz=local&key=c85da2b1e276414da98bb90531c73e60&include=minutely")
.then(res => res.json())
.then(data => { 
    console.log(data);
 
})