let defaultAmTime = 6;
let defaultPmTime = 6;

let updatedAmTime;
let updatedPmTime;

function adjustTime(){

   let amTimeLabel = document.createElement("label");
   amTimeLabel.classList.add("change_time");
   amTimeLabel.setAttribute('for', 'amTime');
   document.querySelector("body").append("amTimeLabel");

   let amTimeControl = document.createElement("input");
   input.setAttribute('id', 'amTime');
   input.setAttribute('type', 'time');
   amTimeControl = document.querySelector('input[type="time"]');
   amTimeControl.value = defaultAmTime;

     if ((updatedAmTime <=10 && updatedAmTime >= 4) && (updatedPmTime <= 10 && updatedPmTime >= 4)){
        //do something        
     }
     else{
        //produce error
     }
}