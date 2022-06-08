//tide calander method
function TideData()
{
    
}

let ul = document.createElement("ul");
document.querySelector("body").append(ul);

fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 30)).then(response => response.json()).then(data =>
{

    // Adons had a big hand in helping me write this
    let tideInfo = data.values;

    let allTides = []

    let newDate = 0;

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
        let li = document.createElement("li");

        li.innerHTML = `<b>${v[0].toDateString()}<br/>`;

        v.forEach(time => {
            li.innerHTML += time.getHours() + "<br/>";
        })

        ul.append(li);
    })

   // console.log(allTides);


  //  let filtered = tideInfo.filter(tideInfo => (tideInfo.time.substring(11,13) >= 6) && (tideInfo.time.substring(11,13) <= 18));

    // let days = [];
    // let index = 1;
    // while(tideInfo.length > 1)
    // {
    // if (tideInfo[0].time.substring(0,10) == tideInfo[index].time.substring(0,10))
    // {
    // index++;
    // }
    // else
    // {
    // days.push(tideInfo.splice(0, index));
    // index = 0;
    // }
    // }
    // days = days.concat(tideInfo);

    
    
    /*filtered.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e.time;
        ul.append(li);
    });*/
});


