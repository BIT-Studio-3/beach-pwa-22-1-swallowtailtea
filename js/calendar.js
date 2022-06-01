//tide calander method
function TideData()
{
    
}

let ul = document.createElement("ul");
document.querySelector("body").append(ul);

fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 30)).then(response => response.json()).then(data =>
    {

        //data.sort((a,b) => {
        //    if(a.time > b.time)
        //      return -1; 
        //    else if(b.time > a.time)
        //      return 1;
        //  });
        
        data.values.forEach(e => {
            console.log(e);
            let li = document.createElement("li");
            li.innerHTML = e["time"];
            ul.append(li);
        });

        //console.log(data.values);
        //console.log(data.time);
    });