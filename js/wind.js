let sundiv = document.createElement("div");
sundiv.innerHTML = uniquedays[2];
tidegrid.appendChild(sundiv); 

let sunmdiv = document.createElement("div");
let sunmax = sunday.max()
sunmdiv.innerHTML = sunmax;
tidegrid.appendChild(sunmdiv);

let sunmin = document.createElement("div");
let sumin = saturday.min()
sunmin.innerHTML = sumin;
tidegrid.appendChild(sunmin);

let suchange = document.createElement("div");
let sundaychange = sunmax - sunmin
suchange.innerHTML = sundaychange.toFixed(2);
tidegrid.appendChild(suchange);