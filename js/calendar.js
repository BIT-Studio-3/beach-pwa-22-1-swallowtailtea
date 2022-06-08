//tide calander method
function TideData()
{
    
}

let ul = document.createElement("ul");
document.querySelector("body").append(ul);

fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 30)).then(response => response.json()).then(data =>
{

    let tideInfo = data.values;
    let allTides = []
    
    let newDate = 0;

    //let filtered = tideInfo.filter(tideInfo => (tideInfo.time.substring(11,13) >= 6) && (tideInfo.time.substring(11,13) <= 18));

    tideInfo.forEach((tide,i) => {

        let time = tide.time.replace("Z","")
        let ms = Date.parse(time);
        let date = new Date(ms);
        let key = `${newDate}${date.toDateString().replaceAll(" ", "")}`;

        if(allTides[key]){
            allTides[key].push(date);
        }
        else{
            newDate++;
            let key = `${newDate}${date.toDateString().replaceAll(" ", "")}`;
            allTides[key] = [date];        
        }
    })

    Object.entries(allTides).forEach(([k,v]) => {
        console.log(allTides);
        let li = document.createElement("li");
        li.innerHTML = `<b>${v[0].toDateString()}<br/>`;
        v.forEach(time => {
            
            if((time.getHours() >= 6) && (time.getHours() <=18)){
                console.log(time)
                li.innerHTML += (`Time ${time.getHours()} : ${time.getMinutes()} || Tide Height ${time.values}  "<br/>"`);
            }
        })
        
        ul.append(li);
    })

});


