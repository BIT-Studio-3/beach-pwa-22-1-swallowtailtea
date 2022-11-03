let calendar = document.querySelector(".calendar");

let month = document.createElement("div");

let today = new Date();
const month_name = today.toLocaleDateString("default", { month: "long" });
month.innerHTML = month_name;
month.classList.add("div_month");

let inner_grid = document.createElement("div");
inner_grid.classList.add("inner_grid");

let todayDate = document.createElement("div");
const day = today.getDate();
todayDate.innerHTML = day;
todayDate.classList.add("today_date");

calendar.append(month, inner_grid);

//--------------------------------------------------------------






  
  	





function call() {

  console.log(localStorage.getItem("AM"));
  console.log(localStorage.getItem("PM"));
  // set localStorage AM to tempAM
  var TempAM = localStorage.getItem("AM");
  // set localStorage PM to tempPM
  var TempPM = localStorage.getItem("PM");

  




fetch(buildNIWA_URL(NIWA_PATHS.data, currentLocation, 31))
  .then((response) => response.json())
  .then((data) => {

    let lowtidedata = document.createElement("div");
    let hightidedata = document.createElement("div");
    lowtidedata.classList.add("lowtidedata");
    hightidedata.classList.add("hightidedata");

    let wantedData = data.values;
    wantedData.splice(0, 2);
    wantedData.splice(116);

    let lowHigh = wantedData.filter((x) => {
    let wTime = new Date(x.time).getUTCHours();
    

      return wTime >= TempAM && wTime < TempPM;
      
    });

    for (let i = 1; i <= 31; i++) {
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
        <span></span>`;

      lowHigh.forEach((d) => {
        let wDate = new Date(d.time).getUTCDate();

        let wHour = new Date(d.time).getUTCHours();

        wHour = ("0" + wHour).slice(-2);

        let wMintue = new Date(d.time).getUTCMinutes();

        wMintue = ("0" + wHour).slice(-2);

        if (wDate == i + 1) {
          if (tidedata1.innerHTML == "") {
            tidedata1.innerHTML = `${wHour}:${wMintue} - ${d.value}m`;

            tidedata1Full.innerHTML = `${wHour}:${wMintue}am - ${d.value}m`;
          } else {
            tidedata2.innerHTML = `${wHour}:${wMintue} - ${d.value}m`;

            tidedata2Full.innerHTML = `${wHour}:${wMintue}pm - ${d.value}m`;
          }
        }
      });

      if (i < day) {
        square.classList.add("disabled");
      }
      square2.append(tidedata1Full, tidedata2Full);
      square.append(monthNum, tidedata1, tidedata2, square2);
      inner_grid.append(square);
    }
  });
}
calendar.append(month, inner_grid);
