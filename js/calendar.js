//tide calander method
function TideData()
{
    
}

let ul = document.createElement("ul");
document.querySelector("body").append(ul);

fetch(buildNIWA_URL(NIWA_PATHS.data, portChalmers, 30)).then(response => response.json()).then(data =>
    {

        let morning = "06";
        let night = "18";

        data.values.forEach(e => {
            let time = e["time"];
            e["time"].sort((a,b) => {
                if((a.time.substring(11,7) > b.morning) && (b.time.substring(11,7) < b.night))
                  return 1; 
                else if((a.time.substring(11,7) < b.morning) && (b.time.substring(11,7) > b.night))
                 return - 1;
            });

            console.log(e);
            let li = document.createElement("li");
            //li.innerHTML = e["time"];
            li.innerHTML = time;
            ul.append(li);
        });

        //console.log(data.values);
        //console.log(data.time);
    });

//const str = 'Mozilla';

//console.log(str.substring(1, 3));
// expected output: "oz"

//console.log(str.substring(2));
// expected output: "zilla"
