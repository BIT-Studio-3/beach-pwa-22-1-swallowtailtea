//New Javascript trial for getting weather and wind for the website. Fetched and displayed wind which will come in handy to use

const OPEN_URL = "api.openweathermap.org";
const OPEN_KEY = "a0734a6c8412a878935845b45f197bd6";

let body = document.querySelector("body");
let grid4 = document.querySelector("grid4");




fetch("https://api.openweathermap.org/data/2.5/weather?q=Ravensbourne,nz&APPID=a0734a6c8412a878935845b45f197bd6")
.then(res => res.json())
.then(d => { 
    let wind = d["wind"];
    
    let titles = ["Weather", "Feels like", "Wind Speed", "Wind Degrees"];
    for (let index = 0; index < titles.length; index++) {
        let div = document.createElement("div");
        div.innerHTML = titles[index];
        grid4.append(div);
    }

    

// when you want to be a server

    
});