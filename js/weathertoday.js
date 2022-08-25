const lat = -45.874;
const lon=170.503

/* fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=c85da2b1e276414da98bb90531c73e60`)
.then(response => response.json())
.then(response => {
    data = response;
    console.log(data);
}); */

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=776bfd753a2eea4a1cef8736d0a7a95d`)
.then(response => {
    data = response;
    console.log(data);
}); 