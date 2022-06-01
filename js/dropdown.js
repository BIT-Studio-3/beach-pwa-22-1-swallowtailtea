function dropFunction(){
    document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}


function selectLocation1() {
  document.getElementById("select").innerHTML = "Marina";
}

function selectLocation2() {
  document.getElementById("select").innerHTML = "Vauxhall Yacht Club";
}

function selectLocation3() {
  document.getElementById("select").innerHTML = "Port Chalmers";
}

function selectLocation4() {
  document.getElementById("select").innerHTML = "Broad Bay Boating";
}

function selectLocation5() {
  document.getElementById("select").innerHTML = "Tairoa Head";
}