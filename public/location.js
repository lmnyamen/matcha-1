
var x = document.getElementById("demo");
var sav = document.getElementById("sav");
var long = document.getElementById("long");
var lat = document.getElementById("lat");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  console.log("position : "+ position.coords.latitude + position.coords.longitude);
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    long.value = position.coords.longitude;
    lat.value = position.coords.latitude;
    console.log(sav.value);
}
