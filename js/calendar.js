//tide calander method
function TideData()
{
    
}

let ul = document.createElement("ul");
document.querySelector("body").append(ul);

fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 30)).then(response => response.json()).then(data =>
{
    let tideInfo = data.values;
    let filtered = tideInfo.filter(tideInfo => (tideInfo.time.substring(11,13) >= 6) && (tideInfo.time.substring(11,13) <= 18));

    let days = [];
    let index = 1;
    while(tideInfo.length > 1)
    {
    if (tideInfo[0].time.substring(0,10) == tideInfo[index].time.substring(0,10))
    {
    index++;
    }
    else
    {
    days.push(tideInfo.splice(0, index));
    index = 0;
    }
    }
    days = days.concat(tideInfo);
    console.log(days);
    console.log(tideInfo)
    console.log(index)
    
    filtered.forEach(e => {
        let li = document.createElement("li");
        li.innerHTML = e.time;
        ul.append(li);
    });
});


