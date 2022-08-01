let defaultAmTime = 6;
let defaultPmTime = 6;

let updatedAmTime;
let updatedPmTime;

function adjustTime(){

  /* let amTimeLabel = document.createElement("label");
   amTimeLabel.classList.add("change_time");
   amTimeLabel.setAttribute('for', 'amTime');
   document.querySelector("body").append("amTimeLabel");

   let amTimeControl = document.createElement("input");
   input.setAttribute('id', 'amTime');
   input.setAttribute('type', 'time');*/
   amTimeControl = document.querySelector('input[type="time"]');
   amTimeControl.value = defaultAmTime; 

   let amTime = document.getElementById("amTime");
   let pmTime = document.getElementById("pmTime");
   let amValue = document.getElementById("amValue");
   let pmValue = document.getElementById("pmValue");

   amTime.addEventListener("input", function() {
      amValue.innerText = amTime.value; 
   }, false);
   pmTime.addEventListener("input", function() {
      pmValue.innerText = pmTime.value;  
   }, false);


    /* if ((updatedAmTime <=10 && updatedAmTime >= 4) && (updatedPmTime <= 10 && updatedPmTime >= 4)){
        //do something        
     }
     else{
        //produce error
     } */
}

adjustTime();