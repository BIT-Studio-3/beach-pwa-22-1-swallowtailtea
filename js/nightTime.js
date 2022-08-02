let defaultAmTime = 6;
let defaultPmTime = 6;

let updatedAmTime;
let updatedPmTime;

function adjustTime(){

  /* let amTimeLabel = document.createElement("label");
   amTimeLabel.classList.add("change_time");

   let amTimeControl = document.createElement("input");
   input.setAttribute('id', 'amTime');
   input.setAttribute('type', 'time');*/
   let amTime = document.getElementById("amTime");
   let pmTime = document.getElementById("pmTime");
   let amValue = document.getElementById("amValue");
   let pmValue = document.getElementById("pmValue");

   //Morning Time
   let amTimeLabel = document.getElementById("amTime");
   amTimeLabel.setAttribute('value', '06:00');
   amTimeLabel.setAttribute('min', '04:00');
   amTimeLabel.setAttribute('max', '10:00');
   document.querySelector('body').append("amTimeLabel");

   //Night Time
   let pmTimeLabel = document.getElementById("pmTime");
   pmTimeLabel.setAttribute('value', '18:00');
   pmTimeLabel.setAttribute('min', '16:00');
   pmTimeLabel.setAttribute('max', '22:00');
   document.querySelector('body').append("pmTimeLabel");

   amTime.addEventListener("input", function() {
      amTime.innerText = amTime.value; 
   }, false);

   pmTime.addEventListener("input", function() {
      pmTime.innerText = pmTime.value;  
   }, false);


    /* if ((updatedAmTime <=10 && updatedAmTime >= 4) && (updatedPmTime <= 10 && updatedPmTime >= 4)){
        //do something        
     }
     else{
        //produce error
     } */
}

adjustTime();