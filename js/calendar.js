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

fetch(
  "https://api.niwa.co.nz/tides/data?lat=-45.878761&long=170.502792&numberOfDays=30&startDate=2022-10-05&interval=10&apikey=xWhbCEFDBpnluLEGBoq5ZtujrcN4ZGRf"
)
  .then((response) => response.json())
  .then((data) => {
    const start = "06:00";
    const end = "18:00";
    let lowtidedata = document.createElement("div");
    let hightidedata = document.createElement("div");
    lowtidedata.classList.add("lowtidedata");

    let wantedData = data.values;
    wantedData.splice(0, 2);
    wantedData.splice(116);
    let lowHigh = wantedData.filter((x) => {
      let wTime = new Date(x.time).getUTCHours();
      return wTime >= 6 && wTime <= 18;
    });

    //-----------------------------------------------

    //-------------------------------------------------

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
      //square.innerHTML = `${i}`;
      square.innerHTML += `<span></span>
        <span></span>
        <span></span>
        <span></span>`;

      for (let i = 0; i < data.values.length; i++) {
        TimeStart = data.values[i].time;
        HightStart = data.values[i].value;
        if (TimeStart.slice(11, 16) == start) {
          Date = TimeStart.slice(0, 10);
          TimeStart = TimeStart.slice(11, 16);
          console.log(
            "Date:",
            Date,
            "Time:",
            TimeStart,
            "Tide Hight",
            HightStart
          );
          tidedata1.innerHTML = `${TimeStart} - ${HightStart}m`;
          tidedata1Full.innerHTML = `${TimeStart}am - ${HightStart}m`;
        }
      }
      {
        for (let i = 0; i < data.values.length; i++) {
          TimeEnd = data.values[i].time;
          HightEnd = data.values[i].value;
          if (TimeEnd.slice(11, 16) == end) {
            Date = TimeEnd.slice(0, 10);
            TimeEnd = TimeEnd.slice(11, 16);
            console.log(
              "Date:",
              Date,
              "Time:",
              TimeEnd,
              "Tide Hight",
              HightEnd
            );
            tidedata2.innerHTML = `${TimeEnd} - ${HightEnd}m`;
            tidedata2Full.innerHTML = `${TimeEnd}pm - ${HightEnd}m`;
          }
        }
      }

      if (i < day) {
        square.classList.add("disabled");
      }
      square2.append(tidedata1Full, tidedata2Full);
      square.append(monthNum, tidedata1, tidedata2, square2);
      inner_grid.append(square);
    }
  });
calendar.append(month, inner_grid);

fetch(
  "https://api.niwa.co.nz/tides/data?lat=-45.878761&long=170.502792&numberOfDays=30&startDate=2022-10-05&interval=10&apikey=xWhbCEFDBpnluLEGBoq5ZtujrcN4ZGRf"
)
  .then((response) => response.json())
  .then((data) => {
    let index = 5;
    /*  console.log(data.values.find((element) => (element = 10)));
    console.log(
      "=============================================================================="
    );
    console.log(data.values.find((element1) => (element1 = 13)));
    console.log(
      "=============================================================================="
    );
    console.log(
      `Using an index of ${index} the item returned is ${data.values.at(index)}`
    );
    console.log(
      "=============================================================================="
    );
    console.log(data);
    console.log(
      "=============================================================================="
    );
    console.log(data.values[2].time); */

    const start = "06:00";
    const end = "18:00";

    //this for loop get the earlest time that the user sets.
    for (let i = 0; i < data.values.length; i++) {
      TimeStart = data.values[i].time;
      HightStart = data.values[i].value;
      if (TimeStart.slice(11, 16) == start) {
        Date = TimeStart.slice(0, 10);
        TimeStart = TimeStart.slice(11, 16);
        //  console.log("Date:", Date, "Time:", TimeStart, "Tide Hight", HightStart);
      }
    }

    for (let i = 0; i < data.values.length; i++) {
      TimeEnd = data.values[i].time;
      HightEnd = data.values[i].value;
      if (TimeEnd.slice(11, 16) == end) {
        Date = TimeEnd.slice(0, 10);
        TimeEnd = TimeEnd.slice(11, 16);
        //console.log("Date:", Date, "Time:", TimeEnd, "Tide Hight", HightEnd);
      }
    }

    //This works for showing the tide at a specific time. at an interval of 10min
    //so the idea is to have a loop function looping over the array to find the data that has the requested time from the user.

    // if the user has entered  "i want to see the tides at 6am to 6pm"
    //the loop will have to look either by using a formula to find what where that requested time is in the array of data.
    // or the loop can look in to the time variable and look at time im and check it to the user input variable.
  });
