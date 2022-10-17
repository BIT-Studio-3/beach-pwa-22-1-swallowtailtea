let calendar = document.querySelector(".calendar");

let month = document.createElement("div");

let today = new Date();
const month_name = today.toLocaleDateString('default', { month: 'long'});
month.innerHTML = month_name;
month.classList.add("div_month");

let inner_grid = document.createElement("div");
inner_grid.classList.add("inner_grid");

let todayDate = document.createElement("div");
const day = today.getDate();
todayDate.innerHTML = day;
todayDate.classList.add("today_date");

calendar.append(month,inner_grid);


var e = document.getElementById("UserTimeAM");
function onChangeAM() {
  var AM = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(AM, text);
  //call();
}
e.onchangeAM = onChangeAM;
onChangeAM();

var e = document.getElementById("UserTimePM");
function onChangePM() {
  var PM = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(PM, text);
 // call();
}
e.onchangePM = onChangePM;
onChangePM();
  /* function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
    //put the data into two variables called AM and PM  
    var AM = formData.get("AM");
    var PM = formData.get("PM");
    //console log the variables to see if they are working  
    console.log(PM); 
    console.log(AM);

  }
  
  document.getElementById("UserTime").addEventListener("submit", function (event) {
    event.preventDefault();
    getData(event.target);
    call();
  }); */
  


//make a funtion called call
//function call(){
  
fetch(
  buildNIWA_URL(NIWA_PATHS.data, currentLocation, 31))

.then(response => response.json())
.then(data => {
    let lowtidedata = document.createElement("div");
    let hightidedata = document.createElement("div");
    lowtidedata.classList.add("lowtidedata");

    let wantedData = data.values
    wantedData.splice(0,2)
    wantedData.splice(116)
    console.log(wantedData)
    let lowHigh = wantedData.filter(x =>{
        let wTime = new Date(x.time).getUTCHours()
        return wTime >= 6 && wTime <= 18
        
      
      
    })
    console.log(lowHigh)
    for(let i = 1; i <= 31; i++)
    {
        let square2 = document.createElement("div");
        let square = document.createElement("div");
        let tidedata1 = document.createElement("div");
        let tidedata2 = document.createElement("div");
        let tidedata1Full = document.createElement("div");
        let tidedata2Full = document.createElement("div");
        let monthNum = document.createElement("div");
        tidedata1.classList.add("tidedata");
        tidedata2.classList.add("tidedata");
        tidedata1Full.classList.add("tidedata1Full");
        tidedata2Full.classList.add("tidedata2Full");
        square2.classList.add("square2");
        square.classList.add("square");
        monthNum.classList.add("monthNum");
        monthNum.innerHTML = `${i}`;
        square.innerHTML += `<span></span>
        <span></span>
        <span></span>
        <span></span>`
    lowHigh.forEach(d =>{
    let wDate = new Date(d.time).getUTCDate();
    let AM_Hour = AM;
    let PM_Hour = PM;
    AM_Hour = ("0" + AM_Hour);

     
    
    if(wDate == i+1)
        {
            if(tidedata1.innerHTML == "")
            {
                
                tidedata1.innerHTML = `${AM_Hour}: - ${d.value}m`
                tidedata1Full.innerHTML = `${AM_Hour}:am - ${d.value}m`
            }
            else
            {
                tidedata2.innerHTML = `${PM_Hour}: - ${d.value}m`
                tidedata2Full.innerHTML = `${PM_Hour}:pm - ${d.value}m`
            }
        }
    })

    if(i < day)
    {
        square.classList.add("disabled");
    }
    square2.append(tidedata1Full, tidedata2Full)
    square.append(monthNum,tidedata1,tidedata2, square2);
    inner_grid.append(square);
    }

})
//}
calendar.append(month,inner_grid);




