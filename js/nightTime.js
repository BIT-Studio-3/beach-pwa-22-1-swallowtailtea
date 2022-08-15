
let defaultAmTime = '06:00';
let defaultPmTime = '18:00';
function adjustTime(){

  /* let amTimeLabel = document.createElement("label");
   amTimeLabel.classList.add("change_time");

   let amTimeControl = document.createElement("input");
   input.setAttribute('id', 'amTime');
   input.setAttribute('type', 'time');*/
   let amTime = document.getElementById("amTime");
   let pmTime = document.getElementById("pmTime");

   //Morning Time
   let amTimeLabel = document.getElementById("amTime");
   amTimeLabel.setAttribute('value', defaultAmTime);
   amTimeLabel.setAttribute('min', '04:00');
   amTimeLabel.setAttribute('max', '10:00');
   document.querySelector('body').append("amTimeLabel");

   //Night Time
   let pmTimeLabel = document.getElementById("pmTime");
   pmTimeLabel.setAttribute('value', defaultPmTime);
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

let amTime = '06:00';
let pmTime = '18:00';

function amDropDown() {
   document.getElementById("amDropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     let dropdowns = document.getElementsByClassName("dropDownContent");
     for (let i = 0; i < dropdowns.length; i++) {
       let openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }
 function pmDropDown() {
   document.getElementById("pmDropdown").classList.toggle("show");
 }
 
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     let dropdowns = document.getElementsByClassName("dropDownContent");
     for (let i = 0; i < dropdowns.length; i++) {
       let openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

amDropDown();
pmDropDown();
//adjustTime();