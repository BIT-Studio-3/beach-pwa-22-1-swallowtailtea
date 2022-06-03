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

locations.forEach(location =>
  {
  let locationLink = document.createElement("a");
  locationLink.href = "#" + location.name.split(" ").join("");
  locationLink.innerHTML = location.name;
  locationLink.onclick = _ =>
  {
  document.querySelector("#select").innerHTML = location.name;
  }
  document.querySelector("#Dropdown").append(locationLink);
  });