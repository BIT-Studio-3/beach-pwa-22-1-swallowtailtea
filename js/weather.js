//New Javascript trial for getting weather and wind for the website. Fetched and displayed wind which will come in handy to use

const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let grid1 = document.querySelector("grid4");


fetch("https://api.openweathermap.org/data/2.5/weather?q=Ravensbourne,nz&APPID=a0734a6c8412a878935845b45f197bd6")
.then(res => res.json())
.then(d => { 
    let wind = d["wind"];
    let div = document.createElement("div");


    console.log(wind);
});