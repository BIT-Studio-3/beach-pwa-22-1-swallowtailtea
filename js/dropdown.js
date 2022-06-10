function dropFunction(){
    document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(event){
  if (!event.target.matches('.dropbtn'))
  {
  document.querySelector(".dropdown-content").classList.remove('show');
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